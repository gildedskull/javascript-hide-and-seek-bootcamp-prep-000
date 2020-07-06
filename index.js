function getFirstSelector(selector) {
 return document.querySelector(selector);
 }

function nestedTarget() {
 return document.querySelector('div.target');
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('.ranked-list');
  
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt((lis[i].innerHTML)+n);
    return lis;
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

