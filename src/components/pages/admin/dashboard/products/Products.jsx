import TableProducts from "./TableProducts.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Review from "./Review.jsx";
import Swal from "sweetalert2";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if(isLoading){
      getAllProducts();
      setIsLoading(false);
    }
      },
      [isLoading])
  const [products, setProducts] = useState([]);
  const [reviewId, setReviewId] = useState(0);
  const [review, setReview] = useState([]);
  const getAllProducts = async () => {
    let productToast;
    try{
       productToast = toast.loading('Loading...');
      const response = await axios.get('/api/products/', {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      });
      setProducts(response.data.message)
      toast.dismiss(productToast)
    }catch (err){
      toast.dismiss(productToast)
      console.log(err);
    }
  };
  const getReviewByIndex = (index, review) => {
    if(index <= 0){
      setReviewId(1)
      setReview(review);
      return;
    }
    setReviewId(index);
    setReview(review);
  };
  const handleDeleteProduct = async id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axios.delete('/api/products/delete', {
          headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`},
          params: {productId: id}
        });
        if (response.data.status === 200) {
          setIsLoading(true);
          await Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          return;
        }
        if (response.data.status === 404) {
          toast.error(response.data.message);
        }

      }
    });
  }
  return (
    <div className="p-20 h-screen w-full">
      {
        isLoading ? (
            <div className=" w-full flex items-center justify-center h-full">
              <div className="w-[40px] border-[4px] animate-spin border-l-blue-600 border-black rounded-full h-[40px]"></div>
            </div>
        ) : (
            <TableProducts products={products} getReviewByIndex={getReviewByIndex} handleDeleteProduct={handleDeleteProduct} />
        )
      }
      {reviewId > 0 ? <Review setReviewId={setReviewId} setReview={setReview} review={review} /> : null}
    </div>
  );
};

export default Products;