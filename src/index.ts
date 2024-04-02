#! /usr/bin/env node
const cliFunctions:any = {
  helloWorld: ()=>{
    console.log("Hello world")
  } 
}

const cliArgs = process.argv.slice(2)
cliFunctions[cliArgs[0]]();
