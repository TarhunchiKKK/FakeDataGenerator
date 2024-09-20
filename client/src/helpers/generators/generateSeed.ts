import { maxSeed, minSeed } from "../../constants";

export function generateSeed() {
    return Math.floor(Math.random() * (maxSeed - minSeed + 1)) + minSeed;
}
