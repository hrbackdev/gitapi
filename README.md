# Fetching GitHub User Information with Express.js

This code demonstrates how to create a simple Express.js server to fetch GitHub user information using async/await.

## Description

The code sets up an Express.js server that listens for GET requests to the '/github-user-info' endpoint. When a GET request is received with a query parameter 'username', it makes a request to the GitHub API to fetch the user information, and then sends the user information back as a JSON response.

## Dependencies

- **express**: Express.js is a web application framework for Node.js, used here to create the server and handle HTTP requests.

## How It Works

1. **Setting Up Express.js**: The code imports the Express.js module and creates an instance of the Express application.

2. **Middleware Setup**: The code sets up middleware to parse JSON request bodies using `express.json()`.

3. **fetchGitHubUserInfo Function**: This asynchronous function takes a username as input, makes a request to the GitHub API to fetch user information, and returns the user data if successful. If an error occurs, it logs the error and returns null.

4. **Handling GET Requests**: The code sets up a route to handle GET requests to the '/github-user-info' endpoint. When a GET request is received with a query parameter 'username', it calls `fetchGitHubUserInfo` to get the user information, and sends the user data back as a JSON response. If the user data cannot be obtained, it sends a 404 error response.

5. **Listening on Port**: The code sets the port number for the server to listen on. It listens for incoming connections on the specified port and logs a message to indicate that the server is running.

## Usage

1. Clone this repository or copy the code into your project directory.

2. Install Express.js by running `npm install express` in the terminal.

3. Run the server by executing `node apiGitHub.js` in the terminal.

4. Send a GET request to `https://api.github.com/users/username`.

5. Check the console for server logs and the response from the server.

- **Example with Postman**:
  ![](ruta/a/la/imagen.png)

## Notes

- Ensure that your server has access to the internet to make requests to the GitHub API.
- Handle errors gracefully and provide appropriate error messages in your application.
