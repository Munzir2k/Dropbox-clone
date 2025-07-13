/** @format */

import { SignIn } from "@clerk/nextjs";
import React from "react";

function SignInPage() {
    return (
        <div className="bg-gray-200 dark:bg-gray-500">
            <div className="flex items-center justify-center pt-[6rem] pb-[11.6rem]">
                <SignIn />
            </div>
        </div>
    );
}

export default SignInPage;
