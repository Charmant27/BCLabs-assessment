import Nav from "./Nav"

const Hero = () => {
  return (
    <div className="relative bg-bg-image h-[90vh] bg-no-repeat bg-cover">
      <Nav />
      <div className="text-center text-white-200 flex flex-col gap-8 pt-14">
        <h1 className="text-6xl">Easy send and Request <br /> Crypto.</h1>
        <p>Bring blockchain to the people. Solana supports experiences <br /> for power users, new consumers, and everyone in between.</p>
      </div>
    </div>
  )
}

export default Hero