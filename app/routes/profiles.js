import Ember from 'ember';
import RSVP from 'rsvp';

let usernames = [
    "lzychowski",
    "xzaf",
    "adrianmui"
];

let git_api_token_key = '7037293ffabc8eb6215f1f00691d27530c54078c';

export default Ember.Route.extend({
    model() {
        let ajax_array = usernames.map( (user) => {
            return fetch('https://api.github.com/users/' + user + '?access_token=' + git_api_token_key);
        });

        return RSVP.all(ajax_array).then( (responses) => {
          let promised = responses.map( (promises) => {
              return promises.json();
          })

          return RSVP.all(promised).then( (result) => {
              console.log(result)
              return result;
          })
        }).catch( (reason) => {
            console.log(reason);
            debugger;
            
        });
    
    }
});
