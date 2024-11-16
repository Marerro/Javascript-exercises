const askforAge = prompt("Kiek yra tau metu?");
const askforName = prompt("Koks yra tavo vardas?");

const itsjustaFunction = (age, name) => {
     return prompt(`Sveiki, man yra ${age} ir mano vardas yra: ${name}`);
}

const resultofname = itsjustaFunction(askforAge, askforName);

itsjustaFunction(resultofname);