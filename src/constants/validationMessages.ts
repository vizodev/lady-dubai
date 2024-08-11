export const validationMessages = {
	shouldBeString: "It should be a text",
	emptyField: "This field is required",
	onlyNumbers: "It should be a number",
	onlySpecificDigits: (length: number) => `It should have ${length} digits`,
	onlySpecificCharacters: (length: number) =>
		`It should have ${length} characters`,
	minDigits: (length: number) => `Minimum ${length} digits`,
	validEmail: "Enter a valid email address",
	invalidCep: "Enter a valid CEP",
	minTodayDate: "It should be at least today",
	maxTodayDate: "It should be maximum today",
}
