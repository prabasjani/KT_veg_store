import { Link } from "react-router-dom"

const Missing = () => {
  return (
    <div className="w-full h-[400px] bg-linear-to-r from-green-200 to-lime-200 mt-16 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-600 ">Page Not Found</h1>
      <p className="text-xl font-semibold tracking-wide my-3">
        Check the URL you typed...
      </p>
      <p className="text-xl font-semibold tracking-wide">
        Click the Shop and visit our Shopping Page
      </p>
      <p>or</p>
      <Link to="/" className="text-blue-500 underline">
        Go to Shop Page...
      </Link>
    </div>
  )
}

export default Missing
