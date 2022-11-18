import Subscriptions from "../models/subscriptionSchema";


const createSubscription=async (req, res)=> {
const subscription = new Subscriptions({
  adminId: req.body.adminId,
  Plans: req.body.Plans,
});
subscription.save(function (err) {
  if (err) {
    console.log(err);
    return res.send(err);
  } else {
    return res.send("Saved!");
  }
});
};

export default createSubscription