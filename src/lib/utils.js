// The first '...' will bundle multiple args into an array
// the second '...' will spread a comma separated array
export const partial = (fn, ...args) => fn.bind(null, ...args)
