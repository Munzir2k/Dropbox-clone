/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ThemeToggler } from "./ThemeToggler";

function Header() {
    return (
        <header className="flex items-center justify-between">
            <Link
                href="/"
                className="flex items-center space-x-2 pl-5 pt-2 pb-2"
            >
                <div className="bg-[#0160FE] w-[35px] rounded-md">
                    <Image
                        src="https://www.shareicon.net/data/512x512/2015/11/08/668675_box_512x512.png"
                        alt="logo"
                        className="invert"
                        height={50}
                        width={50}
                    />
                </div>
                <h1 className="font-bold text-xl">Dropbox</h1>
            </Link>

            <div className="flex px-5 space-x-2 items-center pt-2">
                {/* Theme toggler */}
                <ThemeToggler />

                <UserButton afterSignOutUrl="/" />
                <div>
                    <SignedOut>
                        <SignInButton afterSignInUrl="/dashboard" />
                    </SignedOut>
                </div>
            </div>
        </header>
    );
}

export default Header;
