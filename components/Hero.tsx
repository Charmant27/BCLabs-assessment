import Image from "next/image"
import Nav from "./Nav"
import Assets from "./Assets"
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <div className="relative flex flex-col gap-6 bg-bg-image h-[90vh] bg-no-repeat bg-cover">
      <Nav />
      <div className="text-center text-white-200 flex flex-col gap-8 pt-14">
        <h1 className="text-6xl">Easy send and Request <br /> Crypto.</h1>
        <p>Bring blockchain to the people. Solana supports experiences <br /> for power users, new consumers, and everyone in between.</p>
      </div>
      <Assets />
      <section>
        <div className="container">
          <div className="border border-[#4F4F4F] flex flex-col gap-6 rounded-xl px-10 py-6">
            <div className="flex items-center justify-between">
              <h3 className="text-white-200">SWAP TOKENS</h3>
              <Image src='/images/settings-icon.svg' width={32} height={32} alt="icon" />
            </div>
            <div className="flex items-center justify-between gap-1 text-white-200">
              <div className="bg-[#1E1E1E] rounded-l-lg flex items-center gap-20 flex-1 justify-between py-5 px-[50px]">
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-5xl">0.00</h4>
                  <p className="text-[#666666] text-sm">$0.00</p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="bg-black px-3 py-2 flex items-center text-[#868686]">
                    <Image src='/images/bitcoin.svg' width={32} height={32} alt="icon" />
                    <p className="flex items-center">BTC <span><MdKeyboardArrowRight /></span></p>
                  </div>
                  <p className="text-sm">Balance: <span className="text-blue-100">24,240</span></p>
                </div>
              </div>
              <div className="bg-[#1E1E1E] rounded-r-lg flex items-center gap-20 flex-1 justify-between py-5 px-[50px]">
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-5xl">0.00</h4>
                  <p className="text-[#666666] text-sm">$0.00</p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="bg-black px-3 py-2 flex items-center text-[#868686]">
                    <Image src='/images/bnb.svg' width={32} height={32} alt="icon" />
                    <p className="flex items-center">BNB <span><MdKeyboardArrowRight /></span></p>
                  </div>
                  <p className="text-sm">Balance: <span className="text-blue-100">24,240</span></p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                className="bg-purple-100 text-white-200 py-4 px-[50px] rounded-tl-lg rounded-br-lg"
              >
                SWOP TOKENS
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-white-200">1 BTC = 32.4039 ETH</p>
                <p className="text-blue-100 text-sm">Free exchage</p>
              </div>
              <div>
                <p className="text-[#666666]">Updates in 4s</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Hero