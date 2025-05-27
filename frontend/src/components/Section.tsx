import React from 'react'

type SectionProp = {
  title: string;
};

const Section: React.FC<SectionProp> = ({ title }) => {
  return (
    <>
      <div className="flex justify-between items-center py-4 px-4">
        <span className="text-3xl font-medium">{title}</span>
        <span className="text-xl">&#9660;</span>
      </div>
      <hr className="border-t border-gray-300" />
    </>
  );
};

export default Section
