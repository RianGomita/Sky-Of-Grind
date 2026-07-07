ServerEvents.recipes(event => {
    // Const

    const hyper = ["cutter",
        "laser_engraver",
        "arc_furnace",
        "bender",
        "wiremill",
        "lathe",
        "extruder",
        "mixer",
        "assembler"]
        hyper.forEach((hyper) => {
            event.recipes.gtceu.assembly_line("gtceu:hyper_" + hyper )
                .itemInputs(
                    "16x gtceu:uiv_" + hyper )
                .itemInputs(
                    "2x #gtceu:circuits/uxv",
                    "4x kubejs:eternity_heavy_plating",
                    "1x kubejs:space_time_heavy_plating",
                    "2x gtceu:uiv_field_generator",
                    "8x kubejs:eternity_casing",
                    "32x gtceu:double_space_time_plate",
                    "32x gtceu:double_space_time_plate",
                    "2x gtceu:uiv_electric_motor",
                    "2x #gtceu:circuits/uiv",
                    "8x #gtceu:circuits/uev",
                    "64x gtceu:eternity_bolt",
                    "64x gtceu:eternity_foil",
                    "gtceu:max_battery",
                    "64x kubejs:quantum_anomaly",
                    "64x kubejs:energized_quantum_anomaly")
                .inputFluids(
                    "gtceu:nihonium 144*16",
                    "gtceu:oganesson 144*16")
                .itemOutputs(
                    "gtceu:hyper_" + hyper)
                .duration(20 * 240)
                .EUt(GTValues.VA[GTValues.UXV])
            })


    // Individual Recipes

    event.recipes.gtceu.assembly_line("quantum_helmet")
	    .itemInputs(
            "gtceu:quarktech_helmet",
            "ae2:wireless_access_point",
            "12x advanced_ae:quantum_processor",
            "5x advanced_ae:quantum_storage_component",
            "4x #gtceu:circuits/uv",
            "32x gtceu:fine_americium_wire",
            "2x gtceu:nether_star_lens",
            "32x advanced_ae:quantum_alloy_plate",
            "32x advanced_ae:quantum_alloy_plate",
            "16x advanced_ae:quantum_alloy_plate")
	    .itemOutputs(
            "advanced_ae:quantum_helmet")
	    .inputFluids(
	        Fluid.of("gtceu:soldering_alloy", 1440),
	        Fluid.of("gtceu:lubricant", 1250), 
	        Fluid.of("gtceu:polybenzimidazole", 11520),
	        Fluid.of("advanced_ae:quantum_infusion_source", 16000))
	    .duration(20 * 100)
	    .EUt(GTValues.VA[GTValues.UV])       
	
    event.recipes.gtceu.assembly_line("quantum_chestplate")
	    .itemInputs(
            "gtceu:advanced_quarktech_chestplate",
            "ae2:wireless_access_point",
            "32x advanced_ae:quantum_processor",
            "8x advanced_ae:quantum_storage_component",
            "16x #gtceu:circuits/uv",
            "32x gtceu:fine_americium_wire",
            "32x gtceu:fine_americium_wire",
            "32x advanced_ae:quantum_alloy_plate",
            "32x advanced_ae:quantum_alloy_plate",
            "32x advanced_ae:quantum_alloy_plate",
            "32x advanced_ae:quantum_alloy_plate")
	    .itemOutputs(
            "advanced_ae:quantum_chestplate")
	    .inputFluids(
	    Fluid.of("gtceu:soldering_alloy", 2304),
	    Fluid.of("gtceu:lubricant", 2000), 
	    Fluid.of("gtceu:polybenzimidazole", 18432),
	    Fluid.of("advanced_ae:quantum_infusion_source", 32000))
	    .duration(20 * 100)
	    .EUt(GTValues.VA[GTValues.UV])   
	
	event.recipes.gtceu.assembly_line("quantum_leggings")
	    .itemInputs(
            "gtceu:quarktech_leggings",
            "ae2:wireless_access_point",
            "24x advanced_ae:quantum_processor",
            "6x advanced_ae:quantum_storage_component",
            "12x #gtceu:circuits/uv",
            "32x gtceu:fine_americium_wire",
            "32x gtceu:fine_americium_wire",
            "32x advanced_ae:quantum_alloy_plate",
            "32x advanced_ae:quantum_alloy_plate",
            "32x advanced_ae:quantum_alloy_plate",
            "16x advanced_ae:quantum_alloy_plate")
	    .itemOutputs(
            "advanced_ae:quantum_leggings")
	    .inputFluids(
	        Fluid.of("gtceu:soldering_alloy", 2016),
	        Fluid.of("gtceu:lubricant", 1750), 
	        Fluid.of("gtceu:polybenzimidazole", 16128),
	        Fluid.of("advanced_ae:quantum_infusion_source", 24000))
	    .duration(20 * 100)
	    .EUt(GTValues.VA[GTValues.UV])   
	
	event.recipes.gtceu.assembly_line("quantum_boots")
	    .itemInputs(
            "gtceu:quarktech_boots",
            "ae2:wireless_access_point",
            "16x advanced_ae:quantum_processor",
            "4x advanced_ae:quantum_storage_component",
            "4x #gtceu:circuits/uv",
            "32x gtceu:fine_americium_wire",
            "32x advanced_ae:quantum_alloy_plate",
            "32x advanced_ae:quantum_alloy_plate")
	    .itemOutputs(
            "advanced_ae:quantum_boots")
	    .inputFluids(
	        Fluid.of("gtceu:soldering_alloy", 1152),
	        Fluid.of("gtceu:lubricant", 1000), 
	        Fluid.of("gtceu:polybenzimidazole", 9216),
	        Fluid.of("advanced_ae:quantum_infusion_source", 16000))
	    .duration(20 * 100)
	    .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembly_line("resonant_processor")
        .itemInputs(
            "kubejs:highly_resonative_printed_circuit_board",
            "2x gtceu:wetware_processor",
            "64x gtceu:fine_resonant_essence_wire",
            "64x gtceu:advanced_smd_capacitor",
            "64x gtceu:fine_kaemite_wire",
            "gtceu:highly_advanced_soc")
        .itemOutputs(
            "2x kubejs:resonant_processor")
        .inputFluids(
            Fluid.of("gtceu:soldering_alloy", 1152),
            Fluid.of("gtceu:peek", 1152),
            Fluid.of("gtceu:condensed_star_matter", 8124))
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembly_line("resonant_processor_assembly")
        .itemInputs(
            "kubejs:highly_resonative_printed_circuit_board",
            "kubejs:resonant_processor",
            "64x gtceu:fine_resonant_essence_wire",
            "64x gtceu:advanced_smd_capacitor",
            "64x gtceu:fine_kaemite_wire",
            "gtceu:highly_advanced_soc",
            "7x gtceu:dense_crystal_matrix_plate")
        .itemOutputs(
            "1x kubejs:resonant_processor_assembly")
        .inputFluids(
            Fluid.of("gtceu:soldering_alloy", 1152),
            Fluid.of("gtceu:peek", 1152),
            Fluid.of("gtceu:condensed_star_matter", 8124))
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembly_line("resonant_processor_computer")
        .itemInputs(
            "2x kubejs:resonant_processor_assembly",
            "64x gtceu:fine_resonant_essence_wire",
            "64x gtceu:advanced_smd_capacitor",
            "64x gtceu:fine_kaemite_wire",
            "gtceu:highly_advanced_soc",
            "7x gtceu:dense_crystal_matrix_plate",
            "32x gtceu:neutronium_plate")
        .itemOutputs(
            "1x kubejs:resonant_processor_computer")
        .inputFluids(
            Fluid.of("gtceu:soldering_alloy", 1152),
            Fluid.of("gtceu:peek", 1152),
            Fluid.of("gtceu:condensed_star_matter", 8124))
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembly_line("resonant_processor_mainframe")
        .itemInputs(
            "2x kubejs:resonant_processor_computer",
            "64x gtceu:fine_resonant_essence_wire",
            "64x gtceu:advanced_smd_capacitor",
            "64x gtceu:fine_kaemite_wire",
            "gtceu:highly_advanced_soc",
            "7x gtceu:dense_crystal_matrix_plate",
            "32x gtceu:neutronium_plate",
            "avaritia:eternal_singularity",
            "16x avaritia:neutron_gear",
            "kubejs:highly_resonative_soc")
        .itemOutputs(
            "1x kubejs:resonant_processor_mainframe")
        .inputFluids(
            Fluid.of("gtceu:soldering_alloy", 1152),
            Fluid.of("gtceu:peek", 1152),
            Fluid.of("gtceu:condensed_star_matter", 8124))
        .duration(20 * 80)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembly_line("naquadahmk1")
        .itemInputs(
            "3x gtceu:zpm_field_generator",
            "8x gtceu:resonant_naquadah_spring",
            "64x gtceu:nether_star_plate",
            "#gtceu:circuits/uv",
            "2x gtceu:resonant_naquadah_hex_wire",
            "gtceu:luv_fusion_reactor")
        .itemOutputs(
            "gtceu:naquadahreactormk1")
        .inputFluids(
            Fluid.of("gtceu:star_matter", 5950),
            Fluid.of("gtceu:silicone_rubber", 1152),
            Fluid.of("gtceu:styrene_butadiene_rubber", 1152),
            Fluid.of("gtceu:soldering_alloy", 1152))
        .stationResearch(b => b.researchStack(Item.of("gtceu:naquadah_boule")).EUt(GTValues.VA[GTValues.UV]).CWUt(16)) // 
        .duration(20 * 150)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembly_line("extremecrackingunit")
        .itemInputs(
            "16x gtceu:zpm_electric_pump",
            "32x gtceu:cracker",
            "32x gtceu:cracker",
            "4x gtceu:zpm_fusion_reactor",
            "16x #gtceu:circuits/uv",
            "32x gtceu:superconducting_coil")
        .itemOutputs(
            "gtceu:extreme_cracking_unit")
        .inputFluids(
            Fluid.of("gtceu:star_matter", 5950),
            Fluid.of("gtceu:silicone_rubber", 1152),
            Fluid.of("gtceu:soldering_alloy", 1152))
        .stationResearch(b => b.researchStack(Item.of("gtceu:cracker")).EUt(GTValues.VA[GTValues.UV]).CWUt(32)) // 
        .duration(20 * 150)
        .EUt(GTValues.VA[GTValues.UV])

	event.recipes.gtceu.assembly_line("naquadahmk2")
        .itemInputs(
            "3x gtceu:uhv_field_generator",
            "16x kubejs:uhv_voltage_coil",
            "7x gtceu:dense_crystal_matrix_plate",
            "7x gtceu:dense_crystal_matrix_plate",
            "4x #gtceu:circuits/uev",
            "16x gtceu:resonant_essence_hex_wire",
            "4x gtceu:uv_fusion_reactor")
        .itemOutputs(
            "gtceu:naquadahreactormk2")
        .inputFluids(
            Fluid.of("gtceu:naquadria_plasma_mk2_plasma", 20000),
            Fluid.of("gtceu:silicone_rubber", 4808),
            Fluid.of("gtceu:hypoxylon", 3500),
            Fluid.of("gtceu:soldering_alloy", 4808))
        .stationResearch(b => b.researchStack(Item.of("gtceu:naquadahreactormk1")).EUt(GTValues.VA[GTValues.UEV]).CWUt(160)) // 
        .duration(20 * 150)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembly_line("ae2energy")
        .itemInputs(
            "gtceu:uv_machine_hull",
            "64x gtceu:advanced_computer_casing",
            "64x gtceu:computation_receiver_hatch",
            "64x gtceu:advanced_computer_casing",
            "64x gtceu:neutron_reflector",
            "32x gtceu:double_tritanium_plate",
            "64x gtceu:zpm_parallel_hatch",
            "megacells:mega_energy_cell",
            "megacells:cell_component_256m")
        .itemOutputs(
            "ae2:creative_energy_cell")
        .inputFluids(
            Fluid.of("gtceu:star_matter", 5950),
            Fluid.of("gtceu:silicone_rubber", 1152),
            Fluid.of("gtceu:styrene_butadiene_rubber", 1152),
            Fluid.of("gtceu:resonant_naquadah", 10152))
        .stationResearch(b => b.researchStack(Item.of("megacells:cell_component_256m")).EUt(GTValues.VA[GTValues.UV]).CWUt(140)) // 
        .duration(20 * 1500)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembly_line("uhvmainframe")
        .itemInputs(
            "32x gtceu:advanced_smd_resistor",
            "8x gtceu:europium_plate",
            "32x gtceu:advanced_smd_capacitor",
            "32x gtceu:advanced_smd_transistor",
            "2x gtceu:highly_advanced_soc",
            "2x gtceu:tritanium_frame",
            "2x gtceu:wetware_processor_computer",
            "32x gtceu:advanced_smd_inductor",
            "gtceu:enriched_naquadah_trinium_europium_duranide_double_wire",
            "32x gtceu:advanced_smd_diode",
            "32x gtceu:ram_chip",
            "64x gtceu:polybenzimidazole_foil")
        .itemOutputs(
            "gtceu:wetware_processor_mainframe")
        .inputFluids(
            Fluid.of("gtceu:condensed_star_matter", 5950),
            Fluid.of("gtceu:soldering_alloy", 1152),
            Fluid.of("gtceu:polybenzimidazole", 1152))
        .stationResearch(b => b.researchStack(Item.of("gtceu:wetware_processor_computer")).EUt(GTValues.VA[GTValues.UV]).CWUt(96)) // 
        .duration(20 * 100)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembly_line("mattercondenser")
        .itemInputs(
            "ae2:controller",
            "32x gtceu:advanced_smd_capacitor",
            "32x gtceu:advanced_smd_transistor",
            "32x gtceu:advanced_smd_inductor",
            "32x gtceu:advanced_smd_diode",
            "32x gtceu:ram_chip",
            "64x gtceu:polybenzimidazole_foil",
            "#gtceu:circuits/luv")
        .itemOutputs(
            "ae2:condenser")
        .inputFluids(
            Fluid.of("gtceu:soldering_alloy", 1152),
            Fluid.of("gtceu:polybenzimidazole", 1152))
        .duration(20 * 100)
        .EUt(GTValues.VA[GTValues.IV])
        
    event.recipes.gtceu.assembly_line("gravitationalfluctuatingmd")
        .itemInputs(
            "32x gtceu:advanced_smd_capacitor",
            "32x gtceu:advanced_smd_transistor",
            "32x gtceu:advanced_smd_inductor",
            "32x gtceu:advanced_smd_diode",
            "32x gtceu:highly_advanced_soc",
            "64x gtceu:fine_resonant_essence_wire",
            "64x gtceu:fine_resonant_essence_wire",
            "64x gtceu:fine_resonant_essence_wire",
            "64x gtceu:fine_resonant_essence_wire",
            "64x gtceu:fine_resonant_essence_wire",
            "#gtceu:circuits/uhv",
            "64x gtceu:blacklight")
        .itemOutputs(
            "kubejs:gravitational_fluctuation_module")
        .inputFluids(
            Fluid.of("gtceu:soldering_alloy", 1152),
            Fluid.of("gtceu:polybenzimidazole", 1152),
            Fluid.of("gtceu:condensed_star_matter", 8124))
        .duration(20 * 100)
        .EUt(GTValues.VA[GTValues.UEV])      

    event.recipes.gtceu.assembly_line("qsp")
        .itemInputs(
            "gtceu:uv_fusion_reactor",
            "16x #gtceu:circuits/uhv",
            "4x avaritia:eternal_singularity",
            "gtceu:uhv_ultimate_battery",
            "64x gtceu:fine_resonant_essence_wire",
            "ae2:creative_energy_cell",
            "kubejs:atomically_compressed_black_hole",
            "gtceu:uhv_machine_hull")
        .itemOutputs(
            "gtceu:quantum_space_projector")
        .inputFluids(
            Fluid.of("gtceu:soldering_alloy", 1152),
            Fluid.of("gtceu:polybenzimidazole", 1152),
            Fluid.of("gtceu:condensed_star_matter", 8124))     
        .stationResearch(b => b.researchStack(Item.of("gtceu:atomicforge")).EUt(GTValues.VA[GTValues.UV]).CWUt(512)) // 
        .duration(20 * 100)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembly_line("component_assembly_line")
        .itemInputs(
            "gtceu:assembly_line",
            "8x #gtceu:circuits/uev",
            "4x avaritia:eternal_singularity",
            "gtceu:uhv_ultimate_battery",
            "64x gtceu:fine_cosmic_neutronium_wire",
            "ae2:creative_energy_cell",
            "64x gtceu:fine_cosmic_titanium_wire",
            "64x gtceu:fine_cosmic_titanium_wire",
            "64x gtceu:fine_cosmic_titanium_wire",
            "64x gtceu:fine_cosmic_titanium_wire",
            "64x gtceu:fine_cosmic_titanium_wire")
        .itemOutputs(
            "gtceu:component_assembly_line")
        .inputFluids(
            Fluid.of("gtceu:soldering_alloy", 1152),
            Fluid.of("gtceu:peek", 1152),
            Fluid.of("gtceu:condensed_star_matter", 8124))
        .duration(20 * 25)
        .EUt(GTValues.VA[GTValues.UEV])
     
    event.recipes.gtceu.assembly_line("circuit_assembly_line")
        .itemInputs(
            "gtceu:assembly_line",
            "8x #gtceu:circuits/uev",
            "4x avaritia:eternal_singularity",
            "gtceu:uhv_ultimate_battery",
            "64x gtceu:fine_cosmic_neutronium_wire",
            "ae2:creative_energy_cell",
            "64x gtceu:fine_cosmic_tungsten_wire",
            "64x gtceu:fine_cosmic_tungsten_wire",
            "64x gtceu:fine_cosmic_tungsten_wire",
            "64x gtceu:fine_cosmic_tungsten_wire",
            "64x gtceu:fine_cosmic_tungsten_wire")
        .itemOutputs(
            "gtceu:circuit_assembly_line")
        .inputFluids(
            Fluid.of("gtceu:soldering_alloy", 1152),
            Fluid.of("gtceu:peek", 1152),
            Fluid.of("gtceu:condensed_star_matter", 8124))
        .duration(20 * 25)
        .EUt(GTValues.VA[GTValues.UEV])     

    event.recipes.gtceu.assembly_line("quantum_station")
        .itemInputs(
            "gtceu:research_station",
            "8x #gtceu:circuits/uev",
            "4x avaritia:eternal_singularity",
            "gtceu:uhv_ultimate_battery",
            "64x gtceu:fine_cosmic_neutronium_wire",
            "ae2:creative_energy_cell",
            "64x gtceu:fine_cosmic_iridium_wire",
            "64x gtceu:fine_cosmic_iridium_wire",
            "64x gtceu:fine_cosmic_iridium_wire",
            "64x gtceu:fine_cosmic_iridium_wire",
            "64x gtceu:fine_cosmic_iridium_wire",
            "4x gtceu:uhv_field_generator")
        .itemOutputs(
            "gtceu:quantum_station")
        .inputFluids(
            Fluid.of("gtceu:soldering_alloy", 1152),
            Fluid.of("gtceu:peek", 1152),
            Fluid.of("gtceu:condensed_star_matter", 8124))
        .duration(20 * 25)
        .EUt(GTValues.VA[GTValues.UEV])     

    event.recipes.gtceu.assembly_line("h_gim")
        .itemInputs(
            "64x kubejs:quantum_casing",
            "16x gtceu:gravi_star",
            "gtceu:uev_machine_hull",
            "32x gtceu:double_cosmic_tungsten_plate",
            "4x #gtceu:circuits/uev",
            "16x gtceu:uev_robot_arm",
            "16x gtceu:uev_electric_piston",
            "kubejs:highly_resonative_soc",
            "kubejs:gravitational_fluctuation_module",
            "kubejs:quantum_resonant_core",
            "gtceu:uev_compressor",
            "4x gtceu:uhv_field_generator")
        .itemOutputs(
            "gtceu:gravitational_implosion_machine")
        .inputFluids(
            Fluid.of("gtceu:stropharic_hypoxylon", 9152),
            Fluid.of("gtceu:antimatter", 5000),
            Fluid.of("gtceu:crystal_matrix", 5000))
        .duration(20 * 50)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.assembly_line("xl_plasma_turbine")
        .itemInputs(
            "16x gtceu:naquadria_plate",
            "16x gtceu:quantum_star",
            "gtceu:zpm_machine_hull",
            "32x gtceu:double_naquadah_alloy_plate",
            "4x #gtceu:circuits/uv",
            "4x gtceu:zpm_robot_arm",
            "8x gtceu:zpm_electric_piston",
            "gtceu:zpm_compressor",
            "4x gtceu:iv_field_generator")
        .itemOutputs(
            "gtceu:xl_plasma_turbine")
        .inputFluids(
            Fluid.of("gtceu:soldering_alloy", 1152),
            Fluid.of("gtceu:polybenzimidazole", 1152),
            Fluid.of("gtceu:europium", 244))
        .duration(20 * 50)
        .EUt(GTValues.VA[GTValues.UV])   

    event.recipes.gtceu.assembly_line("large_synchrotron_switcher")
        .itemInputs(
            "16x gtceu:chaos_plate",
            "16x kubejs:reactive_chaos_pellet",
            "gtceu:uiv_machine_hull",
            "32x gtceu:double_awakened_draconium_plate",
            "4x #gtceu:circuits/uiv",
            "4x gtceu:uiv_robot_arm",
            "8x gtceu:uiv_electric_piston",
            "gtceu:uiv_field_generator",
            "4x gtceu:uev_fusion_reactor")
        .itemOutputs(
            "gtceu:large_synchrotron_switcher")
        .inputFluids(
            Fluid.of("gtceu:stropharic_hypoxylon", 9152),
            Fluid.of("gtceu:antimatter", 5000),
            Fluid.of("gtceu:crystal_matrix", 5000))
        .duration(20 * 50)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembly_line("chaotic_singularity_reactor")
        .itemInputs(
            "16x gtceu:awakened_draconium_plate",
            "draconicevolution:chaotic_core",
            "gtceu:uiv_machine_hull",
            "64x draconicevolution:chaos_shard",
            "4x #gtceu:circuits/uiv",
            "4x gtceu:uiv_robot_arm",
            "8x gtceu:uiv_electric_piston",
            "4x gtceu:uiv_field_generator")
        .itemOutputs(
            "gtceu:chaotic_singularity_reactor")
        .inputFluids(
            Fluid.of("gtceu:stropharic_hypoxylon", 9152),
            Fluid.of("gtceu:antimatter", 5000),
            Fluid.of("gtceu:crystal_matrix", 5000))
        .duration(20 * 50)
        .EUt(GTValues.VA[GTValues.UXV])
   
    event.recipes.gtceu.assembly_line("singularity_data_confinement")
    .itemInputs(
        "16x gtceu:awakened_draconium_plate",
        "draconicevolution:chaotic_core",
        "gtceu:uiv_machine_hull",
        "1x kubejs:elementary_data",
        "4x #gtceu:circuits/uiv",
        "4x gtceu:uiv_field_generator",
        "8x gtceu:uiv_electric_piston")
    .itemOutputs(
        "gtceu:singularity_data_confinement")
    .inputFluids(
        Fluid.of("gtceu:awakened_draconium", 9152),
        Fluid.of("gtceu:antimatter", 5000),
        Fluid.of("gtceu:crystal_matrix", 5000))
    .duration(20 * 60)
    .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembly_line("quantum_cooling_chamber")
        .itemInputs(
            "16x gtceu:cosmic_iridium_plate",
            "draconicevolution:chaotic_core",
            "gtceu:uiv_machine_hull",
            "4x #gtceu:circuits/uiv",
            "4x gtceu:uiv_field_generator",
            "8x gtceu:uiv_electric_piston",
            "gtceu:mega_vacuum_freezer")
        .itemOutputs(
            "gtceu:quantum_cooling_chamber")
        .inputFluids(
            Fluid.of("gtceu:awakened_draconium", 9152),
            Fluid.of("gtceu:antimatter", 5000),
            Fluid.of("gtceu:crystal_matrix", 5000))
        .duration(20 * 60)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembly_line("stasis_phase_shifter")
        .itemInputs(
            "16x gtceu:awakened_draconium_plate",
            "draconicevolution:chaotic_core",
            "gtceu:uiv_machine_hull",
            "4x #gtceu:circuits/uiv",
            "4x gtceu:uiv_field_generator",
            "8x gtceu:uiv_electric_piston",
            "gtceu:large_synchrotron_switcher")
        .itemOutputs(
            "gtceu:stasis_phase_shifter")
        .inputFluids(
            Fluid.of("gtceu:awakened_draconium", 9152),
            Fluid.of("gtceu:antimatter", 5000),
            Fluid.of("gtceu:crystal_matrix", 5000))
        .duration(20 * 60)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembly_line("superconductive_stasis_field")
        .itemInputs(
            "16x gtceu:awakened_draconium_plate",
            "draconicevolution:chaotic_core",
            "gtceu:uiv_machine_hull",
            "4x #gtceu:circuits/uiv",
            "4x gtceu:uiv_field_generator",
            "8x gtceu:uiv_electric_piston",
            "gtceu:uev_fusion_reactor")
        .itemOutputs(
            "gtceu:superconductive_stasis_field")
        .inputFluids(
            Fluid.of("gtceu:awakened_draconium", 9152),
            Fluid.of("gtceu:antimatter", 5000),
            Fluid.of("gtceu:crystal_matrix", 5000))
        .duration(20 * 60)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembly_line("nebular_plasma_nexus")
        .itemInputs(
            "8x kubejs:awakened_draconium_heavy_plating",
            "4x draconicevolution:chaotic_core",
            "gtceu:uiv_machine_hull",
            "4x #gtceu:circuits/uiv",
            "16x gtceu:uiv_field_generator",
            "8x gtceu:uiv_electric_piston",
            "gtceu:uev_fusion_reactor",
            "gtceu:superconductive_stasis_field",
            "64x avaritia:eternal_singularity")
        .itemOutputs(
            "gtceu:nebular_plasma_nexus")
        .inputFluids(
            Fluid.of("gtceu:eternity", 50),
            Fluid.of("gtceu:antimatter", 5000),
            Fluid.of("gtceu:crystal_matrix", 5000))
        .duration(20 * 3000)
        .EUt(GTValues.VA[GTValues.UXV])
  
    event.recipes.gtceu.assembly_line("ore_processing_plant")
        .itemInputs(
            "8x gtceu:osmiridium_plate",
            "4x gtceu:luv_electric_motor",
            "gtceu:luv_machine_hull",
            "8x #gtceu:circuits/luv",
            "1x gtceu:luv_electric_piston",
            "gtceu:luv_macerator")
        .itemOutputs(
            "gtceu:processing_plant")
        .inputFluids(
            Fluid.of("gtceu:star_matter", 256),
            Fluid.of("gtceu:silicone_rubber", 1152),
            Fluid.of("gtceu:styrene_butadiene_rubber", 1152),
            Fluid.of("gtceu:soldering_alloy", 1152))
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembly_line("dimensional_miner")
        .itemInputs(
            "8x kubejs:eternity_heavy_plating",
            "4x draconicevolution:chaotic_core",
            "64x gtceu:luv_large_miner",
            "4x #gtceu:circuits/uxv",
            "16x gtceu:uiv_field_generator",
            "8x gtceu:uiv_electric_piston",
            "gtceu:uiv_macerator",
            "64x kubejs:energized_quantum_anomaly",
            "64x avaritia:eternal_singularity")
        .itemOutputs(
            "gtceu:dimensional_miner")
        .inputFluids(
            Fluid.of("gtceu:eternity", 16000),
            Fluid.of("gtceu:antimatter", 5000),
            Fluid.of("gtceu:cosmic_matter", 5000))
        .duration(20 * 3000)
        .EUt(GTValues.VA[GTValues.UXV])  

    event.recipes.gtceu.assembly_line("gtceu:hyper_assembly_line")
        .itemInputs(
            "16x gtceu:assembly_line")
        .itemInputs(
            "2x #gtceu:circuits/uxv",
            "4x kubejs:eternity_heavy_plating",
            "1x kubejs:space_time_heavy_plating",
            "2x gtceu:uiv_field_generator",
            "8x kubejs:eternity_casing",
            "32x gtceu:double_space_time_plate",
            "32x gtceu:double_space_time_plate",
            "2x gtceu:uiv_electric_motor",
            "2x #gtceu:circuits/uiv",
            "8x #gtceu:circuits/uev",
            "64x gtceu:eternity_bolt",
            "64x gtceu:eternity_foil",
            "gtceu:max_battery",
            "64x kubejs:quantum_anomaly",
            "64x kubejs:energized_quantum_anomaly")
        .inputFluids(
            "gtceu:nihonium 144*16",
            "gtceu:oganesson 144*16")
        .itemOutputs(
            "gtceu:hyper_assembly_line")
        .duration(20 * 240)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembly_line("uxv_ultimate_battery")
        .itemInputs(
            "16x gtceu:uhv_ultimate_battery")
        .itemInputs(
            "2x #gtceu:circuits/uxv",
            "16x kubejs:eternity_heavy_plating",
            "2x kubejs:infinity_heavy_plating",
            "2x gtceu:uxv_field_generator",
            "8x soggtaddon:high_energy_collider_casing",
            "32x gtceu:double_solar_radiation_alloy_plate",
            "32x gtceu:double_solar_radiation_alloy_plate",
            "2x gtceu:uxv_electric_motor",
            "16x #gtceu:circuits/uiv",
            "64x #gtceu:circuits/uev",
            "64x gtceu:solar_radiation_alloy_bolt",
            "64x gtceu:eternity_foil",
            "gtceu:max_battery",
            "64x kubejs:quantum_anomaly",
            "64x kubejs:energized_quantum_anomaly")
        .inputFluids(
            "gtceu:nihonium 144*16",
            "gtceu:oganesson 144*16")
        .itemOutputs(
            "soggtaddon:uxv_ultimate_battery")
        .duration(20 * 240)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembly_line("high_energy_collider")
        .itemInputs(
            "1x gtceu:fusion_mk5")
        .itemInputs(
            "4x #gtceu:circuits/uxv",
            "16x kubejs:eternity_heavy_plating",
            "4x kubejs:infinity_heavy_plating",
            "2x gtceu:uxv_field_generator",
            "16x soggtaddon:high_energy_collider_casing",
            "32x gtceu:double_solar_radiation_alloy_plate",
            "32x gtceu:double_solar_radiation_alloy_plate",
            "2x gtceu:uxv_emitter",
            "16x #gtceu:circuits/uiv",
            "64x #gtceu:circuits/uev",
            "64x gtceu:double_solar_radiation_alloy_plate",
            "64x gtceu:eternity_foil",
            "32x gtceu:double_solar_radiation_alloy_plate",
            "64x kubejs:quantum_anomaly",
            "64x kubejs:energized_quantum_anomaly")
        .inputFluids(
            "gtceu:nihonium 144*16",
            "gtceu:oganesson 144*16")
        .itemOutputs(
            "soggtaddon:high_energy_collider")
        .duration(20 * 240)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembly_line("singularity_reactor")
        .itemInputs(
            "16x gtceu:proto_matter_plate",
            "draconicevolution:chaotic_core",
            "gtceu:opv_machine_hull",
            "4x soggtaddon:uxv_ultimate_battery",
            "4x #gtceu:circuits/uxv",
            "4x gtceu:uxv_robot_arm",
            "8x gtceu:uxv_electric_piston",
            "4x gtceu:uxv_field_generator")
        .itemOutputs(
            "gtceu:singularity_reactor")
        .inputFluids(
            Fluid.of("gtceu:exotic_particle_suspension", 9152),
            Fluid.of("gtceu:proto_matter", 5000),
            Fluid.of("gtceu:infinity", 5000))
        .duration(20 * 50)
        .EUt(GTValues.VA[GTValues.OpV])

    event.recipes.gtceu.assembly_line("processor_printing_factory_lv")
        .itemInputs(
            "gtceu:large_circuit_assembler",
            "gtceu:large_cutter",
            "8x gtceu:cosmic_iridium_frame",
            "2x gtceu:uev_robot_arm",
            "2x gtceu:uev_conveyor_module",
            "4x #gtceu:circuits/uev",
            "kubejs:lv_circuit_etching_pattern")
        .inputFluids(
            "gtceu:soldering_alloy 9216",
            "gtceu:pcb_coolant 1500",
            "gtceu:hypoxylon 2304")
        .itemOutputs(
            "gtceu:processor_printing_factory_lv")
        .duration(20 * 75)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.assembly_line("uev_energy_input_hatch")
        .itemInputs(
            "gtceu:uev_machine_hull",
            "4x gtceu:draconium_single_cable",
            "2x kubejs:highly_resonative_soc",
            "#gtceu:circuits/uev",
            "2x kubejs:uev_voltage_coil",
            "avaritia:eternal_singularity")
        .itemOutputs(
            "gtceu:uev_energy_input_hatch")
        .inputFluids(
            Fluid.of("gtceu:sodium_potassium", 10000),
            Fluid.of("gtceu:soldering_alloy", 2880))
        .duration(20 * 30)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembly_line("uev_energy_output_hatch")
        .itemInputs(
            "gtceu:uev_machine_casing",
            "4x gtceu:draconium_single_cable",
            "2x kubejs:highly_resonative_soc",
            "#gtceu:circuits/uev",
            "2x kubejs:uev_voltage_coil",
            "avaritia:eternal_singularity",
            "kubejs:quantum_data_module")
        .itemOutputs(
            "gtceu:uev_energy_output_hatch")
        .inputFluids(
            Fluid.of("gtceu:sodium_potassium", 10000),
            Fluid.of("gtceu:soldering_alloy", 2880))
        .duration(20 * 30)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.assembly_line("uhv_motor")
        .itemInputs(
            "gtceu:long_magnetic_samarium_rod",
            "8x gtceu:neutronium_rod",
            "4x gtceu:neutronium_bolt",
            "4x gtceu:double_neutronium_plate",
            "64x gtceu:fine_crystal_matrix_wire",
            "64x gtceu:fine_crystal_matrix_wire",
            "2x gtceu:europium_single_cable",
            "avaritia:eternal_singularity")
        .itemOutputs(
            "gtceu:uhv_electric_motor")
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1000),
            Fluid.of("gtceu:soldering_alloy", 576),
            Fluid.of("gtceu:naquadria", 576))
        .stationResearch(b => b.researchStack(Item.of("gtceu:uv_electric_motor")).EUt(GTValues.VA[GTValues.UHV]).CWUt(64)) // 
        .duration(20 * 30)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembly_line("uhv_pump")
        .itemInputs(
            "gtceu:uhv_electric_motor",
            "gtceu:crystal_matrix_large_fluid_pipe",
            "2x gtceu:neutronium_plate",
            "8x gtceu:neutronium_screw",
            "16x gtceu:neoprene_ring",
            "gtceu:neutronium_gear",
            "2x gtceu:europium_single_cable",
            "avaritia:eternal_singularity")
        .itemOutputs(
            "gtceu:uhv_electric_pump")
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1000),
            Fluid.of("gtceu:soldering_alloy", 576),
            Fluid.of("gtceu:naquadria", 576))
        .stationResearch(b => b.researchStack(Item.of("gtceu:uv_electric_pump")).EUt(GTValues.VA[GTValues.UHV]).CWUt(64)) // 
        .duration(20 * 30)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembly_line("uhv_conveyor")
        .itemInputs(
            "gtceu:uhv_electric_motor",
            "8x gtceu:neutronium_rod",
            "4x gtceu:neutronium_bolt",
            "4x gtceu:double_neutronium_plate",
            "4x gtceu:neutronium_screw",
            "2x gtceu:europium_single_cable",
            "avaritia:eternal_singularity")
        .itemOutputs(
            "gtceu:uhv_conveyor_module")
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1000),
            Fluid.of("gtceu:soldering_alloy", 576),
            Fluid.of("gtceu:naquadria", 576),
            Fluid.of("gtceu:neoprene", 3456))
        .stationResearch(b => b.researchStack(Item.of("gtceu:uv_conveyor_module")).EUt(GTValues.VA[GTValues.UHV]).CWUt(64)) // 
        .duration(20 * 30)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembly_line("uhv_piston")
        .itemInputs(
            "gtceu:uhv_electric_motor",
            "4x gtceu:neutronium_plate",
            "4x gtceu:neutronium_bolt",
            "16x gtceu:neutronium_round",
            "4x gtceu:neutronium_rod",
            "2x gtceu:europium_single_cable",
            "avaritia:eternal_singularity",
            "gtceu:crystal_matrix_rotor",
            "64x gtceu:fine_crystal_matrix_wire")
        .itemOutputs(
            "gtceu:uhv_electric_piston")
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1000),
            Fluid.of("gtceu:soldering_alloy", 576),
            Fluid.of("gtceu:naquadria", 576))
        .stationResearch(b => b.researchStack(Item.of("gtceu:uv_electric_piston")).EUt(GTValues.VA[GTValues.UHV]).CWUt(64)) // 
        .duration(20 * 30)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembly_line("uhv_arm")
        .itemInputs(
            "8x gtceu:long_neutronium_rod",
            "gtceu:neutronium_gear",
            "3x gtceu:neutronium_buzz_saw_blade",
            "2x gtceu:uhv_electric_motor",
            "gtceu:uhv_electric_piston",
            "#gtceu:circuits/uhv",
            "2x #gtceu:circuits/uv",
            "4x #gtceu:circuits/zpm",
            "64x gtceu:fine_crystal_matrix_wire",
            "avaritia:eternal_singularity")
        .itemOutputs(
            "gtceu:uhv_robot_arm")
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1000),
            Fluid.of("gtceu:soldering_alloy", 576),
            Fluid.of("gtceu:naquadria", 576))
        .stationResearch(b => b.researchStack(Item.of("gtceu:uv_robot_arm")).EUt(GTValues.VA[GTValues.UHV]).CWUt(64)) // 
        .duration(20 * 30)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembly_line("energy_hatch_uhv")
        .itemInputs(
            "gtceu:uhv_machine_hull",
            "4x gtceu:europium_single_cable",
            "2x gtceu:highly_advanced_soc",
            "#gtceu:circuits/uhv",
            "2x kubejs:uhv_voltage_coil",
            "avaritia:eternal_singularity")
        .itemOutputs(
            "gtceu:uhv_energy_input_hatch")
        .inputFluids(
            Fluid.of("gtceu:sodium_potassium", 10000),
            Fluid.of("gtceu:soldering_alloy", 2880))
        .stationResearch(b => b.researchStack(Item.of("gtceu:uv_energy_input_hatch")).EUt(GTValues.VA[GTValues.UHV]).CWUt(64)) // 
        .duration(20 * 30)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembly_line("dynamo_hatch_uhv")
        .itemInputs(
            "gtceu:uhv_machine_casing",
            "4x gtceu:europium_single_cable",
            "2x gtceu:highly_advanced_soc",
            "#gtceu:circuits/uhv",
            "2x kubejs:uhv_voltage_coil",
            "avaritia:eternal_singularity")
        .itemOutputs(
            "gtceu:uhv_energy_output_hatch")
        .inputFluids(
            Fluid.of("gtceu:sodium_potassium", 10000),
            Fluid.of("gtceu:soldering_alloy", 2880))
        .stationResearch(b => b.researchStack(Item.of("gtceu:uv_energy_output_hatch")).EUt(GTValues.VA[GTValues.UHV]).CWUt(64)) // 
        .duration(20 * 30)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembly_line("uhvemitter")
        .itemInputs(
            "gtceu:resonant_essence_frame",
            "gtceu:uhv_electric_motor",
            "4x gtceu:long_neutronium_rod",
            "gtceu:gravi_star",
            "2x #gtceu:circuits/uhv",
            "64x gtceu:cosmic_neutronium_foil",
            "32x gtceu:cosmic_neutronium_foil",
            "4x gtceu:crystal_matrix_single_wire",
            "avaritia:eternal_singularity")
        .itemOutputs(
            "gtceu:uhv_emitter")
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1000),
            Fluid.of("gtceu:soldering_alloy", 576),
            Fluid.of("gtceu:naquadria", 576))
        .stationResearch(b => b.researchStack(Item.of("gtceu:uv_emitter")).EUt(GTValues.VA[GTValues.UHV]).CWUt(96)) // 
        .duration(20 * 30)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembly_line("uhvsensor")
        .itemInputs(
            "gtceu:resonant_essence_frame",
            "gtceu:uhv_electric_motor",
            "4x gtceu:neutronium_plate",
            "gtceu:gravi_star",
            "2x #gtceu:circuits/uhv",
            "64x gtceu:cosmic_neutronium_foil",
            "32x gtceu:cosmic_neutronium_foil",
            "4x gtceu:crystal_matrix_single_wire",
            "avaritia:eternal_singularity")
        .itemOutputs(
            "gtceu:uhv_sensor")
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1000),
            Fluid.of("gtceu:soldering_alloy", 576),
            Fluid.of("gtceu:naquadria", 576))
        .stationResearch(b => b.researchStack(Item.of("gtceu:uv_sensor")).EUt(GTValues.VA[GTValues.UHV]).CWUt(96)) // 
        .duration(20 * 30)
        .EUt(GTValues.VA[GTValues.UV])
    
    event.recipes.gtceu.assembly_line("uhv_field_generator_vol")
        .itemInputs(
            "gtceu:gravi_star",
            "avaritia:neutron_gear",
            "3x gtceu:neutronium_buzz_saw_blade",
            "8x gtceu:uhv_sensor",
            "8x gtceu:uhv_emitter",
            "#gtceu:circuits/uev",
            "2x #gtceu:circuits/uhv",
            "4x #gtceu:circuits/uv",
            "64x gtceu:fine_crystal_matrix_wire",
            "avaritia:eternal_singularity")
        .itemOutputs(
            "gtceu:uhv_field_generator")
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1000),
            Fluid.of("gtceu:soldering_alloy", 576),
            Fluid.of("gtceu:naquadria", 576))
        .stationResearch(b => b.researchStack(Item.of("gtceu:uv_field_generator")).EUt(GTValues.VA[GTValues.UHV]).CWUt(96))
        .duration(20 * 30)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembly_line("uiv_energy_input_hatch")
        .itemInputs(
            "gtceu:uiv_machine_hull",
            "4x gtceu:awakened_draconium_single_cable",
            "2x kubejs:extremely_advanced_soc",
            "2x #gtceu:circuits/uiv",
            "2x kubejs:uiv_voltage_coil",
            "avaritia:eternal_singularity",
            "kubejs:quantum_data_module")
        .itemOutputs(
            "gtceu:uiv_energy_input_hatch")
        .inputFluids(
            Fluid.of("gtceu:sodium_potassium", 5760),
            Fluid.of("gtceu:antimatter", 2880))
        .duration(20 * 30)
        .EUt(GTValues.VA[GTValues.UIV])
        
    event.recipes.gtceu.assembly_line("uiv_energy_output_hatch")
        .itemInputs(
            "gtceu:uiv_machine_casing",
            "4x gtceu:awakened_draconium_single_cable",
            "2x kubejs:extremely_advanced_soc",
            "2x #gtceu:circuits/uiv",
            "2x kubejs:uiv_voltage_coil",
            "avaritia:eternal_singularity",
            "kubejs:quantum_data_module")
        .itemOutputs(
            "gtceu:uiv_energy_output_hatch")
        .inputFluids(
            Fluid.of("gtceu:sodium_potassium", 5760),
            Fluid.of("gtceu:antimatter", 2880))
        .duration(20 * 30)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembly_line("uxv_energy_input_hatch")
        .itemInputs(
            "gtceu:uxv_machine_hull",
            "4x gtceu:chaos_single_wire",
            "2x kubejs:extremely_advanced_soc",
            "2x #gtceu:circuits/uxv",
            "2x kubejs:uxv_voltage_coil",
            "avaritia:eternal_singularity",
            "kubejs:quantum_data_module")
        .itemOutputs(
            "gtceu:uxv_energy_input_hatch")
        .inputFluids(
            Fluid.of("gtceu:sodium_potassium", 5760),
            Fluid.of("gtceu:universium", 2880))
        .duration(20 * 30)
        .EUt(GTValues.VA[GTValues.UXV])
        
    event.recipes.gtceu.assembly_line("uxv_energy_output_hatch")
        .itemInputs(
            "gtceu:uxv_machine_casing",
            "4x gtceu:chaos_single_wire",
            "2x kubejs:extremely_advanced_soc",
            "2x #gtceu:circuits/uxv",
            "2x kubejs:uxv_voltage_coil",
            "avaritia:eternal_singularity",
            "kubejs:quantum_data_module")
        .itemOutputs(
            "gtceu:uxv_energy_output_hatch")
        .inputFluids(
            Fluid.of("gtceu:sodium_potassium", 5760),
            Fluid.of("gtceu:universium", 2880))
        .duration(20 * 30)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembly_line("fusion_reactor_mk5")
        .itemInputs(
            "kubejs:fusion_coil_block_mk_3",
            "4x #gtceu:circuits/uiv",
            "64x gtceu:gravi_star",
            "16x gtceu:double_awakened_draconium_plate",
            "8x gtceu:uev_field_generator",
            "64x kubejs:extremely_advanced_soc",
            "32x gtceu:awakened_draconium_single_wire",
            "32x gtceu:fine_heavy_duty_alloy_t4_wire")
        .itemOutputs(
            "gtceu:fusion_mk5")
        .inputFluids(
            Fluid.of("gtceu:neoprene", 5950),
            Fluid.of("gtceu:xlpe", 1152),
            Fluid.of("gtceu:meta_stable_molten_kevlar", 1152),
            Fluid.of("gtceu:cosmic_matter", 10152))
        .stationResearch(b => b.researchStack(Item.of("gtceu:uev_fusion_reactor")).EUt(GTValues.VA[GTValues.UIV]).CWUt(512)) // 
        .duration(20 * 50)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.assembly_line("eternity_fusion_reactor")
        .itemInputs(
            "kubejs:eternity_fusion_coil_block",
            "4x #gtceu:circuits/uxv",
            "64x gtceu:gravi_star",
            "16x gtceu:double_stellar_matter_plasma_plate",
            "8x gtceu:uiv_field_generator",
            "64x kubejs:extremely_advanced_soc",
            "32x gtceu:fine_universium_wire",
            "32x gtceu:space_time_spring",
            "32x gtceu:annihilation_residue_dust")
        .itemOutputs(
            "gtceu:eternity_fusion_reactor")
        .inputFluids(
            Fluid.of("gtceu:meta_stable_molten_kevlar", 5950),
            Fluid.of("gtceu:meta_stable_molten_zylon", 1152),
            Fluid.of("gtceu:cosmic_matter", 1152),
            Fluid.of("gtceu:universium", 10152))
        .stationResearch(b => b.researchStack(Item.of("gtceu:fusion_mk5")).EUt(GTValues.VA[GTValues.UXV]).CWUt(512)) // 
        .duration(20 * 50)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembly_line("basic_fusion_injector")
        .itemInputs(
            "16x gtceu:cosmic_tungsten_plate",
            "16x gtceu:gravi_star",
            "gtceu:uev_fusion_reactor",
            "4x #gtceu:circuits/uiv",
            "4x #gtceu:circuits/uhv",
            "4x gtceu:uev_robot_arm",
            "8x gtceu:uev_electric_piston",
            "4x gtceu:uhv_field_generator")
        .itemOutputs(
            "gtceu:basic_fusion_injector")
        .inputFluids(
            Fluid.of("gtceu:stropharic_hypoxylon", 9152),
            Fluid.of("gtceu:antimatter", 1152),
            Fluid.of("gtceu:crystal_matrix", 1152),
            Fluid.of("gtceu:peek", 1152))
        .duration(20 * 300)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembly_line("wyvern_fusion_injector")
        .itemInputs(
            "16x gtceu:double_draconium_plate",
            "8x draconicevolution:wyvern_core",
            "gtceu:basic_fusion_injector",
            "4x #gtceu:circuits/uiv",
            "4x #gtceu:circuits/uev",
            "16x gtceu:uev_robot_arm",
            "8x gtceu:uev_electric_piston",
            "8x gtceu:uhv_field_generator")
        .itemOutputs(
            "gtceu:wyvern_fusion_injector")
        .inputFluids(
            Fluid.of("gtceu:stropharic_hypoxylon", 9152),
            Fluid.of("gtceu:antimatter", 1152),
            Fluid.of("gtceu:peek", 1152),
            Fluid.of("gtceu:crystal_matrix", 1152))
        .duration(20 * 300)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.assembly_line("draconic_fusion_injector")
        .itemInputs(
            "16x gtceu:double_awakened_draconium_plate",
            "8x draconicevolution:awakened_core",
            "gtceu:wyvern_fusion_injector",
            "16x #gtceu:circuits/uiv",
            "8x #gtceu:circuits/uev",
            "16x gtceu:uev_robot_arm",
            "8x gtceu:uev_electric_piston",
            "8x gtceu:uev_field_generator")
        .itemOutputs(
            "gtceu:draconic_fusion_injector")
        .inputFluids(
            Fluid.of("gtceu:stropharic_hypoxylon", 9152),
            Fluid.of("gtceu:antimatter", 5000),
            Fluid.of("gtceu:peek", 1152),
            Fluid.of("gtceu:crystal_matrix", 5000))
        .duration(20 * 300)
        .EUt(GTValues.VA[GTValues.UXV])
  
    event.recipes.gtceu.assembly_line("chaotic_fusion_injector")
        .itemInputs(
            "7x gtceu:dense_chaos_plate",
            "8x draconicevolution:chaotic_core",
            "gtceu:draconic_fusion_injector",
            "8x #gtceu:circuits/uxv",
            "4x #gtceu:circuits/uiv",
            "16x gtceu:uiv_robot_arm",
            "8x gtceu:uiv_electric_piston",
            "8x gtceu:uiv_field_generator",
            "64x kubejs:space_time_heavy_plating")
        .itemOutputs(
            "gtceu:chaotic_fusion_injector")
        .inputFluids(
            Fluid.of("gtceu:stropharic_hypoxylon", 9152),
            Fluid.of("gtceu:antimatter", 5000),
            Fluid.of("gtceu:meta_stable_molten_kevlar", 5000),
            Fluid.of("gtceu:crystal_matrix", 5000))
        .duration(20 * 300)
        .EUt(GTValues.VA[GTValues.OpV])

    event.recipes.gtceu.assembly_line("fusion_reactor_mk4")
        .itemInputs(
            "kubejs:fusion_coil_mk2",
            "4x #gtceu:circuits/uev",
            "64x gtceu:gravi_star",
            "16x gtceu:double_draconium_plate",
            "8x gtceu:uhv_field_generator",
            "64x kubejs:highly_resonative_soc",
            "32x gtceu:draconium_single_wire",
            "32x gtceu:fine_hypoxylon_wire")
        .itemOutputs(
            "gtceu:uev_fusion_reactor")
        .inputFluids(
            Fluid.of("gtceu:condensed_star_matter", 5950),
            Fluid.of("gtceu:peek", 1152),
            Fluid.of("gtceu:neoprene", 1152),
            Fluid.of("gtceu:crystal_matrix", 10152))
        .stationResearch(b => b.researchStack(Item.of("gtceu:uv_fusion_reactor")).EUt(GTValues.VA[GTValues.UEV]).CWUt(256)) // 
        .duration(20 * 50)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembly_line("adv_processing_plant")
        .itemInputs(
            "8x gtceu:neutronium_plate",
            "4x gtceu:uhv_electric_motor",
            "gtceu:uhv_machine_hull",
            "8x #gtceu:circuits/uhv",
            "gtceu:uhv_electric_piston",
            "gtceu:processing_plant")
        .inputFluids(
            "gtceu:condensed_star_matter 1256",
            "gtceu:neoprene 2152",
            "gtceu:peek 2152",
            "gtceu:soldering_alloy 2152")
        .itemOutputs(
            "gtceu:adv_processing_plant")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.assembly_line("eternity_recursion_engine")
        .itemInputs(
            "gtceu:large_synchrotron_switcher",
            "gtceu:uxv_field_generator",
            "16x kubejs:energized_quantum_anomaly",
            "32x kubejs:highly_superconducting_coil_block",
            "2x gtceu:infinity_frame",
            "2x kubejs:uxv_voltage_coil",
            "16x gtceu:pure_cosmic_matter_gear",
            "kubejs:watch_of_flowing_time")
        .inputFluids(
            "gtceu:quark_gluon_plasma 1440",
            "gtceu:heavy_duty_alloy_t4 576",
            "gtceu:hypoxylon 9216")
        .itemOutputs(
            "gtceu:eternity_recursion_engine")
        .duration(20 * 150)
        .EUt(GTValues.VA[GTValues.OpV]);

    event.recipes.gtceu.assembly_line("mega_oreproc_facility")
        .itemInputs(
            "gtceu:uxv_macerator",
            "gtceu:uxv_electrolyzer",
            "gtceu:uxv_centrifuge",
            "gtceu:uxv_sifter",
            "16x kubejs:reinforced_base_casing",
            "64x kubejs:adv_high_power_crushing_wheels",
            "64x kubejs:adv_high_power_crushing_wheels",
            "16x kubejs:reinforced_base_casing",
            "16x kubejs:reinforced_base_casing",
            "64x gtceu:adv_processing_plant",
            "64x gtceu:adv_processing_plant",
            "16x kubejs:reinforced_base_casing",
            "16x kubejs:reinforced_base_casing",
            "gtceu:uxv_conveyor_module",
            "gtceu:uxv_conveyor_module",
            "16x kubejs:reinforced_base_casing")
        .inputFluids(
            "gtceu:meta_stable_molten_kevlar 2500",
            "gtceu:cosmic_matter 5000",
            "gtceu:eternity 10000",
            "gtceu:hypoxylon 20000")
        .itemOutputs(
            "gtceu:mega_oreproc_facility")
        .duration(20 * 1200)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembly_line("distillation_facility_complex")
        .itemInputs(
            "gtceu:uxv_distillery",
            "64x gtceu:extreme_cracking_unit",
            "64x gtceu:extreme_cracking_unit",
            "gtceu:uxv_distillery",
            "16x kubejs:reinforced_base_casing",
            "64x gtceu:chemical_plant",
            "64x gtceu:chemical_plant",
            "16x kubejs:reinforced_base_casing",
            "16x kubejs:reinforced_base_casing",
            "4x kubejs:advanced_air_intake_hatch",
            "4x kubejs:advanced_air_intake_hatch",
            "16x kubejs:reinforced_base_casing",
            "16x kubejs:reinforced_base_casing",
            "gtceu:uxv_electric_pump",
            "gtceu:uxv_electric_pump",
            "16x kubejs:reinforced_base_casing")
        .inputFluids(
            "gtceu:meta_stable_molten_kevlar 2500",
            "gtceu:cosmic_matter 5000",
            "gtceu:eternity 10000",
            "gtceu:hypoxylon 20000")
        .itemOutputs(
            "gtceu:distillation_facility_complex")
        .duration(20 * 1200)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembly_line("hyper_separator")
        .itemInputs(
            "gtceu:uxv_centrifuge",
            "gtceu:uxv_electromagnetic_separator",
            "gtceu:uxv_electromagnetic_separator",
            "gtceu:uxv_electrolyzer",
            "16x kubejs:reinforced_base_casing",
            "64x gtceu:chemical_plant",
            "64x gtceu:chemical_plant",
            "16x kubejs:reinforced_base_casing",
            "16x kubejs:reinforced_base_casing",
            "4x kubejs:advanced_air_intake_hatch",
            "4x kubejs:advanced_air_intake_hatch",
            "16x kubejs:reinforced_base_casing",
            "16x kubejs:reinforced_base_casing",
            "gtceu:uxv_electric_pump",
            "gtceu:uxv_electric_pump",
            "16x kubejs:reinforced_base_casing")
        .inputFluids(
            "gtceu:meta_stable_molten_kevlar 2500",
            "gtceu:cosmic_matter 5000",
            "gtceu:eternity 10000",
            "gtceu:hypoxylon 20000")
        .itemOutputs(
            "gtceu:hyper_separator")
        .duration(20 * 1200)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembly_line("hyper_bio_lab")    
        .itemInputs(
            "64x gtceu:bio_lab",
            "64x gtceu:large_bacterial_bat",
            "64x gtceu:uhv_hermetic_casing",
            "6x gtceu:uxv_electric_pump",
            "64x gtceu:sterilizing_filter_casing",
            "64x gtceu:dense_hypoxylon_plate",
            "4x kubejs:cosmic_processor_mainframe")
        .inputFluids(
            "gtceu:eternity 5000",
            "gtceu:antimatter 10000",
            "gtceu:sterilized_growth_medium 15000",
            "gtceu:stropharic_hypoxylon 10000")
        .itemOutputs(
            "gtceu:hyper_bio_lab")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(20 * 25)

    event.recipes.gtceu.assembly_line("hyper_crystallization_chamber")
        .itemInputs(
            "16x gtceu:uiv_autoclave",
            "64x gtceu:large_autoclave",
            "64x gtceu:gravi_star",
            "16x avaritia:eternal_singularity",
            "64x kubejs:energized_quantum_anomaly",
            "2x gtceu:uxv_electric_pump",
            "16x kubejs:space_time_heavy_plating")
        .inputFluids(
            "gtceu:eternity 5000",
            "gtceu:antimatter 10000",
            "gtceu:radon 100000",
            "gtceu:europium 100000")
        .itemOutputs(
            "gtceu:hyper_crystallization_chamber")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(20 * 25)

    event.recipes.gtceu.assembly_line("collosal_laser_beam_containment_chamber")
        .itemInputs(
            "8x kubejs:ultra_reflective_laser_cooling_casing",
            "4x gtceu:uiv_laser_engraver",
            "64x gtceu:active_transformer",
            "16x #gtceu:circuits/uxv",
            "6x gtceu:uxv_robot_arm",
            "6x gtceu:uxv_conveyor_module",
            "6x gtceu:uxv_field_generator",
            "7x gtceu:dense_zylon_plate",
            "64x gtceu:fine_stellar_matter_plasma_wire",
            "64x gtceu:fine_stellar_matter_plasma_wire",
            "32x gtceu:double_infinity_plate",
            "64x gtceu:space_time_screw",
            "6x kubejs:emitter_red",
            "6x kubejs:emitter_green",
            "6x kubejs:emitter_blue")
        .inputFluids(
            "gtceu:heavy_duty_alloy_t4 9216",
            "gtceu:universium 4608",
            "gtceu:eternity 6912",
            "gtceu:stabilized_spatial_flux 50000")
        .itemOutputs(
            "gtceu:collosal_laser_beam_containment_chamber")
        .duration(20 * 300)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembly_line("industrial_grade_laser_synchronizer_chiller")
        .itemInputs(
            "8x kubejs:ultra_reflective_laser_cooling_casing",
            "16x gtceu:quantum_cooling_chamber",
            "32x gtceu:quantum_space_projector",
            "16x #gtceu:circuits/uxv",
            "6x gtceu:uxv_emitter",
            "6x gtceu:uxv_fluid_regulator",
            "7x gtceu:dense_zylon_plate",
            "64x gtceu:fine_stellar_matter_plasma_wire",
            "64x gtceu:fine_stellar_matter_plasma_wire",
            "32x gtceu:double_infinity_plate",
            "64x gtceu:space_time_screw",
            "kubejs:laser_containment_cell_red",
            "kubejs:laser_containment_cell_green",
            "kubejs:laser_containment_cell_blue")
        .inputFluids(
            "gtceu:heavy_duty_alloy_t4 9216",
            "gtceu:universium 4608",
            "gtceu:eternity 6912",
            "gtceu:stabilized_spatial_flux 50000")
        .itemOutputs(
            "gtceu:industrial_grade_laser_synchronizer_chiller")
        .duration(20 * 300)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembly_line("emitter_red")
        .itemInputs(
            "16x gtceu:double_pure_cosmic_matter_plate",
            "64x gtceu:fine_awakened_draconium_wire",
            "2x gtceu:max_battery",
            "4x gtceu:active_transformer",
            "16x gtceu:hv_emitter",
            "16x gtceu:exquisite_synchronized_chronon_gem",
            "8x gtceu:thallium_doped_sodium_iodine_lens",
            "8x gtceu:ruby_lens",
            "16x gtceu:normal_laser_pipe")
        .inputFluids(
            "gtceu:meta_stable_molten_zylon 1152",
            "gtceu:cosmic_iridium 1152",
            "gtceu:cosmic_osmium 1152",
            "gtceu:cosmic_titanium 1152")
        .itemOutputs(
            "16x kubejs:emitter_red")
        .duration(20 * 60)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.assembly_line("emitter_green")
        .itemInputs(
            "16x gtceu:double_pure_cosmic_matter_plate",
            "64x gtceu:fine_awakened_draconium_wire",
            "2x gtceu:max_battery",
            "4x gtceu:active_transformer",
            "16x gtceu:mv_emitter",
            "16x gtceu:exquisite_synchronized_chronon_gem",
            "8x gtceu:thallium_doped_sodium_iodine_lens",
            "8x gtceu:emerald_lens",
            "16x gtceu:normal_laser_pipe")
        .inputFluids(
            "gtceu:meta_stable_molten_zylon 1152",
            "gtceu:cosmic_iridium 1152",
            "gtceu:cosmic_osmium 1152",
            "gtceu:cosmic_titanium 1152")
        .itemOutputs(
            "16x kubejs:emitter_green")
        .duration(20 * 60)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.assembly_line("emitter_blue")
        .itemInputs(
            "16x gtceu:double_pure_cosmic_matter_plate",
            "64x gtceu:fine_awakened_draconium_wire",
            "2x gtceu:max_battery",
            "4x gtceu:active_transformer",
            "16x gtceu:lv_emitter",
            "16x gtceu:exquisite_synchronized_chronon_gem",
            "8x gtceu:thallium_doped_sodium_iodine_lens",
            "8x gtceu:sapphire_lens",
            "16x gtceu:normal_laser_pipe")
        .inputFluids(
            "gtceu:meta_stable_molten_zylon 1152",
            "gtceu:cosmic_iridium 1152",
            "gtceu:cosmic_osmium 1152",
            "gtceu:cosmic_titanium 1152")
        .itemOutputs(
            "16x kubejs:emitter_blue")
        .duration(20 * 60)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.assembly_line("radiation_chamber")
	    .itemInputs(
            "7x gtceu:dense_atomic_alloy_plate",
            "7x gtceu:dense_atomic_alloy_plate",
            "4x gtceu:uv_electric_pump",
            "4x gtceu:uv_robot_arm",
            "8x #gtceu:circuits/uv",
            "16x gtceu:uv_autoclave")
	    .itemOutputs(
            "gtceu:xl_radiation_chamber")
	    .inputFluids(
	    	Fluid.of("gtceu:polybenzimidazole", 32000),
	    	Fluid.of("gtceu:neoprene", 2304),
	    	Fluid.of("gtceu:soldering_alloy", 1152))
	    .duration(20 * 100)
  	    .EUt((GTValues.VA[GTValues.UHV]))

    event.recipes.gtceu.assembly_line("large_polymerization_chamber")
	    .itemInputs(
            "16x gtceu:chemical_plant",
            "16x gtceu:large_dehydration_unit",
            "16x gtceu:large_solidifier",
            "16x gtceu:uhv_electric_pump",
            "8x gtceu:uhv_robot_arm",
            "4x #gtceu:circuits/uev",
            "16x gtceu:peek_plate",
            "16x avaritia:neutron_gear",
            "64x gtceu:fine_kaemite_wire",
            "64x gtceu:fine_kaemite_wire",
            "64x gtceu:antimatter_foil",
            "64x gtceu:antimatter_foil",
            "64x gtceu:resonant_essence_screw")
		.itemOutputs(
            "gtceu:large_polymerization_chamber")
		.inputFluids(
			Fluid.of("gtceu:peek", 32000),
			Fluid.of("gtceu:neoprene", 2304),
			Fluid.of("gtceu:soldering_alloy", 1152))
		.duration(20 * 100)
  		.EUt((GTValues.VA[GTValues.UEV]))

    event.recipes.gtceu.assembly_line("large_high_pressure_reactor")
	    .itemInputs(
            "16x gtceu:chemical_plant",
            "16x gtceu:atomicompressor",
            "16x gtceu:atmospheric_collector",
            "16x gtceu:uiv_electric_pump",
            "8x gtceu:uiv_electric_piston",
            "4x #gtceu:circuits/uiv",
            "16x kubejs:chaos_heavy_plating",
            "16x gtceu:awakened_draconium_gear",
            "64x gtceu:fine_cosmic_osmium_wire",
            "64x gtceu:fine_cosmic_osmium_wire",
            "64x gtceu:heavy_duty_alloy_t4_foil",
            "64x gtceu:heavy_duty_alloy_t4_foil",
            "64x gtceu:cosmic_tungsten_screw")
	    .itemOutputs(
            "gtceu:large_high_pressure_reactor")
	    .inputFluids(
	    	Fluid.of("gtceu:peek", 32000),
	    	Fluid.of("gtceu:neoprene", 2304),
	    	Fluid.of("gtceu:soldering_alloy", 1152),
	    	Fluid.of("gtceu:astral_flux_plasma", 5000))
	    .duration(20 * 150)
  	    .EUt((GTValues.VA[GTValues.UXV]))

    event.recipes.gtceu.assembly_line("sp_6")
        .itemInputs(
            "8x gtceu:advanced_smd_resistor",
            "8x gtceu:advanced_smd_capacitor",
            "8x gtceu:advanced_smd_transistor",
            "8x gtceu:advanced_smd_inductor",
            "8x gtceu:advanced_smd_diode",
            "2x solarflux:photovoltaic_cell_4",
            "2x solarflux:sp_5",
            "8x bloodmagic:dungeon_metal")
        .itemOutputs(
            "solarflux:sp_6")
        .inputFluids(
            Fluid.of("gtceu:soldering_alloy", 1152),
            Fluid.of("gtceu:polybenzimidazole", 150))
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.assembly_line("sp_7")
        .itemInputs(
            "8x gtceu:advanced_smd_resistor",
            "8x gtceu:advanced_smd_capacitor",
            "8x gtceu:advanced_smd_transistor",
            "8x gtceu:advanced_smd_inductor",
            "8x gtceu:advanced_smd_diode",
            "2x solarflux:photovoltaic_cell_5",
            "2x solarflux:sp_6",
            "32x gtceu:fine_uranium_rhodium_dinaquadide_wire",
            "32x gtceu:fine_uranium_rhodium_dinaquadide_wire")
        .itemOutputs(
            "solarflux:sp_7")
        .inputFluids(
            Fluid.of("gtceu:soldering_alloy", 1152),
            Fluid.of("gtceu:naquadria", 1152))
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.IV])
    
    event.recipes.gtceu.assembly_line("sp_8")
        .itemInputs(
            "16x gtceu:advanced_smd_resistor",
            "16x gtceu:advanced_smd_capacitor",
            "16x gtceu:advanced_smd_transistor",
            "16x gtceu:advanced_smd_inductor",
            "16x gtceu:advanced_smd_diode",
            "2x solarflux:photovoltaic_cell_6",
            "2x solarflux:sp_7",
            "kubejs:condensed_star_matter",
            "4x gtceu:blacklight")
        .itemOutputs(
            "solarflux:sp_8")
        .inputFluids(
            Fluid.of("gtceu:soldering_alloy", 1152),
            Fluid.of("gtceu:naquadria", 1152))
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembly_line("plasma_mixer")
        .itemInputs(
            "8x gtceu:pure_cosmic_matter_plate",
            "4x gtceu:uxv_electric_motor",
            "kubejs:semi_stable_casing",
            "1x #gtceu:circuits/uxv",
            "4x gtceu:uiv_field_generator",
            "gtceu:uxv_mixer")
        .itemOutputs(
            "gtceu:plasma_mixer")
        .inputFluids(
            Fluid.of("gtceu:awakened_draconium", 9152),
            Fluid.of("gtceu:antimatter", 5000),
            Fluid.of("gtceu:crystal_matrix", 5000))
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembly_line("cryogenic_centrifuge")
        .itemInputs(
            "8x gtceu:cosmic_iridium_plate",
            "4x gtceu:uev_electric_motor",
            "kubejs:cryogenic_casing",
            "8x #gtceu:circuits/uiv",
            "8x gtceu:cosmic_iridium_plate",
            "gtceu:uev_centrifuge")
        .itemOutputs(
            "gtceu:cryogenic_centrifuge")
        .inputFluids(
            Fluid.of("gtceu:condensed_star_matter", 9152),
            Fluid.of("gtceu:antimatter", 5000),
            Fluid.of("gtceu:crystal_matrix", 5000))
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembly_line("catalyst_reactor")
        .itemInputs(
            "8x gtceu:infinity_plate",
            "4x gtceu:uxv_electric_motor",
            "kubejs:kevlar_casing",
            "2x #gtceu:circuits/uxv",
            "8x gtceu:infinity_gear",
            "gtceu:uxv_chemical_reactor")
        .itemOutputs(
            "gtceu:catalyst_reactor")
        .inputFluids(
            Fluid.of("gtceu:awakened_draconium", 9152),
            Fluid.of("gtceu:antimatter", 5000),
            Fluid.of("gtceu:crystal_matrix", 5000))
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembly_line("chemical_plant")
        .itemInputs(
            "8x gtceu:trinium_plate",
            "4x gtceu:luv_electric_motor",
            "gtceu:inert_machine_casing",
            "8x #gtceu:circuits/zpm",
            "8x gtceu:trinium_gear",
            "gtceu:luv_chemical_reactor")
        .itemOutputs(
            "gtceu:chemical_plant")
        .inputFluids(
            Fluid.of("gtceu:polybenzimidazole", 256000),
            Fluid.of("gtceu:silicone_rubber", 1152),
            Fluid.of("gtceu:styrene_butadiene_rubber", 1152),
            Fluid.of("gtceu:soldering_alloy", 1152))
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.ZPM])  
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of("gtceu:large_chemical_reactor")).EUt(GTValues.VA[GTValues.IV]).duration(20 * 210))
})