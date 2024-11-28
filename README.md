## Learning Objectives

* Compare and contract JS Objects and JS Maps (they are very similar for most use cases)
* Reinforce understanding of JavaScript Map methods (`set`, `get`, `delete`, `has`, `keys`, `values`, `size`)
* Apply Map concepts in a practical scenario
* Practice functional programming techniques

## Scenario

You're a librarian tasked with building a simple library catalogue system using a JavaScript Map. The system should allow you to manage books in the catalogue.

See the example code in `2_JSmap101.js` which includes all relevant syntax.

## Instructions

1. **Implement the functions:**
   - Open the [mapExercise.js](mapExercise.js) file  
   - You'll find a `catalogue` Map and several functions with "TODO" comments: `addBook`, `findBook`, `removeBook`, `listAllBooks`, and `numberOfBooks`.
   - Complete these functions according to the descriptions in the comments. Use the appropriate Map methods to achieve the desired functionality.

2. **Test the code:**
   - The file includes some test code at the bottom.
   - Run the code (e.g., using Node.js: `node mapExercise.js`).
   - Verify that the output in the console matches the expected results described in the comments.

3. **Optional Extension:**
   - Add a new function `updateBook(bookId, newTitle, newAuthor)` that allows updating the title and author of an existing book in the catalogue.

## Example Function Implementation

Here's an example of how you might implement the `addBook` function:

```javascript
function addBook(bookId, title, author) {
  // Use set() to add the book to the catalogue
  catalogue.set(bookId, { title: title, author: author }); 
}
```

## Solution

The solution is available in [mapExercise.js](mapExercise.js)

