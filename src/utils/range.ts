export default function range(start: number, end: number): string {
  let str: string = ''

  for (let i = start; i <= end; i++) {
    str += ` ${i} `
  }

  return str
}