import "normalize.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Wrapper from "@/conponents/UI/wrapper/Wrapper";
import { Provider } from "react-redux";
import store from "@/store/store";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<AnimatePresence>
				<Wrapper>
					<Component {...pageProps} />
				</Wrapper>
			</AnimatePresence>
		</Provider>
	);
}
