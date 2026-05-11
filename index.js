import { calculateDiscounts } from './discounts.js';
import { calculateShipping } from './shipments.js';
import { typeOfCliente } from './typeofCliente.js';


let name = prompt('What is your name ? ');
let productsArray = prompt('How many products you have ? ');
let total = prompt('How much is it ?');
const discount = calculateDiscounts(total);
const shipments = calculateShipping(productsArray)  ;
const isVip = typeOfCliente(total, productsArray);

console.log(`Hi ${name}`);
console.log(`Shipping cost: ${shipments == -1 ? `You need to buy at least three products `: shipments} `);
console.log(`Your discount is :${discount}`);
if (discount === 12 || discount === 5)  total = total - ((total* discount)/100);
if(shipments === 15 ) total = total + 15;
console.log( `Total : ${total}`);


