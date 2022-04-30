import Ship from '../entities/Ship'

describe('Ship', () => {
  let ship: Ship

  beforeEach((): void => {
    ship = new Ship(5);
  })

  it('Size and health should initially be the same', () => {
    expect(ship.getSize()).toEqual(ship.getHealth());
  })

  it('Should lose 1 HP while taking a hit', () => {
    const previousHealth = ship.getHealth()
    ship.takeAHit()
    expect(previousHealth - ship.getHealth()).toBe(1)
  })

  it('Should sink while HP reaches 0', () => {
    for (let i = ship.getHealth(); i > 0; i--) {
      ship.takeAHit()
    }
    expect(ship.isSunken).toBeTruthy()
  })
})