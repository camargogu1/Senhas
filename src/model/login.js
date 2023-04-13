class LoginM
{
    #login
    #senha

    constructor(login,senha)
    {
        this.#login = login
        this.#senha = senha
    }

    set login(login)
    {
        this.#login = login
    }

    get login()
    {
        return this.#login
    }

    set senha(senha)
    {
        this.#senha = senha
    }

    get senha()
    {
        return this.#senha
    }

    toJSON()
    {
        return{
            "login":this.#login,
            "senha":this.#senha
        }
    }

    toString()
    {
        return "login " + this.#login + "\n" +
        "senha " + this.#senha + "\n"
    }
}

export{LoginM}