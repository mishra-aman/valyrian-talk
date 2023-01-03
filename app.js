const inputText = document.querySelector("#text-input");
const btnTranslate = document.querySelector("#translate-text");
const outputDiv = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/valyrian.json";

function getValyerianUrl(input) {
  return serverURL + "?text=" + input;
}

function handleError(error) {
  console.log("Error occured", error);
  alert("Something wrong with server!\nPlease try again after some time");
}

function clickHandler() {
  const textInput = inputText.value;
  fetch(getValyerianUrl(textInput))
    .then((response) => response.json())
    .then((json) => {
      const translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(handleError);
}

btnTranslate.addEventListener("click", clickHandler);
