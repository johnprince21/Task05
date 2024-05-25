const json = [ {
    "name" : "John Prince",
    "phone" : "850850",
    "mail" : "johnprincerio@gmail.com",
    "location" : "Chennai",
}];
// for in loop

 for (let key in json){
    console.log(json);
} 
// for loop

for (let i=0; i<json.length; i++){
    let obj = json[i];

    console.log(obj.name);
    console.log(obj.phone);
    console.log(obj.mail);
    console.log(obj.location);
} 
// forEach loop

json.forEach (function(obj) { 
    console.log(obj.phone);
 }); 
// for of

 for (let a of json){
    console.log(json);
 }
