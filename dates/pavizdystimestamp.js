const getMonth = (months) => {
    const now = new Date(months)
}

const dateFunction = (output) => {
    let date = new Date('2020-04-31');
    let date1 = new Date('')
}

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

let personstamp = new Date("1998-04-23");
let stampPerson = personstamp.getTime();
console.log(stampPerson);

// Output: 893289600000

const personbirthDate = 893289600000;
const resultofDate = new Date(personbirthDate);
console.log(resultofDate);

// Output: 1998-04-23T00:00:00.000Z

const personDiffDates = () => {

    const differenceinStamp =  timestamp - stampPerson; // Dvi skirtingos datos timestamp. Output: 68688000000
    console.log(differenceinStamp);

    const differenceinDays = differenceinStamp / (1000 * 60 * 60 * 24) // Išgaunamos iš timestamp dienos. Output: 795
    console.log(differenceinDays);

    const differenceinYears = differenceinDays / 365 // išgaunama iš dienu kiek metu.
    const result = `Skirtumas metais tarp tavo datos ir kitos datos yra ${differenceinYears.toFixed()};`
    console.log(result)
}

personDiffDates();

const nowThisMoment = new Date(); // Šis nowThisMoment gauna dabartini laiką.
const datos = nowThisMoment.getFullYear(); // Datos turi daug metodu!!
console.log(typeof datos); // Output: number
console.log(datos); // Output: 2024

const monthFunction = (date) => {
    const months = [   "January", "February", "March", "April", "May", "June",   "July", "August", "September", "October", "November", "December" ];
    const monthIndex = date.getMonth(); // Gauti mėnesio indeksą (nuo 0 iki 11)
    return months[monthIndex];
}

const myDate = new Date('2005-06-30');
console.log(monthFunction(myDate));