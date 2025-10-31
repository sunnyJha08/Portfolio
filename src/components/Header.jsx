const Header = () => {
    return (
        <header className="text-black w-screen h-[12%] p-4">
            <nav className=" flex w-full h-full">
                <div className=" w-[20%] flex justify-center items-center p-[0.8rem]">
                    <div className="border-black border-[0.3rem] overflow-hidden  rounded-full">
                        <img src="../../public/assets/logo.png" alt="Logo"/>
                    </div>
                </div>
                <div className=" w-[80%] content-center">
                    <ul className="flex justify-end gap-3">
                        <li><button>About</button></li>
                        <li><a href="#">Blogs</a></li>
                        <li><button>Contact</button></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;