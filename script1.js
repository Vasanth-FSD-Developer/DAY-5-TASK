//JSON
let myJSON = {
   "Name" : "Vasanth",
   "Age" : "23",
   "Gender" : "Male",
   "Skill": "FSD"
  };

  // Using For in loop:
  
  for (let a in myJSON) {
    console.log(a + ": " + myJSON[a]);
  }
   
  //-------------------------------------------------------------------------------------------------------------------------------------------------
  //Using For loop:
 

 let keys = Object.keys(myJSON);
 
 for (let i = 0; i < keys.length; i++) {
     let key = keys[i];
     console.log(key + ": " + myJSON[key]);
 }

 //-------------------------------------------------------------------------------------------------------------------------------------------------

 // Using For of Loop:

// Convert object to an array of key-value pairs

let entries = Object.entries(myJSON);

for (let [key, value] of entries) {
  console.log(key + ": " + value);
}
//-------------------------------------------------------------------------------------------------------------------------------------
// Using For Each Loop:

Object.keys(myJSON).forEach(function(key) {
  console.log(key + ": " + myJSON[key]);
});


 
  