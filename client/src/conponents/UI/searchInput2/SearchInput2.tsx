import classes from "./searchInput2.module.css";
import { BsGlobe } from "react-icons/bs";
import { IconContext } from "react-icons";
import { FC } from "react";

interface searchInputInterface {
	placeholder: string;
	text: string
}

const SearchInput2:FC<searchInputInterface> = ({text, placeholder }) => {
	return (
		<div className={classes.wrap}>
			<p>{text}</p>
			<div className={classes.SearchInput2}>
				<input type='search' placeholder={placeholder} />
				<IconContext.Provider value={{ color: "black", size: "25px" }}>
					<BsGlobe />
				</IconContext.Provider>
			</div>
		</div>
	);
};

export default SearchInput2;
