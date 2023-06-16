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
                        inputBlock = true;
                   }
                   else{
                    let tempStr = inputBox.value;
                    let modStr = tempStr.substring(0,tempStr.length - 1);
                    inputBox.value = modStr;
                   }
                }
            }

            if(!inputBlock){
                inputBox.value += btnVal;
            }

        }
         
        if(btnVal == "="){
            if(inputBox.value){
                calVal();
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
        }

    })
        
})
            
       
function calVal(){
    let opt = "";
    let fNum = "";
    let secNum = "";
    for(let letter of inputBox.value){
        if(isNaN(letter)){
            opt = letter;
        }else{
            fNum += letter;
        }
    }
    
    console.log(fNum);
    console.log(opt);
}
    

