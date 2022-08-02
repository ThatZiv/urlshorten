import axios from "axios";

export default {
    api: axios.create({ baseURL: "https://s.zavaar.net/api" }),
    create: function (url) {
        return this.api.post(`/create?url=${url}`)
            .then(response => response.data)
    },
    get: function (id) {
        return this.api.get(`/get/${id}`)
            .then(response => response.data)
    },
};