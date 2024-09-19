export const isYoutubeUrl = (url?: string): boolean => {
	if (!url) return false

	const ids = ["youtube.com", "youtu.be"]

	return ids.reduce((acc, i) => acc || url.includes(i), false)
}
