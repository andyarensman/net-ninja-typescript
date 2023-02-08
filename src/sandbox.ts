let greet = () => {
  console.log('hello, world');
}

let mssg: Function;

const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b)
}


const divide = (a: number, b: number, c: number | string = 10) => {
  console.log(a / b)
}

const minus = (a: number, b: number): number => {
  return a + b
}

let result = minus(10, 7);