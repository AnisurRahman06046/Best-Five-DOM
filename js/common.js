function getInputElementValueById(elementId){
    const textElementField = document.getElementById(elementId);
    const textElementString = textElementField.value ;
    const textElement = parseInt(textElementString);
    return textElement;
}

function getTextElementValueById(textElementId){
    const textElementField = document.getElementById(textElementId);
    const textElementString = textElementField.innerText;
    const textElement = parseInt(textElementString);
    return textElement;
}

function setTextElementValue(elementID,newValue){
    const textElement = document.getElementById(elementID);
    textElement.innerText = newValue;
}