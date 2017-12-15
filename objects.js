var playlist = {};

function updatePlaylist(playlist, name, title) {
  var obj = {};
  
  obj.name = title;
  
  return playlist;
}

function removeFromPlaylist(playlist, name) {
  delete playlist.name;
  
  return playlist;
}