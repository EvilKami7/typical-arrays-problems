
exports.min = function min (array) {
  if (Array.isArray(array) && array.length > 0) {
  		return Math.min(...array);
  }
  return 0;
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length > 0) {
  		return Math.max(...array);
  }
  return 0;
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length > 0) {
	  let total = 0;
	  for (let i = 0; i < array.length; i++) {
	   total += array[i];
	  }
	  return Math.floor((total / array.length) * 100) / 100;
  }
  return 0;
}
