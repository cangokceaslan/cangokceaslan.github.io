/*
 * Tabler (v0.9.0): scss-compile.js
 * Copyright 2018-2019 The Tabler Authors
 * Copyright 2018-2019 codecalm
 * Licensed under MIT (https://github.com/tabler/tabler/blob/master/LICENSE)
 */

//node-sass --output-style expanded --source-map true --source-map-contents true --precision 6 scss/tabler.scss dist/css/tabler.css

const path = require('path'),
  glob = require("glob"),
  fs = require("fs"),
  sass = require("node-sass");

glob("scss/tabler*.scss", {}, function (er, files) {
  files.forEach(function(file){
    var basename = path.basename(file, '.scss');
    
    sass.render(
      {
        file: file,
        outFile: `dist/css/${basename}.css`,
        sourceMap: true,
        sourceMapContents: true,
        precision: 6
      },
      (error, result) => {
        if (!error) {
          fs.writeFile(`dist/css/${basename}.css`, result.css, error => {
            if (error) {
              console.log(error);
            }
          });

          fs.writeFile(`dist/css/${basename}.css.map`, result.map, error => {
            if (error) {
              console.log(error);
            }
          });
        } else {
          throw error;
        }
      }
    );
  });

 
});
