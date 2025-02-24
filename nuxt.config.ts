import {
	GOOGLE_ANALYTICS_ID,
	SUPABASE_KEY,
	SUPABASE_REDIRECT,
	SUPABASE_SERVICE_KEY,
	SUPABASE_URL,
} from "./src/constants"
import { languageToLocale } from "./src/data"
import { LanguageEnum } from "./src/models"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	srcDir: "src",
	css: ["~/assets/css/global.css"],
	modules: [
		"@pinia/nuxt",
		"@nuxtjs/supabase",
		"nuxt-aos",
		"nuxt-windicss",
		"@nuxtjs/i18n",
		"@nuxt/scripts",
		"nuxt-windicss",
		"nuxt-gtag",
	],
	gtag: {
		enabled: process.env.NODE_ENV === "production",
		id: GOOGLE_ANALYTICS_ID,
	},
	supabase: {
		key: SUPABASE_KEY,
		url: SUPABASE_URL,
		redirect: SUPABASE_REDIRECT,
		serviceKey: SUPABASE_SERVICE_KEY,
	},
	i18n: {
		lazy: true,
		langDir: "./locales",
		defaultLocale: languageToLocale[LanguageEnum.ENGLISH],
		locales: [
			{
				code: languageToLocale[LanguageEnum.ENGLISH],
				file: `${languageToLocale[LanguageEnum.ENGLISH]}.ts`,
			},
			{
				code: languageToLocale[LanguageEnum.ARABIC],
				file: `${languageToLocale[LanguageEnum.ARABIC]}.ts`,
				dir: "rtl",
			},
			{
				code: languageToLocale[LanguageEnum.GERMAN],
				file: `${languageToLocale[LanguageEnum.GERMAN]}.ts`,
			},
			{
				code: languageToLocale[LanguageEnum.SPANISH],
				file: `${languageToLocale[LanguageEnum.SPANISH]}.ts`,
			},
			{
				code: languageToLocale[LanguageEnum.FRENCH],
				file: `${languageToLocale[LanguageEnum.FRENCH]}.ts`,
			},
			{
				code: languageToLocale[LanguageEnum.HEBREW],
				file: `${languageToLocale[LanguageEnum.HEBREW]}.ts`,
				dir: "rtl",
			},
			{
				code: languageToLocale[LanguageEnum.PORTUGUESE_BR],
				file: `${languageToLocale[LanguageEnum.PORTUGUESE_BR]}.ts`,
			},
			{
				code: languageToLocale[LanguageEnum.RUSSIAN],
				file: `${languageToLocale[LanguageEnum.RUSSIAN]}.ts`,
			},
		],
	},
	aos: {
		// Global settings:
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
		initClassName: "aos-init", // class applied after initialization
		animatedClassName: "aos-animate", // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 100, // offset (in px) FRENCHom the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 400, // values from 0 to 3000, with step 50ms
		easing: "ease", // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: "top-center", // defines which position of the element regarding to window should trigger the animation
	},
	components: [
		{
			path: "~/components", // will get any components nested in let's say /components/test too
			pathPrefix: false,
		},
	],
	app: {
		head: {
			title: "Lady Dubai",
			link: [
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com",
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossorigin: "",
				},
				{
					href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap",
					rel: "stylesheet",
				},
			],
		},
	},
	devServer: {
		port: 3001,
	},
	compatibilityDate: "2024-09-25",
})
