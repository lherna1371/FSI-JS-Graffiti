
// Select some elements...
let header = document.querySelector('#page-header');
console.log(header)

header.children[0].textContent = 'Luis Hernandez';
header.style.background = 'green';
header.style.textAlign = 'left';


const images = document.querySelectorAll('.dog-image');
for (let i = 0; i < images.length; i++) {
    const element = images[i];
    console.log(images[i])
    element.style.borderRadius = '25%';
    element.style.border = '5px solid red';
}   