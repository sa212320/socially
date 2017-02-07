import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import { Parties } from '../../../api/parties';
import template from './partyAdd.html';
 
class PartyAdd {
  constructor() {
    this.party = {};
  }
 
  submit() {
    this.party.owner = Meteor.userId();
    Parties.insert(this.party);
    this.reset();
  }
 
  reset() {
    this.party = {};
  }
}
 
const name = 'partyAdd';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: PartyAdd
});