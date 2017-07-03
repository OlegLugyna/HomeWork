// Задача_1

/*(function () {
  'use strict'

  var str = 'hello';
  function reverseString () {
    var arr = str.split ('');
    var newArr = arr.reverse ( );
    var newStr = newArr.join ('');
    return newStr;
  }

  var result = reverseString (str);
  alert (result);
})();*/


(function () {
  'use strict'

  function reverseString () {
    var arr = str.split ('');
    var newArr = arr.reverse ( );
    var newStr = newArr.join ('');
    return newStr;
  }

  var str = prompt('Введите слово или фразу: ', '');
  str = str.toLowerCase();
  var result = reverseString(str);
  alert (result);
}) ();



/*(function () {
  'use strict'

  function reverseString () {
    var newstr = '';
    var i = str.length;
    while (i>0) {
      newstr =  newstr + str.substring (i-1, i)
      i--
     }

    return newstr;
  }

  var str = prompt('Введите слово или фразу: ', '');
  str = str.toLowerCase();
  var result = reverseString(str);
  alert (result);
})();*/

//===============================================
//Задача_2

/*(function () {
  'use strict'

  function findLongestworld() {
  var arr = str.split (' ');
  var word = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i].length > word.length) {
        word = arr[i];
      }
    }

    return word;
  }

  var str = prompt('Введите набор слов для проверки: ', '');
  var result = findLongestworld(str);
  alert (result + ', ' + result.length);
})();*/

/*
"The quick brown fox jumped over the lazy dog"
"Google do a roll"
“May the force be with you”
*/

//===============================================
//Задача_3

/*(function () {
  'use strict'

  function factorialize() {
    var arr = [];
    for (var i=0; i<n; i++) {
      arr[i]++;
    }

    var j = arr.length;
    var result=1;
      while (j>0) {
        var result = result*j;
        j--;
      }

    return result;
  }

  var n = prompt ('Введите число большее нуля: ', ' ');

  if (n<0) {
    alert ('Введите число большее нуля!');
  } else {
  var resultFin = factorialize(n);
  alert ('Факториал числа '+ n + ' составляет ' + resultFin.toLocaleString() + '.');
  }
})();*/

/*(function () {
  'use strict'

  function factorialize() {
    var result=1;
    for (var i=1; i<=n; i++) {
      result =result*i;
    }

    return (result);
  }

  var n = prompt ('Введите число большее нуля: ', ' ');

  if (n<0) {
    alert ('Введите число большее нуля!');
  } else {
  var resultFin = factorialize(n);
  alert ('Факториал числа '+ n + ' составляет ' + resultFin.toLocaleString() + '.');
  }
})();*/
