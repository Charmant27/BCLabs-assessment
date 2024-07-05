import Asset from "@/utils/database/models/asset.model";
import { NextResponse } from "next/server";
import { connectDB } from "@/utils/database";
import { promises as fs } from 'fs';
import path from 'path';

export const POST = async (req: any, res: any) => {
  const { name, last_trade, percentage, change, logo } = await req.json();

  try {
    await connectDB();

    let logoPath = '';
    if (logo) {
      const base64Data = logo.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, 'base64');
      
      // uploads directory
      const uploadsDir = path.join(process.cwd(), 'public', 'uploads');

      // creating directory
      await fs.mkdir(uploadsDir, { recursive: true });

      const logoName = `${Date.now()}_${name.replace(/\/|\\/g, "_")}.png`;
      logoPath = path.join('/uploads', logoName);
      await fs.writeFile(path.join(uploadsDir, logoName), buffer);
    }

    const newAsset = new Asset({
      name,
      last_trade,
      percentage,
      change,
      logo: logoPath,
    });

    await newAsset.save();
    return new NextResponse(JSON.stringify({ message: 'Asset was successfully created', asset: newAsset }), { status: 201 });
  } catch (error: any) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

