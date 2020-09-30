"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var popularity = '100%';
var users = [{
  username: 'admin',
  password: 'admin'
}, {
  username: 'valya',
  password: 'valya'
}, {
  username: 'valya1',
  password: 'valya1'
}];
var isValid = null;
document.getElementById("uncryptPassword").addEventListener('click', showOrHidePassword);

function showOrHidePassword() {
  console.log('clicked');
  var password = document.getElementById('password');

  if (password.type === 'password') {
    password.type = 'text';
  } else {
    password.type = 'password';
  }
}

;

function clearInputs() {
  document.getElementById("username").value = '';
  document.getElementById("password").value = '';
}

function getInputs() {
  console.log('clicked');
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  for (var i = 0; i <= users.length; i++) {
    console.log('цикл был');

    if (username == users[i].username && password == users[i].password) {
      isValid = true;
      console.log(username + ' is logging in!');
      return;
    } else {
      isValid = false;
      console.log('Пользователя не существует');
      return;
    }

    console.log(isValid);
  }
}

if (isValid === true) {
  console.log('show new content');
}

var dotaHeroes = {
  hero001: {
    name: 'Abaddon',
    position: ['ближнего боя', 'Carry', 'Durable', 'Support'],
    popularity: popularity,
    line: ['hard'],
    skills: ['MIST COIL', 'APHOTIC SHIELD', 'CURSE OF AVERNUS', 'BORROWED TIME']
  },
  hero002: {
    name: 'Abaddon',
    position: ['ближнего боя', 'Carry', 'Durable', 'Support'],
    popularity: popularity,
    line: ['hard'],
    skills: ['MIST COIL', 'APHOTIC SHIELD', 'CURSE OF AVERNUS', 'BORROWED TIME']
  },
  hero003: {
    name: 'Abaddon',
    position: ['ближнего боя', 'Carry', 'Durable', 'Support'],
    popularity: popularity,
    line: ['hard'],
    skills: ['MIST COIL', 'APHOTIC SHIELD', 'CURSE OF AVERNUS', 'BORROWED TIME']
  },
  hero004: {
    name: 'Abaddon',
    position: ['ближнего боя', 'Carry', 'Durable', 'Support'],
    popularity: popularity,
    line: ['hard'],
    skills: ['MIST COIL', 'APHOTIC SHIELD', 'CURSE OF AVERNUS', 'BORROWED TIME']
  },
  hero005: {
    name: 'Abaddon',
    position: ['ближнего боя', 'Carry', 'Durable', 'Support'],
    popularity: popularity,
    line: ['hard'],
    skills: ['MIST COIL', 'APHOTIC SHIELD', 'CURSE OF AVERNUS', 'BORROWED TIME']
  },
  //это называет методом объекта dotaHeroes
  //Добавляем функцию в ООП
  sayHi1: function sayHi1() {
    alert('hello');
  },
  //Добавляем функцию в ООП так тоже работает
  sayHi2: function sayHi2() {
    alert('hello hello');
  }
}; //Эти два методы не эквиваленты и они отличаются 
// но писать сокращено предпочтительней.
//Добавляем функцию в ООП так тоже

function anotherSayHello() {
  alert('Say hello new');
}

dotaHeroes.anotherSayHello = anotherSayHello; //Добавляем функцию в ООП и так тоже работает

dotaHeroes.sayHello = function () {
  alert('say hello');
};