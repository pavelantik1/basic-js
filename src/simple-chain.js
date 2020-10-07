const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    throw new CustomError('Not implemented');
    return this.chain.length;
  },
  addLink(value='') {
    throw new CustomError('Not implemented');
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    throw new CustomError('Not implemented');
    if(
      position < 0 || 
      position >= this.chain.length || 
      typeof position !== 'number' ||
      isNaN(position)||
      position !== Math.trunc(position)
    ) {
      this.chain = [];
      throw new Error;
    };
    this.chain.splice(position-1,1);
    return this;
  },
  reverseChain() {
    throw new CustomError('Not implemented');
    this.chain.reverse();
    return this;
  },
  finishChain() {
    throw new CustomError('Not implemented');
    let chainText = this.chain.join('~~');
    this.chain = [];
    return chainText;
  }
};

module.exports = chainMaker;
