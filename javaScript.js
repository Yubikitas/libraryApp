const myLibrary = []; 

const modal = document.querySelector("#modal"); 
const openModal = document.querySelector(".addBook"); 
const submitData = document.querySelector(".submitButton"); 
const libList = document.querySelector(".listHead"); 


openModal.addEventListener("click",()=>{
    modal.showModal(); 
}); 

submitData.addEventListener("click",()=>{
    const title = document.querySelector("#titleInput"); 
    const author = document.querySelector("#authorInput"); 
    const pages = document.querySelector("#pagesInput"); 
    const status = document.querySelector("input[name=readStatus]:checked"); 

    const newBook = new Book(title.value, author.value,pages.value,status.value); 
    console.log(newBook); 
    addBooktoLibrary(newBook); 
    //erases existing DOM list 
    while (libList.hasChildNodes()){
        libList.removeChild(libList.lastChild); 
    }
    //populate list from array 
    for (i=0;i<myLibrary.length;i++){ 
        PopulateTable(myLibrary[i]); 
    }

}); 


function Book(title,author,pages,read){ 
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.status = read; 

    
}


/*
function ToggleBook (){
    if (this.status=="Read"){
        this.status= "Not Read"; 
        console.log(this.status);
    }   
    else {
        this.status = "Read"
    }
*/

function addBooktoLibrary(book){ 
    myLibrary.push(book); 
}

function PopulateTable(book){

    const newBookList = document.createElement("tr");
    const bookTitle = document.createElement("td"); 
    const bookAuthor = document.createElement("td"); 
    const bookPages = document.createElement("td"); 
    const bookStatus = document.createElement("td"); 
    const bookToggle = document.createElement("td"); 
    const removeRow = document.createElement("td"); 
    const toggleButton = document.createElement("input"); 
    toggleButton.type = "checkbox"; 

    if (book.status=="Read"){
        toggleButton.checked="false"; 
    }
    else {
        toggleButton.setAttribute="checked"; 
    }

    toggleButton.addEventListener("change",function(){
        if (toggleButton.checked){
            ToggleBook(book); 
        }
    }); 

    var removeIcon = document.createElement("img"); 
    removeIcon.src = "erase.svg";

    removeIcon.addEventListener("click",()=>{
        newBookList.remove(); 

    }); 

    removeRow.appendChild(removeIcon); 
    bookToggle.appendChild(toggleButton); 

    
    newBookList.appendChild(bookTitle); 
    newBookList.appendChild(bookAuthor); 
    newBookList.appendChild(bookPages); 
    newBookList.appendChild(bookStatus); 
    newBookList.appendChild(bookToggle); 
    newBookList.appendChild(removeRow); 
    

    bookTitle.textContent = book.title; 
    bookAuthor.textContent = book.author; 
    bookPages.textContent = book.pages; 
    bookStatus.textContent = book.status;

    libList.appendChild(newBookList); 
}


