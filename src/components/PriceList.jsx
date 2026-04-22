import { useState } from "react";
import { FaPaw } from "react-icons/fa";
import pawSvg from '../assets/images/paw-solid-full.svg';
import './PriceList.scss'

const items = [
  {
    key: "dogwalking",
    heading: "Dog walking",
    subheading: "Group and solo walks tailored to your dog",
    content:
      "Dog boarding is a service where pet owners can leave their dogs in the care of a facility or professional caregiver when they're away, whether for a few days or an extended period. Boarding facilities, often called kennels, typically provide essentials like food, water, exercise, and shelter. Many modern dog boarding centers go beyond basic care, offering playtime, socialisation with other dogs, grooming, and even specialised accommodations like private suites.",
  },
  {
    key: "dogboarding",
    heading: "Dog boarding",
    subheading: "Overnight and extended stays",
    content:
      "Boarding, in general, refers to the practice of staying at a place outside of one's home for a temporary period, usually where accommodations, meals, or care are provided. It can apply to both people and animals. For people, boarding is often associated with boarding schools, where students live on campus while pursuing their education, or boarding houses, which offer lodging and meals for residents. For animals, boarding typically means temporary care at a facility, such as dog or cat boarding, where pets are looked after while their owners are away.",
  },
  {
    key: "petsitting",
    heading: "Pet sitting",
    subheading: "In-home care while you're away",
    content:
      "Pet sitting is a service where a professional or trusted individual cares for a pet in the owner's home, rather than taking the pet to a boarding facility. It can include feeding, walking, playtime, administering medication, cleaning litter boxes or cages, and providing companionship. Many pet owners prefer sitting over boarding because it allows pets to stay in a familiar environment, reducing stress and keeping their routines consistent.",
  },
];

const PriceList = () => {
  const [activeButton, setActiveButton] = useState("dogwalking");
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (i) => {
    setActiveIndex((prev) => (prev === i ? null : i));
  };

  const activeItem = items.find((item) => item.key === activeButton);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="price-list__heading">Price list</h1>

      {/* Desktop tab layout — hidden below 850px via SCSS */}
      <div className="price-list__desktop">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="grid grid-cols-3">
              {items.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveButton(item.key)}
                  className={`cursor-pointer px-6 py-3 font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                    activeButton === item.key
                      ? "bg-[#F3829995] text-gray-900 shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-200 hover:shadow-md"
                  }`}
                >
                  <FaPaw size="20px" />
                  {item.heading}
                </button>
              ))}
            </div>
          </div>
          <div className="p-8">
            <div className="price-list__fade" key={activeButton}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <FaPaw size="24px" />
                {activeItem?.heading}
              </h2>
              <div className="bg-gray-50 p-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {activeItem?.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile accordion layout — hidden above 850px via SCSS */}
      <div className="price-list__mobile">
        {items.map((item, i) => (
          <div
            key={item.key}
            className={`price-list__item${activeIndex === i ? " price-list__item--open" : ""}`}
          >
            <div
              className="price-list__item-header"
              onClick={() => handleAccordionToggle(i)}
            >
              <div className="price-list__item-header-text">
                <h3 className="price-list__item-heading">{item.heading}</h3>
                <p className="price-list__item-subheading">{item.subheading}</p>
              </div>
              <span className="price-list__item-icon">
                {activeIndex === i
                  ? <span className="price-list__item-x">&#x2715;</span>
                  : <img src={pawSvg} className="price-list__item-paw" alt="" aria-hidden="true" />
                }
              </span>
            </div>
            <div className="price-list__item-body">
              <p className="price-list__item-content">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
