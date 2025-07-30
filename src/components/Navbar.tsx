
import { Link, Outlet } from "react-router-dom"

type Props = {}

export default function Navbar({ }: Props) {

  return (
    <>
    <div className="flex justify-between mt-2 mb-4 aling-center">
      <Link to="/" >
      <img src="./brainly.svg" alt="main-logo" height={50} width={50} />
      </Link>
      <div className="flex text-sm font-normal gap-2">
        <Link to="/youtubeVideos">
          Youtube
        </Link>
        <Link to="/twittes">
          twitter
        </Link>
        <Link to="/addContent" >
          <button className="px-2 border-2 bg-blue-600 text-white rounded-sm">
            Add Content
          </button>
        </Link>
        <Link to="/share" >
        <button className= "px-2 border-2 bg-blue-600 text-white rounded-sm ">
          share
        </button>
        </Link>
        <Link to="/about" >
        <button className= "px-2 border-2 bg-blue-600 text-white rounded-sm ">
          About
        </button>
        </Link>
      </div>
    </div>
        <Outlet />
    </>
  )
}

