function creatThePage(){

let pagDiv = document.createElement("div");
let headDiv = document.createElement("div");
let headTitle =document.createElement("p");
pagDiv.className = "pageDiv";
pagDiv.style.cssText = "display: flex; flex-direction: column; height: 100%; overflow-y: hidden;";
headDiv.className = "headDiv";
headDiv.style.cssText = "display: flex; flex-direction: row; gap: 70%; display: flex; justify-content: center; align-items: center; width: 100%; height: 60px; overflow: hidden;"
headTitle.innerHTML = "calc";
headTitle.style.cssText = "color: green; font-size: 30px; font-weight: bold; font-family: sans-serif";
headDiv.appendChild(headTitle);

function createElement(name, classes = "", styles = "", textContent = "") {
    const element = document.createElement(name)
    element.textContent = textContent;
    element.className = classes;
    element.style.cssText = styles;
    return element;
}


function createCalcButton(textContent) {
    const container = document.createElement("div");
    container.className = "button_" + textContent + "Div"
    container.style.cssText = "height: 100px; width: 25%";

    const button = createElement(
        'button',
        "button" + textContent,
        "background-color: white; width: 100%; height: 100%; border-width: 0px; cursor: pointer; margin-left: 0.1%; font-size: 2.5rem; box-shadow: 3px 3px brown; border-radius: 5px",
        textContent
    )
    container.appendChild(button);
    return container;
}

// all (Home , About, Service, Contact) buttons div
const buttonsDiv = createElement('div', "buttonsDiv", "display: flex; flex-direction: row; gap: 20%");

const homeButtonDiv = createElement("div", "homeButtonDiv", "height: 25px; width: 10%");
const HomeButton = createElement("button", "homeButton", "background: fixed; width: 100%; height: 100%; border-width: 0px; cursor: pointer;", "Home");

homeButtonDiv.appendChild(HomeButton);
buttonsDiv.appendChild(homeButtonDiv);

const aboutButtonDiv = createElement("div", "aboutButtonDiv", "height: 25px; width: 10%");
const AboutButton = createElement("button", "aboutButton", "background: fixed; width: 100%; height: 100%; border-width: 0px; cursor: pointer; color: gray;", "About");

aboutButtonDiv.appendChild(AboutButton);
buttonsDiv.appendChild(aboutButtonDiv);

const serviceButtonDiv = createElement("div", "serviceButtonDiv", "height: 25px; width: 10%");
const ServiceButton = createElement("button", "serviceButton","background: fixed; width: 100%; height: 100%; border-width: 0px; cursor: pointer; color: gray;" ,"Service");

serviceButtonDiv.appendChild(ServiceButton);
buttonsDiv.appendChild(serviceButtonDiv);

const contactButtonDiv = createElement("div", "contactButtonDiv", "height: 25px; width: 10%");
const ContactButton = createElement("button", "contacteButton", "background: fixed; width: 100%; height: 100%; border-width: 0px; cursor: pointer; color: gray;", "Contact");

contactButtonDiv.appendChild(ContactButton);
buttonsDiv.appendChild(contactButtonDiv);


headDiv.appendChild(buttonsDiv);
pagDiv.appendChild(headDiv);



const bodyDiv = createElement("div", "bodyDiv", "background-color: gray; width: 100%, height: 100%; justify-content: center; align-items: center; padding: 1%; border-top-right-radius: 15px; border-top-left-radius: 15px;")

const inputdiv = createElement("div", "inputDiv", "height: 40px;");
inputdiv.className = "inputDive";

const input = createElement("input", "", "width: 100%; height: 100%; font-size: larger;");
input.readOnly = "readOnly";

inputdiv.appendChild(input);
bodyDiv.appendChild(inputdiv);


const numbersDiv = createElement("div", "numbersDiv", "padding-top: 0.5%; display: flex; flex-direction: column; gap: 8px");

const firstRowDiv = createElement("div", "firstRowDiv", "display: flex; flex-direction: row; gap: 2%;");


const button_7Div = createCalcButton(7)


firstRowDiv.appendChild(button_7Div);
numbersDiv.appendChild(firstRowDiv);


const button_8Div = createCalcButton(8)

firstRowDiv.appendChild(button_8Div)
numbersDiv.appendChild(firstRowDiv);


const button_9Div = createCalcButton(9)

firstRowDiv.appendChild(button_9Div)
numbersDiv.appendChild(firstRowDiv);


const button_delDiv = createCalcButton("del")

firstRowDiv.appendChild(button_delDiv)
numbersDiv.appendChild(firstRowDiv);


const secondtRowDiv = createElement("div", "secondRowDiv", "display: flex; flex-direction: row; gap: 2%");


const button_4Div = createCalcButton(4);

secondtRowDiv.appendChild(button_4Div);
numbersDiv.appendChild(secondtRowDiv);


const button_5Div = createCalcButton(5);

secondtRowDiv.appendChild(button_5Div)
numbersDiv.appendChild(secondtRowDiv);


const button_6Div = createCalcButton(6);

secondtRowDiv.appendChild(button_6Div)
numbersDiv.appendChild(secondtRowDiv);


const plusButtonDiv = createCalcButton("+");
plusButtonDiv.className = "plusButtonDiv"

secondtRowDiv.appendChild(plusButtonDiv);
numbersDiv.appendChild(secondtRowDiv);


const thirdtRowDiv = createElement("div", "thirdtRowDiv", "display: flex; flex-direction: row; gap: 2%");


const button_1Div = createCalcButton(1);

thirdtRowDiv.appendChild(button_1Div);
numbersDiv.appendChild(thirdtRowDiv);


const button_2Div = createCalcButton(2);

thirdtRowDiv.appendChild(button_2Div)
numbersDiv.appendChild(thirdtRowDiv);


const button_3Div = createCalcButton(3);

thirdtRowDiv.appendChild(button_3Div)
numbersDiv.appendChild(thirdtRowDiv);


const minusButtonDiv = createCalcButton("-");
minusButtonDiv.className = "minusButtonDiv"

thirdtRowDiv.appendChild(minusButtonDiv)
numbersDiv.appendChild(thirdtRowDiv);


const fourthtRowDiv = createElement("div", "fourthtRowDiv", "display: flex; flex-direction: row; gap: 2%");


const dotButtonDiv = createCalcButton(".");
dotButtonDiv.className = "dotButtonDiv";

fourthtRowDiv.appendChild(dotButtonDiv);
numbersDiv.appendChild(fourthtRowDiv);


const button_0Div = createCalcButton(0);

fourthtRowDiv.appendChild(button_0Div)
numbersDiv.appendChild(fourthtRowDiv);


const overButtonDiv = createCalcButton("/");
overButtonDiv.className = "overButtonDiv"

fourthtRowDiv.appendChild(overButtonDiv)
numbersDiv.appendChild(fourthtRowDiv);


const multiplyButtonDiv = createCalcButton("x");
multiplyButtonDiv.className = "multiplyButtonDiv";

fourthtRowDiv.appendChild(multiplyButtonDiv)
numbersDiv.appendChild(fourthtRowDiv);


const _5thtRowDiv = createElement("div", "_5thtRowDiv", "display: flex; flex-direction: row; gap: 2%");


let resetButtonDiv = document.createElement("div");
resetButtonDiv.className = "resetButtonDiv";
let resetButton = document.createElement("button");
resetButton.className = "resetButton";
resetButton.textContent = "RESET";
resetButtonDiv.style.cssText = "height: 100px; width: 50%";
resetButton.style.cssText = "background-color: #573F1D; width: 100%; height: 100%; border-width: 0px; cursor: pointer; margin-left: 0.1%; font-size: 2.5rem; box-shadow: 3px 3px brown; border-radius: 5px; color: white;";

resetButtonDiv.appendChild(resetButton);
_5thtRowDiv.appendChild(resetButtonDiv)
numbersDiv.appendChild(_5thtRowDiv);


let equalButtonDiv = document.createElement("div");
equalButtonDiv.className = "equalButtonDiv";
let equalButton = document.createElement("button");
equalButton.className = "buttonEqual";
equalButton.textContent = "=";
equalButtonDiv.style.cssText = "height: 100px; width: 50%";
equalButton.style.cssText = "background-color: brown; width: 100%; height: 100%; border-width: 0px; cursor: pointer; margin-left: 0.1%; font-size: 3rem; box-shadow: 3px 3px #573F1D; border-radius: 5px; color: white;";

equalButtonDiv.appendChild(equalButton);
_5thtRowDiv.appendChild(equalButtonDiv)
numbersDiv.appendChild(_5thtRowDiv);

bodyDiv.appendChild(numbersDiv);
pagDiv.appendChild(bodyDiv);


const lastPart = createElement("div", "lastPart", "background-color: green; height: 10%; width: 100%;");

const lastPartContent = createElement("div", "lastPartContent");
lastPartContent.style.cssText = "display: flex; height: 100%; align-items: center;margin-left: 5%; gap: 10%"

let linkedInDiv = document.createElement("div");
linkedInDiv.className = "linkedInDiv";
lastPartContent.appendChild(linkedInDiv);

linkedInDiv.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' alt='linkedin icon' class='linkedin'><path fill='#FFF' fill-rule='evenodd' d='M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z'></path></svg>"


let getHubDiv = document.createElement("div");
getHubDiv.className = "getHupDiv";
lastPartContent.appendChild(getHubDiv);

getHubDiv.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' alt='github icon' class='github'><path fill='#FFF' fill-rule='evenodd' d='M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z'></path></svg>"


let codeForcesDiv = document.createElement("div");
codeForcesDiv.className = "codeForcesDiv";
lastPartContent.appendChild(codeForcesDiv);

codeForcesDiv.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' class='codeForces'><path fill='#F44336' d='M24 19.5V12a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 18 12v7.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5z'/><path fill='#2196F3' d='M13.5 21a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 13.5 3h-3C9.673 3 9 3.672 9 4.5v15c0 .828.673 1.5 1.5 1.5h3z'/><path fill='#FFC107' d='M0 19.5c0 .828.673 1.5 1.5 1.5h3A1.5 1.5 0 0 0 6 19.5V9a1.5 1.5 0 0 0-1.5-1.5h-3C.673 7.5 0 8.172 0 9v10.5z'/></svg>"


let GmailDiv = document.createElement("div");
GmailDiv.className = "GmailDiv";
lastPartContent.appendChild(GmailDiv);

GmailDiv.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' class='Gmail' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'><path style='fill:#CFD8DC;' d='M443.499,417.941l-181.333-128c-3.689-2.606-8.62-2.606-12.309,0l-181.333,128  c-2.837,1.999-4.525,5.254-4.523,8.725v10.667C64,443.224,68.776,448,74.667,448h362.667c5.891,0,10.667-4.776,10.667-10.667  v-10.667C448.007,423.2,446.328,419.945,443.499,417.941z'/><path style='fill:#FAFAFA;' d='M262.165,289.941l-181.333-128c-4.807-3.405-11.465-2.268-14.87,2.539  c-1.281,1.808-1.967,3.97-1.962,6.186v256c-0.012,5.891,4.755,10.676,10.646,10.688c2.216,0.004,4.378-0.682,6.186-1.962  l181.333-128c4.813-3.397,5.961-10.052,2.564-14.865c-0.702-0.995-1.569-1.862-2.564-2.564V289.941z'/><path style='fill:#EEEEEE;' d='M442.24,161.195c-3.546-1.812-7.802-1.525-11.072,0.747l-181.333,128  c-4.813,3.397-5.961,10.052-2.564,14.865c0.702,0.995,1.569,1.862,2.564,2.564l181.333,128c4.807,3.405,11.465,2.268,14.87-2.539  c1.277-1.802,1.962-3.956,1.962-6.165v-256C448,166.681,445.779,163.028,442.24,161.195z'/><path style='fill:#ECEFF1;' d='M468.8,71.339C467.362,66.96,463.275,64,458.667,64H53.333c-5.891,0-10.667,4.776-10.667,10.667  c0,3.357,1.581,6.519,4.267,8.533L249.6,232.533c3.762,2.77,8.889,2.77,12.651,0L464.917,83.2  C468.631,80.495,470.195,75.716,468.8,71.339z'/><path style='fill:#F44336;' d='M458.667,64c-2.308,0-4.554,0.749-6.4,2.133L256,210.752L59.733,66.133  C57.887,64.749,55.641,64,53.333,64C23.878,64,0,87.878,0,117.333v277.333C0,424.122,23.878,448,53.333,448h21.333  c5.891,0,10.667-4.776,10.667-10.667v-246.08l164.501,116.139c3.689,2.606,8.62,2.606,12.309,0l164.523-116.139v246.08  c0,5.891,4.776,10.667,10.667,10.667h21.333C488.122,448,512,424.122,512,394.667V117.333C512,87.878,488.122,64,458.667,64z'/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>"


let myGmailDiv = document.createElement("div");
myGmailDiv.className = "myGMailDiv";
myGmailDiv.style.cssText = "margin-left: -8%"
let myGmail = document.createElement("p");
myGmail.style.cssText = "color: white;"
myGmail.innerHTML = "Abdallahbs9393@gmail.com";

myGmailDiv.appendChild(myGmail);
lastPartContent.appendChild(myGmailDiv);

let copy = document.createElement("div");
copy.className = "copy"
copy.style.cssText = "display: flex; gap: 15%; margin-left: 10%"

let copyWriteDiv = document.createElement("div");
copyWriteDiv.className = "copyWriteDiv";
let copyWrite = document.createElement("p");
copyWrite.style.cssText = "color: white;"
copyWrite.innerHTML = "Copyright";

copyWriteDiv.appendChild(copyWrite);
copy.appendChild(copyWriteDiv)
lastPartContent.appendChild(copy);

let copyWriteImgDiv = document.createElement("div");
copyWriteImgDiv.className = "copyWriteImgDiv";
copyWriteImgDiv.style.cssText = "margin-left: -9%; margin-top: 10%"
copy.appendChild(copyWriteImgDiv)
lastPartContent.appendChild(copy);

copyWriteImgDiv.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 24 24' fill='none'><path d='M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z' stroke='#1C274C' stroke-width='1.5'/><path d='M14 15.6672C13.475 15.8812 12.8952 16 12.2857 16C9.91878 16 8 14.2091 8 12C8 9.79086 9.91878 8 12.2857 8C12.8952 8 13.475 8.11876 14 8.33283' stroke='#1C274C' stroke-width='1.5' stroke-linecap='round'/></svg>"


let copyrightYearDiv = document.createElement("div");
copyrightYearDiv.className = "copyWriteDiv";
copyrightYearDiv.style.cssText = "margin-left: -9%"
let copyrightYear = document.createElement("p");
copyrightYear.style.cssText = "color: white;"
copyrightYear.innerHTML = "2024";

copyrightYearDiv.appendChild(copyrightYear);
copy.appendChild(copyrightYearDiv)
lastPartContent.appendChild(copy);


lastPart.appendChild(lastPartContent);
pagDiv.appendChild(lastPart);
document.body.appendChild(pagDiv);

return new Promise((resolve, reject) => {})

};

