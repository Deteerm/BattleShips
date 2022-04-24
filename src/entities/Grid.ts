import Ship from '../entities/Ship'

import LetterCoordinates from '../enums/LetterCoordinates'
import {FieldMappings} from '../enums/FieldMarkers'
import Directions from '../enums/Directions'

import populateFieldsArray from '../utils/populateFieldsArray'
import range from '../utils/range'

export default class Grid {

  private fields: any[]
  private GRID_WIDTH: number = 10;
  private GRID_HEIGHT: number = 10;

  constructor() {
    this.fields = populateFieldsArray(this.GRID_WIDTH, this.GRID_HEIGHT)
  }

  placeShips(...Ships: Ship[]): void {
    for (let ship of Ships) {
      let row: number = Math.floor(Math.random() * 10 )
      let column: number = Math.floor(Math.random() * 10)
  
      let direction: string = Directions[Math.floor(Math.random() * 2)]
  
      if (direction === 'VERTICAL') {
        if (this.fields[row + ship.getSize()] !== undefined && this.checkVerticalFields(row, column, ship.getSize())) {
          for (let i = 0; i < ship.getSize(); i++) {
            this.fields[row++][column] = 1
          }
        } else {
          this.placeShips(ship)
        }
      }

      else if (direction === 'HORIZONTAL') {
        if (this.fields[row][column + ship.getSize()] !== undefined && this.checkHorizontalFields(row, column, ship.getSize())) {
          for (let i = 0; i < ship.getSize(); i++) {
            this.fields[row][column++] = 1
          }
        } else {
          this.placeShips(ship)
        }
      }
    }
  }

  private checkVerticalFields(row: number, column: number, size: number): boolean {
    
    let areFieldsFree: boolean = true;

    for (let i = 0; i < size; i++) {
      areFieldsFree = this.fields[row+i][column] === 0

      if (!areFieldsFree) return areFieldsFree
    }

    return areFieldsFree
  }

    private checkHorizontalFields(row: number, column: number, size: number): boolean {
    
    let areFieldsFree: boolean = true;

    for (let i = 0; i < size; i++) {
      areFieldsFree = this.fields[row][column+i] === 0

      if (!areFieldsFree) return areFieldsFree
    }

    return areFieldsFree
  }

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

  getFields(): any[] {
    return this.fields
  }

  update() {}
}