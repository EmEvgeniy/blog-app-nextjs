import { FC, ReactNode } from "react"
import classes from './titleComp.module.css'
import {motion} from 'framer-motion'

interface titleCompInterface {
	children: ReactNode,
}

const TitleComp:FC<titleCompInterface> = ({children}) => {
	return (
		<motion.h1 
		initial={{ opacity: 0}}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ delay: 1.4, ease: "easeOut", duration: 0.5 }}
		className={classes.title}>{children}</motion.h1>
	)
}

export default TitleComp