/**
 * @Author: K.
 * @Date: 2018-12-18
 */
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
