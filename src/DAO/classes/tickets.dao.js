import TicketsModel from "../models/tickets.model.js";
import TicketDTO from "../DTOs/ticket.dto.js";

export default class Ticket {
  createTicket = async (ticketData) => {
    try {
      const newTicket = await TicketsModel.create(ticketData);
      return new TicketDTO(newTicket);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  getTicketByCode = async (code) => {
    try {
      const ticket = await TicketsModel.findOne({ code });
      return ticket ? new TicketDTO(ticket) : null; 
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
