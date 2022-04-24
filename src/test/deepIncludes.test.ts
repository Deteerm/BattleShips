import deepIncludes from '../utils/deepIncludes'

describe('deepIncludes', () => {

  it('should return true for arguments arr: [[1,2],[3,4]] and element: [1,2]', () => {
    expect(deepIncludes([[1,2],[3,4]], [1,2])).toBeTruthy()
  })

  it('should return false for arguments arr: [[1,2],[3,4]] and element: [4,6]', () => {
    expect(deepIncludes([[1,2],[3,4]], [4,6])).toBeFalsy()
  })
})