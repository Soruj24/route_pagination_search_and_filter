import { useNavigate } from "react-router-dom"



const Contact = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col justify-center items-center h-screen shadow-md "     >
            <h1 className="text-3xl">Contact</h1>
            <button className="text-2xl text-red-600"    onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}

export default Contact