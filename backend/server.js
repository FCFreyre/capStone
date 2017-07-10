import express from 'express';
import mongodb from 'mongodb';
import cors from 'cors';

const app = express();
app.use(cors())
const dbUrl = 'mongodb://localhost/capstone';

mongodb.MongoClient.connect(dbUrl, function(err, db) {


  app.get('/api/plays', (req, res) => {
    db.collection('plays').find({}).toArray((err, plays) => {
      res.json({ plays });
    });
  });

  app.listen(8080, () => console.log('Server is running on localhost:8080'));

});
