import { useState } from 'react'; 
 
function AddProductPage() { 
  const [form, setForm] = useState({ 
    name: '', 
    image: null, 
    price: '', 
    category: '' 
  }); 
 
  const handleChange = (e) => { 
    const { name, value, files } = e.target; 
    if (name === 'image') { 
      setForm({ ...form, image: files[0] }); 
    } else { 
      setForm({ ...form, [name]: value }); 
    } 
  }; 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    // Data submission logic can go here 
    console.log(form); 
  }; 
 
  return ( 
    <div> 
      <h1>Add Product</h1> 
      <form onSubmit={handleSubmit}> 
        <input 
          type="text" 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
          placeholder="Product Name" 
        /> 
        <input 
          type="file" 
          name="image" 
          onChange={handleChange} 
        /> 
<input 
type="text" 
name="price" 
value={form.price} 
onChange={handleChange} 
placeholder="Price" 
/> 
<input 
type="text" 
name="category" 
value={form.category} 
onChange={handleChange} 
placeholder="Category" 
/> 
<button type="submit">Add Product</button> 
</form> 
</div> 
); 
} 
export default AddProductPage;