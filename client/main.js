import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Parties } from '../collections/parties';
import template from './partiesList.html';
 
angular.module('socially', [
    angularMeteor
  ])
  .component('partiesList', {
    template,
    controllerAs: 'partiesList',
    controller($scope, $reactive) {
      'ngInject';
 
      $reactive(this).attach($scope);
 
      this.helpers({
        parties() {
          return Parties.find({});
        }
      });
    }
  });