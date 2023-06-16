const inputBox = document.querySelector(".wrapper input");
const nums = document.querySelectorAll(".nums");

let operator = ["/","+","-","%","*"];

nums.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        let operMatch = false;
        let inputBlock = false;
        let btnVal = btn.textContent;

        if(btnVal != "C" && btnVal != "←" && btnVal != "="){

            if(inputBox.value == "0"){
                inputBox.value = "";
            }
            if(btnVal == "/" || btnVal == "+" || btnVal == "-" || btnVal == "*" || btnVal == "%"){
                let inputLastVal = inputBox.value[inputBox.value.length -1];
                for(let i=0; i<operator.length; i++){
                    if(operator[i] == inputLastVal){
                        operMatch = true;
                        break;
                    }
                }

                if(operMatch){
                   if(btnVal == inputLastVal){
                        console.log(btnVal);
                        console.log(inputLastVal);
                        inputBlock = true;
                   }
                   else{
                    let tempInput = inputBox.value;
                    tempInput.slice(0,-1);
                    inputBox.value = tempInput;
                   }
                }


            }

            if(!inputBlock){
                inputBox.value += btnVal;
            }
            
        }


            
       
     

        //clear the text one by one
        if(btnVal == "←"){
            let inputStr = inputBox.value;
            let modifiedStr = inputStr.substring(0,inputStr.length-1);
            inputBox.value = modifiedStr;
            if(inputBox.value == ""){
                inputBox.value = "0";
            }
            console.log(inputBox.value);
        }
    
    })
        
})

