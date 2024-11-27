import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import flow from "D:/Shubham/Workspace/Reactjs/ReactNotes/Flow of Context API.png";

function App() {
  return (
    <div>
      <a href="https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&si=mI1CT3WmxHFkUYOY">
        <h1>ReactJS Notes from Chai and React</h1>
      </a>
      <div>
        <a href="https://youtu.be/k3KqQvywToE?si=KQHvvhfAOYiK8V84">
          <h3>02 Create react projects &</h3>
        </a>
        <a href="https://youtu.be/yNbnA5pryMg?si=GkR3KrrPsLGCSefG">
          <h3>03 Understand the react flow and structure</h3>
        </a>
        <ul>
          <li>
            index.html is that single page where everything gets loaded. It does
            not have any script in it.
          </li>
          <li>index.js is the connection point between html & js.</li>
          <li>
            App.js has a function App that returns html elements. It is imported
            in index.js to implement.
          </li>
          <li>
            In classic react "react-scripts" from package.json is responsible
            for connecting html file to javascript, But in vite react, script is
            directly written in index.html. <br /> Same thing is done by babble
            in vite library
          </li>
          <li>
            While returning something from App function only one element is
            allowed to return To overcome this issue,
            fragment(&#60;&#62;..&#60;/&#62;) is used. Multiple elements can
            returned by enclosing them into fragment.
          </li>
          <li>
            When creating a component (external function to export) the function
            name must start with Uppercase letter.
          </li>
          <li>
            Some libraries like vite, force us to wite the file name extension
            as '.jsx'
          </li>
          <li>
            React DOM is an implementation of react on web and react native is
            implementation on mobile.
          </li>
        </ul>
      </div>

      <div>
        <a href="https://youtu.be/kAOuj6o7Kxs?si=nqo74DWGpc9acrjW">
          <h3>04 Create your own react library and JSX</h3>
        </a>
        <ul>
          <li>
            To understand the internal working of react we have created a custom
            javascript file.
          </li>
          <li>
            In react library, whatever is returned from the function App is
            parsed into an object which is then rendered onto the HTML page with
            render function.
          </li>
          <li>The App function can directly be written in index file.</li>
          <li>
            As the App function returns some HTML elements, so it is possible If
            we try to directly write those html elements in render function, but
            it is not recommended.
          </li>
          <li>
            Similarily as we know the HTML elements returned from App function
            are parsed to Object in react library, so it is also possible that
            it will execute if we directly write them in render function, but
            for that we need to follow the convention provided by react
            'createElement' function.
          </li>
          <li>
            To add javascript variables in html element in App function you can
            use &#123;variable&#125; - curly braces. It is called 'Evaluated
            Expression'.
          </li>
          <li>
            You cannot write javascript in <b>Evaluated Expressions</b> you only
            write final output of javasript in it. Why not? - <br />
            It gets parsed into object and object can not have javascript
            if-else or any other script written in it.
          </li>
        </ul>
      </div>

      <div>
        <a href="https://youtu.be/lI7IIOWM0Mo?si=pDW5u4yt9x7wj4De">
          <h3>05 Why you need hooks and project</h3>
        </a>
        <ul>
          <li>
            Hooks: React allows you to change javascript variables, but to
            update those variables in User interface you need to use special
            methods provided by react that are called hooks. Example in
            Counterproject App.jsx.
            <br />
            (In React, hooks are special functions that allow you to manage
            state and other React features in functional components. They enable
            you to update state variables, triggering UI updates when those
            variables change. For example, in the Counterproject App.jsx, hooks
            are utilized to manage the state of the counter component.)
          </li>
          <li>
            Hooks return an array of size 2. first is variable, second is
            method.
          </li>
          <li>
            When hooks are used to update any value, they react for whole page
            and update everywhere on the webpage.
          </li>
          <li>
            There are several built-in hooks provided by React, including:
          </li>
          <ol>
            <li>useState: Allows functional components to have local state.</li>
            <li>
              useContext: Accesses the context of a React context provider.
            </li>
            <li>
              useReducer: Alternative to useState, for managing more complex
              state logic.
            </li>
            <li>
              useRef: Provides a way to access the DOM or React elements
              directly.
            </li>
            <li>
              useMemo and useCallback: Memoizes values and functions to prevent
              unnecessary re-renders.
            </li>
            <li>
              useLayoutEffect: Similar to useEffect, but runs synchronously
              after all DOM mutations.
            </li>
            <li>useDebugValue: Adds debug information to custom hooks.</li>
          </ol>
        </ul>
      </div>

      <div>
        <a href="https://youtu.be/MPCVGFvgVEQ?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige">
          <h3>06 Virtual DOM, Fibre and reconciliation</h3>
        </a>
        <ul>
          <li>
            Why does page reload? <br />
            Browser loads the whole DOM again and again after each click. It
            repaints i.e. it reconstructs the page the whole page again.
          </li>
          <li>
            Virtual DOM :<br />
            In Virtual DOM you can track the DOM in a tree like structure
            Instead of loading whole DOM again a parallel DOM is created and it
            is compared with browser DOM, then only the elements that are
            changed are updated on the webpage
          </li>
          <li>
            In a UI, it's not necessary for every update to be applied
            immediately; in fact, doing so can be wasteful, causing frames to
            drop and degrading the user experience.
          </li>
          <li>
            Different types of updates have different priorities — an animation
            update needs to complete more quickly than, say, an update from a
            data store.
          </li>
          <li>
            <b>Update</b> : A change in the data used to render a React app.
            Usually the result of `setState`. Eventually results in a re-render.
          </li>
          <li>
            <b>Reconciliation</b> is the algorithm behind what is popularly
            understood as the "virtual DOM." A high-level description goes
            something like this: when you render a React application, a tree of
            nodes that describes the app is generated and saved in memory. This
            tree is then flushed to the rendering environment — for example, in
            the case of a browser application, it's translated to a set of DOM
            operations. When the app is updated (usually via setState), a new
            tree is generated. The new tree is diffed with the previous tree to
            compute which operations are needed to update the rendered app.
          </li>
          <li>
            A push-based approach requires the app (you, the programmer) to
            decide how to schedule work. A pull-based approach allows the
            framework (React) to be smart and make those decisions for you.
          </li>
          <li>
            Detail article -{" "}
            <u>
              <a href="https://github.com/acdlite/react-fiber-architecture">
                React Fiber Architecture
              </a>
            </u>
          </li>
        </ul>
        <br />
      </div>

      <div>
        <a href="https://youtu.be/bB6707XzCNc?si=WF8uEJiubAylBaBD">
          <h3>07 Tailwind and Props in reactjs</h3>
        </a>
        <ul>
          <li>
            Tailwind is a framework that helps to manipulate css in react
            webpage.
          </li>
          <li>
            It provides a set of pre-designed utility classes that you can apply
            directly in your HTML or JSX code to style elements, rather than
            writing custom CSS rules. This can make styling more efficient and
            consistent across your project.
          </li>
          <li>
            <b>Note : </b>Each tag in fragment must have a closing tag to
            implement Tailwind.
          </li>
          <li>
            We can create multiple components as jsx files and import them
            whenever they are required in the webpage.
          </li>
          <li>class in HTML are written as className in Tailwind.</li>
          <li>
            <b>Props : </b>
            In React, "props" stands for properties. Props are a way of passing
            data from parent to child components. They are read-only and help
            make components reusable and composable.
          </li>
          <li>
            When you create a component in React, you can pass data to it using
            attributes. These attributes become properties on the component's
            props object. The component then uses this data to render its UI.
          </li>
          <li>
            They provide a way to customize and configure components
            dynamically, making React applications more flexible and
            maintainable.
          </li>
        </ul>
      </div>

      <div>
        <a href="https://youtu.be/tOYkV6Yhrhs?si=FSCQ8A6Q-hzRRunR">
          <h3>08 A react interview question on counter</h3>
        </a>
        <ul>
          <li>
            When creating a counter even when the setCounter method is used
            multiple times in the addValue function, the value of the counter is
            only incremented once.
          </li>
          <li>
            This happens because, in React, state updates are asynchronous. When
            you call a state update function like setCounter, React schedules an
            update to the component's state, but it doesn't immediately apply
            the update. Instead, React batches multiple state updates together
            and performs them in a single render cycle for performance reasons.
          </li>
          <li>
            If a case arise where multiple setCounter needs to be used then a
            callback can be used. setCounter(prevCounter =&#62; prevCounter+1)
          </li>
        </ul>
      </div>

      <div>
        <a href="https://youtu.be/_lJ3KNMue3w?si=-HcaD2SN4yDCfU8K">
          <h3>09 Building a react project | bgChanger</h3>
        </a>
        <ul>
          <li>
            Created a page that changes the background color according to the
            button pressed.
          </li>
          <li>Used tailwind features</li>
        </ul>
      </div>

      <div>
        <a href="https://youtu.be/Lt4vy8hfc-s?si=F2i-k_X_Am7QnqIZ">
          <h3>10 useEffect, useRef and useCallback</h3>
        </a>
        <ul>
          <li>
            Created a password generator that can generate password according to
            length, Character & number support.
          </li>
          <li>
            As learnt earlier useState was used to update values at different
            position in a webpage.
          </li>
          <li>
            As the onChange event also needs a function, the 'set' methods of
            useState are given as events for onChange in input fields that are
            input checkboxes and input range.{" "}
          </li>
          <li>A function was then created by using usecallback hook.</li>
          <li>
            <b>useCallback hook - </b>The useCallback hook memoizes a callback
            function, caching its instance so that it doesn't change unless its
            dependencies change. It takes two parameters: the callback function
            to memoize and an array of dependencies. When any value in the
            dependencies array changes, the hook re-creates the callback
            function.
          </li>
          <li>
            <b>useEffect hook - </b> In this project it is used to call the
            function as soon as the page is loaded and any of the dependancies
            of that function are changed. If there is any change in the
            dependeny the hook triggers the function and values are updated.
          </li>
          <li>
            By clicking on copy button we need to copy the password to
            clipboard. This is done by creating onclick event.
          </li>
          <li>
            To show that the text is selected & copied we use useRef hook.{" "}
          </li>
          <li>
            <b>useRef hook</b>: This hook stores a reference of an element from
            the webpage, so that we can manipulate it according to our need.
          </li>
          <li>
            <b>Note: </b>To optionally select i.e. by checking if some value is
            present or not, we use '?'.
          </li>
        </ul>
      </div>

      <div>
        <a href="https://youtu.be/AFDYnd-XPa8?si=RHT_evixSAhnP8EE">
          <h3>11 Custom hooks in react | Currency Project</h3>
        </a>
        <ul>
          <li>
            A project designed using custom hook and an external component.
          </li>
          <li>
            <b>Custom hook useCurrencyInfo - </b>
          </li>
          <ul>
            <li>
              useEffect hook is used inside the custom hook (useCurrencyInfo) to
              automatically load the api as soon as the page is loaded.
            </li>
            <li>
              As every other hook, the whole function (useCurrencyInfo) is
              exported which means we can access the whole function anywhere
              else & also the data returned by it.
            </li>
          </ul>
          <li>
            <b>Component InputBox</b>
          </li>
          <ul>
            <li>
              Props are effectively used in the copmonent, various variables and
              methods that are triggered by some change made by user are used as
              props.
            </li>
            <li>
              {" "}
              These props are then utilized by useState hook in App.jsx to
              propogate changes.
            </li>
            <li>
              <b>UseId-</b> This hook is used to generate unique IDs for HTML
              elements. This unique ID can be particularly useful for
              associating a label with its corresponding input field.{" "}
            </li>
            <li>
              By generating consistent IDs across renders, it helps improve
              accessibility and ensures proper functionality, especially in HTML
              forms.
            </li>
            <li>
              '&&' ensures the function that is being called exists or not. This
              helps in avoiding errors.
            </li>
          </ul>
          <li>
            <b>App.jsx</b> contains various useState hooks that help in setting
            the amount and currencies according to user preference.
          </li>
          <li>
            Props from InputBox are given values according to user input & set
            these values using useState.
          </li>
        </ul>
      </div>

      <div>
        <a href="https://youtu.be/VJov5QWEKE4?si=eCV6lo671xM6On9I">
          <h3>12 React router crash course</h3>
        </a>
        <ul>
          <li>
            <b>React Routing : </b>Instead of loading new HTML pages from the
            server when navigating between different sections or pages of the
            application, React Router enables the rendering of different
            components based on the URL changes while keeping the user
            experience seamless.
          </li>
          <li>
            We do not use App.jsx in react routing, everything is done in
            Main.jsx.
          </li>
          <li>
            We need to declare Router provider which acts as a wrapper which
            renders all the routes declared by us. It takes just one 'router'
            property{" "}
          </li>
          <li>
            We can create multiple components and add them as children inside a
            base component.
          </li>
          <li>
            The base component is Layout. It has the header, footer components and a React
            component called <b>Outlet</b>.
          </li>
          <li>
            Outlet serves as the dynamic content area within the Layout
            component. When you navigate to different routes, the corresponding
            components for those routes will be rendered within the Outlet,
            allowing for nested routing without affecting the layout structure.
          </li>
          <li>
            These nested Routers can be created using createBrowserRouter()
            method in 2 different ways- one is by adding the objects with path &
            element in an array and the other preffered way is using
            createRoutesFromElements() method and adding Route tag with path &
            element properties in it.
          </li>
          <li>
            <b>useParams </b>hook allows you to access the parameters defined in
            the URL of your route components. This is particularly useful for
            dynamic routing scenarios where you want to extract information from
            the URL to customize the behavior or content of your components.
          </li>
          <li>
            The parameter name specified in the URL path (:userid in our case)
            should match the key you use to access the parameter with useParams.
          </li>
          <li>
            As we have already seen that when you need to call an API as soon as
            page is loaded, we use useEffect hook and then fetch the API.
            Instead of this we can use loader property.
          </li>
          <li>
            <b>Loader </b>makes the API call more efficient as it starts the
            fetching as soon as we hover over the triggering element and stores
            it in cache.
          </li>
          <li>
            Loader can directly take fetch calls but it is recommended to do it
            by calling another method. To get the data fetched using loader{" "}
            <b>useLoaderData</b> hook is used. This data then can be manipulated
            according to our need.
          </li>
          <li>Link and Navlink are used in react routing for adding URLs.</li>
          <li>
            Link is used instead of 'a' tag because 'a' tag reloads whole page.
          </li>
          <li>
            Navlink has more features, In navlink, classes are written in
            back-ticks as a callback function. This enables the use of isActive
            property where, as we navigate through different pages their heading
            gets highlighted.
          </li>
          <li>
            isActive property compares the navlink with URL and returns boolean.
            URL is given in 'to' property of navlink.{" "}
          </li>
        </ul>
      </div>

      <div>
        <a href="https://youtu.be/JQVBGtZMqgU?si=uxcCO0FCIRBzcUpR">
          <h3>13 Context API crash course with 2 projects</h3>
        </a>
        <ul>
          <li>
            <b>Purpose of Context:</b> Context in React was indeed introduced to
            solve the problem of prop drilling, which is passing props through
            multiple layers of components. While it can be used for state
            management, its primary purpose is to share values like props
            between components without having to explicitly pass them through
            each level of the component tree.
          </li>
          <li>You can give variables as well as methods inside a context.</li>
          <li>
            <b>Steps to create and use context:</b>
            <ol>
              <li>Create a context using React.createContext(defaultValue).</li>
              <li>
                Optionally, export the context or object if you want to use it
                in other files.
              </li>
              <li>
                Create a Provider component using the Context.Provider
                component. This component will wrap the part of your component
                tree where you want to make the context available.
              </li>
              <li>
                This component can be created in another file by importing the
                created context or in same file as createContext.
              </li>
              <li>
                Pass the values you want to share as props to the value
                attribute of the Provider component.
              </li>
              <li>
                In the consuming components, use the useContext hook or the
                Context.Consumer component to access the context values.
              </li>
            </ol>
          </li>
          <li></li>
          <li></li>
        </ul>
        <img src={flow} alt="Flow of Context" width={800} />
      </div>

      <div>
        <a href="https://youtu.be/6KQeopPE36I?si=RMDJqVMZyXRrH29G">
          <h3>14 Context api with local storage | Todo List</h3>
        </a>
        <li>Used local storage of browser to store the todo list.</li>
      </div>

      <div>
        <a href="https://youtu.be/1i04-A7kfFI?si=MlKF365X7i53uNWg">
          <h3>15 Redux Toolkit crash course | Todo List</h3>
        </a>
        <ul>
          <li>
            <b>Redux Toolkit (RTK) for React : </b> Redux is a library used for
            state management in React applications, although it can be used with
            other frameworks as well.
          </li>
          <li>
            Flux was a precursor to Redux, providing a pattern for managing data
            flow in applications. Redux simplified and formalized this pattern.
          </li>
          <li>
            <b>Steps to use RTK: </b>
            <ol>
              <li>Creating the Store: Start by creating the Redux store
                using configureStore(). While typically there's only one store
                in a Redux application, multiple stores are possible in advanced
                use cases.
              </li>
              <li>
                Defining Reducers: Reducers are functions responsible for
                updating the state in response to actions. In Redux Toolkit,
                reducers are combined into a root reducer, which is passed to
                configureStore().
              </li>
              <li>
                Creating Slices: Use createSlice() to define a slice of state
                along with its associated reducers. It requires a name for the
                state slice and an initial state. Reducers are generated
                automatically based on the provided functions.{" "}
              </li>
              <li>
                We need to provide these functions. When a reducer function is
                invoked, it receives two parameters: the current state and an
                action object. The action may contain property action.payload
                that which carries any data necessary for the action.
              </li>
              <li>
                Exporting Reducers: Reducers are typically encapsulated within
                slices and exported directly. Every reducer should also be
                exported indivisually so as to use it directly.
              </li>
            </ol>
            <li>
              There are 2 methods to either get the values from store and send
              them to the store. These methods are-{" "}
            </li>
            <ol>
              <li>
                useDispatch()- import the reducer that needs to be accessed and
                after using the method dispatch it to the store. We use dispatch
                whenever we need to send the values. ex- id,input
              </li>
              <li>useSelector() : we can access the state in the store using a
                callback. We can access any values from the store using state
                and store it in local variable.
              </li>
            </ol>
            <li>Unique IDs: Libraries like nanoid() can be used to generate unique IDs, although this functionality is not provided directly by Redux Toolkit.</li>
          </li>
          <li>In the context of Redux Toolkit (RTK) and Redux in general, immutability is a principle that emphasizes not modifying the state directly. Instead, when you want to update the state, you create a new copy of it with the desired changes.</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
