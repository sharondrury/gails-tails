import { FaCheck, FaMedal, FaPaw } from "react-icons/fa";
import './about.scss'

export default function AboutPage() {

 const certs = [
   {
     icon: <FaMedal icon="fa-solid fa-medal" size="80px" />,
     text: "Responsibly fully insured pet business with one of the leading pet care insurers.",
   },
   {
     icon: <FaPaw icon="fa-solid fa-medal" size="80px" />,
     text: "Fully first aid trained in canine first aid for the knowledge of knowing you’re dog is in safe hands",
   },
   {
     icon: <FaCheck icon="fa-solid fa-medal" size="80px" />,
     text: "DBS checked - which means we have been checked for convictions, cautions, reprimands and warnings which we take very seriously.",
   },
 ];

  return (
    <>
      <section className="about max-w-[500px] min-[500px]:max-w-[1000px] w-full mx-auto">
        <h1 className="text-4xl">About</h1>
        <section className="about__grid grid grid-cols-2">
          <div className="flex flex-col items-left justify-center">
            <h2 className="text-2xl pb-5 ">About Gail's Tail's</h2>
            <p className="pr-10">
              As an experienced dog walker with over five years of caring for
              pups of all sizes and temperaments, I know that every dog has its
              own personality—and pace. Whether it's a high-energy husky who
              needs a solid run or a senior spaniel who prefers a slow stroll
              and lots of sniffing, I tailor each walk to fit your dog's needs.
              Safety, reliability, and plenty of tail wags are always
              guaranteed! For more information or to discuss any needs about you
              dog, contact us here and we will endeavour to work with you.
            </p>
          </div>
          <img
            src="./src/assets/images/terrier.jpg"
            alt="doggy"
            className="dog-image-about-one rounded-4xl border-[25px] border-[#D5BE9F]"
          />
          <div className="flex items-center">
            <img
              src="./src/assets/images/dog-walk.jpg"
              alt="doggy"
              className="dog-image-about-two rounded-4xl border-[25px] border-[#D5BE9F]"
            />
          </div>
          <div className="p-4 ml-4 mobile-certified">
            <div>
              <h2 className="text-2xl pb-5">Certified</h2>
            </div>
            <div className="flex flex-col">
              {certs.map((cert) => (
                <div key={cert.key} className="flex items-center gap-3 pt-4">
                  <span className="scale-80">{cert.icon}</span>
                  {cert.text}
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
