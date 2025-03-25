import { config } from "./src/config/config";
import app from "./src/app";
import connectDB from "./src/config/db";

const startServer = async() => {
    const port = config.port || 3000;
    // connect database

    await connectDB();

    app.listen(port,()=>{
        console.log(`listening on ${port}`)
    })
}

startServer();