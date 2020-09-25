/*
    What are Hooks?
        - new feature addition in React which allow you to use React features without having to write a class. E.g: state of a component
        - hooks dont work inside classes
    
    Why Hooks was introduced?
        - hooks take away the need to understand the implementation of the 'this' keyword
        - with hooks there's no need to remember to bind event handlers in class components
        - classes dont minify very well and make hot reloading very unreliable
        - there is no particular way to reuse stateful component logic, though render props and HOC do give a solution, the code after modified looks very awkward and make it harder to follow
        - hooks were brought in to fill in the need to share stateful logic in a better way
        - components created for complex scenarios such as data fetching and subscribing to events are scattered in the class and is not organised
        - E.g Data Fetching - placed in componentDidMount and componentDidUpdate
        - E.g event listeners - placed in componentDidMount and componentWillUnmount
        - both data fetching and event listeners in the same method
        - because of stateful logic cant break components into smaller ones
        - hooks solve this problem by splitting the codes into smaller functions based on what pieces are related

    Rules
        - only call hooks at the top level
        - dont call hooks inside loops, conditions or nested functions
        - only call hooks from React functions
        - dont call hooks from regular javascript 
*/