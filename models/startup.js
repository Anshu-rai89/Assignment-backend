const mongoose = require('mongoose');


const startupScheam = new mongoose.Schema({
  name:
  {
      type:String,
      required:true
  },

  country:
  {
    type:String,
    required:true
  }
},{
    timestamps: true
});







const   Startup = mongoose.model('Startup', startupScheam);
module.exports = Startup;