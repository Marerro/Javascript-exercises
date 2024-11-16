const element = document.querySelector("#but");
const takeDiv = document.querySelector("#elems");
const selectallButtons = document.querySelectorAll(".button");

element.onclick = () => {
    element.style.color = "#ff0000";
    element.style.color = "#34eb64";
};

const changeColor = () => { // Rečiau naudojamas būdas... Alternatyva addEventListener 
    takeDiv.onclick = () => { // Funkcija funkcijoje...
        takeDiv.style.backgroundColor = "#ff0000"; 
    }
} 

changeColor(takeDiv);

element.addEventListener("click", () => {
    takeDiv.style.backgroundColor = "blue";
    console.log("Pele užvesta ant elemento!")
})

selectallButtons.forEach(e => {
    console.log(e);
})

if(selectallButtons.length > 0) {
    selectallButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.style.color = "red";
            console.log("Pažymėjai elementą")
        })
    });
}
        else {
            console.log("Elementas buvo nerastas. Patikrink selektoriu!");
        }

// -----------------------------------

const clickColor = (e) => {
    e.target.style.backgroundColor = "purple";
};

selectallButtons.forEach(button => {
    button.addEventListener("click", clickColor);
})

// -----------------------------------

const selectImage = document.querySelectorAll(".image");

const whenUserclicks = (e) => {
    e.target.style.border = "3px green solid";
    e.target.style.width = "400px";
}

selectImage.forEach(paspaudimas => {
    paspaudimas.addEventListener("mousedown", whenUserclicks);
})

// -----------------------------------

// Prisiskyrimas naujam atributui, įvykdžius click įvykiui pasikeičia nuotrauką.

const elementas = document.querySelector(".image");

elementas.setAttribute("id", "helloButton");

const test = (e) => {
    e.target.src = "../dom/assets/sweet.jpg";
}

elementas.addEventListener("click", test);


// -----------------------------------

// Keičia visus elementus, įvykdžius click įvykiui.

const setDiv = document.querySelectorAll(".image");

setDiv.forEach(paspaudimas => {
    paspaudimas.setAttribute("id", "helloButton");
});

const clicking = (e) => {
    e.target.src = "../dom/assets/sweet.jpg";
}

setDiv.forEach(paspaudimas => {
    paspaudimas.addEventListener("click", clicking);
});

// -----------------------------------

// Klases --->

const klases = document.querySelector(".btn")
klases.addEventListener("click", () => {
    klases.classList.toggle("active");
});

// -----------------------------------

// Elementu sukurimas HTML su Javascript

const para = document.createElement("h1");
var node = document.createTextNode("This is new");
para.appendChild(node);
var connect = document.getElementById("div1");
connect.appendChild(para);

// 2 variantas:

const buttonText = document.createTextNode("Next!");
const buttonElem = document.createElement("button");
buttonElem.appendChild(buttonText);
document.querySelector(".div1").appendChild(buttonElem);