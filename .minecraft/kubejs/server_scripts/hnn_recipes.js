ServerEvents.recipes(event => {

// Machines, Casings, Multiblock Controllers

    const tiersgt = ["mv", "hv", "ev", "iv", "luv", "zpm", "uv"];

    tiersgt.forEach(tier => {
        event.shaped(
            Item.of(`gtceu:${tier}_electric_simulation_chamber`),
            [
            "ABA",
            "CDC",
            "ABA"
            ],
            {
            A: `kubejs:${tier}_universal_circuit`,
            B: `gtceu:${tier}_voltage_coil`,
            C: "hostilenetworks:prediction_matrix",
            D: `gtceu:${tier}_machine_hull`
            }
        )
    })

    const tierskjs = ["uhv", "uev", "uiv", "uxv"];

    tierskjs.forEach(tier => {
        event.shaped(
            Item.of(`gtceu:${tier}_electric_simulation_chamber`),
            [
            "ABA",
            "CDC",
            "ABA"
            ],
            {
            A: `kubejs:${tier}_universal_circuit`,
            B: `kubejs:${tier}_voltage_coil`,
            C: "hostilenetworks:prediction_matrix",
            D: `gtceu:${tier}_machine_hull`
            }
        )
    })

    event.recipes.gtceu.assembler("simulationcube")
        .itemInputs(
            "4x gtceu:iv_electric_simulation_chamber",
            "16x #gtceu:circuits/luv",
            "64x hostilenetworks:prediction_matrix",
            Item.of(
            "hostilenetworks:prediction",
            '{data_model:{id:"hostilenetworks:spider"}}').strongNBT().withCount(16),
            Item.of(
            "hostilenetworks:prediction",
            '{data_model:{id:"hostilenetworks:witch"}}').strongNBT().withCount(16),
            Item.of(
            "hostilenetworks:prediction",
            '{data_model:{id:"hostilenetworks:squid"}}').strongNBT().withCount(16),
            Item.of(
            "hostilenetworks:prediction",
            '{data_model:{id:"hostilenetworks:slime"}}').strongNBT().withCount(16),
            Item.of(
            "hostilenetworks:prediction",
            '{data_model:{id:"hostilenetworks:blaze"}}').strongNBT().withCount(16),
            Item.of(
            "hostilenetworks:prediction",
            '{data_model:{id:"hostilenetworks:sheep"}}').strongNBT().withCount(16)
        )
        .itemOutputs("gtceu:simulation_cube")
        .duration(20*45)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.assembler("soul_infused_casing")
        .itemInputs(
            "4x enderio:soularium_pressure_plate",
            "4x minecraft:soul_sand"
        )
        .circuit(6)
        .itemOutputs("kubejs:soul_infused_casing")
        .duration(5*45)
        .EUt(GTValues.VA[GTValues.IV]);

// Recipe Type Recipes

event.recipes.gtceu.electric_simulation_chamber("spidersim")
    .notConsumable(
        Item.of(
            "hostilenetworks:data_model",
            '{data_model:{id:"hostilenetworks:spider"}}').weakNBT())
    .circuit(1)
	.itemOutputs(
        "128x minecraft:string",
        "64x minecraft:spider_eye",
        "16x minecraft:cobweb")
    .duration(20*15)
    .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.electric_simulation_chamber("spidersim2")
    .notConsumable(
        Item.of(
            "hostilenetworks:data_model",
            '{data_model:{id:"hostilenetworks:spider"}}').weakNBT())
    .circuit(10)
    .itemOutputs(Item.of(
        "4x hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:spider"}}').strongNBT())
    .duration(20*15)
    .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.electric_simulation_chamber("witchsim")
    .notConsumable(
        Item.of(
            "hostilenetworks:data_model",
            '{data_model:{id:"hostilenetworks:witch"}}').weakNBT())
    .circuit(1)
	.itemOutputs(
        "32x minecraft:redstone",
        "32x minecraft:glowstone_dust",
        "64x minecraft:sugar",
        "64x minecraft:stick",
        "32x minecraft:spider_eye",
        "32x minecraft:glass_bottle")
    .duration(20*15)
    .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.electric_simulation_chamber("witchsim2")
    .notConsumable(
        Item.of(
            "hostilenetworks:data_model",
            '{data_model:{id:"hostilenetworks:witch"}}').weakNBT())
    .circuit(10)
    .itemOutputs(Item.of(
        "2x hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:witch"}}').strongNBT())
    .duration(20*15)
    .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.electric_simulation_chamber("wardensim")
    .notConsumable(
        Item.of(
            "hostilenetworks:data_model",
            '{data_model:{id:"hostilenetworks:warden"}}').weakNBT())
    .circuit(1)
	.itemOutputs(
        "2x minecraft:echo_shard")
    .duration(20*75)
    .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.electric_simulation_chamber("wardensim2")
    .notConsumable(
        Item.of(
            "hostilenetworks:data_model",
            '{data_model:{id:"hostilenetworks:warden"}}').weakNBT())
    .circuit(10)
    .itemOutputs(Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:warden"}}').strongNBT())
    .duration(20*75)
    .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.electric_simulation_chamber("squidsim")
    .notConsumable(
        Item.of(
            "hostilenetworks:data_model",
            '{data_model:{id:"hostilenetworks:squid"}}').weakNBT())
    .circuit(1)
	.itemOutputs(
        "512x minecraft:ink_sac")
    .duration(20*15)
    .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.electric_simulation_chamber("squidsim2")
    .notConsumable(
        Item.of(
            "hostilenetworks:data_model",
            '{data_model:{id:"hostilenetworks:squid"}}').weakNBT())
    .circuit(10)
    .itemOutputs(Item.of(
        "16x hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:squid"}}').strongNBT())
    .duration(20*15)
    .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.electric_simulation_chamber("slimesim")
    .notConsumable(
        Item.of(
            "hostilenetworks:data_model",
            '{data_model:{id:"hostilenetworks:slime"}}').weakNBT())
    .circuit(1)
	.itemOutputs(
        "128x minecraft:slime_ball",
        "32x minecraft:slime_block")
    .duration(20*15)
    .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.electric_simulation_chamber("slimesim2")
    .notConsumable(
        Item.of(
            "hostilenetworks:data_model",
            '{data_model:{id:"hostilenetworks:slime"}}').weakNBT())
    .circuit(10)
    .itemOutputs(Item.of(
        "4x hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:slime"}}').strongNBT())
    .duration(20*15)
    .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.electric_simulation_chamber("sheepsim")
    .notConsumable(
        Item.of(
            "hostilenetworks:data_model",
            '{data_model:{id:"hostilenetworks:sheep"}}').weakNBT())
    .circuit(1)
	.itemOutputs(
        "64x minecraft:white_wool",
        "64x minecraft:orange_wool",
        "64x minecraft:magenta_wool",
        "64x minecraft:light_blue_wool",
        "64x minecraft:yellow_wool",
        "64x minecraft:lime_wool",
        "64x minecraft:pink_wool",
        "64x minecraft:gray_wool",
        "64x minecraft:light_gray_wool")
    .duration(20*3.75)
    .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.electric_simulation_chamber("sheepsim2")
    .notConsumable(
        Item.of(
            "hostilenetworks:data_model",
            '{data_model:{id:"hostilenetworks:sheep"}}').weakNBT())
    .circuit(2)
	.itemOutputs(
        "64x minecraft:cyan_wool",
        "64x minecraft:purple_wool",
        "64x minecraft:blue_wool",
        "64x minecraft:brown_wool",
        "64x minecraft:green_wool",
        "64x minecraft:red_wool",
        "64x minecraft:black_wool",
        "64x minecraft:mutton")
    .duration(20*3.75)
    .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.electric_simulation_chamber("sheepsim3")
    .notConsumable(
        Item.of(
            "hostilenetworks:data_model",
            '{data_model:{id:"hostilenetworks:sheep"}}').weakNBT())
    .circuit(10)
    .itemOutputs(Item.of(
        "8x hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:sheep"}}').strongNBT())
    .duration(20*15)
    .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.electric_simulation_chamber("endermansim")
    .notConsumable(
        Item.of(
            "hostilenetworks:data_model",
            '{data_model:{id:"hostilenetworks:enderman"}}').weakNBT())
    .circuit(1)
	.itemOutputs(
        "16x minecraft:ender_pearl",
        "1x minecraft:end_crystal")
    .duration(20*15)
    .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.electric_simulation_chamber("endermansim2")
    .notConsumable(
        Item.of(
            "hostilenetworks:data_model",
            '{data_model:{id:"hostilenetworks:enderman"}}').weakNBT())
    .circuit(10)
    .itemOutputs(Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:enderman"}}').strongNBT())
    .duration(20*15)
    .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.electric_simulation_chamber("enderdragonsim")
    .notConsumable(
        Item.of(
            "hostilenetworks:data_model",
            '{data_model:{id:"hostilenetworks:ender_dragon"}}').weakNBT())
    .circuit(1)
	.itemOutputs(
        "16x minecraft:dragon_breath",
        "1x minecraft:dragon_egg")
    .duration(20*120)
    .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.electric_simulation_chamber("enderdragonsim2")
    .notConsumable(
        Item.of(
            "hostilenetworks:data_model",
            '{data_model:{id:"hostilenetworks:ender_dragon"}}').weakNBT())
    .circuit(10)
    .itemOutputs(Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:ender_dragon"}}').strongNBT())
    .duration(20*120)
    .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.electric_simulation_chamber("elderguardiansim")
    .notConsumable(
        Item.of(
            "hostilenetworks:data_model",
            '{data_model:{id:"hostilenetworks:elder_guardian"}}').weakNBT())
    .circuit(1)
	.itemOutputs(
        "16x minecraft:cod",
        "2x minecraft:salmon",
        "2x minecraft:pufferfish",
        "2x minecraft:tropical_fish",
        "8x minecraft:prismarine_crystals",
        "24x minecraft:prismarine_shard",
        "32x minecraft:wet_sponge")
    .duration(20*30)
    .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.electric_simulation_chamber("elderguardiansim2")
    .notConsumable(
        Item.of(
            "hostilenetworks:data_model",
            '{data_model:{id:"hostilenetworks:elder_guardian"}}').weakNBT())
    .circuit(10)
    .itemOutputs(Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:elder_guardian"}}').strongNBT())
    .duration(20*30)
    .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.electric_simulation_chamber("blazesim")
    .notConsumable(
        Item.of(
            "hostilenetworks:data_model",
            '{data_model:{id:"hostilenetworks:blaze"}}').weakNBT())
    .circuit(1)
	.itemOutputs(
        "32x minecraft:blaze_rod")
    .duration(20*15)
    .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.electric_simulation_chamber("blazesim2")
    .notConsumable(
        Item.of(
            "hostilenetworks:data_model",
            '{data_model:{id:"hostilenetworks:blaze"}}').weakNBT())
    .circuit(10)
    .itemOutputs(Item.of(
        "2x hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:blaze"}}').strongNBT())
    .duration(20*15)
    .EUt(GTValues.VA[GTValues.MV]);
})