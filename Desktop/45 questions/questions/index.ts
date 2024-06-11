//problem 2.personal message
let personname :string= "harram";
console.log(`${personname}`,"would you like to learn python today");//harram,would you like to learn python today.


//problem3.name cases.
let person1 :string="harram";
let person2 :string="HARRAM";
let person3 :string="Harram";
console.log(`${person1},${person2},${person3}`,'in upper , lower and title cases')


//problem4.famous quote.
let famousperson:string="albert einstein";
let hisFamousQuote="A person who never made a mistake never tried something new"
console.log(`${famousperson},${hisFamousQuote}`);

// problem 5. famous quote2.as coded above.


//problem 6 . stripping name.
let whitespacename ="\t harram arshad \n" ;
console.log("original name with white spaces:");
console.log(`${whitespacename}`);

let stripped_name = ('harram');
console.log("\nName after stripping whitespace:");
console.log(`${stripped_name}`)//whitespace   harram   .//after stripping:harram.


//problem7. number 8.
let addition:number=4+4;
console.log(`${addition}`)//8
let substraction=10-2;
console.log(`${substraction}`);//8
let multiplication=2*4;
console.log(`${multiplication}`);//8
let division=16 / 2;
console.log(`${division}`);//8

//problem8. create four line to get number8.
console.log(5+3);//8
console.log(10-2);//8
console.log(2*4);//8
console.log(16 / 2);//8


//problem9 . favourite number.
let favouritenumber = 5;
let message = 'is my lucky number';
console.log(`${favouritenumber},${message}`);//5 is my lucky number.


//problem10. adding comments.
famousperson // coded by harram arshad ,current date: 6-5-2024.
favouritenumber // coded by harram arshad , current date : 6-5-2024.


//problem11. Array of names.
let  arrayname=["bob","oliver","sofia","harry"];
let arrayname1="bob";
let arrayname2="oliver";
let arrayname3="sofia";
let arrayname4="harry";
console.log(`${arrayname}`);

//problem12. greetings.
arrayname1="bob";
message="is my best friend";
console.log(`${arrayname1},${message}`);
arrayname2="oliver";
message="is my best friend";
console.log(`${arrayname2},${message}`);
arrayname3="sofia";
message="is my best friend";
console.log(`${arrayname3},${message}`);
arrayname4="harry";
message="is my best friend";
console.log(`${arrayname4},${message}`);


//problem13.Your own array.
let transportationarray =["cars","motorcycle","train"];
console.log(`${transportationarray}`)
let transportationarray1=["Cars"];
let statement1=("I would like to own Parado");
console.log(`${statement1}${transportationarray1}`)//I WOULD LIKE TO OWN PARADO CARS.
let transportationarray2=["Motorcycle"];
 let statement2=("I would like to own Honda");
console.log(`${statement2}${transportationarray2}`);//I WOULD LIKE TO OWN HONDA MOTORCYCLE.
let transportationarray3=["train"];
let statement3=("I would like to travel in Bullet");
console.log(`${statement3}${transportationarray3}`);//I WOULD LIKE TO TRAVEL IN BULLET TRAIN.


//Problem14.Guest list.
 const invitedperson=["p1","p2","p3"];
 const persons=["Albert Einstein","Elon Musk","John"];
 message='it would be a great hounour if you join me for dinner at 8pm';
 const sendername="Harram";
 console.log(`${persons}:,${message}, by ${sendername}`);//Albert Einstein,Elon Musk ,John : it would be a great honour if you join me for dinner at 8 pm by Harram.


 //problem15.changing guest list.
//pop 1 guest.
const personsremove=persons.pop();
console.log(persons);//John has been pop from guest list.
//unshift guest.
persons.unshift("oliver");
console.log(persons);//oliver has been added in guest list.
console.log(`${persons}:${message}${sendername}`);//Oliver,Albert Einstein , Elon Musk :it would be a great honour if you join me for dinner at 8 pm by Harram.


