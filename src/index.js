module.exports = function check(str, bracketsConfig) {
  const configMap = bracketsConfig.map(b => b.join('') );

  for (let i = 0; i < configMap.length; i++) {
    
    if (str.includes( configMap[i] ) ) {
      str = str.replace(configMap[i], '');
      i = -1;
    }
  }
  return !str;
}