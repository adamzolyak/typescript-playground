let sales: number = 123_456_789
let course: string = 'TypeScript'
let is_published: boolean = true
let level //initialized to any type

function render(document: any) {
  console.log(document)
}

let numbers: number[] = [1, 2, 3]

// tuple = fixed length array
let user: [number, string] = [1, 'Adam']

//enums

//will auto assign 0, 1, 2
enum Size1 {
  Small,
  Medium,
  Large,
}

//will auto assign 2, 3
enum Size2 {
  Small = 1,
  Medium,
  Large,
}

//manually assign
enum Size3 {
  Small = 's',
  Medium = 'm',
  Large = 'l',
}

//more optimized code
const enum Size4 {
  Small = 's',
  Medium = 'm',
  Large = 'l',
}

//function that takes a number param and returns a number
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022 && income < 50_000) {
    return income * 1.2
  } else {
    return income * 1.3
  }
}

//object
let employee: {
  readonly id: number
  name: string
} = { id: 1, name: '' }

employee.name = 'Adam'

//object with method
let employee2: {
  readonly id: number
  name: string
  retire: (date: Date) => void
} = { id: 1, name: '', retire: (date: Date) => console.log(date) }

employee.name = 'Adam'
