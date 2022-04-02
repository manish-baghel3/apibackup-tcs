import ProductMaterialModel from "../entity/productMaterial.model";

export class ProductMaterialService {
  constructor() {}

  public async getAllProductMaterial() {
    let ProductMaterials = await ProductMaterialModel.find().sort({ _id: 1 }).exec();
    return ProductMaterials;
  }

  // Creates A ProductMaterial.
  public async createProductMaterial(request) {
    request.body.createdOn = new Date().getTime();
    request.body.modifiedOn = new Date().getTime();
    let productMaterial = await ProductMaterialModel.findOne({ name: request.body.name });
    if (productMaterial)
      return {
        error: true,
        message: "ProductMaterial with same Name already exists",
      };
    const ProductMaterial = new ProductMaterialModel({
      ...request.body,
    });
    await ProductMaterial.save();
    return { error: false, message: "Product Material Creation Successful" };
  }

  // Updates a ProductMaterial
  public async updateProductMaterial(id: string, request) {
    request.body.modifiedOn = new Date().getTime();
    let productMaterial = await ProductMaterialModel.findOne({ name: request.body.name });
    if (productMaterial)
      return {
        error: true,
        message: "ProductMaterial with same Name already exists",
      };
    let update = {
      ...request.body,
    };
    await ProductMaterialModel.findByIdAndUpdate(id, update);
    console.log({ message: "Product Material Updated" });
    return { error: false, message: "Product Material Updated" };
  }

  // Deletes a ProductMaterial
  public async deleteProductMaterial(id: string) {
    let ProductMaterial = await ProductMaterialModel.findByIdAndDelete(id);
    console.log({ message: "Product Material Deleted" });
    return ProductMaterial;
  }
}
