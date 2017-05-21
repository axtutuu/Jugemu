import twitter, {auth} from 'react-native-twitter';
import ENV from '../Config/env';

const C_KEY = ENV.CONSUMER_KEY,
      C_TOKEN = ENV.CONSUMER_SECRET,
      A_KEY = ENV.ACCESS_TOKEN,
      A_TOKEN = ENV.ACCESS_TOKEN_SECRET;

export default class TwClient {
  constructor(opts={}) {
    this.tw = twitter({
      consumerKey: C_KEY,
      consumerSecret: C_TOKEN,
      accessToken: A_KEY,
      accessTokenSecret: A_TOKEN 
    });


    // rest.get('lists/statuses', {list_id: '744550402935296000'})
    //   .then((res) => {
    //     console.log(res);
    //   });
  }

  fetch(of=0) {
    return new Promise((resolve, reject) => {
      this.tw.rest.get('lists/statuses', {list_id: '744550402935296000'})
        .then((res) => {
          resolve(res);
        });
    });
  }
}
