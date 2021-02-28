const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: "xbv69bbhjmzqnvvv",
    publicKey: "ykykgv98xcrr7b67",
    privateKey: "dbecf6dc002aa3842444196da243003e"
  });




  exports.getToken=(req,res)=>{
    gateway.clientToken.generate({
      }, (err, response) => {
        // pass clientToken to your front-end
        
        if(err){
            res.status(500).send(err)
        }
        else{
            res.send(response)
        }
      });
  }

  exports.processPayment=(req,res)=>{
      let nonceFromTheClient=req.body.paymentMethodNonce
      let amountFromTheClient =req.body.amount

    gateway.transaction.sale({
        amount: amountFromTheClient,
        paymentMethodNonce: nonceFromTheClient,
        // deviceData: deviceDataFromTheClient,
        options: {
          submitForSettlement: true
        }
      }, (err, result) => {
          if(err){
              res.status(500).send(err)
          }
          else{
              res.send(result)
          }
      });

  }