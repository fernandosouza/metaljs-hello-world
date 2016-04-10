'use strict';

import core from 'metal';
import templates from './HelloWorld.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

class HelloWorld extends Component  {
}

HelloWorld.STATE = {
  person: {
    value: 'World',
    validator: core.isString
  }
}

Soy.register(HelloWorld, templates);

export default HelloWorld;
