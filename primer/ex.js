// TODO: define addFavoriteBook(..) function

// TODO: define printFavoriteBooks() function

function addFavoriteBook(bookName) {
  if (!bookName.includes("Great")) {
    favoriteBooks.push(bookName);
    console.log(favoriteBooks);
  }
}
function printFavoriteBooks() {
  console.log(`Favorite Books: ${favoriteBooks.length}`);
  for (let bookName of favoriteBooks) {
    console.log(bookName);
  }
}
var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
printFavoriteBooks();

function ask(question) {
  setTimeout(function waitASec() {
    console.log(question);
  }, 1000);
}
ask("what is closure?");

var workshop = {
  teacher: "Kyle",
  Sprosi(question) {
    console.log(this.teacher, question);
  },
};

workshop.Sprosi("pochemu ty zalupa takaya?");

class BookShelf {
  printFavoriteBooks() {
    console.log(`Favorite Books: ${favoriteBooks.length}`);
    for (let bookName of favoriteBooks) {
      console.log(bookName);
    }
  }
}

const bookShelfInstance = new BookShelf();
