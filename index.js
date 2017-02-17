function cosInRange (value, x1, x2, yFrom, yTo) {
  var xMin = Math.min(x1, x2);
  var xMax = Math.max(x1, x2);
  
  value = Math.min(Math.max(value, xMin), xMax);

  if (xMin === xMax) {
    throw new Error('xMin and xMax can not be the same values.');
  }
  
  return (yTo - yFrom) / 2 * (Math.cos(2 / (xMax - xMin) * Math.PI * (value - 0.5 * (xMax - xMin) - xMin)) + 1) + yFrom;
};

module.exports = cosInRange;
