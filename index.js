import { get, save, total } from "./filesMethods.js";
import inquirer from "inquirer";
import { promptNewUser } from "./userPrompts.js";

const main = async () => {
  let run = true;
  while (run) {
    const action = await inquirer.prompt([
      {
        type: "list",
        name: "chosen",
        message: "Actions:",
        choices: [
          { value: 1, name: "Crear nuevo gasto" },
          { value: 2, name: "Ver todos los gastos" },
          { value: 3, name: "Total de gastos" },
          { value: 99, name: "Salir" },
        ],
      },
    ]);
    switch (action.chosen) {
      
      case 1:
        await createNewUser();
        break;
      case 2:
        await getAllUsers();
        break;
      case 3:
        await viewTotal();
        break;
      case 99:
        run = false;
        break;
      default:
        run = false;
        break;
    }
  }
  console.log("¡Hasta luego!");
};

main();

async function createNewUser() {
  console.log("Creando nuevo gasto:");
  const newUserData = await promptNewUser();

  // TODO En vez del log podria hacer un nuevo prompt para confirmar los datos
  // si no confirma no los guardo
  console.log("Nuevo gasto guardado:", newUserData);

  // TODO validar la info

  const currentUsers = await get("expenses");

  // TODO Validar que no exista el Documento...

  currentUsers.push(newUserData);
  await save("expenses", currentUsers);
}

async function getAllUsers() {
  const currentUsers = await get("expenses");
  console.log(currentUsers);
}

async function viewTotal() {
  await total("expenses");
}
