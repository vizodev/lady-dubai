export const validationMessages = {
	shouldBeString: "Precisa ser um texto",
	emptyField: "Campo obrigatório",
	onlyNumbers: "Somente números",
	onlySpecificDigits: (length: number) => `Somente ${length} dígitos`,
	onlySpecificCharacters: (length: number) => `Somente ${length} caracteres`,
	minDigits: (length: number) => `${length} caracteres no mínimo`,
	validEmail: "Insira um email válido",
	invalidCep: "CEP inválido",
	minTodayDate: "A data precisa ser depois de hoje",
	maxTodayDate: "A data precisa ser antes de hoje",
}
