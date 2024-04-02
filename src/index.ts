#! /usr/bin/env node
import File from "./models/File"
import nftgen from "./nftgen.json"
const cliFunctions:any = {
  metadata: ()=>{
    for(let i=0;i < nftgen.length; i++){
      File.createDir(`out/${nftgen[i].folder}`)
    }
  } 
}

const cliArgs = process.argv.slice(2)
cliFunctions[cliArgs[0]]();
