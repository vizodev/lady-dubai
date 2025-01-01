import type { PlayerVars } from "@vue-youtube/core"

export const getYoutubeVideoUrlData = (url: string) => {
	const videoId = url.split("embed/")[1].split("?")[0]

	const urlData = new URL(url)
	const urlParams = new URLSearchParams([
		...Array.from(urlData.searchParams.entries()),
	])

	// params
	const newParams = [
		{ key: "autoplay", value: "1" },
		{ key: "mute", value: "1" },
		{ key: "controls", value: "0" },
		{ key: "loop", value: "1" },
		{ key: "rel", value: "0" },
		{ key: "fs", value: "1" },
		{ key: "modestbranding", value: "1" },
	]

	newParams.forEach((i) => {
		urlParams.delete(i.key)
		urlParams.append(i.key, i.value)
	})

	/*
	For some reason, this param is added automatically
	and we have to remove it manually to make the loop works properly
	*/
	urlParams.delete("playlist")

	return {
		id: videoId,
		vars: Object.fromEntries(urlParams.entries()) as PlayerVars,
	}
}
