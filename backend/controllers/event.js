const Event = require('../models/event')

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('category').populate('location')
    const eventsMapped = events.map(item => {
      return {
        id: item._id,
        title: item.title,
        date: item.date,
        locationName: item.location.name,
      }
    })
    res.status(200).json(eventsMapped)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error'})
  }
}

exports.getEventById = async (req, res) => {
  const eventId = req.params.id
  try {
    const event = await Event.findById(eventId).populate('category').populate('location')
    if (!event) {
      return res.status(404).json({ error: 'Etkinlik bulunamadı' })
    }

    res.status(200).json(event)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error'})
  }
}

exports.addEvent = async (req, res) => {
  const eventData = req.body

  try {
    const newEvent = new Event(eventData)
    await newEvent.save()

    res.status(201).json({ success: true, message: 'Etkinlik başarıyla eklendi', category: newEvent})
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error'})
  }
}