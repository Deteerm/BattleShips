import Player from '../entities/Player'

describe('Player', () => {

  let player: Player
  
  beforeEach(() => {
    player = new Player
  })

  it('Should return an empty object', () => {
    expect(player).toEqual({})
  })
})