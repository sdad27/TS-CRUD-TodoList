#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let isTrue = true;
async function todoCreate(todos) {
    do {
        let crudOperations = await inquirer.prompt([
            {
                name: "operations",
                type: "list",
                message: "Select Options",
                choices: ["Add", "Update", "View", "Delete", "exit"],
            },
        ]);
        if (crudOperations.operations === "Add") {
            let addTask = await inquirer.prompt({
                name: "addMore",
                message: "what do you want to add int the list",
                type: "input",
            });
            if (addTask.addMore !== '') {
                todos.push(addTask.addMore);
                todos.forEach((addMore) => console.log(addMore));
            }
            else {
                console.log("please don't enter epmty value");
            }
        }
        if (crudOperations.operations === "Update") {
            let displayData = await inquirer.prompt({
                type: "list",
                name: "data",
                message: "update task in the list",
                choices: todos.map((item) => item),
            });
            let updateData = await inquirer.prompt([
                {
                    type: "input",
                    message: "keep data update",
                    name: "dataUpdate",
                }
            ]);
            let newTask = todos.filter((val) => val !== displayData.data);
            if (updateData.dataUpdate !== '') {
                todos = [...newTask, updateData.dataUpdate];
            }
            else {
                console.log("don't enter empty value");
            }
        }
        if (crudOperations.operations === "View") {
            console.log(todos);
        }
        if (crudOperations.operations === "Delete") {
            let deleteData = await inquirer.prompt([
                {
                    type: "list",
                    message: "delete task from your list",
                    name: "delete",
                    choices: todos.map((item) => item),
                }
            ]);
            let deleteTask = todos.filter((val) => val !== deleteData.delete);
            todos = [...deleteTask];
            console.log(todos);
        }
        if (crudOperations.operations === "exit") {
            isTrue = false;
            break;
        }
    } while (true);
}
todoCreate(todos);
