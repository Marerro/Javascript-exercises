const getMonth = (months) => {
    const now = new Date(months)
}

const dateFunction = (output) => {
    let date = new Date('2020-04-31');
    let date1 = new Date('')
}

// let now1 = new Date();
// console.log(now);

// const timestamp = 962044520000;

// const datosatspausdinimas = new Date(timestamp);
// console.log(datosatspausdinimas);

// let date2 = new Date('2018-03-15');
// let timeSt = date2.getTime();
// console.log(timeSt);

// const timefordate = 1521072000000;

// const resultatas = new Date(timefordate);

// console.log(resultatas);


//  Timestamp gavimas 

let birthdatetoStamp = new Date('2000-06-26');
let timestamp = birthdatetoStamp.getTime();
console.log(timestamp);

// Output: 961977600000

// ----------------------------------------

const makestamptoDate = 961977600000;

const result = new Date(makestamptoDate);

console.log(result);

// Output: 2000-06-26T00:00:00.000Z