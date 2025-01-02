import React from "react";
import Image from "next/image";
const topics = [
    {
      id: 1,
      title: "Artificial Intelligence",
      description: "Learn about AI and its applications in modern technology.",
      image: "/ai.png" // Ensure this image is present in the /public/images folder
    },
    {
      id: 2,
      title: "Machine Learning",
      description: "Explore how machines are trained to predict and learn.",
      image: "/ml.png", // Ensure this image is present in the /public/images folder
    },
    {
      id: 3,
      title: "Deep Learning",
      description: "Understand advanced neural networks and their applications.",
      image: "/deeplearning.png", // Ensure this image is present in the /public/images folder
    },
    {
      id: 4,
      title: "Data Science",
      description: "Extract insights from data using powerful tools.",
      image: "/datascience.png", // Ensure this image is present in the /public/images folder
    },
    {
      id: 5,
      title: "Data Learning",
      description: "Advance neural networks for image and speech recognition.",
      image: "/datalearning.png", // Ensure this image is present in the /public/images folder
    },
    {
      id: 6,
      title: "Blockchain",
      description: "Revolutionizing secure transactions with decentralization.",
      image: "/blockchain.png", // Ensure this image is present in the /public/images folder
    },
  ];
  
const ProductCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {topics.map((topic) => (
        <div
          key={topic.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
        >
          {/* Image */}
          <div className="relative w-full h-48">
            <Image
              src={topic.image}
              alt={topic.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          {/* Content */}
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{topic.title}</h3>
            <p className="text-gray-600 mt-2">{topic.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
