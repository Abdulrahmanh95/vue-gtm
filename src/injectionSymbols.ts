export const hasSymbol =
  typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

export const PolySymbol = (name: string) =>
  hasSymbol ? Symbol(name) : name;

export const gtmKey = PolySymbol('gtmPlugin');
