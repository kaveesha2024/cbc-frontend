import UpdateForm from "./UpdateForm.jsx";
import {useLocation, useNavigate} from "react-router";
import {useState} from "react";
import {imageUpload} from "../../../../../utility/promise/imageUploadPromise.js";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateProduct = () => {
    const navigate = useNavigate();
    const previousDetails = useLocation().state;
    const [inputDetails, setInputDetails] = useState({
        name: previousDetails.name,
        brand: previousDetails.brand,
        description: previousDetails.description.join(", "),
        discount: previousDetails.discounts,
        category: previousDetails.category,
        labelledPrice: previousDetails.labelledPrice,
        price: previousDetails.price,
        quantity: previousDetails.quantity,
        images: previousDetails.images,
    })

    const handleInput = event => {
        const {name, value} = event.target;
        setInputDetails({
            ...inputDetails,
            [name]: value,
        })
    }
    const handleSubmit = async (files) => {
        const updateToast = toast.loading("Loading...");
        let PublicUrls = previousDetails.images;
        if (files.length > 0) {
            const promiseArray = [];
            for (let i = 0; i < files.length; i++) {
                promiseArray[i] = imageUpload(files[i]);
            }
            try {
                PublicUrls = await Promise.all(promiseArray);
            }catch (err) {
                toast.dismiss(updateToast);
                console.log(err)
            }
        }
        const new_discount = inputDetails.labelledPrice - inputDetails.price;
        const req = {
            name: inputDetails.name,
            brand: inputDetails.brand,
            description: inputDetails.description,
            category: inputDetails.category,
            labelledPrice: inputDetails.labelledPrice,
            price: inputDetails.price,
            quantity: inputDetails.quantity,
            discounts: new_discount,
            images: PublicUrls,
        }
        try {
            const response = await axios.put('/api/products/update', req,{ headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                params : {
                    productId: previousDetails.productId
                }
            });
            if (response.data.status === 200) {
                toast.dismiss(updateToast);
                navigate("/dashboard/products");
            }
        }catch (err) {
            toast.dismiss(updateToast);
            console.log(err)
        }
    };

    return (
        <div>
            <UpdateForm previousDetails={previousDetails} handleInput={handleInput} handleSubmit={handleSubmit} />
        </div>
    );
};

export default UpdateProduct;