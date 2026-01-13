function convertTemperature() {
    const tempValue = parseFloat(document.getElementById("tempInput").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const result = document.getElementById("result");


    if (isNaN(tempValue)) {
        result.innerText = "Please enter a valid number";
        return;
    }

    let convertedTemp;

    if (fromUnit === toUnit) {
        convertedTemp = tempValue;
    } 
    else if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit")
            convertedTemp = (tempValue * 9/5) + 32;
        else
            convertedTemp = tempValue + 273.15;
    } 
    else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius")
            convertedTemp = (tempValue - 32) * 5/9;
        else
            convertedTemp = (tempValue - 32) * 5/9 + 273.15;
    } 
    else if (fromUnit === "kelvin") {
        if (toUnit === "celsius")
            convertedTemp = tempValue - 273.15;
        else
            convertedTemp = (tempValue - 273.15) * 9/5 + 32;
    }

    result.innerText = `Converted Temperature: ${convertedTemp.toFixed(2)}°`;
}
