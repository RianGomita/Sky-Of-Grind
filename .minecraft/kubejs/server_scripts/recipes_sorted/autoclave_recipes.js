ServerEvents.recipes(event => {
    // Const


    // Individual Recipes

    event.recipes.gtceu.autoclave("starmold")
        .inputFluids(
            Fluid.of("gtceu:star_matter", 144))
        .itemInputs(
            "gtceu:empty_mold")
        .itemOutputs(
            "kubejs:star_extruder_mold")
        .duration(20 * 100)
        .EUt((GTValues.VA[GTValues.IV]))

    event.recipes.gtceu.autoclave("nether_star")
        .inputFluids(
            Fluid.of("gtceu:star_matter", 144))
        .notConsumable(
            "kubejs:star_extruder_mold")
        .itemOutputs(
            "minecraft:nether_star")
        .duration(20 * 1)
        .EUt((GTValues.VA[GTValues.LuV]))

    event.recipes.gtceu.autoclave("weakbloodorb_dupe")
        .notConsumable(
            "bloodmagic:weakbloodorb")
        .inputFluids(
            Fluid.of("gtceu:inert_life_essence 3000"))
        .itemOutputs(
            "bloodmagic:weakbloodorb")
        .duration(20 * 20)
        .EUt((GTValues.VA[GTValues.IV]))

    event.recipes.gtceu.autoclave("sky_steel")
        .inputFluids(
            Fluid.of("gtceu:iron", 144))
        .itemInputs(
            "gtceu:certus_quartz_gem",
            "ae2:sky_dust")
        .itemOutputs(
            "megacells:sky_steel_ingot")
        .duration(20 * 1)
        .EUt((GTValues.VA[GTValues.HV]))

    event.recipes.gtceu.autoclave("condensed_nether_star")
        .inputFluids(
            Fluid.of("gtceu:condensed_star_matter", 144))
        .notConsumable(
            "kubejs:star_extruder_mold")
        .itemOutputs(
            "16x minecraft:nether_star")
        .duration(20 * 1)
        .EUt((GTValues.VA[GTValues.LuV]))

    event.recipes.gtceu.autoclave("gtceu:ac/acidic_resonant_residue")
        .itemInputs(
            "kubejs:primal_resonant_core")
        .inputFluids(
            Fluid.of("gtceu:acidic_venus_residue 144"))
        .outputFluids(
            Fluid.of("gtceu:resonant_essence_residue 1000"))
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.autoclave("resonant_matrix")
        .inputFluids(
            Fluid.of("gtceu:resonant_naquadah", 144))
        .itemInputs(
            "gtceu:crystal_matrix_ingot")
        .itemOutputs(
            "avaritia:crystal_matrix_ingot")
        .duration(20 * 1)
        .EUt((GTValues.VA[GTValues.UHV]))

    event.recipes.gtceu.autoclave("crystal_superconductor")
        .inputFluids(
            Fluid.of("gtceu:europium", 144))
        .itemInputs(
            "gtceu:crystal_soc")
        .itemOutputs(
            "4x gtceu:crystal_superconductor_ingot")
        .duration(20 * 19)
        .EUt((GTValues.VA[GTValues.ZPM]))

    event.recipes.gtceu.autoclave("glow_ink_sac")
        .itemInputs(
            "1x minecraft:ink_sac")
        .inputFluids(
            Fluid.of("gtceu:glowstone", 144))
        .itemOutputs(
            "1x minecraft:glow_ink_sac")
        .duration(20 * 5)
        .EUt(16)

    event.recipes.gtceu.autoclave("sapphire_boule")
        .itemInputs(
            "gtceu:sapphire_rod",
            "16x gtceu:exquisite_quartzite_gem")
        .perTick(true)
        .inputFluids(
            "gtceu:excited_blaze_concentate 15")
        .perTick(false)
        .cleanroom(BlazingCleanroom.BLAZING_CLEANROOM)
        .chancedOutput(
            "kubejs:sapphire_boule", 1250, 0)
        .chancedOutput(
            "4x gtceu:exquisite_sapphire_gem", 8750, 0)
        .chancedItemOutputLogic("xor")
        .duration(20 * 60)
        .EUt(GTValues.VA[GTValues.UXV])

	event.recipes.gtceu.autoclave("thermal_crosslinking")
		.inputFluids(
            "gtceu:pe_peroxide_mixture 500")
		.notConsumable(
            "gtceu:quantum_star")
		.notConsumable(
            "gtceu:plate_casting_mold")
		.itemOutputs(
            "3x gtceu:thermal_treated_xlpe_plate")
		.duration(20 * 15)
		.EUt((GTValues.VA[GTValues.UV]))

	event.recipes.gtceu.autoclave("wet_carbon_nanotubes")
		.itemInputs(
            "2x gtceu:carbon_fiber_mesh")
		.inputFluids(
            "gtceu:raw_carbon_nanotubes_solution 1000")
		.itemOutputs(
            "4x gtceu:wet_carbon_nanotubes_foil")
		.duration(20 * 10)
		.EUt((GTValues.VA[GTValues.UV]))

	event.recipes.gtceu.autoclave("zsm_5")
		.itemInputs(
            "16x gtceu:polytetrafluoroethylene_foil")
		.inputFluids(
            "gtceu:zsm_5_solution 2000")
		.itemOutputs(
            "4x gtceu:zsm_5_dust")
		.duration(20 * 20)
		.EUt((GTValues.VA[GTValues.UHV]))
})