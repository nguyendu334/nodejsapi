import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createAxios } from "../../createInstance";
import { deleteProducts, getAllProducts } from "../../redux/apiRequest";
import "./home.css";
import { loginSuccess } from "../../redux/authSlice";

const HomePage = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const productList = useSelector((state) => state.products.products?.allProducts);
  const dispatch = useDispatch();
  let axiosJWT = createAxios(user, dispatch, loginSuccess);
   
  // const handleOnClickProduct = (id) => {
  //   productList.map((item, index) => {
  //     if (item._id === id) {
  //       dispatch(getAllProducts(item._id));
  //       navigate(`/product/${id}`, { state: item });
  //     }
  //   });
  // };

  const handleDelete = (id) => {
    deleteProducts(user?.accessToken, dispatch, id, axiosJWT);
  }

  useEffect(() => {
    getAllProducts(dispatch, axiosJWT)
  }, [])

  return (
    <main className="home-container">
      <div className="home-title">Product List</div>
      <div className="home-productlist">
        {productList?.map((product) => {
          return (
            <div
              className="product-container"
              // onClick={() => handleOnClickProduct(product._id)}
            >
              <div className="home-product">
              <div className="product-img">
                <img src={product.image} alt="product" />
              </div>
                <div className="prodFuct-title">
                  <div className="product-name"> Name: {product.name}</div>
                  <div className="product-category">Category: {product.category}</div>
                  <div className="product-rating">
                   Rating: {product.avgRating}
                  </div>
                </div>
                <div className="product-price">Price: ${product.price}</div>
                <div className="delete">
                <div className="delete-product" onClick={() => handleDelete(product._id)}> Delete </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default HomePage;

