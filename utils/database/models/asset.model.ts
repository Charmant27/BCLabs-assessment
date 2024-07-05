import mongoose, { Schema } from "mongoose";

export interface IAsset extends Document {
    _id: string;
    name: string;
    last_trade: string;
    percentage: string;
    change: string;
    logo: string;
}

const AssetSchema = new Schema({
    name: {type: String, required: true},
    last_trade: {type: String, required: true},
    percentage: {type: String, required: true},
    change: {type: String, required: true},
    logo: {type: String, required: false, unique: true}
})

const Asset = mongoose.models.Asset || mongoose.model('Asset', AssetSchema);

export default Asset