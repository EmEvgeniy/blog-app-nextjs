import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LangState {
	langs: string[];
	lang: string;
	eng: string[];
	ru: string[];
	value: string[];
}

const initialState: LangState = {
	langs: ["ENG", "RU"],
	lang: "ENG",
	ru: ["Катаегории", "Страны", "О нас"],
	eng: ["Categories", "Countries", "About us"],
	value: ["Categories", "Countries", "About us"],
};

export const langSlice = createSlice({
	name: "lang",
	initialState,
	reducers: {
		setLang: (state, action: PayloadAction<string>) => {
			state.lang = action.payload;
			if (state.lang === "RU") {
				state.value = state.ru;
			} else if (state.lang === "ENG") {
				state.value = state.eng;
			}
		},
	},
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;