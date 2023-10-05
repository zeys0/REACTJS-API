const Navbar = () =>{
return(
    <div>
        
        <nav className=" flex justify-between w-full h-14 bg-gray-950 text-slate-200">
            <ul className="container flex gap-2 text-lg font-semibold items-center">
                <li><a href="#">Home</a></li>
                <li><a href="#">Popular</a></li>
                <li><a href="#">Category</a></li>
            </ul>
        </nav>
    </div>
)

}

export default Navbar;