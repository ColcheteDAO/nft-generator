# nftgen

## metadata
To use medata command we need a file called `nftgen.json` 
```bash
npx nftgen metadata
```
### metadata configuration
To configure metadata create an object inside `nftgen.json` based on template, the following one are the system accepted and its attributes:

### single
**template**: `string` represented as "single" 
**folder**: `string` folder name to generate metadata inside out/{folder},
**image**: `string` image on IPFS of NFT repeat for all,
**description**: `string` description of NFT item repeat for all,
**title**: `string` title of NFT repeat for all but append with index "{title} #{index}",
**size**: `number` quantity of NFTs metadata to generate,
**external_url**: `string` collection site,
**attributes**: `array` with objects with 
            **trait**: `string` attribute of NFT 
            **value**: `string` value of NFT attribute

### singleIMX
**template**: `string` represented as "singleIMX" 
**owner_address**: `string` ether address of NFT receiver
**size**: `number` quantity of NFTs metadata to generate,
**metadata**: `object` with repeating NFT properties
            **image**: `string` image on IPFS of NFT repeat for all,
            **animation_url**: `string` animation of NFT repeat for all,
            **youtube_url**: `string` youtube video of NFT repeat for all,
            **name**: `string` name of NFT repeat for all but append with index "{name} #{index}",
            **description**: `string` description of NFT item repeat for all,
            **external_url**: `string` collection site,           
            **attributes**: `array` with objects with 
                **trait**: `string` attribute of NFT 
                **value**: `string` value of NFT attribute
