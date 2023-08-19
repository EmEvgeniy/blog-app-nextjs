import { FC } from "react";
import classes from "./header.module.css";
import Container from "../UI/container/Container";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import Nav from "../UI/nav/Nav";
import SearchInput from "../UI/searchInput/SearchInput";
import LangSelect from "../UI/langSelect/LangSelect";
import AdaptiveMenu from "../UI/adaptiveMenu/AdaptiveMenu";
import { motion } from "framer-motion";

const Header: FC = () => {
	return (
		<motion.header
			initial={{ opacity: 0, y: "-100%" }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: "-100%" }}
			transition={{ delay: 0.3, ease: "easeOut", duration: 0.5 }}
			className={classes.header}>
			<Container>
				<div className={classes.inner}>
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
						<SearchInput />
						<Nav />
						<LangSelect />
					</nav>
					<div className={classes.burger}>
						<AdaptiveMenu />
					</div>
				</div>
			</Container>
		</motion.header>
	);
};

export default Header;
