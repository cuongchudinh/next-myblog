import Link from "next/link";
import Image from "next/image";
import { getCategories } from "@/common/api";

export default async function Navbar() {
  const { found, categories } = await getCategories();

  return (
    <div className="header">
      <Link href="/" className="logo">
        <Image src="/logo.png" width={80} height={80} alt="logo"></Image>
      </Link>
      <nav className="navbar">
        {categories.map((item, index) => (
          <Link key={index} href={"/categories/" + item.slug}>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
