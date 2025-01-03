import Link from "next/link"
import ProductCards from "./components/content"

const Home = () => {
  return (
    <>
    <div className="flex justify-center items-center mt-40">
  <h1 className="text-6xl font-extrabold">Welcome to Our blog</h1>
</div>
<ProductCards/>
<div className="flex justify-center items-center">
      <a
        href="/blog"
        className="relative inline-block px-8 py-4 text-lg font-bold text-white bg-blue-500 rounded-full shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600"
      >
        <span className="absolute inset-0 bg-blue-700 opacity-0 rounded-full transition duration-500 blur-md hover:opacity-50"></span>
        <span className="relative z-10">View My Blog</span>
      </a>
    </div>
    </>
  )

}
export default Home
