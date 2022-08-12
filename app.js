// import functions and grab DOM elements
import { getCharacters } from './fetch-utils.js';
const characterListContainer = document.getElementById('character-list-container');

async function loadData() {
    const characters = await getCharacters();

}

loadData();
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
