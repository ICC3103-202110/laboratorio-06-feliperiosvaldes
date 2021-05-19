function update(input, model){
    const {leftT} = input
    const {tempV} = input
    const {From1, To1} = input
    if (leftT == true){
        if (From1 == 'Celsius'){
            if (To1 == 'Celsius'){
                value = tempV
            }
            if (To1 == 'Fahrenheit'){
                value = (tempV * 9/5) + 32
            }
            if (To1 == 'Kelvin'){
                value = tempV + 273.15
            }
        }
        if (From1 == 'Fahrenheit'){
            if (To1 == 'Celsius'){
                value = (tempV - 32) * 5/9
            }
            if (To1 == 'Fahrenheit'){
                value = tempV
            }
            if (To1 == 'Kelvin'){
                value = (tempV - 32) * 5/9 + 273.15
            }
        }
        if (From1 == 'Kelvin'){
            if (To1 == 'Celsius'){
                value = tempV -  273.5
            }
            if (To1 == 'Fahrenheit'){
                value = (tempV -  273.15) * 9/5 + 32
            }
            if (To1 == 'Kelvin'){
                value = tempV
            }
        }
    
        return {
            ...model,
            leftValue: tempV,
            leftUnit: From1,
            rightValue: value,
            rightUnit: To1
        }
    }
    else {
        if (From1 == 'Celsius'){
            if (To1 == 'Celsius'){
                value = tempV
            }
            if (To1 == 'Fahrenheit'){
                value = (tempV * 9/5) + 32
            }
            if (To1 == 'Kelvin'){
                value = tempV + 273.15
            }
        }
        if (From1 == 'Fahrenheit'){
            if (To1 == 'Celsius'){
                value = (tempV - 32) * 5/9
            }
            if (To1 == 'Fahrenheit'){
                value = tempV
            }
            if (To1 == 'Kelvin'){
                value = (tempV - 32) * 5/9 + 273.15
            }
        }
        if (From1 == 'Kelvin'){
            if (To1 == 'Celsius'){
                value = tempV -  273.5
            }
            if (To1 == 'Fahrenheit'){
                value = (tempV -  273.15) * 9/5 + 32
            }
            if (To1 == 'Kelvin'){
                value = tempV
            }
        }
        return {
            ...model,
            leftValue: value,
            leftUnit: To1,
            rightValue: tempV,
            rightUnit: From1

    }
}
}

module.exports = {
    update
}
