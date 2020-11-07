import logger from '../src'

describe('Unit / index', () => {
  it('should be a function', () => {
    expect(logger).to.be.instanceOf(Function)
  })
})
