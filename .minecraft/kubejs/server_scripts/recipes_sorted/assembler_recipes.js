ServerEvents.recipes(event => {
    // Const


    // Individual Recipes

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
            '{data_model:{id:"hostilenetworks:sheep"}}').strongNBT().withCount(16))
        .itemOutputs(
            "gtceu:simulation_cube")
        .duration(20 * 45)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.assembler("soul_infused_casing")
        .itemInputs(
            "4x enderio:soularium_pressure_plate",
            "4x minecraft:soul_sand")
        .itemOutputs(
            "kubejs:soul_infused_casing")
        .circuit(6)
        .duration(20 * 8)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.assembler("processor_printing_factory_mv")
        .itemInputs(
            "gtceu:processor_printing_factory_lv",
            "kubejs:mv_circuit_etching_pattern")
        .inputFluids(
            "gtceu:soldering_alloy 2304")
        .itemOutputs(
            "gtceu:processor_printing_factory_mv")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler("processor_printing_factory_hv")
        .itemInputs(
            "gtceu:processor_printing_factory_mv",
            "kubejs:hv_circuit_etching_pattern")
        .inputFluids(
            "gtceu:soldering_alloy 2304")
        .itemOutputs(
            "gtceu:processor_printing_factory_hv")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler("processor_printing_factory_ev")
        .itemInputs(
            "gtceu:processor_printing_factory_hv",
            "kubejs:ev_circuit_etching_pattern")
        .inputFluids(
            "gtceu:soldering_alloy 2304")
        .itemOutputs(
            "gtceu:processor_printing_factory_ev")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler("processor_printing_factory_iv")
        .itemInputs(
            "gtceu:processor_printing_factory_ev",
            "kubejs:iv_circuit_etching_pattern")
        .inputFluids(
            "gtceu:soldering_alloy 2304")
        .itemOutputs(
            "gtceu:processor_printing_factory_iv")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler("processor_printing_factory_luv")
        .itemInputs(
            "gtceu:processor_printing_factory_iv",
            "kubejs:luv_circuit_etching_pattern")
        .inputFluids(
            "gtceu:soldering_alloy 2304")
        .itemOutputs(
            "gtceu:processor_printing_factory_luv")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler("processor_printing_factory_zpm")
        .itemInputs(
            "gtceu:processor_printing_factory_luv",
            "kubejs:zpm_circuit_etching_pattern")
        .inputFluids(
            "gtceu:soldering_alloy 2304")
        .itemOutputs(
            "gtceu:processor_printing_factory_zpm")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler("processor_printing_factory_uv")
        .itemInputs(
            "gtceu:processor_printing_factory_zpm",
            "kubejs:uv_circuit_etching_pattern")
        .inputFluids(
            "gtceu:soldering_alloy 2304")
        .itemOutputs(
            "gtceu:processor_printing_factory_uv")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler("processor_printing_factory_uhv")
        .itemInputs(
            "gtceu:processor_printing_factory_uv",
            "kubejs:uhv_circuit_etching_pattern")
        .inputFluids(
            "gtceu:soldering_alloy 2304")
        .itemOutputs(
            "gtceu:processor_printing_factory_uhv")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler("fluid_regulator_uev")
        .itemInputs(
            "gtceu:uev_electric_pump",
            "2x #gtceu:circuits/uev")
        .itemOutputs(
            "gtceu:uev_fluid_regulator")
        .circuit(1)
        .duration(20 * 2.5)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.assembler("fluid_regulator_uxv")
        .itemInputs(
            "gtceu:uxv_electric_pump",
            "2x #gtceu:circuits/uxv")
        .itemOutputs(
            "gtceu:uxv_fluid_regulator")
        .circuit(1)
        .duration(20 * 2.5)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembler("uxv_voltage_coil")
        .itemInputs(
            "gtceu:magnetic_stabilized_iridium_rod",
            "64x gtceu:fine_pure_cosmic_matter_wire")
        .itemOutputs(
            "kubejs:uxv_voltage_coil")
        .circuit(1)
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.UXV]);

    event.recipes.gtceu.assembler("fluid_regulator_uiv")
        .itemInputs(
            "gtceu:uiv_electric_pump",
            "2x #gtceu:circuits/uiv")
        .itemOutputs(
            "gtceu:uiv_fluid_regulator")
        .circuit(1)
        .duration(20 * 2.5)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.assembler("uiv_voltage_coil")
        .itemInputs(
            "gtceu:magnetic_stabilized_iridium_rod",
            "64x gtceu:fine_awakened_draconium_wire")
        .itemOutputs(
            "kubejs:uiv_voltage_coil")
        .circuit(1)
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.assembler("highly_superconducting_coil")
    .itemInputs(
        "32x gtceu:draconium_double_cable",
        "32x gtceu:crystal_matrix_foil")
    .inputFluids(
        Fluid.of("gtceu:draconium", 3456))
    .itemOutputs(
        "kubejs:highly_superconducting_coil_block")
    .duration(20 * 10)
    .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.assembler("fluid_regulator_uhv")
        .itemInputs(
            "gtceu:uhv_electric_pump",
            "2x #gtceu:circuits/uhv")
        .itemOutputs(
            "gtceu:uhv_fluid_regulator")
        .circuit(1)
        .duration(20 * 2.5)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler("fusion_machine_casing_mk_v")
        .itemInputs(
            "4x gtceu:heavy_duty_alloy_t4_plate",
            "6x gtceu:awakened_draconium_plate",
            "4x gtceu:heavy_duty_alloy_t4_plate",
            "gtceu:uiv_field_generator",
            "kubejs:fusion_coil_block_mk_3",
            "2x kubejs:uiv_voltage_coil",
            "4x gtceu:heavy_duty_alloy_t4_plate",
            "4x kubejs:dragon_processor",
            "4x gtceu:heavy_duty_alloy_t4_plate")
        .inputFluids(
            "gtceu:peek 3600")
        .itemOutputs(
            "4x kubejs:fusion_machine_casing_mk_v")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.assembler("fusion_coil_block_mk_3")
        .itemInputs(
            "4x gtceu:heavy_duty_alloy_t4_plate",
            "6x gtceu:awakened_draconium_plate",
            "4x gtceu:heavy_duty_alloy_t4_plate",
            "2x gtceu:uiv_electric_pump",
            "16x gtceu:superconducting_coil",
            "gtceu:uiv_field_generator",
            "4x gtceu:heavy_duty_alloy_t4_plate",
            "32x gtceu:neutron_reflector",
            "4x gtceu:heavy_duty_alloy_t4_plate")
        .inputFluids(
            "gtceu:peek 3600")
        .itemOutputs(
            "16x kubejs:fusion_coil_block_mk_3")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.assembler("eternity_fusion_machine_casing")
        .itemInputs(
            "4x gtceu:eternity_plate",
            "6x gtceu:pure_cosmic_matter_plate",
            "4x gtceu:eternity_plate",
            "gtceu:uxv_field_generator",
            "kubejs:eternity_fusion_coil_block",
            "2x kubejs:uxv_voltage_coil",
            "4x gtceu:eternity_plate",
            "4x kubejs:cosmic_processor",
            "4x gtceu:eternity_plate")
        .inputFluids(
            "gtceu:meta_stable_molten_zylon 3600")
        .itemOutputs(
            "16x kubejs:eternity_fusion_machine_casing")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.assembler("eternity_fusion_coil_block_assembler")
        .itemInputs(
            "4x gtceu:eternity_plate",
            "6x gtceu:pure_cosmic_matter_plate",
            "4x gtceu:eternity_plate",
            "2x gtceu:uxv_electric_pump",
            "32x gtceu:superconducting_coil",
            "gtceu:uxv_field_generator",
            "4x gtceu:eternity_plate",
            "64x gtceu:neutron_reflector",
            "4x gtceu:eternity_plate")
        .inputFluids(
            "gtceu:meta_stable_molten_zylon 3600")
        .itemOutputs(
            "32x kubejs:eternity_fusion_coil_block")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.assembler("fusion_glass_mk2")
            .itemInputs(
                "8x gtceu:resonant_essence_plate",
                "gtceu:fusion_glass",
                "8x gtceu:draconium_plate",
                "16x gtceu:neutron_reflector",
                "256x gtceu:neutronium_foil")
            .inputFluids(
                "gtceu:peek 1000")
            .itemOutputs(
                "2x kubejs:fusion_glass_mk2")
            .cleanroom(CleanroomType.STERILE_CLEANROOM)
            .duration(20 * 20)
            .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.assembler("fusion_coil_mk2")
            .itemInputs(
                "8x gtceu:resonant_essence_plate",
                "2x gtceu:superconducting_coil",
                "2x gtceu:uv_field_generator",
                "4x gtceu:uv_electric_pump",
                "8x gtceu:neutron_reflector",
                "4x #gtceu:circuits/uhv",
                "4x gtceu:crystal_matrix_huge_fluid_pipe",
                "4x gtceu:draconium_plate")
            .inputFluids(
                "gtceu:peek 1000")
            .itemOutputs(
                "2x kubejs:fusion_coil_mk2")
            .cleanroom(CleanroomType.STERILE_CLEANROOM)
            .duration(20 * 5)
            .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.assembler("fusion_casing_mk4")
            .itemInputs(
                "2x gtceu:uev_machine_casing",
                "kubejs:fusion_coil_mk2",
                "4x kubejs:uev_voltage_coil",
                "2x gtceu:uv_field_generator",
                "8x gtceu:neutron_reflector",
                "1x #gtceu:circuits/uev",
                "4x gtceu:crystal_matrix_huge_fluid_pipe",
                "12x gtceu:draconium_plate")
            .inputFluids(
                "gtceu:peek 1000")
            .itemOutputs(
                "2x kubejs:fusion_casing_mk4")
            .cleanroom(CleanroomType.STERILE_CLEANROOM)
            .duration(20 * 5)
            .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.assembler("adv_high_power_crushing_wheels")
        .itemInputs(
            "kubejs:high_power_crushing_wheels",
            "gtceu:uv_electric_motor",
            "8x gtceu:darmstadtium_plate")
        .itemOutputs(
            "kubejs:adv_high_power_crushing_wheels")
        .circuit(4)
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.assembler("chem_i")
        .itemInputs(
            "gtceu:computer_casing",
            "8x gtceu:naquadah_alloy_gear",
            "16x gtceu:trinium_ingot",
            "8x #gtceu:circuits/zpm",
            "gtceu:advanced_soc",
            "gtceu:iv_field_generator")
        .inputFluids(
            Fluid.of("gtceu:polybenzimidazole 16000"))
        .itemOutputs(
            "kubejs:chemical_tier_one")
        .duration(20 * 25)
        .EUt((GTValues.VA[GTValues.LuV]))

    event.recipes.gtceu.assembler("chem_ii")
        .itemInputs(
            "gtceu:computer_casing",
            "8x gtceu:naquadria_gear",
            "16x gtceu:europium_ingot",
            "8x #gtceu:circuits/uv",
            "gtceu:advanced_soc",
            "gtceu:zpm_field_generator")
        .inputFluids(
            Fluid.of("gtceu:polybenzimidazole 16000"))
        .itemOutputs(
            "kubejs:chemical_tier_two")
        .duration(20 * 25)
        .EUt((GTValues.VA[GTValues.ZPM]))

    event.recipes.gtceu.assembler("chem_iii")
        .itemInputs(
            "gtceu:computer_casing",
            "8x gtceu:small_darmstadtium_gear",
            "kubejs:condensed_star_matter",
            "8x #gtceu:circuits/uhv",
            "gtceu:highly_advanced_soc",
            "gtceu:zpm_field_generator",
            "16x gtceu:blacklight")
        .inputFluids(
            Fluid.of("gtceu:condensed_star_matter 16000"))
        .itemOutputs(
            "kubejs:chemical_tier_three")
        .duration(20 * 25)
        .EUt((GTValues.VA[GTValues.UV]))

    event.recipes.gtceu.assembler("chem_iv")
        .itemInputs(
            "gtceu:computer_casing",
            "8x gtceu:neutronium_gear",
            "16x kubejs:condensed_star_matter",
            "8x #gtceu:circuits/uev",
            "kubejs:highly_resonative_soc",
            "gtceu:uhv_field_generator",
            "16x kubejs:quantum_energy_capsule",
            "2x kubejs:gravitational_containment_cell")
        .inputFluids(
            Fluid.of("gtceu:condensed_star_matter 16000"))
        .itemOutputs(
            "kubejs:chemical_tier_four")
        .duration(20 * 25)
        .EUt((GTValues.VA[GTValues.UHV]))
    event.recipes.gtceu.assembler("chem_v")
        .itemInputs(
            "gtceu:computer_casing",
            "8x gtceu:cosmic_iridium_gear",
            "64x kubejs:condensed_star_matter",
            "8x #gtceu:circuits/uiv",
            "kubejs:extremely_advanced_soc",
            "gtceu:uhv_field_generator",
            "4x kubejs:draconium_heavy_plating",
            "2x kubejs:gravitational_containment_cell")
        .inputFluids(
            Fluid.of("gtceu:condensed_star_matter 16000"))
        .itemOutputs(
            "kubejs:chemical_tier_five")
        .duration(20 * 25)
        .EUt((GTValues.VA[GTValues.UEV]))

    event.recipes.gtceu.assembler("chem_vi")
        .itemInputs(
            "gtceu:computer_casing",
            "8x gtceu:pure_cosmic_matter_gear",
            "64x kubejs:reactive_chaos_pellet",
            "8x #gtceu:circuits/uxv",
            "kubejs:extremely_advanced_soc",
            "gtceu:uiv_field_generator",
            "4x kubejs:chaos_heavy_plating",
            "32x kubejs:energized_quantum_anomaly")
        .inputFluids(
            Fluid.of("gtceu:eternity 100"))
        .itemOutputs(
            "kubejs:chemical_tier_six")
        .duration(20 * 25)
        .EUt((GTValues.VA[GTValues.UIV]))

    event.recipes.gtceu.assembler("watch_of_flowing_time")
        .itemInputs(
            "minecraft:clock",
            "4x kubejs:woven_space_time",
            "3x gtceu:small_eternity_gear",
            "2x gtceu:eternity_gear",
            "gtceu:chaos_lens",
            "gtceu:pure_cosmic_matter_rod",
            "gtceu:long_pure_cosmic_matter_rod",
            "12x gtceu:exquisite_echo_shard_gem",
            "64x kubejs:dragon_processor_mainframe")
        .itemOutputs(
            "kubejs:watch_of_flowing_time")
        .duration(20 * 5)
        .EUt((GTValues.VA[GTValues.UXV]))

    event.recipes.gtceu.assembler("flux_plug")
        .itemInputs(
            "4x fluxnetworks:flux_core",
            "kubejs:gravitational_containment_cell")
        .itemOutputs(
            "4x fluxnetworks:flux_plug")
        .circuit(2)
        .duration(20 * 25)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.assembler("flux_point")
        .itemInputs(
            "64x fluxnetworks:flux_core",
            "kubejs:gravitational_containment_cell")
        .itemOutputs(
            "16x fluxnetworks:flux_point")
        .circuit(1)
        .duration(20 * 25)
        .EUt(GTValues.VA[GTValues.UV]);
        
    event.recipes.gtceu.assembler("flux_controller")
        .itemInputs(
            "4x fluxnetworks:flux_core",
            "fluxnetworks:flux_block",
            "fluxnetworks:flux_plug",
            "fluxnetworks:flux_point")
        .itemOutputs(
            "1x fluxnetworks:flux_controller")
        .duration(20 * 25)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.assembler("diamond_furnace")
        .itemInputs(
            "4x minecraft:diamond_block",
            "ironfurnaces:gold_furnace")
        .itemOutputs(
            "ironfurnaces:diamond_furnace")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.ULV]);

    event.recipes.gtceu.assembler("emerald_furnace")
        .itemInputs(
            "4x minecraft:emerald_block",
            "ironfurnaces:diamond_furnace")
        .itemOutputs(
            "ironfurnaces:emerald_furnace")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.assembler("predictionmatrix")
        .itemInputs(
            "8x gtceu:aluminium_dust",
            "8x gtceu:gallium_dust",
            "32x minecraft:glass_pane")
        .itemOutputs(
            "8x hostilenetworks:prediction_matrix")
        .duration(20 * 1)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler("simchamber")
        .itemInputs(
            "4x gtceu:steel_plate",
            "2x gtceu:cobaltite_dust",
            "3x gtceu:phenolic_printed_circuit_board",
            "#gtceu:circuits/lv")
        .itemOutputs(
            "hostilenetworks:sim_chamber")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler("simchamber_2")
        .itemInputs(
            "4x gtceu:steel_plate",
            "2x gtceu:cobaltite_dust",
            "2x gtceu:plastic_printed_circuit_board",
            "#gtceu:circuits/lv")
        .itemOutputs(
            "hostilenetworks:sim_chamber")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler("lootchamber")
        .itemInputs(
            "4x gtceu:steel_plate",
            "gtceu:gallium_arsenide_dust",
            "2x #gtceu:diodes",
            "3x #gtceu:circuits/lv")
        .itemOutputs(
            "hostilenetworks:loot_fabricator")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler("solidsteelmachinecasing")
        .itemInputs(
            "8x gtceu:steel_plate")
        .itemOutputs(
            "gtceu:steel_machine_casing")
        .circuit(9)
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler("bronzemachinecasing")
        .itemInputs(
            "8x gtceu:bronze_plate")
        .itemOutputs(
            "gtceu:bronze_machine_casing")
        .circuit(8)
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler("hss_e_casing")
        .itemInputs(
            "8x gtceu:hsse_plate")
        .itemOutputs(
            "gtceu:sturdy_machine_casing")
        .circuit(6)
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler("eternity_casing")
        .itemInputs(
            "8x gtceu:eternity_plate",
            "gtceu:eternity_frame")
        .itemOutputs(
            "kubejs:eternity_casing")
        .circuit(6)
        .duration(20 * 8500)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler("uivmachinecasing")
        .itemInputs(
            "8x gtceu:draconium_plate",
            "1x kubejs:draconium_heavy_plating")
        .itemOutputs(
            "gtceu:uiv_machine_casing")
        .circuit(8)
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler("uxvmachinecasing")
        .itemInputs(
            "8x gtceu:chaos_plate",
            "kubejs:awakened_draconium_heavy_plating")
        .itemOutputs(
            "gtceu:uxv_machine_casing")
        .circuit(8)
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler("opvmachinecasing")
        .itemInputs(
            "8x gtceu:chrono_infinity_plate",
            "kubejs:infinity_heavy_plating")
        .itemOutputs(
            "gtceu:opv_machine_casing")
        .circuit(8)
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler("dimensional_pumping_module")
        .itemInputs(
            "8x kubejs:space_time_heavy_plating",
            "gtceu:uiv_fluid_regulator")
        .itemOutputs(
            "kubejs:dimensional_pump_module")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler("trascendental_space_time_casing")
        .itemInputs(
            "16x kubejs:space_time_heavy_plating")
        .itemOutputs(
            "kubejs:trascendental_space_time_casing")
        .circuit(6)
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler("high_power_casing_plant")
        .itemInputs(
            "8x gtceu:osmiridium_plate",
            "gtceu:secure_maceration_casing")
        .itemOutputs(
            "kubejs:high_power_casing")
        .circuit(8)
        .duration(20 * 5)
        .EUt((GTValues.VA[GTValues.IV]))

    event.recipes.gtceu.assembler("high_power_crushing_wheels")
        .itemInputs(
            "8x gtceu:rhodium_plated_palladium_plate",
            "kubejs:high_power_casing",
            "gtceu:iv_electric_motor")
        .itemOutputs(
            "kubejs:high_power_crushing_wheels")
        .circuit(8)
        .duration(20 * 5)
        .EUt((GTValues.VA[GTValues.IV]))

    event.recipes.gtceu.assembler("semi_stable_casing")
        .itemInputs(
            "8x gtceu:pure_cosmic_matter_plate",
            "8x #gtceu:circuits/uev",
            "2x #gtceu:circuits/uiv")
        .itemOutputs(
            "kubejs:semi_stable_casing")
        .circuit(8)
        .duration(20 * 5)
        .EUt((GTValues.VA[GTValues.UIV]))

    event.recipes.gtceu.assembler("cryogenic_casing")
        .itemInputs(
            "8x gtceu:cosmic_iridium_plate",
            "8x #gtceu:circuits/uv",
            "2x #gtceu:circuits/uhv")
        .itemOutputs(
            "kubejs:cryogenic_casing")
        .circuit(8)
        .duration(20 * 5)
        .EUt((GTValues.VA[GTValues.UEV]))

    event.recipes.gtceu.assembler("kevlar_casing")
        .itemInputs(
            "8x gtceu:kevlar_plate",
            "8x #gtceu:circuits/uhv",
            "2x #gtceu:circuits/uev")
        .itemOutputs(
            "kubejs:kevlar_casing")
        .circuit(8)
        .duration(20 * 5)
        .EUt((GTValues.VA[GTValues.UEV]))

    event.recipes.gtceu.assembler("intake_kevlar_hatch")
        .itemInputs(
            "8x gtceu:kevlar_plate",
            "kubejs:ultimate_engine_intake_casing",
            "gtceu:uiv_electric_motor")
        .itemOutputs(
            "kubejs:advanced_air_intake_hatch")
        .circuit(8)
        .duration(20 * 5)
        .EUt((GTValues.VA[GTValues.UEV]))

    event.recipes.gtceu.assembler("master")
        .itemInputs(
            "ironchest:gold_chest",
            "4x #gtceu:circuits/lv",
            "gtceu:lv_machine_hull")
        .itemOutputs(
            "storagenetwork:master")
        .duration(20 * 50)
        .EUt(GTValues.VA[GTValues.LV]); 

    event.recipes.gtceu.assembler("request")
        .itemInputs(
            "8x minecraft:glass",
            "gtceu:lv_machine_hull",
            "4x #gtceu:circuits/lv",
            "avaritia:double_compressed_crafting_table")
        .itemOutputs(
            "storagenetwork:request")
        .duration(20 * 50)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler("upgradebase")
        .itemInputs(
            "16x minecraft:leather",
            "64x minecraft:string",
            "minecraft:iron_block")
        .itemOutputs(
            "sophisticatedbackpacks:upgrade_base")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler("enderchest")
        .itemInputs(
            "gtceu:hv_super_chest",
            "minecraft:ender_eye")
        .inputFluids(
            "gtceu:ender_air 5000")
        .itemOutputs(
            "enderchests:ender_chest")
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler("endertank")
        .itemInputs(
            "gtceu:lv_super_tank",
            "minecraft:ender_eye")
        .inputFluids(
            "gtceu:ender_air 5000")
        .itemOutputs(
            "endertanks:ender_tank")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler("pattern")
        .itemInputs(
            "8x solarflux:mirror",
            "gtceu:aluminium_ingot",
            "ae2:calculation_processor")
        .inputFluids(
            "gtceu:lubricant 63")
        .itemOutputs(
            "8x ae2:blank_pattern")
        .duration(20 * 3)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler("advancedtable")
        .itemInputs(
            "avaritia:double_compressed_crafting_table",
            "gtceu:luv_machine_casing",
            "8x extendedcrafting:luminessence")
        .inputFluids(
            Fluid.of("gtceu:polybenzimidazole 266"))
        .itemOutputs(
            "extendedcrafting:advanced_table")
        .duration(20 * 25)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.assembler("mars_globe")
        .itemInputs(
            "ad_astra:earth_globe",
            "ad_astra:ostrum_block",
            "16x gtceu:cobalt_brass_ingot")
        .inputFluids(
            Fluid.of("gtceu:polybenzimidazole 266"))
        .itemOutputs(
            "ad_astra:mars_globe")
        .duration(20 * 25)
        .EUt((GTValues.VA[GTValues.LuV]))

    event.recipes.gtceu.assembler("atomic_casing")
        .itemInputs(
            "6x gtceu:atomic_alloy_frame",
            "4x gtceu:atomic_alloy_foil")
        .inputFluids(
            "gtceu:polybenzimidazole 63")
        .itemOutputs(
            "2x gtceu:atomic_casing")
        .circuit(24)
        .duration(20 * 2)
        .EUt((GTValues.VA[GTValues.UV]))

    event.recipes.gtceu.assembler("neutronium_casing")
        .itemInputs(
            "6x gtceu:neutronium_frame",
            "4x gtceu:neutronium_foil")
        .inputFluids(
            "gtceu:polybenzimidazole 63")
        .itemOutputs(
            "2x kubejs:neutronium_casing")
        .circuit(24)
        .duration(20 * 2)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.assembler("uhv_voltage_coil")
        .itemInputs(
            "gtceu:magnetic_samarium_rod",
            "16x gtceu:fine_neutronium_wire")
        .itemOutputs(
            "kubejs:uhv_voltage_coil")
        .circuit(1)
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.assembler("uev_voltage_coil")
        .itemInputs(
            "gtceu:magnetic_samarium_rod",
            "16x gtceu:fine_draconium_wire")
        .itemOutputs(
            "kubejs:uev_voltage_coil")
        .circuit(1)
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.assembler("kaemite_casing")
        .itemInputs(
            "6x gtceu:kaemite_frame",
            "4x gtceu:kaemite_foil")
        .inputFluids(
            "gtceu:polybenzimidazole 63")
        .itemOutputs(
            "2x kubejs:kaemite_casing")
        .circuit(24)
        .duration(20 * 2)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.assembler("uevcasing")
        .itemInputs(
            "8x gtceu:resonant_essence_plate")
        .itemOutputs(
            "gtceu:uev_machine_casing")
        .circuit(8)
        .duration(20 * 2.5)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler("sterile_cleaning_maintenance_hatch")
        .itemInputs(
            "gtceu:cleaning_maintenance_hatch")
        .inputFluids(
            Fluid.of("gtceu:purified_biological_vegtable_goop", 2500))
        .itemOutputs(
            "gtmutils:sterile_cleaning_maintenance_hatch")
        .circuit(9)
        .duration(20 * 2.5)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler("blazing_cleaning_maintenance_hatch")
        .itemInputs(
            "gtmutils:sterile_cleaning_maintenance_hatch",
            "4x gtceu:uiv_robot_arm",
            "2x gtceu:uiv_electric_pump",
            "16x gtceu:pure_cosmic_matter_spring")
        .inputFluids(
            "gtceu:blaze 3500")
        .itemOutputs(
            "phoenix_gregic_additons:blazing_cleaning_maintenance_hatch")
        .duration(20 * 60)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.assembler("draconium_hypoxyloninfused_antimatter_casing")
        .itemInputs(
            "gtceu:atomic_casing",
            "4x gtceu:dense_draconium_plate",
            "4x gtceu:dense_hypoxylon_plate")
        .inputFluids(
            "gtceu:antimatter 10000")
        .itemOutputs(
            "phoenix_gregic_additons:space_time_cooled_eternity_casing")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler("akashic_computation_casing")
        .itemInputs(
            "phoenix_gregic_additons:space_time_cooled_eternity_casing",
            "9x gtceu:dense_draconium_plate",
            "16x gtceu:hypoxylon_foil")
        .inputFluids(
            "gtceu:antimatter 10000")
        .itemOutputs(
            "phoenix_gregic_additons:akashic_zeronium_casing")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler("perfected_logic_casing")
        .itemInputs(
            "8x #gtceu:circuits/uev",
            "phoenix_gregic_additons:akashic_zeronium_casing")
        .inputFluids(
            "gtceu:antimatter 10000")
        .itemOutputs(
            "phoenix_gregic_additons:perfected_logic")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler("computation_coil")
        .itemInputs(
            "kubejs:resonant_essence_coil_block",
            "phoenix_gregic_additons:space_time_cooled_eternity_casing")
        .inputFluids(
            "gtceu:antimatter 2500")
        .itemOutputs(
            "phoenix_gregic_additons:akashic_coil_block")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler("phoenix_computer_casing")
        .itemInputs(
            "gtceu:computer_casing")
        .inputFluids(
            "gtceu:antimatter 2500")
        .itemOutputs(
            "phoenix_gregic_additons:phoenix_computer_casing")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler("advanced_phoenix_computer_casing")
        .itemInputs(
            "gtceu:advanced_computer_casing")
        .inputFluids(
            "gtceu:antimatter 2500")
        .itemOutputs(
            "phoenix_gregic_additons:phoenix_advanced_computer_casing")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler("phoenix_computer_heat_vent")
        .itemInputs(
            "gtceu:computer_heat_vent")
        .inputFluids(
            "gtceu:antimatter 2500")
        .itemOutputs(
            "phoenix_gregic_additons:phoenix_computer_heat_vent")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler("phoenix_computation_component")
        .itemInputs(
            "gtceu:hpca_advanced_computation_component",
            "4x #gtceu:circuits/uhv",
            "gtceu:uv_field_generator")
        .inputFluids(
            "gtceu:pcb_coolant 10000")
        .itemOutputs(
            "phoenix_gregic_additons:phoenix_computation_component")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(20 * 60)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler("advanced_phoenix_computation_component")
        .itemInputs(
            "phoenix_gregic_additons:phoenix_computation_component",
            "4x #gtceu:circuits/uev",
            "gtceu:uhv_field_generator")
        .inputFluids(
            "gtceu:pcb_coolant 10000")
        .itemOutputs(
            "phoenix_gregic_additons:advanced_phoenix_computation_component")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(20 * 60)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler("draconium_assembly_line")
        .itemInputs(
            "gtceu:dense_draconium_plate",
            "#gtceu:circuits/uiv",
            "gtceu:dense_draconium_plate",
            "gtceu:circuit_assembly_line",
            "gtceu:assembly_line",
            "gtceu:component_assembly_line",
            "gtceu:dense_draconium_plate",
            "#gtceu:circuits/uiv",
            "gtceu:dense_draconium_plate")
        .inputFluids(
            "gtceu:draconium 9216")
        .itemOutputs(
            "gtceu:draconium_assembly_line")
        .duration(20 * 1200)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.assembler("eternity_assembly_control_casing")
        .itemInputs(
            "gtceu:eternity_plate",
            "gtceu:eternity_plate",
            "gtceu:eternity_plate",
            "gtceu:eternity_plate",
            "64x gtceu:assembly_line_unit",
            "gtceu:eternity_plate",
            "gtceu:eternity_plate",
            "gtceu:eternity_plate",
            "gtceu:eternity_plate")
        .inputFluids(
            "gtceu:eternity 144")
        .itemOutputs(
            "kubejs:eternity_assembly_control_casing")
        .duration(20 * 60)
        .EUt(GTValues.VA[GTValues.UIV])	

    event.recipes.gtceu.assembler("draconic_assembly_control_casing")
        .itemInputs(
            "gtceu:dense_draconium_plate",
            "gtceu:dense_draconium_plate",
            "gtceu:dense_draconium_plate",
            "gtceu:dense_draconium_plate",
            "64x gtceu:assembly_line_unit",
            "gtceu:dense_draconium_plate",
            "gtceu:dense_draconium_plate",
            "gtceu:dense_draconium_plate",
            "gtceu:dense_draconium_plate")
        .inputFluids(
            "gtceu:draconium 9216")
        .itemOutputs(
            "kubejs:draconic_assembly_control_casing")
        .duration(20 * 60)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.assembler("draconic_assembly_line_casing")
        .itemInputs(
            "gtceu:dense_draconium_plate",
            "gtceu:dense_draconium_plate",
            "gtceu:dense_draconium_plate",
            "gtceu:dense_draconium_plate",
            "64x gtceu:assembly_line_casing",
            "gtceu:dense_draconium_plate",
            "gtceu:dense_draconium_plate",
            "gtceu:dense_draconium_plate",
            "gtceu:dense_draconium_plate")
        .inputFluids(
            "gtceu:draconium 9216")
        .itemOutputs(
            "kubejs:draconic_assembly_line_casing")
        .duration(20 * 60)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.assembler("draconium_machine_casing")
        .itemInputs(
            "6x gtceu:draconium_plate",
            "gtceu:draconium_frame")
        .itemOutputs(
            "kubejs:draconium_machine_casing")
        .circuit(6)
        .duration(20 * 60)
        .EUt(GTValues.VA[GTValues.UIV])	

    event.recipes.gtceu.assembler("draconium_assembly_line_grating")
        .itemInputs(
            "gtceu:dense_draconium_plate",
            "gtceu:dense_draconium_plate",
            "gtceu:dense_draconium_plate",
            "gtceu:dense_draconium_plate",
            "64x gtceu:assembly_line_grating",
            "gtceu:dense_draconium_plate",
            "gtceu:dense_draconium_plate",
            "gtceu:dense_draconium_plate",
            "gtceu:dense_draconium_plate")
        .inputFluids(
            "gtceu:draconium 9216")
        .itemOutputs(
            "kubejs:draconic_assembly_line_grating")
        .duration(20 * 60)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.assembler("covalent_conducting_casing")
        .itemInputs(
            "gtceu:pure_cosmic_matter_plate",
            "gtceu:pure_cosmic_matter_plate",
            "gtceu:pure_cosmic_matter_plate",
            "gtceu:pure_cosmic_matter_plate",
            "64x gtceu:nonconducting_casing",
            "gtceu:pure_cosmic_matter_plate",
            "gtceu:pure_cosmic_matter_plate",
            "gtceu:pure_cosmic_matter_plate",
            "gtceu:pure_cosmic_matter_plate")
        .inputFluids(
            "gtceu:eternity 100")
        .itemOutputs(
            "kubejs:covalent_conducting_casing")
        .duration(20 * 45)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembler("refracting_hastelloy_c276_casing")
        .itemInputs(
            "16x gtceu:tritanium_coil_block",
            "16x gtceu:tritanium_coil_block",
            "16x gtceu:tritanium_coil_block",
            "16x gtceu:tritanium_coil_block",
            "64x gtceu:hastelloy_c_276_block",
            "16x gtceu:tritanium_coil_block",
            "16x gtceu:tritanium_coil_block",
            "16x gtceu:tritanium_coil_block",
            "16x gtceu:tritanium_coil_block")
        .inputFluids(
            "gtceu:hastelloy_c_276 9216")
        .itemOutputs(
            "kubejs:refracting_hastelloy_c276_casing")
        .duration(20 * 45)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembler("temperature_proof_potin_casing")
        .itemInputs(
            "64x gtceu:double_rose_gold_plate",
            "64x gtceu:double_rose_gold_plate",
            "64x gtceu:double_rose_gold_plate",
            "64x gtceu:double_rose_gold_plate",
            "64x gtceu:potin_block",
            "64x gtceu:double_rose_gold_plate",
            "64x gtceu:double_rose_gold_plate",
            "64x gtceu:double_rose_gold_plate",
            "64x gtceu:double_rose_gold_plate")
        .inputFluids(
            "gtceu:potin 92160")
        .itemOutputs(
            "2x kubejs:temperature_proof_potin_casing")
        .duration(20 * 45)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembler("reinforced_base_casing")
        .itemInputs(
            "gtceu:dense_cosmic_neutronium_plate",
            "gtceu:pure_cosmic_matter_plate",
            "gtceu:dense_cosmic_neutronium_plate",
            "gtceu:pure_cosmic_matter_plate",
            "kubejs:highly_reinforced_radioactive_casing",
            "gtceu:pure_cosmic_matter_plate",
            "gtceu:dense_cosmic_neutronium_plate",
            "gtceu:pure_cosmic_matter_plate",
            "gtceu:dense_cosmic_neutronium_plate")
        .inputFluids(
            "gtceu:concrete 1000000")
        .itemOutputs(
            "kubejs:reinforced_base_casing")
        .duration(20 * 45)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembler("supercritical_cryo_cooled_casing")
        .itemInputs(
            "gtceu:double_blue_steel_plate",
            "gtceu:pure_cosmic_matter_plate",
            "gtceu:double_blue_steel_plate",
            "gtceu:pure_cosmic_matter_plate",
            "kubejs:cryogenic_casing",
            "gtceu:pure_cosmic_matter_plate",
            "gtceu:double_blue_steel_plate",
            "gtceu:pure_cosmic_matter_plate",
            "gtceu:double_blue_steel_plate")
        .inputFluids(
            "gtceu:cryogenic_neutron_flow 10000")
        .itemOutputs(
            "kubejs:supercritical_cryo_cooled_casing")
        .duration(20 * 45)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembler("blazing_filter_casing")
        .itemInputs(
            "gtceu:uiv_electric_motor",
            "gtceu:uiv_emitter",
            "4x gtceu:sterilizing_filter_casing",
        	"64x minecraft:blaze_rod")
        .inputFluids(
            "gtceu:antimatter 200")
        .itemOutputs(
            "phoenix_gregic_additons:blazing_filter_casing")
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.assembler("uiv_machine_hull")
        .itemInputs(
            "gtceu:uiv_machine_casing",
            "2x gtceu:awakened_draconium_single_cable")
        .inputFluids(
            "gtceu:hypoxylon 288")
        .itemOutputs(
            "gtceu:uiv_machine_hull")
        .duration(20 * 2.5)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler("uxv_machine_hull")
        .itemInputs(
            "gtceu:uxv_machine_casing",
            "2x gtceu:chaos_single_wire")
        .inputFluids(
            "gtceu:meta_stable_molten_kevlar 288")
        .itemOutputs(
            "gtceu:uxv_machine_hull")
        .duration(20 * 2.5)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler("opv_machine_hull")
        .itemInputs(
            "gtceu:opv_machine_casing",
            "2x gtceu:chaos_single_wire")
        .inputFluids(
            "gtceu:meta_stable_molten_zylon 288")
        .itemOutputs(
            "gtceu:opv_machine_hull")
        .duration(20 * 2.5)
        .EUt(GTValues.VA[GTValues.LV])          

    event.recipes.gtceu.assembler("quantum_field_stabilization_casing")
        .itemInputs(
            "gtceu:double_solar_radiation_alloy_plate",
            "gtceu:pure_cosmic_matter_plate",
            "gtceu:double_solar_radiation_alloy_plate",
            "gtceu:pure_cosmic_matter_plate",
            "soggtaddon:ultra_dense_collider_casing",
            "gtceu:pure_cosmic_matter_plate",
            "gtceu:double_solar_radiation_alloy_plate",
            "gtceu:pure_cosmic_matter_plate",
            "gtceu:double_solar_radiation_alloy_plate")
        .itemOutputs(
            "soggtaddon:quantum_field_stabilization_casing")
        .duration(20 * 2)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembler("ultra_dense_collider_casing")
        .itemInputs(
            "gtceu:double_solar_radiation_alloy_plate",
            "gtceu:pure_cosmic_matter_plate",
            "gtceu:double_solar_radiation_alloy_plate",
            "gtceu:pure_cosmic_matter_plate",
            "kubejs:highly_reinforced_radioactive_casing",
            "gtceu:pure_cosmic_matter_plate",
            "gtceu:double_solar_radiation_alloy_plate",
            "gtceu:pure_cosmic_matter_plate",
            "gtceu:double_solar_radiation_alloy_plate")
        .itemOutputs(
            "soggtaddon:ultra_dense_collider_casing")
        .duration(20 * 2)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembler("high_energy_collider_casing")
        .itemInputs(
            "gtceu:double_solar_radiation_alloy_plate",
            "gtceu:double_solar_radiation_alloy_plate",
            "gtceu:double_solar_radiation_alloy_plate",
            "gtceu:double_solar_radiation_alloy_plate",
            "soggtaddon:quantum_field_stabilization_casing",
            "gtceu:double_solar_radiation_alloy_plate",
            "gtceu:double_solar_radiation_alloy_plate",
            "gtceu:double_solar_radiation_alloy_plate",
            "gtceu:double_solar_radiation_alloy_plate")
        .itemOutputs(
            "soggtaddon:high_energy_collider_casing")
        .duration(20 * 2)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembler("uev_machine_hull")
        .itemInputs(
            "gtceu:uev_machine_casing",
            "2x gtceu:draconium_single_cable")
        .inputFluids(
            "gtceu:peek 288")
        .itemOutputs(
            "gtceu:uev_machine_hull")
        .duration(20 * 2.5)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler("orbital_bore")
        .itemInputs(
            "64x kubejs:orbital_solar_casing",
            "32x gtceu:quantum_space_projector",
            "64x kubejs:orbital_solar_casing",
            "64x kubejs:pumping_projector_module",
            "16x #gtceu:circuits/uiv",
            "64x kubejs:pumping_projector_module",
            "64x kubejs:orbital_solar_casing",
            "32x gtceu:quantum_space_projector",
            "64x kubejs:orbital_solar_casing")
        .inputFluids(
            "gtceu:antimatter 100000")
        .itemOutputs(
            "gtceu:orbital_bore")
        .duration(20 * 960)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler("orbital_space_containment_casing")
        .itemInputs(
            "gtceu:dense_cosmic_neutronium_plate",
            "gtceu:dense_solar_eclipse_alloy_plate",
            "gtceu:dense_cosmic_neutronium_plate",
            "gtceu:dense_solar_eclipse_alloy_plate",
            "gtceu:solar_eclipse_alloy_frame",
            "gtceu:dense_solar_eclipse_alloy_plate",
            "gtceu:dense_cosmic_neutronium_plate",
            "gtceu:dense_solar_eclipse_alloy_plate",
            "gtceu:dense_cosmic_neutronium_plate")
        .inputFluids(
            "gtceu:antimatter 1440")
        .itemOutputs(
            "kubejs:orbital_space_containment_casing")
        .duration(20 * 200)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler("orbital_solar_casing")
        .itemInputs(
            "gtceu:dense_solar_eclipse_alloy_plate",
            "gtceu:awakened_draconium_plate",
            "gtceu:dense_solar_eclipse_alloy_plate",
            "gtceu:awakened_draconium_plate",
            "kubejs:orbital_space_containment_casing",
            "gtceu:awakened_draconium_plate",
            "gtceu:dense_solar_eclipse_alloy_plate",
            "gtceu:awakened_draconium_plate",
            "gtceu:dense_solar_eclipse_alloy_plate")
        .inputFluids(
            "gtceu:awakened_draconium 288")
        .itemOutputs(
            "kubejs:orbital_solar_casing")
        .duration(20 * 600)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler("orbital_pipe_casing")
        .itemInputs(
            "2x gtceu:dense_cosmic_neutronium_plate",
            "64x kubejs:machine_casing_pipe_peek",
            "2x gtceu:dense_cosmic_neutronium_plate",
            "64x gtceu:ptfe_pipe_casing",
            "avaritia:eternal_singularity",
            "64x gtceu:ptfe_pipe_casing",
            "2x gtceu:dense_cosmic_neutronium_plate",
            "64x kubejs:machine_casing_pipe_peek",
            "2x gtceu:dense_cosmic_neutronium_plate")
        .inputFluids(
            "gtceu:antimatter 1440")
        .itemOutputs(
            "kubejs:orbital_pipe_casing")
        .duration(20 * 1000)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler("space_resistant_orbital_casing")
        .itemInputs(
            "64x gtceu:dense_naquadah_alloy_plate",
            "1x gtceu:dense_cosmic_neutronium_plate",
            "64x gtceu:dense_naquadah_alloy_plate",
            "1x kubejs:cosmic_neutronium_heavy_plating",
            "8x kubejs:quantum_casing",
            "1x kubejs:cosmic_neutronium_heavy_plating",
            "64x gtceu:dense_naquadah_alloy_plate",
            "1x gtceu:dense_cosmic_neutronium_plate",
            "64x gtceu:dense_naquadah_alloy_plate")
        .inputFluids(
            "gtceu:antimatter 1440")
        .itemOutputs(
            "kubejs:space_resistant_orbital_casing")
        .duration(20 * 50)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler("ultra_reflective_laser_cooling_casing")
        .itemInputs(
            "2x gtceu:laser_safe_engraving_casing",
            "12x kubejs:multispectral_monochrome_mirror")
        .inputFluids(
            "gtceu:meta_stable_molten_zylon 576")
        .itemOutputs(
            "2x kubejs:ultra_reflective_laser_cooling_casing")
        .circuit(24)
        .cleanroom(BlazingCleanroom.BLAZING_CLEANROOM)
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembler("multispectral_monochrome_mirror")
        .itemInputs(
            "2x kubejs:ultra_reflective_sapphire_wafer",
            "4x gtceu:chronon_dust")
        .inputFluids(
            "gtceu:tetraethyl_orthosilicate 1000")
        .itemOutputs(
            "4x kubejs:multispectral_monochrome_mirror")
        .cleanroom(BlazingCleanroom.BLAZING_CLEANROOM)
        .duration(20 * 30)
        .EUt(GTValues.VA[GTValues.UXV])

	event.recipes.gtceu.assembler("atomic_alloy_plated_glass_package")
		.itemInputs(
            "2x gtceu:fusion_glass",
            "4x gtceu:atomic_alloy_plate")
  		.inputFluids(
            "gtceu:plasticizer 576")
  		.itemOutputs(
            "2x kubejs:atomic_alloy_plated_glass")
		.duration(20 * 10)
  		.EUt((GTValues.VA[GTValues.UV]))

	event.recipes.gtceu.assembler("peek_reinforced_glass_package")
		.itemInputs(
            "2x gtceu:laminated_glass",
            "6x gtceu:peek_plate")
  		.inputFluids(
            "gtceu:plasticizer 576")
  		.itemOutputs(
            "2x kubejs:peek_reinforced_glass")
		.duration(20 * 10)
  		.EUt((GTValues.VA[GTValues.UHV]))

	event.recipes.gtceu.assembler("machine_casing_inert_peek")
		.itemInputs(
            "gtceu:inert_machine_casing")
  		.inputFluids(
            "gtceu:peek 216")
  		.itemOutputs(
            "kubejs:machine_casing_inert_peek")
		.circuit(6)
		.duration(20 * 5)
  		.EUt((GTValues.VA[GTValues.LV]))
	
	event.recipes.gtceu.assembler("peek_plated_heat_resisted_casing")
		.itemInputs(
            "4x gtceu:titanium_carbide_plate",
            "2x gtceu:kaemite_plate",
            "gtceu:peek_frame")
  		.inputFluids(
            "gtceu:peek 216")
  		.itemOutputs(
            "2x kubejs:peek_plated_heat_resisted_casing")
		.circuit(6)
		.duration(20 * 5)
  		.EUt((GTValues.VA[GTValues.LV]))

	event.recipes.gtceu.assembler("ultimate_engine_intake_casing")
		.itemInputs(
            "4x gtceu:neutronium_normal_fluid_pipe",
            "1x kubejs:neutronium_casing",
            "16x gtceu:neutronium_turbine_blade",
            "2x gtceu:neutronium_gear")
  		.itemOutputs(
            "2x kubejs:ultimate_engine_intake_casing")
		.duration(20 * 5)
  		.EUt((GTValues.VA[GTValues.LV]))

	event.recipes.gtceu.assembler("glass_lamination_package")
		.itemInputs(
            "2x gtceu:tempered_glass","4x gtceu:polyvinyl_butyral_foil")
  		.inputFluids(
            "gtceu:plasticizer 144")
  		.itemOutputs(
            "1x gtceu:laminated_glass")
		.duration(20 * 10)
  		.EUt((GTValues.VA[GTValues.HV]))

	event.recipes.gtceu.assembler("filter_frame")
		.itemInputs(
            "4x gtceu:xlpe_rod")
		.itemOutputs(
            "2x kubejs:filter_frame")
		.circuit(2)
		.duration(20 * 10)
		.EUt((GTValues.VA[GTValues.HV]))

	event.recipes.gtceu.assembler("carbon_nanotubes_filter")
		.itemInputs(
            "kubejs:filter_frame",
            "16x gtceu:fine_carbon_nanotubes_wire")
		.itemOutputs(
            "kubejs:carbon_nanotubes_filter")
		.circuit(1)
		.duration(20 * 10)
		.EUt((GTValues.VA[GTValues.HV]))

    event.recipes.gtceu.assembler("solar_alloy_forge_controller")
        .itemInputs(
            "4x kubejs:orbital_solar_casing",
            "64x gtceu:alloy_blast_smelter",
            "4x kubejs:orbital_solar_casing",
            "64x gtceu:alloy_blast_smelter",
            "4x #gtceu:circuits/uiv",
            "64x gtceu:alloy_blast_smelter",
            "4x kubejs:orbital_solar_casing",
            "64x gtceu:alloy_blast_smelter",
            "4x kubejs:orbital_solar_casing")
        .inputFluids(
            "gtceu:antimatter 20000")
        .itemOutputs(
            "gtceu:solar_alloy_forge")
        .duration(20 * 240)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler("photovoltaic_1")
        .itemInputs(
            "8x solarflux:mirror")
        .inputFluids(
            "gtceu:polyethylene 63")
        .itemOutputs(
            "2x solarflux:photovoltaic_cell_1")
        .circuit(24)
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.assembler("photovoltaic_2")
        .itemInputs(
            "4x solarflux:photovoltaic_cell_1")
        .inputFluids(
            "gtceu:polytetrafluoroethylene 63")
        .itemOutputs(
            "2x solarflux:photovoltaic_cell_2")
        .circuit(24)
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.assembler("photovoltaic_3")
        .itemInputs(
            "4x solarflux:photovoltaic_cell_2")
        .inputFluids(
            "gtceu:polybenzimidazole 63")
        .itemOutputs(
            "2x solarflux:photovoltaic_cell_3")
        .circuit(24)
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.assembler("conductive_casing")
        .itemInputs(
            "8x gtceu:californite_plate",
            "2x kubejs:highly_superconducting_coil_block",
            "2x gtceu:uv_field_generator",
            "8x gtceu:neutron_reflector",
            "4x #gtceu:circuits/uhv",
            "8x gtceu:plascrete",
            "4x gtceu:draconium_plate")
        .inputFluids(
            "gtceu:polybenzimidazole 1000")
        .itemOutputs(
            "2x kubejs:superconductive_casing")
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.UIV]);
    
    event.recipes.gtceu.assembler("conductive_glass")
        .itemInputs(
            "8x gtceu:californite_plate",
            "2x kubejs:highly_superconducting_coil_block",
            "2x gtceu:uv_field_generator",
            "8x gtceu:neutron_reflector",
            "4x #gtceu:circuits/uhv",
            "4x gtceu:cleanroom_glass",
            "4x gtceu:draconium_plate")
        .inputFluids(
            "gtceu:polybenzimidazole 1000")
        .itemOutputs(
            "2x kubejs:conductive_glass")
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.assembler("complexinductor")
        .itemInputs(
            "4x gtceu:pure_cosmic_matter_ring",
            "64x gtceu:fine_awakened_draconium_wire")
        .inputFluids(
            "gtceu:astral_flux_plasma 144")
        .itemOutputs(
            "128x kubejs:complex_smd_inductor")
        .duration(20 * 8)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.assembler("complexdiode")
        .itemInputs(
            "4x gtceu:pure_cosmic_matter_foil",
            "64x gtceu:fine_awakened_draconium_wire")
        .inputFluids(
            "gtceu:astral_flux_plasma 144")
        .itemOutputs(
            "128x kubejs:complex_smd_diode")
        .duration(20 * 8)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.assembler("complextransistor")
        .itemInputs(
            "8x gtceu:pure_cosmic_matter_bolt",
            "64x gtceu:fine_awakened_draconium_wire")
        .inputFluids(
            "gtceu:astral_flux_plasma 144")
        .itemOutputs(
            "128x kubejs:complex_smd_transistor")
        .duration(20 * 8)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.assembler("complexcapacitor")
        .itemInputs(
            "2x gtceu:pure_cosmic_matter_rod",
            "64x gtceu:fine_awakened_draconium_wire")
        .inputFluids(
            "gtceu:astral_flux_plasma 144")
        .itemOutputs(
            "128x kubejs:complex_smd_capacitor")
        .duration(20 * 8)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.assembler("complexresistor")
        .itemInputs(
            "gtceu:pure_cosmic_matter_plate",
            "64x gtceu:fine_awakened_draconium_wire")
        .inputFluids(
            "gtceu:astral_flux_plasma 144")
        .itemOutputs(
            "128x kubejs:complex_smd_resistor")
        .duration(20 * 8)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.assembler("tesla_coil_mk1")
        .itemInputs(
            "1x gtceu:quantum_star",
            "4x gtceu:osmiridium_rotor",
            "24x #gtceu:inductors")
        .itemOutputs(
            "8x kubejs:tesla_coil_mk1")
        .duration(20 * 75)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.assembler("tesla_coil_mk2")
        .itemInputs(
            "8x gtceu:quantum_star",
            "4x gtceu:naquadah_alloy_rotor",
            "24x #gtceu:inductors")
        .inputFluids(
            "gtceu:naquadria 72")
        .itemOutputs(
            "8x kubejs:tesla_coil_mk2")
        .duration(20 * 75)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.assembler("tesla_coil_mk3")
        .itemInputs(
            "8x gtceu:quantum_star",
            "gtceu:teslarium_gear",
            "24x #gtceu:inductors")
        .inputFluids(
            "gtceu:naquadria 72")
        .itemOutputs(
            "1x kubejs:tesla_coil_mk3")
        .duration(20 * 75)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.assembler("naquadria_turbine_casing")
        .itemInputs(
            "gtceu:tungstensteel_turbine_casing",
            "6x gtceu:naquadria_plate")
        .itemOutputs(
            "kubejs:naquadria_turbine_casing")
        .circuit(6)
        .duration(20 * 2.5)
        .EUt(GTValues.VA[GTValues.LV]);
})