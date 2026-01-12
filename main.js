import { GenshinImpact, LanguageEnum } from 'node-hoyolab'
import * as mysql from 'mysql'
import config from './config.js'

async function main() {
	let con = mysql.createConnection({
		host: config.HOST_SQL,
		user: config.USER_SQL,
		password: config.PASSWORD_SQL
	});
	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");
	});

	const genshin = new GenshinImpact({
		cookie: config.COOKIE,
		lang: LanguageEnum.ENGLISH,
		uid: config.UID
	});
	// Claim the daily rewards.
	const claim = await genshin.daily.claim();
	console.log(claim);

	// Retrieves daily information.
	const dailyInfo = await genshin.daily.info();
	console.log(dailyInfo);

	// Retrieve daily rewards information.
	const rewards = await genshin.daily.rewards();
	console.log(rewards);

	// Get the daily reward for a specific day or the current day
	const reward = await genshin.daily.reward();
	console.log(reward);
}

main();