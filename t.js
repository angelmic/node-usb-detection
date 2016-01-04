var monitor = require('./usb-detection');

monitor.find(function(err, devices) {
});
monitor.find(vid, function(err, devices) {

});

monitor.find(vid, pid, function(err, devices) {
    
});

monitor.on('add', function(devices) { 
	
});

monitor.on('add:vid', function(devices, vid) { 
	
});

monitor.on('add:vid:pid', function(devices) {

});

monitor.on('remove', function(err, devices) {

});

monitor.on('remove:vid', function(err, devices) {

});

monitor.on('remove:vid:pid', function(err, devices) {

});

monitor.on('change', function(err, devices) {
});

monitor.on('change:vid', function(err, devices) {

});

monitor.on('change:vid:pid', function(err, devices) {

});
