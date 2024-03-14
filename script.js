const body = document.body

const container = document.querySelector('.container');

let button = document.createElement('button');

button.textContent = "Change size";
button.style.width= "100px";
button.style.height= "30px";
button.style.marginBottom ="10px";
button.style.marginTop ="10px";
button.style.backgroundColor="#457AA8";
button.style.color="#6B23A8";
button.style.border="3px solid #6B23A8";
button.style.cursor="pointer";

button.onmouseenter = () => {
    button.style.backgroundColor = "#6B23A8";
    button.style.color = "#457AA8";
    button.style.scale = "1.5";
}
button.onmouseleave = () => {
    button.style.backgroundColor = "#457AA8";
    button.style.color="#6B23A8";
    button.style.scale = "1";
}

let colorInput = document.createElement('input');
colorInput.type = "color";
colorInput.id = "colorPicker";
colorInput.value = "#F5D64C";
colorInput.title = "Select your color";
colorInput.style.marginBottom = "5px";
colorInput.style.width = "100px";
colorInput.style.height = "30px";
colorInput.style.background = "#6B23A8";
// colorInput.style.border = "none"
colorInput.addEventListener('input', () => {
});

body.prepend(colorInput);
body.prepend(button);

let numberOfSquares = 2;

let userInput = () => {
    numberOfSquares= prompt("Enter number between 2-50 in order to create a customized canvas");
    
    if(numberOfSquares>=2 && numberOfSquares<=50) {
        removeSquares();
        createSquares(numberOfSquares*numberOfSquares);
    } else {
        userInput();
    }
}
button.addEventListener('click',userInput); 

let createSquares = function(numberOfSquares)  {

    let size = (800 / Math.sqrt(numberOfSquares)) - 2;

    for(let i=0;i<numberOfSquares;i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        
        square.style.width = size+"px";
        square.style.height = size+"px";
        square.style.backgroundColor = "#58ABF5";
        square.style.border = "1px solid black";

        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = colorInput.value;
        })
        container.appendChild(square);
    }
}
let removeSquares = function() {
    let squares = document.querySelectorAll('.square');
    
    squares.forEach(square => {
            square.remove();
    
    })
}

createSquares(4);