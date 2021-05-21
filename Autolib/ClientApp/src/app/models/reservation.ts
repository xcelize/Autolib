import { Client } from "./client";
import { Vehicule } from "./vehicule";

export class Reservation {
  id: number;
  vehicule: Vehicule;
  client: Client;
  date_resa: Date;
  date_echeance: Date;
}
