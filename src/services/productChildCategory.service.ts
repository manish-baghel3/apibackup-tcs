import ProductChildCategoryModel from "../entity/productChildCategory.model";

export class ProductChildCategoryService {
  constructor() {}

  public async getAllProductChildCategory() {
    let ProductChildCategorys = await ProductChildCategoryModel.find().sort({ _id: 1 }).exec();
    return ProductChildCategorys;
  }

  // Creates A Role.
  public async createProductChildCategory(request) {
    request.body.createdOn = new Date().getTime();
    request.body.modifiedOn = new Date().getTime();
    let productChildCategory = await ProductChildCategoryModel.findOne({ name: request.body.name });
    if (productChildCategory)
      return {
        error: true,
        message: "ProductChildCategory with same Name already exists",
      };
    const ProductChildCategory = new ProductChildCategoryModel({
      ...request.body,
    });
    await ProductChildCategory.save();
    return { error: false, message: "Product ChildCategory Creation Successful" };
  }

  // Updates a Role
  public async updateProductChildCategory(id: string, request) {
    request.body.modifiedOn = new Date().getTime();
    let productChildCategory = await ProductChildCategoryModel.findOne({ name: request.body.name });
    if (productChildCategory)
      return {
        error: true,
        message: "ProductChildCategory with same Name already exists",
      };
    let update = {
      ...request.body,
    };
    await ProductChildCategoryModel.findByIdAndUpdate(id, update);
    console.log({ message: "Product ChildCategory Updated" });
    return { error: false, message: "Product ChildCategory Updated" };
  }

  // Deletes a Role
  public async deleteProductChildCategory(id: string) {
    let ProductChildCategory = await ProductChildCategoryModel.findByIdAndDelete(id);
    console.log({ message: "Product ChildCategory Deleted" });
    return ProductChildCategory;
  }
}
