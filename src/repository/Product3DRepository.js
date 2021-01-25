import Product3D from "../model/Product3D";
import { Vector3 } from "@babylonjs/core";

export default class Product3DRepository {
  baseUrl =
    "https://raw.githubusercontent.com/CJ-Pro/3d_ecommerce_react/main/public/assets";
  getProducts() {
    return [
      new Product3D(
        1,
        Math.PI / 2,
        Math.PI / 2,
        225,
        new Vector3(100, -15, 0),
        `${this.baseUrl}/panzera/`
      ),
      new Product3D(
        2,
        Math.PI / 2,
        Math.PI / 2,
        1.75 * Math.PI,
        new Vector3(0, 2, 0),
        `${this.baseUrl}/tissot/`
      ),
      new Product3D(
        3,
        Math.PI,
        0,
        0.025,
        new Vector3(0, 0, 0),
        `${this.baseUrl}/earring/`
      ),
      new Product3D(
        4,
        Math.PI,
        0,
        2 * Math.PI,
        new Vector3(0, 0.5, 0),
        `${this.baseUrl}/wedding_ring/`
      ),
    ];
  }
}
