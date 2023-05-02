const fetch = require('node-fetch');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

/**
 * Implement the loadPosts() function that returns a Promise with posts
 * loaded from https://jsonplaceholder.typicode.com/posts and alphabetically sorted by title
 *
 *
 * Usage example:
 * ```
 * loadPosts().then(posts => {
 *      console.log(posts); // [{ title: ... } ...]
 * });
 * ```
 */

function loadPosts() {
    /**
     * returns fetch promise that gets json respons use sort method with localeCompare method;
     */
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => data.sort((a, b) => a.title.localeCompare(b.title)));
}

module.exports = loadPosts;
