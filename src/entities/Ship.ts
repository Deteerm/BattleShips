import deepIncludes from '../utils/deepIncludes'

import Field from '../types/Field'

export default class Ship {

  private size: number
  private health: number
  private sunken: boolean
  private coordinates: Array<Field> = []

  constructor(size: number) {
    this.size = size
    this.health = size
    this.sunken = false
  }

  takeAHit():void {
    this.health -= 1

    if (this.getHealth() === 0) this.sink()
  }

  wasHit([row, col]: Field):boolean {
    return deepIncludes(this.coordinates, [row, col])
  }

  sink(): void {
    this.sunken = true
  }

  isSunken(): boolean {
    return this.sunken
  }

  getSize(): number {
    return this.size
  }

  getHealth(): number {
    return this.health
  }

  setCoordinate([row, col]: number[]) {
    this.coordinates.push([row, col])
  }

  getCoordinates(): Array<number[]> {
    return this.coordinates
  }
}