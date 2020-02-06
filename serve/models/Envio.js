
const Interface = require('../interface/interface');

module.exports = class Envio {
	constructor(empresa){
		this.empresa = new Interface();
		this.nombreEmpresa = empresa
	}

	set setEnvio(empres){
		this.empresa.enviar(empres);
	};
}