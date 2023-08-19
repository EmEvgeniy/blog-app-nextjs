import { FC, ReactNode } from "react"
import Header from "../../header/Header"
import Footer from "../../footer/Footer"
import classes from './wrapper.module.css'
import {motion} from 'framer-motion'

interface wrapperInterface {
	children:ReactNode
}

const Wrapper:FC<wrapperInterface> = ({children}) => {
	return (
		<div className={classes.Wrapper}>
			<Header/>
			<motion.main
				initial={{ opacity: 0}}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ delay: 1, ease: "easeOut", duration: 0.5 }}
			>{children}</motion.main>
			<Footer/>
		</div>
	)
}

export default Wrapper