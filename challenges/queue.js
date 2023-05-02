/**
 * Implement the Queue class with the following methods:
 *     size()     - returns the size of the queue (number of items in it)
 *     add(item)  - adds an item to the queue
 *     get()      - returns the oldest item from the queue and removes it, returns null if there are no items
 * 
 * 
 * Usage example:
 * ```
 * const queue = new Queue();
 * 
 * queue.add('item1');
 * queue.add('item2');
 * 
 * console.log(queue.size()); // 2
 * 
 * console.log(queue.get()); // item1
 * console.log(queue.get()); // item2
 * 
 * console.log(queue.size()); // 0
 * ```
 */

class Queue {
    constructor() {
        this.arr = []; // create the variable that methods will work with
    }
    size() {
        return this.arr.length; // returns the number that equals to amount of items in array
    }
    add(item) {
        this.arr.push(item); // push method adds new item in the end of the array
    }
    get() {
        return this.arr.length > 0 ? this.arr.shift() : null; // used ternary operator as the fastest solution. If array isn't empty it showed first item in the array then delets it, or returns null.
    }
}

module.exports = Queue;
