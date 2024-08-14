import fs from "node:fs/promises";

const readPjson = async () => {
  const PjsonPath = new URL("./package.json", import.meta.url).pathname;
  console.log(JSON.parse(await fs.readFile(PjsonPath, "utf-8")));
};

readPjson();
