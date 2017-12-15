var playlist = {};

function updatePlaylist(playlist, name, title) {
  obj[name] = title;
  
  return obj;
}

function removeFromPlaylist(playlist, name) {
  delete playlist.name;
  
  return playlist;
}