import React from "react";

const filterSections = [
  {
    id: "colors",
    name: "Color",
    type: "checkbox",
    options: ["White", "Beige", "Blue", "Brown", "Green", "Purple", "Yellow"],
  },
  {
    id: "sizes",
    name: "Size",
    type: "checkbox",
    options: ["S", "M", "L"],
  },
  {
    id: "price",
    name: "Price",
    type: "radio",
    options: ["159-399", "399-999", "999-1999", "1999-2999", "3999-4999"],
    display: (option) => `₹${option.replace("-", " To ₹")}`,
  },
  {
    id: "discount",
    name: "Discount Range",
    type: "radio",
    options: [10, 20, 30, 40, 50, 60, 70, 80],
    display: (option) => `${option}% And Above`,
  },
  {
    id: "availability",
    name: "Availability",
    type: "radio",
    options: ["In Stock", "Out Of Stock"],
  },
];

const FilterData = ({ filters, handleFilterChange }) => {
  return (
    <aside className="w-full md:w-1/4 p-4 border-r border-gray-200">
      {filterSections.map((section) => (
        <div key={section.id} className="mb-6">
          <h3 className="font-semibold mb-2">{section.name}</h3>
          {section.options.map((option) => {
            const isChecked =
              section.type === "checkbox"
                ? filters[section.id]?.includes(option)
                : filters[section.id] === option;

            return (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type={section.type}
                  name={section.id}
                  value={option}
                  checked={isChecked}
                  onChange={() => handleFilterChange(section.id, option)}
                />
                <span>
                  {section.display ? section.display(option) : option}
                </span>
              </label>
            );
          })}
        </div>
      ))}
    </aside>
  );
};

export default FilterData;
