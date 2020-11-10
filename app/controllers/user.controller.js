exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

 
exports.agentBoard = (req, res) => {
  res.status(200).send("Agent Content.");
};

exports.contactBoard = (req, res) => {
  res.status(200).send("Contact Content.");
};