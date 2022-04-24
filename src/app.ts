import Grid from './entities/Grid'
import Ship from './entities/Ship'
import Directions from './enums/Directions'

const grid = new Grid();
const battleShip = new Ship(5);
const detroyerAlpha = new Ship(4);
const destroyerBeta = new Ship(4);

grid.placeShips(battleShip, detroyerAlpha, destroyerBeta)

console.log('========= BATTLE SHIPS =========\n')

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    grid.update(i, j)
  }
}

//grid.update(0, 0)

grid.display()

console.log(grid.getShips())



 