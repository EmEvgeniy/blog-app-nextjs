import { FC, ReactNode } from "react"
import classes from './container.module.css'


interface containerWrapper {
	children: ReactNode
}

const Container:FC<containerWrapper> = ({children}) => {
	return (
		<div className={classes.Container}>{children}</div>
	)
}

export default Container