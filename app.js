/** @type {NodeListOf<HTMLElement>} */
const switchState = document.querySelectorAll("button.btn-switch");
const form = document.querySelectorAll("div.form");
const $status = document.querySelectorAll(".status");
/**@type {NodeListOf<HTMLElement>} */
const passStrengthPercent = document.querySelectorAll(".strength-percent");
/**@type {NodeListOf<HTMLElement>} */
const unOderedList = document.querySelector("ul.atList");
/**@type {NodeListOf<HTMLElement>} */
const passwordInput = document.querySelector("input.password");
const svgContainer = document.querySelector(".svg-container");
const svg = document.querySelectorAll(".hide");
/** @type {NodeListOf<HTMLElement>} */
const btn = document.querySelectorAll("button.btn");
/**@type {NodeListOf<HTMLElement>} */
const listLogs = document.querySelectorAll("li.li");

const passwordTexts = {
    alphabets: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    numbers: "0123456789",
    symbols: "!@#$%^&*()+=_-{}[]?/.;,",
}

const {alphabets, numbers, symbols} = passwordTexts;
const lengthArray = [alphabets.length, numbers.length, symbols.length];


let currentStateIndex = 0;

switchState.forEach((switchBtn, index) => {
switchBtn.addEventListener("click", ()=>{
  if(index === currentStateIndex) return;
  console.log(`${typeof index}  ${index}`);

  const getDirection = index > currentStateIndex ? "slide-from-right" : "slide-from-left";
  
  switchState.forEach(b => b.classList.remove("active"));
  form.forEach(r => r.classList.remove("active", "slide-from-right", "slide-from-left"));

  switchBtn.classList.add("active");
  form[index].classList.add("active", getDirection);

  currentStateIndex = index;
})
});

btn.forEach((button, btnIndex)=>{
    button.addEventListener("click", ()=>{

        console.log("Button clicked");
    const randomNumber = {
     rdmNum1: alphabets[Math.floor(Math.random() * lengthArray[0])],
      rdmNum2: alphabets[Math.floor(Math.random() * lengthArray[0])],
       rdmNum3: symbols[Math.floor(Math.random() * lengthArray[2])],
        rdmNum4: numbers[Math.floor(Math.random() * lengthArray[1])],
         rdmNum5: alphabets[Math.floor(Math.random() * lengthArray[0])],
          rdmNum6: alphabets[Math.floor(Math.random() * lengthArray[0])],
           rdmNum7: numbers[Math.floor(Math.random() * lengthArray[1])],
            rdmNum8: symbols[Math.floor(Math.random() * lengthArray[2])],
        generatePassword: function (){
        const generatedPassword = 
    `${this.rdmNum1}${this.rdmNum2}${this.rdmNum3}${this.rdmNum4}${this.rdmNum5}${this.rdmNum6}${this.rdmNum7}${this.rdmNum8}`;
     return generatedPassword;
    }
}   
    const {rdmNum1, rdmNum2, rdmNum3, rdmNum4, rdmNum5, rdmNum6, rdmNum7, rdmNum8, rest} = randomNumber;
    
const generatePassword = passToCheck => {
    const upTo8 = passToCheck.length === 8 ? `The length of the password equals ${randomNumber["generatePassword"]().length}` :
          `The lenght of the password equals ${checkGenPass.length}`;

    const haveLetters = randomNumber["generatePassword"]().includes((rdmNum1 || rdmNum2 || rdmNum5 || rdmNum6)) 
          ? `Contains alphabets: ${rdmNum1}, ${rdmNum2}, ${rdmNum5} and ${rdmNum6}` : `Does not contains alphabets`;

    const haveNumbers = randomNumber["generatePassword"]().includes(rdmNum4 || rdmNum7)
          ? `Contains numbers: ${rdmNum4} and ${rdmNum7}` : `Does not contains numbers`;

    const haveSymbols = randomNumber["generatePassword"]().includes(rdmNum3 || rdmNum8) 
          ? `Contains symbols: ${rdmNum3} and ${rdmNum8}` : `Does not contains symbols`;

    return [`Password: ${passToCheck}`, upTo8, haveLetters, haveNumbers, haveSymbols]
}
    
    const checking = generatePassword(randomNumber["generatePassword"]())
    const generatedPass= randomNumber["generatePassword"]();

    if(btnIndex === 1){
       console.log(checking);
        console.log(checking);

        listLogs.forEach(r => r.classList.remove("active"));
        listLogs[0].classList.add("active");
        listLogs.forEach((item, index) =>{
            item.innerText = checking[index] ?? ""; 
            console.log(item);
            const checkLength = generatedPass.length === 8 ? (100 / 4) : 0;
            const checkAphabet = generatedPass.includes(rdmNum1 || rdmNum2 || rdmNum5 || rdmNum6)?
            checkLength + (100 / 4) : 0;
            const checkNumber = generatedPass.includes(rdmNum4 || rdmNum7) ? checkAphabet + (100 / 4) : 0;
            const checkSymbols =  generatedPass.includes(rdmNum3 || rdmNum8) ? `${checkNumber + (100 / 4)}%` : "0%";

            passStrengthPercent[1].textContent = checkSymbols;
            console.log(checkSymbols); 

        })

    }
    })
})

