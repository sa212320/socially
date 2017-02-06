import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Parties } from '../../../../collections/parties';
import { name as PartyAdd } from '../partyAdd/partyAdd';
import template from './partiesList.html';

class PartiesList {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);
 
    this.helpers({
      parties() {
        return Parties.find({});
      }
    });
  }
}
 
const name = 'partiesList';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  PartyAdd
]).component(name, {
  template,
  controllerAs: name,
  controller: PartiesList
});