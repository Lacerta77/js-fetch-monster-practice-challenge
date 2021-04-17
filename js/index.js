//When the page loads, show the first 50 monsters. Each monster's name, age, and description should be shown.

const BASE_URL = `http://localhost:3000/`

//console.log("start fetching");
function getMonsters(page) {
const url = `${BASE_URL}monsters/?_limit=50&_page=${page}`
return fetch(url)
    .then(r => r.json())
}

//create a component with the data
function createMonsterDiv(monsterObj) {
    const div = document.createElement(`div`),
        h2 = document.createElement(`h2`),
        h3 = document.createElement(`h3`),
        p = document.createElement(`p`);

    h2.textContent = monsterObj.name;
    h3.textContent = monsterObj.age;
    p.textContent = monsterObj.description;

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);

    return div;
}

const testMonster = {
}

const monsterDiv = createMonsterDiv(testMonster);
console.log(monsterDiv);