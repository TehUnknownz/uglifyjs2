"use strict";

Package.describe({
  name: 'ssrwpo:minifierjs',
  summary: 'JavaScript minifier',
  version: '2.0.0',
});

Npm.depends({
  'uglify-js': '2.8.21',
});

Package.onUse((api) => {
  api.use(['ecmascript', 'babel-compiler']);
  api.export(['meteorJsMinify']);
  api.addFiles(['minifier.js'], 'server');
});
