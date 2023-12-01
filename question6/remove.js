/*The first book from the collection is lost in unexplained circumstances. You have already accepted the loss, so remove it from the 
array. Which method will you use for this purpose? Display the length of the array and all the names of the books from the collection 
in turn. */
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
books.shift();
console.log("Number of Books:", books.length);
console.log("Book Titles:");
books.forEach(function(book) {
    console.log(book.title);
});