'use client'
import Image from "next/image"
import Link from "next/link"

const Nav = () => {
    return (
        <nav>
            <div
                className="container flex flex-col md:flex-row md:items-center justify-between py-10 text-sm"
            >
                <div>
                    <Image src='/images/logo.svg' width={180} height={15} alt="logo" />
                </div>
                <div className="flex flex-col md:flex-row gap-10 text-white-200">
                    <Link href='/'>Exchange</Link>
                    <Link href='/'>Last Transactions</Link>
                    <Link href='/'>Invite Friend</Link>
                    <Link href='/'>Notifications</Link>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        className="border-radius border border-purple-100 text-white-200 p-[10px] text-sm"
                    >
                        LOG IN
                    </button>
                    <button className="border-radius text-white-200 p-[10px] bg-purple-100 text-sm">
                        SIGN UP
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Nav