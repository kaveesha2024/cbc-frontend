import { useParams } from "react-router";

const ProductOverView = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            productOverView
        </div>
    );
};
export default ProductOverView;