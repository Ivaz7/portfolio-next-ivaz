import { techData } from "./techData";

export function searchTectData(name: string) {
  return techData.find((val) => val.name === name)
}