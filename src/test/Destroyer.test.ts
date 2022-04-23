import Destroyer from '../entities/Destroyer'

describe('Destroyer', () => {
  let ship: Destroyer

  beforeEach((): void => {
    ship = new Destroyer();
  })

  it('Should return an empty object', () => {
    expect(ship).toEqual({})
  })
})