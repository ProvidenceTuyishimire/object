/*Add a new book to the collection: Learning JavaScript Design Patterns, by Addy Osmani, 254 pages. Use the appropriate method to do 
this, which will attach the book at the end of the array. Display the length of the array and, in turn, all the book names in the 
collection. */
var books = [
    {
        title: 'Speaking JavaScript',
        author: 'Axel Rauschmayer',
        pages: 460
    },
    {
        title: 'Programming JavaScript Applications',
        author: 'Eric Elliott',
        pages: 254
    },
    {
        title: 'Understanding ECMAScript 6',
        author: 'Nicholas C. Zakas',
        pages: 352
    }
];
var newBook = {
    title: 'Learning JavaScript Design Patterns',
    author: 'Addy Osmani',
    pages: 254
};
books.push(newBook);
console.log("Number of Books:", books.length);
console.log("Book Titles:");
books.forEach(function(book) {
    console.log(book.title);
});