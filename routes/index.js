// Copyright 2016 Eyevinn Technology. All rights reserved
// Use of this source code is governed by a MIT License
// license that can be found in the LICENSE file.
// Author: Jonas Birme (Eyevinn Technology)
var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

function initiateDefaultConf() {
  return {
    "row0": [],
    "row1": [],
    "row2": []
  };
}

/* GET home page. */
router.get('/', function(req, res) {
  conf = req.query.config;
  var confobj = initiateDefaultConf();
  if(conf) {
    var confpath = '../config/'+conf;
    console.log("Loading config " + confpath);
    if (fs.existsSync(path.join(__dirname, confpath))) {
      var confobj = JSON.parse(fs.readFileSync(path.join(__dirname, confpath), 'utf8'));
    }
  }
  res.render('index', { title: 'LSDMultiview', conf: JSON.stringify(confobj) });
});

router.get('/index2players', function(req, res) {
  conf = req.query.config;
  var confobj = initiateDefaultConf();
  if(conf) {
    var confpath = '../config/'+conf;
    console.log("Loading config " + confpath);
    if (fs.existsSync(path.join(__dirname, confpath))) {
      var confobj = JSON.parse(fs.readFileSync(path.join(__dirname, confpath), 'utf8'));
    }
  }
  res.render('index2players', { title: 'OTT Multiview', conf: JSON.stringify(confobj) });
});

router.get('/index2ycalidades', function(req, res) {
  conf = req.query.config;
  var confobj = initiateDefaultConf();
  if(conf) {
    var confpath = '../config/'+conf;
    console.log("Loading config " + confpath);
    if (fs.existsSync(path.join(__dirname, confpath))) {
      var confobj = JSON.parse(fs.readFileSync(path.join(__dirname, confpath), 'utf8'));
    }
  }
  res.render('index2ycalidades', { title: 'LSDMultiview', conf: JSON.stringify(confobj) });
});

router.get('/index4players', function(req, res) {
  conf = req.query.config;
  var confobj = initiateDefaultConf();
  if(conf) {
    var confpath = '../config/'+conf;
    console.log("Loading config " + confpath);
    if (fs.existsSync(path.join(__dirname, confpath))) {
      var confobj = JSON.parse(fs.readFileSync(path.join(__dirname, confpath), 'utf8'));
    }
  }
  res.render('index4players', { title: 'LSDMultiview', conf: JSON.stringify(confobj) });
});


router.get('/index12players', function(req, res) {
  conf = req.query.config;
  var confobj = initiateDefaultConf();
  if(conf) {
    var confpath = '../config/'+conf;
    console.log("Loading config " + confpath);
    if (fs.existsSync(path.join(__dirname, confpath))) {
      var confobj = JSON.parse(fs.readFileSync(path.join(__dirname, confpath), 'utf8'));
    }
  }
  res.render('index12players', { title: 'LSDMultiview', conf: JSON.stringify(confobj) });
});

router.get('/index8players', function(req, res) {
  conf = req.query.config;
  var confobj = initiateDefaultConf();
  if(conf) {
    var confpath = '../config/'+conf;
    console.log("Loading config " + confpath);
    if (fs.existsSync(path.join(__dirname, confpath))) {
      var confobj = JSON.parse(fs.readFileSync(path.join(__dirname, confpath), 'utf8'));
    }
  }
  res.render('index8players', { title: 'LSDMultiview', conf: JSON.stringify(confobj) });
});

router.get('/index10players', function(req, res) {
  conf = req.query.config;
  var confobj = initiateDefaultConf();
  if(conf) {
    var confpath = '../config/'+conf;
    console.log("Loading config " + confpath);
    if (fs.existsSync(path.join(__dirname, confpath))) {
      var confobj = JSON.parse(fs.readFileSync(path.join(__dirname, confpath), 'utf8'));
    }
  }
  res.render('index10players', { title: 'LSDMultiview', conf: JSON.stringify(confobj) });
});

module.exports = router;
