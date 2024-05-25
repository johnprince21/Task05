//Resume create in format of JSON :

let resume = {
    "candidateInfo" : {
              "name": "John Prince",
              "email": "johnprincerio@gamil.com",
              "phone": 850850,
              "degree": "B.E",
              "location": {
                "address": "Pollachi",
                "postalCode": 642001,
                "city": "Coimbatore",
                "state": "Tamilnadu",
                "country": "India"
              },
              "profiles": [
                {
                    "github":"https://github.com/johnprince21"
                }
              ]
            },
            "education": [
              {
                "institution": "Sri Krishna College Of Engineering And Technology",
                "studyType": "fulltime",
                "batch start year": 2017,
                "batch end year": 2021,
                "cgpa": 7.5,
              }
            ],
            "languages": [
              {
                "language": "Tamil,English",
              }
            ],
            "interests": [
              {
                "in": "Reading books, Playing guitar, writting scripts",
              }
            ]
          }
          console.log(resume);


QUESTION 2 :


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




          
