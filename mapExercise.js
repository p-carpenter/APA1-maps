const catalogue = new Map();

function addBook(bookId, title, author) {
  // TODO: Implement this function to add a book to the catalogue.
}

function findBook(bookId) {
  // TODO: Implement this function to find a book by its ID.
}

function removeBook(bookId) {
  // TODO: Implement this function to remove a book from the catalogue.
}

function listAllBooks() {
  // TODO: Implement this function to list all books in the catalogue.
}

function numberOfBooks() {
  // TODO: Implement this function to return the number of books in the catalogue.
}

// Test the functions
addBook("12345", "The Lord of the Rings", "J.R.R. Tolkien");
addBook("67890", "Pride and Prejudice", "Jane Austen"); 

console.log(findBook("12345")); // Should output the book object
removeBook("12345");
listAllBooks(); // Should list the remaining book(s)
console.log(numberOfBooks()); // Should output the correct count