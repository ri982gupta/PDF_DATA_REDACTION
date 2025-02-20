const userRoutes = (app, fs) => {

    const readFile = (
        callback,
        returnJson = false,
        filePath = dataPath,
        encoding = 'utf8'
      ) => {
        fs.readFile(filePath, encoding, (err, data) => {
          if (err) {
            throw err;
          }
    
          callback(returnJson ? JSON.parse(data) : data);
        });
      };
    
      const writeFile = (
        fileData,
        callback,
        filePath = dataPath,
        encoding = 'utf8'
      ) => {
        fs.writeFile(filePath, fileData, encoding, (err) => {
          if (err) {
            throw err;
          }
    
          callback();
        });
      };

    const dataPath = './data/users.json';

    app.post('/users', (req, res) => {
        
        readFile((data) => {
          
          const newUserId = Date.now().toString();
      
          // add the new user
          data[newUserId] = req.body;
          
      
          writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).send('new user added');
          });
        }, true);
      });
      
  
      app.put('/users/:id', (req, res) => {
        readFile((data) => {
     
          const userId = req.params['id'];
          data[userId] = req.body;
      
          writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).send(`users id:${userId} updated`);
          });
        }, true);
      });
  

      app.delete('/users/:id', (req, res) => {
        readFile((data) => {
    
          const userId = req.params['id'];
          delete data[userId];
      
          writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).send(`users id:${userId} removed`);
          });
        }, true);
      });
      
    app.get('/users', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
        res.header('Access-Control-Allow-Origin', "*");
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = userRoutes;