- [ ] Why would you use class component over function components (removing hooks from the question)?
  In my future profession, I may encounter legacy code where class components are still being used. 

- [ ] Name three lifecycle methods and their purposes.
  -Render Method: When this method gets called it will return something to the DOM
  -componentDidMount: This happens after the render method, where we can setState, fetch data and any asynchronous actions are performed, 
  -Constructor: Serves the component with initial state data that it need to have during the initial render. All event handlers are binded to the components in the constructor.

- [ ] What is the purpose of a custom hook?
  To apply non-visual behavior and stateful logic through the components by reusing the same hook. Custom hooks can be used for handling controlled inputs, key presses, handling event listeners, etc.

- [ ] Why is it important to test our apps?
  Minimizes the risk of bugs in production code. Testing, surfaces bugs quicker, reduces risks of regressions, allows developers to trust the code, makes us this about the edge cases, etc. 