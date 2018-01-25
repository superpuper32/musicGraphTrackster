var Trackster = {};
const API_KEY = 'e396df6cd5b772d53b26ae1c0deb64e2';

$(document).ready(() => {
  $('#search-btn').on('click', () => {
    Trackster.searchTracksByTitle($('#search-input').val());
  })


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
  $.ajax({
    url: "http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + title + "&api_key=" + API_KEY + "&format=json",
    success: console.log('response')
  });
};


/* Shared Secret 58e90f41ca9e103c47eb45149a27dc55 */
