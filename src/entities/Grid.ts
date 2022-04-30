import Ship from '../entities/Ship'

import Field from '../types/Field'

import LetterCoordinates from '../enums/LetterCoordinates'
import {FieldMappings} from '../enums/FieldMarkers'
import Directions from '../enums/Directions'

import populateFieldsArray from '../utils/populateFieldsArray'
import range from '../utils/range'

export default class Grid {

  private fields: Array<number[]>
  private ships: Ship[];
  private GRID_WIDTH: number = 10;
  private GRID_HEIGHT: number = 10;

  constructor() {
    this.fields = populateFieldsArray(this.GRID_WIDTH, this.GRID_HEIGHT)
    this.ships = []
  }

  placeShips(...Ships: Ship[]): void {
    for (let ship of Ships) {
      let row: number = Math.floor(Math.random() * 10 )
      let column: number = Math.floor(Math.random() * 10)
  
      const direction: string = Directions[Math.floor(Math.random() * 2)]
  
      if (direction === 'VERTICAL') {
        if (this.fields[row + ship.getSize()] !== undefined && this.checkVerticalFields(row, column, ship.getSize())) { 
          for (let i = 0; i < ship.getSize(); i++) {
            ship.setCoordinate([row, column])
            this.fields[row][column] = 1
            row += 1
          }
          this.ships.push(ship)
        } else {
          this.placeShips(ship)
        }
      }

      else if (direction === 'HORIZONTAL') {
        if (this.fields[row][column + ship.getSize()] !== undefined && this.checkHorizontalFields(row, column, ship.getSize())) {
          for (let i = 0; i < ship.getSize(); i++) {
            ship.setCoordinate([row, column])
            this.fields[row][column] = 1
            column += 1
          }
          this.ships.push(ship)
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

  display(action?: string): void {
    console.clear()
    console.log('========= BATTLE SHIPS =========\n')
    const gridString: string = this.fields.map((row) => {
      return this.constructRowString(row)
    }).join('\n')

    console.log(gridString)
    console.log('  ' + range(1, this.GRID_WIDTH))

    if (action) console.log('\n' + action)
  }

  private constructRowString(row: number[]) {
    return LetterCoordinates[this.fields.indexOf(row)] + ' ' + row.map((num) => ` ${FieldMappings.get(num)} `).join('')
  }

  getFields(): Array<number[]> {
    return this.fields
  }

  getShips(): Ship[] {
    return this.ships
  }

  anyShipsLeft(): boolean {
    let shipStates: boolean[] = this.getShips().map((ship: Ship): boolean => ship.isSunken())
    return shipStates.reduce((a,b) => a && b)
  }

  update(row: number, col: number): string {

    if (this.fields[row][col] === 0) {
      this.fields[row][col] = -1
      return 'Miss!'
    }

    else if (this.fields[row][col] === 1) {
      this.fields[row][col] = 2
      let feedback: string = 'Hit!'
      this.ships.forEach((ship) => {
        if (ship.wasHit([row, col])) {
          ship.takeAHit()
          if (ship.isSunken()) feedback = 'Hit and sunken!'
        }
      })
      return feedback
    } else if (this.fields[row][col] === undefined) {
      return 'There is no such field!'
    }

    else return 'Field already checked Captian! Try giving an order to shoot at another.'
  }
}