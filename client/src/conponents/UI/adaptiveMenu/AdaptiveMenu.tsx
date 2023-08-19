import React, { FC, useState, KeyboardEvent, MouseEvent } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SortIcon from "@mui/icons-material/Sort";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store"; // Подставьте путь к вашему корневому редюсеру
import SearchInput from "../searchInput/SearchInput";
import { setLang } from "@/store/slices/langSlice";
import { ListSubheader } from "@mui/material";

const AdaptiveMenu: FC = () => {
	const [state, setState] = useState<{ left: boolean }>({
		left: false,
	});
	const dispatch: AppDispatch = useDispatch();
	const list1 = useSelector((state: RootState) => state.lang.value);
	const list2 = useSelector((state: RootState) => state.lang.langs);

	const toggleDrawer =
		(anchor: string, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
			if (
				event.type === "keydown" &&
				((event as KeyboardEvent).key === "Tab" ||
					(event as KeyboardEvent).key === "Shift")
			) {
				return;
			}

			setState({ ...state, [anchor]: open });
		};

	const listItems: string[] = list1; // Замените это на ваш реальный массив

	const list = (anchor: string) => (
		<Box
			sx={{
				width: anchor === "top" || anchor === "bottom" ? "auto" : 200,
			}}
			role='presentation'>
			<List>
				<ListSubheader>
					<SearchInput />
				</ListSubheader>
				{listItems.map((text, index) => (
					<ListItem
						key={text}
						disablePadding
						onClick={toggleDrawer(anchor, false)}
						onKeyDown={toggleDrawer(anchor, false)}>
						<ListItemButton>
							<ListItemText primary={text} />
							<Divider />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<List>
				{list2.map((el: string, index) => (
					<ListItem key={el} disablePadding>
						<ListItemButton>
							<ListItemText
								primary={el}
								onClick={() => dispatch(setLang(el))}
							/>
							<Divider />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<div>
			{(["left"] as const).map((anchor) => (
				<React.Fragment key={anchor}>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<SortIcon
							fontSize='large'
							onClick={toggleDrawer(anchor, true)}
							sx={{ transform: "rotateX(180deg)", cursor: "pointer" }}
						/>
					</Box>
					<Drawer
						anchor={anchor as "left"}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
};

export default AdaptiveMenu;
