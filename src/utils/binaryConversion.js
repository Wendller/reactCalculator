function binaryAgent(str) {

  function splitBinary(str) {
    let binaries = [];
  
    for (let i = 0; i < str.length; i+=8) {
      for (let j = i; j < i + 8; j++) {
        binaries.push(str[j]);
      }
      binaries.push(" ");
    }
  
    return binaries.join("");
  }
  
  function binaryToSring(bayte) {
  
    const string = Array.from(bayte);
  
    let decimal = string.reduce((total, next, index) => {
      switch (index) {
        case 0:
          return (total + (128 * Number(next)));
        case 1:
          return (total + (64 * Number(next)));
        case 2:
          return (total + (32 * Number(next)));
        case 3:
          return (total + (16 * Number(next)));
        case 4:
          return (total + (8 * Number(next)));
        case 5:
          return (total + (4 * Number(next)));
        case 6:
          return (total + (2 * Number(next)));
        case 7:
          return (total + (1 * Number(next)));
        default:
          return 0;
      }
    }, 0);
  
    return String.fromCharCode(decimal);
  }

  let string = splitBinary(str);
  str = string.split(" ");
  let chars = [];

  for (let i = 0; i < str.length; i++) {
    chars.push(binaryToSring(str[i]));
  }

  return chars.join("");
}

// console.log(binaryAgent("010000010111001001100101011011100010011101110100001000000110001001101111011011100110011001101001011100100110010101110011001000000110011001110101011011100010000100111111"));

export default binaryAgent;