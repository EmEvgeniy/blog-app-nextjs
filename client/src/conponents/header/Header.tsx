import { FC } from "react";
import classes from "./header.module.css";
import Container from "../UI/container/Container";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import Nav from "../UI/nav/Nav";
import SearchInput from "../UI/searchInput/SearchInput";
import LangSelect from "../UI/langSelect/LangSelect";
import AdaptiveMenu from "../UI/adaptiveMenu/AdaptiveMenu";

const Header: FC = () => {
	return (
		<header className={classes.header}>
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
		</header>
	);
};

export default Header;
