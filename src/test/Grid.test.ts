import Grid from '../entities/Grid'

describe('Grid', () => {
  let grid: Grid

  beforeEach((): void => {
    grid = new Grid();
  })

  it('Grid should have a display method', () => {
    expect(grid.display).toBeDefined()
  })
})