const app = require('..src/app.js');
const port = normalizaPort(process.env.PORT || '3000');

function normalizaPort(value) {
  const port = parseInt(value, 10);
  if (isNaN(port)) {
    return value;
  }
  if(port >= 0) {
    return port;
  }
  return false;
}

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})