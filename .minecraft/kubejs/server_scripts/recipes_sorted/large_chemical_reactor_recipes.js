ServerEvents.recipes(event => {
    // Const


    // Individual Recipes

    event.recipes.gtceu.large_chemical_reactor("hrcb")
        .itemInputs(
            "2x gtceu:wetware_circuit_board",
            "64x gtceu:antimatter_foil",
            "kubejs:antimatter_boule")
        .inputFluids(
            Fluid.of("gtceu:antimatter", 100))
        .itemOutputs(
            "4x kubejs:highly_resonative_circuit_board")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(20 * 45)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.large_chemical_reactor("hrcb2")
        .itemInputs(
            "kubejs:highly_resonative_circuit_board",
            "32x gtceu:resonant_essence_single_wire")
        .inputFluids(
            Fluid.of("gtceu:antimatter", 100))
        .itemOutputs(
            "kubejs:highly_resonative_printed_circuit_board")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(20 * 90)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.large_chemical_reactor("red_granite")
        .itemInputs(
            "minecraft:granite")
        .inputFluids(
            Fluid.of("gtceu:redstone", 144))
        .itemOutputs(
            "gtceu:red_granite")
        .circuit(8)
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.large_chemical_reactor("multilayer_fiber_reinforced_circuit_board_neoprene")
        .itemInputs(
            "2x gtceu:fiber_reinforced_circuit_board",
            "8x gtceu:palladium_foil",
            "4x gtceu:neoprene_foil")
        .inputFluids(
            "gtceu:sulfuric_acid 500")
        .itemOutputs(
            "gtceu:multilayer_fiber_reinforced_circuit_board")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(20 * 25)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.large_chemical_reactor("wetware_printed_circuit_board_xlpe_sp")
        .itemInputs(
            "gtceu:wetware_circuit_board",
            "32x gtceu:niobium_titanium_foil",
            "16x gtceu:xlpe_foil")
        .inputFluids(
            "gtceu:sodium_persulfate 10000")
        .itemOutputs(
            "gtceu:wetware_printed_circuit_board")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(20 * 112.5)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.large_chemical_reactor("wetware_printed_circuit_board_xlpe_ic")
        .itemInputs(
            "gtceu:wetware_circuit_board",
            "32x gtceu:niobium_titanium_foil",
            "16x gtceu:xlpe_foil")
        .inputFluids(
            "gtceu:iron_iii_chloride 5000")
        .itemOutputs(
            "gtceu:wetware_printed_circuit_board")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(20 * 112.5)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.large_chemical_reactor("excited_blaze_concentate")
        .itemInputs(
            "32x gtceu:carbon_nanotubes_dust",
            "64x kubejs:reactive_chaos_dust")
        .inputFluids(
            "gtceu:overheated_blaze 1000",
            "gtceu:sulfur_trioxide 3000",
            "gtceu:neutronium 1500")
        .outputFluids(
            "gtceu:excited_blaze_concentate 2000")
        .duration(20 * 24)
        .EUt(GTValues.VA[GTValues.UIV])

	event.recipes.gtceu.large_chemical_reactor("triethylaluminium")
		.inputFluids(
            "gtceu:hydrogen 6000",
            "gtceu:ethylene 6000")
		.itemInputs(
            "1x gtceu:aluminium_dust")
  		.outputFluids(
            "gtceu:triethylaluminium 2000")
		.circuit(3)
  		.duration(20 * 35)
		.EUt((GTValues.VA[GTValues.UV]))

	event.recipes.gtceu.large_chemical_reactor("tetramethylthiuramdisulfide")
		.inputFluids(
            "gtceu:hydrogen_peroxide 1000")
		.itemInputs(
            "10x gtceu:sodium_dimethyldithiocarbamate_dust")
		.itemOutputs(
            "5x gtceu:tetramethylthiuramdisulfide_dust",
            "6x gtceu:sodium_hydroxide_dust")
  		.duration(20 * 25)
		.EUt((GTValues.VA[GTValues.UV]))

	event.recipes.gtceu.large_chemical_reactor("sodium_acetate")
		.inputFluids(
            "gtceu:hydrochloric_acid 1000")
		.itemInputs(
            "1x gtceu:sodium_acetate_dust")
  		.outputFluids(
            "gtceu:acetic_acid 1000")
		.itemOutputs(
            "1x gtceu:salt_dust")
  		.duration(20 * 5)
		.EUt((GTValues.VA[GTValues.EV]))

	event.recipes.gtceu.large_chemical_reactor("cobalt_alumina_catalyst")
		.itemInputs(
            "2x gtceu:alumina_dust",
            "3x gtceu:cobalt_oxide_dust")
		.notConsumable(
            "gtceu:platinum_dust")
		.itemOutputs(
            "5x gtceu:cobalt_alumina_catalyst_dust")
		.duration(20 * 32)
		.EUt((GTValues.VA[GTValues.LuV]))

	event.recipes.gtceu.large_chemical_reactor("nickel_bromide")
		.itemInputs(
            "5x gtceu:nickel_dust",
            "2x gtceu:boron_dust")
		.notConsumable(
            "gtceu:platinum_dust")
		.itemOutputs(
            "7x gtceu:nickel_bromide_dust")
		.duration(20 * 25)
		.EUt((GTValues.VA[GTValues.EV]))

	event.recipes.gtceu.large_chemical_reactor("dimethyldichlorosilane")
		.inputFluids(
            "gtceu:pure_trichlorosilane 1000",
            "gtceu:methane 2000")
		.notConsumable(
            "gtceu:copper_dust") 
		.outputFluids(
            "gtceu:dimethyldichlorosilane 1500",
            "gtceu:hydrochloric_acid 500")
		.duration(20 * 10)
		.EUt((GTValues.VA[GTValues.HV]))
	 
	event.recipes.gtceu.large_chemical_reactor("silicone_prepolymer")
		.inputFluids(
            "gtceu:dimethyldichlorosilane 1000",
            "minecraft:water 2000")
		.outputFluids(
            "gtceu:silicone_prepolymer 1500",
            "gtceu:hydrochloric_acid 1000")
		.duration(20 * 20)
		.EUt((GTValues.VA[GTValues.HV]))

	event.recipes.gtceu.large_chemical_reactor("sbr_emulsion")
  		.inputFluids(
            "gtceu:butadiene 750",
            "gtceu:styrene 250",
            "minecraft:water 1000")
  		.outputFluids(
            "gtceu:sbr_emulsion 2000")
  		.duration(20 * 15)
		.EUt((GTValues.VA[GTValues.HV]))

	event.recipes.gtceu.large_chemical_reactor("hydrazobenzene")
  		.inputFluids(
            "gtceu:nitrobenzene 2000")
		.notConsumable(
            "gtceu:zinc_dust") 
		.itemInputs(
            "2x gtceu:potassium_hydroxide_dust",
            "2x gtceu:carbon_dust")
  		.outputFluids(
            "gtceu:hydrazobenzene 1000",
            "gtceu:carbon_monoxide 1000")
		.itemOutputs(
            "6x gtceu:potassium_carbonate_dust")
  		.duration(20 * 15)
		.EUt((GTValues.VA[GTValues.HV]))
	
	event.recipes.gtceu.large_chemical_reactor("diacetyl_benzidine")
  		.inputFluids(
            "gtceu:hydrazobenzene 1000",
            "gtceu:acetic_anhydride 2000")
  		.outputFluids(
            "gtceu:diacetyl_benzidine 1000",
            "gtceu:acetic_acid 2000")
  		.duration(20 * 30)
		.EUt((GTValues.VA[GTValues.EV]))

	event.recipes.gtceu.large_chemical_reactor("dinitro_diacetyl_benzidine")
  		.inputFluids(
            "gtceu:diacetyl_benzidine 1000",
            "gtceu:nitric_acid 2000")
  		.outputFluids(
            "gtceu:dinitro_diacetyl_benzidine 1000",
            "minecraft:water 2000")
  		.duration(20 * 5)
		.EUt((GTValues.VA[GTValues.EV]))

	event.recipes.gtceu.large_chemical_reactor("dinitro_benzidine")
  		.inputFluids(
            "gtceu:dinitro_diacetyl_benzidine 3000")
		.itemInputs(
            "6x gtceu:sodium_hydroxide_dust")
  		.outputFluids(
            "gtceu:dinitro_benzidine 3000")
		.itemOutputs(
            "6x gtceu:sodium_acetate_dust")
  		.duration(20 * 7)
		.EUt((GTValues.VA[GTValues.IV]))

	event.recipes.gtceu.large_chemical_reactor("neoprene_emulsion")
		.inputFluids(
            "gtceu:chloroprene 1000",
            "minecraft:water 2000",
            "gtceu:sodium_persulfate 500")
		.outputFluids(
            "gtceu:neoprene_latex 2500")
		.duration(20 * 20)
		.EUt((GTValues.VA[GTValues.LuV]))

	event.recipes.gtceu.large_chemical_reactor("benzenesulfonyl_chloride")
		.itemInputs(
            "3x gtceu:benzenesulfonic_acid_dust")
		.inputFluids(
            "gtceu:thionyl_chloride 1000") 
		.outputFluids(
            "gtceu:benzenesulfonyl_chloride 1000",
            "gtceu:hydrochloric_acid 1000")
		.duration(20 * 8)
		.EUt((GTValues.VA[GTValues.IV]))

	event.recipes.gtceu.large_chemical_reactor("diphenyl_sulfone_synthesis")
		.inputFluids(
            "gtceu:benzenesulfonyl_chloride 1000",
            "gtceu:benzene 2000")
		.notConsumable(
            "gtceu:aluminium_chloride_dust") 
		.outputFluids(
            "gtceu:diphenyl_sulfone 1000",
            "gtceu:hydrochloric_acid 2000")
		.duration(20 * 16)
		.EUt((GTValues.VA[GTValues.UV]))
	
	event.recipes.gtceu.large_chemical_reactor("hydroquinone_synthesis")
		.inputFluids(
            "gtceu:phenol 1000",
            "gtceu:hydrogen_peroxide 1000")
		.notConsumable(
            "gtceu:iron_sulfate_dust")
		.outputFluids(
            "gtceu:hydroquinone_solution 2000")
		.duration(20 * 35)
		.EUt((GTValues.VA[GTValues.LuV]))

	event.recipes.gtceu.large_chemical_reactor("pyrrolidone_synthesis")
		.inputFluids(
            "gtceu:butyrolactone 1000",
            "gtceu:ammonia 1000")
		.notConsumable(
            "gtceu:talc_dust")
		.outputFluids(
            "gtceu:pyrrolidone 1000",
            "minecraft:water 1000")
		.duration(20 * 30)
		.EUt((GTValues.VA[GTValues.ZPM]))
	
	event.recipes.gtceu.large_chemical_reactor("n_methyl_pyrrolidone_synthesis")
		.inputFluids(
            "gtceu:pyrrolidone 1000",
            "gtceu:methanol 1000")
		.notConsumable(
            "gtceu:talc_dust")
		.outputFluids(
            "gtceu:n_methyl_pyrrolidone 1000",
            "minecraft:water 1000")
		.duration(20 * 10)
		.EUt((GTValues.VA[GTValues.UHV]))

	event.recipes.gtceu.large_chemical_reactor("peek_polycondensation")
		.itemInputs(
            "3x gtceu:purified_difluorobenzophenone_dust",
            "6x gtceu:hydroquinone_dust")
		.inputFluids(
            "gtceu:diphenyl_sulfone 2000")
		.notConsumable(
            "gtceu:potassium_carbonate_dust")
		.outputFluids(
            "gtceu:raw_peek_solution 1500")
		.duration(20 * 10)
		.EUt((GTValues.VA[GTValues.UEV]))

	event.recipes.gtceu.large_chemical_reactor("peek_purification")
		.itemInputs(
            "32x gtceu:raw_peek_dust")
		.inputFluids(
            "gtceu:n_methyl_pyrrolidone 10000")
		.outputFluids(
            "gtceu:peek 2304",
            "gtceu:diluted_n_methyl_pyrrolidone 8000")
		.duration(20 * 10)
		.EUt((GTValues.VA[GTValues.UHV]))

	event.recipes.gtceu.large_chemical_reactor("enriched_carbon_solution")
		.inputFluids(
            "gtceu:plasmacracked_carbon_slurry 1000",
            "gtceu:neutronium 2000")
		.outputFluids(
            "gtceu:enriched_carbon_solution 500")
		.circuit(23)
		.duration(20 * 35)
		.EUt((GTValues.VA[GTValues.UV]))

	event.recipes.gtceu.large_chemical_reactor("carbon_nanotubes_doped_aluminium_chloride")
		.itemInputs(
            "8x gtceu:aluminium_chloride_dust")
		.inputFluids(
            "gtceu:enriched_carbon_solution 1000",
            "gtceu:iron_ii_chloride 500",
            "gtceu:ammonia 1000")
		.itemOutputs(
            "16x gtceu:carbon_nanotubes_doped_aluminium_chloride_dust")
		.duration(20 * 35)
		.EUt((GTValues.VA[GTValues.UEV]))

	event.recipes.gtceu.large_chemical_reactor("chlorocyclopentane")
		.inputFluids(
            "gtceu:chlorine 12000",
            "gtceu:cyclopentadiene 1000")
		.outputFluids(
            "gtceu:chlorocyclopentane 1000",
            "gtceu:hydrochloric_acid 4000")
		.duration(20 * 55)
		.EUt((GTValues.VA[GTValues.UHV]))

	event.recipes.gtceu.large_chemical_reactor("endosulfate_synthesis")
		.inputFluids(
            "gtceu:hexachlorocyclopentadiene 1000",
            "gtceu:thionyl_chloride 1000")
		.itemInputs(
            "7x gtceu:butenediol_dust")
		.itemOutputs(
            "25x gtceu:endosulfate_dust")
		.outputFluids(
            "gtceu:hydrochloric_acid 2000")
		.duration(20 * 75)
		.EUt((GTValues.VA[GTValues.UHV]))

	event.recipes.gtceu.large_chemical_reactor("propylene_hydroformylation")
		.inputFluids(
            "gtceu:ethylene 1000",
            "gtceu:hydrogen 2000",
            "gtceu:carbon_monoxide 1000") 
		.notConsumable(
            "gtceu:activated_cobalt_alumina_catalyst_dust")
		.outputFluids(
            "gtceu:propionaldehyde 1500")
		.duration(20 * 25)
		.EUt((GTValues.VA[GTValues.HV]))

	event.recipes.gtceu.large_chemical_reactor("propionic_acid_synthesis")
		.inputFluids(
            "gtceu:propionaldehyde 1000",
            "gtceu:oxygen 1000")
		.notConsumable(
            "gtceu:manganese_acetate_dust")
		.outputFluids(
            "gtceu:propionic_acid 1000")
		.duration(20 * 32)
		.EUt((GTValues.VA[GTValues.EV]))

	event.recipes.gtceu.large_chemical_reactor("bromopropane_synthesis")
		.inputFluids(
            "gtceu:propane 1000",
            "gtceu:bromine 2000")
		.notConsumable(
            "gtceu:azo_isobutyronitrile_dust") 
		.outputFluids(
            "gtceu:bromopropane 1000",
            "gtceu:hydrogen_bromide 1000")
		.duration(20 * 24)
		.EUt((GTValues.VA[GTValues.EV]))
	
	event.recipes.gtceu.large_chemical_reactor("tetrapropylammonium_bromide")
		.inputFluids(
            "gtceu:tripropylamine 1000",
            "gtceu:bromopropane 1000")
		.outputFluids(
            "gtceu:tetrapropylammonium_bromide_solution 1500")
		.duration(20 * 12)
		.EUt((GTValues.VA[GTValues.UHV]))

	event.recipes.gtceu.large_chemical_reactor("ta_synthesis")
		.inputFluids(
            "gtceu:p_xylene 1000",
            "gtceu:oxygen 3000")
		.notConsumable(
            "gtceu:cobalt_permanganate_dust")
		.outputFluids(
            "gtceu:terephthalic_acid_slurry 1500")
		.duration(20 * 20)
		.EUt((GTValues.VA[GTValues.UEV]))

	event.recipes.gtceu.large_chemical_reactor("tcl_synthesis")
		.itemInputs(
            "3x gtceu:terephthalic_acid_dust")
		.inputFluids(
            "gtceu:thionyl_chloride 4000")
		.outputFluids(
            "gtceu:terephthaloyl_chloride 1000",
            "gtceu:sulfur_dioxide 1000",
            "gtceu:hydrochloric_acid 1000")
		.duration(20 * 20)
		.EUt((GTValues.VA[GTValues.UHV]))

	event.recipes.gtceu.large_chemical_reactor("ppd_reduction")
		.itemInputs(
            "3x gtceu:p_nitroaniline_dust")
		.inputFluids(
            "gtceu:hydrogen 3000")
		.notConsumable(
            "gtceu:nickel_bromide_dust")
		.outputFluids(
            "gtceu:p_phenylenediamine_solution 1500")
		.duration(20 * 60)
		.EUt((GTValues.VA[GTValues.UIV]))

	event.recipes.gtceu.large_chemical_reactor("pyridine_aldehyde_synthesis")
		.inputFluids(
            "gtceu:acetaldehyde 1500",
            "gtceu:ammonia 1000",
            "gtceu:formaldehyde 500")
		.notConsumable(
            "gtceu:alumina_dust")
		.notConsumable(
            "gtceu:silicon_dioxide_dust")
		.outputFluids(
            "gtceu:synthetic_pyridine_mixture 2000")
		.duration(20 * 47)
		.EUt((GTValues.VA[GTValues.UV]))

	event.recipes.gtceu.large_chemical_reactor("2-6_bischloromagnesiopyridine_synthesis")
		.inputFluids(
            "gtceu:diethyl_ether 250")
		.itemInputs(
            "32x gtceu:dichloropyridine_dust",
            "1x gtceu:small_iodine_dust",
            "4x gtceu:magnesium_dust")
		.outputFluids(
            "gtceu:2-6_bischloromagnesiopyridine 2000")
		.duration(20 * 45)
		.EUt((GTValues.VA[GTValues.UHV]))

	event.recipes.gtceu.large_chemical_reactor("magnesium_pyridine_2-6_dicarboxylate_synthesis")
		.inputFluids(
            "gtceu:2-6_bischloromagnesiopyridine 1000",
            "gtceu:carbon_dioxide 2000")
		.itemOutputs(
            "6x gtceu:magnesium_pyridine_2-6_dicarboxylate_dust",
            "3x gtceu:magnesium_chloride_dust")
		.duration(20 * 25)
		.EUt((GTValues.VA[GTValues.UEV]))

	event.recipes.gtceu.large_chemical_reactor("dipicolinic_acid_dus_from_magnesium_pyridine_2-6_dicarboxylate")
		.inputFluids(
            "gtceu:hydrochloric_acid 2000")
		.itemInputs(
            "6x gtceu:magnesium_pyridine_2-6_dicarboxylate_dust")
		.itemOutputs(
            "17x gtceu:dipicolinic_acid_dust",
            "3x gtceu:magnesium_chloride_dust")
		.duration(20 * 35)
		.EUt((GTValues.VA[GTValues.UEV]))

	event.recipes.gtceu.large_chemical_reactor("picolinic_acid_slurry")
		.inputFluids(
            "gtceu:oxygen 3000",
            "gtceu:ammonia 1000")
		.itemInputs(
            "14x gtceu:picoline_dust")
		.notConsumable(
            "gtceu:cobalt_oxide_dust")
		.outputFluids(
            "gtceu:picolinic_acid_slurry 1000",
            "minecraft:water 1000")
		.duration(20 * 20)
		.EUt((GTValues.VA[GTValues.UV]))

	event.recipes.gtceu.large_chemical_reactor("potassium_permanganate")
		.inputFluids(
            "minecraft:water 2000")
		.itemInputs(
            "21x gtceu:potassium_manganate_dust")
		.itemOutputs(
            "12x gtceu:potassium_permanganate_dust",
            "3x gtceu:pyrolusite_dust",
            "12x gtceu:sodium_hydroxide_dust")
		.duration(20 * 30)
		.EUt((GTValues.VA[GTValues.UV]))

	event.recipes.gtceu.large_chemical_reactor("potassium_dipicolinate")
		.inputFluids(
            "gtceu:lutidine 1000",
            "minecraft:water 2000")
		.itemInputs(
            "6x gtceu:potassium_permanganate_dust")
		.itemOutputs(
            "19x gtceu:potassium_dipicolinate_dust",
            "3x gtceu:pyrolusite_dust")
		.outputFluids(
            "gtceu:hydrogen 10000")
		.duration(20 * 15)
		.EUt((GTValues.VA[GTValues.UEV]))

	event.recipes.gtceu.large_chemical_reactor("dipicolinic_acid_from_potassium_dipicolinate")
		.inputFluids(
            "gtceu:hydrochloric_acid 2000")
		.itemInputs(
            "19x gtceu:potassium_dipicolinate_dust")
		.itemOutputs(
            "17x gtceu:dipicolinic_acid_dust",
            "4x gtceu:rock_salt_dust")
		.duration(20 * 55)
		.EUt((GTValues.VA[GTValues.UHV]))

	event.recipes.gtceu.large_chemical_reactor("dipicolinyl_dichloride_synthesis")
		.itemInputs(
            "34x gtceu:dipicolinic_acid_dust",
            "12x gtceu:phosphorus_pentachloride_dust")
		.inputFluids(
            "gtceu:thionyl_chloride 1000")
		.outputFluids(
            "gtceu:dipicolinyl_dichloride_solution 1500",
            "gtceu:phosphorus_oxychloride 1000",
            "gtceu:hydrochloric_acid 1000")
		.duration(20 * 60)
		.EUt((GTValues.VA[GTValues.UIV]))

	event.recipes.gtceu.large_chemical_reactor("pyrazine_dicarboxylic_acid")
		.inputFluids(
            "gtceu:pyrazine 2000",
            "gtceu:oxygen 5000")
		.notConsumable(
            "gtceu:platinum_dust")
		.outputFluids(
            "gtceu:hydrogen_cyanide 2000",
            "minecraft:water 1000")
		.itemOutputs(
            "16x gtceu:pyrazine_dicarboxylic_acid_dust")
		.duration(20 * 35)
		.EUt((GTValues.VA[GTValues.UEV]))

	event.recipes.gtceu.large_chemical_reactor("pyrazine_dichloride")
		.itemInputs(
            "16x gtceu:pyrazine_dicarboxylic_acid_dust",
            "18x gtceu:phosphorus_pentachloride_dust")
		.inputFluids(
            "gtceu:distilled_water 500")
		.outputFluids(
            "gtceu:pyrazine_dicarbonyl_dichloride 1000",
            "gtceu:phosphorus_oxychloride 2000")
		.duration(20 * 15)
		.EUt((GTValues.VA[GTValues.UXV]))

    event.recipes.gtceu.large_chemical_reactor("triplatirium_sulfate")
        .itemInputs(
            "7x gtceu:triplatirium_235_dust")
        .inputFluids(
            "gtceu:sulfuric_acid 1000",
            "gtceu:diluted_sulfuric_acid 500")
        .outputFluids(
            "gtceu:triplatirium_sulfate 250")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(20 * 1)
        .EUt((GTValues.VA[GTValues.UV]))

    event.recipes.gtceu.large_chemical_reactor("processed_triplatirium_sulfate")
        .notConsumable(
            "1x gtceu:sodium_hydroxide_dust")
        .inputFluids(
            "gtceu:triplatirium_sulfate 1000",
            "gtceu:polyphenylene_sulfide 2304")
        .outputFluids(
            "gtceu:processed_triplatirium_sulfate 250")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(20 * 5)
        .EUt((GTValues.VA[GTValues.UV]))

    event.recipes.gtceu.large_chemical_reactor("trisulfate_slurry")
        .inputFluids(
            "gtceu:processed_triplatirium_sulfate 500",
            "gtceu:aqua_regia 3000")
        .outputFluids(
            "gtceu:trisulfate_slurry 250")
        .cleanroom(CleanroomType.CLEANROOM)
        .circuit(9)
        .duration(20 * 2)
        .EUt((GTValues.VA[GTValues.UV]))

    event.recipes.gtceu.large_chemical_reactor("trisulfate_solution")
        .inputFluids(
            "gtceu:cleaned_trisulfate_slurry 500",
            "gtceu:distilled_water 3000",
            "gtceu:indium_concentrate 1299")
        .outputFluids(
            "gtceu:trisulfate_solution 250")
        .cleanroom(CleanroomType.CLEANROOM)
        .circuit(24)
        .duration(20 * 6)
        .EUt((GTValues.VA[GTValues.UV]))

    event.recipes.gtceu.large_chemical_reactor("processed_californium_sulfate")
        .notConsumable(
            "1x gtceu:sodium_hydroxide_dust")
        .inputFluids(
            "gtceu:californium_sulfate 1000",
            "gtceu:polyphenylene_sulfide 2304")
        .outputFluids(
            "gtceu:processed_californium_sulfate 750")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(20 * 5)
        .EUt((GTValues.VA[GTValues.UV]))

    event.recipes.gtceu.large_chemical_reactor("fluoropolymer")
        .inputFluids(
            "gtceu:fluoroantimonic_acid 3000",
            "gtceu:supercritical_carbon_dioxide 250")
        .itemOutputs(
            "9x gtceu:fluoropolymer_solution_dust")
        .itemInputs(
            "16x gtceu:polytetrafluoroethylene_dust")
        .duration(20 * 60)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.large_chemical_reactor("aoc")
        .inputFluids(
            "gtceu:phenol 3000",
            "gtceu:toluene 2500",
            "gtceu:nitric_acid 8000")
        .outputFluids(
            "gtceu:antioxidant_complex 160")
        .duration(20 * 60)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.large_chemical_reactor("ps")
        .inputFluids(
            "gtceu:antioxidant_complex 3000",
            "gtceu:hyper_ionized_helium_plasma 64")
        .itemInputs(
            "64x gtceu:graphene_dust",
            "64x gtceu:graphene_dust",
            "64x gtceu:graphene_dust")
        .outputFluids(
            "gtceu:precursor_suspension 1800")
        .duration(20 * 60)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.large_chemical_reactor("qatb")
        .inputFluids(
            "gtceu:neon_plasma_plasma 1500")
	    .chancedInput("2x gtceu:quantum_star", 3333, 0)
        .chancedInput("2x gtceu:quantum_star", 2500, 0)
        .itemInputs(
            "8x gtceu:refined_thermal_blend_dust")
        .itemOutputs(
            "8x gtceu:quantum_activated_thermal_blend_dust")
        .duration(20 * 60)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.large_chemical_reactor("draconic_circuit_board")
        .inputFluids(
            "gtceu:hypoxylon 1000")
        .itemInputs(
            "2x kubejs:highly_resonative_circuit_board",
            "kubejs:extremely_advanced_soc",
            "64x gtceu:draconium_foil")
        .itemOutputs(
            "kubejs:draconic_circuit_board")
        .duration(20 * 45)
        .EUt((GTValues.VA[GTValues.UIV]))

    event.recipes.gtceu.large_chemical_reactor("draconic_printed_circuit_board")
        .inputFluids(
            "gtceu:hypoxylon 1000",
            "gtceu:californite 10000")
        .itemInputs(
            "kubejs:draconic_circuit_board",
            "64x gtceu:fine_draconium_wire")
        .itemOutputs(
            "kubejs:draconic_printed_circuit_board")
        .duration(20 * 90)
        .EUt((GTValues.VA[GTValues.UV]))

    event.recipes.gtceu.large_chemical_reactor("cosmic_circuit_board")
    .inputFluids(
        "gtceu:cosmic_matter 10")
    .itemInputs(
        "2x kubejs:draconic_circuit_board",
        "kubejs:extremely_advanced_soc",
        "64x gtceu:awakened_draconium_foil")
    .itemOutputs(
        "kubejs:cosmic_circuit_board")
    .duration(20 * 45)
    .EUt((GTValues.VA[GTValues.UXV]))

    event.recipes.gtceu.large_chemical_reactor("cosmic_printed_circuit_board")
        .inputFluids(
            "gtceu:cosmic_matter 20",
            "gtceu:eternity 20")
        .itemInputs(
            "kubejs:cosmic_circuit_board",
            "64x gtceu:fine_awakened_draconium_wire")
        .itemOutputs(
            "kubejs:cosmic_printed_circuit_board")
        .duration(20 * 90)
        .EUt((GTValues.VA[GTValues.UXV]))

    event.recipes.gtceu.large_chemical_reactor("chrono_infinity_printed_circuit_board")
        .inputFluids(
            "gtceu:chrono_infinity 144",
            "gtceu:infinity 144")
        .itemInputs(
            "kubejs:cosmic_circuit_board",
            "64x gtceu:solar_radiation_alloy_bolt")
        .itemOutputs(
            "kubejs:chrono_infinity_printed_circuit_board")
        .duration(20 * 90)
        .EUt((GTValues.VA[GTValues.OpV]))

    event.recipes.gtceu.large_chemical_reactor("procnaqusulfate")
        .inputFluids(
            Fluid.of("gtceu:fluoroantimonic_acid 1000"))
        .itemInputs(
            "3x gtceu:naquadria_sulfate_dust")
        .outputFluids(
            "gtceu:processed_naquadria_sulfate 3105")
        .duration(20 * 35)
        .EUt((GTValues.VA[GTValues.LuV]))

    event.recipes.gtceu.large_chemical_reactor("acidprocnaqusulfate")
        .inputFluids(
            "gtceu:sulfuric_acid 250",
            "gtceu:processed_naquadria_sulfate 1000")
        .notConsumable(
            "gtmutils:naquadah_credit")
        .outputFluids(
            "gtceu:acidic_processed_naquadria_sulfate 3105")
        .duration(20 * 35)
        .EUt((GTValues.VA[GTValues.LuV]))

    event.recipes.gtceu.large_chemical_reactor("acidicfuelsolution")
        .inputFluids(
            "gtceu:sulfuric_heavy_fuel 1500",
            "gtceu:acidic_processed_naquadria_sulfate 1000")
        .notConsumable(
            "gtceu:tiny_yttrium_dust")
        .outputFluids(
            "gtceu:acidic_naquadria_fuel_solution 500")
        .duration(20 * 50)
        .EUt((GTValues.VA[GTValues.LuV]))

    event.recipes.gtceu.large_chemical_reactor("impurenaqfuel")
        .inputFluids(
            "gtceu:acidic_naquadria_fuel_solution 5000",
            "gtceu:nitrobenzene 500")
        .itemInputs(
            "gtceu:enriched_naquadah_sulfate_dust")
        .outputFluids(
            "gtceu:impure_naquadria_fuel 5000")
        .duration(20 * 50)
        .EUt((GTValues.VA[GTValues.LuV]))

    event.recipes.gtceu.large_chemical_reactor("depletedthoriumfuel")
        .inputFluids(
            "gtceu:nitrobenzene 10000")
        .itemInputs(
            "32x gtceu:thorium_dust")
        .outputFluids(
            "gtceu:depleted_thorium_fuel 15000")
        .duration(20 * 50)
        .EUt((GTValues.VA[GTValues.LuV]))

     event.recipes.gtceu.large_chemical_reactor("veryunstablehyperenrichedthoriumfuel")
        .inputFluids(
            "gtceu:severly_plasmacracked_unstable_enriched_thorium_fuel 15000",
            "gtceu:super_dense_hog 15000",
            "gtceu:sodium_potassium 25000")
        .itemInputs(
            "16x gtceu:teslarium_dust")
        .outputFluids(
            "gtceu:very_unstable_hyper_enriched_thorium_fuel 60000")
        .duration(20 * 500)
        .EUt((GTValues.VA[GTValues.UHV]))

    event.recipes.gtceu.large_chemical_reactor("enrichednaquadriafuelbase")
        .inputFluids(
            "gtceu:pure_naquadria_fuel 15000",
            "gtceu:depleted_thorium_fuel 15000",
            "gtceu:diesel 20000")
        .outputFluids(
            "gtceu:enriched_naquadria_fuel_base 20000")
        .duration(20 * 100)
        .EUt((GTValues.VA[GTValues.UV]))

    event.recipes.gtceu.large_chemical_reactor("enrichednaquadriafuelbase2")
        .inputFluids(
            "gtceu:pure_naquadria_fuel 15000",
            "gtceu:depleted_thorium_fuel 15000",
            "gtceu:cetane_boosted_diesel 20000")
        .outputFluids(
            "gtceu:enriched_naquadria_fuel_base 40000")
        .duration(20 * 100)
        .EUt((GTValues.VA[GTValues.UV]))

    event.recipes.gtceu.large_chemical_reactor("treatedsuperdensenaquadriafuel")
        .inputFluids(
            "gtceu:super_dense_naquadria_fuel 5000",
            "gtceu:antimatter 5000",
            "gtceu:hypoxylon 5000")
        .outputFluids(
            "gtceu:treated_super_dense_naquadria_fuel 15000")
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .duration(20 * 100)
        .EUt((GTValues.VA[GTValues.UEV]))
})