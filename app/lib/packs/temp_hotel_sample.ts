
import { hotels_and_resorts } from "./hotels_and_resorts";
import type { PremiumPack } from "../premium-packs";

/**
 * SOVEREIGN BENCHMARK CLONE — v17.5.1 PARITY
 * -----------------------------------------
 * This is a literal, 100% content clone of the hotels_and_resorts benchmark.
 * It is used exclusively in the Audit Lab to verify Zero-Loss patching.
 */
export const temp_hotel_sample: PremiumPack = {
    ...hotels_and_resorts,
    id: 'temp_hotel_sample',
    title: "TEMP HOTEL SAMPLE (AUDIT CLONE)"
};
