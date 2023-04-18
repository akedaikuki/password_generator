// app.js
// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
// add 宣告以下 bodyParser //可以不用額外載入
// const bodyParser = require('body-parser')

// 載入隨機產生密碼的函式
const generatePassword = require('./generate_password')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true })) //改寫成 express，也可以直接取得 urlencoded 方法
// setting routes
app.get('/', (req, res) => {
  res.render('index')
})
// 根據使用者傳送的表單資料產生隨機密碼
app.post('/', (req, res) => {
    //優化 儲存表單資料並傳送到樣板
  const options = req.body
    const password = generatePassword(options)
    // console.log('random password is: ', generatePassword(req.body))
    res.render('index', { password, options })
  })
// app.post('/', (req, res) => {
//     res.render('index')
//     console.log('req.body', req.body)
//     // console.log('get form POST request') 
//     // 確認有收到資訊
// })

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})