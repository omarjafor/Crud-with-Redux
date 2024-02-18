import { useDispatch } from "react-redux";
import Button from "../Components/Button";
import TextField from "../Components/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addAdmin } from "../Redux/Slices/adminSlice";
import toast from "react-hot-toast";


const AddAdmin = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: ''
    });

    const handleAddAdmin = () => {
        setValues({ name: '', email: '' });
        const name = values.name;
        const email = values.email;
        const admin = { name, email }
        const toastId = toast.loading('Loading...');
        fetch('http://localhost:5000/post', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(admin)
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Admin Added', { id: toastId })
            dispatch(addAdmin(data))
        })
        navigate('/');
    }

    return (
        <div className="mt-10 max-w-xl mx-auto">
            <TextField
                label="Admin Name"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                inputProps={{ type: 'text', placeholder: 'Admin Name' }}
            />
            <br />
            <TextField
                label="Admin Email"
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                inputProps={{ type: 'email', placeholder: 'Admin Email' }}
            />
            <Button onClick={handleAddAdmin}>Add Admin</Button>
        </div>
    );
};

export default AddAdmin;