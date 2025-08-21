// import config from "./config.json";

// const { links } = config;

export default function Homepage() {
    return (
      <>
        <section id="homepage" className="w-full relative hero-container">
          <div className="absolute top-[-140px] right-[-90px]">
            <img
              src="./src/assets/Golden-Retriever.jpg"
              alt="doggy"
              className="dog-image-top-right rounded-4xl border-[25px] border-[#D5BE9F]"
            />
          </div>
          <div className="absolute top-[220px] left-[-80px]">
            <img src="./src/assets/dogPawsWave.svg" alt="" className="paw-prints"/>
          </div>
          <div className="text-left  hero-text-section">
            <h1 className="text-5xl hero-heading">GAIL's TAIL's</h1>
            <h1 className="text-5xl hero-heading">DOG WALKER</h1>
            <h2 className="text-2xl">Your local best friend walker</h2>
            <button className="bg-[#F38299] hover:not-focus:bg-[#fab0b9] px-4 py-2 rounded-3xl w-1/3 my-3 font-bold z-30">
              Get in touch
            </button>
          </div>
        </section>
        <section className="flex justify-center">
          <div className="bg-white py-4 px-6 max-w-[700px] mt-20 rounded-4xl">
            <div className="flex justify-center">
              <h2 className="text-2xl pb-4">Get to know your dog walker</h2>
            </div>
            <div>
              <p className="leading-5">
                As an experienced dog walker with over five years of caring for
                pups of all sizes and temperaments, I know that every dog has
                its own personality—and pace. Whether it's a high-energy husky
                who needs a solid run or a senior spaniel who prefers a slow
                stroll and lots of sniffing, I tailor each walk to fit your
                dog's needs. Safety, reliability, and plenty of tail wags are
                always guaranteed!
              </p>
            </div>
          </div>
        </section>
      </>
    );
}