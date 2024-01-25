import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "../Components/TextField";
import Button from "../Components/Button";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../Redux/Slices/UserSlice";


const EditUser = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const exuser = users.filter(user => user.id === parseInt(params.id));
    const { name, email } = exuser[0];
    const navigate = useNavigate();
    const [values, setValues] = useState({ name, email });

    const handleEditUser = () => {
        setValues({ name: '', email: '' });
        dispatch(editUser({
            id: parseInt(params.id),
            name: values.name,
            email: values.email
        }));
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