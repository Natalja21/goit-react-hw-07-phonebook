import axios from "axios";

const instanceContacts = axios.create({
    baseURL: "https://6357db12c26aac906f344722.mockapi.io/api/contacts",
    params: {
        _limit: 12,
    }
});
export const getContactsApi = async() => {
    const {data} = await instanceContacts.get("/");
    return data;
}

export const addContactApi = async(data) => {
    const {data: result} = await instanceContacts.post("/", data);
    return result;
}

export const removeContactApi = async(id) => {
    await instanceContacts.delete(`/${id}`);
    return id;
}