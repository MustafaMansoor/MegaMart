import { useNavigate, useParams, useLocation } from 'react-router-dom';
import './product.css';
import './Content/input.css';
import SlideShow from './slideShow/slideShow';
import Input from './Content/input';
import ItemName from './Content/itemName';
import Description from './Content/description';
import Price from './Content/price';
import ADDCARTBTN from './Content/addToCartBtn';
const Product = () => {
  const { id } = useParams();
  const location = useLocation();
  const images = JSON.parse(new URLSearchParams(location.search).get('images'));
  const track = document.getElementById('image-track');
  const description = new URLSearchParams(location.search).get('description');
  const quantity = new URLSearchParams(location.search).get('quantity');
  const name = new URLSearchParams(location.search).get('itemName');
  const price = new URLSearchParams(location.search).get('price');

  return (
    <div className="product-container" >
      <div className="image-container">
        <SlideShow images={images} />
      </div>
      <div className="details-container">
        <ItemName itemName={name}/>
       <Input/>
       <Description description={description}/>
       <Price price={price}/>
       <ADDCARTBTN/>
      </div>
    </div>
  );
};

export default Product;
