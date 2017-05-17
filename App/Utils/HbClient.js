import request from 'superagent';
import xmldom from 'xmldom';

const END_POINT = 'http://b.hatena.ne.jp/pocke-pocke-pocke/favorite.rss';
export default class HbClient {
  fetch(of=0) {
    return new Promise((resolve, reject)=>{
      request.get(END_POINT+`?of=${of}`)
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
        {title: v.getElementsByTagName('title')[0].firstChild.data, link: v.getElementsByTagName('link')[0].firstChild.data}
      )
    });
    return result;
  }
}
