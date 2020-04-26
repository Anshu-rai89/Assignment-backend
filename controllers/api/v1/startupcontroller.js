const Startup=require('../../../models/startup');

module.exports.create=async function(req,res)
{
    try{

        // registering startup details in db
          console.log('body',req.body);
        let startup=await Startup.create(req.body);

        console.log('res',startup);
        return res.json(200,
            {
                msg:'details saves succsussfully ',
                data:startup
            });

    }catch(err)
    {
        return res.json(500,{
            msg:'internal server error'
        })
    }
}


module.exports.getALl=async function(req,res)
{
    try{

        // registering startup details in db

        let startup=await Startup.find({});

        return res.json(200,
            {
                msg:'list of startps ',
                data:startup
            });

    }catch(err)
    {
        return res.json(500,{
            msg:'internal server error'
        })
    }
}