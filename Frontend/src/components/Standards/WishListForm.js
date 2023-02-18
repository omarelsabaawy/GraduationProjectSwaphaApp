import React from 'react'
import './profile.css'

function WishListForm() {

    const handleChange = () => {

    }

    return (
        <>
            <div style={{ margin: '20px' }}>
                <h4 className="mb-4 mt-0" style={{ textAlign: 'center' }} >Add to your WishList</h4>
                <form className="file-upload">
                    <div className="row mb-5 gx-5">
                        {/* <!-- Contact detail --> */}
                        <div className="col-xxl-8 mb-5 mb-xxl-0">
                            <div className="bg-secondary-soft px-4 py-5 rounded">
                                <div className="row g-3">

                                    <div className="col-md-6">
                                        <label className="form-label">Product Name *</label>
                                        <input type="text" className="form-control" name='name' onChange={handleChange} />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Product category *</label>
                                        <input type="text" className="form-control" name='category' onChange={handleChange} />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Description *</label>
                                        <input type="text" className="form-control" name='desc' onChange={handleChange} />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Image *</label>
                                        <input type="text" className="form-control" name='imageUrl' onChange={handleChange} />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Can buy it by *</label>
                                        <input type="text" className="form-control" name='price' onChange={handleChange} />
                                    </div>

                                    <div className="col-md-6">
                                        <label for="" className="form-label">Wished by *</label>
                                        <input type="text" className="form-control" name='country' onChange={handleChange} value={JSON.parse(localStorage.getItem('user12345')).username} disabled />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- button --> */}
                            <div className="text-center" style={{ margin: '20px' }}>
                                <button
                                    type="button"
                                    className="btn btn-success btn-lg"
                                    style={{ marginRight: '10px' }}
                                >
                                    Add Product
                                </button>
                            </div>
                        </div>
                    </div>
                </form>



            </div>
        </>
    );
}

export default WishListForm