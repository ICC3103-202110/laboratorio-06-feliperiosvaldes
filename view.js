const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.red(
        figlet.textSync(
            'Unit Convert App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}
function getTable(model){
    const {leftValue, leftUnit, rightValue, rightUnit} = model
    const {value} = model
    return [
        {
        'Left Value': leftValue,
        'Left Unit': leftUnit,
        'Right Value': rightValue,
        'Right Unit': rightUnit
      }
    ]
}
function inputForm(model){
    const {leftValue, leftT} = model
    const leftTemp = 'Left temperature is source?'
    const tempValue = 'Temperature value to convert?'
    const From = 'From?'
    const To = 'To?'
    const choices = ['Celsius', 'Fahrenheit', 'Kelvin']

    return inquirer.prompt([
        {
            name: 'leftT',
            type: 'confirm',
            message: leftTemp,
            default: leftT,
        },
        {
            name: 'tempV',
            type: 'number',
            message: tempValue,
            default: leftValue,
        },
        {
            name: 'From1',
            type: 'list',
            message: From,
            default: From,
            choices: choices
        },
        {
            name: 'To1',
            type: 'list',
            message: To,
            default: To,
            choices: choices

        }
    ])
}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}
module.exports = {
    view, 
    inputForm 
}