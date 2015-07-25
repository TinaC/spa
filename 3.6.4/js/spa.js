/*
 * spa.js
 * Root namespace module
*/

// 设置jslint开关
/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/

// 告诉JSLint全局变量
/*global $, spa */

// 模块模式创建“spa"名字空间
var spa = (function () {
  var initModule = function ( $container ) {
    spa.shell.initModule( $container );
  };

  return { initModule: initModule };
}());
