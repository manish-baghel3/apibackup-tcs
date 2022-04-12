import ProductModel from "../entity/product.model";
export class ProductService {
  constructor() {}

  public async getAllProduct(
    categoryId: string,
    subCategoryId: string,
    brandId: string,
    userId: string
  ) {
    let queryParams = {};
    if (categoryId) {
      queryParams = {
        productCategoryID: categoryId,
      };
    }
    if (subCategoryId) {
      queryParams = { ...queryParams, productSubCategoryID: subCategoryId };
    }
    if (brandId) {
      queryParams = { ...queryParams, productBrandID: brandId };
    }
    if (userId) {
      queryParams = { ...queryParams, sponsoredBy: userId };
    }
    console.log(queryParams);
    let Products = await ProductModel.find(queryParams).sort({ _id: 1 }).exec();
    return Products;
  }

  public async getAllProducts() {
    let Products = await ProductModel.find().sort({ _id: 1 }).exec();
    return Products;
  }

  public async getProductByID(id: string) {
    let Product = await ProductModel.findById(id);
    return Product;
  }

  // Creates A Product.
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
    return { error: false, message: "Product Creation Successful", product: Product };
  }

  // Updates a Product
  public async updateProduct(id: string, request) {
    // let product = await ProductModel.findOne({ name: request.body.name });
    // if (product)
    //   return {
    //     error: true,
    //     message: "Product with same Name already exists",
    //   };
    let update = {
      ...request.body,
    };
    await ProductModel.findByIdAndUpdate(id, update);
    console.log({ message: "Product Updated" });
    const product = await ProductModel.findById(id)
    return { error: false, message: "Product Updated", product: product };
  }

  // Deletes a Product
  public async deleteProduct(id: string) {
    let Product = await ProductModel.findByIdAndDelete(id);
    console.log({ message: "Product Deleted" });
    return Product;
  }
}
