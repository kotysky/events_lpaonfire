import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { dark } from "@clerk/themes";

function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="LPAonFire logo"
          />
        </Link>
        <SignedIn>
          <nav className="  md:flex-between hidden  w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton
              appearance={{
                baseTheme: dark,
                variables: { colorPrimary: "red" },
              }}
              afterSignOutUrl="/"
            />

            {/*  <Link href="/">
              <Image
                src="/assets/icons/user.svg"
                width={34}
                height={38}
                alt="user"
              />
            </Link>*/}
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}

export default Header;
