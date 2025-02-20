export const createDateIgnoringTimezone = (date: Date | string) => {
	const initializedDate = new Date(date)

	// Extract UTC components
	const year = initializedDate.getUTCFullYear()
	const month = initializedDate.getUTCMonth() // Note: Months are 0-based
	const day = initializedDate.getUTCDate()
	const hours = initializedDate.getUTCHours()
	const minutes = initializedDate.getUTCMinutes()
	const seconds = initializedDate.getUTCSeconds()

	// Create a new Date object treating the extracted UTC values as local time
	return new Date(year, month, day, hours, minutes, seconds)
}
