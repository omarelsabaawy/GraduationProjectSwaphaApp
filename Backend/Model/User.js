const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    country: {
        type: String,
        required: true
    },
    homeAddress: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    swaphaManager: {
        type: Boolean,
        required: true
    },
    have: {
        items: [{
            productId: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            }
        }]
    },
    need: {
        items: [{
            productId: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            }
        }]
    }
});

UserSchema.methods.addToHaveList = function (product) {
    const updateHaveListItems = [...this.have.items];
    updateHaveListItems.push({
        productId: product._id,
    });
    const updatedHaveList = {
        items: updateHaveListItems
    };
    this.have = updatedHaveList;
    return this.save();
};

UserSchema.methods.deleteFromHaveList = function (productId) {
    const updatedHaveList = this.have.items.filter(item => {
        return item.productId.toString() !== productId.toString();
    });
    this.have.items = updatedHaveList;
    return this.save();
}

UserSchema.methods.clearHave = function () {
    this.have = { items: [] };
    return this.save();
};

module.exports = mongoose.model('User', UserSchema);