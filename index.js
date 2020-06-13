// const takeANumber = (katzDeliLine, name) => {
//   katzDeliLine.push(name);
//   const lineUp = `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`;
//   return lineUp;
// }
const takeANumber = (katzDeliLine) => {
let number = 0
number + 1

  katzDeliLine.push(number);
   const lineUp = `Welcome, you are number ${katzDeliLine (number)+1} in line.`;
   return lineUp;
}


const nowServing = (katzDeliLine) => {
  if (katzDeliLine.length === 0) return 'There is nobody waiting to be served!'
  const firstPersonInLine = katzDeliLine.shift();
  return `Currently serving ${firstPersonInLine}.`
}
const currentLine = (katzDeliLine) => {
  if (katzDeliLine.length === 0) return 'The line is currently empty.'
  return `The line is currently: ${katzDeliLine.map((e, i) => `${i+1}. ${e}`).join(", ")}`
}
