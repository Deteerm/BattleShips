import Grid from '../entities/Grid'
import Ship from '../entities/Ship'

import LetterCoordinates from '../enums/LetterCoordinates'

import Field from '../types/Field'

export default class Game {
  private prompt = require('prompt-sync')()
  private grid: Grid
  private won: boolean

  constructor() {
    this.won = false;
    this.grid = new Grid();
  }

  start() {
    this.grid.placeShips(new Ship(5), new Ship(4), new Ship(4))
    this.update()
  }

  async update(previousAction?: string): Promise<void> {
    this.grid.display(previousAction)
    let field: Field = await this.getPlayerAction()
    const action: string = this.grid.update(...field)
    this.won = this.grid.anyShipsLeft()
    if (this.won) {
      this.grid.display(action)
      console.log('You won!')
      return
    } else {
      this.update(action)
    }
  }

  private getPlayerAction(): Promise<Field> {
    const playerInput: string = this.prompt('Field to shoot at: ')
    const coordinates: string[] = playerInput.split('')

    if (playerInput === 'exit') process.exit(0)

    if (coordinates.length !== 3 && coordinates.length !== 2) { 
      console.log('Wrong command. Try again!')
      return this.getPlayerAction() 
    }

    const letter: string = coordinates[0].toUpperCase()
    let validLetter: boolean = false

    for (let key in LetterCoordinates) {
      if (LetterCoordinates[key] === letter) {
        validLetter = true
        break
      }
    }

    if (validLetter) {
      const number: number = coordinates[2] ? Number(coordinates[1] + coordinates[2]) - 1 : Number(coordinates[1]) - 1
      const mappedLetter: number = LetterCoordinates[letter as keyof typeof LetterCoordinates]
      return Promise.resolve([mappedLetter, number])
    }
    
    console.log('Wrong command. Try again!')
    return this.getPlayerAction()
  }
}