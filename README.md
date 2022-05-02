# Submission Notes
The Star Wars app allows users to view the detailed information of all the people, movies, and planets listed by [Swapi API](https://swapi.dev/).
Deployed on [Netlify](https://yanaswapiredspace.netlify.app/)

## Install instructions
In the project directory, you can run:
```
npm start
```
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

## Approach to the problem
[Swapi API](https://swapi.dev/) returns 10 items per page by default, and using simple and intuitive ‘Previous Page’ and ‘Next Page’ buttons allows the user to jump between pages, traversing the entire list. Further details about each item can be accessed by clicking on its name, which appears in the list.

## Technical decisions
- The React Router v6 (including the newest features such as nested routes, outlet, navLink, etc.) is used to create an SPA for more efficient performance and a better user experience.
- Functional Components with various Hooks are used over Class Components as they are concise and result in more straightforward code.
- Redux Toolkit was chosen for state management because it is easier to configure and doesn't require too much boilerplate code.
- Presentational components are broken down into micro components to make them reusable across the project and to allow for making changes in the UI with ease.
- The data in the single item view comes from a separate API call (rather than passing data from the home page) in order to provide the user with a unique, functional and shareable link.

## Possible changes
- Implement a responsive design and style the app further.
- Create separate CSS files for certain components. Use more Material UI props instead of inline styles.
- Add a Loading Component to display while awaiting the response from an API call.
- Add 'Back" buttons on the individual Person/Movie/Planet item views to return to the People/Movies/Planets (list) views respectively.
- Add error handlers (for e.g. for a bad request).
- Create more containers that group micro components and can be reused (for e.g. grouping the 'previous page' and 'next page' buttons)
- Handle pending and rejected states in redux store slices. 

## Learning resources
1. https://reactjs.org/docs
2. https://www.youtube.com/freecodecamp
3. https://developer.mozilla.org/en-US/
4. https://www.typescriptlang.org/docs/
5. https://redux-toolkit.js.org/
6. https://reactrouter.com/docs/en/v6
