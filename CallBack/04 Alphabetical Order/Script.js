function logBookTitles(books, callback) {
    const titles = books.map(book => book.title);
    const sortedTitles = titles.sort();

    callback(sortedTitles);
  }
  const books = [
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
  ];
  function logTitles(titles) {
    console.log("Book Titles:");
    titles.forEach(title => console.log(title));
  }
  logBookTitles(books, logTitles);
  