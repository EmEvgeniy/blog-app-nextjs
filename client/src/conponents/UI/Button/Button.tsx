import { FC } from "react";
import classes from "./button.module.css";
import Link from "next/link";

interface buttonInterface {
	title: string;
	link?: string;
}

const Button: FC<buttonInterface> = ({ title, link }) => {
	return (
		<Link href={`${link}`} className={classes.Button}>
			{title}
		</Link>
	);
};

export default Button;
