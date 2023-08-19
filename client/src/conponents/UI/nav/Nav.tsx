import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store"; // Подставьте путь к вашему корневому редюсеру
import classes from "./nav.module.css";

const Nav: FC = () => {
	const list = useSelector((state: RootState) => state.lang.value);

	return (
		<ul
			className={classes.Nav}>
			{list.map((el: string, index: number) => (
				<li key={index}>{el}</li>
			))}
		</ul>
	);
};

export default Nav;
