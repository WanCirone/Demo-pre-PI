//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, City } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); 
    var caracas =  City.create({
      name: "Caracas",
      min: 20,
      max: 30
    });
    
    var cali =  City.create({
      name: "Cali",
      min: 1,
      max: 50
    });
    
    var bsas =  City.create({
      name: "Buenos Aires",
      min: 100,
      max: 200
    });

    var quito =  City.create({
      name: "Quito",
      min: 10,
      max: 20
    });
    
    Promise.all([caracas, cali, bsas, quito])
      .then(res => {
        console.log("Ciudades precargadas");
      });
  });
});
