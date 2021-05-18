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
    const {leftT, tempV, From1} = model
    return [
        {
        'Left Value': leftT,
        'Left Unit': From1,
        'Right Value': leftT,
        'Right Unit': tempV
      }
    ]
}
function inputForm(model){
    const {leftT} = model
    const {tempV} = model
    const {From1} = model
    const leftTemp = 'Left temperature is source?'
    const tempValue = 'Temperature value to convert?'
    const From = 'From?'
    const choices = ['Celsius', 'Fahrenheit', 'Kelvin']

    return inquirer.prompt([
        {
            name: 'leftT',
            type: 'input',
            message: leftTemp,
            default: leftT,
        },
        {
            name: 'tempV',
            type: 'number',
            message: tempValue,
            default: tempV,
        },
        {
            name: 'From1',
            type: 'list',
            message: From,
            default: From,
            choices: choices

        }
    ])
}

// Get actual console view
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