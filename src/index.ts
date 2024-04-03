#! /usr/bin/env node
import File from "./models/File"
import nftgen from "./nftgen.json"
const templates = { 
  single: (nftgenItem:any) =>{
    for(let i=0; i < nftgenItem.size; i++){
      File.generateFile(`out/${nftgenItem.folder}/${i}`,JSON.stringify(nftgenItem,null,2)); 
    }
  }
}
type templateOptions = keyof typeof templates;
const cliFunctions:any = {
  metadata: ()=>{
    for(let i=0;i < nftgen.length; i++){
      File.createDir(`out/${nftgen[i].folder}`)
      const template: templateOptions = nftgen[i].template as templateOptions;
      if(Object.keys(templates).indexOf("single") > -1){
        templates[template](nftgen[i])
      }
    }
  } 
}

const cliArgs = process.argv.slice(2)
cliFunctions[cliArgs[0]]();
