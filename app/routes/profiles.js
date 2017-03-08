import Ember from 'ember';
import RSVP from 'rsvp';

let usernames = [
    "lzychowski",
    "xzaf",
    "adrianmui"
];

let git_api_token_key = 'c8fd8acfe03b8352d14201b0e21de5c586f36e0f';

export default Ember.Route.extend({
    model() {
        let ajax_array = usernames.map( (user) => {
            return fetch('https://api.github.com/users/' + user + '?access_token=' + git_api_token_key);
        });

        return RSVP.all(ajax_array).then( (responses) => {
          let promised = responses.map( (promises) => {
              return promises.json();
          });

          return RSVP.all(promised).then( (result) => {
              console.log(result);
              return result;
          });
        }).catch( (reason) => {
            alert(reason);
            console.log(reason);
        });
    
    }
});
