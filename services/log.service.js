import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed("ERROR") + "" + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen("Success") + "" + message);
};

const printHelp = () => {
  console.log(dedent`${chalk.bgCyan(" HELP ")}  
    -s [CITY] for setting city
    -h help
    -t [API_KEY] for saving token
    `);
};

const printWeather = (res, icon) => {
  console.log(
    dedent`${chalk.bgYellow(" WEATHER ")} Weather in city ${res.name}
		${icon}  ${res.weather[0].description}
		Temperature: ${res.main.temp} (ощущается как ${res.main.feels_like})
		Humidity: ${res.main.humidity}%
		Wind speed: ${res.wind.speed}
		`
  );
};
export { printError, printSuccess, printHelp, printWeather };
