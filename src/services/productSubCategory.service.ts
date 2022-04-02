import ProductSubCategoryModel from "../entity/productSubCategory.model";

export class ProductSubCategoryService {
  constructor() {}

  public async getAllProductSubCategory() {
    let ProductSubCategorys = await ProductSubCategoryModel.find().sort({ _id: 1 }).exec();
    return ProductSubCategorys;
  }

  // Creates A Role.
  public async createProductSubCategory(request) {
    request.body.createdOn = new Date().getTime();
    request.body.modifiedOn = new Date().getTime();
    let productSubCategory = await ProductSubCategoryModel.findOne({ name: request.body.name });
    if (productSubCategory)
      return {
        error: true,
        message: "ProductSubCategory with same Name already exists",
      };
    const ProductSubCategory = new ProductSubCategoryModel({
      ...request.body,
    });
    await ProductSubCategory.save();
    return { error: false, message: "Product SubCategory Creation Successful" };
  }

  // Updates a Role
  public async updateProductSubCategory(id: string, request) {
    request.body.modifiedOn = new Date().getTime();
    let productSubCategory = await ProductSubCategoryModel.findOne({ name: request.body.name });
    if (productSubCategory)
      return {
        error: true,
        message: "ProductSubCategory with same Name already exists",
      };
    let update = {
      ...request.body,
    };
    await ProductSubCategoryModel.findByIdAndUpdate(id, update);
    console.log({ message: "Product SubCategory Updated" });
    return { error: false, message: "Product SubCategory Updated" };
  }

  // Deletes a Role
  public async deleteProductSubCategory(id: string) {
    let ProductSubCategory = await ProductSubCategoryModel.findByIdAndDelete(id);
    console.log({ message: "Product SubCategory Deleted" });
    return ProductSubCategory;
  }
}
