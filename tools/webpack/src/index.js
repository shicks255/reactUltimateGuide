import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'World'], ' ' );

    // element.innerHTML = "jljkkl"

    return element;
}

document.body.appendChild(component());