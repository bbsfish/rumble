const srvrurl = "http://127.0.0.1:5500/";
const goods = srvrurl + "lib/goods.xml";

class GoodsXML {
    constructor() {};

    request(sortmode="arrival", limit=5) {
      // sortmode = "arrival" | "sold"
      let req = new XMLHttpRequest();
      req.open("GET", goods, true);
      req.send();
      req.onreadystatechange = function () {
        let fdata = {
          data: null,
          file: null,
          name: null,
          desc: null,
          price: null,
          stock: null,
          sold: null
        };
        if (req.readyState == 4 && req.status == 200) {
          let d = req.responseXML.documentElement;
          fdata.data = rdoc.getElementsByTagName("data");
          fdata.file = rdoc.getElementsByTagName("file");
          fdata.name = rdoc.getElementsByTagName("name");
          fdata.desc = rdoc.getElementsByTagName("desc");
          fdata.price = rdoc.getElementsByTagName("price");
          fdata.stock = rdoc.getElementsByTagName("stock");
        }
    }
  }
}
