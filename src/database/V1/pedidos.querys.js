import Global from "../../../Global";

export const queriesPedidos = {
  /*pedidos*/
  getQPedidosAutorizacion: `select pt.pedido,pt.cliente,pt.nombre,pt.direccion,pt.monto,pe.estado,pe.fecha_hora from despacho.dbo.tickets_detalle_pedidos pt, ${Global.BASE_DATOS}.${Global.EMPRESA}.pedido  pe  where pe.pedido=pt.pedido and pe.estado in ('N','A') `,
  getPedidoLinea: `select * from ${Global.BASE_DATOS}.${Global.EMPRESA}.pedido_linea where pedido=@pedido`,
  getQCambioEstadoPedido: `update ${Global.BASE_DATOS}.${Global.EMPRESA}.pedido set estado=@estado where pedido=@pedido`,
  /*Facturas*/
  /*Tickets*/
  //Actualizamos en TCargaPedido
};
