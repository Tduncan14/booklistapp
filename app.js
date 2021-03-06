// Book Class: Represents a Books
class Book{
    constructor(title,author,isbn)
    {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayBooks(){
        const StoredBooks =[
            {
                title:"Keep Moving Forward",
                author:"Treek",
                isbn:"343439"
            },
            {
                title:"Always Keep Moving Forward",
                author:"Shawn you are the best",
                isbn:"29403"
            }

        ];
        const books = StoredBooks;

        books.forEach(book =>UI.addBookToList(book));
    }
   static addBookToList(book){
      const list = document.querySelector("#book-list");

      const row = document.createElement('tr');

      row.innerHTML =`
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;

      list.appendChild(row);
   }

   static showAlert(message){
       const div = document.createElement('div');

       
   }

   static deleteBook(el){
       if(el.classList.contains('delete')){
           el.parentElement.parentElement.remove();
       }
   }

   static clearFields(){
       document.querySelector('#title').value = '';
       document.querySelector('#author').value='';
       document.querySelector("#ISBN").value='';
   }
}

//Store Class: Handles Storage

// Have an event to display the books
 document.addEventListener('DOMContentLoaded',UI.displayBooks);

 // envent add a book

 document.querySelector('#book-form').addEventListener('submit',(e) =>{
    // Prevent actual submit
    e.preventDefault();

  // Get form values
    const title = document.querySelector('#title').value;

    const author = document.querySelector('#author').value;

    const isbn = document.querySelector('#ISBN').value;

   //Validate
   if(title =='' || author == '' || isbn == '' ){
     alert('Please fill in all fields');

   }

   else{
       
    // Instatiate Book instance of a book
    const book = new Book(title,author,isbn);

    console.log(book);

    // add Book to ui
    UI.addBookToList(book);

    // A method that is called clear fields

    UI.clearFields();

   }



 });




// Have an event to remove the book

document.querySelector('#book-list').addEventListener('click',e =>{

    UI.deleteBook(e.target);
})
