import { useNavigate, useParams } from "react-router-dom";
import Button from "../Components/Button";
import TextField from "../Components/TextField";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


const UpdateAdmin = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const admin = useSelector(state => state.admin);
    const exAdmin = admin.filter(ad => ad._id === params.id)
    const { name, email } = exAdmin[0];
    const navigate = useNavigate();
    const [values, setValues] = useState({ name, email });

    const handleUpdateAdmin = () => {
        fetch()
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