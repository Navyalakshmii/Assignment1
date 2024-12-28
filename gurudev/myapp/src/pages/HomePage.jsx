import { useEffect, useState } from 'react'; 
import ProductList from '../components/ProductList'; 
function HomePage() { 
const [products, setProducts] = useState([]); 
useEffect(() => { 
fetch('https://fakestoreapi.com/products') 
.then(response => response.json()) 
.then(data => setProducts(data)); 
}, []); 
return ( 
<div> 
<h1>Product Dashboard</h1> 
<ProductList products={products} /> 
</div> 
); 
} 
export default HomePage; 