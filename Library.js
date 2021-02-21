console.log("Library site");
class Book {
    constructor(name, author, category) {
        this.name = name;
        this.author = author;
        this.category = category;
    }
}
class Display {
    add(book)
    {
        console.log("Adding to UI");
       let entry= document.getElementById("entry");
       let newEntry= ` <tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.category}</td>
                  </tr>`
        entry.innerHTML += newEntry;
    }
    validate(book)
     {
        if (book.name.length < 3 || book.author.length < 3) 
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    clear()
    {
        let addbook = document.getElementById("addbook");
        addbook.reset();
    }
    show(type,message)
    {
        let boldText;
        let success= document.getElementById("msg");
        if(type==='success'){
            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }
        success.innerHTML=` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${boldText}</strong> ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`

      setTimeout(function () 
      {
        success.innerHTML = ''
    }, 6000);
    }

}
let addbook = document.getElementById("addbook");
addbook.addEventListener("submit", booksubmit);

function booksubmit(e) {

    let name = document.getElementById("bookname").value;
    let author = document.getElementById("author").value;
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let mythological = document.getElementById("mythological");
    let category;

    if (fiction.checked) {
        category = fiction.value;
    }
    else if (programming.checked) {
        category = programming.value;
    }
    else if (mythological.checked) {
        category = mythological.value;
    }

    let newBook = new Book(name, author, category);
    let displayBook= new Display();

    if(displayBook.validate(newBook))
    {
        displayBook.add(newBook);
        displayBook.clear();
        displayBook.show("success","Book has been added");
    }
    else{
        displayBook.show('danger'," Can not add this book......Invalid credentials.");
    }
    e.preventDefault();
}