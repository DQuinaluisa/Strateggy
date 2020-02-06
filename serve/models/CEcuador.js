const Empresa = require('../interface/interface');

module.exports = class CEcuador extends Empresa {
	constructor(empresa,tiempo){
		this.empresa = empresa,
		this.tiempo = tiempo
	}

	enviar(empresa){

		return data = {
			empresa: empresa,
			tiempo: this.tiempo
		}
	}
}