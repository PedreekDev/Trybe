import { nanoid } from 'nanoid';
import './style.css';

const getButton = document.querySelector('button');
const display = document.querySelector('h2');

getButton.addEventListener('click', () => {
    display.innerHTML = nanoid();
})
