const express = require('express');
const path = require('path');

const dirName = path.resolve(__dirname);

const app = express();

app.use(express.static(path.resolve(dirName, 'build')));

app.get('*', (_, res) =>
  res.sendFile(path.resolve(dirName, 'build', 'index.html')),
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Website running in "http://localhost:${PORT}"`),
);
