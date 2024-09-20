export const getYoutubeVideoUrlData = (url: string) => {
	const videoId = url.split("embed/")[1].split("?")[0]

	return {
		id: videoId,
		vars: {},
	}
}
