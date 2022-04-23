enum FieldMarkers {
  UNCHECKED = '.',
  MISS = '*',
  HIT = 'X'
}

const FieldMappings = new Map([
  [-1, FieldMarkers.MISS],
  [0, FieldMarkers.UNCHECKED], 
  [1, FieldMarkers.HIT]
])

export {
  FieldMarkers,
  FieldMappings,
}