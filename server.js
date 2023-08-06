import express from "express"
import submitRoute from './routes/submitRoute.js'

const app = express()
const port = 3000

app.use('/api/v1/submit', submitRoute);

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})