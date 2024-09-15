console.log("Surprice Coming");

const formTimerMessage = document.createElement("form");
document.body.append(formTimerMessage);

const btnCountDown = document.createElement("button");
btnCountDown.innerText = "Click This Button for the Surprise";
btnCountDown.style.padding = "10px";
btnCountDown.style.width = "100%";
formTimerMessage.append(btnCountDown);


const divContainer = document.createElement("div");
divContainer.setAttribute("class", "container")
divContainer.style.display = "grid";
divContainer.style.height = "100vh";
divContainer.style.gridTemplateColumns = "auto"
divContainer.style.placeContent = "center" 
divContainer.style.fontSize = "50px"
divContainer.style.backgroundColor = "aliceblue"
document.body.append(divContainer);

const divResultMessage = document.createElement("div");
divResultMessage.setAttribute("id", "resultMessage");
divResultMessage.setAttribute("class", "hmarque");
divContainer.append(divResultMessage);

const countDownTimer = document.querySelector("#resultMessage");

formTimerMessage.addEventListener("click", (e) => {
    e.preventDefault();
    let i = 10;
    const interval = setInterval(() => {
        countDownTimer.innerHTML = i;
        if (i < 0) {
            clearInterval(interval);
            countDownTimer.innerHTML = "HAPPY BIRTHDAY DEAR";
        }
        i--;
    }, 1000) 
});