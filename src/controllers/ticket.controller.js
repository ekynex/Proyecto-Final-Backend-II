import TicketRepository from "../repositories/ticket.repository.js";

const ticketRepository = new TicketRepository();

export const createTicket = async (req, res) => {
  try {
    const newTicket = await ticketRepository.createTicket(req.body);
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el ticket" });
  }
};

export const getTicketByCode = async (req, res) => {
  try {
    const ticket = await ticketRepository.getTicketByCode(req.params.code);
    if (!ticket) return res.status(404).json({ message: "Ticket no encontrado" });
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el ticket" });
  }
};
