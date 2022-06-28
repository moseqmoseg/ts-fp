import {Invoice} from "./classes/invoice.js"
const invOne = new Invoice("Luigi", "new website", 340);
const invTwo = new Invoice("Mario", "new application", 560);

let invoices: Invoice[] = [];
invoices.push(invOne, invTwo);
console.log(invoices);
invoices.forEach((invoice) => console.log(invoice.format()));

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
