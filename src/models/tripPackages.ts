export type TripPackage = {
	id: string
	gallery: string[]
	tag: string
	title: string
	subtitle: string
	description: string
	services: PackagesServices[]
	guideLanguages: string[]
	price: {
		usd: number
		ils: number
		aed: number
	}
	downsale_price: {
		usd: number
		ils: number
		aed: number
	}
	nextAvailableDates: {
		from: Date
		to: Date
	}[]
	cancelationPolicy: string[]
	disclaimer: string[]
	// Specific to the package card
	headline: string
}

export enum PackagesServices {
	FLIGHT_TICKETS = "FLIGHT_TICKETS",
	ACCOMMODATION = "ACCOMMODATION",
	ATTRACTION_TICKETS = "ATTRACTION_TICKETS",
	MEALS = "MEALS",
	TRANSFER = "TRANSFER",
	LAUNDRY = "LAUNDRY",
	TOWELS = "TOWELS",
}

export type Attraction = {
	id: string
	banner: string
	videoUrl: string
	title: string
	arabicTitle: string
	subtitle: string
	description: string
	longDescription: string
	asideImg: string
	gallery: string[]
	link: string
	mapSrc: string
	firstText: string
	secondText: string
}

export enum GuideLanguages {
	ENGLISH = "ENGLISH",
	ARABIC = "ARABIC",
	FRENCH = "FRENCH",
	SPANISH = "SPANISH",
	RUSSIAN = "RUSSIAN",
	GERMAN = "GERMAN",
}

export const defaultTripPackage: TripPackage = {
	id: handleRandomId(),
	gallery: [
		"/banner1.jpg",
		"/banner2.jpg",
		"/banner3.jpg",
		"/banner3.jpg",
		"/banner3.jpg",
	],
	title: "The Dubai Experience",
	subtitle: "5 Day All Inclusive Tour",
	headline: "Explore the main turistic attractions of the city.",
	description:
		"Experience the wonders of Dubai in our woman only tour. Visit the landmarks, learn the culture, enjoy nature and pamper yourself with a luxurious spa treament. Visit the best shopping spots, delight yourself with delicious meals, relax and enjoy while we take care of every little detail!",
	guideLanguages: [
		GuideLanguages.ENGLISH,
		GuideLanguages.ARABIC,
		GuideLanguages.FRENCH,
	],
	services: [
		PackagesServices.FLIGHT_TICKETS,
		PackagesServices.ACCOMMODATION,
		PackagesServices.ATTRACTION_TICKETS,
		PackagesServices.MEALS,
		PackagesServices.TRANSFER,
	],
	price: {
		usd: 6499,
		ils: 6499,
		aed: 6499,
	},
	downsale_price: {
		usd: 10399,
		ils: 10399,
		aed: 10399,
	},
	tag: "Open Gallery",
	nextAvailableDates: [
		// 18 jan 2025 to 24 jan 2025
		{
			from: new Date(2025, 0, 18),
			to: new Date(2025, 0, 24),
		},
		// 19 feb 2025 to 24 feb 2025
		{
			from: new Date(2025, 1, 19),
			to: new Date(2025, 1, 24),
		},
		// 29 may 2025 to 03 jun 2025
		{
			from: new Date(2025, 4, 29),
			to: new Date(2025, 5, 3),
		},
		// 29 dec 2025 to 03 jan 2026
		{
			from: new Date(2025, 11, 29),
			to: new Date(2026, 0, 3),
		},
		// 19 feb 2026 to 24 feb 2026
		{
			from: new Date(2026, 1, 19),
			to: new Date(2026, 1, 24),
		},
	],
	cancelationPolicy: [
		"Up to 72 hours after booking - free of charge.",
		"Any cancelation request made 72 hours after booking carries a USD 500 fee",
	],
	disclaimer: [
		"Travelers' insurance and health insurance are not included.",
		"Airline allows 1 carry-on bag up to 8 kg and one luggage up to 20 kg.",
		"Waiver's must be signed when booking this tour.",
		"Extreme Sports insurance is mandatory.",
	],
}

