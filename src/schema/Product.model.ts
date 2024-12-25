import mongoose, {Schema} from "mongoose";
import { 
    ProductCollection,
    ProductSize, 
    ProductStatus, 
    ProductVolume, 
} from "../libs/enums/product.enum";


// Schema first & Code first

const productSchema = new Schema(
    {
        ProductStatus: {
        type: String,
        enum: ProductStatus,
        default: ProductStatus.PAUSE,
        },

        ProductCollection: {
            type: String,
            enum: ProductCollection,
            required: true,
        },

        ProductName: {
            type: String,
            required: true,
        },

        ProductPrice: {
            type: String,
            required: true,
        },

        ProductLeftCount: {
            type: String,
            required: true,
        },

        ProductSize: {
            type: String,
            enum: ProductSize,
            default: ProductSize.NORMAL,
        },

        ProductVolume: {
            type: String,
            enum: ProductVolume,
            default: ProductVolume.ONE,
        },

        ProductDesc: {
            type: String,
            required: true,
        },

        ProductImages: {
            type: [String],
            default: [],
        },

        ProductViews: {
            type: Number,
            default: 0,
        },

    },
    {timestamps: true}     // updateAt, createAt
);

productSchema.index(
    { producname: 1, ProductSize: 1, ProductVolume: 1},
    { unique: true }
);
export default mongoose.model("Product", productSchema);
