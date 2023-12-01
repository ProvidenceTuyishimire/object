//Use the slice command to copy the last two books to the new array.
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
var lastTwoBooks = books.slice(-2);
console.log("Last Two Books:");
lastTwoBooks.forEach(function(book) {
    console.log(book.title);
});