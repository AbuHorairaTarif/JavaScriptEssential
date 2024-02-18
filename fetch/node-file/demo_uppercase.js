// Use dynamic import() instead of require() for ES Modules
import('upper-case').then(uc => {
    const http = require('http');
  
    // Create a server using the http module
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      // Use the uc function from the dynamically imported upper-case module
      res.write(uc.upperCase("Hello World!"));
      res.end();
    }).listen(8081);
  }).catch(err => {
    console.error('Error loading upper-case module:', err);
  });
  