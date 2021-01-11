const express = require('express')
const app = express()
const path = require('path')
const port = 3000
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require("./middleWare/tokenMiddleWare"))


app.use("/api/whoami",require("./routes/whoami"))

app.use("/api/sign", require("./routes/sign"))
app.use("/api/qesBank", require("./routes/qesBank"))
app.use("/api/qesItem", require("./routes/qesItem"))
app.use("/api/exam", require("./routes/exam"))
app.use("/api/examinee", require("./routes/examinee"))



app.listen(port, () => console.log(`服务器开启`))