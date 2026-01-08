import { GenshinImpact, LanguageEnum } from 'node-hoyolab'

const COOKIE = {
		ltokenV2: 'v2_CAISDGM5b3FhcTNzM2d1OBokYjIxZDBmMzgtNmIzYi00MjNhLWI4MzUtM2RhMGEwZTM1ZGRjIM2Y-cIGKLmq918w-MORBUILYmJzX292ZXJzZWE.TUxeaAAAAAAB.MEUCIQDDyzYFYgYgPSuCRdOT9NmERdB3yzrd2eQIHNMTFICHpQIge4EjoE2LnEdI0a4Qot8fwWY6plMefJZ1_2kf99Z-FXI',
		ltuidV2: parseInt('10772984')
    };

const genshin = new GenshinImpact({
	cookie: COOKIE,
	uid: 800244745
})

class Character {
	async getCharacter() {
		const char = await genshin.record.characters()
		return char
	}
}

export default Character