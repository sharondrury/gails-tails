import { useState } from "react";
import { FaPaw } from "react-icons/fa";
import pawSvg from '../assets/images/paw-solid-full.svg';
import pawsWave2Svg from '../assets/images/dogPawsWave2.svg';
import pawsWaveSvg from '../assets/images/dogPawsWave.svg';
import './PriceList.scss'

const items = [
  {
    key: "dogwalking",
    heading: "Dog walking",
    subheading: "Group and solo walks tailored to your dog",
    subSubHeading: "please call 07889546847 for availability",
    content:
      "Dog boarding is a service where pet owners can leave their dogs in the care of a facility or professional caregiver when they're away, whether for a few days or an extended period. Boarding facilities, often called kennels, typically provide essentials like food, water, exercise, and shelter. Many modern dog boarding centers go beyond basic care, offering playtime, socialisation with other dogs, grooming, and even specialised accommodations like private suites.",
    table: {
      title: "Dog Walking Prices",
      columns: ["Solo Walk", "Group Walk", "Additional Dog"],
      rows: [
        { label: "Price", values: ["£12", "£10", "+£5"] },
        { label: "Duration", values: ["60 min", "60 min", "60 min"] },
        {
          label: "Group Size",
          values: ["1 dog", "Up to 4 dogs", "+1 per dog"],
        },
      ],
      footer:
        "All dogs must be from same household, if out of Hinstock area a small fee will be charged",
    },
  },
  {
    key: "dogboarding",
    heading: "Dog boarding",
    subheading: "Overnight and extended stays",
    boardingGrid: {
      description: "Leave your dog in our capable hands whilst you go on holiday or a work trip",
      title: "24hr day/night:",
      rates: [
        { label: "1 dog", price: "£20.00" },
        { label: "2 dogs", price: "£36.00" },
      ],
      notes: "Max of two dogs. Discount may be offered for long periods. Extra charges may apply depending on time of day",
      footer: "All dogs must be from same household.",
    },
  },
  {
    key: "petsitting",
    heading: "Pet sitting",
    subheading: "Overnight and extended stays",
    visitsGrid: [
      {
        label: "Puppy visit:",
        duration: "30 minute visit:",
        price: "£13",
        availability: "available Mon-Fri 9am and 4pm",
      },
      {
        label: "Cat visit:",
        duration: "20 minute visit:",
        price: "£13",
        availability: "available Mon-Fri 9am and 4pm",
      },
    ],
  },
];

const PriceTable = ({ table }) => (
  <div className="price-table">
    <h3 className="price-table__title">{table.title}</h3>
    <table className="price-table__table">
      <thead>
        <tr>
          <th scope="col" className="price-table__stub-head"></th>
          {table.columns.map((col) => (
            <th scope="col" key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row) => (
          <tr key={row.label}>
            <td className="price-table__row-label">{row.label}</td>
            {row.values.map((val, i) => (
              <td key={i}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <p className="price-table__footer">{table.footer}</p>
  </div>
);

const VisitGrid = ({ visits }) => (
  <div className="visit-grid">
    {visits.map((visit) => (
      <div key={visit.label} className="visit-grid__row">
        <span className="visit-grid__label">{visit.label}</span>
        <div className="visit-grid__details">
          <span className="visit-grid__duration">{visit.duration}</span>
          <div className="visit-grid__price-row">
            <span className="visit-grid__price">{visit.price}</span>
            <span className="visit-grid__availability">{visit.availability}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const BoardingGrid = ({ grid }) => (
  <div className="boarding-grid">
    <p className="boarding-grid__description">{grid.description}</p>
    <div className="boarding-grid__pricing">
      <span className="boarding-grid__title">{grid.title}</span>
      <div className="boarding-grid__rates">
        {grid.rates.map((rate) => (
          <div key={rate.label} className="boarding-grid__rate-row">
            <span className="boarding-grid__rate-label">{rate.label}:</span>
            <span className="boarding-grid__rate-price">{rate.price}</span>
          </div>
        ))}
      </div>
      <p className="boarding-grid__notes">{grid.notes}</p>
      <p className="boarding-grid__footer">{grid.footer}</p>
    </div>
  </div>
);

const PriceList = () => {
  const [activeButton, setActiveButton] = useState("dogwalking");
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (i) => {
    setActiveIndex((prev) => (prev === i ? null : i));
  };

  const activeItem = items.find((item) => item.key === activeButton);

  return (
    <div className="price-list__wrapper">
      <img src={pawsWave2Svg} className="price-list__paw price-list__paw--left" alt="" aria-hidden="true" />
      <img src={pawsWaveSvg} className="price-list__paw price-list__paw--right" alt="" aria-hidden="true" />
      <div className="price-list__content max-w-5xl mx-auto p-6">
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
              <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                <FaPaw size="24px" />
                {activeItem?.heading}
              </h2>
              {activeItem?.subSubHeading && (
                <p className="price-list__sub-sub-heading">{activeItem.subSubHeading}</p>
              )}
              <div className="bg-gray-50 p-6">
                {activeItem?.table
                  ? <PriceTable table={activeItem.table} />
                  : activeItem?.visitsGrid
                  ? <VisitGrid visits={activeItem.visitsGrid} />
                  : activeItem?.boardingGrid
                  ? <BoardingGrid grid={activeItem.boardingGrid} />
                  : <p className="text-gray-700 leading-relaxed text-lg">{activeItem?.content}</p>
                }
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
                {item.subSubHeading && (
                  <p className="price-list__item-sub-sub-heading">{item.subSubHeading}</p>
                )}
              </div>
              <span className="price-list__item-icon">
                {activeIndex === i
                  ? <span className="price-list__item-x">&#x2715;</span>
                  : <img src={pawSvg} className="price-list__item-paw" alt="" aria-hidden="true" />
                }
              </span>
            </div>
            <div className="price-list__item-body">
              {item.table
                ? <PriceTable table={item.table} />
                : item.visitsGrid
                ? <VisitGrid visits={item.visitsGrid} />
                : item.boardingGrid
                ? <BoardingGrid grid={item.boardingGrid} />
                : <p className="price-list__item-content">{item.content}</p>
              }
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default PriceList;
