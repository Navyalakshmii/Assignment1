function ProductList({ products }) { 
    return ( 
    <div> 
    {products.map(product => ( 
            <div key={product.id} className="product-card"> 
              <img src={product.image} alt={product.title} /> 
              <h3>{product.title}</h3> 
              <p>{product.category}</p> 
              <p>${product.price}</p> 
            </div> 
          ))} 
        </div> 
      ); 
    } 
     
    export default ProductList;