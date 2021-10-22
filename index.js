/*
//Generovanie otazok pri pohovore


let namePosition = "admin"

if (namePosition === "programator") {
  console.log("Aky je rozdiel medzi....");
} else if (namePosition === "admin"){
  console.log("Ake druhy sieti poznate?");
} else if (namePosition === "asistentka") {
  console.log("Poznate execel ?")
} else {
  console.log ("Svojich ludi mame dost!")
}

*
//Regulacia teploty - code
let temperature = 50;

if (temperature <= 10){
  console.log("Je chladno");
} else if (temperature >= 11 && temperature <= 25 ){
  console.log (" Je teplo");
} else if (temperature >= 26) {
  console.log ("Je horuco");
} else {
  console.log("Nutna kontrola")
}


//Svedok vers. pachatel

let height = 150;
let weight = 80;

if (height >= 190 || weight >= 100) {
  console.log('Mozny pachatel');
} else {
  console.log('Nobody');
}


function sayHallo(){
  console.log("Pozdrav 1");
}

sayHallo();

let sayHallo = () => {
  console.log("Hallo 23232");
}

sayHallo();
*


let zdraviacaFunkcia = (name) => {
  console.log("Ahoj ja som " + name);
}

zdraviacaFunkcia("Miso");
zdraviacaFunkcia("T");
zdraviacaFunkcia("Popo");
zdraviacaFunkcia("Miso"); 

let naDruhu =(number) => {

let result = number+number; 
return result;
}
let value1 =  (5);
console.log(value1);


let zvysFunkcia = (n) => {
  let result = n + 100; 
  return result;
}
 let value2 =  zvysFunkcia(25);
 console.log(value2);



let naDruhu = (number) => {
 let result = number * number;
 return result;
}
let value1 = naDruhu(5);
console.log(value1);


//Video a uloha c.26
let adultChecker = (age) => {

  if (age >= 18) {
    let result = "adult";
  return result;
  } else {
  let result = 'child';
  return result;
  }
}

let result =  adultChecker(1);
console.log(result);

if (result === "adult"){
  console.log("Vysledok kontroly veku: " + result);
  console.log ("Mozes vstupit");
}else {
  console.log("Vysledok kontroly veku: " + result);
  console.log ("NE-mozes vstupit " + result);
}


/*

let adultChecker = (age) => {
 if (age < 18) {
   console.log("Nie si dospely");
} else if (age <= 18){
  console.log ("Si dospely");
} else {
  ("Si mimo kategoriu, vypln spravne ...");
}
}
adultChecker(18);



let sucet = (a, b) => {
  return  a+b ;
}

let value = sucet (20, 30); 
console.log(value); 


// Game - defalt,vychodzia hodnota
let game = (name, score = 0) => {
  return "Meno:  " + name + ", Score: " +score
};

let value = game("David", 50);
console.log(value)



let code1 = 5;
let code2 = 6;
let code3 = 2;

let codeApproval = (a, b, c) => {
  if (a === code1 && b === code2 && c === code3){;
    return "Mozes vstupit"
} else {
    return "Entrance denided!!! Zly zadany code"
}
}

let result = codeApproval(5,6,2);
console.log(result);



let num1 = 5;
let num2 = 9;
let num3 = 0;

let enter = checkerCode = (a, b, c) => {
  if (a === num1 && b === num2 && c === num3) {
    //return 'Pristup povoleny';
    console.log("Code je Ok, vstup")
  } else {
    //return 'Pristup zamietnuty';
    console.log("Code je chybny, vstup zamietnuty!")
  }
};
 
enter (5,9,0);





let myName = 'Harry';
let age = 21;

console.log (`Ahoj, volam sa ${myName} a je mi ${age}` )



let pozdrav =(name, lastName) => {
  console.log(`${name} su tiez tvoje piezvisko ${lastName}`);
}

pozdrav ("Martin", "Terezz");



let firstName = "David";
let secondName = "Xavier";
let age = 15;
let firstFriend = "Oliver"
let secondFiend = "Setek";


console.log (`Ahoj volam sa ${firstName}, kde moje posledne meno ${secondName} a moj vek ${age}. Moj kamoss je ${firstFriend} `);


let movie = 'Ospala diera';
let director = "Tim Burton";
let award = "najlepsi vykon ve comkolvek";

console.log(`Videl som film ${movie}, ktory reziroval ${director}. Tento film ziskal ocenenie za ${award}`);


//Objekt

let myBook = {
  title: 'Name of book',
  author: 'J.K.Rowliiinkg',
  published: 1997
};
//console.log(myBook.title);
//console.log(myBook.published);

myBook.author = 'Jamess Bond';

console.log(myBook);

console.log(
  `Tato kniha ${myBook.title} bola vydana v roku ${
    myBook.published
  } pod autorom ${myBook.author}.`
);



//Video 34 - uloha 
let person1 = {
  name: "Julkoo",
  city: "Popradik",
  typeOf: "normal", 
  jobPosition: "unemploey"
};

let person2 = {
  name: "Tana",
  city: "BT",
  typeOf: "special", 
  jobPosition: "senior engineer"
};

let person3 = {
  name: "Tomas",
  city: "BB",
  typeOf: "special", 
  jobPosition: "specialist"
};

console.log(`My name is ${person3.name}, my appartment is situate in ${person3.city}. Level in my work ${person3.typeOf} and my job position ${person3.jobPosition}. Done.`);

console.log(`My name is ${person2.name}, my appartment is situate in ${person2.city}. Level in my work ${person2.typeOf} and my job position ${person2.jobPosition}. Done.`);


//Objekty - video 35 (vseobecny vypis)

let firstBook = {
  title: 'Name of book',
  author: 'J.K.Rowliiinkg',
  published: 1997
};

let secondBook = {
  title: 'Name of second book',
  author: 'J.K.Bowling',
  published: 2005
};


let resultBook = (book) => {
  console.log(`Kniha od ${book.author} date of published ${book.published}`);
}

resultBook(firstBook);
resultBook(secondBook);

//Video 37. Objkt vyzva

let person1 = {
  name: 'Anton',
  job: 'Production',
  city: 'TN',
  gender: 'male'
};

let person2 = {
  name: 'Jozefina',
  job: 'Bewerage and foots',
  city: 'ML',
  gender: 'female'
};

let person3 = {
  name: 'Sandra',
  job: 'administration',
  city: 'KE',
  gender: 'female'
};

let person4 = {
  name: 'Hybrid',
  job: 'no-administration',
  city: 'PO'
};

let personInfo = (person) => {

  if(person.gender === 'male'){
    console.log(
      `For men: Name of person is:${person.name} and his job is ${person.job}. you have to come to ${person.city}`);
  } else if (person.gender === "female"){
    console.log(`Name of person is:${person.name} and HER job is ${person.job}. you have to come to ${person.city}`);
  } else {
    console.log(`error, check your gender; Probqably you have forgotten fill in the column`);
  }
};

personInfo(person1);
personInfo(person3);
personInfo(person2); 
personInfo(person4);



//Video 38.

let firstInfo = 'Jan';
let myObject = {
  firstname: firstInfo,
  secondName: 'Safocak',
  age: '32',
  car: 'opel'
};

console.log(myObject.firstname);
console.log(`His name ${myObject.secondName} for name car ${myObject.car}`);

let firstBook = 'Best of Nobody';
let myObject1 = {
  firstItem: 'Adventure',
  secondItem: 'no damage',
  author: 'mr.Nobody',
  published: '2020'
};

let secondBook = 'Good year';
let myObject2 = {
  firstItem: 'Social',
  secondItem: 'no damage',
  author: 'Mrs. Adams',
  published: '2019'
};

let bookInfo = (book) => {
  return book.firstItem;
};

let result = bookInfo(firstBook);
console.log(result);

//console.log(myObject1.firstItem);
//console.log(myObject2.secondItem);
//console.log(myObject2.author);



let firstBook = {
  title: 'Adventure of global world',
  author: 'John David',
  published: '2015'
};

let secondBook = {
  title: 'Great Year for nany',
  author: 'Alice Trikko',
  published: '2021'
};

//funkcia pre bookInfo
let bookInfo = book => {
  //zoskupenie/vypisanie viac informacii
  return {
    basicInfo: `${book.title} od ${book.published}`,
    publishing: `Kniha bola napisana ${book.author}`
  };
};

//Vypis retunu
let result = bookInfo(firstBook);
console.log(result);

let result2 = bookInfo(secondBook);
console.log(result2.basicInfo);
console.log(result.publishing);


//Video 39 - Metoda 

let person = {
  firstName: "David",
  lastName: "Kaaboom",
  age: "34",
  salary: 2000,
  greet: function(friends){
    console.log(`Mam ${friends} priatelov.`)
  }, 
  toWork: function(job){
     return `Vratim sa do svojej prace ako ${job}`
 }
}
//console.log(person.age);
//person.greet(20);
let result = person.toWork("novy clovek");
console.log(result);



//Video 40 - Uloha/challenge

let school = {
  type: 'Gymnasium',
  street: 'Hlinku',
  city: 'Presov',
  capacity: 200,
  open: function() {
    console.log('Skola je otverena');
  },
  closed: function(b) {
    return `Skola je predsa ${b}.`;
  }
};

console.log(school.type);
console.log(school.city);

school.open();

let result2 = school.closed('ZATVORENA');
console.log(result2);


//Video 41 (.this)

let person = {
  firstName: 'David',
  secondName: 'Setek',
  age: 35,
  greet: function() {
    console.log(this.secondName);
    console.log(this.age);
  }
};

person.greet();

let person2 = {
  firstName: 'Petra',
  secondName: 'Nowak',
  age: 33,
  greet: function() {
    console.log(this.secondName);
    console.log(`Ahoj ja som ${this.firstName}`);
  }
};

person2.greet();


// Video 42. challenge

let vladneNariadenie = true;

let school = {
  type: 'Gymnasium',
  street: 'Hranicna',
  capacity: 520,
  city: 'Poprad',
  open: function() {
    console.log(`Skola ${this.type} je otvorena v meste ${this.city}`);
  },
  close: function() {
    console.log(`Skola ${this.type} je ZATVORENA v meste ${this.city}`);
  }
};

 if (vladneNariadenie) {
  school.close();
} else {
  school.open();
}

//Video 43
let firstName = 'Povnotybnopym5opympe';

//console.log(firstName.length);

//console.log(firstName.toUpperCase());

let sentence =
  'Skola je doma, preto vyhovuje nam chodit do skoly, ked vsetko je doma a sedi doma.';
let findWord = `"`;

console.log(sentence.includes(findWord));


//Video 44 - challenge

let password = 'P123';

if (password.length >= 13) {
  console.log('Great password! Uroven 1.');
} else if (password.length >= 8 && password.length <= 13) {
  console.log('Heslo je medzi 8 a 13, porozmyslaj o zmene hesla na lesie...');
} else {
  console.log('Heslo error');
}

if (password.includes('1234')) {
  console.log('Nesmie onsahovat 1234!!!');
} else {
  console.log('Heslo je ok ohladom cislic 1234');
}


//Video 45

let number = 3.1450899;

console.log(number.toFixed(number));
console.log(Math.round(number));

//nahodne cislo
console.log(Math.random(number));

console.log(Math.ceil(Math.random() * 10));

let min = 10;
let max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


//Video 46 - challenge

let num1 = Math.floor(Math.random() * 6) + 1;
let num2 = Math.floor(Math.random() * 6) + 1;
let num3 = Math.floor(Math.random() * 6) + 1;
let num4 = Math.floor(Math.random() * 6) + 1;
let num5 = Math.floor(Math.random() * 6) + 1;
let num6 = Math.floor(Math.random() * 6) + 1;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);


let sum = num1 + num2 + num3 + num4 + num5 + num6;
if (sum >= 25) {
  console.log('Si vytaz');
} else {
  console.log('Zkus svoje stastie este raz');
}

console.log(`Sucet je: ${sum}`);

//Video 47

const person = {
  age: 34
}
console.log(person);

person.age = 50;

//Video 50
let employees = ["David", "Martin", "Anna"]

console.log(employees[2]);


let data = ['David', 'Martin', 'Anna', 'John', true, 13.5];
  //console.log(data[5]);

  console.log(data[data.length-1]);



//Video 51

let password = ['Prva12', 'Druha', 'Tretia21', 'Stvrta2', 'Piata', 20, 54.4];

let randomNumber = Math.ceil(Math.random() * 7);

//console.log([randomNumber]);
let index = password.length - randomNumber;
//console.log(index);

console.log(password[index]);


//Test 51 video - challenge

let pole = [5, 6, 8, '123David', 'Loki358', 'Sezam687'];

let randomSelectionNumber = Math.ceil(Math.random() * 6);

console.log(randomSelectionNumber);


let result = pole.length - randomSelectionNumber;
console.log(pole[result]);



// Video 52

//Prespis prvku v poli
let testArray = ['cislo1', 'cislo2', 'cislo3', 'cislo4'];
testArray[0] = 'New item 1';
//console.log(testArray);

//Pridanie posledneho prvku
let newArray = [1, 5, 8, 0];
newArray.push('posledny');
//console.log(newArray);

//Odstranenie posled.prvku v poli
newArray.pop();
//console.log(newArray);

//pridanie prveho prvku
newArray.unshift('Uplne prvy');
//console.log(newArray);

//Video 53

//Odstranenie prveho prvku v poli
newArray.shift();
//console.log(newArray);

// odstranenie-pridanie prvku do pola
newArray.splice(2, 0, 'Tuto');
console.log(newArray);


//Video 54

let firstname1 = prompt('Zadaj prve meno ');
console.log(firstname1);
let firstname2 = prompt('Zadaj druhe meno ');
console.log(firstname2);
let firstname3 = prompt('Zadaj tretie meno ');

 console.log(firstname3);

let lastName1 = prompt('Zadaj uplne prve');
console.log(lastName1);
let lastName2 = prompt('Zadaj uplne druhe');
console.log(lastName2);
let lastName3 = prompt('Zadaj uplne tretie');
console.log(lastName3);

let newArray = [];
newArray.push(firstname1, firstname2, firstname3);

newArray.splice(0,0, lastName1, lastName2, lastName3);
console.log(newArray);



//Video 55

let employees = ['David', 'Fero', 'Jana', 'Sandra'];

//employees.forEach(function() {
//  console.log('testujem');
//});

//employees.forEach(function(huma){
//console.log(huma);
//});

employees.forEach(function(person, index) {
  
  console.log(index);
  console.log(person);
});



// Video 56 - challenge

let toDO = ['Vyvencit', 'Kupit LasKecap', 'Vymalovat', 'Urobit si jedlo'];

toDO.forEach(function(activity, index) {
  let number = index + 1;
  //console.log(number);
  console.log(`${number}. ${activity}`);
});


//Video 57

for (let i = 0; i <= 5; i++) {
  console.log(`${i+1}: Testovaci text`);
}


let employees = ['David', 'Fero', 'Jana', 'San', 'Sandra'];
for (let k = 0; k < employees.length; k++) {
  console.log(employees[k]);
}


// Video 58 - challenge

let toDO = ['Zostrihat video', 'Poupratovat', 'Povysavat'];

for (let i = 0; i < toDO.length; i++) {
console.log(`${i + 1} ${toDO[i]}`)
  };




let newArray = [];
for (let i = 0; i < 3; i++) {
  newArray.push(i);
  console.log(newArray);
}

for (let k = 0; k < newArray.length; k++) {
  console.log(newArray[k]);
}


//Video 59

let employees = ['David', 'Jana', 'Tomas'];

console.log(employees.indexOf('Jana'));

if (employees.indexOf('Jana') === -1) {
  console.log('Uzivatel nie je v databaze');
} else {
  console.log('Uzivatel JE v databaze');
}



//Video 60

let books = [
  {
    title: 'Harry no.1',
    published: 1997,
    condition: 'used'
  },
  {
    title: 'Loan no.2',
    published: 1999,
    condition: 'brand new'
  },
  {
    title: 'Harry no.1',
    published: 2001,
    condition: 'used'
  }
];

//console.log(books[2].title);
//console.log(books[2].condition);
//console.log(books[2].published);

//console.log(books.indexOf({}))

let arrray1 = [8, 11, 23, 45, 25, 4, 0];

let result = arrray1.findIndex(function(number) {
  return number > 15;
});
//vracia na ktorej pozicii nasiel 'number > 15'
//console.log(result);

//findIndex na poli objektov
let result2 = books.findIndex(function(oneBook){
  return oneBook.published === 1999;
})

console.log(result2);



//Video 62 - challenge - Pole objektov

//let meno = "";

let criminals = [
  {
    firstName: 'Martin',
    secondName: 'Zeleny',
    birth: 1995,
    address: 'U slupo 16',
    city: 'Ceske onto'
  },
  {
    firstName: 'Jana',
    secondName: 'Ruzova',
    birth: 1996,
    address: 'Sevarnadzeho 8',
    city: 'Ceske Konto'
  },
  {
    firstName: 'Filip',
    // secondName: 'Modry',
    birth: 1989,
    address: 'U jakese 654/2',
    city: 'Ceske one'
  },
  {
    firstName: 'Julius',
    secondName: '',
    birth: 1989,
    address: 'U jakese 654/2',
    city: 'Ceske one'
  }
];

let meno = prompt('Zadaj krstne meno');

// Standard
let result = criminals.findIndex(function(findPerson) {
  return findPerson.firstName === meno;
});

// Short way
let criminalIndex = criminals.findIndex(p => p.firstName === meno);

if (result === -1) {
  console.log('Osoba nenajdena');
} else {
  if (!criminals[result].hasOwnProperty('secondName')) {
    console.error(`${criminals[result].firstName} nema property secondName!`);
  } else if (!criminals[result].secondName) {
    console.error(
      `${criminals[result].firstName} ma property secondName, ale je prazdne!`
    );
  } else {
    console.log(result, criminalIndex);
    console.log(criminals[result].secondName);
  }
}


// iny sposob
let osoba = criminals.find(c => c.firstName === meno);
console.log(osoba);


let osoba2 = criminals.find(o => {
  return o.firstName === meno;
})

let osoba3 = criminals.find(o => o.firstName === meno)



// Video c.63

//bezne pole 
let myArray = [1, 5, 20, 4, 9];

let result = myArray.find(function(firstResult) {
  return firstResult > 5;
});
console.log(result);
*/

//find a pole objektov

let books = [
  {
    title: 'Harry no.1',
    published: 1997,
    condition: 'used'
  },
  {
    title: 'Loan no.2',
    published: 1999,
    condition: 'brand new'
  },
  {
    title: 'Harry no.3',
    published: 2001,
    condition: 'used'
  }
];

let result6 = books.find(function(oneBook) {
  if (oneBook.published === 2001) {
    return oneBook;
  }
});
console.log(result6[]);
