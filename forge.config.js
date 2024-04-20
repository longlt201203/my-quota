import { config } from "dotenv";
import path from "path";

config();

export default {
  packagerConfig: {
    asar: true,
    icon: path.join(process.cwd(), 'icons', 'icon'),
    ignore: [".env", "wininstaller", "out"]
  },
  makers: [
    {
      name: '@electron-forge/maker-zip'
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'longlt201203@gmail.com',
          name: 'my-quota',
          authToken: process.env.GITHUB_TOKEN
        },
        prerelease: true
      }
    }
  ]
};