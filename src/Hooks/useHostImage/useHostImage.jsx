import axios from 'axios';

export default async function useHostImage(image) {
    const formData = new FormData();
    formData.append('image', image);

    try {
        const imageRequest = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_APIKEY}`, formData);
        return imageRequest.data.data.display_url;
    } catch (error) {
        console.log(error.message)
    }
}
