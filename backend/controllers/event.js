const { eventService } = require("../services");

exports.getAllEvents = (req, res) => {
  try {
    const events = eventService.getAllEvents();
    res.status(200).send(events);
  } catch (error) {
    res.status(500).send(error);
  }
}

exports.getEvent = (req, res) => {
  const { id } = req.params;
  try {
    const event = eventService.getEventById(id);
    res.status(200).send(event);
  }catch (error) {
    res.status(500).send(error);
  }
}

exports.getEventByUserId = (req, res) => {
  const { userId } = req.params;
  try {
    const events = eventService.getEventByUserId(userId);
    res.status(200).send(events);
  } catch (error) {
    res.status(500).send(error);
  }
}