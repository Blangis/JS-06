 /** 
 const users = [
    {
      id: 1,
      username: "booklover123",
      description: "Avid reader and coffee enthusiast.",
      age: 29,
      fav_books: {
        books: ["To Kill a Mockingbird", "1984", "Pride and Prejudice"]
      }
    },
    {
      id: 2,
      username: "literature_junkie",
      description: "Poetry lover and amateur writer.",
      age: 35,
      fav_books: {
        books: ["The Great Gatsby", "Invisible Man", "Beloved"]
      }
    }
  ];
  */

const USER1 = document.querySelector("#uno");


const usuarios = [ {
    id: 1,
    username: "booklover123",
    descrip: "Avid reader and coffe anthusiast",
    age: 29,
    fav_books: {
        books: [
            "To kill a Mockingbird",
            "1984",
            "Pride and Prejudice",
        ],
    }
}, 
{
    id: 2,
    username: "literature_junkie",
    description: "Poetry lover and amateur writer",
    age: 35,
    fav_books: {
        books: [
            "The Great Gatsby",
            "Invisible Man",
            "Beloved",
        ]
    }
}
];

//Secciones

const bookList = USERS.fav_books.books.map((e) => {
    const item = document.createElement ("ul");
    item.textContent = e;
    return item;
})

function infoUsers () {
    const infoTodo = document.getElementById("uno");

    usuarios.forEach(user => {
    const card = document.createElement("div");
    
    const id= document.createElement("h4");
    username.textContent = `Username ${usuarios.username}`;
    const usuario = document.createElement("h1");
    const descrip = document.createElement("h2");
    const eta = document.createElement("p");
    const libros = document.createElement("div");
    


}

