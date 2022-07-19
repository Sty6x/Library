let library = []

function Book(title, author, pages, description) {
    this.title = title
    this.author = author
    this.pages = pages
    this.description = description
}


//just returns the new object book
function addBookToLibrary(title, author, pages, description ,library) {
    let book = new Book(title, author, pages, description)
    library.push(book)
    //adds unique id for each book
    for (let i = 0; i < library.length; i++){
        library[i].id = `book-${i}`
    }
    return book;
}

//logs each book in the array(library)
function showBook(library) {
    for (let book in library) {
        console.log(library[book])
    }
}

const bookGrid = document.querySelector('.book-grid')

function createCard(newBook,library){
    for(let i = 0; i < library.length; i++){
        const div = document.createElement('div')
        div.textContent = newBook.title
        bookGrid.appendChild(div)
        console.log(div)
    }

}


//functionality

const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const description = document.getElementById('description')

const authUser = document.querySelector('.auth-user')
const titleUser = document.querySelector('.title-user')
const pageUser = document.querySelector('.page-user')
const descriptionUser = document.querySelector('.description-box')
const book0 = document.getElementById('book-0')


const addButton = document.getElementById('add');
let newBook
addButton.addEventListener('click', () => {
    console.log('book is added!')

    //adds the values to newly creted book everytime
    // add button is pressed
    addBookToLibrary(title.value, author.value, pages.value, description.value,library)


    // resets value after every add press to prevent
    // duplication everytime button is pressed
    title.value = '';
    author.value = '';
    pages.value = '';
    description.value = '';
})

// logs each book
const displayBook = document.getElementById('display-books')
displayBook.addEventListener('click', () => {
    console.log('book is being displayed!')
    // showBook(library)
    // shows books content

    // returns the last index of book
    newBook = library[library.length - 1]
    console.log(library[library.length -1])
    // titleUser.textContent = newBook.title
    // authUser.textContent = newBook.author
    createCard(newBook,library)
})


//enables background to dim when form pops up
const popUpFrom = document.querySelector('.pop-up-card');
const dimBg = document.querySelector('.pop-up-BG')
const addButtonIcon = document.querySelector('.add-book-icon');

addButtonIcon.addEventListener('click', () => {
    popUpFrom.style.display = 'flex'
    dimBg.classList.add('dim')
})


//clicking outside the pop-up card 
//quits out pop-up form
dimBg.addEventListener('click', () => {
    // css display set to none after adding
    popUpFrom.style.display = 'none'
    dimBg.classList.remove('dim')
})





const deleteButton = document.getElementById('delete-book')
deleteButton.addEventListener('click', ()=>{
    library.pop()
    console.log(library[library.length -1])
})


