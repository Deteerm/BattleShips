import deepIncludes from '../utils/deepIncludes'

describe('deepIncludes', () => {

  it('should return true for arguments arr: [[1,2],[3,4]] and element: [1,2]', () => {
    expect(deepIncludes([[1,2],[3,4]], [1,2])).toBeTruthy()
  })

  it('should return true for arguments arr: [[1,2],[3,4]] and element: [3,4]', () => {
    expect(deepIncludes([[1,2],[3,4]], [3,4])).toBeTruthy()
  })

  it('should return false for arguments arr: [[1,2],[3,4]] and element: [4,6]', () => {
    expect(deepIncludes([[1,2],[3,4]], [4,6])).toBeFalsy()
  })

  it('should return false for arguments arr: [[1,2],[3,4]] and element: [2,3]', () => {
    expect(deepIncludes([[1,2],[3,4]], [2,3])).toBeFalsy()
  })

  it('should return false for arguments arr: [[1,2],[3,4]] and element: [2,1]', () => {
    expect(deepIncludes([[1,2],[3,4]], [2,1])).toBeFalsy()
  })

  it('should return false for arguments arr: [[1,2],[3,4]] and element: [0,2]', () => {
    expect(deepIncludes([[1,2],[3,4]], [0,2])).toBeFalsy()
  })
})