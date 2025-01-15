const catalogue = new Map();

function addBook(bookId, title, author) {
  // TODO: Implement this function to add a book to the catalogue.
  catalogue.set(bookId, {title: title, author: author});
}

function findBook(bookId) {
  // TODO: Implement this function to find a book by its ID.
  return catalogue.get(bookId)
}

function removeBook(bookId) {
  // TODO: Implement this function to remove a book from the catalogue.
  catalogue.delete(bookId);
}

function listAllBooks() {
  // TODO: Implement this function to list all books in the catalogue.
  catalogue.forEach((book, bookId) => {
    console.log(`${book.title} by ${book.author} (ID: ${bookId})\n`)
  })
}

function numberOfBooks() {
  // TODO: Implement this function to return the number of books in the catalogue.
  let num = 0;
  for (book of catalogue.entries()) {
    num+=1
  }
  return num;
}

// Test the functions
addBook("12345", "The Lord of the Rings", "J.R.R. Tolkien");
addBook("67890", "Pride and Prejudice", "Jane Austen"); 

console.log(findBook("12345")); // Should output the book object
removeBook("12345");
listAllBooks(); // Should list the remaining book(s)
console.log(numberOfBooks()); // Should output the correct count