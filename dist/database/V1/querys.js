"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;

var _Global = _interopRequireDefault(require("../../../Global"));

var queries = {
  /*Users*/
  getAllUser: "SELECT * FROM Despacho.dbo.users",
  createNewUser: "INSERT INTO Despacho.dbo.users (name,email,password) values(@name,@email,@password)",
  getUserById: "SELECT * FROM DESPACHO.DBO.USERS WHERE id=@Id ",
  deleteUser: "DELETE DESPACHO.DBO.USERS WHERE ID=@Id",
  updateUser: "UPDATE DESPACHO.DBO.USERS SET name=@name,email=@email,password=@password WHERE id=@Id",
  login: "SELECT  * FROM DESPACHO.DBO.USERS WHERE email=@email ",

  /*VEHICULOS*/
  getAllVehiculo: "SELECT * FROM DESPACHO.DBO.VEHICULOS",
  createNewVehiculos: "INSERT INTO DESPACHO.DBO.VEHICULOS(placa,modelo,kinicial,kfinal,estado,ano,propio,combustible) values(@placa,@modelo,@kinicial,@kfinal,@estado,@ano,@propio,@combustible)",
  getVehiculoById: "SELECT * FROM DESPACHO.VEHICULOS WHERE id=@Id",
  deleteVehiculo: "DELETE  DESPACHO.VEHICULOS WHERE id=@Id",
  updateVehiculos: "UPADATE DESPACHO.DBO.USERS SET placa=@placa,modelo=@modelo,kinicial=@kinicial,kfinal=@kfinal,estado=@estado,ano=@ano,propio=@propio,combustible=@combustible WHERE id=@Id ",

  /*Motoristas*/
  getAllMotorista: "SELECT * FROM DESPACHO.DBO.MOTORISTAS",
  createMotorista: "INSERT INTO DESPACHO.DBO.MOTORISTAS(DUI,NOMBRE,LICENCIA,TIPO_LIC,ESTADO)VALUES(@dui,@nombre,@licencia,@tipo_lic,@estado)",
  getMotoristaById: "SELECT * FROM DESPACHO.DBO.MOTORISTAS WHERE id=@Id",
  deleteMotorista: "DELETE DESPACHO.DBO.MOTORISTAS WHERE id=@Id",
  updateMotorista: "UPDATE DESPACHO.DBO.MOTORISTAS SET DUI=@dui,NOMBRE=@nombre,LICENCIA=@licencia,TIPO_LIC=@tipo_lic,ESTADO=@estado WHERE id=@Id",

  /*Ayudatentes*/
  getAllAyudantes: "SELECT * FROM DESPACHO.DBO.AYUDANTES",
  getAllAyudantesActive: "select * from DESPACHO.DBO.AYUDANTES WHERE ESTADO='A'",
  createAyudantes: "INSERT INTO DESPACHO.DBO.AYUDANTES(dui,cod_empleado,nombre,estado) VALUES(@dui,@codEmpleado,@nombre,@estado)",
  getAyudanteById: "SELECT * FROM DESPACHO.DBO.AYUDANTES WHERE id=@Id",
  deleteAyudantes: "DELETE DESPACHO.DBO.AYUDANTES WHERE id=@Id",
  updateAyudantes: "UPDATE DESPACHO.DBO.AYUDANTES SET dui=@dui,cod_empleado=@cod_empleado,nombre=@nombre,estado=@estado where id=@Id",

  /*pedidos*/
  CargaPedidos: "select * from despacho.dbo.TCargaPedidos where num_Ticket ='0'",
  getPedidoByid: "select \n  Ped.PEDIDO,Ped.ESTADO,Ped.AUTORIZADO, Ped.FECHA_HORA,Ped.FECHA_APROBACION,Ped.USUARIO, ped.VENDEDOR,ven.NOMBRE ,\n Ped.CLIENTE_ORIGEN,Ped.NOMBRE_CLIENTE,Ped.DIRECCION_FACTURA,Ped.TOTAL_A_FACTURAR,getDATE() as fecha_hora_Carga,ped.OBSERVACIONES \n from\n ".concat(_Global["default"].BASE_DATOS, ".").concat(_Global["default"].EMPRESA, ".PEDIDO Ped,\n ").concat(_Global["default"].BASE_DATOS, ".").concat(_Global["default"].EMPRESA, ".VENDEDOR ven\n where \n Ped.VENDEDOR=ven.VENDEDOR AND\n Ped.PEDIDO=@Pedido"),
  getPedidoDetalleByid: "select pedl.LOTE,pedl.ARTICULO,art.DESCRIPCION, \n  sum(pedl.CANTIDAD_PEDIDA) as CANTIDAD_PEDIDA,\n  sum(pedl.CANTIDAD_A_FACTURA) as CANTIDAD_A_FACTURA,\n  sum(pedl.CANTIDAD_BONIFICAD) as CANTIDAD_BONIFICAD\n  from\n  ".concat(_Global["default"].BASE_DATOS, ".").concat(_Global["default"].EMPRESA, ".PEDIDO_LINEA pedl,\n  ").concat(_Global["default"].BASE_DATOS, ".").concat(_Global["default"].EMPRESA, ".ARTICULO art\n  where PEDIDO=@Pedido and\n  art.ARTICULO=pedl.ARTICULO\n  group by pedl.lote,pedl.ARTICULO,art.DESCRIPCION\n  order by pedl.articulo"),
  getPedidoTicket: "select ped.pedido,ped.cliente_origen as cliente,ped.nombre_cliente as nombre,REPLACE(ped.direccion_factura,',',' ') as direccion, ped.total_a_facturar as monto,'01' as estado,ped.vendedor,ven.nombre as nombre_vendedor,ped.observaciones as nota,'ND' as ubicacion from ".concat(_Global["default"].BASE_DATOS, ".").concat(_Global["default"].EMPRESA, ".pedido ped,").concat(_Global["default"].BASE_DATOS, ".").concat(_Global["default"].EMPRESA, ".vendedor ven where ped.vendedor=ven.vendedor and ped.pedido=@pedido"),
  getPedidoLinea: "select * from ".concat(_Global["default"].BASE_DATOS, ".").concat(_Global["default"].EMPRESA, ".pedido_linea where pedido=@pedido"),

  /*Facturas*/

  /*Tickets*/
  //Actualizamos en TCargaPedido
  getActualizarTcargaPedido: "update Despacho.dbo.TCargaPedidos set num_Ticket=@Nticket,Fecha_Hora_ticket=@FechaHoraTicket where pedidos=@pedido",
  getMaxTicket: "select max(ticket) as maximo from despacho.dbo.tickets",
  //Crear Ticket
  crearTicket: "insert into Despacho.dbo.tickets(ticket,preparador,estado,cant_pedido,fecha_inicio,ubicacion,created_at,usuario_creacion)values(@Nticket,@preparador,@estado,@cantPedido,@fechaInicio,@ubicacion,@createAt,@usuarioCreacion)",
  createTicketPedido: "insert into Despacho.dbo.tickets_detalle_pedido(id_ticket,pedido,cliente,nombre,direccion,monto,estado,vendedor,nombre_vendedor,nota,ubicacion) values(@Ticket,@pedido,@cliente,@nombre,@direccion,@monto,@estado,@vendedor,@nombreVendedor,@nota,@ubicacion)"
  /*Fletes*/

  /*Liquidaciones*/

};
exports.queries = queries;