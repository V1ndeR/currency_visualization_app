A currency visualisation app that reads data from a public API and displays the results basedon user input.

When you select a base currency and a time frame, there is no need to make any extra calls
to the API, unless you're changing the base currecy or the time frame

API responses are cached locally to reduce API consumption.
I am caching data with useQuery

If a user is trying to request the same data (same base currency and same time frame) he/she
already requested, the data is stored in cache. 

Tech stack:\
React\
[Plotly](https://plotly.com/javascript/)\
Exchange Rates Data API ([https://exchangeratesapi.io/](https://apilayer.com/marketplace/exchangerates_data-api#details-tab))

![image](https://user-images.githubusercontent.com/45105697/181388309-1fb463b1-31af-4f2a-8425-daedf7207b2d.png)

# Getting Started with Create React App

Install all dependencies:

### `npm i`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
