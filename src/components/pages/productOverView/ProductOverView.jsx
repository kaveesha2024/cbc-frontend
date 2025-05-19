import { useParams } from "react-router";
import NavBar from "../../navigationBar/NavBar.jsx";
const ProductOverView = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <NavBar />
            <div className="w-full h-screen bg-accent ">

            </div>
        </div>
    );
};
export default ProductOverView;