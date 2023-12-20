const {
  subscribePackage,
  subscribeAddon,
} = require("../services/subscriptionServices");

exports.subscribePackage = async (req, res) => {
  try {
    const { id } = req.body.data;
    const { packId } = req.params;
    const result = await subscribePackage(id, packId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
  exports.subscribeAddon = async (req, res) => {
    try {
      const { id } = req.body.data;
      const { packId } = req.params;
      const result = await subscribeAddon(id, packId);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

 
