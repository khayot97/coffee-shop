import { ObjectId } from "mongoose";
import {
    ProductCollection, 
    ProductSize, 
    ProductStatus 
} from "../enums/product.enum";

export interface Product {
    _id: ObjectId;
    ProductStatus: ProductStatus;
    ProductCollection: ProductCollection;
    ProductName: string;
    ProductPrice: number;
    ProductLeftCount: number;
    ProductSize: ProductSize;
    ProductVolume: number;
    ProductDesc?: string;
    ProductImages: string[];
    ProductViews: number;
}

export interface ProductInput {
    ProductStatus?: ProductStatus;
    ProductCollection: ProductCollection;
    ProductName: string;
    ProductPrice: number;
    ProductLeftCount: number;
    ProductSize?: ProductSize;
    ProductVolume?: number;
    ProductDesc?: string;
    ProductImages?: string[];
    ProductViews: number;
}

export interface ProductUpdateInput {
    _id: ObjectId;
    ProductStatus?: ProductStatus;
    ProductCollection?: ProductCollection;
    ProductName?: string;
    ProductPrice?: number;
    ProductLeftCount?: number;
    ProductSize?: ProductSize;
    ProductVolume?: number;
    ProductDesc?: string;
    ProductImages?: string[];
    ProductViews?: number;
}