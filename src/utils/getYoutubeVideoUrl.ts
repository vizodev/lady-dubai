export const getYoutubeVideoUrl = (url: string): string | undefined => {
	if (!url || url.length === 0) return

	// https://www.youtube.com/embed/DR8IvfQK0io?autoplay=1&mute=1&controls=1&showinfo=0&captions=0&loop=1
	const videoId = url.split("embed/")[1].split("?")[0]

	const urlData = new URL(url)
	const urlParams = new URLSearchParams([
		...Array.from(urlData.searchParams.entries()),
	])

	// params
	const newParams = [
		{ key: "autoplay", value: "1" },
		{ key: "playlist", value: videoId },
		{ key: "mute", value: "1" },
		{ key: "controls", value: "1" },
		{ key: "loop", value: "1" },
	]

	newParams.forEach((i) => {
		urlParams.delete(i.key)
		urlParams.append(i.key, i.value)
	})

	return `${urlData.origin}${urlData.pathname}?${urlParams}`
}
