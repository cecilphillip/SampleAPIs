const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

let APIList = [];
const directoryPath = path.join(__dirname, "../api");

router.get("/", async (req, res) => {
  if (!APIList.length) {
    await getApiList();
  }

  res.json({
    status: 200,
    data: {
      APIList
    }
  });
});

router.get("/:name", async (req, res) => {
  if (!APIList.length) {
    await getApiList();
  }

  const name = req.params.name;
  console.log({ name });
  const data = APIList.filter(item => item.name == name)[0];
  res.json({
    status: 200,
    data
  });
});

const getApiList = async () => {
  let files = await fs.readdirSync(directoryPath);
  files = files.filter((f) => !f.includes(".backup"));
  APIList = files.map((file) => {
    if (file.includes(".backup")) {
      return false;
    }
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, `../api/${file}`)));
    const endpoints = Object.keys(data);
    const metaData = data.metaData[0];
    const name = file.split(".")[0].toLowerCase();

    return {
      name,
      link: name,
      metaData,
      endpoints: endpoints.filter((e) => e != "metaData"),
    };
  });
};

module.exports = router;
