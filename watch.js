var gaze = require('gaze')

const server = require('http').createServer();
const io = require('socket.io')(server);

server.listen(5000);

gaze(['**/*.js','**/*.html','**/*.css'], function(err, watcher) {
  let watched = this.watched();
  //监听文件的变化
  this.on('changed', (filepath) => {
    io.emit('broadcast', {id:1})
  });
});
