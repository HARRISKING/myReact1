import _ from 'lodash'
import $ from 'jquery'
import har from "./har"

function component () {
  var element = $('<div></div>');
  /* lodash is required for the next line to work */
  element.html(_.join(['Hars -p2','webpack'], ' '));

  return element.get(0);
}

document.body.appendChild(component());
console.log(har);
console.log(har());
