import { FC } from "react";
import classes from "./footer.module.css";
import Container from "../UI/container/Container";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import Nav from "../UI/nav/Nav";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store"; 
import Button from "../UI/Button/Button";

const Footer: FC = () => {
	const lang = useSelector((state:RootState) => state.lang.lang)
	return (
		<footer className={classes.footer}>
			<Container>
				<div className={classes.inner}>
					<div className={classes.top}>
						<div className={classes.logo}>
							<Image
								src={logo}
								alt=' '
								width={0}
								height={0}
								sizes='100vw'
								style={{ width: "100%", height: "auto" }}
							/>
						</div>
						<nav>
							<Nav />
						</nav>
					</div>
					<div className={classes.mid}>
						<div className={classes.mid_inner}>
							<p>Subscribe to our news letter to get latest updates and news</p>
							<form className={classes.form}>
								<input type="text" placeholder="email@gmail.com"/>
								<span>{lang === "RU" ? "Подписаться" : "Subscribe"}</span>
							</form>
						</div>
					</div>
					<div className={classes.reserve}>
						<p>All rights reserved. Copyright 2000-2023.</p>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
