
const FUNCTIONS = {
    'Celsius': increase,
    'Fahrenheit': decrease,
    'Kelvin': increase
}
function increase(counter){
    return counter + 1
}
function decrease(counter){
    return counter - 1
}
function update(input, model){
    const {leftT} = input
    const {tempV} = input
    const {From1} = input
    const newTotal = leftT
    return {
        ...model,
        leftT: leftT,
        tempV: tempV,
        total: newTotal,
        tipValue: newTotal,
    }
}

module.exports = {
    update
}
