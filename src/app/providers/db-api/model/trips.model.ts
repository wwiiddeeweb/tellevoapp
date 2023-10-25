export class TripModel {
  id: number;
  driver_id: number;
  vehicle_id: number;
  seats_offered: number;
  pickup_ref: string;
  pickup_coords: string;
  dropoff_ref: string;
  dropoff_coords: string;
  trip_seats_status: TripStatus;
  trip_final_status: TripFinalStatus;
}

export enum TripStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

export enum TripFinalStatus {
  COMPLETED = 'COMPLETED',
  NOT_COMPLETED = 'NOT_COMPLETED',
  CANCELLED = 'CANCELLED',
}
