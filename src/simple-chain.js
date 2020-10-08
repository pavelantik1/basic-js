const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value='') {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
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
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chainText = this.chain.join('~~');
    this.chain = [];
    return chainText;
  }
};

module.exports = chainMaker;
