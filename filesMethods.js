import fs from "fs";

export const get = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file + ".json", "utf8", (err, content) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(content));
    });
  });
};

export const save = (file, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file + ".json", JSON.stringify(content), (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

export const total = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file + ".json", "utf8", (err, content) => {
      if (err) {
        reject(err)
      }
      resolve(content)
      const expenses = JSON.parse(content);
      const amountTotal = expenses.reduce((total, expense) => total + parseInt(expense.monto), 0);
      console.log(`El monto total de los gastos es: $${amountTotal.toLocaleString("us")}`);
    })
  })
};