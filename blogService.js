import axios from 'axios';

export const getApiUrl = () => {
    return "http://localhost:51677";
}

export const getEmpresa = () => {
    return axios.get(getApiUrl() + "/api/Reserva/RetornaEmpresa")
        .then(
            response => { return response.data; }
        );
}


export const getLocal = () => {
    return axios.get(getApiUrl() + "/api/Reserva/RetornaLocalLista")
        .then(
            response => { return response.data; }
        );
}
export const postCliente = (cliente) => {
    return axios.post(getApiUrl() + "/api/Reserva/SalvaCliente", cliente)
        .then(
            response => { return response.data; }
        );
}