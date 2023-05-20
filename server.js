const express = require('express');
const app = express();
const port = 8080;

const initializeApp = require('./app/config/configFirebase');
const authRouter = require('./app/routes/authRoute');
const lessorRouter = require('./app/routes/lessorRoute');
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRouter);
app.use(lessorRouter);

(async () => {
  try {
    await initializeApp();
    app.listen(port, () => {
      console.log(`BarKit App listening on port ${port}`);
    });
  } catch (error) {
    console.error('Error initializing Firebase:', error);
  }
})();
