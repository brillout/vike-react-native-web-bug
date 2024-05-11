import ssr from "vike/plugin";
import react from "@vitejs/plugin-react";
import reactNativeWeb from "vite-plugin-react-native-web";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react({}), ssr({}), reactNativeWeb()],
});
