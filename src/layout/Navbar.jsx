import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="flex gap-4 justify-center bg-slate-200 p-4 ">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/signIn'}>SignIn</Link>
        </div>
    )
}

export default Navbar