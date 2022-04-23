import LetterCoordinates from '../enums/LetterCoordinates'
import {FieldMappings} from '../enums/FieldMarkers'
import populateFieldsArray from '../utils/populateFieldsArray'
import range from '../utils/range'

export default class Grid {

  private fields: any[]
  private GRID_WIDTH: number = 10;
  private GRID_HEIGHT: number = 10;

  constructor() {
    this.fields = populateFieldsArray(this.GRID_WIDTH, this.GRID_HEIGHT)
  }

  placeShips() {}

  display(): void {
    
    for (let row of this.fields) {
      let rowString: string = LetterCoordinates[this.fields.indexOf(row)] + ' '
      for (let field of row) {
        rowString += ` ${FieldMappings.get(field)} `
      }
      console.log(`${rowString}`)
    }
    console.log('  ' + range(1, this.GRID_WIDTH))
  }

  update() {}
}