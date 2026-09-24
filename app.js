/** @type {NodeListOf <HTMLElement>} */
const switchState = document.querySelectorAll("button.btn-switch");
const form = document.querySelectorAll("div.form");
const status = document.getElementsByClassName(".status");
const passStrengthPercent = document.querySelectorAll(".strength-percent");
const unOderedList = document.getElementById("atList");
const password = document.querySelectorAll(".password");
const passwordBtn = document.getElementById("svg-container");
const passwordShower = document.querySelectorAll(".hide");
const btn = document.querySelectorAll(".button");


const passwordTexts = {
    alphabets: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()+=_-{}[]?/.;,",
}

const {alphabets, numbers, symbols} = passwordTexts;
const lengthArray = [alphabets.length, numbers.length, symbols.length];

const randomNumber = {
    rdmNum1: Math.floor(Math.random() * lengthArray[0]),
    rdmNum2: Math.floor(Math.random() * lengthArray[0]),
    rdmNum3: Math.floor(Math.random() * lengthArray[2]),
    rdmNum4: Math.floor(Math.random() * lengthArray[1]),
    rdmNum5: Math.floor(Math.random() * lengthArray[0]),
    rdmNum6: Math.floor(Math.random() * lengthArray[2]),
    rdmNum7: Math.floor(Math.random() * lengthArray[1]),
    rdmNum8: Math.floor(Math.random() * lengthArray[2]),
    generatePassword: function (){
    const generatedPassword = 
`${this.rdmNum1}${this.rdmNum2}${this.rdmNum3}${this.rdmNum4}${this.rdmNum5}${this.rdmNum6}${this.rdmNum7}${this.rdmNum8}`;
return generatedPassword;
    }
}

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

