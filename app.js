// ****** AJAX Request from Star Wars API ****** //
// ****** Utilizing API key ****** //
//limit the results to 25. The data I would like to see for each entry is as follows:
// - birth_year
// - gender
// - homeworld
// - name
// - species
// - url

const url = "http://swapi.co/api/";
https://swapi.co/documentation#people

$(document).ready(function() { // ****** Begin Document Ready Anonymous Function ****** //

  loadPerson();
    // ****** AJAX Method ****** //
    $.ajax({
      url: url,
      jsonpCallback: "jsonCallback",
      contentType: "application/json",
      dataType: "json",
      success: function(json) {
        console.log(json);
      },
      error: function(e) {
      console.log(e.message);
      }
    }); 

    // ****** Callback Function ****** //
    function handleResult(result){

      if(result.media_type == "video") { // ****** Media_Type = video ****** //
        $("#apod_img_id").css("display", "none"); 
        $("#apod_vid_id").attr("src", result.url);
      }

      else { // ****** Media_Type = image ****** //
        $("#apod_vid_id").css("display", "none"); 
        $("#apod_img_id").attr("src", result.url);
      }

      // ****** Set HTML IDs from API Returned Properties ****** //
      $("#reqObject").text(url);
      $("#apod_explaination").text(result.explanation);
      $("#apod_title").text(result.title);
      $("#image-link").attr('href', result.url);
      $("#apod_img_id").attr('alt', result.title);
      $("#apod_img_id").attr('title', result.title);
    };
// ****** End Document Ready Anonymous Function ****** //
