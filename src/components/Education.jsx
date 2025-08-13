// src/components/Education.jsx
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { education as educationData } from "../constants";

const EducationCard = ({
  index,
  degree,
  institution,
  year,
  gpa,
  details,
  logo,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="w-full bg-black-200 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row md:items-start md:justify-between gap-6"
  >
    {/* Left column */}
    <div className="md:w-1/3 flex items-center gap-3">
      {logo && (
        <img
          src={logo}
          alt={`${institution} logo`}
          className="w-10 h-10 object-contain"
        />
      )}
      <div>
        <h3 className="text-white font-semibold text-[18px] md:text-[20px]">
          {degree}
        </h3>
        <p className="text-secondary text-[13px] md:text-[14px]">
          {institution}
        </p>
        <p className="text-secondary text-[12px]">{year}</p>
        {gpa && <p className="text-secondary text-[12px] mt-0.5">GPA: {gpa}</p>}
      </div>
    </div>

    {/* Right column */}
    {details && (
      <div className="md:flex-1">
        <p className="text-white tracking-wider text-[14px] md:text-[15px]">
          {details}
        </p>
      </div>
    )}
  </motion.div>
);

const Education = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[180px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Background</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>

      <div
        className={`-mt-16 pb-14 ${styles.paddingX} flex flex-col items-center gap-7`}
      >
        {educationData.map((item, idx) => (
          <div
            key={`${item.institution}-${idx}`}
            className="w-full max-w-md sm:max-w-2xl lg:max-w-none"
          >
            <EducationCard index={idx} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
