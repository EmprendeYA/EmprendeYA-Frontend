import { Benefactor } from "./benefactor"
import { Emprendedor } from "./emprendedor"

export class TipoComunicacion {
  id:number=0
  nameTC: string = ""
  descripcionTC: string = ""
  benefactor: Benefactor = new Benefactor()
  emprendedor: Emprendedor=new Emprendedor()
}
