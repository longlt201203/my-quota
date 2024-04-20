# My Quota: Desktop Quote Management Application
**My Quota** is a desktop application designed for efficiently managing and organizing quotes. Ideal for educators, students, writers, and anyone keen on collecting and referencing quotes, this tool simplifies the way you store, retrieve, and utilize quotations for educational or personal projects.

## Architecture Overview
The application is structured into two main components:

* **Frontend:** Built with React, TypeScript, and Vite, providing a robust and reactive user interface.

* **Backend and Desktop Integration:** Utilizes Express.js for server-side operations and Electron.js for wrapping the application into a desktop application.

## Project Structure
* **`src` folder:** Contains all the React and TypeScript code, where the primary frontend development occurs. This includes UI components, services, and state management.
* **`app` folder:** Houses the backend and desktop-specific files:
  * **`server.js`:** The main server file powered by Express.js, handling API requests and server logic.
  * **`electron.js`:** The Electron.js configuration file that sets up and controls the desktop window and integration features.

## Setting Up the Development Environment
**1. Prerequisites:**
* Ensure Node.js is installed on your system.
* Familiarity with React, TypeScript, Express.js, and Electron.js is recommended.

**2. Installation:**
* Clone the repository to your local machine.
* Navigate to the project directory and install dependencies using:
```
npm install
```
* To start the Electron desktop app, run:
```
npm run start
```
## Building and Distributing the Application for Production
To prepare My Quota for production and create a distributable version, follow these steps:
### Building the Application
* Build the application for production using:
```
npm run make
```
* After running the command, check the `out` folder in your project directory. This folder will contain the zipped distribution of your application, which is optimized for production.
### Creating a Windows Installer
* Download and install [Inno Setup Compiler](https://jrsoftware.org/isinfo.php) if you haven't already. This tool will help you create a professional installer for your application.
* Prepare a setup script (`setupscript.iss`). This script defines the installer's configuration, including files to include, installation path, and any additional scripts or actions to execute during installation.
* Run the Inno Setup Compiler and open your `setupscript.iss` file to generate the installer. Follow the guided steps in the Inno Setup Compiler to compile the installer.

By following these steps, you will have a production-ready version of My Quota and a professional-grade installer for Windows users, facilitating easy installation and distribution.
## License:
My Quota is open-source software licensed under the MIT License. You are free to use, modify, and distribute this software, including for commercial purposes, under the terms of the MIT License.