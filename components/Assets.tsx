'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import { MdKeyboardArrowRight } from "react-icons/md";

type Asset = {
    _id: string;
    name: string;
    last_trade: string;
    percentage: string;
    change: string,
    logo: string;
}

const Assets = () => {
    const [assets, setAssets] = useState<Asset[]>([])

    useEffect(() => {
        const getAssets = async () => {
            try {
                const res = await fetch('/api/assets')
                const data = await res.json()
                setAssets(data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getAssets()
    }, [])
    return (
        <section>
            <div className='container text-white-200'>
                <table
                    className="backdrop:blur w-full text-left"
                >
                    <thead>
                        <tr>
                            <th>ASSETS</th>
                            <th>LAST TRADE</th>
                            <th>24H %</th>
                            <th>24H CHANGE</th>
                            <th className="text-blue-100 flex items-center">MORE <span className="text-lg"><MdKeyboardArrowRight /></span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {assets.map((asset) => ((
                            <tr key={asset._id}>
                                <td className="flex items-center gap-3">
                                    <Image src={asset.logo} width={32} height={32} alt="logo" /> <span>{asset.name}</span>
                                </td>
                                <td>{asset.last_trade}</td>
                                <td>{asset.percentage}</td>
                                <td>{asset.change}</td>
                                <td>
                                    <button className="bg-green-200 p-2 text-[#00554B]">Trade</button>
                                </td>
                            </tr>
                        )))}
                    </tbody>
                </table>
            </div>
        </section>

    )
}

export default Assets