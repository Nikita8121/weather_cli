import chalk from 'chalk'
import  dedent from 'dedent-js'


const printError = (error) => {
    console.log(chalk.bgRed('ERROR') + '' + error)
}


const printSuccess = (message) => {
    console.log(chalk.bgGreen('Success') + '' + message)
}

const printHelp = () => {
    console.log(dedent`${chalk.bgCyan(' HELP ')}  
    -s [CITY] for setting city
    -h help
    -t [API_KEY] for saving token
    `)
}

export {printError, printSuccess, printHelp}