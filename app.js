require('dotenv').config()

var ibmdb = require('ibm_db');
 
ibmdb.open(`DATABASE=${process.env.DATABASE};HOSTNAME=${process.env.HOSTNAME};UID=${process.env.UID};PWD=${process.env.PWD};PORT=${process.env.PORT};PROTOCOL=TCPIP`, function (err,conn) {
  if (err) return console.log(err);
  
  conn.query('SELECT * FROM db2inst1.Employee', function (err, data) {
    if (err) console.log(err);
    else console.log(data);
 
    conn.close(function () {
      console.log('done');
    });
  });
});