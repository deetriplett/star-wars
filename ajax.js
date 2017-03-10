
   let xhr = new XMLHttpRequest();
 	 xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      let people = JSON.parse(xhr.responseText);
      console.log(people);
     
      }
   
  };

xhr.open('GET', 'http://swapi.co/api/people/1/');
xhr.send();
