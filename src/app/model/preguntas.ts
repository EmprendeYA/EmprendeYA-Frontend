import { Benefactor } from "./benefactor"
import { Emprendedor } from "./emprendedor"
export class Preguntas{
  id:number=0
  namePregunta: string=""
  descripcion: string =""
  benefactor: Benefactor = new Benefactor()
  emprendedor: Emprendedor=new Emprendedor()
}
