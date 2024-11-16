const getMonth = (months) => {
    const now = new Date(months)
}

const dateFunction = (output) => {
    const date = new Date('2020-04-31');
    const date1 = new Date('')
}

//  Timestamp gavimas 

const birthdatetoStamp = new Date('2000-06-26');
const timestamp = birthdatetoStamp.getTime();
console.log(timestamp);

// Output: 961977600000

// ----------------------------------------

const makestamptoDate = 961977600000;

const result = new Date(makestamptoDate);

console.log(result);

// Output: 2000-06-26T00:00:00.000Z

const personstamp = new Date("1998-04-23");
const stampPerson = personstamp.getTime();
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
console.log(monthFunction(myDate)); // Output: June

const menesiai = (dateString) => {
    const months = [   "January", "February", "March", "April", "May", "June",   "July", "August", "September", "October", "November", "December" ];
    const now = new Date(dateString);
    const monthIndex = now.getMonth();
    return months [monthIndex];
}

console.log(menesiai("2015-07-20")); // Output: July

const nustatytiValandas = (hour) => {
    const date = new Date();
    date.setHours(hour);
    return date;
}

console.log(nustatytiValandas(18)); // Output: 2024-11-15T16:26:21.784Z

const nustatytiMenesi = (menesis) => {
    const data = new Date();
    data.setMonth(menesis);
    return data;
}

console.log(nustatytiMenesi(6)) // Output: 2024-07-15T09:26:21.784Z

const datePicker = () => {

    const iskvietimas1 = prompt("Įveskite pirma data:");
    const iskvietimas2 = prompt("Įveskite antra data:");

    const date1 = new Date(iskvietimas1);
    const date2 = new Date(iskvietimas2);
    if(date1 < date2) {
        return `Pasirinkta data ${date1.toDateString()} yra mazesne nei ${date2.toDateString()}`;
    } else {
        return `Pasirinkta data ${date1.toDateString()} yra didesne nei ${date2.toDateString()}`;
    }
}

const datosresultatas = datePicker()
alert(datosresultatas);

const elem = document.getElementById('elems')
console.log(elem);




