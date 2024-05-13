import ssr from "vike/plugin";
import react from "@vitejs/plugin-react";
import reactNativeWeb from "vite-plugin-react-native-web";
import { defineConfig } from "vite";
import { cjsInterop } from "vite-plugin-cjs-interop";

export default defineConfig({
	plugins: [react({}), ssr({}), reactNativeWeb(), cjsInterop({
    dependencies: [
      "inline-style-prefixer",
      "inline-style-prefixer/**"
    ]
  })],
  ssr: {
    optimizeDeps: {
      include: ['react-native-web']
    }
  }
});
