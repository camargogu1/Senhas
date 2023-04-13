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