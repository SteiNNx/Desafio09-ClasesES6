"use strict";

var _Cliente = _interopRequireDefault(require("./Cliente"));

var _Impuestos = _interopRequireDefault(require("./Impuestos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuesto1 = new _Impuestos["default"](1000, 100);
console.log({
  impuesto1: impuesto1
});
var cliente1 = new _Cliente["default"]('Pepito', impuesto1);
console.log({
  cliente1: cliente1
});
console.log(cliente1.calcularImpuesto());