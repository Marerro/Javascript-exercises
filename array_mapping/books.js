var books = [
    { title: 'Knyga #1', price: 10.25},
    { title: 'Knyga #2', price: 5.15},
    { title: 'Knyga #3', price: 7.32},
    { title: 'Knyga #4', price: 54.01},
    { title: 'Knyga #5', price: 77.17},
];


// Parašykite funkciją, kuri atspausdintų visą knygų sąrašą (knygos eilės numerį ir pavadinimą. Panaudokite metodą map
const printBookList = () => {
    const bookArr = books.map((book, index) => {
        console.log(`Knygos eilės numeris ${index}, Pavadinimas ${book.title}`);
    })
}

console.log(printBookList());

// Parašykite funkciją, kuri paskaičiuotų, kiek knygų yra lentynoje.

const bookInShelf = () => {
    let book = "Knygos lentynoje:\n";
    for (i = 0; i < books.length; i++) {
        book += `${i + 1}. ${books[i].title}\n`;
    }
    return book;
}

console.log(bookInShelf());

// Parašykite funkciją, kuri į duoto knygų masyvo galą pridėtų knygą. Pvz. 'Knyga #6', kaina 2,75. Panaudokite metodą push()

const addBook = () => {
    const myObject = { title: 'Knyga #6', price: 90.17 };
    books.push(myObject);
    return books;
}

console.log(addBook());

// 4. Parašykite funkciją, kuri išvestų paskutinės knygos pavadinimą ir kainą.

const output = () => {
    const last = books[books.length - 1]
    console.log(last);
}

output();

// Parašykite funkciją suskaičiuojančią, už kiek eurų yra knygų knygyne.

const totalSum = () => {
    let sum = 0;
    for (let i = 0; i < books.length; i++) {
       sum += books[i].price;
    }
    return `Total suma: ` + sum;
};

console.log(totalSum());

// 6. Parašykite funkciją, kuri apskaičiuotų 25 % nuolaidą knygoms, kurių kaina didesnė nei 10 eurų ir atspausdintų

const procentDiscount = () => {
    let discountedBooks = "!!! Nukainuota!!!\n";
    books.forEach(book => {
        if (book.price > 10) {
            const newPrice = book.price * 0.75; 
            discountedBooks += ` Knyga: ${book.title} Sena kaina: ${book.price} Pardavimo kaina: ${newPrice} Pritaikyta nuolaida -25%`;
        }
    });
    return discountedBooks !== "" ? discountedBooks : "Nėra tokių knygų, kurių kaina didesnė nei 10 EUR.";
}
console.log(procentDiscount());