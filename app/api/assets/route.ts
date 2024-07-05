import Asset from "@/utils/database/models/asset.model";
import { connectDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
    try {
        await connectDB()
        const assets = await Asset.find({})

        return new NextResponse(JSON.stringify({'data': assets}), {status: 200})
    } catch (error: any) {
        return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
    }
}