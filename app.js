var fs = require('fs');
const chalk = require('chalk')
//let data = 'this is a book'

//fs.writeFile("book.txt", data, function (error){
//if (error) {
//console.log(error)        
// }
//console.log('saved')
//})

//fs.readFile('./book.txt', 'utf8', function (error, data){
//if(error){
//   console.log(error)
//}
//    console.log('save')
//})

let todos = []

function printTodos() {
    console.log(chalk.bgGray("TODOS"))
    for (let i = 0; i < todos.length; i++) {
        console.log(todos[i])
    }
    console.log('***********')
}


let argv = process.argv
if (argv[2] == 'add') {
    fs.readFile('./todos.txt', 'utf8', function (error, data) {
        if (error) {
            console.log(error)
        }
        todos = JSON.parse(data)
        todos.push(argv[3])
        let todoString = JSON.stringify(todos)

        fs.writeFile("todos.txt", todoString, function (error) {
            if (error) {
                console.log(error)
            }
            console.log('saved')
        })
    })

} else if (argv[2] == 'delete') {
    fs.readFile("todos.txt", 'utf8', function (error, data) {
        if (error) {
            console.log(error)
        }
        todos = JSON.parse(data)
        let isExist = false
        let deletIndex =-1
        for (let i = 0; i < todos.length; i++) {
            if (argv[3] == todos[i]) {
                isExist = true
                deletIndex = i
            }
        }
        if (isExist) {
            console.log('Found ' + argv[3] + 'in todos')
            todos.splice(deletIndex, 1)
            
            let todoString = JSON.stringify(todos)
        fs.writeFile("todos.txt", todoString, function (error) {
            if (error) {
                console.log(error)
            }
            console.log('delet')
        })
        } else {
            console.log(chalk.bgGray('Not found ' + argv[3] + 'in todos'))
        }
    })
} else if (argv[2] == 'list') {
    fs.readFile('./todos.txt', 'utf8', function (error, data) {
        if (error) {
            console.log(error)
        }
        todos = JSON.parse(data)
        printTodos()
    })

} else {
    console.log('command does not match !')
}


//let data = JSON.stringify(todos)

//fs.writeFile("todos.txt", data, function (error){
//if (error) {
//console.log(error)        
 //}
//console.log('saved')
//})

//let todos =[]
//fs.readFile('./todos.txt', 'utf8', function (error, data){
//if(error){
   //console.log(error)
//}
    //console.log('save')
    //todos = JSON.parse(data)
    //console.log(todos)
//})