# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Current State of the App

### `Issues`

I have used CSS-in-Js approach to style the Button component based on passed props. The issue I am running into is with while defining css styles in external files, the style objects in JS files override the external styles.

### `Other Approaches`

* `Use External Style sheets` I can create external css styles and define required classes and then use those classes conditionally based on props passed.

* `Use tailwind classes` tailwind classes can be defined inside objects and those objects can be accessed using props.

* `Using Styled Components` this can be another solution

Above approaches can be implemented in different branches