import Asset from "@/utils/database/models/asset.model";
import { connectDB } from "@/utils/database";

export const GET = async (request: any) => {
    try {
        await connectDB()
        const assets = await Asset.find({})

        return new Response(JSON.stringify(assets), {status: 200})
    } catch (error) {
        return new Response('failed to get assets', {status: 500})
    }
}