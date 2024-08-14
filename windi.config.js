import { defineConfig } from "windicss/helpers"

export default defineConfig({
	includes: ["./src", "**/*.vue", "**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
	theme: {
		extend: {
			colors: {
				pink: {
					100: "#FFC1D3",
					500: "#F14990",
					600: "#A81955",
					700: "#540d2b",
				},
				brown: {
					700: "#272223",
				},
				blue: {
					200: "#749BFF",
				},
			},
			fontFamily: {
				serif: ["Roboto Serif"],
				"roboto-serif": ["Roboto Serif", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},
			screens: {
				"3xl": "1920px",
			},
		},
	},
	shortcuts: {
		"btn-primary":
			"text-white font-inter font-bold tracking-[0.02] bg-pink-500 px-5 py-3 rounded-xl shadow-xl hover:(bg-pink-600) sm:text-[18px] xl:(text-[20px] px-6 py-4) 2xl:text-[24px]",
		"btn-dark":
			"text-white font-bold font-inter text-sm px-3 py-2 rounded-xl bg-pink-600 hover:(bg-pink-700)",
		"btn-rounded":
			"w-max border border-pink-600 px-3 py-2 text-pink-600 font-bold text-[14px] leading-tight font-inter rounded-xl hover:(bg-pink-300)",
	},
})
