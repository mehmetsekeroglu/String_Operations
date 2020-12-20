//Uppercase
let names = "mehmet sekeroglu";
let nameList = names.split(" ");
for (let index = 0; index < nameList.length; index++) {
    let firstLetter = nameList[index].charAt(0).toUpperCase();
    nameList[index] = firstLetter + nameList[index].substring(1);
}
let result = nameList.join(" ")
console.log(result);

//10X10
let numberList = [];
for (let index = 1; index <= 100; index++) {
    numberList.push(index);
    if(index % 10 === 0){
        numberList.push("\n")
    }
}
console.log(numberList.toString());

//Prime numberCharacter
let primeNumber = []
for (let numberCharacter = 2; numberCharacter < 100; numberCharacter++) {
    let primeControl = true;
    for (let divisive = 2; divisive < numberCharacter; divisive++) {
        if (numberCharacter % divisive === 0) {
            primeControl = false
            break;
        }
    }
    if (primeControl) {
        primeNumber.push(numberCharacter);
    }
}
console.log(primeNumber);

//Password
let characterList = "asdfghjklqwertyuiopzxcvbnm"
let bigCharacterList = "ASDFGHJKLWERTYUIOZXCVBNM"
let numberCharacter = "0123456789"
let specialCharacter = "+*ç%&/()=?"

for(passwordIndex = 1; passwordIndex<51; passwordIndex++){
    let characterNumber = Math.round((Math.random()*2)+2)
    let password=""
    for (let index = 0; index < characterNumber; index++) {
    let choseCharacter = Math.floor((Math.random()*characterList.length));
    password+= characterList.substr(choseCharacter,1); 
    let choseBigCharacter = Math.floor((Math.random()*bigCharacterList.length));
    password+= bigCharacterList.substr(choseBigCharacter,1);
    let choseNumber = Math.floor((Math.random()*numberCharacter.length));
    password+= numberCharacter.substr(choseNumber,1);
    let choseSpecial = Math.floor((Math.random()*specialCharacter.length));
    password+= specialCharacter.substr(choseSpecial,1);     
}
 console.log(`${passwordIndex}.Password : ${password}`);
}

//Stars
for (let index = 0; index < 6; index++) {
    let stars ="*"
    for (let i = 0; i < index; i++) { 
        stars += "*" 
    }
    console.log(stars);
}