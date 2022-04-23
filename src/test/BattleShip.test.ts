import BattleShip from '../entities/BattleShip'

describe('BattleShip', () => {
  let ship: BattleShip

  beforeEach((): void => {
    ship = new BattleShip();
  })

  it('Should return an empty object', () => {
    expect(ship).toEqual({})
  })
})