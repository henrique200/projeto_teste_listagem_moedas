import api from "./apiServices";

const GetListCoinsService = async () => {
    try {
        const response = await api.get('v3/ticker/24hr');
        return response.data;

    } catch (err) {
        // console.log('erro', err?.response?.data?.erro);
    }
}

export default GetListCoinsService;