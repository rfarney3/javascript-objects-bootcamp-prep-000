var playlist = obj;

function updatePlaylist(obj, name, title) {
  obj.name = title;
  
  return obj;
}

function removeFromPlaylist(playlist, name) {
  delete playlist.name;
  
  return playlist;
}