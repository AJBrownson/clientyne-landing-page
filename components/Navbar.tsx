import { Button } from "./ui/button";


export default function Navbar() {
    return (
        <>
           <header className="fixed w-full flex justify-center py-10 z-50">
            <nav className="flex justify-between items-center bg-[#333] text-[#C6C6C6] h-16 px-2 w-full max-w-[570px] rounded-full">
                <p className="font-bold text-lg text-[#fff]">Clientyne</p>
                <ul className="flex justify-between gap-x-10 text-xs">
                    <li>Home</li>
                    <li>About</li>
                </ul>
                <Button className="bg-[#fff] text-[#3D3D3D] py-6 px-4 rounded-full">Book a Demo</Button>
            </nav>
           </header>
        </>
    );
}
