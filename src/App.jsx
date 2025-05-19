import { useEffect, useState } from 'react';
import Hero from './components/hero/Hero';
import HomeProductContainer from './components/homeProductContainer/HomeProductContainer';
import NavBar from './components/navigationBar/NavBar.JSX';
import axios from 'axios';
import toast from 'react-hot-toast';
import Loader from './components/loader/Loader.jsx';

const App = () => {
    const [products, setProducts] = useState([]);
    const [promise, setPromise] = useState('pending');
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        try {
            const response = await axios.get('api/products');
            setPromise('fulfilled');
            setProducts(response.data.message);
        } catch (error) {
            toast.error('Error while fetching products');
            setPromise('rejected');
        }
    };

    return (
        <div>
            {promise === 'pending' ? (
                <Loader />
            ) : promise === 'rejected' ? (
                <div>
                    <NavBar />
                    <Hero />
                    <div>
                        <h1>Error while fetching products</h1>
                    </div>
                </div>
            ) : (
                <div>
                    <NavBar />
                    <Hero />
                    <HomeProductContainer products={products} />
                </div>
            )}
        </div>
    );
};
export default App;
