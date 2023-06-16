const inputBox = document.querySelector(".wrapper input");
const nums = document.querySelectorAll(".nums");



let opt = "";
nums.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(inputBox.value == "0"){
            inputBox.value  = "";
        }
        let btnVal = btn.textContent;

        if(btnVal == "/" || btnVal == "%" || btnVal == "*" || btnVal == "-" || btnVal == "+"){
             opt = btnVal;
             console.log(typeof opt);
        }


        if(btnVal != "C" && btnVal != '←' && btnVal != "="){
            inputBox.value += btn.textContent;
            
        }

        if(btnVal == "←"){
            let inputVal = inputBox.value;
            inputVal = Math.floor(inputVal / 10)
            inputBox.value = inputVal
            
        }

        if(btnVal == "="){
            calVal();
        }

        if(btnVal == "C"){
            inputBox.value = "";
        }

    
    })
})

function calVal(){
    let inputVal = inputBox.value;
    let inputArr = inputVal.split("");
    let firstNumber = "";
    let secondString = "";
    let fNum = true;
    let sNum = false;
    let secondNumber = "";
    let secNum = "";
    console.log(opt);
    for(let i=0; i<inputArr.length; i++){

        if(inputArr[i] == opt){
            fNum = false;
            sNum = true;
        } 
        if(fNum){
            firstNumber += Number(inputArr[i]);
        }
        if(sNum){
            secondString += inputArr[i];
        }

         secondNumber = secondString.substring(1);

          secNum = Number(secondNumber)
    }
    let result = eval(firstNumber + opt + secNum); 
    console.log(result);
}