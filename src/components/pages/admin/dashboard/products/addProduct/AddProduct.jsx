import ProductForm from '../productForm/ProductForm.jsx';
import { useState } from 'react';
import { imageUpload } from '../../../../../utility/promise/imageUploadPromise.js';
import axios from 'axios';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        name: '',
        brand: '',
        descriptionStatement: '',
        alterNames: '',
        features: '',
        category: '',
        labelledPrice: 0,
        price: 0,
        quantity: 0,
        images: [],
    });
    const [errState, setErrState] = useState({
        name: '',
        brand: '',
        descriptionStatement: '',
        features: '',
        category: '',
        labelledPrice: '',
        price: '',
        quantity: '',
        images: '',
    });
    const handleInput = async (event) => {
        const { name, value } = event.target;
        setInputData({
            ...inputData,
            [name]: value,
        });
    };
    console.log(inputData.features);
    const handleSubmit = async (images) => {
        if (
            images.length === 0 ||
            inputData.name === '' ||
            inputData.brand === '' ||
            inputData.features === '' ||
            inputData.category === '' ||
            inputData.labelledPrice === '' ||
            inputData.price === '' ||
            inputData.quantity === ''
        ) {
            toast.error('Please Fill All The Fields');
            return;
        }
        const handleSubmitToast = toast.loading('Loading...');
        const feature = inputData.features.split(', ');
        const alterNames = inputData.alterNames.split(', ');
        const discount = inputData.labelledPrice - inputData.price;
        const promiseArray = [];
        for (let i = 0; i < images.length; i++) {
            promiseArray[i] = imageUpload(images[i]);
        }
        try {
            const publicUrls = await Promise.all(promiseArray);

            const req = {
                name: inputData.name,
                brand: inputData.brand,
                features: feature,
                alterNames,
                category: inputData.category,
                labelledPrice: inputData.labelledPrice,
                price: inputData.price,
                quantity: inputData.quantity,
                discounts: discount,
                images: publicUrls,
            };
            try {
                const response = await axios.post('/api/products/add', req, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                if (response.data.status === 200) {
                    toast.dismiss(handleSubmitToast);
                    navigate('/dashboard/products');
                }
            } catch (err) {
                toast.dismiss(handleSubmitToast);
                toast.error(err);
            }
        } catch (err) {
            toast.dismiss(handleSubmitToast);
            toast.error(err);
            console.log(err);
        }
    };
    return (
        <div>
            <ProductForm
                handleSubmit={handleSubmit}
                handleInput={handleInput}
                errState={errState}
            />
        </div>
    );
};

export default AddProduct;
