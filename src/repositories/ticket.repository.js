import TicketDAO from "../DAO/classes/tickets.dao.js";

export default class TicketRepository {
  constructor() {
    this.ticketDAO = new TicketDAO();
  }

  async createTicket(ticketData) {
    return await this.ticketDAO.createTicket(ticketData);
  }

  async getTicketByCode(code) {
    return await this.ticketDAO.getTicketByCode(code);
  }
}
