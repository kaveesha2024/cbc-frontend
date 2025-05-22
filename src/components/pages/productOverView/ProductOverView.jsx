import { useParams } from 'react-router';
import NavBar from '../../navigationBar/NavBar.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import ProductOverViewPage from './ProductOverViewPage.jsx';
import Loader from '../../loader/Loader.jsx';
const ProductOverView = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [promise, setPromise] = useState('pending');
    const [product, setProduct] = useState({});
    useEffect(() => {
        if (isLoading) {
            getProductDetailsById();
            setIsLoading(false);
        }
    }, [isLoading]);
    const getProductDetailsById = async () => {
        try {
            const res = await axios.get(`/api/products/product/?productid=${id}`);
            if (res.data.status === 200) {
                setPromise('fulfilled');
                setProduct(res.data.message);
                return;
            }
            if (res.data.status === 404) {
                setPromise('rejected');
                toast.error(res.data.message);
                return;
            }
            if (res.data.status === 401) {
                setPromise('rejected');
                toast.error(res.data.message);
            }
        } catch (err) {
            console.log(err);
            setPromise('rejected');
            toast.error('Please Try Again');
        }
    };
    return (
        <div>
            {promise === 'fulfilled' ? (
                <ProductOverViewPage product={product} />
            ) : (
                <div className="w-full h-screen flex justify-center items-center">
                    <Loader />
                </div>
            )}
        </div>
    );
};
export default ProductOverView;
