import Link from "next/link";

const Navbar = () => {
    return (
        <div className={"flex justify-between"}>
            <Link className={"p-2 text-center rounded-sm bg-sky-500 hover:bg-sky-700 w-1/9"} href={"/old"}>Old</Link>
            <Link className={"p-2 text-center rounded-sm bg-sky-500 hover:bg-sky-700 w-1/9"} href={"/insecure"}>Insecure</Link>
            <Link className={"p-2 text-center rounded-sm bg-sky-500 hover:bg-sky-700 w-1/9"} href={"/secure"}>Secure</Link>
        </div>
    )
}

export default Navbar;