import ProductModel from "../entity/product.model";
export class ProductService {
  constructor() {}

  public async getAllProduct() {
    let Products = await ProductModel.find().sort({ _id: 1 }).exec();
    return Products;
  }

  public async getProductByID(id: string) {
    let Product = await ProductModel.findById(id);
    return Product;
  }

  // Creates A Role.
  public async createProduct(request) {
    request.body.sponsoredOn = new Date().getTime();
    let product = await ProductModel.findOne({ name: request.body.name });
    if (product)
      return {
        error: true,
        message: "Product with same Name already exists",
      };
    const Product = new ProductModel({
      ...request.body,
    });
    await Product.save();
    return { error: false, message: "Product Creation Successful" };
  }

  // Updates a Role
  public async updateProduct(id: string, request) {
    let product = await ProductModel.findOne({ name: request.body.name });//-- remove this line
    if (product)
      return {
        error: true,
        message: "Product with same Name already exists",
      };
    let update = {
      ...request.body,
    };
    await ProductModel.findByIdAndUpdate(id, update);
    console.log({ message: "Product Updated" });
    return { error: false, message: "Product Updated" };
  }

  // Deletes a Role
  public async deleteProduct(id: string) {
    let Product = await ProductModel.findByIdAndDelete(id);
    console.log({ message: "Product Deleted" });
    return Product;
  }
}
