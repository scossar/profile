var golden_ratios = function(start, direction, level) {
  var ratios = [start],
    output = [],
    i;
  for (i = 0; i < level; i++) {
    if (direction <= 0) {
      start *= 0.618;
      ratios.push(start);
    } else {
      start *= 1.618;
      ratios.push(start);
    }
  }
  for (i = 0; i < ratios.length; i++) {
    output.push('level ' + (i + 1) + ': ' + ratios[i]);
  }
  return output;
};

module.exports.golden_ratios = golden_ratios;


var opposite = function(start, direction, level) {
  var ratios = [start],
    output = [],
    i;
  for (i = 0; i < level; i++) {
    if (direction <= 0) {
      start *= 0.618;
      ratios.push(start);
    } else {
      start *= 1.312;
      ratios.push(start);
    }
  }
  for (i = 0; i < ratios.length; i++) {
    output.push('level ' + (i + 1) + ': ' + ratios[i]);
  }
  return output;
};

module.exports.golden_ratios = golden_ratios;
module.exports.opposite = opposite;
