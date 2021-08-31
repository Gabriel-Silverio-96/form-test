import axios from "axios";

const baseUrl = axios.create({
    baseURL: "https://servicodados.ibge.gov.br/api/v1"
})

export default baseUrl;