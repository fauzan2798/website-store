import Link from "next/link"
import Container from "./ui/container"
import MainNav from "./main-nav"
import getCategories from "@/actions/get-categories"

export const revalidate = 0

const Navbar = async () => {
    const categories = await getCategories()

    // console.log("Categories in Navbar:", categories);

    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                <Link
                className="ml-4 flex lg:ml-8 gap-x-2"
                href={"/"}>
                <p className="font-bold text-xl">TOKO</p>
                </Link>
                <MainNav data={categories}/>
                </div>
            </Container>
        </div>
    )
}

export default Navbar