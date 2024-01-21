var btnTranslate = document.querySelector('#btn-translate')
var txtInput = document.querySelector('#txt-input')
var lblOutput = document.querySelector('#output')
const serverURL = 'https://api.funtranslations.com/translate/minion.json'

function getTranslationURL(input) {
    return serverURL + '?' + 'text=' + input
}

function errorHandler(error) {
    var errorMsg = `Error occured while calling translation API: ${error.toString}`
    console.log(errorMsg)
    lblOutput.innerHTML = errorMsg
}

function clickEventHandler() {
    console.log('Translate button clicked !!')
    console.log(`User entered: ${txtInput.value}`)

    fetch(getTranslationURL(txtInput.value))
        .then(response => response.json())
        .then(json => {
            let translatedText = json.contents.translated;
            console.log(`Translated text: ${translatedText}`)
            lblOutput.innerHTML = translatedText
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler)