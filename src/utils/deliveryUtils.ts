// Restaurant coordinates (Avenida Montero Ríos 18, Vigo)
const RESTAURANT_LAT = 42.2371;
const RESTAURANT_LNG = -8.7226;
const MAX_DELIVERY_RADIUS_KM = 3;

// Operating hours
const OPENING_HOUR = 9;
const OPENING_MINUTE = 30;
const CLOSING_HOUR = 24; // Midnight

/**
 * Calculate distance between two points using Haversine formula
 */
export function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180);
}

/**
 * Check if coordinates are within delivery radius
 */
export function isWithinDeliveryRadius(lat: number, lng: number): boolean {
  const distance = calculateDistance(RESTAURANT_LAT, RESTAURANT_LNG, lat, lng);
  return distance <= MAX_DELIVERY_RADIUS_KM;
}

/**
 * Get distance from restaurant in km
 */
export function getDistanceFromRestaurant(lat: number, lng: number): number {
  return calculateDistance(RESTAURANT_LAT, RESTAURANT_LNG, lat, lng);
}

/**
 * Check if delivery service is currently open
 */
export function isDeliveryOpen(): boolean {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTimeInMinutes = hours * 60 + minutes;
  const openingTimeInMinutes = OPENING_HOUR * 60 + OPENING_MINUTE;
  const closingTimeInMinutes = CLOSING_HOUR * 60;

  return (
    currentTimeInMinutes >= openingTimeInMinutes &&
    currentTimeInMinutes < closingTimeInMinutes
  );
}

/**
 * Get formatted operating hours string
 */
export function getOperatingHours(): string {
  return `${OPENING_HOUR}:${OPENING_MINUTE.toString().padStart(2, "0")} - 00:00`;
}

/**
 * Get next opening time if currently closed
 */
export function getNextOpeningTime(): string {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTimeInMinutes = hours * 60 + minutes;
  const openingTimeInMinutes = OPENING_HOUR * 60 + OPENING_MINUTE;

  if (currentTimeInMinutes < openingTimeInMinutes) {
    return `Abrimos hoy a las ${OPENING_HOUR}:${OPENING_MINUTE.toString().padStart(2, "0")}`;
  }
  return `Abrimos mañana a las ${OPENING_HOUR}:${OPENING_MINUTE.toString().padStart(2, "0")}`;
}

export const RESTAURANT_COORDS = {
  lat: RESTAURANT_LAT,
  lng: RESTAURANT_LNG,
};

export const MAX_RADIUS = MAX_DELIVERY_RADIUS_KM;
