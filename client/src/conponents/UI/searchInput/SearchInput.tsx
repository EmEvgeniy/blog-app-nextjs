import { FC } from "react";
import classes from "./searchInput.module.css";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";

const SearchInput: FC = () => {
	const lang = useSelector((state: any) => state.lang.lang);
	return (
		<div className={classes.SearchInput}>
			<IconContext.Provider value={{ color: "black", size: "25px" }}>
				<AiOutlineSearch />
			</IconContext.Provider>
			<input
				type='search'
				placeholder={lang === "RU" ? "Поиск..." : "Search.."}
			/>
		</div>
	);
};

export default SearchInput;
