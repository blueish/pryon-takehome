# Pryon Takehome 

## Installation & Run Steps
(prereqs: node installed on the machine)
```bash
npm install
```
run using
```bash
npm run
```

then open http://localhost:3000 if it's not already open

# Deliverable

* Unauthenticated users are directed to a login page that welcomes them to the application and implements a 3rd party Single Sign On authentication of choice (Google, Facebook, LinkedIn, Twitter, Firebase, etc) -OR- implement a local login with a fixed username and password.
* Unauthenticated users trying to access any other resources are redirected to a login page.
* Once authenticated, user lands on a main page that welcomes them with some personal info found in their login info (firstname in access_token for SSO, username for local login).  ie. “Hi Username!”.
* Once authenticated, the UI includes a menu containing the four following options (your choice of design -- top menu, side menu, hamburger popup menu)
    * “Profile” - redirects them to their welcome page with profile information.
    * “Astronauts” - A page retrieves the current astronauts in space available at the URL.  It should display a table with two columns containing the data for the “Astronaut Name” and the “Craft” they are located on.
    * API documentation for People in Space (http://open-notify.org/Open-Notify-API/People-In-Space) 
    * “ISS Location” - A page with a map showing the current position of the International Space Station.
    * API documentation for “ISS Current Location” (http://open-notify.org/Open-Notify-API/ISS-Location-Now/)
    * Example of the API usage: (http://open-notify.org/Open-Notify-API/)
    * “Logout” - logs the user out and redirects them back to the login page.

# Rules

* Must be implemented in React.js/Node.js as the core framework.  Any other UI libraries of choice are welcome (bootstrap, chart.js, etc).
* Web-only is required, no need to build multi-platform/mobile/etc.
* Feel free to begin with any Node.js baseline project, a template, or open source project of choice.
* Single Page or Multi Page applications acceptable.
* No database is required.  Any page data can be hardcoded in the page or local configuration files.
* Minimal test framework put in place to illustrate testing methodology.
* Source code delivered ahead of review by email or public repository.
* Source project must be able to be run with your supplied list of requirements or setup instructions.

(rest is the create react app boilerplate)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
