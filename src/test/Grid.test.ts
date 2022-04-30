import Grid from '../entities/Grid'
import Ship from '../entities/Ship'

describe('Grid', () => {
  let grid: Grid
  const battleShip = new Ship(5);
  const detroyerAlpha = new Ship(4);
  const destroyerBeta = new Ship(4);

  let ships: Ship[];

  beforeEach((): void => {
    grid = new Grid();
    ships = grid.getShips()
  })

  it('Ships placed should occupy 13 fields', () => {

    grid.placeShips(battleShip, detroyerAlpha, destroyerBeta)
    let sum: number = 0;
    
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        sum += grid.getFields()[i][j]
      }
    }

    expect(sum).toBe(13)
  })
})