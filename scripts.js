let library = []

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages


}


//just returns the new object book
function addBookToLibrary(title, author, pages, library) {
    let book = new Book(title, author, pages)
    library.push(book)
    //adds unique id for each book
    for (let i = 0; i < library.length; i++) {
        library[i].id = `book-${i}`
        library[i].read = false
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
// const userBook = document.querySelector('.book')

function createBook(newBook, library) {
    const bookContainer = document.createElement('div')
    const contentBox = document.createElement('div')

    const firstContainer = document.createElement('div')
    const secondContainer = document.createElement('div')
    const thirdContainer = document.createElement('div')
    const fourthtContainer = document.createElement('div')

    const title = document.createElement('h1')
    const author = document.createElement('h1')
    const pages = document.createElement('h1')


    // displays user's input 
    const userTitle = document.createElement('p')
    const userAuthor = document.createElement('p')
    const userPages = document.createElement('p')


    const removeButton = document.createElement('button')


    // //User Input
    userTitle.textContent = newBook.title
    userAuthor.textContent = newBook.author
    userPages.textContent = newBook.pages

    //User Input

    bookContainer.classList.add('book')
    bookContainer.appendChild(contentBox)
    contentBox.classList.add('content-box')
    contentBox.append(firstContainer, secondContainer, thirdContainer, fourthtContainer)

    title.classList.add('title', 'contents')
    author.classList.add('author', 'contents')
    pages.classList.add('pages', 'contents')

    userTitle.classList.add('title-user', 'user')
    userAuthor.classList.add('author-user', 'user')
    userPages.classList.add('page-user', 'user')
    removeButton.classList.add('delete-book')


    firstContainer.classList.add('first', 'container')
    secondContainer.classList.add('second', 'container')
    thirdContainer.classList.add('third', 'container')
    fourthtContainer.classList.add('fourth', 'container')

    firstContainer.append(title, userTitle)
    secondContainer.append(author, userAuthor)
    thirdContainer.append(pages, userPages)

    fourthtContainer.append(removeButton)


    title.innerText = 'Title'
    author.innerText = 'Author'
    pages.innerText = 'Pages'
    removeButton.innerText = 'Remove Book'
    // desc.innerText = 'Description'
    bookGrid.appendChild(bookContainer)

    for (let i = 0; i < library.length; i++) {
        library[i].id = bookContainer.setAttribute('id', `book-${i}`)
    }
    if (newBook.read == true) {
        bookContainer.classList.add('if-read')
    }

}



function removeBook() {

}

//functionality


//reference for pop-up form
const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
// const description = document.getElementById('description')


const addButton = document.getElementById('add');
let newBook
addButton.addEventListener('click', () => {
    console.log('book is added!')

    //adds the values to newly creted book everytime add button is pressed
    addBookToLibrary(title.value, author.value, pages.value, library)
    newBook = library[library.length - 1]


    // resets value after every add press to prevent
    // duplication everytime button is pressed
})

// logs each book
const displayBook = document.getElementById('display-books')

displayBook.addEventListener('click', () => {
    console.log('book is being displayed!')
    showBook(library)
    // shows books content

    // returns the last index of book
    createBook(newBook, library)
    title.value = '';
    author.value = '';
    pages.value = '';
    // description.value = '';
    popUpForm.style.borderLeft = '';
})







//enables background to dim when form pops up
const popUpForm = document.querySelector('.pop-up-card');
const dimBg = document.querySelector('.pop-up-BG')
const addButtonIcon = document.querySelector('.add-book-icon');


addButtonIcon.addEventListener('click', () => {
    popUpForm.style.display = 'flex'
    dimBg.classList.add('dim')
})


//clicking outside the pop-up card 
//quits out pop-up form
dimBg.addEventListener('click', () => {
    // css display set to none after adding
    popUpForm.style.display = 'none'
    dimBg.classList.remove('dim')
})






//sets border-left to green if book is read
//come back to this
// event delegation
bookGrid.addEventListener('click', (e) => {
    // console.log(e)
    const target = e.target;

    if (target.matches('.book') ||
        target.matches('.contents') || target.matches('.user') ||
        target.matches('.content-box')) {
        // console.log('book clicked')
        const userBook = document.querySelectorAll('.book')
        // console.log(userBook)
        userBook.forEach(book => {
            book.addEventListener('click', () => {
                if ((book.classList.contains('if-read'))) {
                    book.classList.remove('if-read')
                    newBook.read = false
                } else {
                    book.classList.add('if-read')
                    newBook.read = true
                }
            })
        });


    }
    else if (target.matches('.delete-book')) {
        
        const deleteButton = document.querySelectorAll('.delete-book')
        let button;
        for(let i = 0; i < deleteButton.length; i++){
            button = deleteButton[i]
            button.setAttribute('id',i)
          
        }
        deleteButton.forEach(button => {
            button.addEventListener('click',()=>{
                console.log(button)
            })
        })
      
        
        
    }
});


const ifReadButton = document.getElementById('if-read');
ifReadButton.addEventListener('click', () => {
    popUpForm.style.borderLeft = ' 10px solid rgb(140 197 116)'
    console.log('book read')
    try {
        newBook.read = true
    } catch (error) {
        console.log('newBook obj doesnt exist to let read become true')
    }
})