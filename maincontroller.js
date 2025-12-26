const home = (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Express MVC Backend!",
  });
};

const about = (req, res) => {
  res.json({
    success: true,
    message: "This is a simple Express.js backend using MVC pattern.",
  });
};

const contact = (req, res) => {
  res.json({
    success: true,
    email: "contact@example.com",
    phone: "+251-900-000-000",
  });
};

const getTime = (req, res) => {
  res.json({
    success: true,
    currentTime: new Date().toLocaleString(),
  });
};

const echoData = (req, res) => {
  const data = req.body;

  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({
      success: false,
      message: "No JSON data provided",
    });
  }

  res.json({
    success: true,
    receivedData: data,
  });
};

module.exports = {
  home,
  about,
  contact,
  getTime,
  echoData,
};
