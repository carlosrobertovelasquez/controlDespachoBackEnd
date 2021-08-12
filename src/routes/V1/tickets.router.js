import { Router } from "express";

import {
  getActualizarTcargaPedido,
  getMaxTicket,
  createTicket,
  createTicketPedido,
  getTicketAll,
  cambioEstado,
  getTicketDetallePedidoById,
  getTicketDetalleProductoById,
  getTicketImpresion,
  getTicketById,
} from "../../controllers/V1/tickets.controller";
import { checkAuth } from "../../Middlewares/auth-middleware";
import { handleRequestErrors } from "../../Middlewares/validator-middleware";
import { validateNewUserBody } from "../../validators/v1/users.validator";

const router = Router();

//router.post("/api/v1/login", login);
//router.post("/api/v1/users", createNewUser);
//router.get("/api/v1/users", getUsers);
//router.get("/api/v1/users/:id", getUserById);
//router.delete("/api/v1/users/:id", checkAuth, deleteUser);
router.get("/api/v1/ticketProductos/:id", getTicketDetalleProductoById);
router.get("/api/v1/ticketPedidos/:id", getTicketDetallePedidoById);
router.get("/api/v1/ticketById/:id", getTicketById);
router.get("/api/v1/ticketImpresion/", getTicketImpresion);
router.post("/api/v1/createTicket", createTicket);
router.post("/api/v1/createTicketPedidos", createTicketPedido);
router.get("/api/v1/maxticket", getMaxTicket);
router.get("/api/v1/getTicketAll", getTicketAll);
router.put("/api/v1/ticket/:pedido", getActualizarTcargaPedido);
router.put("/api/v1/ticketEstado/:id", cambioEstado);

export default router;
