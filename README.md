# Shadowrun 6 Compendia

NOTE:  This module is not for public distribution.  It contains information that is the intellectual property of 
Catalyst Game Labs.

This project is meant to help capture information and items for Shadowrun 6 and to make them readily available as shared
compendia for FoundryVTT.

## Prerequisites
1) npm
2) node

## Setup
1) Clone this repository
2) run `npm install` to install the js packages.
3) Create a 'foundryconfig.json' file, and set the path to your FoundryVTT user data.
4) Run `npm link` to link the module to your FoundryVTT installation so that it will be available as an installed module.

## Quick process for adding items to the compendia

1) create the item inside of FoundryVTT.
2) Fill out all the necessary fields for the item.
3) Right-click the item name in the items tab inside of Foundry.
4) Choose 'Export'
5) Open the resulting json file in an editor of your choice.
6) A few keys need to be added to the item's json:
   7) **id**:  Set this to any unique value.  I recommend using a v4 uuid, such as the ones that can be generated 
   [here](https://www.uuidgenerator.net/version4).
   8) **_key**: This should be a compound value of the type of document and its ID, such as: "!items!ID"
9) If the item possesses active effects, you will need to add a _key to the active effect definition, using the ID that
that is already defined for the active effect.
10) Run `npm run build:db` to rebuild the packs.

N.B. You can generate a v4 uuid by running the `npm run generate-id` command from the root of this project.  It will be
output in the commandline.

## Example foundryconfig.yaml file.

```
{ "dataPath": "C:\\Users\\<addYourUserHere>\\AppData\\Local\\FoundryVTT\\", "linkTargetDirName": "shadowrun-6-compendia" } 
```
