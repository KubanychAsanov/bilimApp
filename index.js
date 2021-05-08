const express = require('express')
const path = require('path')
const scrf = require('csurf')
const flash = require('connect-flash')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStote = require('connect-mongodb-session')(session)
var Handlebars = require('handlebars')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const profileRoutes = require('./routes/profile')
const blogsRoutes = require('./routes/blogs')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const authRoutes = require('./routes/auth')
const varMiddleware = require('./middleware/variables')
const fileMiddleware = require('./middleware/file')
const userMiddleware = require('./middleware/user')

const MONGODB_URI = "mongodb+srv://kuba:HZNatTQKIZIspRIL@cluster0.hjuuw.mongodb.net/blog";
const app = express()
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
  helpers: require('./utils/hbs-helpers'),
  handlebars: allowInsecurePrototypeAccess(Handlebars)
})
const store = new MongoStote({
  collection: 'sessions',
  uri: MONGODB_URI
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: 'some secret value',
  resave: false,
  saveUninitialized: false,
  store
}))
app.use(fileMiddleware.single('avatar'))
app.use(scrf())
app.use(flash())
app.use(varMiddleware)
app.use(userMiddleware)

app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/blogs', blogsRoutes)
app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)

const PORT = process.env.PORT || 3000

async function start() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })

  } catch (error) {
    console.log(error)
  }
}

start()

