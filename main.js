const get = (id) => document.getElementById(id);

// Alla element vi kommer att anvanda
const input1 = get("input1"); // varde 1
const input2 = get("input2"); // varde 2

const input3 = get("input3"); // tredje faltet
const buttonAdd = get("addition");
const buttonDivision = get("division");
const buttonSubtraction = get("subtraction");

// Funktion som kallas pa nar nagon tryckt pa knappen
function add() {
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);

    const result = value1 + value2;

    input3.value = result;
}

function division() {
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);

    const result = value1 / value2;

    input3.value = result;
}

function subtraction() {
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);

    const result = value1 - value2;

    input3.value = result;
}

// Lagger vi till en "lyssnare" pa knappen, som lyssnar pa
// "click" eventet (ett inbyggt event i Javascript).
// Vi skickar in varan "whenClicked" funktion.
buttonAdd.addEventListener("click", add);
buttonDivision.addEventListener("click", division);
buttonSubtraction.addEventListener("click", subtraction);