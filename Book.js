export class Book {
   constructor( title, author, description, pages, currentPage, read ) {
       this.title = title;
       this.author = author;
       this.description = description;
       this.pages = pages;
       this.currentPage = currentPage;
       this.read = read;
   }

   readBook( page ) {
       if ( ( page < 1 ) || ( page > this.pages ) ){
           return 0;
       } 
       else if ( page >= 1 && page < this.pages ){
           this.currentPage = page;
           return 1;
       }
       else if ( page = this.pages ){
           this.currentPage = page;
           this.read = true;
           return 1;
       }
   }
}

let firstBook = new Book( "The Programmer", "Mudathir Lawal", "Story of a Nigerian prgrammer", 255, 3, false );
let secondBook = new Book( "20th Century Inventions", "Jerry Black", "About world Inventions", 400, 399, false );
let thirdBook = new Book( "Africa", "Will Alex", "About Africa", 300, 150, false );
let fourthBook = new Book( "Programming with Mind & Heart", "Mudathir Lawal", "About learning to program", 500, 350, false );

export const books = [ firstBook, secondBook, thirdBook, fourthBook ];
