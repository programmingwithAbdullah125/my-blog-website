import Link from "next/link";
import Image from "next/image";
const posts = [
    {
      id: "1",
      title: "Robotics",
      description: "Discover how robots are automating industries with precision.",
      image: "/robotics.png", // Replace with your actual image path
    },
    {
      id: "2",
      title: "Quantum Computing",
      description: "Learn about the future of computing with quantum mechanics.",
      image: "/quantum.png", // Replace with your actual image path
    },
    {
      id: "3",
      title: "Natural Language Processing (NLP)",
      description: "Explore how machines understand and generate human language.",
      image: "/nlp.png", // Replace with your actual image path
    },
    {
      id: "4",
      title: "Computer Vision",
      description: "Discover how machines interpret and analyze visual data.",
      image: "/computerVision.png", // Replace with your actual image path
    },
    {
      id: "5",
      title: "Augmented Reality (AR)",
      description: "Blend digital elements into the physical world for immersive experiences.",
      image: "/ar.png", // Replace with your actual image path
    },
    {
      id: "6",
      title: "Virtual Reality (VR)",
      description: "Step into fully immersive digital environments with VR.",
      image: "/images/vr.jpg", // Replace with your actual image path
    },
    {
      id: "7",
      title: "Cybersecurity",
      description: "Protect data and systems from evolving digital threats.",
      image: "/images/cybersecurity.jpg", // Replace with your actual image path
    },
    {
      id: "8",
      title: "Internet of Things (IoT)",
      description: "Connect and automate smart devices for seamless living.",
      image: "/images/iot.jpg", // Replace with your actual image path
    },
    {
      id: "9",
      title: "Cloud Computing",
      description: "Explore scalable and flexible infrastructure for modern apps.",
      image: "/images/cloud-computing.jpg", // Replace with your actual image path
    },
  ];
  
const BlogHome = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              height={48}
              width={50}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.description}</p>
              <Link href={`/blog/${post.id}`}>
                <p className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Learn More
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogHome;
