let personData = require("./data.json");


//For finding female :D

for(let i = 0; i < personData.length; i++){
    if(personData[i].gender == "female")
    
    console.log(personData[i]);
    
}

// for people who is 18 or older
for(let i = 0; i < personData.length; i++){
    let birthdate = new Date(personData[i].birthdate)
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthdate.getFullYear();

    if(age>= 18){
        console.log(personData[i].name, age);
    }
}
// for people who has the birth month of feb
for(let i = 0; i < personData.length; i++){
    
    let birthdate = new Date(personData[i].birthdate)
    newmonth = new Date().getMonth();
    let birthmonth = newmonth + birthdate.getMonth();
    if(birthmonth == 2){
        console.log(personData[i].name);
    }
}