import axios from "axios";

export const getPhotos = async () => {
    try {
        const resp = await axios("https://jsonplaceholder.typicode.com/photos");
        return resp.data;
    } catch (error) {
        console.log(error);
    }
};
