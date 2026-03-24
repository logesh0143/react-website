import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'; 
import {Container, Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {
    const {id} = useParams();
    const [productsData, setproductData] = useState ({
        title:"",
        image:"",
        price:"",
        description:""
    });

    useEffect(() => {
        fetch(`http://localhost:7555/model/${id}`)
        .then((res) => res.json())
        .then((data) => setproductData(data));
    }, [id]);

    const handleSubmit  = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const price = form.price.value;
        const description = form.description.value;
        const quality = 1;

        if (image ==="" || title ==="" || price==="" || description==="") {
            toast.warn("Fill the required files");
            return;
        }

        const formyobj = {title,image,price,description,quantity};
        console.log(formyobj);

        fetch('http://localhost:7555/model', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formyobj),
    })
        .then(() => {
            toast.success("Product added successfully");
            form.reset();
            window.location.href = '/update';
        })
    }
return (
    <>
    <ToastContainer />
    <div>Upload</div>
    <form onSubmit={handleSubmit}>
    <Col>
    <Row>
        <label value="title"></label>
        <input type="text" name="title" defaultValue={productsData.title} style={{width :"300px"}}/>
    </Row>
    <Row>
        <label value="image"></label>
        <input type="text" name="image" defaultValue={productsData.image} style={{width:"300px"}}/>
    </Row>
    <Row>
        <label value="price"></label>
        <input type="number" name="price" defaultValue={productsData.price} style={{width:"300px"}}/>
    </Row>
    <Row>
        <label value="description"></label>
        <input type="text" name="description" defaultValue={productsData.description} style={{width:"300px"}}/>
    </Row>
    <Row>
        <button type="submit" style={{width:"200px", margin:"10px"}}>Upload</button>
    </Row>
    </Col>
    </form>
    </>
)
}

export default Edit
