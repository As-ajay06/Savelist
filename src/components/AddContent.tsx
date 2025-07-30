import { useNavigate } from "react-router-dom"

export default function AddContent() {

    const navigate = useNavigate();

    function handleAddContent() {
        navigate("/")
    }
    return (
        <div className="absolute flex flex-col justify-center w-[1152px] items-center h-screen backdrop-blur-sm ">
            <div className="bg-slate-100 shadow-2xl rounded-md w-72 h-72 flex flex-col justify-center items-center">
                <div className="m-2"> 
                    <form>
                        <input className="bg-white rounded-full px-4 py-1 outline-none "
                         type="text" placeholder="Paste link here" />
                    </form>
                </div>
                <div>
                    <button onClick={handleAddContent} className="bg-blue-600 rounded-full border-none shadow-md text-white px-4 py-1 hover:bg-blue-700 hover:shadow-none">
                        Add Content
                    </button>
                    
                </div>
            </div>
        </div>
    )
}