export const packagesServicesList: {
	value: PackagesServices
	icon: string
	label: {
		en: string
		he: string
	}
}[] = [
	{
		value: PackagesServices.FLIGHT_TICKETS,
		icon: "/planeIcon.svg",
		label: {
			en: "Plane tickets",
			he: "כרטיסי טיסה",
		},
	},
	{
		value: PackagesServices.ACCOMMODATION,
		icon: "/accommodationIcon.svg",
		label: {
			en: "Accommodation",
			he: "אירוח",
		},
	},
	{
		value: PackagesServices.ATTRACTION_TICKETS,
		icon: "/attractionIcon.svg",
		label: {
			en: "Attractions",
			he: "אטרקציות",
		},
	},
	{
		value: PackagesServices.MEALS,
		icon: "/mealsIcon.svg",
		label: {
			en: "All Meals",
			he: "כל הארוחות",
		},
	},
	{
		value: PackagesServices.TRANSFER,
		icon: "/transportationIcon.svg",
		label: {
			en: "Transportation to all venues and activities",
			he: "הסעות לכל האטרקציות והפעילויות",
		},
	},
	{
		value: PackagesServices.LAUNDRY,
		icon: "/laundryIcon.svg",
		label: {
			en: "Laudry services",
			he: "שירותי כביסה",
		},
	},
	{
		value: PackagesServices.TOWELS,
		icon: "/towelIcon.svg",
		label: {
			en: "Towels and bed sheets",
			he: "מגבות ומצעים",
		},
	},
]

