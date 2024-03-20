const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.post('/mul', (req, res) => {
  const x = req.body.X;
  const y = req.body.Y;
  const result = x * y;
  res.send({
    X: x,
    Y: y,
    Result: result,
  });
});

app.listen(port, () => {
  console.log('Server is running on port 8080');
});
