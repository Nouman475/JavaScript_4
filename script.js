let userInput = document.getElementById("input");
let outputElement = document.getElementById("result");
let orgBox = document.getElementById("original");
let cities = ["Faisalabad","Lahore","Karachi","Islamabad","Burewala","Sheikhupra","Kashmir"];

function LowerCase(){
    outputElement.innerHTML = orgBox.innerHTML.toLowerCase()
}

function upperCase() {
    outputElement.innerHTML = orgBox.innerHTML.toUpperCase()
}

function capitilize() {
    orgBox.style.textTransform="capitalize"
    outputElement.innerText = orgBox.innerText
}

// ***********************  FUNCTIONS FOR USER DEFINED TEXT OR STRINGS ************************************************
 
function betterFormat(){
  if(userInput.value===""){
    Toastify({
      text: "Please enter something in the input box!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "#d67002",
        color:"black",
      },
      onClick: function(){}
    }).showToast();
  }
  outputElement.innerHTML = userInput.value.toLowerCase()
  outputElement.style.textTransform = "capitalize"
}
 function printCities(){
  outputElement.innerHTML = ""
    for(idx=0;idx<cities.length;idx++){
    outputElement.innerHTML += idx+1 + ")"+ cities[idx] + "<br>"
  }  
}

function addCity() {

  outputElement.innerHTML = "";
  const formattedCityName = capitalizeFirstLetter(userInput.value.trim().toLowerCase());

  if (formattedCityName === "") {
      Toastify({
        text: "Please enter a city to add to the list!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "#d67002",
        color:"black",
        },
        onClick: function(){}
      }).showToast();
  }
   else if (cities.includes(formattedCityName)) {
    outputElement.innerHTML = `<h3><span style="color : red;">${formattedCityName}</span> already exists in the list!</h3>`;
  } else {
    cities.push(formattedCityName);
    outputElement.innerHTML = `<h3><span style="color:green;">${formattedCityName}</span> has been successfully added</h3>`;
  }
}
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
 
function checkCity(){
  outputElement.innerHTML = "";
  const formattedInput = capitalizeFirstLetter(userInput.value.trim().toLowerCase());
  let idx = cities.indexOf(formattedInput)
  if(cities.includes(formattedInput)){
    outputElement.innerHTML = `<h3>Your city <span style="color:green;">${formattedInput}</span> is found at index <span style="color:#d67002;">${idx}</span></h3>`
  }else if (formattedInput === "") {
    Toastify({
      text: "Please enter a city to be checked!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "#d67002",
        color:"black",
      },
      onClick: function(){}
    }).showToast();
}else{
  outputElement.innerHTML = `<h3>sorry we couldn't find <span style = "color :red;">${formattedInput}</span>,Please try a different or enter something valid, you can also add it.</h3>`
}
  
}

function findWord() {
  outputElement.innerHTML = "";
  const formattedInput = userInput.value.trim().toLowerCase();
  const lowerCaseOrgBox = orgBox.innerText.toString().toLowerCase();

  const idx = lowerCaseOrgBox.indexOf(formattedInput);
  if (idx !== -1) {
    outputElement.innerHTML = `<h3>Your word <span style="color:green;">${formattedInput}</span> is found at index <span style="color:#d67002;">${idx}</span></h3>`;
  } else {
    outputElement.innerHTML = `<h3>Sorry, we couldn't find <span style="color:red;">${formattedInput}</span>.</h3>`;
  }
}

function replaceWord() {
  outputElement.innerHTML = "";
  const formattedInput = userInput.value.trim().toLowerCase();
  const lowerCaseOrgBox = orgBox.innerText.toString().toLowerCase();
  const idx = lowerCaseOrgBox.indexOf(formattedInput);

  if (idx !== -1) {
    const wordToReplace = prompt("With which you want to replace?:"); 
    if (wordToReplace) { 
      const replacedText = lowerCaseOrgBox.replace(formattedInput, wordToReplace.toLowerCase());
      orgBox.innerText = replacedText;
      outputElement.innerHTML = `<h3>"${formattedInput}" has been replaced with "${wordToReplace}"</h3>`;
    } else {
      outputElement.innerHTML = "<h3 style = 'color:red;'>Please enter a word to replace with.</h3>";
    }
  } else {
    outputElement.innerHTML = `<h3>Sorry, we couldn't find <span style="color:red;">${formattedInput}</span>.</h3>`;
  }
}


function clear0(){
  if(userInput.value===""){
    Toastify({
      text: "Already Cleared!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "#d67002",
        color:"black",
      },
      onClick: function(){}
    }).showToast();
  }
  else{
    Toastify({
      text: "Input value cleared!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "#178da6",
      },
      onClick: function(){}
    }).showToast();
  }
  userInput.value = ""
}
    
function clear1(){
  if(outputElement.innerHTML===""){
    Toastify({
      text: "Already Cleared!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "#d67002",
        color:"black",
      },
      onClick: function(){}
    }).showToast();
  }
  else{
    Toastify({
      text: "Output value cleared!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "#178da6",
      },
      onClick: function(){}
    }).showToast();
  }
  outputElement.innerHTML = ""
}