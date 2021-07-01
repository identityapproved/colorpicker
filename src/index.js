import './sass/main.scss';

const colorPalette = document.querySelector('.color-palette');
const output = document.querySelector('.output')

function getRandomHex() {
   return `#${Math.floor(Math.random()*16777215).toString(16)}`;
};

function createPaletteItems(amount) {
   const items = [];
   for (let i = 0; i < amount; i += 1) {
      const color = getRandomHex();
      const button = document.createElement('button');
      button.type = 'button';
      button.classList.add('item');
      button.style.backgroundColor = color;
      button.dataset.color = color;
      items.push(button)
   }
   colorPalette.append(...items);

}

colorPalette.addEventListener('click', selectedColor)

function selectedColor(event) {
   const color = event.target.dataset.color;
   if (!color) {
      return;
   }
   // if (event.target.nodeName !== 'BUTTON') {
   //    return;
   // }
   updateOutput(color);
}

function updateOutput(color) {
   output.style.color = color;
   output.textContent = `Selected color: ${color}`
}

createPaletteItems(60)