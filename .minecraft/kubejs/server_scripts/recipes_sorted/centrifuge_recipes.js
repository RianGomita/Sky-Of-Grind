ServerEvents.recipes(event => {
    // Const


    // Individual Recipes

    event.recipes.gtceu.centrifuge("cobaltite")
        .itemInputs(
            "8x gtceu:raw_nickel")
        .itemOutputs(
            "2x gtceu:cobaltite_dust")
        .duration(20 * 5)
        .EUt((GTValues.VA[GTValues.LV]))

    event.recipes.gtceu.centrifuge("gallium")
        .itemInputs(
            "8x gtceu:raw_sphalerite")
        .itemOutputs(
            "2x gtceu:gallium_dust")
        .duration(20 * 5)
        .EUt((GTValues.VA[GTValues.LV]))

    event.recipes.gtceu.centrifuge("emerald")
        .itemInputs(
            "8x gtceu:raw_diamond")
        .itemOutputs(
            "2x gtceu:raw_emerald")
        .duration(20 * 15)
        .EUt((GTValues.VA[GTValues.MV]))

    event.recipes.gtceu.centrifuge("rubydust")
        .itemInputs(
            "gtceu:redstone_plate")
        .itemOutputs(
            "8x gtceu:ruby_gem")
        .duration(20 * 4)
        .EUt((GTValues.VA[GTValues.MV]))

    event.recipes.gtceu.centrifuge("vanadium")
        .itemInputs(
            "gtceu:wrought_iron_ingot")
        .itemOutputs(
            "2x gtceu:vanadium_dust")
        .duration(20 * 4)
        .EUt((GTValues.VA[GTValues.MV]))

    event.recipes.gtceu.centrifuge("manganese")
        .itemInputs(
            "8x gtceu:raw_calcite")
        .itemOutputs(
            "2x gtceu:manganese_dust")
        .duration(20 * 4)
        .EUt((GTValues.VA[GTValues.MV]))

    event.recipes.gtceu.centrifuge("salt")
        .itemInputs(
            "gtceu:potassium_dust")
        .itemOutputs(
            "8x gtceu:salt_dust")
        .duration(15)
        .EUt((GTValues.VA[GTValues.HV]))

    event.recipes.gtceu.centrifuge("rocksalt")
        .itemInputs(
            "32x gtceu:sulfur_dust")
        .itemOutputs(
            "8x gtceu:rock_salt_dust")
        .duration(20 * 5)
        .EUt((GTValues.VA[GTValues.LV]))

    event.recipes.gtceu.centrifuge("ruthenium")
        .itemInputs(
            "gtceu:diamond_dust")
        .itemOutputs(
            "gtceu:ruthenium_dust")
        .duration(20 * 20)
        .EUt((GTValues.VA[GTValues.LV]))

    event.recipes.gtceu.centrifuge("mattercentrifuge")
        .inputFluids(
            "gtceu:star_matter 100")
        .itemOutputsRanged(
            "gtceu:raw_beryllium", 1, 10)
        .itemOutputsRanged(
            "gtceu:raw_apatite", 10, 60)
        .itemOutputsRanged(
            "gtceu:raw_mica", 1, 10)
        .itemOutputsRanged(
            "gtceu:raw_oilsands", 40, 60)
        .itemOutputsRanged(
            "gtceu:raw_amethyst", 10, 60)
        .itemOutputsRanged(
            "gtceu:indium_dust", 2, 4)
        .outputFluids(
            "gtceu:tantalum_carbide 500")
        .duration(20 * 200)
        .EUt((GTValues.VA[GTValues.HV]))

    event.recipes.gtceu.centrifuge("magnaliumbismuth")
        .itemInputs(
            "3x gtceu:magnalium_dust")
        .itemOutputs(
            "1x gtceu:bismuth_dust")
        .duration(20 * 5)
        .EUt((GTValues.VA[GTValues.LV]))

    event.recipes.gtceu.centrifuge("californium")
        .itemInputs(
            "3x gtceu:cleaned_californium_dust")
        .itemOutputs(
            "1x gtceu:californium_dust")
        .duration(100)
        .EUt((GTValues.VA[GTValues.LV]))

	event.recipes.gtceu.centrifuge("cobalt_permanganate")
		.inputFluids(
            "gtceu:cobalt_permanganate_solution 1000")
		.itemOutputs(
            "11x gtceu:cobalt_permanganate_dust")
		.outputFluids(
            "minecraft:water 1000")
		.duration(20 * 85)
		.EUt((GTValues.VA[GTValues.UEV]))

	event.recipes.gtceu.centrifuge("carbon_nanotubes_filter_recycle")
		.itemInputs(
            "kubejs:damaged_carbon_nanotubes_filter")
		.chancedOutput(
            "kubejs:filter_frame", 5000, 0)
		.itemOutputsRanged(
            "gtceu:fine_carbon_nanotubes_wire", 2, 8)
		.duration(20 * 10)
		.EUt((GTValues.VA[GTValues.LuV]))

	event.recipes.gtceu.centrifuge("demineralized_heavy_brine_proc")
		.inputFluids(
            "gtceu:heavy_salts_waste 100000")
		.itemOutputsRanged(
            "gtceu:lithium_chloride_dust", 500, 2000)
		.itemOutputsRanged(
            "gtceu:magnesium_chloride_dust", 500, 2000)
		.itemOutputsRanged(
            "gtceu:aluminium_chloride_dust", 500, 2000)
		.itemOutputsRanged(
            "gtceu:calcium_chloride_dust", 500, 2000)
		.itemOutputsRanged(
            "gtceu:rock_salt_dust", 500, 2000)
		.itemOutputsRanged(
            "gtceu:bauxite_slag_dust", 200, 500)
		.duration(20 * 50)
		.EUt((GTValues.VA[GTValues.UHV]))

  	event.recipes.gtceu.centrifuge("p_xylene_separation")
		.inputFluids(
            "gtceu:mixed_xylenes 10000")
		.itemInputs(
            "2x gtceu:zsm_5_dust")
		.outputFluids(
            "gtceu:p_xylene 8000",
            "gtceu:o_xylene 1000",
            "gtceu:m_xylene 1000")
		.duration(20 * 50)
		.EUt((GTValues.VA[GTValues.UHV]))

    event.recipes.gtceu.centrifuge("trisulfate_waste")
        .inputFluids(
            "gtceu:pure_trisulfate_solution 1000")
        .outputFluids(
            "gtceu:trisulfate_waste 750",
            "gtceu:californium_sulfate 250")
        .cleanroom(CleanroomType.CLEANROOM)
        .circuit(16)
        .duration(20 * 1)
        .EUt((GTValues.VA[GTValues.UV]))

    event.recipes.gtceu.centrifuge("waste_reprocesing")
        .inputFluids(
            "gtceu:trisulfate_waste 1000")
        .outputFluids(
            "gtceu:triplatirium_235 25",
            "gtceu:triplatirium_sulfate 1000")
        .cleanroom(CleanroomType.CLEANROOM)
        .circuit(24)
        .duration(20 * 6)
        .EUt((GTValues.VA[GTValues.UV]))

    event.recipes.gtceu.centrifuge("cleaned_californium_dust")
        .inputFluids(
            "gtceu:processed_californium_sulfate 250")
        .itemOutputsRanged(
            "gtceu:cleaned_californium_dust", 10, 45)
        .cleanroom(CleanroomType.CLEANROOM)
        .circuit(24)
        .duration(20 * 10)
        .EUt((GTValues.VA[GTValues.UV]))

    event.recipes.gtceu.centrifuge("obdnacentrifuge")
        .inputFluids(
            "gtceu:overgrown_bacterial_dna 1000")
        .outputFluids(
            "gtceu:streptomyces_coelicolor 500",
            "gtceu:panaeolus_cyanescens 500")
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.centrifuge("polymerase")
        .inputFluids(
            "gtceu:pcr_its1_its2 150")
        .outputFluids(
            "gtceu:taq_polymerase 75")
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.centrifuge("purenaqfuel")
        .inputFluids(
            "gtceu:impure_naquadria_fuel 250")
        .itemOutputsRanged(
            "gtceu:resonant_naquadah_dust", 5, 15)
        .outputFluids(
            "gtceu:pure_naquadria_fuel 250")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(20 * 50)
        .EUt((GTValues.VA[GTValues.LuV]))

    event.recipes.gtceu.centrifuge("enrichednaquadahfuelwaste")
        .inputFluids(
            "gtceu:enriched_naquadah_fuel_waste 10000")
        .itemOutputsRanged(
            "gtceu:enriched_naquadah_dust", 5, 15)
        .outputFluids(
            "gtceu:enriched_naquadria_fuel_base 5000")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(20 * 50)
        .EUt((GTValues.VA[GTValues.ZPM]))

    event.recipes.gtceu.centrifuge("lightnaquadriafuelwaste")
        .inputFluids(
            "gtceu:light_naquadria_fuel_waste 10000")
        .itemOutputsRanged(
            "gtceu:naquadria_dust", 5, 15)
        .outputFluids(
            "gtceu:enriched_naquadria_fuel_base 25000",
            "gtceu:light_naquadria_fuel 2500")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(20 * 50)
        .EUt((GTValues.VA[GTValues.ZPM]))

    event.recipes.gtceu.centrifuge("heavynaquadriafuelwaste")
        .inputFluids(
            "gtceu:heavy_naquadria_fuel_waste 10000")
        .itemOutputsRanged(
            "gtceu:naquadria_dust", 15, 30)
        .outputFluids(
            "gtceu:enriched_naquadria_fuel_base 25000",
            "gtceu:heavy_naquadria_fuel 2500")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(20 * 50)
        .EUt((GTValues.VA[GTValues.ZPM]))

   event.recipes.gtceu.centrifuge("naquadriamk3fuelwaste")
        .inputFluids(
            "gtceu:naquadria_mk3_fuel_waste 50000")
        .itemOutputsRanged(
            "gtceu:thorium_dust", 500, 700)
        .itemOutputsRanged(
            "gtceu:plutonium_241_dust", 90, 140)
        .itemOutputsRanged(
            "gtceu:teslarium_dust", 35, 80)
        .outputFluids(
            "gtceu:naquadria 30000",
            "gtceu:antimatter 25000")
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .duration(20 * 50)
        .EUt((GTValues.VA[GTValues.UEV]))

   event.recipes.gtceu.centrifuge("naquadriamk2fuelwaste")
        .inputFluids(
            "gtceu:naquadria_mk2_fuel_waste 50000")
        .itemOutputsRanged(
            "gtceu:thorium_dust", 300, 450)
        .itemOutputsRanged(
            "gtceu:plutonium_241_dust", 90, 170)
        .outputFluids(
            "gtceu:naquadria 20000")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(20 * 50)
        .EUt((GTValues.VA[GTValues.UHV]))

   event.recipes.gtceu.centrifuge("naquadriamk1fuelwaste")
        .inputFluids(
            "gtceu:naquadria_mk1_fuel_waste 50000")
        .itemOutputsRanged(
            "gtceu:thorium_dust", 150, 200)
        .outputFluids(
            "gtceu:naquadria 2500")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(20 * 50)
        .EUt((GTValues.VA[GTValues.UV]))
})