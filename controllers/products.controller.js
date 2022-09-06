module.exports.productsController = {
    getProducts : function(req, res){
        res.json(['Snickers','Milky Way','M&M'])
    },
    getsProducts : function(req, res){
        res.json(req.params.id)
    },
    postProducts : function(req, res){
        res.send('Twix')
    },
    deleteProducts : function(req, res){
        res.json(req.params.id)
    }
}