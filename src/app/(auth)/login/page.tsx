import IsLoggedIn from "@/components/IsLoggedIn";
import SignInBtn from "@/components/SignInButton";
import UserInfo from "@/components/UserInfo";
import React from "react";

type Props = {};

const page = (props: Props) => {
	return (
		<div>
			{/* <SignInBtn /> */}
			<IsLoggedIn />
			<UserInfo />
		</div>
	);
};

export default page;
