import { FC, ReactNode } from "react"
import classes from './titleComp.module.css'

interface titleCompInterface {
	children: ReactNode,
}

const TitleComp:FC<titleCompInterface> = ({children}) => {
	return (
		<h1 className={classes.title}>{children}</h1>
	)
}

export default TitleComp