"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function SignInBtn() {
	return (
		<Button
			onClick={() => signIn("google")}
			variant={"outline"}
			className="flex items-center gap-4 shadow-xl rounded-lg pl-3"
		>
			<Image src="/google-logo.png" height={30} width={30} alt={""} />
			<span>Sign in with Google</span>
		</Button>
	);
}
