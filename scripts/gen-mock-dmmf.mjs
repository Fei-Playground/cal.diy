// One-time: build a prismock-compatible DMMF JSON from schema.prisma so the
// runtime mock client doesn't need @prisma/internals bundled into Next.
import { readFileSync, writeFileSync } from "node:fs";
import pkg from "@prisma/internals";
const { getDMMF } = pkg;

const schema = readFileSync("packages/prisma/schema.prisma", "utf-8");
const dmmf = await getDMMF({ datamodel: schema });
writeFileSync("packages/prisma/mock-dmmf.json", JSON.stringify(dmmf));
console.log("Wrote packages/prisma/mock-dmmf.json — models:", dmmf.datamodel.models.length);
