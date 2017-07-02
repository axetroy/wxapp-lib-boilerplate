//index.js

const lib = require('../../index').default;

var app = getApp();
Page({
  data: {
    success: 0,
    fail: 0
  },
  onLoad: function() {
    console.log(lib);
  }
});
