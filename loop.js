let person=
   [{ name:"Renish",
    salary:"2000",
    qualification: "BCA",}]
    
    
    
for (key in person){
    console.log(`The ${key} is ${person[key]} `);
}

let arr=new Array("Renish","Sudesh","Hari");
for (element of arr){
    console.log("The names of person is "+element[0]);
}