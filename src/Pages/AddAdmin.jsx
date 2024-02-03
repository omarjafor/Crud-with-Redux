import { useDispatch } from "react-redux";
import Button from "../Components/Button";
import TextField from "../Components/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addAdmin } from "../Redux/Slices/adminSlice";


const AddAdmin = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: ''
    });

    const handleAddAdmin = () => {
        setValues({ name: '', email: '' });
        dispatch(addAdmin({
            name: values.name,
            email: values.email
        }));
        navigate('/');
        console.log(values.name, values.email);
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