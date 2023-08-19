import { FC, ReactNode } from "react"
import Header from "../../header/Header"
import Footer from "../../footer/Footer"
import classes from './wrapper.module.css'


interface wrapperInterface {
	children:ReactNode
}

const Wrapper:FC<wrapperInterface> = ({children}) => {
	return (
		<div className={classes.Wrapper}>
			<Header/>
			<main>{children}</main>
			<Footer/>
		</div>
	)
}

export default Wrapper