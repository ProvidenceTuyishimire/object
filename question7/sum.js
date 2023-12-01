//Display the sum of the pages of all the books from the collection.
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
    },
    {
        title: 'Learning JavaScript Design Patterns',
        author: 'Addy Osmani',
        pages: 254
    }
];

var totalPages = books.reduce(function(sum, book) {
    return sum + book.pages;
}, 0);
console.log("Total Pages in the Collection:", totalPages);