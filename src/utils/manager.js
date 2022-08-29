function isPnpm() {
  return /pnpm/.test(process.env.npm_execpath || '')
}

module.exports = {
  isPnpm
}