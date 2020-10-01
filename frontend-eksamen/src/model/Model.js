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
    deleteProdukt(id) {
        return this.caller.delete("/produkter/admin/" + id, {
            withCredentials: true
        })
    }
    postProdukt(data) {
        return this.caller.post("/produkter/admin", data, {
            withCredentials: true
        })
    }
    putProdukt(id, data) {
        return this.caller.put("/produkter/admin/" + id, data, {
            withCredentials: true
        })
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
    deleteProduktKommentar(id) {
        return this.caller.delete("/kommentar/admin/"+id, {
            withCredentials: true
        })
    }
    putProduktKommentar(id,data) {
        return this.caller.put("/kommentar/admin/"+id, data, {
            withCredentials: true
        })
    }


    // Ingredienser
    postIngredienser(id, data) {
        return this.caller.post("/produktingrediens/admin/" + id, data, {
            withCredentials: true
        })
    }
    deleteIngredienser(pid, iid) {
        return this.caller.delete("/produktingrediens/admin/" + pid + "/" + iid, {
            withCredentials: true
        })
    }

    // Nyheder
    getAllNyheder() {
        return this.caller.get("/nyheder")
    }
    getNyhedFraId(id) {
        return this.caller.get("/nyheder/"+id)
    }
    postNyhed(data) {
        return this.caller.post("/nyheder/admin", data, {
            withCredentials: true
        })
    }
    deleteNyhed(id) {
        return this.caller.delete("/nyheder/admin/" + id, {
            withCredentials: true
        })
    }
    putNyhed(id,data) {
        return this.caller.put("/nyheder/admin/" + id, data, {
            withCredentials: true
        })
    }
    getSeogtNyhed(ord){
        return this.caller.get("/nyheder/soeg/" + ord)
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
    getBrugerFraId(id) {
        return this.caller.get("/bruger/admin/" + id, {
            withCredentials: true
        })
    }
    putBruger(id, data) {
        return this.caller.put("/bruger/admin/" + id, data, {
            withCredentials: true
        })
    }
    deleteBruger(id) {
        return this.caller.delete("/bruger/admin/" + id, {
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