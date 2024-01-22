import Navbar from "./Components/Navbar/nav";
import Items from "./Components/Items/index";
import Product from "./Components/Items/Product/product";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Cart from "./Components/Tabs/cart";
function App() {
	return (
		
		<Router>
			<Navbar />
			<div style={{marginTop: "100px"}}>
			<Routes>
				<Route path="/" element={<Items />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/product/:id" element={<Product />} />
			</Routes>
			</div>
		</Router>
	);
}

export default App;
