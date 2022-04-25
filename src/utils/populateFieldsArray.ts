import Field from '../types/Field'

export default function populateFieldsArray(width: number, height: number): Array<Field> {

  const fields: any[] = [];

  for (let i = 0; i < height; i++) {
    fields[i] = []
    for (let j = 0; j < width; j++) {
      fields[i].push(0)
    }
  }

  return fields
}