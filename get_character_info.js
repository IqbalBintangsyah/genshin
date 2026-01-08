// const { EnkaClient } = require("enka-network-api");
import { EnkaClient } from "enka-network-api"
const enka = new EnkaClient();

const user = await enka.fetchUser(800244745);
let my_character = user.characters[0].characterData.name.get("en");

console.log(my_character);