export const defaultAttraction: Attraction = {
	id: handleRandomId(),
	banner: "/banner1.jpg",
	videoUrl:
		"https://www.youtube.com/embed/XyfYoU1ta3w?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&captions=0",
	title: "The Dubai Experience",
	arabicTitle: "متحف المستقبل",
	subtitle: "5 Day All Inclusive Tour",
	description:
		"The Museum of the Future welcomes people of all ages to see, touch, and shape our shared future. Go on a journey through possible futures and bring hope and knowledge back to the present. The Museum of the Future is a unique initiative and a global destination for inventors and creative professionals, as well as a place of inspiration for the leaders of tomorrow.",
	asideImg: "/banner2.jpg",
	gallery: [
		"/banner1.jpg",
		"/banner2.jpg",
		"/banner3.jpg",
		"/banner3.jpg",
		"/banner3.jpg",
	],
	link: "https://www.museumofthefuture.ae/",
	longDescription: `<p style="font-size: 24px; font-weight: 400;">The Museum of the Future is a landmark devoted to innovative and futuristic ideologies. Located in the Financial District of Dubai, UAE.</p>
<br />
<br />
<div style="font-size: 16px; font-weight: 300;">
<p> A torus-shaped building with windows in the form of a poem about the future, written by Vice President and Prime Minister of the United Arab Emirates and Ruler of Dubai. Founded by the Dubai Future Foundation.</p>
<br />
<p>Designed as an asymmetric torus clad in steel and glass, the Museum of the Future has been recognised by National Geographic as one of 14 most beautiful museums in the world. It's a credit to architect Shaun Killa, who wanted the structure to represent Dubai&rsquo;s vision of the future.</p>
<br />
<p>The museum's striking exterior also stands out thanks to its artistic use of Arabic calligraphy, which functions as glass windows too. Designed by Emirati artist Mattar bin Lahej, they reflect lines of inspirational poetry by HH Sheikh Mohammed bin Rashid Al Maktoum, Vice President and Prime Minister of the UAE and Ruler of Dubai. Of the three quotes enveloping the facade, one translates to: &ldquo;The future belongs to those who can imagine it, design it and execute it. It isn't something you await, but rather create.&rdquo;</p>
<div />`,
	firstText: `<p><span style="font-size: 30px;"><strong><strong>In our experience,</strong></strong></span></p>
<p><span style="font-size: 36px;">What to expect at the Museum of the Future?</span></p>
<p><br></p>
<p>A gateway to the world 50 years from now, the landmark development will contribute to a better humanity and stronger global economy by demonstrating how next-generation solutions &ndash; incorporating everything from artificial intelligence to augmented reality &ndash; can enhance our lives. The main museum experience is split into five chapters:</p>
<p><br></p>
<ol style="list-style-type: decimal;">
    <li>OSS Hope: experience life on a space station, 600km above the Earth.</li>
    <li>The Heal Institute: an augmented- and virtual-reality view of Dubai and the world in 2071.</li>
    <li>Al Waha: &quot;The Oasis&quot; offers soothing experiences and a Sensory Room.</li>
    <li>Tomorrow Today: Learn about the futuristic technologies that already exists today.</li>
    <li>Future Heroes: an interactive play-space designed to inspire children through missions and games.</li>
</ol>
<p><br></p>
<p>Visitors will have the chance to engage with this <a href="https://google.com/" target="_blank" rel="noopener noreferrer"><span style="color: rgb(219, 39, 119);">game-changing technology.</span>&nbsp;</a>Each floor of the museum is designed like an expansive, interactive movie set, brought to life by expert storytellers, technologists and visionary artists. Topics in focus include the future of space travel and living, climate change and ecology, health, wellness and spirituality. Aside from <a href="https://google.com/" target="_blank" rel="noopener noreferrer"><span style="color: rgb(219, 39, 119);">ground-breaking innovations</span></a><span style="color: rgb(219, 39, 119);">,</span> there will also be special workshops and talks from the world&apos;s greatest minds.&nbsp;</p>
<p><br></p>
<p><span style="font-size: 24px;"><em>A place of tolerance, inviting varied cultural, philosophical, social and spiritual outlooks. It&rsquo;s also a place of learning, where we explore the challenges and opportunities shaping our times, finding solutions for a better future.</em></span></p>
<p><br></p>
<p><span style="font-size: 16px;">What&apos;s more, all age groups are welcome here. Children aged three to 10 can enjoy an open-world experience at the Future Heroes environment, a dedicated area designed to encourage little ones to tap into their potential. Guests also ought to make a stop at the viewing deck on level two &ndash; nestled within the museum&apos;s &apos;void&apos;, it provides an up-close experience of the facade&apos;s smooth inner shell, alongside panoramic vistas of Dubai&apos;s fast-paced urban centre.</span></p>`,

	secondText: `<p><span style="font-size: 36px;">Museum of the Future architecture and design</span></p>
<p><br></p>
<p><span style="font-size: 16px;">Designed as an asymmetric torus clad in steel and glass, the Museum of the Future has been recognised by National Geographic as one of 14 most beautiful museums in the world. It&apos;s a credit to architect Shaun Killa, who wanted the structure to represent Dubai&rsquo;s vision of the future.&nbsp;<br><br>The museum&apos;s striking exterior also stands out thanks to its artistic use of Arabic calligraphy, which functions as glass windows too. Designed by Emirati artist Mattar bin Lahej, they reflect lines of inspirational poetry by HH Sheikh Mohammed bin Rashid Al Maktoum, Vice President and Prime Minister of the UAE and Ruler of Dubai. Of the three quotes enveloping the facade, one translates to: &ldquo;The future belongs to those who can imagine it, design it and execute it. It isn&apos;t something you await, but rather create.&rdquo;&nbsp;</span></p>
<p><br></p>
<p><br></p>
<p><img src="https://w0.peakpx.com/wallpaper/327/611/HD-wallpaper-in-pics-museum-of-the-future-opens-to-public-in-dubai.jpg"></p>
<p><br></p>
<p><br></p>
<p><span style="font-size: 36px;">How to get to the Museum of the Future</span></p>
<p><br></p>
<p><span style="font-size: 16px;">You can easily get to the Museum of the Future using the following public transportation options:</span></p>
<p><span style="font-size: 16px;"><br></span></p>
<ul style="list-style-type: disc;">
    <li><span style="font-size: 16px;"><strong>Dubai Metro:</strong> The metro&rsquo;s Red Line has a station just outside the museum. Once you&rsquo;re on the Red Line, get off at the Emirates Towers stop, which is connected to the attraction via a footbridge. It is easy to get to the museum directly from Dubai International Airport (DXB) &ndash; simply make your way to either the Terminal 1 or Terminal 3 Metro stations, and hop aboard the Red Line heading towards EXPO Metro Station.</span></li>
    <li><span style="font-size: 16px;"><strong>Bus:</strong> Routes with a stop at Emirates Towers include 27, 29 and X22. From a popular district like City Walk, the shortest journey to the museum involves taking bus lines 28 to Dubai Mall, followed by 29 to your final destination. From here, it is about a 5-minute walk to the attraction.</li>
</ul>
<br><br>Please visit rta.ae for </span><span style="font-size: 16px;"><u><a href="https://google.com" target="_blank" rel="noopener noreferrer"><span style="color: rgb(219, 39, 119);">detailed public transportation schedules.<br></span></a></u></span><span style="font-size: 16px;"><br><br>Alternatively, If you&apos;re driving, take exit 51 from Sheikh Zayed Rd/E11. Nearby landmarks include Jumeirah Emirates Towers and DIFC Gate Village. Get a preview of your entire trip on Google Maps.&nbsp;</span>
<p><br></p>`,
	mapSrc:
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.5258364553565!2d55.27935787551044!3d25.219208230808558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434ba1c34fa9%3A0x2bfd06ff9c202fc4!2sMuseum%20of%20The%20Future!5e0!3m2!1sen!2sil!4v1723118179576!5m2!1sen!2sil",
}
