const Empresa = require('../interface/interface');

module.exports = class Servientrega extends Empresa {
	
	constructor(empresa){
		this.empresa = empresa,
		this.tiempo = "8 dias"
	}

	enviar(empresa){

		return data = {
			empresa: empresa,
			tiempo: this.tiempo
		}
	}
}