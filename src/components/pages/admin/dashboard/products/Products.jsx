import TableProducts from "./TableProducts.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Review from "./Review.jsx";

const Products = () => {
  useEffect(() => {
    getAllProducts();
  }, []);
  const [products, setProducts] = useState([]);
  const [reviewId, setReviewId] = useState(0);
  const [review, setReview] = useState([]);
  const getAllProducts = async () => {
    let productToast;
    try{
       productToast = toast.loading('Loading...');
      const response = await axios.get('/api/products/');
      setProducts(response.data)
      toast.dismiss(productToast)
    }catch (err){
      toast.dismiss(productToast)
      console.log(err);
    }
  };
  const getReviewByIndex = (index, review) => {
    if(index === 0){
      setReviewId(1)
      return;
    }
    setReviewId(index);
    setReview(review);
  };
  console.log(products);
  return (
    <div className="p-20 h-screen w-full">
      <TableProducts products={products} getReviewByIndex={getReviewByIndex} />
      {reviewId > 0 ? <Review setReviewId={setReviewId} review={review} /> : null}
    </div>
  );
};

export default Products;