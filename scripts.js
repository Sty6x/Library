let library = []

function Book(title, author, pages, description) {
    this.title = title
    this.author = author
    this.pages = pages
    this.description = description
}


//just returns the new book
function addBookToLibrary(title, author, pages, description) {
    let book = new Book(title, author, pages, description)
    library.push(book)
    return book;
}

//logs each book in the array(library)
function showBook(library) {
    for (let book in library) {
        console.log(library[book])
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


const addButton = document.getElementById('add');
let newBook
addButton.addEventListener('click', () => {
    console.log('book is added!')

    //adds the values to newly creted book everytime
    // add button is pressed
    addBookToLibrary(title.value, author.value, pages.value, description.value)
    console.log(library)


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
    titleUser.textContent = newBook.title

    // after pressing display 
    // pop up disappears
    popUpFrom.style.display = 'none'
    dimBg.classList.remove('dim')


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