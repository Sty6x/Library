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


function showBook(library) {
    for (let book in library) {
        console.log(library[book])
    }
}

console.log(library)
//functionality

const title = document.getElementById('title')
title.addEventListener('input', () => {
    console.log(title.value)
})
const author = document.getElementById('author')
title.addEventListener('input', () => {
    console.log(author.value)
})

const pages = document.getElementById('pages')
title.addEventListener('input', () => {
    console.log(pages.value)
})




// buttons

const addButton =  document.getElementById('add');
addButton.addEventListener('click', () => {
    console.log('add button is pressed')
    addBookToLibrary(title.value,author.value,pages.value)
})

const displayBook = document.getElementById('display-books')
displayBook.addEventListener('click' , ()=>{
    showBook(library)
})