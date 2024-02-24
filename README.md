# Fetching GitHub User Information with JavaScript using async/await

This is an example of how to use `async/await` in JavaScript to make a request to the GitHub API and retrieve information about a specific user.

## Description

The code consists of two main functions:

1. **fetchGitHubUserInfo(username)**: This function takes a username as an argument and uses `fetch` to make a request to the GitHub API to retrieve information about that user. If the request is successful, it returns the user data in JSON format. If the request fails, it throws an error.

2. **displayGitHubUserInfo(username)**: This function calls `fetchGitHubUserInfo` to get the user information and then displays it in the browser console. If the user data is obtained, it is displayed in the console. If the request fails or the user information cannot be obtained, a message indicating that the information could not be retrieved is displayed.

## Usage

1. Clone this repository or copy the code into your code editor.

2. Open the `index.html` file in your web browser.

3. Open the browser console to view the GitHub user information.

4. Change the value of the `username` variable in the code to retrieve information about different GitHub users. For example, you can change `username = 'hrbackdev'` to the desired username.

## Requirements

- Active internet connection to make the request to the GitHub API.

- The browser must support `fetch`, as this function is used to make the request to the GitHub API.

## Example

const username = 'hrbackdev';
displayGitHubUserInfo(username);
