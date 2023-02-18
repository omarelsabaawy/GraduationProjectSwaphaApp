import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Breadcrumb from './Breadcrumb'
import { Spinner } from "react-bootstrap"
import './profile.css';

function SwapListForm() {
    const globalData = JSON.parse(localStorage.getItem('user12345'));
    const [values, setValues] = useState({
        name: "",
        category: "",
        price: "",
        desc: "",
        imageUrl: "",
        user: globalData.currentUser,
        owner: globalData.currentUser.username,
        swap: "",
        buy: "",
    });
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const { name, category, price, desc, imageUrl, user, owner, swap, buy } = values;
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${globalData.Token}`
                }
            }
            const { data } = await axios.post('/api/auth/addToHaveList', {
                name,
                category,
                price,
                desc,
                imageUrl,
                user,
                owner,
                swap,
                buy
            }, config);

            if (data.status) {
                globalData.currentUser = data.currentUser;
                localStorage.setItem('user12345', JSON.stringify(globalData));
                navigate(`/swapList/${data.currentUser._id}`);
                window.location.reload();
                window.location.reload();
                setLoading(false);
            }

        } catch (err) {
            console.log(err);
        }

    }

    return (
        <>
            <Breadcrumb type={"Add Product to SwapList"} />
            <div style={{ margin: '20px' }}>
                <h4 className="mb-4 mt-0" style={{ textAlign: 'center' }} >Add to your SwapList</h4>
                <form onSubmit={handleSubmit} className="file-upload">
                    <div className="row mb-5 gx-5">
                        {/* <!-- Contact detail --> */}
                        <div className="col-xxl-8 mb-5 mb-xxl-0">
                            <div className="bg-secondary-soft px-4 py-5 rounded">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Product Name *</label>
                                        <input type="text" className="form-control" name='name' onChange={(e) => handleChange(e)} />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Product category *</label>
                                        <input type="text" className="form-control" name='category' onChange={(e) => handleChange(e)} />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Description *</label>
                                        <textarea className="form-control" name='desc' onChange={(e) => handleChange(e)} />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Image *</label>
                                        <input type="text" className="form-control" name='imageUrl' onChange={(e) => handleChange(e)} />
                                    </div>

                                    <div className="col-md-6">
                                        <label for="" className="form-label">Want to Swap it *</label>
                                        <select style={{ height: '48px' }} className="form-control" placeholder='Select an Option' name='swap' onChange={(e) => handleChange(e)}>
                                            <option></option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6">
                                        <label for="" className="form-label">Want to Sell it *</label>
                                        <select style={{ height: '48px' }} className="form-control" placeholder='Select an Option' name='buy' onChange={(e) => handleChange(e)}>
                                            <option></option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Price *</label>
                                        <input type="text" className="form-control" name='price' onChange={(e) => handleChange(e)} />
                                    </div>

                                    <div className="col-md-6">
                                        <label for="" className="form-label">Owned by *</label>
                                        <input type="text" className="form-control" name='country' onChange={(e) => handleChange(e)} value={globalData.currentUser.username} disabled />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- button --> */}
                            <div className="text-center" style={{ margin: '20px' }}>
                                <button
                                    type="submit"
                                    className="btn btn-success btn-lg"
                                    style={{ marginRight: '10px' }}
                                >
                                    {loading ?
                                        <Spinner
                                            as="span"
                                            variant="light"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                            animation="border" />
                                        : "Add Product"}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SwapListForm