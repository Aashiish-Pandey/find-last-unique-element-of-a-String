import './style.css';

//last occuring unique element of a string::
//ex "ashish"=>i, if no unique element exist then return none

const lastUnqElemt = inString => {
  const unqArray = [];
  const inObj = inString.split('').reduce((acc, cv) => {
    if (acc[cv]) {
      acc[cv]++;
    } else {
      acc[cv] = 1;
    }
    return acc;
  }, {});

  console.log(inObj);

  for (let el in inObj) {
    if (inObj[el] == 1) {
      unqArray.unshift(el);
    }
  }
  console.log(unqArray);
  console.log(`last unq elemnt is ${unqArray[0]}`);
};

lastUnqElemt('Ashish');

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
