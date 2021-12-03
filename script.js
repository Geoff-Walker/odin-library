function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}
Book.prototype.info = function() {
	console.log(`${title} by ${author}, ${pages} pages, ${(read = true ? 'I have read this book' : 'not read yet')}`);
};

const bible = new Book('The Bible', 'God', 1200, true);

bible.info();
