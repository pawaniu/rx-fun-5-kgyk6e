const blue = 'color:blue;';
const red = 'color:red;';

function logColor(val, color) {
  console.log(`%c${val}`, color)
}

export const logRed = (v) => logColor(v, red);
export const logBlue = (v) => logColor(v, blue);