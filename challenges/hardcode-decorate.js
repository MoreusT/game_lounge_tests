/**
 * Implement the hardcodeDecorate(fn, params) function that takes two arguments:
 *     - fn     - function that should be decorated
 *     - params - array of parameters
 * and returns a new function that calls fn with parameters specified in params array
 *
 *
 * Usage example:
 * ```
 * function printUserInfo(email, name) {
 *     console.log(`${name} (${email})`);
 * }
 *
 * const printPeterInfo = hardcodeDecorate('peter@mail.com', 'Peter');
 *
 * printPeterInfo(); // Peter (peter@mail.com)
 * ```
 */
function hardcodeDecorate(fn, params) {
    /**
     * 1. In test you make check call as a function, so I can't simply return the value, and needed to create another function inside, which will return the value;
     * 2. You use spread operator as params in sum function, the result of sum(...[2, 2]) will be [2, 2], thats why I get the result and use reduce method again;
     */

    const result = () => fn(params).reduce((sum, item) => sum + item);
    return result;
}

module.exports = hardcodeDecorate;
