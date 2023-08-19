import { FC, useEffect, useState } from "react";
import classes from "./mainCategory.module.css";
import Container from "@/conponents/UI/container/Container";
import SearchInput2 from "@/conponents/UI/searchInput2/SearchInput2";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";

interface Category {
	_id: string;
	lang: string;
	popular: boolean;
	title: string;
	viewCount: number;
}

interface MainCategoryProps {
	categories: Category[];
}

const MainCategory: FC<MainCategoryProps> = ({ categories }) => {
	const lang = useSelector((state: RootState) => state.lang.lang);

	return (
		<div className={classes.mainCategory}>
			<Container>
				<div className={classes.inner}>
					<div className={classes.top}>
						<SearchInput2
							text={lang === "RU" ? "Выберите категорию" : "Choose a category"}
							placeholder={lang === "RU" ? "Категория" : "Category"}
						/>
						<div className={classes.list_wrap}>
							<span>{lang === "ENG" ? "Popular:" : "Популярные"}</span>
							<div className={classes.list}>
								{categories
									.filter((value) => value?.lang === lang.toLowerCase())
									.map((el) => (
										<Link key={el?._id} href='/'>
											<p>{el?.title}</p>
										</Link>
									))}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default MainCategory;
