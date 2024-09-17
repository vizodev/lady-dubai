export const isYoutubeUrl = (url?: string): boolean => {
	if (!url) return false

	return url.includes("youtube.com")
}
