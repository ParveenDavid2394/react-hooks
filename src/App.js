import React, { useReducer } from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassCounterOne from './components/ClassCounterOne';
import ClassMouse from './components/ClassMouse';
import CounterOne from './components/CustomHook/CounterOne';
import CounterTwo from './components/CustomHook/CounterTwo';
import DocTitleOne from './components/CustomHook/DocTitleOne';
import DocTitleTwo from './components/CustomHook/DocTitleTwo';
import UserForm from './components/CustomHook/UserForm';
import DataFetching from './components/DataFetching';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookMouse from './components/HookMouse';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';
import ParentComponent from './components/UseCallBack/ParentComponent';
import UseContext from './components/UseContext';
import UseMemo from './components/UseMemo/UseMemo';
import UseReducer from './components/UseReducer';
import ComponentA from './components/UseReducerAndUseContext/ComponentA';
import ComponentB from './components/UseReducerAndUseContext/ComponentB';
import ComponentC from './components/UseReducerAndUseContext/ComponentC';
import UseReducerThree from './components/UseReducerThree';
import UseReducerTwo from './components/UseReducerTwo';
import UseRef from './components/UseRef';
import UseRefTwo from './components/UseRefTwo';

// useContext example
export const UserContext =  React.createContext()
export const ChannelContext = React.createContext()

// useContext + useReducer example
export const CountContext = React.createContext()

// create initialState and reducer
const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state;
    }
}

function App() {
    
    const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
        {/* <ClassCounter /> */}
        {/* <HookCounter /> */}
        {/* <HookCounterTwo /> */}
        {/* <HookCounterThree /> */}
        {/* <HookCounterFour/> */}
        {/* <ClassCounterOne /> */}
        {/* <HookCounterOne /> */}
        {/* <ClassMouse /> */}
        {/* <HookMouse /> */}
        {/* <MouseContainer /> */}
        {/* <IntervalClassCounter /> */}
        {/* <IntervalHookCounter /> */}
        {/* <DataFetching /> */}
        {/* <UserContext.Provider value='Marco'>
            <ChannelContext.Provider value='My Channel'>
                  <UseContext />
            </ChannelContext.Provider>
        </UserContext.Provider> */}
        {/* <UseReducer /> */}
        {/* <UseReducerTwo /> */}
        {/* <UseReducerThree /> */}
        {/* <CountContext.Provider value={
            {
                countState:count,
                countDispatch: dispatch
            }
        }>
            <div>
                Count - {count}
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </div>
        </CountContext.Provider> */}
        {/* <DataFetchingOne /> */}
        {/* <DataFetchingTwo /> */}
        {/* <ParentComponent /> */}
        {/* <UseMemo /> */}
        {/* <UseRef /> */}
        {/* <UseRefTwo /> */}
        {/* <DocTitleOne /> */}
        {/* <DocTitleTwo /> */}
        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}
        <UserForm />
    </div>
  );
}

export default App;
