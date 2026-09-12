# Dev Stack Website
## ❓ Why is the purpose of this website?
This website made for user can choose Technology in a stack.User can choose multiple card and stack section showing theme. User can remove card from stack section. That's all...
## ⚙️ Technology that use in this project
- Html
- React (javascript library)
- Tailwind css (css framwork)
- Daisyui (Builtin componet for ui)
- React tostify (React package)
- Node js (For management server)
- Vite (For project management)
- Git & Github (For version control)


## 🧩 Features in this website
- Daynamic data fatch system and Card will be show in fatching data basis.
- User can selecte multiple card and show beside stack section.
- User can remove one by one or remove all in stack section.  

## React questions
- 1. What is JSX, and why is it used in React?
     Ans: JSX is a syntax that lets us write HTML-like code inside JavaScript.It makes React UI easier to write and understand.
- 2. What is the difference between props and state?
     Ans: Props: Data passed from parent → child, read-only. 
          State: Data managed inside a component, can change over time.
- 3. What does the useState hook do, and where did you use it in this project?
     Ans: useState stores and updates component data. I used it to manage selected players/cards and update the UI when a card is added or removed.
- 4. What does the useEffect hook do, and why did you need it to load the JSON data?
     Ans: useEffect runs side effects after rendering. I used it to fetch/load JSON data when the component loads.
- 5. Why does every item in a .map() list need a unique key prop?
     Ans: A unique key helps React identify each item and efficiently update the DOM when the list changes.
- 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
     Ans: Conditional rendering means showing different UI based on a condition.
          {selectedPlayers.length === 0 && <p>No players selected</p>}
- 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
     Ans: Parent → Child: Pass data using props.
          Child → Parent: Pass a callback function as a prop, then call it from the child.



