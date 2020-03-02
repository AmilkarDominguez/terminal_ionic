import { Origen } from './origen';
import { Destino } from './destino';
import { Bus } from './bus';

export class Travel{
    code:string;
    detalle: string;
    latitud:number;
    longitud:number;
    estado:string;
    url:string;
    origen:Origen;
    destino:Destino;
    bus:Bus;
}