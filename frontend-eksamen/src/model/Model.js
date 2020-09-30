class Model {
    constructor(caller) {
        this.caller = caller;
    }

    // Produkter
    getAllProdukter() {
        return this.caller.get("/produkter")
    }
    getNumberOfProdukter(antal) {
        return this.caller.get("/produkter/antal/" + antal)
    }
    getProduktFraId(id) {
        return this.caller.get("/produkter/" + id)
    }
    getSearchResult(ord) {
        return this.caller.get("/produkter/soeg/" + ord)
    }
    // Like produkt
    patchLikeProdukt(id) {
        return this.caller.patch("/produkter/likes/" + id)
    }
    // kommenter på produkt
    postProduktKommentar(data) {
        return this.caller.post("/kommentar/admin", data, {
            withCredentials: true
        })
    }

    // Nyheder
    getAllNyheder() {
        return this.caller.get("/nyheder")
    }

    // Tilmeld Nyhedsbrev
    postNyhedsbrevTilmelding(data) {
        return this.caller.post("/nyhedsbrevtilmelding", data)
    }

    // Kategorier
    getAlleKategorier() {
        return this.caller.get("/kategorier")
    }

    // Kontakt
    postKontakt(data) {
        return this.caller.post("/kontakt", data)
    }

    // bruger
    getBrugerFraId(id){
        return this.caller.get("/bruger/admin/"+ id, {
            withCredentials: true
        })
    }
    putBruger(id,data){
        return this.caller.put("/bruger/admin/"+ id, data, {
            withCredentials: true
        })
    }
    deleteBruger(id){
        return this.caller.delete("/bruger/admin/"+ id, {
            withCredentials: true
        })
    }

    // Login
    postLogin(data) {
        return this.caller.post("/login/login", data, {
            withCredentials: true
        })
    }
    // Sign up
    postSignUp(data) {
        return this.caller.post("/bruger", data)
    }
    // Logged in
    getLoggedin() {
        return this.caller.get("/login/loggedin", {
            withCredentials: true
        })
    }
    // Logud
    getLogud() {
        return this.caller.get("/login/logout", {
            withCredentials: true
        })
    }
}


export default Model;