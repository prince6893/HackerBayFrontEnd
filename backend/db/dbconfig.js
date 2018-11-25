const Sequelize = require('sequelize');
let dbUrl = null;
if(process.env.NODE_ENV === 'test') dbUrl = 'postgres://dugdumvy:GC-m4_vP0SdpnzunHmDa7UgCV-gVXKYR@pellefant.db.elephantsql.com:5432/dugdumvy'; 

else
{
  dbUrl = 'postgres://hackerbay:root@localhost:5432/hackerbay';
}
const sequelize = new Sequelize('Hackerbay', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
/*
const Sequelize = require('sequelize');
const sequelize = new Sequelize('hackerbay', 'hackerbay', 'root', {
  host: 'localhost',
  dialect: 'postgres',
});
sequelize
  .authenticate()
  .then(() => {
    console.log(
      `Successfully connected to localhost database as hackerbay user.`
    );
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
module.exports = sequelize;
*/
