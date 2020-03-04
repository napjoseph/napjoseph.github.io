// Get the first `n` elements of a collection.
module.exports = function(array, n) {
  return n < 0 ? array.slice(n) : array.slice(0, n);
};
