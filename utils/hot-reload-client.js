var socket = io('http://localhost:5000');
socket.on('broadcast', function(data){
  window.location.reload()
});
