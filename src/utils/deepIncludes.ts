export default function deepIncludes(arr: Array<any[]>, target: any[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    let result: boolean = true
    
    for (let j = 0; j < arr[i].length; j++) {
      result = result && arr[i][j] === target[j]
    }

    if (result) return result
  }
  
  return false
}