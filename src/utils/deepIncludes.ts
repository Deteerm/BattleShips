export default function deepIncludes(arr: Array<any[]>, target: any[]): boolean {
  let result: boolean = true

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      result = arr[0][j] === target[j]
    }
    if (result) return result
  }
  
  return false
}