async function callingMethod(){

    let textPar = document.querySelector(".inputDive input");
    let button7 = document.querySelector(".button_7Div button");
    let button8 = document.querySelector(".button_8Div button");
    let button9 = document.querySelector(".button_9Div button");
    let delButton = document.querySelector(".button_delDiv button");
    let button4 = document.querySelector(".button_4Div button");
    let button5 = document.querySelector(".button_5Div button");
    let button6 = document.querySelector(".button_6Div button");
    let plusButton = document.querySelector(".plusButtonDiv button");
    let button1 = document.querySelector(".button_1Div button");
    let button2 = document.querySelector(".button_2Div button");
    let button3 = document.querySelector(".button_3Div button");
    let minusButton = document.querySelector(".minusButtonDiv button");
    let dotButtonDiv = document.querySelector(".dotButtonDiv button");
    let button0 = document.querySelector(".button_0Div button");
    let overButton = document.querySelector(".overButtonDiv button");
    let multiplyButton = document.querySelector(".multiplyButtonDiv button");
    let resetButton = document.querySelector(".resetButtonDiv button");
    let equalButton = document.querySelector(".equalButtonDiv button");

    button7.addEventListener("click", function(e){
        e.preventDefault();
        textPar.value += parseInt(button7.textContent);
    });
    button8.addEventListener("click", function(e){
        e.preventDefault();
        textPar.value += parseInt(button8.textContent);
    });
    button9.addEventListener("click", function(e){
        e.preventDefault();
        textPar.value += parseInt(button9.textContent);
    });
    delButton.addEventListener("click", function(e){
        e.preventDefault();
        textPar.value = textPar.value.substring(0, textPar.value.length-1);
    });
    button4.addEventListener("click", function(e){
        e.preventDefault();
        textPar.value += parseInt(button4.textContent);
    });
    button5.addEventListener("click", function(e){
        e.preventDefault();
        textPar.value += parseInt(button5.textContent);
    });
    button6.addEventListener("click", function(e){
        e.preventDefault();
        textPar.value += parseInt(button6.textContent);
    });
    plusButton.addEventListener("click", function(e){
        e.preventDefault();
        textPar.value += plusButton.textContent;
    });
    button1.addEventListener("click", function(e){
        e.preventDefault();
        textPar.value += button1.textContent;
    });
    button2.addEventListener("click", function(e){
        e.preventDefault();
        textPar.value += button2.textContent;
    });
    button3.addEventListener("click", function(e){
        e.preventDefault();
        textPar.value += button3.textContent;
    });
    minusButton.addEventListener("click", function(e){
        e.preventDefault();
        textPar.value += minusButton.textContent;
    });
    dotButtonDiv.addEventListener("click", function(e){
        e.preventDefault();
        textPar.value += dotButtonDiv.textContent;
    });
    button0.addEventListener("click", function(e){
        e.preventDefault();
        textPar.value += parseInt(button0.textContent);
    });
    overButton.addEventListener("click", function(e){
        e.preventDefault();
        textPar.value += overButton.textContent;
    });
    multiplyButton.addEventListener("click", function(e){
        e.preventDefault();
        textPar.value += "*";
    });
    resetButton.addEventListener("click", function(e){
        e.preventDefault();
        textPar.value = "";
    });
    equalButton.addEventListener("click", function(e){
        e.preventDefault();
        let result = eval(textPar.value);
        if (isNaN(result) || result === Infinity){
            textPar.value = textPar.value;
        }else{
        textPar.value = result;
        }
    });



    let linkedInimg = document.querySelector(".linkedin");
    linkedInimg.style.cssText = "cursor: pointer;"

    linkedInimg.addEventListener("click", function(e){
        e.preventDefault();
        window.location.href = "https://www.linkedin.com/in/abdallah-sobhy-6488932a1/";
    })

    let getHubImage = document.querySelector(".github");
    getHubImage.style.cssText = "cursor: pointer;"

    getHubImage.addEventListener("click", function(e){
        e.preventDefault();
        window.location.href = "https://github.com/";
    })

    let codeForcesImage = document.querySelector(".codeForces");
    codeForcesImage.style.cssText = "cursor: pointer;"

    codeForcesImage.addEventListener("click", function(e){
        e.preventDefault();
        window.location.href = "https://codeforces.com/profile/Abdalla_og";
    })

    let GmailImage = document.querySelector(".Gmail");
    GmailImage.style.cssText = "cursor: pointer;"

    GmailImage.addEventListener("click", function(e){
        e.preventDefault();
        window.location.href = "https://mail.google.com";
    })
};

creatThePage();

callingMethod();