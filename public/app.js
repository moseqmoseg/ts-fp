import { Invoice } from "./classes/invoice.js";
const invOne = new Invoice("Luigi", "new website", 340);
const invTwo = new Invoice("Mario", "new application", 560);
let invoices = [];
invoices.push(invOne, invTwo);
console.log(invoices);
invoices.forEach((invoice) => console.log(invoice.format()));
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
