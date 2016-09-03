let _CPU = require("util.cpu");

module.exports = {
	
	Run: function(rmColony, spawnDistance, listPopulation, listLinks) {
		
		_CPU.Start(rmColony, "Colony-runPopulation");
		this.runPopulation(rmColony, spawnDistance, listPopulation);
        _CPU.End(rmColony, "Colony-runPopulation");
		
		_CPU.Start(rmColony, "Colony-runCreeps");
		this.runCreeps(rmColony);
        _CPU.End(rmColony, "Colony-runCreeps");
		
		_CPU.Start(rmColony, "Colony-runTowers");
		this.runTowers(rmColony);
        _CPU.End(rmColony, "Colony-runCreeps");
		
		_CPU.Start(rmColony, "Colony-runLinks");
		this.runLinks(rmColony, listLinks);
        _CPU.End(rmColony, "Colony-runCreeps");
	},
	
	
	runPopulation: function(rmColony, spawnDistance, listPopulation) {
		let Hive = require("hive");

		let lWorker = _.filter(Game.creeps, (creep) => creep.memory.role == "worker" && creep.memory.subrole == null && creep.memory.room == rmColony);
        let lRepairer = _.filter(Game.creeps, (creep) => creep.memory.role == "worker" && creep.memory.subrole == "repairer" && creep.memory.room == rmColony);
        let lUpgrader = _.filter(Game.creeps, (creep) => creep.memory.role == "worker" && creep.memory.subrole == "upgrader" && creep.memory.room == rmColony);
        let lSoldier = _.filter(Game.creeps, (creep) => creep.memory.role == "soldier" && creep.memory.room == rmColony);

        let popTarget = 
            (listPopulation["worker"] == null ? 0 : listPopulation["worker"]["amount"])
            + (listPopulation["repairer"] == null ? 0 : listPopulation["repairer"]["amount"])
            + (listPopulation["upgrader"] == null ? 0 : listPopulation["upgrader"]["amount"])
            + (listPopulation["soldier"] == null ? 0 : listPopulation["soldier"]["amount"]);        
        let popActual = lWorker.length + lRepairer.length + lUpgrader.length + lSoldier.length;
        Hive.populationTally(rmColony, popTarget, popActual);

        if ((listPopulation["soldier"] != null && lSoldier.length < listPopulation["soldier"]["amount"]) 
            || (lSoldier.length < Game.rooms[rmColony].find(FIND_HOSTILE_CREEPS, { filter: function(c) { 
                        return !Object.keys(Memory["allies"]).includes(c.owner.username); }}).length)) {            
            Hive.requestSpawn(rmColony, 0, 0, (listPopulation["soldier"] == null ? 8 : listPopulation["soldier"]["level"]), "soldier", 
                null, {role: "soldier", room: rmColony});
        } else if (listPopulation["worker"] != null && lWorker.length < listPopulation["worker"]["amount"]) {
            Hive.requestSpawn(rmColony, spawnDistance, 3, listPopulation["worker"]["level"], "worker", 
                null, {role: "worker", room: rmColony});
        } else if (listPopulation["repairer"] != null && lRepairer.length < listPopulation["repairer"]["amount"]) {
            Hive.requestSpawn(rmColony, spawnDistance, 4, listPopulation["repairer"]["level"], "worker", 
                null, {role: "worker", subrole: "repairer", room: rmColony});
        } else if (listPopulation["upgrader"] != null && lUpgrader.length < listPopulation["upgrader"]["amount"]) {
            Hive.requestSpawn(rmColony, spawnDistance, 4, listPopulation["upgrader"]["level"], "worker", 
                null, {role: "worker", subrole: "upgrader", room: rmColony});
        }
	},
	
	
	runCreeps: function (rmColony) {
		let Roles = require("roles");
		
		for (let n in Game.creeps) {
            let creep = Game.creeps[n];            
            if (creep.memory.room != null && creep.memory.room == rmColony) {
                if (creep.memory.role == "worker") {
                    Roles.Worker(creep);
                }
                else if (creep.memory.role == "soldier") {
                    Roles.Soldier(creep);
                }
            }
        }  
	},
	
	
	runTowers: function (rmColony) {
		let _Colony = require("util.colony");
		let listTowers = Game.rooms[rmColony].find(FIND_MY_STRUCTURES, { filter: (s) => { return s.structureType == STRUCTURE_TOWER; }});  
		
        for (let t in listTowers) {
            let tower = listTowers[t];
            
            let hostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS, { filter: function(c) {
                        return !Object.keys(Memory["allies"]).includes(c.owner.username); }});
            if (hostile != null) { // Anyone to attack?
                tower.attack(hostile);
                continue;
            } 
            
            let injured = tower.pos.findClosestByRange(FIND_MY_CREEPS, { filter: function(c) { return c.hits < c.hitsMax; }});
            if (injured != null && tower.energy > tower.energyCapacity * 0.5) { // Anyone to heal?
                tower.heal(injured);
                continue;
            } 
            
            if (tower.energy > tower.energyCapacity * 0.5) { // Maintain structures with extra energy
                let structure = _Colony.findByNeed_RepairCritical(tower.room);
                if (structure != null) {
                    tower.repair(structure);
                    continue;
                } 
            }
        }
	},
	
	
	runLinks: function (rmColony, listLinks) {
		Memory["rooms"][rmColony]["links"] = listLinks;
		if (listLinks != null) {
            let linksSend = _.filter(listLinks, (obj) => { return obj.id && obj["role"] == "send"; });
            let linksReceive = _.filter(listLinks, (obj) => { return obj.id && obj["role"] == "receive"; });

            for (let r = 0; r < linksReceive.length; r++) {
                for (let s = 0; s < linksSend.length; s++) {
                    let lSend = Game.getObjectById(linksSend[s]["id"]);
                    let lReceive = Game.getObjectById(linksReceive[r]["id"]);
                    if (lSend.energy > lSend.energyCapacity * 0.25 && lReceive.energy < lReceive.energyCapacity * 0.9) {
                        lSend.transferEnergy(lReceive);
                    }
                }
            }
        }		
	}
};