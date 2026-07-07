ServerEvents.recipes(event => {
    // Const

    
    // Individual Recipes

    event.recipes.gtceu.arc_furnace("lead")
        .itemInputs(
            "gtceu:raw_tin")
        .inputFluids(
            "gtceu:oxygen 63")
        .itemOutputs(
            "gtceu:raw_lead")
        .duration(5)
        .EUt(4)

    event.recipes.gtceu.arc_furnace("diamond")
        .itemInputs(
            "gtceu:raw_coal")
        .inputFluids(
            "gtceu:oxygen 63")
        .itemOutputs(
            "gtceu:raw_diamond")
        .duration(5)
        .EUt(4)

    event.recipes.gtceu.arc_furnace("silver")
        .itemInputs(
            "minecraft:raw_iron")
        .inputFluids(
            "gtceu:oxygen 63")
        .itemOutputs(
            "gtceu:raw_silver")
        .duration(5)
        .EUt(4)

    event.recipes.gtceu.arc_furnace("zinc")
        .itemInputs(
            "minecraft:raw_gold")
        .inputFluids(
            "gtceu:oxygen 63")
        .itemOutputs(
            "gtceu:raw_sphalerite")
        .duration(5)
        .EUt(4)

    event.recipes.gtceu.arc_furnace("lapis")
        .itemInputs(
            "gtceu:raw_diamond")
        .inputFluids(
            "gtceu:oxygen 63")
        .itemOutputs(
            "gtceu:raw_lapis")
        .duration(5)
        .EUt(4)

    event.recipes.gtceu.arc_furnace("quartz")
        .itemInputs(
            "gtceu:raw_silver")
        .inputFluids(
            "gtceu:oxygen 63")
        .itemOutputs(
            "gtceu:raw_nether_quartz")
        .duration(5)
        .EUt(4)

    event.recipes.gtceu.arc_furnace("quartzite")
        .itemInputs(
            "gtceu:raw_nether_quartz")
        .inputFluids(
            "gtceu:nitrogen 63")
        .itemOutputs(
            "gtceu:raw_quartzite")
        .duration(5)
        .EUt(4)

    event.recipes.gtceu.arc_furnace("nickel")
        .itemInputs(
            "minecraft:raw_copper")
        .inputFluids(
            "gtceu:nitrogen 63")
        .itemOutputs(
            "gtceu:raw_nickel")
        .duration(5)
        .EUt(4)

    event.recipes.gtceu.arc_furnace("sapph")
        .itemInputs(
            "gtceu:raw_lapis")
        .inputFluids(
            "gtceu:nitrogen 63")
        .itemOutputs(
            "gtceu:sapphire_gem")
        .duration(5)
        .EUt(4)

    event.recipes.gtceu.arc_furnace("clay")
        .itemInputs(
            "exdeorum:dust")
        .inputFluids(
            "minecraft:water 1000")
        .itemOutputs(
            "minecraft:clay")
        .duration(20 * 3)
        .EUt((GTValues.VA[GTValues.MV]))

    event.recipes.gtceu.arc_furnace("watert2")
        .itemInputs(
            "watersources:water_source_tier_1")
        .inputFluids(
            "gtceu:distilled_water 5000")
        .itemOutputs(
            "watersources:water_source_tier_2")
        .duration(20 * 40)
        .EUt((GTValues.VA[GTValues.MV]))

    event.recipes.gtceu.arc_furnace("potasio")
        .itemInputs(
            "gtceu:calcite_dust")
        .inputFluids(
            "gtceu:nitrogen_dioxide 63")
        .itemOutputs(
            "2x gtceu:potassium_dust")
        .duration(15)
        .EUt((GTValues.VA[GTValues.HV]))

    event.recipes.gtceu.arc_furnace("platinumsludge")
        .itemInputs(
            "gtceu:platinum_dust")
        .inputFluids(
            "gtceu:nitric_acid 1000")
        .itemOutputs(
            "4x gtceu:platinum_group_sludge_dust")
        .duration(120)
        .EUt((GTValues.VA[GTValues.IV]))

    event.recipes.gtceu.arc_furnace("reactive_waste")
        .itemInputs(
            "2x kubejs:reactive_chaos_waste")
        .inputFluids(
            Fluid.of("gtceu:antimatter", 576))
        .itemOutputs(
            "1x kubejs:reactive_chaos_pellet")
        .duration(20 * 5)
        .EUt((GTValues.VA[GTValues.UXV]))
})