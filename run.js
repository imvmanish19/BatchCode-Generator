const {db} = require('./connect');
const {app} = require('./server');

const start = async () => {
    try {

        await db.sync();

        await app.listen(7777,() => {
            console.log("Server Running at port",7777)
        });
    }
    catch(e) {
        console.log(e);
    }
}

start();