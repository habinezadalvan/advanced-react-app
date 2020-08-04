import React from 'react';


import Ids from '../common/Ids';
import images from '../../assets/imageUrls';
import FormIput from '../common/FormInput';
import SubmitButton from '../common/SubmitButton';

const AdminPage = () => {
    return (
        <div className="admin">
            <img className="bg-image" src={images.open_box} alt="openbox"/>

            <div className="form-container">
                <h1>Login</h1>
                <form>
                    <div>
                        <FormIput  type="text" placeholder="username" />
                        <FormIput type="text" placeholder="password" />
                        <SubmitButton />
                    </div>
                </form>
            </div>
            <Ids />
        </div>

    )
}

export default AdminPage;