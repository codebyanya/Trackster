var Trackster = {};
const API_KEY = 'e27487821a264bffa4867925fdbef68f';

$(document).ready(function() {
  $('#search-button').click(function() {
  Trackster.searchTracksByTitle( $('#search-input').val());
 });
});


/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {

};
