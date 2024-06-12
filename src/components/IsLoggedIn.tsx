"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import SignInBtn from "./SignInButton";

type Props = {};

const IsLoggedIn = (props: Props) => {
	const { data, status } = useSession();
	return (
		<div>
			<h1>Status</h1>
			{status === "authenticated" ? (
				<Button
					onClick={() => signOut()}
					className="bg-slate-900 text-white px-6 py-2 rounded-md"
				>
					Sign Out
				</Button>
			) : (
				<SignInBtn />
			)}
		</div>
	);
};

export default IsLoggedIn;
