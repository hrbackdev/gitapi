const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

async function fetchGitHubUserInfo(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch user information. Status: ${response.status}`);
        }
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Error fetching user information:', error);
        return null;
    }
}

app.get('/github-user-info', async (request, response) => {
    try {
        const { username } = request.query;
        
        const userData = await fetchGitHubUserInfo(username);

        if (userData) {
            response.json(userData);
        } else {
            response.status(404).json({ error: 'Failed to fetch user information.' });
        }
    } catch (error) {
        console.error('Error processing request:', error);
        response.status(500).json({ error: 'Internal server error.' });
    }
});

const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Listening on port ${port}...`));
