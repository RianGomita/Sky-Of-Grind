ServerEvents.recipes(event => {
    // Const


    // Individual Recipes

    event.recipes.gtceu.alloy_smelter("soularium")
        .itemInputs(
            "8x gtceu:brass_ingot",
            "8x minecraft:soul_sand")
        .itemOutputs(
            "4x enderio:soularium_ingot")
        .duration(20 * 5)
        .EUt(8)

    event.recipes.gtceu.alloy_smelter("soulsand")
        .itemInputs(
            "8x minecraft:ink_sac",
            "16x minecraft:sand")
        .itemOutputs(
            "4x minecraft:soul_sand")
        .duration(20 * 7)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.alloy_smelter("conduitbinder")
        .itemInputs(
            "8x enderio:conduit_binder_composite",
            "2x enderio:soularium_ingot")
        .itemOutputs(
            "12x enderio:conduit_binder")
        .duration(20 * 3)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.alloy_smelter("quartzglass")
        .itemInputs(
            "5x gtceu:certus_quartz_dust",
            "4x #forge:glass")
        .itemOutputs(
            "4x ae2:quartz_glass")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.alloy_smelter("neodymium")
        .itemInputs(
            "8x gtceu:potin_dust",
            "4x gtceu:stainless_steel_dust")
        .itemOutputs(
            "4x gtceu:neodymium_dust")
        .duration(20 * 6)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.alloy_smelter("skystonedust")
        .itemInputs(
            "ae2:fluix_crystal",
            "gtceu:stone_dust")
        .itemOutputs(
            "ae2:sky_dust")
        .duration(20 * 3)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.alloy_smelter("marble")
        .itemInputs(
            "gtceu:calcite_dust",
            "exdeorum:compressed_cobblestone")
        .itemOutputs(
            "gtceu:marble")
        .duration(20 * 200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.alloy_smelter("galliumarsenide")
        .itemInputs(
            "gtceu:arsenic_dust",
            "gtceu:gallium_dust")
        .itemOutputs(
            "gtceu:gallium_arsenide_dust")
        .duration(20 * 200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.alloy_smelter("copperalloy")
        .itemInputs(
            "2x gtceu:annealed_copper_ingot",
            "gtceu:red_alloy_ingot")
        .itemOutputs(
            "4x enderio:copper_alloy_ingot")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.alloy_smelter("energeticalloy")
        .itemInputs(
            "24x minecraft:glowstone_dust",
            "enderio:copper_alloy_ingot")
        .itemOutputs(
            "4x enderio:energetic_alloy_ingot")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.alloy_smelter("vibrantalloy")
        .itemInputs(
            "8x gtceu:aluminium_ingot",
            "enderio:pulsating_alloy_ingot")
        .itemOutputs(
            "4x enderio:vibrant_alloy_ingot")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.alloy_smelter("endsteel")
        .itemInputs(
            "2x gtceu:steel_ingot",
            "16x minecraft:end_stone")
        .itemOutputs(
            "4x enderio:end_steel_ingot")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.alloy_smelter("darksteel")
        .itemInputs(
            "2x gtceu:steel_ingot",
            "enderio:soularium_ingot")
        .itemOutputs(
            "4x enderio:dark_steel_ingot")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.alloy_smelter("netherite")
        .itemInputs(
            "4x minecraft:netherite_scrap",
            "4x minecraft:gold_ingot")
        .itemOutputs(
            "minecraft:netherite_ingot")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.HV]);
})