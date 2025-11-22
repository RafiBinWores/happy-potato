import { useState } from "react";
import { FaStar } from "react-icons/fa";
import franchiseData from "../../data/franchiseOptions.json";

const FranchiseOptions = () => {
  const stores = franchiseData.stores || [];
  const [activeId, setActiveId] = useState(stores[0]?.id);

  const activeStore =
    stores.find((store) => store.id === activeId) || stores[0] || {};

  const renderStars = (count, isActive) => {
    return (
      <>
        {Array.from({ length: count }).map((_, i) => (
          <FaStar
            key={i}
            className={
              isActive
                ? "text-yellow-300"
                : "text-[#E51E26] group-hover:text-yellow-300 transition-colors"
            }
            size={18}
          />
        ))}
      </>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
      {/* Left: collapsible list */}
      <div className="space-y-4">
        {stores.map((store) => {
          const isActive = store.id === activeId;

          return (
            <button
              key={store.id}
              type="button"
              onClick={() => setActiveId(store.id)}
              className={`group w-full text-left rounded-2xl md:rounded-[20px] shadow-md transition-all duration-200 border-2
                ${
                  isActive
                    ? "bg-[#E51E26] border-[#E51E26] text-white"
                    : "bg-white border-transparent text-[#E51E26] hover:bg-[#E51E26] hover:border-[#E51E26] hover:text-white"
                }`}
            >
              <div className="px-6 py-4 md:px-8 md:py-5 cursor-pointer">
                {/* Stars + title */}
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    {renderStars(store.stars, isActive)}
                  </span>
                  <p
                    className={`font-headingNew text-[16px] ${
                      isActive
                        ? "text-secondary"
                        : "text-[#E51E26] group-hover:text-secondary duration-200"
                    }`}
                  >
                    {store.name} ({store.size})
                  </p>
                </div>

                {/* Extra info ONLY when active (click) */}
                {isActive && (
                  <div className="mt-3 text-[13px] md:text-[15px] leading-snug">
                    <p>
                      <span className="text-base">Cost:</span> {store.cost}
                    </p>
                    <p>
                      <span className="text-base">Best for:</span>{" "}
                      {store.bestFor}
                    </p>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Right: image changes with active card */}
      <div className="flex">
        <div className="w-full overflow-hidden shadow-lg rounded-[20px]">
          {activeStore.image && (
            <img
              src={activeStore.image}
              alt={activeStore.name}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FranchiseOptions;
