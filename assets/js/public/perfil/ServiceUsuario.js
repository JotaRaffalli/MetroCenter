angular.module('ModuloDePerfil').factory('userInfo', function(){
  var userInfo = {};

  userInfo.list = [];

  userInfo.add = function(message){
    userInfo.list.push({id: userInfo.list.length, text: message});
  };

  return UserInfo;
});