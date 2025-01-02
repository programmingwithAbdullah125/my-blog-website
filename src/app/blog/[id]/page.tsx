"use client"
const posts = [
    {
      id: "1",
      title: "Robotics",
      description: "Discover how robots are automating industries with precision.",
      image: "/roboticBlog.png", // Replace with your actual image path
      content: `
        Robotics is a branch of engineering and science that includes the design, construction, operation, and use of robots. 
        Robots are transforming industries by automating tasks with high precision and efficiency. 
        They are used in fields like healthcare for surgeries, manufacturing for production lines, and even in space exploration for autonomous missions.
        Key applications:
        - Surgical robots in healthcare.
        - Automated assembly lines in manufacturing.
        - Exploration robots in outer space.
      `,
    },
    {
      id: "2",
      title: "Quantum Computing",
      description: "Learn about the future of computing with quantum mechanics.",
      image: "/quantumBlog.png", // Replace with your actual image path
      content: `
        Quantum Computing is revolutionizing the way we process information by leveraging quantum mechanics principles. 
        Unlike classical computers, quantum computers use qubits, allowing parallel processing and solving problems faster.
        Key areas of impact:
        - Cryptography and secure communications.
        - Molecular simulations for drug discovery.
        - Optimization problems in logistics and AI.
      `,
    },
    {
      id: "3",
      title: "Natural Language Processing (NLP)",
      description: "Explore how machines understand and generate human language.",
      image: "/nlpBlog.png", // Replace with your actual image path
      content: `
        Natural Language Processing (NLP) focuses on the interaction between humans and machines using natural language. 
        NLP enables applications such as chatbots, language translators, and speech recognition systems.
        Key applications:
        - Sentiment analysis for understanding public opinion.
        - Voice assistants like Siri and Alexa.
        - Automated text summarization and language translation.
      `,
    },
    {
      id: "4",
      title: "Computer Vision",
      description: "Discover how machines interpret and analyze visual data.",
      image: "/computerVisionBlog.png", // Replace with your actual image path
      content: `
        Computer Vision is a field of artificial intelligence that enables machines to analyze and interpret visual data. 
        It is used in applications ranging from facial recognition to self-driving cars.
        Key innovations:
        - Face recognition for security systems.
        - Object detection for autonomous vehicles.
        - Medical imaging for detecting diseases.
      `,
    },
    {
      id: "5",
      title: "Augmented Reality (AR)",
      description: "Blend digital elements into the physical world for immersive experiences.",
      image: "/arBlog.png", // Replace with your actual image path
      content: `
        Augmented Reality (AR) overlays digital content on the physical world, enhancing user interaction with real-world environments. 
        It is widely used in gaming, retail, and education for immersive experiences.
        Key applications:
        - AR gaming like Pokemon Go.
        - Virtual try-ons in e-commerce.
        - Interactive learning tools for students.
      `,
    },
    {
      id: "6",
      title: "Virtual Reality (VR)",
      description: "Step into fully immersive digital environments with VR.",
      image: "/images/vr.jpg", // Replace with your actual image path
      content: `
        Virtual Reality (VR) creates simulated environments where users can immerse themselves entirely. 
        VR is used in industries such as gaming, training, and tourism to provide immersive experiences.
        Key applications:
        - Virtual gaming worlds.
        - VR-based employee training simulations.
        - Virtual tours of real-world locations.
      `,
    },
    {
      id: "7",
      title: "Cybersecurity",
      description: "Protect data and systems from evolving digital threats.",
      image: "/images/cybersecurity.jpg", // Replace with your actual image path
      content: `
        Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. 
        With increasing reliance on digital technology, securing sensitive data has become a top priority.
        Key concepts:
        - Firewalls and intrusion detection systems.
        - Data encryption for secure communications.
        - Ethical hacking for finding vulnerabilities.
      `,
    },
    {
      id: "8",
      title: "Internet of Things (IoT)",
      description: "Connect and automate smart devices for seamless living.",
      image: "/images/iot.jpg", // Replace with your actual image path
      content: `
        The Internet of Things (IoT) connects physical devices to the internet, enabling them to communicate and work together seamlessly. 
        IoT is transforming homes, cities, and industries by automating routine tasks.
        Key use cases:
        - Smart home devices like thermostats and security cameras.
        - IoT-enabled wearables like fitness trackers.
        - Industrial IoT for predictive maintenance.
      `,
    },
    {
      id: "9",
      title: "Cloud Computing",
      description: "Explore scalable and flexible infrastructure for modern apps.",
      image: "/images/cloud-computing.jpg", // Replace with your actual image path
      content: `
        Cloud Computing provides on-demand access to computing resources such as servers, storage, and applications. 
        It allows businesses to scale operations without investing in physical infrastructure.
        Key benefits:
        - Scalable storage and computing power.
        - Cost-effective infrastructure for startups.
        - Secure and reliable data storage.
      `,
    },
  ];

  import { useParams } from "next/navigation";

 const BlogPost = () => {
  const params = useParams(); // Extract the dynamic route parameter
  const { id } = params;

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <h1 className="text-3xl font-bold text-red-500">Post Not Found</h1>;
  }

  return (
    <div className="p-8">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg font-semibold text-gray-700 mb-4">{post.description}</p>
      <p className="text-lg whitespace-pre-line">{post.content}</p>
    </div>
  );
};
export default BlogPost;