let phoneNumber = document.getElementById('phone-number');
let numbers = [];
const deleteBtn = document.getElementById("delete");
var pressTimer;

document.querySelectorAll("#add").forEach(btn => {
    btn.addEventListener("click", () => {
        addNumber(btn.innerText[0]);
    });
});
deleteBtn.addEventListener("click", () => {
    if (!pressTimer) {
        deleteNumber();
    }
});

deleteBtn.addEventListener("mousedown", () => {
    pressTimer = window.setTimeout(() => {
        numbers = [];
        phoneNumber.textContent = "";
        pressTimer = null;
    }, 1000);
});

deleteBtn.addEventListener("mouseup", () => {
    clearTimeout(pressTimer);
    pressTimer = null;
});

function addNumber(number) {
    if (numbers.length >= 12) {
        return;
    }
    numbers.push(number);
    phoneNumber.textContent = numbers.join('');
}

function deleteNumber() {
    numbers.pop();
    phoneNumber.textContent = numbers.join('');
}
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}