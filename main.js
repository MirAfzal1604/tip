"use static"

const tip = document.querySelector(".tip");
const total = document.querySelector(".totalMoney");
const persons = document.querySelector(".persons");

let totalBill = document.querySelector("#totalBill");
let eachPerson = document.querySelector("#EachPerson");

function show() {
    var countTip = Number(totalBill.value * .15);
    var countTotal = Number(totalBill.value) + countTip;
    var countPersons = countTotal / eachPerson.value;

    tip.innerHTML = "$ " + Number(countTip).toFixed(2);
    total.innerHTML = "$ " + Number(countTotal).toFixed(2);
    persons.innerHTML = "$ " + Number(countPersons).toFixed(2);
}

function reload() {
    tip.innerHTML = "";
    total.innerHTML = "";
    persons.innerHTML = "";

    totalBill.value = "";
    eachPerson.value = "";
}