//problem16.More guests.
//add one new guest at beginning.
persons.unshift("Diana");
console.log(persons);//Diana, oliver, Albert Einstein,Elon Musk.
//add new guest in the middle of array.
const newguest= "David";
const indexToAddAt = 2;
persons.splice(indexToAddAt, 0 , newguest);
console.log(persons);//Diana, oliver,David, Albert Einstein,Elon Musk.
//add new guest at the of array.
persons.push("Sofia");
console.log(persons);//Diana, oliver,David, Albert Einstein,Elon Musk,Sofia.


//problem17.Shrinking guest list.
//remove guests.
//First person pop.
persons.pop();
console.log(persons);//Sofia has been poped out from guest list.
message="Sofia, i'm sorry i can't invite you to dinner";
console.log(message);
//Second person pop.
persons.pop();
console.log(persons);// Elon Musk has been poped out from guest list.
message="Elon Musk, i'm sorry i can't invite you to dinner"
console.log(message);
//third person pop
persons.pop()
console.log(persons);// Albert Einstein has been poped out from guest list.
message="Albert Einstein, i'm sorry i can't invite you to dinner"
console.log(message);
//Fourth person pop.
persons.pop()
console.log(persons);// David has been poped out from guest list.
message="David, i'm sorry i can't invite you to dinner"
console.log(message);
//message to the last two person.
message=": you are still invited";
console.log(persons+message);//Diana , Oliver: you are still invited.
//poping the remaining two persons.
persons.pop()
console.log(persons);// Oliver has been poped out from guest list.
message="Oliver, i'm sorry i can't invite you to dinner"
console.log(message);
//
persons.pop()
console.log(persons);// Diana has been poped out from guest list.
message="Diana, i'm sorry i can't invite you to dinner"
console.log(message);
//empty guest list.
message="no guest remain";
console.log(message+persons);
persons.unshift("Albert Einstein","Sofia","Diana");

//problem18.Seeing the world.
const placesToVisit=["Kyoto","Santorini","Seoul","New York","Tokyo"];
//Print the array in its original order.
console.log("original order:",placesToVisit);
//PRINT the array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:",placesToVisit.slice().sort());
//Show that array is still in its original order.
console.log("original order:",placesToVisit);
//Print array in reverse alphabetical order.
console.log("Reverse Alphabetical order:",placesToVisit.slice().sort().reverse());
//Show that array is still in its original order.
console.log("original order:",placesToVisit);
//Reverse the order of list.
placesToVisit.reverse()
console.log("Reverse order:",placesToVisit);
//Reverse the order of list again.
placesToVisit.reverse();
console.log("Reverse the order again:",placesToVisit);
//Sorted alphabetical order.
console.log("Sorted alphabetical order:",placesToVisit.slice().sort());

//problem19.Dinner guest.
message="inviting you for dinner with my whole heart at 8pm:by Harram";
console.log(persons,message);//Albert Einstein,Sofia,Diana"inviting you for dinner with my whole heart at 8pm:by Harram".

//problem20.List of some array.
const mountainsList=["Mount Everest","K2","Matterhorn"];
const riversList=["Nile","Amazon","Chanab"];
const countriesList=["Pakistan","America","China"];
const citiesList=["Lahore","Karachi","Seoul"];
const languagesList=["Urdu","French","English"];
//combine all list of array into single array.
const allList=["mountainsList","riverList","countriesList","citiesList","languageList"];
//Display the allList in the array.
const category=[mountainsList,riversList,countriesList,citiesList,languagesList];
console.log(allList,category);//program containing all all the list of array.


//problem21.objects in array containing thei items.
const book={
   title:"Invertebrate Diversity",
   author:"Miller&Harley",
   pageCount:"680"//all inforamtion about Invertebrate Diversity
};
const mountain={
    mountain:"MountEverest",
    height:"8,848Meter",
    Location:"Nepal",//all inforamtion about MountEverest
};
const country={
    country:"Pakistan",
    population:"225 million",
    located:"the continent of Asia",//all inforamtion about Pakistan
};
//print the information of each object.
console.log("book information:",book);
console.log("mountain information:",mountain);
console.log("country information:",country);

//problem22.Intentional Error.
//already make an error in array programme:15,16,17.by changing an index.


