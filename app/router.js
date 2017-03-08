import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('directory', {path:'/directory'});
  this.route('profiles', {path: '/profiles'});
});

export default Router;
