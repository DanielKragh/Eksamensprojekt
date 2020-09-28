class Model {
    constructor(caller) {
        this.caller = caller;
    }

    // Produkter
    getAllProdukter() {
        return this.caller.get("/produkter")
    }
    getNumberOfProdukter(antal) {
        return this.caller.get("/produkter/antal/"+antal)
    }
    // Nyheder
    getAllNyheder() {
        return this.caller.get("/nyheder")
    }

    // Tilmeld Nyhedsbrev
    postNyhedsbrevTilmelding(data){
        return this.caller.post("/nyhedsbrevtilmelding", data)
    }







    getEventById(id) {
        return this.caller.get("/event/" + id)
    }

    createEvent(data) {
        let formData = new FormData();
        formData.append("event", JSON.stringify(data.event));
        formData.append("billede", data.billede);
        return this.caller.post("/event/admin", formData, {
            withCredentials: true
        })
    }

    updateEvent(id, data) {
        let formData = new FormData();
        formData.append("event", JSON.stringify({
            titel: data.titel,
            beskrivelse: data.titel,
            dato: data.dato,
            distance: data.distance,
            pris: data.pris,
            antalpladser: data.antalpladser,
            region: data.region,
        }));
        formData.append("billede", data.billede);
        return this.caller.put("/event/admin/" + id, formData, {
            withCredentials: true
        })
    }

    deleteEvent(id) {
        return this.caller.delete("/event/admin/" + id, {
            withCredentials: true
        })
    }

    getAllEventRegistration() {
        return this.caller.get("/eventtilmelding")
    }

    createEventTilmelding(data) {
        return this.caller.post("/eventtilmelding", data)
    }
    deleteEventTilmelding(id) {
        return this.caller.delete("/eventtilmelding/admin/" + id, {
            withCredentials: true
        })
    }

    // Newsletter
    getAllNyhedsTilmeldinger() {
        return this.caller.get("/nyhedsbrevtilmelding")

    }
    createNyhedsTilmelding(data) {
        return this.caller.post("/nyhedsbrevtilmelding", data)
    }
    deleteNyhedsTilmelding(id) {
        return this.caller.delete("/nyhedsbrevtilmelding/admin/" + id, {
            withCredentials: true
        })
    }

    // Sponsor
    getAllSponsorer() {
        return this.caller.get("/sponsor")
    }

    createSponsor(data) {
        let formData = new FormData();
        formData.append("sponsor", JSON.stringify(data.sponsor));
        formData.append("logo", data.logo);
        return this.caller.post("/sponsor/admin", formData, {
            withCredentials: true
        })
    }

    updateSponsor(id, data) {
        let formData = new FormData();
        formData.append("sponsor", JSON.stringify({
            navn: data.navn,
            sponsorkategori: data.sponsorkategori
        }));
        formData.append("logo", data.logo);
        return this.caller.put("/sponsor/admin/" + id, formData, {
            withCredentials: true
        })
    }

    deleteSponsor(id) {
        return this.caller.delete("/sponsor/admin/" + id, {
            withCredentials: true
        })
    }

    getAllSponsorKategories() {
        return this.caller.get("/sponsorkategori")
    }

    // Regions
    getAllRegions() {
        return this.caller.get("/region")
    }

    getRegionById(id) {
        return this.caller.get("/region/" + id)
    }

    // Board members
    getAllBoardMembers() {
        return this.caller.get("/bestyrelse")
    }

    getBoardMemberById(id) {
        return this.caller.get("/bestyrelse/" + id)
    }

    createBoardMember(data) {
        let formData = new FormData();
        formData.append("bestyrelse", JSON.stringify(data.bestyrelse));
        formData.append("billede", data.billede);
        return this.caller.post("/bestyrelse/admin", formData, {
            withCredentials: true
        })
    }

    updateBoardMember(id, data) {
        let formData = new FormData();
        formData.append("bestyrelse", JSON.stringify({
            fornavn: data.fornavn,
            efternavn: data.efternavn,
            email: data.email,
            beskrivelse: data.beskrivelse,
            beskrivelsespost: data.beskrivelsespost,
        }));
        formData.append("billede", data.billede);
        return this.caller.put("/bestyrelse/admin/" + id, formData, {
            withCredentials: true
        })
    }

    deleteBoardMember(id) {
        return this.caller.delete("/bestyrelse/admin/" + id, {
            withCredentials: true
        })
    }

    getAllBoardMemberPositions() {
        return this.caller.get("/bestyrelsespost")
    }

    getBoardMemberPositionById(id) {
        return this.caller.get("/bestyrelsespost/" + id)
    }

    // Contact
    getAllContacts() {
        return this.caller.get("/kontakt");
    }

    createMessage(data) {
        return this.caller.post("/kontakt", data);
    }

    updateMessage(id, data) {
        return this.caller.put("/kontakt/admin/" + id, data, {
            withCredentials: true
        });
    }

    deleteMessage(id) {
        return this.caller.delete("/kontakt/admin/" + id, {
            withCredentials: true
        });

    }

    // About page data
    getAboutData() {
        return this.caller.get("/omos")
    }
    updateAboutData(id, data) {
        let formData = new FormData();
        formData.append("omos", JSON.stringify({
            overskrift: data.overskrift,
            beskrivelse: data.beskrivelse,
        }));
        formData.append("billede", data.billede);
        return this.caller.put("/omos/admin/" + id, formData, {
            withCredentials: true
        })

    }

    // Simple search result
    getSimpleSearchResult(word) {
        return this.caller.get("/event/soeg/" + word)
    }

    // Advanced search
    getAdvancedSearchResult(s) {
        return this.caller.get(`/event/soegavanceret?titel=${s.titel}&distance_min=${s.distance_min}&distance_max=${s.distance_max}&pris_min=${s.pris_min}&pris_max=${s.pris_max}&region=${s.region}`)
    }

    // Login
    login(data) {
        return this.caller.post("/login/login", data, {
            withCredentials: true
        })
    }

    // Logout
    logout() {
        return this.caller.get("/login/logout", {
            withCredentials: true
        })
    }

    // Loggedin
    loggedin() {
        return this.caller.get("/login/loggedin", {
            withCredentials: true
        })

    }


}


export default Model;