//problem23.Conditional test.
//5 test evaluate to true.
let car ='Parado';
console.log(car=='Parado');//1 true.
let river='Amazon';
console.log(river=='Amazon');//2 true.
let Bike='Honda';
console.log(Bike=='Honda');//3 true.
let colour='Pink';
console.log(colour=='Pink');//4 true.
let Food='Pizza';
console.log(Food=='Pizza');//5 true.
//5 test evaluate to false.
let Hair='Black';
console.log(Hair=='Grey');//1 false.
let eyeColour='Blue';
console.log(eyeColour=='Black');//2 false.
let place='Paris';
console.log(place=='London');//3 false.
let people='4';
console.log(people=='5');//4 false.
let animal='Lion';
console.log(animal=='Tiger');//5 false.


//problem24. More conditonal test.
//test for equality and inequality with string.
let string1:string="hello";
let string2:string="world";
let string3:string="hello";
//testing for equality.
console.log(string1==string3)//true.
console.log(string2==string1)//false.
//testing for inequality.
console.log(string1!==string2)//true.
console.log(string1!==string3)//false.
//testing using the lower case function.
//equality.
console.log(string1.toLowerCase()==string3.toLowerCase());//true.
//inequality.
console.log(string1.toLowerCase()!==string3.toLowerCase());//false.
//testing using and and or gate.
//and function.
let n=4;
console.log(n>3 && n<=4)//true
console.log(n<3 && n<=4)//false
//or function.
console.log(n<=4 || n>10)//true
console.log(n<4 || n>10)//false
//test whether an item is in array.
let numbers:number[]=[1,2,3,4,5];
let numToFind=2;
if(numbers.includes(numToFind)){
    console.log(`${numToFind} is in the array`);
}else{
    console.log(`${numToFind} is not in the array`)
};//2 is in the array.
//test whether an item is not in the array.
let numNotToFind =6
if(!numbers.includes(numNotToFind)){
    console.log(`${numNotToFind} is not in the array`);
} else{
    console.log(`${numNotToFind} is  in the array`)
};//6 is not in the array.


//problem25.Alien colours //1.
let aliencolour='green';
if (aliencolour=='green'){
    console.log("congratulations you just earned 5 points");
}
//another program of if test.
aliencolour='green';
if(aliencolour=='yellow'){
    console.log("congratulations you just earned 5 points");
}

//problem 26. Alien colours //2.
//if block.
let aliencolour2='green';
if(aliencolour2=='green'){
    console.log("congratulations you just earned 5 points")
}else{
    console.log("congratulations you just earned 10 points");
}//in this the if block executed the green colour.
//else block.
aliencolour2='red';
if(aliencolour2=='green'){
    console.log("congratulations you just earned 10 points");
}else{
    console.log("congratulations you just earned 10 points")
};//in this the else block executed the red colour.

//problem27.Alien colours//3.
//if player will get 5 points.
let aliencolour3='green';
if(aliencolour3=='green'){
    console.log("congratulations you just earned 5 points")
}else if(aliencolour3=='red'){
    console.log("congratulations you just earned 15 points")
}else{
    console.log("congratulations you just earned 10 points")
}//if player already got 5 points.
//else player will get 10 points.
aliencolour3='yellow';
if(aliencolour3=='green'){
    console.log("congratulations you just earned 5 points")
}else if(aliencolour3=='red'){
    console.log("congratulations you just earned 15 points")
}else{
    console.log("congratulations you just earned 10 points")
}//else player already got 10 points.
//else if player will get 15 points.
aliencolour3='red'
if(aliencolour3=='green'){
    console.log("congratulations you just earned 5 points")
}else if (aliencolour3=='red'){
    console.log("congratulations you just earned 15 points")
}else{
    console.log("congratulations you just earned 10 points")
}//else if payer already got 15 points.


//problem28.Stages of life.
let personAge=1;
if(personAge<2){
    console.log("Person is a baby")
}else{
    console.log("person is not a baby")
}//person is a baby.
let personAge2=3;
if(personAge2>=2 && personAge<4){
    console.log("person is a toodler")
}else{
    console.log("person is not a toodler")
}//person is a toodler.
let personAge3=7
if(personAge3>=4 && personAge3<13){
   console.log("person is a kid")
}else{
    console.log("person is not a kid")
}// person is a kid.
let personAge4=15;
if(personAge4>=13 && personAge4<20){
    console.log("person is a teenager")
}else{
    console.log("person is not a teenager")
}// person is a teenagr.
let personAge5=27;
if(personAge5>=20 && personAge<65){
    console.log("person is an adult")
}else{
    console.log("person is not an adult")
}//person is an adult.
let personAge6=69;
if(personAge6<65){
    console.log("person is an elder")
}else{
    console.log("person is not an elder")
};//person is not an elder.

