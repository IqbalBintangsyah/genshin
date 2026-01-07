import { GenshinImpact, LanguageEnum } from 'node-hoyolab'

const COOKIE = {
		ltokenV2: 'v2_CAISDGM5b3FhcTNzM2d1OBokYjIxZDBmMzgtNmIzYi00MjNhLWI4MzUtM2RhMGEwZTM1ZGRjIM2Y-cIGKLmq918w-MORBUILYmJzX292ZXJzZWE.TUxeaAAAAAAB.MEUCIQDDyzYFYgYgPSuCRdOT9NmERdB3yzrd2eQIHNMTFICHpQIge4EjoE2LnEdI0a4Qot8fwWY6plMefJZ1_2kf99Z-FXI',
		ltuidV2: parseInt('10772984')
    };

async function main() {
	const genshin = new GenshinImpact({
		cookie: COOKIE,
		lang: LanguageEnum.ENGLISH,
	})
	// Claim the daily rewards.
	const claim = await genshin.daily.claim()
	console.log(claim)

	// Retrieves daily information.
	const dailyInfo = await genshin.daily.info()
	console.log(dailyInfo)

	// Retrieve daily rewards information.
	const rewards = await genshin.daily.rewards()
	console.log(rewards)

	// Get the daily reward for a specific day or the current day
	const reward = await genshin.daily.reward()
	console.log(reward)
}

main()