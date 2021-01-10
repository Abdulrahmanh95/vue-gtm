import GtmPlugin from "./plugin";
import { inject } from "vue";
import { gtmKey } from "./injectionSymbols";

/**
 * Returns gtm plugin to be used via composition api inside setup method
 */
export function useGtm(): GtmPlugin | undefined {
  const gtmInstance: GtmPlugin | undefined = inject(gtmKey);
  console.log('gtmInstance', gtmInstance);
  return gtmInstance;
}
