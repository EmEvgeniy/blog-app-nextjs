import { FC, ReactNode } from "react"
import classes from './subtitleComp.module.css'

interface titleCompInterface {
	children: ReactNode,
}

const SubtitleComp:FC<titleCompInterface> = ({children}) => {
	return (
		<h4 className={classes.title}>{children}</h4>
	)
}

export default SubtitleComp