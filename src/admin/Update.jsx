import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from 'react-toastify';
import {Link} from 'react-router-dom';

const Update = () =>{
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7555/model')
        .then((res) => res.json())
        .then((data) => setProduct(data));
    },[]);

    const DeleteItems = (id) => {
        fetch(`http://localhost:7555/model/${id}`, {
            method: 'DELETE',
        })
        .then((res) => res.json())
        .then(() => {
            toast.error("Product Deleted Successfully");
            setProduct((prevproduct) => prevproduct.filter(item => item._id !== id));
        })
    }}

return (
    <>
    <div>Update</div>
    <ToastContainer />
    <table>
        <thead>
            <tr>
                <th style={{paddingRight: '20px'}}>Title</th>
                <th style={{paddingRight: '20px'}}>Image</th>
                <th style={{paddingRight: '20px'}}>Price</th>
                <th style={{paddingRight: '20px'}}>Description</th>
            </tr>
        </thead>
        <tbody>
            {product.map((item) => (
            <tr key={item._id}>
                <td>{item.title}</td>
                <td><img src={item.image} alt={item.title} width="100" height="100"/></td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                <button onClick={() => DeleteItems(item._id)}>Delete</button></td>
                <td><Link to={`/edit/${item._id}`}>
                <button>Edit</button></Link></td>
            </tr>
            ))}
        </tbody>
    </table>
    </>

)
   

export default Update;
