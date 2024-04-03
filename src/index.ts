#! /usr/bin/env node
import File from "./models/File"
import nftgen from "./nftgen.json"
import { v4 } from "uuid"
const templates = { 
  single: (nftgenItem:any) =>{
    for(let i=0; i < nftgenItem.size; i++){
      const nftMetadata = {
        description: nftgenItem.description, 
        external_url: nftgenItem.external_url, 
        image: nftgenItem.image, 
        name: `${nftgenItem.title} #${i}`,
        attributes: nftgenItem.attributes
      }
      File.generateFile(`out/${nftgenItem.folder}/${i}`,JSON.stringify(nftMetadata,null,2)); 
    }
  },
  singleIMX: (nftgenItem:any) =>{
    const fullMetadata = []
    for(let i=0; i < nftgenItem.size; i++){
      const reference_id = v4();
      const nftMetadata = {
        owner_address: nftgenItem.owner_address,
        reference_id,
        token_id: `${i}`,
        metadata:{
          image: nftgenItem.image,
          animation_url: nftgenItem.animation_url,
          youtube_url: nftgenItem.youtube_url,
          name: `${nftgenItem.name} #${i}`,
          description: nftgenItem.description,
          external_url: nftgenItem.external_url,
          attributes: nftgenItem.attributes
        }
      }
      fullMetadata.push(nftMetadata)
    }
    File.generateFile(`out/${nftgenItem.folder}/metadata.json`,JSON.stringify(fullMetadata,null,2)); 
  }
}
type templateOptions = keyof typeof templates;
const cliFunctions:any = {
  metadata: ()=>{
    for(let i=0;i < nftgen.length; i++){
      File.createDir(`out/${nftgen[i].folder}`)
      const template: templateOptions = nftgen[i].template as templateOptions;
      if(Object.keys(templates).indexOf(nftgen[i].template) > -1){
        templates[template](nftgen[i])
      }
    }
  } 
}

const cliArgs = process.argv.slice(2)
cliFunctions[cliArgs[0]]();
