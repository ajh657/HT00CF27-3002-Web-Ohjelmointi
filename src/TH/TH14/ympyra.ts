import { PII } from './vakiot.ts';

export function ympyranKeha(halkaisija: number): number {
  return PII * halkaisija;
}

export function pintaAla(halkaisija: number): number {
  return halkaisija ** 2 * PII;
}
