import populateFieldsArray from '../utils/populateFieldsArray'

export default class Grid {

  private fields: number[]
  private GRID_WIDTH: number = 10;
  private GRID_HEIGHT: number = 10;

  constructor() {
    this.fields = populateFieldsArray(this.GRID_WIDTH, this.GRID_HEIGHT)
  }
}