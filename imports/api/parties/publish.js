import { Meteor } from 'meteor/meteor';
 
import { Parties } from './collection';
import { Counts } from 'meteor/tmeasday:publish-counts';
if (Meteor.isServer) {
  Meteor.publish('parties', function(options) {
    const selector = {
      $or: [{
        // the public parties
        $and: [{
          public: true
        }, {
          public: {
            $exists: true
          }
        }]
      }, {
        // when logged in user is the owner
        $and: [{
          owner: this.userId
        }, {
          owner: {
            $exists: true
          }
        }]
      }]
    };
    Counts.publish(this, 'numberOfParties', Parties.find(selector), {
      noReady: true
    });
    return Parties.find(selector, options);
  });
}