import {mount as productsMount} from 'products/ProductsIndex';
import {mount as cartMount } from 'cart/CartShow';

console.log('Container!');

console.log('document.querySelector("#my-products") :>> ', document.querySelector("#my-products"));
console.log('document.querySelector("#my-cart") :>> ', document.querySelector("#my-cart"));

productsMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));