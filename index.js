let words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "pillow",
        hint: "Thing that is used to keep your head on while sleeping"
    },
    {
        word: "stationary",
        hint: "Something which is not moving"
    },
    {
        word: "guitar",
        hint: "Musical instrument that has frets and strings"
    }
];

const wordText = document.querySelector(".word"),
    hintText = document.querySelector(".hint span"),
    timeText = document.querySelector(".time b"),
    inputField = document.querySelector("input"),
    refreshBtn = document.querySelector(".refresh-word"),
    checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = (maxTime) => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            return (timeText.innerHTML = maxTime);
        }
        alert("Time off!" + correctWord.toUpperCase() + " was the correct word");
        initGame();
    }, 1000);
};

const initGame = () => {
    initTimer(15);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerHTML = wordArray.join("");
    hintText.innerHTML = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
};
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if (userWord == "") return alert("Please enter the word to check!");
    if (userWord != correctWord) {
        return alert("Oops!" + userWord + " is not a correct word");
    }
    alert("Congrats!" + correctWord.toUpperCase() + " is the correct word");
    initGame();
};

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);