// Trophies for each level
const trophies = ['🍓', '🌽', '🧱', '🐴', '🏆'];
// The url for each monster
const monsterImages = [
  'assets/img/horns_skull.png',
  'assets/img/fire_horns.png',
  'assets/img/green_blob.png',
  'assets/img/pink_monster.png',
  'assets/img/red_zombie.png'
];

/**
 * Initializes the app when the page is fully loaded
 */
window.addEventListener('load', function() {
  displayMonster(monsterImages);
});

// Create a variable for storing #playfield
const playfield = document.getElementById('playfield');
// Create a variable for counting clicking times
let count = 0;

/**
 * Display monsters in random location an add eventlistener for them
 * @param {*} arr an array full with monster pictures' addresses
 */
function displayMonster(arr){
  for(let i = 0; i < arr.length; i++){
    const eachMonster = document.createElement('img');
    eachMonster.setAttribute('src', arr[i]);
    eachMonster.className = 'playfield_item';
    eachMonster.style.top = `${randomIntBetween(20, 500)}px`;
    eachMonster.style.left = `${randomIntBetween(20, 1200)}px`;
    eachMonster.addEventListener('click', changePosition);
    playfield.appendChild(eachMonster);
  }
}

/**
 * The position of target monster will be changed.
 * Counting clicking times for displaying the trophies for each level.
 */
function changePosition(event){
  event.target.style.top = `${randomIntBetween(20, 500)}px`;
  event.target.style.left = `${randomIntBetween(20, 1200)}px`;
  count ++;
  displayTrophies(count);
}

/**
 * Display trophies for each level
 * @param {*} clickingTimes how many times user clicked
 */
function displayTrophies(clickingTimes){
  const eachTrophie = document.createElement('span');
  if(clickingTimes == 1){
    eachTrophie.innerHTML = trophies[0];
    document.getElementById('trophies').appendChild(eachTrophie);
  }else if(clickingTimes == 2){
    eachTrophie.innerHTML = trophies[1];
    document.getElementById('trophies').appendChild(eachTrophie);
  }else if(clickingTimes == 3){
    eachTrophie.innerHTML = trophies[2];
    document.getElementById('trophies').appendChild(eachTrophie);
  }else if(clickingTimes == 4){
    eachTrophie.innerHTML = trophies[3];
    document.getElementById('trophies').appendChild(eachTrophie);
  }else if(clickingTimes == 5){
    eachTrophie.innerHTML = trophies[4];
    document.getElementById('trophies').appendChild(eachTrophie);
  }
}

/**
 * Return a random integer number between the limitation
 * @param {*} lower the lower limit of the possible result
 * @param {*} upper the upper limit of the possible result
 * @returns a random integer number between between the limitation
 */
function randomIntBetween(lower, upper) {
  return Math.round(lower + (upper - lower) * Math.random());
}
