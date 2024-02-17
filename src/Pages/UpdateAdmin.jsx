import { useNavigate, useParams } from "react-router-dom";
import Button from "../Components/Button";
import TextField from "../Components/TextField";
import { useSelector } from "react-redux";
import { useState } from "react";

const UpdateAdmin = () => {
    const params = useParams();
    const admin = useSelector(state => state.admin);
    const exAdmin = admin.filter(ad => ad._id === params.id)
    const { _id, name, email } = exAdmin[0];
    const navigate = useNavigate();
    const [values, setValues] = useState({ name, email });
   
    const handleUpdateAdmin = () => {
        const newAdmin = { name: values.name, email : values.email }
        fetch(`http://localhost:5000/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newAdmin)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            navigate('/')
        })
    }

    return (
        <div className="mt-10 max-w-xl mx-auto">
            <h1 className="text-2xl text-center text-green-400 font-medium">Update Admin</h1>
            <TextField
                label="Name"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                inputProps={{ type: 'text', placeholder: 'Jhon Doe' }}
            />
            <br />
            <TextField
                label="Email"
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                inputProps={{ type: 'email', placeholder: 'jhondoe@mail.com' }}
            />
            <Button onClick={handleUpdateAdmin}>Submit</Button>
        </div>
    );
};

export default UpdateAdmin;