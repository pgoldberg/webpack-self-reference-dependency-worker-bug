const path = require('path');

module.exports = {
  target: "web",
  mode: "production",
  entry: { app: ['./index.js'] },
  output: {
    path: path.resolve(__dirname, './build'),
  },
  optimization: {
    usedExports: "global",
  }
};
