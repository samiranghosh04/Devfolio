import React from "react";

const SocialMediaLinks = () => {
  return (
    <div className="flex items-center space-x-4">
      <a
        href="https://www.linkedin.com/in/samiranghosh04/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-700"
      >
        LinkedIn
      </a>
      <a
        href="https://leetcode.com/samiranghoshofficial04/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-orange-500"
      >
        LeetCode
      </a>
      <a
        href="https://www.freecodecamp.org/samiranghosh"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-600"
      >
        FreeCodeCamp
      </a>
      <a
        href="mailto:your-samiranghoshofficial04l@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-red-600"
      >
        Email
      </a>
      <a
        href="tel:+917908530429"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-indigo-600"
      >
        Phone
      </a>
      <a
        href="https://www.threads.net/@samiranghosh04"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-purple-600"
      >
        Threads
      </a>
    </div>
  );
};

export default SocialMediaLinks;
