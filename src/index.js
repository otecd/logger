const colors = {
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  white: '\x1b[37m'
}
const redColor = '\x1b[31m'

export default (name, color) => {
  return {
    log: (msg) => {
      console.log(`${colors[color]}${name}:\x1b[0m ${msg}`)
    },
    error: (msg) => {
      console.error(`${colors[color]}${name}:${redColor}Error:\x1b[0m ${msg}`)
    }
  }
}
