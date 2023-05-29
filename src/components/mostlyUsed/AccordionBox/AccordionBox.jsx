import React, { useState } from 'react';

const AccordionBox = ({ sections }) => {
    const [activeSection, setActiveSection] = useState(1);
    console.log(sections);
    return (
        <div className="flex flex-col gap-6">
            {sections.map((item, index) => (
                <div key={index} className="flex flex-col">
                    <button className="flex flex-row-reverse" onClick={() => setActiveSection(activeSection === index ? -1 : index)}>
                        <div className="w-5 h-5 ml-2 rounded" style={{ backgroundColor: item.sideColor }} ></div>
                        <p>{item.title}</p>
                    </button>
                    <div className="transition-[max-height] duration-500 ease-in-out max-h-0 overflow-hidden" style={{ maxHeight: activeSection === index ? "300px" : "0px" }}>
                        {item.projects.length > 0 &&
                            <div className="p-[10px] mr-7 flex flex-col gap-4 mt-3">{item.projects.map((item2, index2) => (
                                <p className="hover:bg-[#E9F9FF] p-1.5 rounded cursor-pointer" >{item2.title}</p>
                            ))}</div>
                        }
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AccordionBox;
