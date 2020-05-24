document.querySelector('#countInterpolation').onclick = () => {
      let firstElem = +document.querySelector('#firstElem').value;
      let secondElem = +document.querySelector('#secondElem').value;
      let thirdElem = +document.querySelector('#thirdElem').value;
      let firstAction = secondElem - firstElem;
      let secondAction = firstAction * thirdElem;
      let result = secondAction + firstElem;

      document.querySelector('#result').innerHTML = result;
};