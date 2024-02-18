var fs = require('fs');

fs.writeFile('mynewfile2.txt', 'Replaced file', function(err){
    if(err) throw err;
    console.log('Replaced');
});