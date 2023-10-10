const fs = require("fs/promises");
const path = require("path");

async function ReadLogFiles() {
  try {
    const pathsFilePath = path.join(__dirname, "Paths.txt");
    const data = await fs.readFile(pathsFilePath, "utf8");
    const Filelist = data.split("\n").map((relativePath) =>
      path.join(__dirname, relativePath.trim())
    );

    const filePromises = Filelist.map(async (path) => {
      try {
        const content = await fs.readFile(path, "utf8");
        console.log(content);
      } catch (error) {
        await fs.appendFile("./ErrorLog.txt", error + "\n", "utf8");
        console.error(error);
      }
    });

    await Promise.all(filePromises);
    console.log("All files processed");
  } catch (err) {
    console.error(err);
  }
}

ReadLogFiles();