//problem29.Favourite fruit.
let FavouriteFruits=["Mango","Apple","Banana"];
//1 if statment.
if(FavouriteFruits.includes("Mango")){
    console.log("You really likes Mango!")
}else{
    console.log("Your favourite fruit is not in array")
}//You really like mango!
//2 if statment.
if (FavouriteFruits.includes("Apple")){
    console.log("you really likes Apple!")
}else{
    console.log("Your favourite fruit is not in array")
}//You really likes apple.
//3 if statment.
if(FavouriteFruits.includes("Kiwi")){
    console.log("You really likes Kiwi!")
}else{
    console.log("Your favourite fruit is not in array")
}// your fruit is not in array.
//4 if statment.
if (FavouriteFruits.includes("Banana")){
    console.log("You really likes Banana!")
}else{
    console.log("Your fruits is not in array")
}//You really likes Banana.
//5 if statment.
if (FavouriteFruits.includes("Melon")){
    console.log("You really likes Melon!")
}else{
    console.log("Your favourite fruit is not in array")
}//"Your favourite fruit is not in array".


//30 problem.Hello Admin.
let username=["Admin","Eric","John","Sofia","Bryan"];
let otherUser=["Eric","John","Sofia","Bryan"]
for(let i=0;i<=5;i++){
   if("Admin"=== username[i]){
    console.log("Hello admin would you like to see a status report?")
   }else{
    console.log("Thankyou for looging in again")
   }
};


//problem 31.No users
let users=['Harram','Eric','Sofia'];
//if test in which users are present.
if(users){
    console.log("Hello"+users+"!")
}else{
    console.log("We need to find some users")
}
//if test in which users array is empty.
users.length=0
if(users.length>=3){
    console.log("Hello"+users+"!")
}else{
    console.log("We need to find some users")
};


//problem 32.Checking usernames.
let currentUser:string[]=["Diana","Sofia","Lara","Bryan","Bella"];
let newUsers:string[]=["Rolph","Grey","Lara","Bob","Diana"];
for(let i=0;i<newUsers.length;i++){
    if(currentUser!==newUsers){
        console.log("Person will need to enter a new username");
        
    }else{
     console.log("The username is avaiable")
    }
}//this show that person need to enter new username.


//problem33.ordinal number
const num :number[]=[1,2,3,4,5,6,7,8,9];
for(let number of num){
    if(number===1){
        console.log(`${number}st`)//1st
    }else if(number==2){
        console.log(`${number}nd`)//2nd
    }else if(number==3){
        console.log(`${number}rd`)//3rd
    }else{
        console.log(`${number}th`)//4th,5th,6th,7th,8th,9th
    }  
};

//34 problem.Pizzas loop.
let favouritePizza:string[]=["CheesePizza","PepperoniPizza","Pineapple Pizza"];
let CheesePizza= favouritePizza[0];
let PepperoniPizza=favouritePizza[1];
let PineapplePizza=favouritePizza[2];
for(let i=0; i<favouritePizza.length;i++){
    if(i===0){
        console.log("I really like" + `${CheesePizza}`)
    }if(i===1){
        console.log("I really like"+ `${PepperoniPizza}`)
    }if(i===2){
        console.log("i really like" + `${PineapplePizza}`)
    }
};
console.log('I really like pizza')
//"I really like"  `${CheesePizza}.
//"I really like"+ `${PepperoniPizza}.
//"i really like" + `${PineapplePizza}.


//problem35. Animals.
let animals=["Lion","Tiger","Leopard"]
let animal1="Lion";
let animal2="Tiger";
let animal3="Leopard";
for(let i=0;i<animals.length;i++){
    if(i=1){
        console.log(`${animal2} is a carnivorous animal` )
    }if(i=2){
        console.log(`${animal3} has a remarkable ability to climb trees`)
    } if(i=3){
        console.log(`${animal1} is a king of jungle`)
    }
    console.log(" These cats share few common characters like sharp claws,sharp theeth and have carnivorous diet") 
}//print the animals and their shared characters.


