import app from "./app";
import { AppDataSource } from "./data-source";

(async() => {
    await AppDataSource.initialize()
    .catch((err) => {
        console.error(err)
    })
    app.listen(3333)
})()