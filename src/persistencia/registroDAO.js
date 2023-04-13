class RegistroDAO{
    #registro

    constructor()
    {
        const listaArmazenada = this.recuperar()
        if(listaArmazenada)
        {
            this.#registro = listaArmazenada
        }
        else
        {
            this.#registro = []
        }
    }

    get registro ()
    {
        return this.#registro
    }

    set registro(novo)
    {
        this.#registro = novo
    }

    gravar()
    {
        localStorage.setItem("registro", JSON.stringify(this.#registro))
    }

    recuperar()
    {
        return JSON.parse(localStorage.getItem("registro")) 
    }

    adicionar(registro)
    {
        this.#registro.push(registro)
    }
}

export {RegistroDAO}