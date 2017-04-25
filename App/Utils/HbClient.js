import request from 'superagent';
import xmldom from 'xmldom';

export default class HbClient {
  fetch() {
    return new Promise((resolve, reject)=>{
      request.get('http://b.hatena.ne.jp/pocke-pocke-pocke/favorite.rss')
        .end((err, res) => {
          resolve(this._parse(res.text));
        });
    });
  }

  _parse(xml) {
    const DOMParser = xmldom.DOMParser,
          doc = new DOMParser().parseFromString(xml),
          result = [];

    Array.prototype.forEach.call(doc.getElementsByTagName('item'), (v) => {
      result.push(
        {title: v.getElementsByTagName('title')[0].firstChild.data}
      )
    });
    return result;
  }
}
