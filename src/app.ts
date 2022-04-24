import Grid from './entities/Grid'
import Ship from './entities/Ship'
import Directions from './enums/Directions'

const grid = new Grid();
const battleShip = new Ship(5);
const detroyerAlpha = new Ship(4);
const destroyerBeta = new Ship(4);

grid.placeShips(battleShip, detroyerAlpha, destroyerBeta)

console.log('========= BATTLE SHIPS =========\n')
grid.display()


