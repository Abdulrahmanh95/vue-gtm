import GtmPlugin from "./plugin";
import { inject } from "vue";
import { gtmKey } from "./injectionSymbols";

/**
 * Returns gtm plugin to be used via composition api inside setup method
 */
export function useGtm(): {gtmPlugin: Function, gtmConfig: Function} {
  function gtmPlugin() {
    const gtmInstance: GtmPlugin | undefined = inject(gtmKey);
    console.log('gtmInstance', gtmInstance);
    return gtmInstance;
  }

  function gtmConfig() {
    const gtmConfig = inject('gtm');
    console.log('gtmConfig', gtmConfig);
    return gtmConfig;
  }

  return {gtmPlugin, gtmConfig};
}
