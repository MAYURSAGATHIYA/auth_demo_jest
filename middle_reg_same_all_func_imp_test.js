const p1 = require('./dal/index').db('CRED').collection('user');





const getAllfunc = async (email) => {
   
    const find_var = await p1.find({email});

    return find_var.toArray();
}
module.exports={getAllfunc}