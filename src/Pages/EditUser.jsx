import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "../Components/TextField";
import Button from "../Components/Button";


const EditUser = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [values, setValues] = useState({ name: '', email: '' });

    const handleEditUser = () => {
        setValues({ name: '', email: '' });
        
        navigate('/');
    }

    return (
        <div className="mt-10 max-w-xl mx-auto">
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
            <Button onClick={handleEditUser}>Edit</Button>
        </div>
    );
};

export default EditUser;