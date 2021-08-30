const submitForm = document.querySelector("#form")

const numRange = document.querySelector("#form h2 input")
const playButton = document.querySelector("#form h3 button")

const userComputerSelected = document.querySelector("#result")
const winLoseResult = document.querySelector("#winLose")

function onPlayBtn(event){
    event.preventDefault()

    const userGuess = document.querySelector("#form h3 input")
    const randNum = Math.random()* numRange.value;
    const floorNum = Math.floor(randNum)

    userComputerSelected.innerText = `You chose : ${userGuess.value}, the machine chose : ${floorNum}.`

    if (userGuess.value == floorNum)
        winLoseResult.innerText = "You Win!"
    else
        winLoseResult.innerText = "You Lost!"

}
submitForm.addEventListener("submit", onPlayBtn)

// [21.08.30] submit 이벤트는 반드시 "form".addEventListener()를 해야한다.
