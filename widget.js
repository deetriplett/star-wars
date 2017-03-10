//API Request from SWAPI//

const url = "http://swapi.co/api/people/?page=1";

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let people = JSON.parse(xhr.responseText).results;
    console.log(people);
    //Display Data
    let statusHTML = '<ul>';
    //Loop through JSON Data for how many results there are (10)
    for (var i=0; i<people.length; i++) {
      console.log(i, people[i])
      // Only create *one* <li> tag per person
      statusHTML += '<li>';
      statusHTML += people[i].name + ', '
      statusHTML += people[i].birth_year + ', ';
      statusHTML += people[i].gender + ', ';
      statusHTML += people[i].homeworld + ', ';
      statusHTML += people[i].species + ', ';
      statusHTML += people[i].url;
      statusHTML += '</li>'
    }
      statusHTML += '</ul>';
      //INSERT into HTML
      console.log(statusHTML);
      document.getElementById('people-list').innerHTML = statusHTML;
  };
}//End ONREADY

xhr.open('GET', url);
xhr.send();
///////////////////////////////////////////////////////

let ajax2 = new XMLHttpRequest();
ajax2.onreadystatechange = function () {
  if (ajax2.readyState === 4 && ajax2.status === 200) {
    let morePeople = JSON.parse(ajax2.responseText).results;
    console.log(morePeople);
    //Display Data
    let statusHTML = '<ul>';
    //Loop through JSON Data for how many results there are (10)
    for (var i=0; i<morePeople.length; i++) {
      console.log(i, morePeople[i])
      // Only create *one* <li> tag per person
      statusHTML += '<li>';
      statusHTML += morePeople[i].name + ', '
      statusHTML += morePeople[i].birth_year + ', ';
      statusHTML += morePeople[i].gender + ', ';
      statusHTML += morePeople[i].homeworld + ', ';
      statusHTML += morePeople[i].species + ', ';
      statusHTML += morePeople[i].url;
      statusHTML += '</li>'
    }
      statusHTML += '</ul>';
      //INSERT into HTML
      console.log(statusHTML);
      document.getElementById('morePeople-list').innerHTML = statusHTML;
  };
}//End ONREADY

ajax2.open('GET', 'http://swapi.co/api/people/?page=2');
ajax2.send();
