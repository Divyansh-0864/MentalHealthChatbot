import { spawnSync } from "child_process";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const predict = (message) => {
  try {
    const pythonProcess = spawnSync("python", [
      path.join(__dirname, "predict.py"),
      message,
    ]);

    const output = JSON.parse(pythonProcess.stdout.toString().trim());
    return output; // { risk: true/false, probabilities: [...] }
  } catch (error) {
    console.error("Error running prediction:", error);
    return { risk: false, probabilities: [] };
  }
};
