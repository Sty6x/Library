let library = []

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

function addBookToLibrary(title, author, pages) {
 
    let book = new Book(title, author, pages)
    library.push(book)
    return book;
}


addBookToLibrary("Killing commendatore", 'Haruki murakami', "600")
addBookToLibrary("Norwegian Wood", 'Haruki murakami', "500")
addBookToLibrary("Crime and punishment", 'Fyodor dostoyevsky', "567")
addBookToLibrary("Life of a stupid man", 'Ryunuske aktugawa', "64")
addBookToLibrary("No longer human", 'Osamu Dazai', "352")


function displayBook(library) {
    for (let book in library) {
        console.log(library[book])
    }
}

displayBook(library)
console.log(library)

const title = document.getElementById('title')

title.addEventListener('input', () => {
    console.log(title.value)
})