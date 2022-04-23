export default class Ship {

  size: number
  health: number
  sunken: boolean

  constructor() {
    this.size = 5
    this.health = 5
    this.sunken = false
  }

  takeAHit():void {
    this.health--

    if (!this.health) this.sink()
  }

  sink(): void {
    this.sunken = true
  }
}