const { expect } = require('chai');
const sum = require('../sum');

describe('sum function', () => {
  it('adds 2 - 1 to equal 1', () => {
    expect(sum(2, 1)).to.equal(1);
  });
});