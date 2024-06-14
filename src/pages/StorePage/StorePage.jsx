import { useEffect, useState } from "react";
import "./StorePage.scss";
import { getPhotos } from "../../api/getPhotos.api";
import { Card } from "../../components/Card/Card";

export const StorePage = () => {
    const [photosArr, setPhotosArr] = useState([]);

    const getAllPhotos = async () => {
        try {
            const resp = await getPhotos();
            setPhotosArr(resp);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(photosArr);
    useEffect(() => {
        getAllPhotos();
    }, []);

    return (
        <div className="container grid grid__col-4">
            {photosArr.map((el) => (
                <Card imgUrl={el.url} title={el.title} />
            ))}
        </div>
    );
};
