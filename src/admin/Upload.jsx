// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify'; 
// import {Row} from 'react-bootstrap';
// import {Col} from 'react-bootstrap';

// const Upload = () => {
//     const handleSubmit  = (e) => {
//         e.preventDefault();
//         const form = e.target;
//         const image = form.image.value;
//         const title = form.title.value;
//         const price = form.price.value;
//         const description = form.description.value;
//         const quality = 1;

//         if (image ==="" || title ==="" || price==="" || description==="") {
//             toast.warn("Fill the required files");
//             return;
//         }

//         const formyobj = {title,image,price,description,quality};
//         console.log(formyobj);

//         fetch('http://localhost:7555/model', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formyobj)
//         })
//         .then((res) => res.json())
//         .then(() => {
//             toast.success("Product added successfully");
//             form.reset();
//             window.location.href = '/update';
//         })
//     }
// return (
//     <>
//     <ToastContainer />
//     <div>Upload</div>
//     <form onSubmit={handleSubmit}>
//     <Col>
//     <Row>
//         <label value="title"></label>
//         <input type="text" name="title" style={{width:"300px"}}/>
//     </Row>
//     <Row>
//         <label value="image"></label>
//         <input type="text" name="image" style={{width:"300px"}}/>
//     </Row>
//     <Row>
//         <label value="price"></label>
//         <input type="number" name="price" style={{width:"300px"}}/>
//     </Row>
//     <Row>
//         <label value="description"></label>
//         <input type="text" name="description" style={{width:"300px"}}/>
//     </Row>
//     <Row>
//         <button type="submit" style={{width:"200px", margin:"10px"}}>Upload</button>
//     </Row>
//     </Col>
//     </form>
//     </>
// )
// }

// export default Upload
