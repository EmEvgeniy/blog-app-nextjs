import { FC } from "react";
import classes from "./mainHero.module.css";
import Container from "@/conponents/UI/container/Container";
import Button from "@/conponents/UI/Button/Button";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import TitleComp from "@/conponents/UI/titleComp/TitleComp";
import SubtitleComp from "@/conponents/UI/subtitleComp/SubtitleComp";
import { motion } from "framer-motion";

const MainHero: FC = () => {
	const lang = useSelector((state: RootState) => state.lang.lang);
	return (
		<div className={classes.mainHero}>
			<Container>
				<div className={classes.inner}>
					<SubtitleComp>our mission</SubtitleComp>
					<TitleComp>
						Access to all the latest <br /> information of the world
					</TitleComp>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ delay: 1.6, ease: "easeOut", duration: 0.5 }}>
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu
						<br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident.
					</motion.p>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ delay: 1.8, ease: "easeOut", duration: 0.5 }}>
						<Button link='/' title={lang === "RU" ? "Детали" : "See more"} />
					</motion.div>
				</div>
			</Container>
		</div>
	);
};

export default MainHero;
