//RETRIEVE API JSON and DISPLAY 

const  xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let people = JSON.parse(xhr.responseText).results;
    //console.log(people);
  
    //DISPLAY DATA
    let statusHTML = '<ul>';
    //Loop through JSON Data for how many results there are 
    for (var i=0; i<people.length; i++) {
      console.log(i, people[i]);
      // Only create *one* <li> tag per person
      statusHTML += '<li>';
      statusHTML += '<h3>' + people[i].name + '</h3><br>';
      statusHTML += '<h4>Birth Year : </h4>' + people[i].birth_year + '   ';
      statusHTML += '<h4>Gender : </h4>' + people[i].gender + '<br>';
      //HREF
      statusHTML += '<a href =""> <p>Check out Homeworld : </p>';
      statusHTML += people[i].homeworld + '</a><br>';
      statusHTML += '<a href =""> <p>Check out Species : </p>';
      statusHTML += people[i].species + '</a><br>';
      statusHTML += '<a href =""> <p>Character URL : </p>';
      statusHTML += people[i].url + '</a>';
      statusHTML += '</li>'
    }
      statusHTML += '</ul><br>';
     // statusHTML += '<button id="next"> Next </button>';
      //INSERT into HTML
      //console.log(statusHTML);
      document.getElementById('people-list').innerHTML = statusHTML;
  };
}//End ONREADY

xhr.open('GET', 'http://swapi.co/api/people/?page=1');
xhr.send();


///////////////////////////////////////////////////////////
//JQuery
 
//REVEAL button
$('#reveal').click(function () {
  $('#people-list ul li').show();
  $('#reveal').hide();  
});




//Retrieve(GET) data from http://swapi.co/api/people
  //1. Store response to a global 'PEOPLE' variable so it's accessible anywhere, not just inside that callback function.
  //2. Create a function that will take an index as a parameter
//Parse JSON
   // Render the HTML for just one person object
   //Inject into DOM
   //Button cLick through data


// let xhr = $.get( "http://swapi.co/api/people", function() {
//   console.log( "success" );
// })
//   .done(function() {
//     console.log( "second success" );
//   })
//   .fail(function() {
//     console.log( "error" );
//   })
//   .always(function() {
//     console.log( "finished" );
//   });

//Parse JSON Data into an array variable
// var arrayOfObjects = [{}]

// $(jQuery.parseJSON(JSON.stringify(arrayOfObjects))).each(function() {
//     var ID = this.id;
//     var TITLE = this.Title;
// });

//Loop through array

// for (var i = 0; i < arrayOfObjects.length; i++) {
//     var object = arrayOfObjects[i];
//     for (var property in object) {
            //html-ify it
//     }}

// data = []
//     //key: property
//     "name" : people[i].name,
//     "year" : people[i].birth_year,
//     "gender" : people[i].gender,
//     "homeworld" : people[i].homeworld,
//     "species" : people[i].species,
//     "url" : people[i].url
//   ];
// console.log(data)

// let Person = function(data) {
//   for (key in data) {
//     this[key] = data[key];
//   }
//   this.getKeys = function () {
//     return Object.keys(this);
//   }
// }

//PROMISES!
