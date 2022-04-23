import populateFieldsArray from "../utils/populateFieldsArray";

describe("populateFieldsArray", () => {

  it("Should return 2x2 array of 0", () => {
    expect(populateFieldsArray(2,2)).toEqual([[0,0],[0,0]])
  })
})