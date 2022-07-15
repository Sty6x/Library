let library = []

function Book(title, author, pages,description) {
    this.title = title
    this.author = author
    this.pages = pages
    this.description = description
}

function addBookToLibrary(title, author, pages ,description) {
    let book = new Book(title, author, pages,description)
    library.push(book)
    return book;
}


function showBook(library) {
    for (let book in library) {
        console.log(library[book])
    }
}

//functionality

// const title = document.getElementById('title')
// title.addEventListener('input', () => {
//     console.log(title.value)
// })
// const author = document.getElementById('author')
// title.addEventListener('input', () => {
//     console.log(author.value)
// })

// const pages = document.getElementById('pages')
// title.addEventListener('input', () => {
//     console.log(pages.value)
// })




// buttons

const addButton =  document.getElementById('add');
addButton.addEventListener('click', () => {
    console.log('book is added!')
    addBookToLibrary(title.value,author.value,pages.value,description.value)
    
    // resets value after every add press to prevent
    // duplication everytime button is pressed
    title.value = '';
    author.value = '';
    pages.value = '';
    description.value = '';
})

const displayBook = document.getElementById('display-books')
displayBook.addEventListener('click' , ()=>{
    console.log('book is being displayed!')
    showBook(library)
    // css display set to none after adding
    popUpFrom.style.display = 'none'
})





const popUpFrom = document.querySelector('.pop-up-card');
const addButtonIcon = document.querySelector('.add-book-icon');
addButtonIcon.addEventListener('click', ()=>{
    popUpFrom.style.display = 'flex'
})


