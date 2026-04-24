import dogPawsWave  from '../../assets/images/dogPawsWave.svg'
import dogPawsWave2 from '../../assets/images/dogPawsWave2.svg'
import goldenRetrieverImage from "../../assets/images/Golden-Retriever.jpg";
import './hero.scss'

const LINKS = [
  { label: "Get in touch", target: "contact-us" },
];

const Hero = () => {

const handleNavClick = (target) => {
  document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <>
      <section className="hero w-full">
        {/* Decorative SVG paws — behind all content (z-index 0) */}
        <img
          src={dogPawsWave}
          className="hero__paws hero__paws--left"
          alt=""
          aria-hidden="true"
        />
        <img
          src={dogPawsWave2}
          className="hero__paws hero__paws--centre"
          alt=""
          aria-hidden="true"
        />

        {/* Dog photo — sits above SVGs */}
        <div className="absolute top-[-140px] right-[-90px] z-[1]">
          <img
            src={goldenRetrieverImage}
            alt="doggy"
            className="dog-image-top-right rounded-4xl border-[25px] border-[#D5BE9F]"
          />
        </div>

        {/* Hero text content — left-aligned, max 1000px */}
        <div className="hero__content">
          <h1 className="text-6xl hero-heading">GAIL's TAIL's</h1>
          <h1 className="text-6xl hero-heading mb-6 mt-3">DOG WALKER</h1>
          <h2 className="text-2xl mb-8">Your local best friend walker</h2>
          {LINKS.map((link) => (
            <button
              key={link.target}
              className="bg-[#F38299] hover:not-focus:bg-[#fab0b9] px-4 py-[14px] rounded-[8px] w-1/3 font-bold"
              onClick={() => handleNavClick(link.target)}
            >
              {link.label}
            </button>
          ))}
        </div>
      </section>

      <section className="hero__bio flex justify-center mb-20">
        <img
          src={dogPawsWave}
          className="hero__paws hero__paws--right"
          alt=""
          aria-hidden="true"
        />
        <div className="relative z-[1] bg-white py-4 px-6 max-w-[800px] mt-20 rounded-2xl">
          <div className="flex justify-center">
            <h2 className="text-2xl pb-4">Get to know your dog walker</h2>
          </div>
          <div>
            <p className="">
              As an experienced dog walker with over five years of caring for
              pups of all sizes and temperaments, I know that every dog has its
              own personality—and pace. Whether it's a high-energy husky who
              needs a solid run or a senior spaniel who prefers a slow stroll
              and lots of sniffing, I tailor each walk to fit your dog's needs.
              Safety, reliability, and plenty of tail wags are always
              guaranteed!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero
