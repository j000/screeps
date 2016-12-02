module.exports = {

	getBody_Soldier: function(level) {
		switch (level) {
			default:
				console.log(`Error @ getBody_Soldier, ${level} is not a proper number!`);
				return;
			case 1:
				return [ // 190 energy, 1x TOUGH, 1x ATTACK, 2x MOVE
						TOUGH, MOVE,
						MOVE, ATTACK];
			case 2:
				return [ // 390 energy, 3x ATTACK, 3x MOVE
						MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK];
			case 3:
				return [ // 650 energy, 4x ATTACK, 4x MOVE
						MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK];
			case 4:
				return [ // 910 energy, 6x ATTACK, 6x MOVE
						MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK,
						MOVE, ATTACK];
			case 5:
				return [ // 1700 energy, 10x ATTACK, 12x MOVE, 2x RANGED_ATTACK
						MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK,
						MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK,
						MOVE, MOVE,
						RANGED_ATTACK, RANGED_ATTACK];
			case 6:
				return [ // 2160 energy, 12x ATTACK, 15x MOVE, 3x RANGED_ATTACK
						MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK,
						MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK,
						MOVE, ATTACK, MOVE, ATTACK,
						MOVE, MOVE, MOVE,
						RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK];
			case 7:
			case 8:
				return [ // 3700 energy, 25x MOVE, 20x ATTACK, 4x RANGED_ATTACK, 1x HEAL
						MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK,
						MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK,
						MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK,
						MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK,
						MOVE, MOVE, MOVE, MOVE, MOVE,
						RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK,
						HEAL];
		}
	},

	getBody_Brawler: function(level) {
		switch (level) {
			default:
				console.log(`Error @ getBody_Brawler, ${level} is not a proper number!`);
				return;
			case 1:
			case 2:
			case 3:
			case 4:
				return null
			case 5:
				return [ // 1700 energy, 11x ATTACK, 15x MOVE, 4x TOUGH
						TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE,
						MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK,
						MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK,
						MOVE, ATTACK ];
			case 6:
				return [ // 2160 energy, 14x ATTACK, 19x MOVE, 5x TOUGH
						TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK,
						MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK,
						MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK ];
			case 7:
			case 8:
				return [ // 2700 energy, 20x MOVE, 20x ATTACK, 10x TOUGH
						TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH,
						MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK,
						MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK,
						MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK,
						MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK ];
		}
	},

	getBody_Paladin: function(level) {
		switch (level) {
			default:
				console.log(`Error @ getBody_Paladin, ${level} is not a proper number!`);
				return;
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
				return null;

			case 7:
			case 8:
				return [ // 4450 energy, 25x MOVE, 5x RANGED_ATTACK, 15x ATTACK, 5x HEAL
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE,
						RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK,
						ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK,
						ATTACK, ATTACK, ATTACK, ATTACK, ATTACK,
						HEAL, HEAL, HEAL, HEAL, HEAL];
		}
	},

	getBody_Archer: function(level) {
		switch (level) {
			default:
				console.log(`Error @ getBody_Archer, ${level} is not a proper number!`);
				return;
			case 1:
				return [ // 200 energy, 1x RANGED_ATTACK, 1x MOVE
						MOVE, RANGED_ATTACK];
			case 2:
				return [ // 460 energy, 1x TOUGH, 2x RANGED_ATTACK, 3x MOVE
						TOUGH,
						MOVE, MOVE, MOVE,
						RANGED_ATTACK, RANGED_ATTACK];
			case 3:
				return [ // 720 energy, 2x TOUGH, 3x RANGED_ATTACK, 5x MOVE
						TOUGH, TOUGH,
						MOVE, MOVE, MOVE, MOVE, MOVE,
						RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK];
			case 4:
				return [ // 1000 energy, 5x RANGED_ATTACK, 5x MOVE
						MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK];
			case 5:
				return [ // 1600 energy, 8x RANGED_ATTACK, 8x MOVE
						MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK,
						MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK];
			case 6:
				return [ // 2000 energy, 10x RANGED_ATTACK, 10x MOVE
						MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK,
						MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK];
			case 7:
				return [ // 4000 energy, 20x RANGED_ATTACK, 20x MOVE
						MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK,
						MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK,
						MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK,
						MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK];
			case 8:
				return [ // 5000 energy, 25x RANGED_ATTACK, 25x MOVE
						MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK,
						MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK,
						MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK,
						MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK,
						MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK];
		}
	},

	getBody_Healer: function(level) {
		switch (level) {
			default:
				console.log(`Error @ getBody_Healer, ${level} is not a proper number!`);
				return;
			case 1:
			case 2:
				return [ // 300 energy, 1x HEAL, 1x MOVE
						MOVE, HEAL];
			case 3:
				return [ // 600 energy, 2x HEAL, 2x MOVE
						MOVE, MOVE,
						HEAL, HEAL];
			case 4:
				return [ // 1200 energy, 4x HEAL, 4x MOVE
						MOVE, MOVE, MOVE, MOVE,
						HEAL, HEAL, HEAL, HEAL];
			case 5:
				return [ // 1680 energy, 5x HEAL, 8x MOVE, 3x TOUGH
						TOUGH, TOUGH, TOUGH,
						MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE,
						HEAL, HEAL, HEAL, HEAL, HEAL];
			case 6:
				return [ // 2100 energy, 6x HEAL, 11x MOVE, 5x TOUGH
						TOUGH, TOUGH, TOUGH, TOUGH, TOUGH,
						MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						HEAL, HEAL, HEAL, HEAL, HEAL, HEAL ];
			case 7:
				return [ // 4800 energy, 15x HEAL, 15x MOVE
						TOUGH, TOUGH, TOUGH, TOUGH, TOUGH,
						MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE,
						HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL,
						HEAL, HEAL, HEAL, HEAL, HEAL];
			case 8:
				return [ // 6300 energy, 20x HEAL, 5x TOUGH, 25x MOVE
						TOUGH, TOUGH, TOUGH, TOUGH, TOUGH,
						MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL,
						HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL];
		}
	},

	getBody_Multirole: function(level) {
		switch (level) {
			default:
				console.log(`Error @ getBody_Multirole, ${level} is not a proper number!`);
				return;
			case 1:
				return [ // 280 energy, 1x WORK, 1x CARRY, 1x MOVE, 1x ATTACK
						WORK, CARRY,
						MOVE,
						ATTACK];
			case 2:
				return [ // 430 energy, 1x WORK, 2x CARRY, 3x MOVE, 1x ATTACK
						WORK, CARRY, CARRY,
						MOVE, MOVE, MOVE,
						ATTACK];
			case 3:
				return [ // 730 energy, 2x WORK, 3x CARRY, 6x MOVE, 1x ATTACK
						WORK, WORK, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						ATTACK];
			case 4:
				return [ // 1110 energy, 3x WORK, 5x CARRY, 8x MOVE, 2x ATTACK
						WORK, WORK, WORK,
						CARRY, CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						ATTACK, ATTACK];
			case 5:
				return [ // 1690 energy, 4x WORK, 6x CARRY, 12x MOVE, 1x RANGED_ATTACK, 3x ATTACK
						WORK, WORK, WORK, WORK,
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE,
						RANGED_ATTACK,
						ATTACK, ATTACK, ATTACK];
			case 6:
				return [ // 2160 energy, 6x WORK, 8x CARRY, 14x MOVE, 2x RANGED_ATTACK, 2x ATTACK
						WORK, WORK, WORK, WORK, WORK, WORK,
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE,
						RANGED_ATTACK, RANGED_ATTACK,
						ATTACK, ATTACK];
			case 7:
			case 8:
				return [ // 3380 energy, 6x WORK, 10x CARRY, 24x MOVE, 4x RANGED_ATTACK, 6x ATTACK
						WORK, WORK, WORK, WORK, WORK, WORK,
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE,
						RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK,
						ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK];
		}
	},

	getBody_Worker: function(level) {
		switch (level) {
			default:
				console.log(`Error @ getBody_Worker, ${level} is not a proper number!`);
				return;
			case 1:
				return [ // 300 energy, 1x WORK, 2x CARRY, 2x MOVE
						WORK,
						CARRY, CARRY,
						MOVE, MOVE];
			case 2:
				return [ // 450 energy, 2x WORK, 2x CARRY, 3x MOVE
						WORK, WORK,
						CARRY, CARRY,
						MOVE, MOVE, MOVE];
			case 3:
				return [ // 700 energy, 3x WORK, 4x CARRY, 4x MOVE
						WORK, WORK, WORK,
						CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE,];
			case 4:
				return [ // 1100 energy, 5x WORK, 6x CARRY, 6x MOVE
						WORK, WORK, WORK, WORK, WORK,
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 5:
				return [ // 1600 energy, 8x WORK, 8x CARRY, 8x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 6:
				return [ // 2000 energy, 10x WORK, 10x CARRY, 10x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 7:
				return [ // 3000 energy, 15x WORK, 13x CARRY, 17x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						WORK, WORK, WORK, WORK, WORK,
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 8:
				return [ // 3500 energy, 20x WORK, 13x CARRY, 17 MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
		}
	},

	getBody_Worker_AT: function(level) {
		switch (level) {
			default:
				console.log(`Error @ getBody_Worker_AT, ${level} is not a proper number!`);
				return;
			case 1:
				return [ // 250 energy, 1x WORK, 1x CARRY, 2x MOVE
						WORK,
						CARRY,
						MOVE, MOVE];
			case 2:
				return [ // 400 energy, 2x WORK, 1x CARRY, 3x MOVE
						WORK, WORK,
						CARRY,
						MOVE, MOVE, MOVE];
			case 3:
				return [ // 700 energy, 3x WORK, 3x CARRY, 6x MOVE
						WORK, WORK, WORK,
						CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 4:
				return [ // 1150 energy, 5x WORK, 4x CARRY, 9x MOVE
						WORK, WORK, WORK, WORK, WORK,
						CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 5:
				return [ // 1650 energy, 7x WORK, 6x CARRY, 13x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE];
			case 6:
				return [ // 2200 energy, 10x WORK, 7x CARRY, 17x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 7:
			case 8:
				return [ // 3100 energy, 15x WORK, 10x CARRY, 25x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						WORK, WORK, WORK, WORK, WORK,
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE];
		}
	},

	getBody_Burrower: function(level) {
		switch (level) {
			default:
				console.log(`Error @ getBody_Burrower, ${level} is not a proper number!`);
				return;
			case 1:
				return [ // 300 energy, 2x WORK, 2x MOVE
						WORK, MOVE, WORK, MOVE];
			case 2:
				return [ // 450 energy, 3x WORK, 3x MOVE
						WORK, MOVE, WORK, MOVE, WORK, MOVE];
			case 3:
				return [ // 750 energy, 6x WORK, 3x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK,
						MOVE, MOVE, MOVE];
			case 4:
				return [ // 1050 energy, 8x WORK, 5x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						MOVE, MOVE, MOVE, MOVE, MOVE];
			case 5:
				return [ // 1500 energy, 12x WORK, 7x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						WORK, WORK,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 6:
				return [ // 1800 energy, 14x WORK, 8x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						WORK, WORK, WORK, WORK,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 7:
				return [ // 2700 energy, 21x WORK, 12x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						WORK,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE];
			case 8:
				return [ // 4000 energy, 30x WORK, 20x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
		}
	},

	getBody_Burrower_AT: function(level) {
		switch (level) {
			default:
				console.log(`Error @ getBody_Burrower_AT, ${level} is not a proper number!`);
				return;
			case 1:
				return [ // 300 energy, 2x WORK, 2x MOVE
						WORK, MOVE, WORK, MOVE];
			case 2:
				return [ // 450 energy, 3x WORK, 3x MOVE
						WORK, MOVE, WORK, MOVE, WORK, MOVE];
			case 3:
				return [ // 600 energy, 4x WORK, 4x MOVE
						WORK, WORK, WORK, WORK,
						MOVE, MOVE, MOVE, MOVE];
			case 4:
				return [ // 1200 energy, 8x WORK, 8x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 5:
				return [ // 1650 energy, 11x WORK, 11x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						WORK,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE];
			case 6:
				return [ // 2100 energy, 14x WORK, 14x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						WORK, WORK, WORK, WORK,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE];
			case 7:
				return [ // 3000 energy, 20x WORK, 20x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 8:
				return [ // 3750 energy, 25x WORK, 25x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						WORK, WORK, WORK, WORK, WORK,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE];
		}
	},

	getBody_Extractor: function(level) {
		switch (level) {
			default:
				console.log(`Error @ getBody_Extractor, ${level} is not a proper number!`);
				return;
			case 1:
				return [ // 300 energy, 1x WORK, 2x CARRY, 2x MOVE
						WORK,
						CARRY, CARRY,
						MOVE, MOVE];
			case 2:
				return [ // 450 energy, 2x WORK, 2x CARRY, 3x MOVE
						WORK, WORK,
						CARRY, CARRY,
						MOVE, MOVE, MOVE];
			case 3:
				return [ // 700 energy, 3x WORK, 4x CARRY, 4x MOVE
						WORK, WORK, WORK,
						CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE,];
			case 4:
				return [ // 1100 energy, 5x WORK, 6x CARRY, 6x MOVE
						WORK, WORK, WORK, WORK, WORK,
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 5:
				return [ // 1600 energy, 8x WORK, 8x CARRY, 8x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 6:
				return [ // 2000 energy, 14x WORK, 4x CARRY, 8x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						WORK, WORK, WORK, WORK,
						CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 7:
			case 8:
				return [ // 3750 energy, 25x WORK, 8x CARRY, 17x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						WORK, WORK, WORK, WORK, WORK,
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
		}
	},

	getBody_Extractor_REM: function(level) {
		switch (level) {
			default:
				console.log(`Error @ getBody_Extractor_REM, ${level} is not a proper number!`);
				return;
			case 1:
				return [ // 250 energy, 1x WORK, 1x CARRY, 2x MOVE
						WORK,
						CARRY,
						MOVE, MOVE];
			case 2:
				return [ // 400 energy, 2x WORK, 1x CARRY, 3x MOVE
						WORK, WORK,
						CARRY,
						MOVE, MOVE, MOVE];
			case 3:
				return [ // 700 energy, 4x WORK, 2x CARRY, 4x MOVE
						WORK, WORK, WORK, WORK,
						CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE,];
			case 4:
				return [ // 1050 energy, 6x WORK, 3x CARRY, 6x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK,
						CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 5:
				return [ // 1550 energy, 9x WORK, 5x CARRY, 8x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						CARRY, CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 6:
				return [ // 2150 energy, 14x WORK, 5x CARRY, 10x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						WORK, WORK, WORK, WORK,
						CARRY, CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 7:
			case 8:
				return [ // 3650 energy, 23x WORK, 10x CARRY, 17x MOVE
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
						WORK, WORK, WORK,
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
		}
	},

	getBody_Carrier: function(level) {
		switch (level) {
			default:
				console.log(`Error @ getBody_Carrier, ${level} is not a proper number!`);
				return;
			case 1:
					return [ // 300 energy, 3x CARRY, 3x MOVE
						CARRY, MOVE, CARRY, MOVE, CARRY, MOVE];
			case 2:
				return [ // 400 energy, 4x CARRY, 4x MOVE
						CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE];
			case 3:
				return [ // 600 energy, 8x CARRY, 4x MOVE
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE];
			case 4:
				return [ // 1000 energy, 13x CARRY, 7x MOVE
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 5:
				return [ // 1400 energy, 18x CARRY, 10x MOVE
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 6:
				return [ // 1800 energy, 24x CARRY, 12 MOVE
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE];
			case 7:
			case 8:
				return [ // 2500 energy, 33x CARRY, 17x MOVE
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
		}
	},

	getBody_Carrier_AT: function(level) {
		switch (level) {
			default:
				console.log(`Error @ getBody_Carrier_AT, ${level} is not a proper number!`);
				return;
			case 1:
					return [ // 300 energy, 3x CARRY, 3x MOVE
						CARRY, MOVE, CARRY, MOVE, CARRY, MOVE];
			case 2:
				return [ // 400 energy, 4x CARRY, 4x MOVE
						CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE];
			case 3:
				return [ // 600 energy, 6x CARRY, 6x MOVE
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 4:
				return [ // 1000 energy, 10x CARRY, 10x MOVE
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 5:
				return [ // 1400 energy, 14x CARRY, 14x MOVE
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE];
			case 6:
				return [ // 1800 energy, 18x CARRY, 18 MOVE
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 7:
			case 8:
				return [ // 2500 energy, 25x CARRY, 25x MOVE
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
						CARRY, CARRY, CARRY, CARRY, CARRY,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
						MOVE, MOVE, MOVE, MOVE, MOVE];
		}
	},

	getBody_Reserver: function(level) {
		switch (level) {
			default:
				console.log(`Error @ getBody_Reserver, ${level} is not a proper number!`);
				return;
			case 1:
			case 2:
				return null;
			case 3:
			case 4:
				return [ // 650 energy, 1x CLAIM, 1x MOVE
						CLAIM, MOVE];
			case 5:
			case 6:
			case 7:
			case 8:
				return [ // 1300 energy, 2x CLAIM, 2x MOVE
						CLAIM, CLAIM, MOVE, MOVE];
		}
	},

	getBody_Reserver_AT: function(level) {
		switch (level) {
			default:
				console.log(`Error @ getBody_Reserver_AT, ${level} is not a proper number!`);
				return;
			case 1:
			case 2:
				return null;
			case 3:
				return [ // 750 energy, 1x CLAIM, 3x MOVE
						CLAIM, MOVE, MOVE, MOVE];
			case 4:
				return [ // 850 energy, 1x CLAIM, 5x MOVE
						CLAIM, MOVE, MOVE, MOVE, MOVE, MOVE];
			case 5:
			case 6:
			case 7:
			case 8:
				return [ // 1700 energy, 2x CLAIM, 10x MOVE
						CLAIM, CLAIM,
						MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
		}
	},
};
