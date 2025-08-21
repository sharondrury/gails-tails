import { useState } from "react";
import { FaPaw } from "react-icons/fa";

export default function PriceList() {
  const [activeButton, setActiveButton] = useState("dogwalking");

  const infoData = {
    dogwalking: {
      title: "Dog walking",
      content: (
          "Dog boarding is a service where pet owners can leave their dogs inthe care of a facility or professional caregiver when they're away, whether for a few days or an extended period. Boarding facilities, often called kennels, typically provide essentials like food, water, exercise, and shelter. Many modern dog boarding centers go beyond basic care, offering playtime, socialization with other dogs, grooming, and even specialized accommodations like private suites."
      ),
    },
    dogboarding: {
      title: "Dog boarding",
      content:
        "Boarding, in general, refers to the practice of staying at a place outside of one's home for a temporary period, usually where accommodations, meals, or care are provided. It can apply to both people and animals. For people, boarding is often associated with boarding schools, where students live on campus while pursuing their education, or boarding houses, which offer lodging and meals for residents. For animals, boarding typically means temporary care at a facility, such as dog or cat boarding, where pets are looked after while their owners are away.",
    },
    petsitting: {
      title: "Pet sitting",
      content:
        "Pet sitting is a service where a professional or trusted individual cares for a pet in the owner's home, rather than taking the pet to a boarding facility. It can include feeding, walking, playtime, administering medication, cleaning litter boxes or cages, and providing companionship. Many pet owners prefer sitting over boarding because it allows pets to stay in a familiar environment, reducing stress and keeping their routines consistent. It's especially helpful for pets that may be shy, elderly, have special medical needs, or don't enjoy being around many other animals.",
    },
  };

  const buttons = [
    {
      key: "dogwalking",
      label: "Dog boarding",
      icon: <FaPaw icon="fa-solid fa-medal" size="20px" />,
    },
    {
      key: "dogboarding",
      label: "Dog walking",
      icon: <FaPaw icon="fa-solid fa-medal" size="20px" />,
    },
    {
      key: "petsitting",
      label: "Pet sitting",
      icon: <FaPaw icon="fa-solid fa-medal" size="20px" />,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="">
        <h1 className="text-2xl font-bold text-white">Price lists</h1>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Toggle Buttons */}
        <div className="p-6 border-b border-gray-200">
          <div className="grid grid-cols-3">
            {buttons.map((button) => (
              <button
                key={button.key}
                onClick={() => setActiveButton(button.key)}
                className={`cursor-pointer px-6 py-3 font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                  activeButton === button.key
                    ? "bg-[#F3829995] text-gray-900 shadow-lg transform"
                    : "bg-white text-gray-700 hover:bg-gray-200 hover:shadow-md"
                }`}
              >
                <span className="text-lg">{button.icon}</span>
                {button.label}
              </button>
            ))}
          </div>
        </div>

        {/* Info Display */}
        <div className="p-8">
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <span className="text-3xl">
                {buttons.find((b) => b.key === activeButton)?.icon}
              </span>
              {infoData[activeButton].title}
            </h2>
            <div className="bg-gray-50 p-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                {infoData[activeButton].content}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
