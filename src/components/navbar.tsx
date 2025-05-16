import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <Link href={"/old"}>Old</Link>
            <Link href={"/insecure"}>Insecure</Link>
            <Link href={"/secure"}>Secure</Link>
        </div>
    )
}

export default Navbar;