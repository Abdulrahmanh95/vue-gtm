import "url-search-params-polyfill";
import pluginConfig, { VueGtmUseOptions } from "./config";

/**
 * Console log depending on config debug mode
 *
 * @param message
 */
export function logDebug(message: string, args: Record<string, any>): void {
  if (pluginConfig.debug) {
    console.log("VueGtm :", ...arguments);
  }
}

/**
 * Load GTM script tag
 *
 * @param id GTM ID
 * @param config query params object
 */
export function loadScript(
  id: string,
  config: Pick<VueGtmUseOptions, "onLoadCb" | "defer" | "compatibility" | "queryParams"> = { onLoadCb: () => {} }
): void {
  const win = window,
    doc = document,
    script = doc.createElement("script"),
    dl = "dataLayer";

  win[dl] = win[dl] || [];

  win[dl]!.push({
    event: "gtm.js",
    "gtm.start": new Date().getTime(),
  });

  if (!id) {
    return;
  }

  script.async = !config.defer;
  script.defer = Boolean(config.defer || config.compatibility);

  const queryString = new URLSearchParams({
    id,
    ...(config.queryParams || {}),
  });
  script.src = `https://www.googletagmanager.com/gtm.js?${queryString}`;
  script.onload = config.onLoadCb;
  doc.body.appendChild(script);
}

/**
 * Check if GTM script is in the document
 */
export function hasScript(): boolean {
  return Array.from(document.getElementsByTagName("script")).some((script) =>
    script.src.includes("googletagmanager.com/gtm.js")
  );
}
