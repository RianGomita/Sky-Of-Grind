ServerEvents.recipes(event => {
    // Const


    // Individual Recipes

    event.recipes.gtceu.chemical_reactor("raw_life_essence")
        .itemInputs(
            "16x minecraft:rotten_flesh")
        .inputFluids(
            Fluid.of("gtceu:nitric_acid 1000"))
        .outputFluids(
            "gtceu:raw_life_essence 3000")
        .duration(20 * 10)
        .EUt((GTValues.VA[GTValues.IV]))

    event.recipes.gtceu.chemical_reactor("life_essence")
        .notConsumable(
            "bloodmagic:weakbloodorb")
        .inputFluids(
            Fluid.of("gtceu:processed_life_essence 3000"))
        .inputFluids(
            Fluid.of("gtceu:oxygen 1000"))
        .outputFluids(
            "bloodmagic:life_essence_fluid 7000")
        .duration(20 * 10)
        .EUt((GTValues.VA[GTValues.IV]))

    event.recipes.gtceu.chemical_reactor("better_calcium_chloride")
        .itemInputs(
            "3x gtceu:calcium_dust")
	    .inputFluids(
            "gtceu:chlorine 2000")
	    .itemOutputs(
            "6x gtceu:calcium_chloride_dust")
	    .duration(20 * 30)
	    .EUt((GTValues.VA[GTValues.HV]))

    event.recipes.gtceu.chemical_reactor("ethylbenzene_lcr")
        .inputFluids(
            Fluid.of("gtceu:ethylene 1000"))
        .inputFluids(
            Fluid.of("gtceu:benzene 1000"))
        .outputFluids(
            "gtceu:ethylbenzene 1000")
        .duration(20 * 20)
        .EUt((GTValues.VA[GTValues.HV]))

    event.recipes.gtceu.chemical_reactor("silver_nitrate_solution")
        .itemInputs(
            "gtceu:silver_dust")
        .inputFluids(
            "gtceu:nitric_acid 2000")
        .outputFluids(
            "gtceu:silver_nitrate_solution 1000",
            "gtceu:nitrogen_dioxide 1000")
        .duration(20 * 30)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.chemical_reactor("silicon_tetrachloride")
        .itemInputs(
            "gtceu:silicon_dust")
        .inputFluids(
            "gtceu:chlorine 4000")
        .outputFluids(
            "gtceu:silicon_tetrachloride")
        .duration(20 * 25)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.chemical_reactor("tetraethyl_orthosilicate")
        .inputFluids(
            "gtceu:silicon_tetrachloride 1000",
            "gtceu:ethanol 4000")
        .outputFluids(
            "gtceu:tetraethyl_orthosilicate 1000",
            "gtceu:hydrochloric_acid 4000")
        .duration(20 * 15)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.chemical_reactor("sodium_iodine")
        .itemInputs(
            "18x gtceu:sodium_hydroxide_dust",
            "6x gtceu:iodine_dust")
        .outputFluids(
            "minecraft:water 3000")
        .itemOutputs(
            "5x gtceu:sodium_iodate_dust",
            "10x gtceu:sodium_iodine_dust")
        .duration(20 * 25)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.chemical_reactor("photovoltaic_5")
    .itemInputs(
        "4x solarflux:photovoltaic_cell_4")
    .inputFluids(
        "gtceu:polybenzimidazole 63",
        "gtceu:naquadria 144")
    .itemOutputs(
        "2x solarflux:photovoltaic_cell_5")
    .circuit(24)
    .duration(20 * 5)
    .EUt(GTValues.VA[GTValues.ZPM]);

	event.recipes.gtceu.chemical_reactor("carbon_sulfide")
		.notConsumable(
            "gtceu:silicon_dioxide_dust")
		.inputFluids(
            "gtceu:methane 2000")
		.itemInputs(
            "8x gtceu:sulfur_dust")
  		.outputFluids(
            "gtceu:carbon_sulfide 2000",
            "gtceu:hydrogen_sulfide 4000")
  		.duration(20 * 40)
		.EUt((GTValues.VA[GTValues.LuV]))

	event.recipes.gtceu.chemical_reactor("sodium_dimethyldithiocarbamate")
		.inputFluids(
            "gtceu:dimethylamine 2000",
            "gtceu:carbon_sulfide 1000")
		.itemInputs(
            "3x gtceu:sodium_hydroxide_dust")
  		.outputFluids(
            "minecraft:water 1000")
		.itemOutputs(
            "5x gtceu:sodium_dimethyldithiocarbamate_dust")
  		.duration(20 * 55)
		.EUt((GTValues.VA[GTValues.UV]))

	event.recipes.gtceu.chemical_reactor("stearic_acid")
		.inputFluids(
            "gtceu:oleic_acid 1000",
            "gtceu:hydrogen 2000")
		.itemOutputs(
            "10x gtceu:stearic_acid_dust")
  		.duration(20 * 50)
		.EUt((GTValues.VA[GTValues.IV]))

	event.recipes.gtceu.chemical_reactor("cuprous_chloride")
		.itemInputs(
            "2x gtceu:copper_dust")
		.inputFluids(
            "gtceu:chlorine 2000")
		.itemOutputs(
            "2x gtceu:cuprous_chloride_dust")
		.duration(20 * 5)
		.EUt((GTValues.VA[GTValues.MV]))

	event.recipes.gtceu.chemical_reactor("antimony_pentafluoride")
		.itemInputs(
            "4x gtceu:antimony_trifluoride_dust")
		.inputFluids(
            "gtceu:fluorine 4000")
		.itemOutputs(
            "2x gtceu:antimony_pentafluoride_dust")
		.duration(20 * 25)
		.EUt((GTValues.VA[GTValues.IV]))
	
	event.recipes.gtceu.chemical_reactor("aluminium_chloride")
		.itemInputs(
            "2x gtceu:aluminium_dust")
		.inputFluids(
            "gtceu:chlorine 6000")
		.itemOutputs(
            "8x gtceu:aluminium_chloride_dust")
		.duration(20 * 15)
		.EUt((GTValues.VA[GTValues.HV]))

	event.recipes.gtceu.chemical_reactor("iron_sulfate")
		.itemInputs(
            "1x gtceu:iron_dust")
		.inputFluids(
            "gtceu:sulfuric_acid 1000")
		.itemOutputs(
            "6x gtceu:iron_sulfate_dust")
		.outputFluids(
            "gtceu:hydrogen 1000")
		.duration(20 * 25)
		.EUt((GTValues.VA[GTValues.EV]))

	event.recipes.gtceu.chemical_reactor("alumina")
		.itemInputs(
            "2x gtceu:aluminium_dust")
		.inputFluids(
            "gtceu:oxygen 3000")
		.itemOutputs(
            "5x gtceu:alumina_dust")
		.duration(20 * 15)
		.EUt((GTValues.VA[GTValues.MV]))

	event.recipes.gtceu.chemical_reactor("activated_cobalt_alumina_catalyst")
		.itemInputs(
            "5x gtceu:cobalt_alumina_catalyst_dust")
		.inputFluids(
            "gtceu:hydrogen 2000")
		.itemOutputs(
            "2x gtceu:activated_cobalt_alumina_catalyst_dust")
		.outputFluids(
            "minecraft:water 1000")
		.duration(20 * 16)
		.EUt((GTValues.VA[GTValues.LuV]))

	event.recipes.gtceu.chemical_reactor("manganese_sulfate")
		.itemInputs(
            "3x gtceu:pyrolusite_dust")
		.inputFluids(
            "gtceu:sulfuric_acid 2000")
		.itemOutputs(
            "6x gtceu:manganese_sulfate_dust")
		.outputFluids(
            "minecraft:water 2000")
		.duration(20 * 15)
		.EUt((GTValues.VA[GTValues.ZPM]))

	event.recipes.gtceu.chemical_reactor("manganese_carbonate")
		.itemInputs(
            "6x gtceu:manganese_sulfate_dust",
            "4x gtceu:soda_ash_dust")
		.itemOutputs(
            "5x gtceu:manganese_carbonate_dust")
		.duration(20 * 200)
		.EUt((GTValues.VA[GTValues.HV]))
	
	event.recipes.gtceu.chemical_reactor("manganese_acetate")
		.itemInputs(
            "5x gtceu:manganese_carbonate_dust")
		.inputFluids(
            "gtceu:acetic_acid 2000")
		.itemOutputs(
            "19x gtceu:manganese_acetate_dust")
		.outputFluids(
            "minecraft:water 1000",
            "gtceu:carbon_dioxide 1000")
		.duration(20 * 35)
		.EUt((GTValues.VA[GTValues.ZPM]))

	event.recipes.gtceu.chemical_reactor("sodium_cyanide")
		.itemInputs(
            "3x gtceu:sodium_hydroxide_dust")
		.inputFluids(
            "gtceu:hydrogen_cyanide 1000")
		.outputFluids(
            "minecraft:water 1000")
		.itemOutputs(
            "3x gtceu:sodium_cyanide_dust")
		.duration(20 * 25)
		.EUt((GTValues.VA[GTValues.EV]))

	event.recipes.gtceu.chemical_reactor("hydrazine_sulfate")
		.inputFluids(
            "gtceu:dinitrogen_tetroxide 1000",
            "gtceu:sulfuric_acid 1000")
		.itemOutputs(
            "13x gtceu:hydrazine_sulfate_dust")
		.duration(20 * 25)
		.EUt((GTValues.VA[GTValues.IV]))

	event.recipes.gtceu.chemical_reactor("acetone_cyanohydrin")
		.itemInputs(
            "3x gtceu:sodium_cyanide_dust",
            "13x gtceu:hydrazine_sulfate_dust")
		.inputFluids(
            "gtceu:acetone 1000")
		.itemOutputs(
            "7x gtceu:sodium_bisulfate_dust")
		.outputFluids(
            "gtceu:acetone_cyanohydrin 1500",
            "gtceu:ammonia 1000")
		.duration(20 * 15)
		.EUt((GTValues.VA[GTValues.IV]))

	event.recipes.gtceu.chemical_reactor("isobutyramide")
		.inputFluids(
            "gtceu:acetone_cyanohydrin 1000",
            "gtceu:dinitrogen_tetroxide 1000")
		.outputFluids(
            "gtceu:isobutyramide 1000",
            "minecraft:water 2000")
		.duration(20 * 23)
		.EUt((GTValues.VA[GTValues.IV]))

	event.recipes.gtceu.chemical_reactor("azo_isobutyronitrile")
		.inputFluids(
            "gtceu:isobutyramide 1000",
            "gtceu:chlorine 2000")
		.outputFluids(
            "gtceu:hydrochloric_acid 2000")
		.itemOutputs(
            "6x gtceu:azo_isobutyronitrile_dust")
		.duration(20 * 41)
		.EUt((GTValues.VA[GTValues.LuV]))
		
	event.recipes.gtceu.chemical_reactor("barium_chloride")
		.inputFluids(
            "gtceu:hydrochloric_acid 2000")
		.itemInputs(
            "2x gtceu:barium_sulfide_dust")
		.outputFluids(
            "gtceu:hydrogen_sulfide")
		.itemOutputs(
            "3x gtceu:barium_chloride_dust")
		.duration(20 * 35)
		.EUt((GTValues.VA[GTValues.IV]))

	event.recipes.gtceu.chemical_reactor("potassium_manganate")
		.inputFluids(
            "gtceu:oxygen 1000")
		.itemInputs(
            "6x gtceu:pyrolusite_dust",
            "12x gtceu:potassium_hydroxide_dust")
		.outputFluids(
            "minecraft:water 2000")
		.itemOutputs(
            "14x gtceu:potassium_manganate_dust")
		.duration(20 * 45)
		.EUt((GTValues.VA[GTValues.ZPM]))

	event.recipes.gtceu.chemical_reactor("barium_manganate")
		.inputFluids(
            "minecraft:water 1000")
		.itemInputs(
            "3x gtceu:barium_chloride_dust",
            "7x gtceu:potassium_manganate_dust")
		.itemOutputs(
            "6x gtceu:barium_manganate_dust",
            "4x gtceu:rock_salt_dust")
		.duration(20 * 60)
		.EUt((GTValues.VA[GTValues.UV]))

	event.recipes.gtceu.chemical_reactor("barium_permanganate")
		.inputFluids(
            "gtceu:sulfuric_acid 2000")
		.itemInputs(
            "18x gtceu:barium_manganate_dust")
		.itemOutputs(
            "11x gtceu:barium_permanganate_dust",
            "12x gtceu:barium_sulfate_dust",
            "3x gtceu:pyrolusite_dust")
		.outputFluids(
            "minecraft:water 2000")
		.duration(20 * 45)
		.EUt((GTValues.VA[GTValues.UV]))

	event.recipes.gtceu.chemical_reactor("cobalt_sulfate")
		.inputFluids(
            "gtceu:sulfuric_acid 1000")
		.itemInputs(
            "2x gtceu:cobalt_oxide_dust")
		.itemOutputs(
            "6x gtceu:cobalt_sulfate_dust")
		.outputFluids(
            "minecraft:water 1000")
		.duration(20 * 120)
		.EUt((GTValues.VA[GTValues.LuV]))

	event.recipes.gtceu.chemical_reactor("cobalt_permanganate_solution")
		.inputFluids(
            "minecraft:water 1000")
		.itemInputs(
            "2x gtceu:cobalt_oxide_dust",
            "11x gtceu:barium_permanganate_dust")
		.itemOutputs(
            "6x gtceu:barium_sulfate_dust")
		.outputFluids(
            "gtceu:cobalt_permanganate_solution 1000")
		.duration(20 * 210)
		.EUt((GTValues.VA[GTValues.UHV]))

	event.recipes.gtceu.chemical_reactor("hydro_ammonia_copper_chromate")
		.inputFluids(
            "minecraft:water 3000",
            "gtceu:ammonia 4000")
		.itemInputs(
            "12x gtceu:copper_sulfate_dust",
            "7x gtceu:potassium_dichromate_dust")
		.itemOutputs(
            "6x gtceu:hydro_ammonia_copper_chromate_dust",
            "7x gtceu:potassium_sulfate_dust",
            "15x gtceu:ammonium_sulfate_dust")
		.duration(20 * 150)
		.EUt((GTValues.VA[GTValues.UHV]))

	event.recipes.gtceu.chemical_reactor("trichlorosilane_synthesis")
		.itemInputs(
            "3x gtceu:silicon_dust")
		.inputFluids(
            "gtceu:hydrochloric_acid 3000")
		.outputFluids(
            "gtceu:trichlorosilane 2000",
            "gtceu:hydrogen 500")
		.duration(20 * 20)
		.EUt((GTValues.VA[GTValues.MV]))

	event.recipes.gtceu.chemical_reactor("calcium_carbide_production")
		.itemInputs(
            "3x gtceu:quicklime_dust",
            "2x gtceu:coke_dust")
  		.itemOutputs(
            "3x gtceu:calcium_carbide_dust")
		.outputFluids(
            "gtceu:carbon_monoxide 1000")
		.duration(20 * 10)
		.EUt((GTValues.VA[GTValues.HV]))

	event.recipes.gtceu.chemical_reactor("acetylene_generation")
		.itemInputs(
            "3x gtceu:calcium_carbide_dust")
		.inputFluids(
            "minecraft:water 2000")
		.outputFluids(
            "gtceu:acetylene 1000")
		.itemOutputs(
            "5x gtceu:calcium_hydroxide_dust")
		.duration(20 * 1)
		.EUt((GTValues.VA[GTValues.ZPM]))

	event.recipes.gtceu.chemical_reactor("neoprene_vulcanization")
		.itemInputs(
            "9x gtceu:raw_neoprene_dust",
            "gtceu:sulfur_dust")
		.outputFluids(
            "gtceu:neoprene 1296")
		.duration(20 * 30)
		.EUt((GTValues.VA[GTValues.LV]))

	event.recipes.gtceu.chemical_reactor("cumene_hydroperoxide")
		.notConsumable(
            "gtceu:cobalt_oxide_dust")
		.inputFluids(
            "gtceu:cumene 1000",
            "gtceu:oxygen 2000")
		.outputFluids(
            "gtceu:cumene_hydroperoxide 1000")
		.duration(20 * 8)
		.EUt((GTValues.VA[GTValues.LV]))
	
	event.recipes.gtceu.chemical_reactor("cumene_hydroperoxide_phenol_acetone")
		.inputFluids(
            "gtceu:cumene_hydroperoxide 1000")
		.outputFluids(
            "gtceu:phenol 1000",
            "gtceu:acetone 1000")
		.circuit(2)
		.duration(20 * 10)
		.EUt((GTValues.VA[GTValues.LV]))

	event.recipes.gtceu.chemical_reactor("difluorobenzophenone_synthesis")
		.inputFluids(
            "gtceu:fluorobenzene 2000",
            "gtceu:phosgene 1000")
		.notConsumable(
            "gtceu:aluminium_chloride_dust")
		.outputFluids(
            "gtceu:difluorobenzophenone 1000",
            "gtceu:hydrochloric_acid 2000")
		.duration(20 * 15)
		.EUt((GTValues.VA[GTValues.UV]))

	event.recipes.gtceu.chemical_reactor("thionyl_chloride_synthesis")
		.inputFluids(
            "gtceu:phosgene 1000",
            "gtceu:sulfur_dioxide 1000")
		.outputFluids(
            "gtceu:thionyl_chloride 1000",
            "gtceu:carbon_dioxide 1000", )
		.duration(20 * 10)
		.EUt((GTValues.VA[GTValues.UV]))

	event.recipes.gtceu.chemical_reactor("benzene_sulfonation")
		.inputFluids(
            "gtceu:benzene 1000",
            "gtceu:sulfuric_acid 1000") 
		.itemOutputs(
            "6x gtceu:benzenesulfonic_acid_dust")
		.duration(20 * 12)
		.EUt((GTValues.VA[GTValues.EV]))

	event.recipes.gtceu.chemical_reactor("butynediol_synthesis")
		.inputFluids(
            "gtceu:formaldehyde 2000",
            "gtceu:acetylene 1000")
		.notConsumable(
            "gtceu:copper_dust") 
		.notConsumable(
            "gtceu:bismuth_dust")
		.itemOutputs(
            "12x gtceu:butynediol_dust")
		.duration(20 * 12)
		.EUt((GTValues.VA[GTValues.IV]))
	
	event.recipes.gtceu.chemical_reactor("butanediol_synthesis")
		.inputFluids(
            "gtceu:hydrogen 16000")
		.notConsumable(
            "gtceu:platinum_dust")
		.itemInputs(
            "6x gtceu:butynediol_dust")
		.outputFluids(
            "gtceu:butanediol 500")
		.itemOutputs(
            "7x gtceu:butenediol_dust")
		.duration(20 * 20)
		.EUt((GTValues.VA[GTValues.ZPM]))

	event.recipes.gtceu.chemical_reactor("sodium_hypochlorite")
		.itemInputs(
            "6x gtceu:sodium_hydroxide_dust")
		.inputFluids(
            "gtceu:chlorine 2000")
		.itemOutputs(
            "2x gtceu:salt_dust",
            "3x gtceu:sodium_hypochlorite_dust")
		.outputFluids(
            "minecraft:water 1000")
		.duration(20 * 25)
		.EUt((GTValues.VA[GTValues.HV]))

	event.recipes.gtceu.chemical_reactor("brine_acidification")
		.inputFluids(
            "gtceu:super_concentrated_heavy_brine 2000",
            "gtceu:sulfuric_acid 1000")
		.outputFluids(
            "gtceu:acidified_heavy_brine 3000")
		.duration(20 * 5)
		.EUt((GTValues.VA[GTValues.LuV]))

	event.recipes.gtceu.chemical_reactor("bromine_oxidation")
		.inputFluids(
            "gtceu:acidified_heavy_brine 2000",
            "gtceu:chlorine 1000")
		.outputFluids(
            "gtceu:bromine 500",
            "gtceu:depleted_heavy_brine 1500")
		.duration(20 * 13)
		.EUt((GTValues.VA[GTValues.UV]))

	event.recipes.gtceu.chemical_reactor("iodide_elution")
		.itemInputs(
            "4x gtceu:iodide_loaded_resin_plate",
            "3x gtceu:sodium_hydroxide_dust")
		.inputFluids(
            "minecraft:water 1000")
		.outputFluids(
            "gtceu:sodium_iodide_solution 1200")
		.itemOutputs(
            "2x gtceu:epoxy_plate")
		.duration(20 * 25)
		.EUt((GTValues.VA[GTValues.UHV]))

	event.recipes.gtceu.chemical_reactor("tripropylamine_synthesis")
		.inputFluids(
            "gtceu:propylamine 1000",
            "gtceu:propene 2000")
		.notConsumable(
            "gtceu:zeolite_dust")
		.outputFluids(
            "gtceu:tripropylamine 1500",
            "gtceu:ammonia 500")
		.duration(20 * 12)
		.EUt((GTValues.VA[GTValues.UV]))

	event.recipes.gtceu.chemical_reactor("pyridine_acid_extraction")
		.inputFluids(
            "gtceu:pyridine_bases 1000",
            "gtceu:sulfuric_acid 1000")
		.outputFluids(
            "gtceu:pyridine_sulfate_solution 1500")
		.duration(20 * 28)
		.EUt((GTValues.VA[GTValues.EV]))

	event.recipes.gtceu.chemical_reactor("pyridine_liberation")
		.itemInputs(
            "3x gtceu:sodium_hydroxide_dust")
		.inputFluids(
            "gtceu:pyridine_sulfate_solution 1000",
            "minecraft:water 500")
		.itemOutputs(
            "3x gtceu:sodium_bisulfate_dust")
		.outputFluids(
            "gtceu:crude_pyridine 800")
		.duration(20 * 32)
		.EUt((GTValues.VA[GTValues.LuV]))

	event.recipes.gtceu.chemical_reactor("chloropyridine_solution_synthesis")
		.inputFluids(
            "gtceu:pure_pyridine 2000",
            "gtceu:chlorine 6000",
            "gtceu:steam 2000")
		.outputFluids(
            "gtceu:chloropyridine_solution 2000")
		.duration(20 * 45)
		.EUt((GTValues.VA[GTValues.UEV]))

	event.recipes.gtceu.chemical_reactor("dichloropyridine_synthesis")
		.inputFluids(
            "gtceu:chloropyridine 1000",
            "gtceu:chlorine 2000")
		.itemOutputs(
            "8x gtceu:dichloropyridine_dust")
		.outputFluids(
            "gtceu:hydrochloric_acid 1000")
		.duration(20 * 35)
		.EUt((GTValues.VA[GTValues.UIV]))

	event.recipes.gtceu.chemical_reactor("phosphorus_trichloride")
		.inputFluids(
            "gtceu:chlorine 12000")
		.itemInputs(
            "4x gtceu:phosphorus_dust")
		.outputFluids(
            "gtceu:phosphorus_trichloride 4000")
		.circuit(3)
		.duration(20 * 25)
		.EUt((GTValues.VA[GTValues.EV]))

	event.recipes.gtceu.chemical_reactor("phosphorus_pentachloride")
		.inputFluids(
            "gtceu:phosphorus_trichloride 1000",
            "gtceu:chlorine 2000")
		.itemOutputs(
            "6x gtceu:phosphorus_pentachloride_dust")
		.duration(20 * 35)
		.EUt((GTValues.VA[GTValues.UV]))

	event.recipes.gtceu.chemical_reactor("fumaric_acid_synthesis")
		.inputFluids(
            "gtceu:furfural 1000",
            "gtceu:oxygen 3000")
		.notConsumable(
            "gtceu:vanadium_dust")
		.itemOutputs(
            "12x gtceu:fumaric_acid_dust")
		.outputFluids(
            "gtceu:carbon_monoxide 1000")
		.duration(20 * 35)
		.EUt((GTValues.VA[GTValues.UEV]))

	event.recipes.gtceu.chemical_reactor("triphosphoric_acid")
		.inputFluids(
            "gtceu:phosphoric_acid 1000",
            "gtceu:pyrophosphoric_acid 1000")
		.outputFluids(
            "gtceu:triphosphoric_acid 1000",
            "minecraft:water 1000")
		.duration(20 * 25)
		.EUt((GTValues.VA[GTValues.UHV]))

	event.recipes.gtceu.chemical_reactor("tetraphosphoric_acid")
		.inputFluids(
            "gtceu:phosphoric_acid 1000",
            "gtceu:triphosphoric_acid  1000")
		.outputFluids(
            "gtceu:tetraphosphoric_acid 1000",
            "minecraft:water 1000")
		.duration(20 * 30)
		.EUt((GTValues.VA[GTValues.UEV]))
})