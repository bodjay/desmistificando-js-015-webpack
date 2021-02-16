import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Desmitificando JS', 'webpack'], ' - ');

  return element;
}

document.body.appendChild(component());