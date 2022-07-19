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

function createBook(newBook,library){
    const bookContainer = document.createElement('div')
    const contentBox = document.createElement('div')

    const firstContainer = document.createElement('div')
    const secondContainer = document.createElement('div')
    const thirdContainer = document.createElement('div')
    const fourthtContainer = document.createElement('div')
    
    const title = document.createElement('h1')
    const author = document.createElement('h1')
    const pages = document.createElement('h1')

    const desc = document.createElement('h1')
    const descBox = document.createElement('div')

    // displays user's input 
    const userTitle = document.createElement('p')
    const userAuthor = document.createElement('p')
    const userPages = document.createElement('p')

    const userDesc = document.createElement('p')

    for(let i = 0; i < library.length; i++){
        //User Input
        userTitle.textContent = newBook.title
        userAuthor.textContent = newBook.author
        userPages.textContent = newBook.pages
        userDesc.textContent = newBook.description
        //User Input


        bookContainer.classList.add('book')
        bookContainer.appendChild(contentBox)
        contentBox.classList.add('content-box')
        contentBox.append(firstContainer,secondContainer,thirdContainer,fourthtContainer)



        title.classList.add('title','contents')
        author.classList.add('author','contents')
        pages.classList.add('pages','contents')
        desc.classList.add('description','contents')
        descBox.classList.add('description-box')

        userTitle.classList.add('title-user', 'user')
        userAuthor.classList.add('author-user', 'user')
        userPages.classList.add('page-user', 'user')
        userDesc.classList.add('desc-user', 'user')



        firstContainer.classList.add('first', 'container')
        secondContainer.classList.add( 'second','container')
        thirdContainer.classList.add('third','container')
        fourthtContainer.classList.add('fourth', 'container')

        firstContainer.append(title,userTitle)
        secondContainer.append(author,userAuthor)
        thirdContainer.append(pages,userPages)
        descBox.appendChild(userDesc)
        fourthtContainer.append(desc,descBox)


        title.innerText = 'Title'
        author.innerText = 'Author'
        pages.innerText = 'Pages'
        desc.innerText = 'Description'
        bookGrid.appendChild(bookContainer)

        
    }


}


//functionality


//reference for pop-up form
const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const description = document.getElementById('description')


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
    createBook(newBook,library)
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

// title.addEventListener('input', function(event){
//     if(title.validity.valueMissing){
//         title.setCustomValidity('not filled');
//         title.reportValidity();
//         event.preventDefault();
//     }else{
//         title.setCustomValidity('')
//     }
// })

// author.addEventListener('input', function(event){
//     if(author.validity.valueMissing){
//         author.setCustomValidity('not filled');
//         author.reportValidity();
//         event.preventDefault();
//     }else{
//         author.setCustomValidity('')
//     }
// })

const form = document.querySelector('form')

form.addEventListener('submit' , function(event){
    if(!email.validity.valid) {
        // If it isn't, we display an appropriate error message
        console.log('error')
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
      }
})
