var fs = require('fs');
fs.rename('mynewfile3.txt', 'tarif.txt', function(err) {
    if(err) throw err;
    console.log('File Renamed!');
});