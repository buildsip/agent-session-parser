import { execFileSync } from "node:child_process";
import { rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";

// Emit native ESM and matching declarations without shipping TypeScript source.
await rm(new URL("../dist", import.meta.url), { recursive: true, force: true });
execFileSync(process.execPath, [fileURLToPath(import.meta.resolve("typescript/bin/tsc")), "-p", "tsconfig.build.json"], { stdio: "inherit" });