//problem 36. T-shirts.
function Tshirt(size:string, message:string):void{
     console.log(`Creating a ${size} with a message: ${message} `)
};
//Calling the function.
Tshirt("Medium size Shirt" , "Hello,customer! ")//You have ordered a medium size shirt Hello,customer


//problem37.Different size shirt function.
//Large shirt with default message.
Tshirt("Large size shirt","I love Typescript");
//Creating a Large size shirt with a message:I love Typescript.
Tshirt("Small size shirt","I love typescript");
//Creating a small size shirt with a message:I love Typescript.
Tshirt("special size shirt","Hello,customer") ;
//Creating a special size shirt with a message:Hello,customer!


//problem38.Cities.
function describeCity(nameofCity:string,itsCountry:string):void{
    console.log(`${nameofCity} is in ${itsCountry}`)
};
//calling the function
describeCity("Lahore","Pakistan");//Lahore is in Pakistan.
describeCity("Karachi","Pakistan");//Karachi is in Pakistan.
//different country with city.
describeCity("London","England");//London is in England.



//problem39.City name.
function cityCountry(nameofCity:string,itsCountry:string):string{
    return`${nameofCity},${itsCountry}` 
};
//calling the function.
console.log(cityCountry('Lahore','Pakistan'));
console.log(cityCountry('Paris','France'));
(cityCountry('New York','America'));


//problem40.Album.

function makeAlbum(ArtistName:string,Title:string,tracks?:number):string{
   return `${ArtistName},${Title},${tracks}`;
};
let album1=makeAlbum('Artist Name:Beyonce','Title:Lemonade');
let album2=makeAlbum('Artist Name:ED Sheeran','Title:Divide');
let album3=makeAlbum('Artist Name:Adele','Title:25');
let album4=makeAlbum('Artist Name:taylor swift','Title:1989',16);
console.log(album1);//in that it show that the track is undefined.
console.log(album2);//in that it show that the track is undefined.
console.log(album3);//in that it show that the track is undefined.
console.log(album4);//Album detail along th track as the track is given.



//problem41.Magicians Name.
let MagiciansName=["Merlin","Houdini","David CopperField","Peen"];
function showMagicians(MagiciansName:string):void{
    console.log(MagiciansName)
};
showMagicians(`${MagiciansName}`)

//problem42..Great magicians.
function makeGreat(thePhrase:string):void{
    console.log(thePhrase)
};
//Calling Function.
let thePhrase=["The Great"];
showMagicians(`${thePhrase} ${MagiciansName}`);
console.log(showMagicians)// " The Great David copperfield","Merlin","Peen".


//problem43.Unchanged Magicians.
//Original array of magician name.
MagiciansName;
//call make great with the copy of original array.
let greatMagicians=(`${thePhrase} ${MagiciansName}`);
//Original magicians name.
console.log(MagiciansName);//Merlin","Houdini","David CopperField","Peen"
showMagicians(`${MagiciansName}`);
//show magicians with the Great.
console.log(greatMagicians);// The Great Merlin","Houdini","David CopperField","Peen"
showMagicians(`${MagiciansName}`);


//problem44.Sandwiches.
function makeSandwich(...ingridients:string[]):void{
      const sandwichSummary=`Making sandwich with the following ingridients: \n ${ingridients.join('\n-')}`;
      console.log(sandwichSummary)
};

//Calling the function.
makeSandwich("Cheese","Lettuce","Tomato");//`Making sandwich with the following ingridients:The ingredients.
makeSandwich("Turkey","Cheese","Ketchup");//`Making sandwich with the following ingridients:The ingredients.
makeSandwich("Mayonnaise","Egg","Tomato");//`Making sandwich with the following ingridients:The ingredients.


//problem45.Cars.
function CreateCar(maufacture:string,model:string,option:any):void{
    return{maufacture,model,...option};
};
const carDetail=CreateCar('Toyota','Corolla',{colour:'red',year:'2024'});
console.log(carDetail);//Toyota,Corolla,red,2024;





































































































































































































































































































































































































































 





    








































































