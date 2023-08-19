import { FC, ReactNode } from "react";
import classes from "./subtitleComp.module.css";
import { motion } from "framer-motion";

interface titleCompInterface {
	children: ReactNode;
}

const SubtitleComp: FC<titleCompInterface> = ({ children }) => {
	return (
		<motion.h4
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ delay: 1.3, ease: "easeOut", duration: 0.5 }}
			className={classes.title}>
			{children}
		</motion.h4>
	);
};

export default SubtitleComp;
