class Registro {

    #senha
    #usuario
    #utilidade

    constructor(senha,usuario,utilizade)
    {
        this.#senha = senha
        this.#usuario = usuario
        this.#utilidade = utilizade
    }


    set senha(novasenha) {
        this.#senha = novasenha
    }

    get senha() {
        return this.#senha
    }

    set usuario(novousuario) {
        this.#usuario = novousuario
    }
    get usuario() {
        return this.#usuario
    }

    set utilidade(novutilidade) {
        this.#utilidade = novutilidade
    }
    get utilidade() {
        return this.#utilidade
    }

    toJSON()
    {
        return{
            "senha":this.#senha,
            "usuario":this.#usuario,
            "utilidade":this.#utilidade
        }
    }

    toString()
    {
        return "Senha: " + this.#senha + "\n" +
        "Usuario: " + this.#usuario + "\n" +
        "Utilizada: " + this.#utilidade
    }

}
export{Registro}