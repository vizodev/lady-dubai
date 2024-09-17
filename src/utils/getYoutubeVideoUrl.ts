export const getYoutubeVideoUrl = (url?: string) => {
	if (!url || url.length === 0) return

	// https://www.youtube.com/embed/DR8IvfQK0io?autoplay=1&mute=1&controls=1&showinfo=0&captions=0&loop=1
	const videoId = url.split("embed/")[1].split("?")[0]

	return `https://www.youtube.com/embed/${videoId}?playlist=${videoId}&autoplay=1&mute=1&controls=1&showinfo=0&captions=0&loop=1`
}
