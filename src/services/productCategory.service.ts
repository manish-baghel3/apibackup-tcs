import ProductCategoryModel from "../entity/productCategory.model";

export class ProductCategoryService {
  constructor() {}

  public async getAllProductCategory() {
    let ProductCategorys = await ProductCategoryModel.find().sort({ _id: 1 }).exec();
    return ProductCategorys;
  }

  // Creates A Role.
  public async createProductCategory(request) {
    request.body.createdOn = new Date().getTime();
    request.body.modifiedOn = new Date().getTime();
    let productCategory = await ProductCategoryModel.findOne({ name: request.body.name });
    if (productCategory)
      return {
        error: true,
        message: "ProductCategory with same Name already exists",
      };
    const ProductCategory = new ProductCategoryModel({
      ...request.body,
    });
    await ProductCategory.save();
    return { error: false, message: "Product Category Creation Successful" };
  }

  // Updates a Role
  public async updateProductCategory(id: string, request) {
    request.body.modifiedOn = new Date().getTime();
    let productCategory = await ProductCategoryModel.findOne({ name: request.body.name });
    if (productCategory)
      return {
        error: true,
        message: "ProductCategory with same Name already exists",
      };
    let update = {
      ...request.body,
    };
    await ProductCategoryModel.findByIdAndUpdate(id, update);
    console.log({ message: "Product Category Updated" });
    return { error: false, message: "Product Category Updated" };
  }

  // Deletes a Role
  public async deleteProductCategory(id: string) {
    let ProductCategory = await ProductCategoryModel.findByIdAndDelete(id);
    console.log({ message: "Product Category Deleted" });
    return ProductCategory;
  }
}
