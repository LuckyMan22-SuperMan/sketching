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