import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link
        href="/"
        style={{ color: router.pathname === "/" ? "red" : "blue" }}
      >
        Home
      </Link>
      <Link
        href="/about"
        style={{ color: router.pathname === "/about" ? "red" : "blue" }}
      >
        About
      </Link>
    </nav>
  );
}

// 최신 버전은 이렇게도 사용 가능!
// import { usePathname } from 'next/navigation'
// const pathname = usePathname()

// <Link href="/" style={{ color: pathname === '/' ? 'red' : 'blue' }} >
