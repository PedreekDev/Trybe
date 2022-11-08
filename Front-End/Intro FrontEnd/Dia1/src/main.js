import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

const getButton = document.querySelector('button');
const display = document.querySelector('h2');

getButton.addEventListener('click', () => {
    display.innerHTML = nanoid();
});

display.addEventListener('click', async (event) => {
    await copy(event.target.innerHTML);
    alert('Senha copiada!')
})




