class LoginDAO{
    #login

    constructor()
    {
        const listaArmazenada = this.recuperar()
        if(listaArmazenada)
        {
            this.#login = listaArmazenada
        }
        else
        {
            this.#login = []
        }
    }

    get login()
    {
        return this.#login
    }

    set login(novologin)
    {
        this.#login = novologin
    }

    gravar()
    {
        localStorage.setItem("login", JSON.stringify(this.#login))
    }

    recuperar()
    {
        return JSON.parse(localStorage.getItem("login")) 
    }

    adicionar(login)
    {
        this.#login.push(login)
    }
}

export {LoginDAO}