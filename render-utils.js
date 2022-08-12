export function rendercharacterCard(character) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div .classList.add('character-card');

p.textContent = character.name;

}