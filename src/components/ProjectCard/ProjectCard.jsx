// import React from "react";
import PropTypes from "prop-types"; // Import Proptypes

const ProjectCard = ({ image }) => {
  return (
    <div className="w-[30vh] md:w-[25rem] rounded-xl bg-slate-800 p-5 mb-10">
      <img src={image} alt="" className="rounded-xl mb-5" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
        consequatur optio nesciunt, praesentium nulla eligendi similique autem
        omnis mollitia deleniti quisquam accusantium explicabo doloremque? Id
        quo animi quaerat iure tempore?
      </p>
      <button className="text-[#5d5dff] bg-gray-700 p-4 rounded-md hover:bg-gray-900 hover:font-bold mt-3 transition-all duration-300">
        <a aria-label="Project" href="https://adistanautiyal.github.io/untalked/wellnessinsight.html">
          Visit
        </a>
      </button>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired, // Define image prop as required string
};

export default ProjectCard;
