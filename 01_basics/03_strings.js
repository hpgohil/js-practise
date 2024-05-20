const myName = new String("Harikrishna-Gohil");
console.log("myName", myName);                //[String: 'Harikrishna-Gohil']
console.log("datatype", typeof myName);         //object
console.log("proto", myName.__proto__);      //{}

//length
console.log("length", myName.length);

//anchor method is depricated

//charAt(index)
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 13;
console.log(`The index ${index} returns a character ${sentence.charAt(index)}`);

//charCodeAt(index); returns UTF-16 code (Unicode Transfermation Format) of a given index
console.log(`The UTF-16 code for index ${index}, character ${sentence.charAt(index)} is ${sentence.charCodeAt(index)}`);


