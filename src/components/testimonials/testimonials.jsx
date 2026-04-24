import { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import dogWalkImage from "../../assets/images/dog-walk.jpg";
import goldenRetrieverImage from "../../assets/images/Golden-Retriever.jpg";
import terrierImage from "../../assets/images/terrier.jpg";
import "./testimonials.scss";

const testimonials = [
  {
    id: 1,
    image: dogWalkImage,
    name: "Sarah",
    dogName: "Buddy",
    quote:
      "Gail has been walking Buddy for six months and he absolutely loves it. We can always tell he's had a great time — he comes home happy and tired!",
  },
  {
    id: 2,
    image: goldenRetrieverImage,
    name: "James",
    dogName: "Milo",
    quote:
      "I never have to worry when Milo is with Gail. She's reliable, caring, and treats every dog like her own. Highly recommend!",
  },
  {
    id: 3,
    image: terrierImage,
    name: "Emma",
    dogName: "Rosie",
    quote:
      "Rosie is a nervous rescue dog and Gail has been amazing with her. The patience and care she shows is beyond what we could have hoped for.",
  },
  {
    id: 4,
    image: dogWalkImage,
    name: "Tom",
    dogName: "Max",
    quote:
      "Fantastic service from start to finish. Gail keeps us updated with photos during every walk. Max always comes back with a big smile!",
  },
];

const Testimonials = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(testimonials);
  }, []);

  const cardTemplate = (item) => (
    <div className="testimonial-card">
      <div className="testimonial-card__image-col">
        {item.image && (
          <img
            src={item.image}
            alt={item.name}
            className="testimonial-card__img"
          />
        )}
      </div>
      <div className="testimonial-card__text-col">
        <p className="testimonial-card__quote">{item.quote}</p>
        <p className="testimonial-card__attribution">
          {item.name} &amp; {item.dogName}
        </p>
      </div>
    </div>
  );

  return (
    <div className="testimonials">
      <div className="">

      <h2 className="testimonials__heading max-w-[500px] min-[500px]:max-w-[1000px] w-full mx-auto">My clients</h2>
      <Carousel
        value={items}
        numVisible={1}
        numScroll={1}
        className="testimonials__carousel"
        circular
        prevIcon={<FaChevronLeft className="testimonials__arrow-icon" />}
        nextIcon={<FaChevronRight className="testimonials__arrow-icon" />}
        itemTemplate={cardTemplate}
        />
        </div>
    </div>
  );
};

export default Testimonials;
