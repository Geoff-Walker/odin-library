let library = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}
Book.prototype.info = function() {
	console.log(
		`${this.title} by ${this.author}, ${this.pages} pages, ${(this.read = true
			? 'I have read this book'
			: 'not read yet')}`
	);
};

const bible = new Book('The Bible', 'God', 1200, true);
const fellowship = new Book('The fellowship of the Ring', 'JRR Tolkein', 423, false);
const twoTowers = new Book('The Two Towers', 'JRR Tolkein', 352, false);
const kingReturn = new Book('The Return of the King', 'JRR Tolkein', 345, false);
const hobbit = new Book('The Hobbit', 'JRR Tolkein', 310, true);

library.push(bible, fellowship, twoTowers, kingReturn, hobbit);
console.log(library);
console.log(library[2].title);
