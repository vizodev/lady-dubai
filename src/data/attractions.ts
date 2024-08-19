import { BANNER1_IMAGE, BANNER2_IMAGE, BANNER3_IMAGE } from "~/constants"
import type { Attraction } from "~/models"

export const defaultAttraction: Attraction = {
	id: Math.random().toString(36).substring(7),
	banner: BANNER1_IMAGE,
	videoUrl:
		"https://www.youtube.com/embed/XyfYoU1ta3w?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&captions=0",
	title: "The Dubai Experience",
	arabicTitle: "متحف المستقبل",
	subtitle: "5 Day All Inclusive Tour",
	description:
		"The Museum of the Future welcomes people of all ages to see, touch, and shape our shared future. Go on a journey through possible futures and bring hope and knowledge back to the present. The Museum of the Future is a unique initiative and a global destination for inventors and creative professionals, as well as a place of inspiration for the leaders of tomorrow.",
	asideImg: BANNER2_IMAGE,
	gallery: [
		BANNER1_IMAGE,
		BANNER2_IMAGE,
		BANNER3_IMAGE,
		BANNER3_IMAGE,
		BANNER3_IMAGE,
	],
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
