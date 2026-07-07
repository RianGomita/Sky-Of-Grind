ServerEvents.recipes(event => {
    // Const

    const universalcircuitrecipes = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv"]
        universalcircuitrecipes.forEach((level) => {
            event.recipes.gtceu.forming_press("kubejs:" + level + "_universal_circuit")
            .itemInputs(
                "#gtceu:circuits/" + level)
            .itemOutputs(
                "kubejs:" + level + "_universal_circuit")
            .EUt(32)
            .duration(5)
        })


    // Individual Recipes

    event.recipes.gtceu.forming_press("flux_dust")
        .itemInputs(
            "minecraft:obsidian",
            "4x gtceu:californium_dust")
        .notConsumable(
            "gtceu:crystal_matrix_block")
        .itemOutputs(
            "fluxnetworks:flux_dust")
        .duration(20 * 25)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.forming_press("earth_globe")
        .itemInputs(
            "64x exdeorum:compressed_diorite",
            "64x exdeorum:compressed_cobblestone",
            "64x exdeorum:compressed_granite",
            "64x exdeorum:compressed_andesite",
            "64x exdeorum:compressed_gravel")
        .notConsumable(
            "extendedcrafting:nether_star_block")
        .itemOutputs(
            "ad_astra:earth_globe")
        .duration(20 * 25)

    event.recipes.gtceu.forming_press("cupro_credit")
        .itemInputs(
            "gtceu:cupronickel_plate")
        .notConsumable(
            "gtceu:cylinder_casting_mold")
        .itemOutputs(
            "4x gtmutils:cupronickel_credit")
        .duration(20 * 5)
        .EUt((GTValues.VA[GTValues.LV]))

    event.recipes.gtceu.forming_press("moonglobe")
        .itemInputs(
            "gtceu:stainless_steel_block")
        .notConsumable(
            "ae2:name_press")
        .notConsumable(
            "ad_astra:moon_globe")
        .itemOutputs(
            "ad_astra:moon_globe")
        .duration(20 * 25)
        .EUt((GTValues.VA[GTValues.HV]))

    event.recipes.gtceu.forming_press("neutronium_drill_head")
        .itemInputs(
            "4x gtceu:neutronium_plate",
            "4x gtceu:steel_plate")
        .itemOutputs(
            "gtceu:neutronium_drill_head")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.forming_press("ultra_reflective_sapphire_wafer")
        .itemInputs(
            "2x kubejs:silver_doped_sapphire_wafer",
            "kubejs:antimatter_wafer")
        .itemOutputs(
            "kubejs:ultra_reflective_sapphire_wafer")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UXV])
})