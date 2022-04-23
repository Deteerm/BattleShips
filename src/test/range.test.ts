import range from '../utils/range'

describe('range function', () => {

    it('Should return a string with spaced number from 1 to 5', () => {
    expect(range(1, 5)).toBe(' 1  2  3  4  5 ')
  })
})