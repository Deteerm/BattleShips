export default class Ship {

  private size: number
  private health: number
  private sunken: boolean

  constructor(size: number) {
    this.size = size
    this.health = size
    this.sunken = false
  }

  takeAHit():void {
    this.health--

    if (!this.getHealth()) this.sink()
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
}