for (let i = 1; i <= 10; i++) {
//   console.log(`Table of ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

//break in for loop

for(let i=1; i<=10; i++){
    if(i == 5){
        // console.log("Detected 5");
        break;
    }
    // console.log(`Value of i is: ${i}`);
}

//continue in for loop

for(let i = 1; i<=10; i++){
    if(i == 5){
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is: ${i}`);
}
