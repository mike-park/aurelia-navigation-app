import {Behavior} from 'aurelia-framework';

export class Navbar {
  static metadata() { return Behavior.withProperty('router') }
}