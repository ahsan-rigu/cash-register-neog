 const billAmount = document.querySelector("#bill-amount");
 const cashGiven = document.querySelector("#cash-given");
 const calculateChange = document.querySelector("#calculate-change");
 const outputMessage = document.querySelector("#output-message");
 const noOfNotes = document.querySelectorAll(".no-of-notes");

 const availableNotes = [500,200,100,20,10,5,1];

 calculateChange.addEventListener("click", onCalculate);

 function onCalculate() {
    if (Number(cashGiven.value) >= Number(billAmount.value)){
        let surplusMoney = cashGiven.value - billAmount.value;
        onCalculateChange(surplusMoney);
        outputMessage.textContent = "Thank you, please visit again";
    } else {
        outputMessage.textContent = "You haven't given enough money";
    }
}

function onCalculateChange(surplusMoney){
    for(i = 0; i<availableNotes.length; i++){
       noOfNotes[i].textContent = Math.trunc(surplusMoney/availableNotes[i]);
       surplusMoney = surplusMoney - Math.trunc(surplusMoney/availableNotes[i]) * availableNotes[i];
    }
}

  

