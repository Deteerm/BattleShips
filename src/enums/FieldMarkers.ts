enum FieldMarkers {
  UNCHECKED = '.',
  MISS = '*',
  SHIP ='.',
  HIT = 'X'
}

const FieldMappings = new Map([
  [-1, FieldMarkers.MISS],
  [0, FieldMarkers.UNCHECKED], 
  [1, FieldMarkers.SHIP], 
  [2, FieldMarkers.HIT]
])

export {
  FieldMarkers,
  FieldMappings,
}