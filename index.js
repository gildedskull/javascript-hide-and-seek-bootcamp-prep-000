function getFirstSelector(selector) {
 return document.querySelector(selector);
 }

function nestedTarget() {
 return document.querySelector('div.target');
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('ul.ranked-list li');
  
  for (let i = 0; i < lis.length; i++) {
    parseInt(lis[i].innerHTML) = (i+n);
    return lis;
  }
}

function deepestChild() {
  return document.querySelectorAll('#grand-node div div div div');
}

