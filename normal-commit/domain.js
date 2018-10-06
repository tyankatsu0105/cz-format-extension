/**
 * [getMaxLength]
 * @description
 *  return max length + 1 of given the associative array properties
 * @param {object} obj  target associative array
 * @return max length
 */
function getMaxLength(obj) {
  if (!obj || Object.keys(obj).length === 0)
    throw new Error("require commit-types-emoji.json");

  let maxLength = 0;

  Object.keys(obj).forEach(type => {
    if (type.length > maxLength) maxLength = type.length;
  });

  return maxLength + 1;
}

module.exports = {
  getMaxLength
};
