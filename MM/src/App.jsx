import Navbar from "./Components/Navbar/nav";
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
			<Routes>
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</Router>
	);
}

export default App;
