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
        entry= document.getElementById("entry");
    }
    clear()
    {
        let addbook = document.getElementById("addbook");
        addbook.reset();
    }

}
let addbook = document.getElementById("addbook");
addbook.addEventListener("submit", booksubmit);
function booksubmit(e) {

    let name = document.getElementById("bookname");
    let author = document.getElementById("author");
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
    let display= new Display();
    e.preventDefault();
}