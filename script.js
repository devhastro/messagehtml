const tiles = document.querySelector(".tile-container");
const backspaceAndEnterRow = document.querySelector("#backspaceAndEnterRow");
const keyboardFirstRow = document.querySelector("#keyboardFirstRow");
const keyboardSecondRow = document.querySelector("#keyboardSecondRow");
const keyboardThirdRow = document.querySelector("#keyboardThirdRow");

const chestContainer = document.querySelector(".chest-container");
const chest = document.getElementById('chest');
const key = document.getElementById('key');

const keysFirstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keysSecondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const keysThirdRow = ["Z", "X", "C", "V", "B", "N", "M"];

const rows = 6;
const columns = 8;
let currentRow = 0;
let currentColumn = 0;
let letreco = "SORRISOS";
let letrecoMap = {};
for (let index = 0; index < letreco.length; index++) {
    letrecoMap[letreco[index]] = index;
}
const guesses = [];

for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    guesses[rowIndex] = new Array(columns);
    const tileRow = document.createElement("div");
    tileRow.setAttribute("id", "row" + rowIndex);
    tileRow.setAttribute("class", "tile-row");
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
        const tileColumn = document.createElement("div");
        tileColumn.setAttribute("id", "row" + rowIndex + "column" + columnIndex);
        tileColumn.setAttribute(
            "class",
            rowIndex === 0 ? "tile-column typing" : "tile-column disabled"
        );
        tileRow.append(tileColumn);
        guesses[rowIndex][columnIndex] = "";
    }
    tiles.append(tileRow);
}

const checkGuess = () => {
    const guess = guesses[currentRow].join("");
    if (guess.length !== columns) {
        return;
    }

    var currentColumns = document.querySelectorAll(".typing");
    for (let index = 0; index < columns; index++) {
        const letter = guess[index];
        if (letrecoMap[letter] === undefined) {
            currentColumns[index].classList.add("wrong");
        } else {
            if (letrecoMap[letter] === index) {
                currentColumns[index].classList.add("right");
            } else {
                currentColumns[index].classList.add("displaced");
            }
        }
    }

    if (guess === letreco) {
        handleVictory();
    } else {
        if (currentRow === rows - 1) {
            window.alert("Errrrrrou!");
        } else {
            moveToNextRow();
        }
    }
};

const moveToNextRow = () => {
    var typingColumns = document.querySelectorAll(".typing")
    for (let index = 0; index < typingColumns.length; index++) {
        typingColumns[index].classList.remove("typing")
        typingColumns[index].classList.add("disabled")
    }
    currentRow++
    currentColumn = 0

    const currentRowEl = document.querySelector("#row" + currentRow)
    var currentColumns = currentRowEl.querySelectorAll(".tile-column")
    for (let index = 0; index < currentColumns.length; index++) {
        currentColumns[index].classList.remove("disabled")
        currentColumns[index].classList.add("typing")
    }
};

const handleKeyboardOnClick = (key) => {
    if (currentColumn === columns) {
        return;
    }
    const currentTile = document.querySelector(
        "#row" + currentRow + "column" + currentColumn
    );
    currentTile.textContent = key;
    guesses[currentRow][currentColumn] = key;
    currentColumn++;
};

const createKeyboardRow = (keys, keyboardRow) => {
    keys.forEach((key) => {
        var buttonElement = document.createElement("button");
        buttonElement.textContent = key;
        buttonElement.setAttribute("id", key);
        buttonElement.addEventListener("click", () => handleKeyboardOnClick(key));
        keyboardRow.append(buttonElement);
    });
};

createKeyboardRow(keysFirstRow, keyboardFirstRow);
createKeyboardRow(keysSecondRow, keyboardSecondRow);
createKeyboardRow(keysThirdRow, keyboardThirdRow);

const handleBackspace = () => {
    if (currentColumn === 0) {
        return;
    }
    currentColumn--;
    guesses[currentRow][currentColumn] = "";
    const currentTile = document.querySelector(
        "#row" + currentRow + "column" + currentColumn
    );
    currentTile.textContent = "";
};

const handleEnter = () => {
    checkGuess();
};

document.querySelector("#backspace").addEventListener("click", handleBackspace);
document.querySelector("#enter").addEventListener("click", handleEnter);

const handleVictory = () => {
    document.querySelector(".chest-container").style.display = "block";
    const key = document.getElementById('key');
    const chest = document.getElementById('chest');

    key.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text', event.target.id);
    });

    chest.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    chest.addEventListener('drop', (event) => {
        event.preventDefault();
        const keyId = event.dataTransfer.getData('text');
        const draggedElement = document.getElementById(keyId);

        if (draggedElement === key) {
            window.location.href = "caca_palavra.html";
        }
    });
};

// Função para gerar uma posição aleatória dentro da tela
const getRandomPosition = () => {
    const maxWidth = window.innerWidth - 150; // Subtração do tamanho do baú/chave para evitar que saiam da tela
    const maxHeight = window.innerHeight - 150; // Subtração do tamanho do baú/chave para evitar que saiam da tela
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;
    return { x: randomX, y: randomY };
};

// Função para posicionar o baú e a chave aleatoriamente
const positionElementsRandomly = () => {
    const chestPosition = getRandomPosition();
    const keyPosition = getRandomPosition();

    // Garantir que a chave e o baú não se sobreponham
    while (Math.abs(chestPosition.x - keyPosition.x) < 150 && Math.abs(chestPosition.y - keyPosition.y) < 150) {
        // Se eles estiverem muito próximos, gerar novas posições
        keyPosition.x = Math.random() * (window.innerWidth - 150);
        keyPosition.y = Math.random() * (window.innerHeight - 150);
    }

    chest.style.left = `${chestPosition.x}px`;
    chest.style.top = `${chestPosition.y}px`;

    key.style.left = `${keyPosition.x}px`;
    key.style.top = `${keyPosition.y}px`;

    // Exibir o baú e a chave
    chestContainer.style.display = "flex";
};

// Chama a função para posicionar os elementos aleatoriamente
positionElementsRandomly();

// Função de drag-and-drop já existente, sem modificações
key.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text', event.target.id);
});

chest.addEventListener('dragover', (event) => {
    event.preventDefault();
});

chest.addEventListener('drop', (event) => {
    event.preventDefault();
    const keyId = event.dataTransfer.getData('text');
    const draggedElement = document.getElementById(keyId);

    if (draggedElement === key) {
        window.location.href = "outraPagina.html";
    }
});
