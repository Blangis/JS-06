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


const USERS = [ {
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


const card = document.createElement("div");
const id= document.createElement("h4");
const usuario = document.createElement("h1");
const descrip = document.createElement("h2");
const eta = document.createElement("p");
const libros = document.createElement("div");

const bookList = USERS 

