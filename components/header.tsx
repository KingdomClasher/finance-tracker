import { Loader2 } from "lucide-react";
import { UserButton, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";

import { HeaderLogo } from "@/components/header-logo";
import { Navigation } from "@/components/navigation";
import { WelcomeMsg } from "./welcome-msg";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs';

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36">
        <div className="max-w-screen-2xl mx-auto">
            <div className="w-full flex items-center justify-between mb-14">
                <div className="flex items-center lg:gap-x-16">
                    <HeaderLogo />
                    <Navigation />
                </div>
                <ClerkLoaded>
                    <SignedOut>
                        <SignInButton>
                            <button className="w-full lg:w-auto justify-between font-normal bg-white/10 border-none outline-none text-white">
                                Sign In
                            </button>
                        </SignInButton>
                        <SignUpButton>
                            <button className="w-full lg:w-auto justify-between font-normal bg-white/10 border-none outline-none text-white">
                                Sign Up
                            </button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </ClerkLoaded>
                <ClerkLoading>
                    <Loader2 className="size-8 animate-spin text-slate-400"/>
                </ClerkLoading>
            </div>
            <WelcomeMsg />
        </div>
    </header>
  );
}