ServerEvents.recipes(event => {
    // Const


    // Individual Recipes


    event.recipes.gtceu.chemical_bath("processed_life_essence")
        .notConsumable(
            "bloodmagic:weakbloodorb")
        .inputFluids(
            Fluid.of("gtceu:inert_life_essence 3000"))
        .outputFluids(
            "gtceu:processed_life_essence 3000")
        .duration(20 * 10)
        .EUt((GTValues.VA[GTValues.IV]))

    event.recipes.gtceu.chemical_bath("meat")
        .itemInputs(
            "16x minecraft:rotten_flesh")
        .inputFluids(
            Fluid.of("bloodmagic:life_essence_fluid 16000"))
        .itemOutputs(
            "minecraft:porkchop")
        .duration(20 * 25)
        .EUt((GTValues.VA[GTValues.HV]))

    event.recipes.gtceu.chemical_bath("nanoreinforced_silver")
        .itemInputs(
            "4x gtceu:double_carbon_nanotubes_plate")
        .inputFluids(
            "gtceu:silver_nitrate_solution 4000")
        .itemOutputs(
            "4x gtceu:nanoreinforced_silver_dust")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UEV])

	event.recipes.gtceu.chemical_bath("carbon_nanotubes_doped_aluminium_chloride")
		.itemInputs(
            "32x gtceu:wet_carbon_nanotubes_foil")
		.inputFluids(
            "gtceu:sulfuric_acid 5000")
		.itemOutputs(
            "8x gtceu:carbon_nanotubes_dust")
		.outputFluids(
            "gtceu:diluted_sulfuric_acid 2500")
		.duration(20 * 10)
		.EUt((GTValues.VA[GTValues.UV]))

	event.recipes.gtceu.chemical_bath("deep_water_filtration")
		.itemInputs(
            "16x kubejs:carbon_nanotubes_filter",
            "500x gtceu:endosulfate_dust")
		.inputFluids(
            "gtceu:deep_water 1000000000")
		.itemOutputsRanged(
            "kubejs:carbon_nanotubes_filter", 2, 8)
		.itemOutputsRanged(
            "kubejs:damaged_carbon_nanotubes_filter", 2, 8)
		.outputFluids(
            "gtceu:filtered_deep_water 800000000")
		.duration(20 * 600)
		.EUt((GTValues.VA[GTValues.UEV]))

	event.recipes.gtceu.chemical_bath("iodide_adsorption")
		.inputFluids(
            "gtceu:depleted_heavy_brine 1000")
		.itemInputs(
            "4x gtceu:epoxy_plate",
            "4x gtceu:silver_foil")
		.itemOutputs(
            "4x gtceu:iodide_loaded_resin_plate")
		.outputFluids(
            "gtceu:demineralized_heavy_brine 800")
		.duration(20 * 35)
		.EUt((GTValues.VA[GTValues.UV]))

	event.recipes.gtceu.chemical_bath("tpab_crystallization")
		.inputFluids(
            "gtceu:tetrapropylammonium_bromide_solution 1000")
		.notConsumable(
            "gtceu:blacklight")
		.itemOutputs(
            "3x gtceu:crude_tetrapropylammonium_bromide_dust")
		.outputFluids(
            "minecraft:water 250")
		.duration(20 * 30)
		.EUt((GTValues.VA[GTValues.ZPM]))

	event.recipes.gtceu.chemical_bath("tpab_recrystallization")
		.itemInputs(
            "10x gtceu:crude_tetrapropylammonium_bromide_dust")
		.inputFluids(
            "gtceu:ethanol 1000")
		.itemOutputs(
            "10x gtceu:tetrapropylammonium_bromide_dust")
		.outputFluids(
            "gtceu:diluted_ethanol 500")
		.duration(20 * 20)
		.EUt((GTValues.VA[GTValues.ZPM]))

    event.recipes.gtceu.chemical_bath("pure_trisulfate_solution")
        .notConsumable(
            "gtceu:quantum_star")
        .inputFluids(
            "gtceu:trisulfate_solution 1000")
        .outputFluids(
            "gtceu:pure_trisulfate_solution 990")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(5)
        .EUt((GTValues.VA[GTValues.UV]))

    event.recipes.gtceu.chemical_bath("hotstabilizedenrichedthoriumfuel")
        .inputFluids(
            "gtceu:lightly_plasmacracked_unstable_enriched_thorium_fuel 30000")
        .chancedInput(
            "4x gtceu:gravi_star", 2500, 0)
        .outputFluids(
            "gtceu:hot_stabilized_enriched_thorium_fuel 30000")
        .duration(20 * 100)
        .EUt((GTValues.VA[GTValues.UV]))	 
})