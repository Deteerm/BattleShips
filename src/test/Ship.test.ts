import Ship from '../entities/Ship'

describe('Ship', () => {
  let ship: Ship

  beforeEach((): void => {
    ship = new Ship();
  })

  it('Constructor should return a Ship object', () => {
    expect(ship).toBeDefined()
  })
})