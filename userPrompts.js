import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";

inquirer.registerPrompt("date", DatePrompt);

export async function promptNewUser() {
  return await inquirer.prompt(newUserPrompt);
}

const newUserPrompt = [
  {
    type: "input",
    name: "monto",
    message: "Monto del gasto:",
    default: 0
  },
  {
    type: "input",
    name: "descripcion",
    message: "Descripción:",
  },
  {
    type: "date",
    name: "fecha",
    message: "Fecha:",
    locale: "en-US",
    format: { month: "short" },
  },
  {
    type: "input",
    name: "categoria",
    message: "Category:",
  },
];
