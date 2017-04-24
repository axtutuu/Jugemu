import request from 'superagent';
import xmldom from 'xmldom';

export default class HbClient {
  fetch() {
    request.get('http://b.hatena.ne.jp/pocke-pocke-pocke/favorite.rss')
      .end((err, res) => {
        const DOMParser = xmldom.DOMParser;
        const doc = new DOMParser().parseFromString(res.text);
        console.log(doc.getElementsByTagName('item')[1].getElementsByTagName('title')[0].firstChild.data);
        // APIから取得
        Array.prototype.forEach.call(doc.getElementsByTagName('item'), (v) => {
          console.log(v.getElementsByTagName('title')[0].firstChild.data);
        })
      });
    // fetch('https://b.hatena.ne.jp/pocke-pocke-pocke/favorite.rss')
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //   });
  }
}
