const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
const morgan = require('morgan');

const PORT = 3001;

const userRouter = require('./routes/userRouter');
const postRouter = require('./routes/postRouter');

const sessionConfig = {
  store: new FileStore(),
  key: 'sid',
  secret: 'dfslfldsjflk',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 24 * 60 * 60e3,
    httpOnly: true,
    // secure: true,
  },
};

const app = express();
app.use(morgan('dev'));
// для возможности получать cookies
app.use(cors({ credentials: true, origin: 'http://localhost:3002' }));
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use('/user', userRouter);
app.use('/post', postRouter);

app.listen(PORT, () => {
  console.log('Server start on ', PORT);
});
