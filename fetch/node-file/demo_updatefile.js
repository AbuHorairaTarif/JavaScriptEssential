var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is appended text.', function(err){
    if(err) throw err;
    console.log('Updated!');
});