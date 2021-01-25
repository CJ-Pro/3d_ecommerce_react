import Product from "../model/Product.js";

export default class ProductRepository {
  getProducts() {
    return [
      new Product(
        1,
        "Panzera",
        "Panzera Wrist Watch",
        299.0,
        "https://www.panzera.shop/wp-content/uploads/2017/10/F47-02MB-min.jpg"
      ),
      new Product(
        2,
        "Tissot",
        "Tissot Gold Watch",
        849.0,
        "https://d1rkccsb0jf1bk.cloudfront.net/products/99998453/main/large/t109_410_33_031_00-1460380078-6405.jpg"
      ),
      new Product(
        3,
        "Earring",
        "Simple Stud Earrings",
        400.0,
        "https://www.jewellerybox.co.uk/images/products/original/HAR-0361.jpg"
      ),
      new Product(
        4,
        "Wedding Ring",
        "Diamond top Gold ring",
        2999.0,
        "https://www.renderhub.com/gauravg18/ring-9/ring-9-01.jpg"
      ),
    ];
  }
}
