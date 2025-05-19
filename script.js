function resetBoard(boxesPerRow) {
    const board = document.getElementById("board");

    for (let i = 0; i < boxesPerRow; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        board.appendChild(rowDiv);
    }

    const rowDivs = document.querySelectorAll(".row");
    
    rowDivs.forEach(rowDiv => {
        for (let i = 0; i < boxesPerRow; i++) {
            const elementDiv = document.createElement("div");
            elementDiv.classList.add("element");
            rowDiv.appendChild(elementDiv);
        }
    });
    const input = document.getElementById("number-per-side");
    input.setAttribute("value", boxesPerRow);
    input.value = boxesPerRow;

    //Listens for mouseover
    const elements = document.querySelectorAll("div.element");
    elements.forEach(element => {
        element.addEventListener("mouseover", function changeBg() {
            if (!board.classList.contains("boardClicked")) {
                if (eraseButton.classList.contains("clicked")) {
                    element.style.backgroundColor = "aliceblue";

                } else if (rgbButton.classList.contains("clicked")) {
                    let r = Math.floor(Math.random() * 256);
                    let g = Math.floor(Math.random() * 256);
                    let b = Math.floor(Math.random() * 256);
                    element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

                }else {
                    element.style.backgroundColor = color;
                }
            }
            
        });
    });
    
}

function removeBoxes() {
    const board = document.getElementById("board");

    while (board.firstChild) {
        board.removeChild(board.lastChild);
    }

    const eraseButton = document.getElementById("eraser");
    if (eraseButton.classList.contains("clicked")) {
        eraseButton.classList.remove("clicked");
    }

    const rgbButton = document.getElementById("rgb");
    if (rgbButton.classList.contains("clicked")) {
        rgbButton.classList.remove("clicked");
    }
}


//default variables
let prevBoxesPerRow = "16";
let color = "#9acd32";

//load default(16*16) grid on load
window.onload = (event) => {
    resetBoard(16);

    //check for board click
    const board = document.getElementById("board");
    board.addEventListener("click", () => {
        board.classList.toggle("boardClicked");
    });
};
//Listens for color picker change
const colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener("change", () => {
    if (rgbButton.classList.contains("clicked")) {
        rgbButton.classList.remove("clicked");
    }

    if (eraseButton.classList.contains("clicked")) {
        eraseButton.classList.remove("clicked");
    }

    color = colorPicker.value;
});

//Listens for eraseButton click
const eraseButton = document.getElementById("eraser");
eraseButton.addEventListener("click", () => {
    if (rgbButton.classList.contains("clicked")) {
        rgbButton.classList.remove("clicked");
    }
    eraseButton.classList.toggle("clicked");
});

//Listens for rgbButton click
const rgbButton = document.getElementById("rgb");
rgbButton.addEventListener("click", () => {
    if (eraseButton.classList.contains("clicked")) {
        eraseButton.classList.remove("clicked");
    }
    rgbButton.classList.toggle("clicked");
});

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", e => {

    let boxesPerRow = document.getElementById("number-per-side").value;
    if (+boxesPerRow <= 64 && +boxesPerRow >= 1) {
        removeBoxes();
        resetBoard(+boxesPerRow);
        prevBoxesPerRow = boxesPerRow;
    } else {
        const input = document.getElementById("number-per-side");
        input.setAttribute("value", prevBoxesPerRow);
        input.value = prevBoxesPerRow;
        alert("Please enter a number between 1 and 64");
    }
});