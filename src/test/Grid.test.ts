import Grid from '../entities/Grid'
import Ship from '../entities/Ship'

describe('Grid', () => {
  let grid: Grid
  const battleShip = new Ship(5);
  const detroyerAlpha = new Ship(4);
  const destroyerBeta = new Ship(4);

  beforeEach((): void => {
    grid = new Grid();
  })

  it('Grid should have a display method', () => {
    expect(grid.display).toBeDefined()
  })

  // run 10 times to account for random number selection
  it.each([1,2,3,4,5,6,7,8,9,10])('Ships placed for %i time should occupy 13 fields', () => {

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