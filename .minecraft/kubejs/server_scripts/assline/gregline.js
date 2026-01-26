
ServerEvents.recipes(event => {

    event.recipes.gtceu.assembly_line('naquadahmk1')
        .itemInputs('3x gtceu:zpm_field_generator', '8x gtceu:resonant_naquadah_spring', '64x gtceu:nether_star_plate', '#gtceu:circuits/uv', '2x gtceu:resonant_naquadah_hex_wire', 'gtceu:luv_fusion_reactor')
        .itemOutputs('gtceu:naquadahreactormk1')
        .inputFluids(
          Fluid.of('gtceu:star_matter', 5950),
          Fluid.of('gtceu:silicone_rubber', 1152),
          Fluid.of('gtceu:styrene_butadiene_rubber', 1152),
          Fluid.of('gtceu:soldering_alloy', 1152),
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:naquadah_boule')).EUt(GTValues.VA[GTValues.UV]).CWUt(16)) // 
        .duration(3000)
        .EUt(GTValues.VA[GTValues.UV])

        	event.recipes.gtceu.assembly_line('extremecrackingunit')
        .itemInputs('16x gtceu:zpm_electric_pump', '32x gtceu:cracker', '32x gtceu:cracker', '4x gtceu:zpm_fusion_reactor', '16x #gtceu:circuits/uv', '32x gtceu:superconducting_coil')
        .itemOutputs('gtceu:extreme_cracking_unit')
        .inputFluids(
          Fluid.of('gtceu:star_matter', 5950),
          Fluid.of('gtceu:silicone_rubber', 1152),
          Fluid.of('gtceu:soldering_alloy', 1152),
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:cracker')).EUt(GTValues.VA[GTValues.UV]).CWUt(32)) // 
        .duration(3000)
        .EUt(GTValues.VA[GTValues.UV])
	event.recipes.gtceu.assembly_line('naquadahmk2')
        .itemInputs('3x gtceu:uhv_field_generator', '16x kubejs:uhv_voltage_coil', '7x gtceu:dense_crystal_matrix_plate', '7x gtceu:dense_crystal_matrix_plate','4x #gtceu:circuits/uev', '16x gtceu:resonant_essence_hex_wire', '4x gtceu:uv_fusion_reactor')
        .itemOutputs('gtceu:naquadahreactormk2')
        .inputFluids(
          Fluid.of('gtceu:naquadria_plasma_mk2_plasma', 20000),
          Fluid.of('gtceu:silicone_rubber', 4808),
          Fluid.of('gtceu:hypoxylon', 3500),
          Fluid.of('gtceu:soldering_alloy', 4808),
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:naquadahreactormk1')).EUt(GTValues.VA[GTValues.UEV]).CWUt(160)) // 
        .duration(3000)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembly_line('ae2energy')
        .itemInputs('gtceu:uv_machine_hull', '64x gtceu:advanced_computer_casing', '64x gtceu:computation_receiver_hatch', '64x gtceu:advanced_computer_casing', '64x gtceu:neutron_reflector', '32x gtceu:double_tritanium_plate', '64x gtceu:zpm_parallel_hatch', 'megacells:mega_energy_cell', 'megacells:cell_component_256m')
        .itemOutputs('ae2:creative_energy_cell')
        .inputFluids(
          Fluid.of('gtceu:star_matter', 5950),
          Fluid.of('gtceu:silicone_rubber', 1152),
          Fluid.of('gtceu:styrene_butadiene_rubber', 1152),
          Fluid.of('gtceu:resonant_naquadah', 10152),
        )
        .stationResearch(b => b.researchStack(Item.of('megacells:cell_component_256m')).EUt(GTValues.VA[GTValues.UV]).CWUt(140)) // 
        .duration(30000)
        .EUt(GTValues.VA[GTValues.UV])
    event.recipes.gtceu.assembly_line('uhvmainframe')
        .itemInputs('32x gtceu:advanced_smd_resistor', '8x gtceu:europium_plate', '32x gtceu:advanced_smd_capacitor', '32x gtceu:advanced_smd_transistor', '2x gtceu:highly_advanced_soc', '2x gtceu:tritanium_frame', '2x gtceu:wetware_processor_computer', '32x gtceu:advanced_smd_inductor', 'gtceu:enriched_naquadah_trinium_europium_duranide_double_wire', '32x gtceu:advanced_smd_diode', '32x gtceu:ram_chip', '64x gtceu:polybenzimidazole_foil')
        .itemOutputs('gtceu:wetware_processor_mainframe')
        .inputFluids(
          Fluid.of('gtceu:condensed_star_matter', 5950),
          Fluid.of('gtceu:soldering_alloy', 1152),
          Fluid.of('gtceu:polybenzimidazole', 1152),
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:wetware_processor_computer')).EUt(GTValues.VA[GTValues.UV]).CWUt(96)) // 
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UV])
event.recipes.gtceu.assembly_line('mattercondenser')
.itemInputs('ae2:controller', '32x gtceu:advanced_smd_capacitor', '32x gtceu:advanced_smd_transistor', '32x gtceu:advanced_smd_inductor', '32x gtceu:advanced_smd_diode', '32x gtceu:ram_chip', '64x gtceu:polybenzimidazole_foil', '#gtceu:circuits/luv')
.itemOutputs('ae2:condenser')
.inputFluids(
Fluid.of('gtceu:soldering_alloy', 1152),
Fluid.of('gtceu:polybenzimidazole', 1152),
)
.duration(2000)
.EUt(GTValues.VA[GTValues.IV])        
event.recipes.gtceu.assembly_line('gravitationalfluctuatingmd')
.itemInputs('32x gtceu:advanced_smd_capacitor', '32x gtceu:advanced_smd_transistor', '32x gtceu:advanced_smd_inductor', '32x gtceu:advanced_smd_diode', '32x gtceu:highly_advanced_soc', '64x gtceu:fine_resonant_essence_wire', '64x gtceu:fine_resonant_essence_wire', '64x gtceu:fine_resonant_essence_wire', '64x gtceu:fine_resonant_essence_wire', '64x gtceu:fine_resonant_essence_wire', '#gtceu:circuits/uhv', '64x gtceu:blacklight')
.itemOutputs('kubejs:gravitational_fluctuation_module')
.inputFluids(
Fluid.of('gtceu:soldering_alloy', 1152),
Fluid.of('gtceu:polybenzimidazole', 1152),
Fluid.of('gtceu:condensed_star_matter', 8124)
)
.duration(2000)
.EUt(GTValues.VA[GTValues.UEV])      




event.recipes.gtceu.assembly_line('qsp')
.itemInputs('gtceu:uv_fusion_reactor', '16x #gtceu:circuits/uhv', '4x avaritia:eternal_singularity', 'gtceu:uhv_ultimate_battery', '64x gtceu:fine_resonant_essence_wire', 'ae2:creative_energy_cell', 'kubejs:atomically_compressed_black_hole', 'gtceu:uhv_machine_hull')
.itemOutputs('gtceu:quantum_space_projector')
.inputFluids(
Fluid.of('gtceu:soldering_alloy', 1152),
Fluid.of('gtceu:polybenzimidazole', 1152),
Fluid.of('gtceu:condensed_star_matter', 8124)
)
.duration(2000)
.EUt(GTValues.VA[GTValues.UEV])     
.stationResearch(b => b.researchStack(Item.of('gtceu:atomicforge')).EUt(GTValues.VA[GTValues.UV]).CWUt(512)) // 

// A S S   L I N E S

event.recipes.gtceu.assembly_line('component_assembly_line')
.itemInputs('gtceu:assembly_line', '8x #gtceu:circuits/uev', '4x avaritia:eternal_singularity', 'gtceu:uhv_ultimate_battery', '64x gtceu:fine_cosmic_neutronium_wire', 'ae2:creative_energy_cell', '64x gtceu:fine_cosmic_titanium_wire', '64x gtceu:fine_cosmic_titanium_wire', '64x gtceu:fine_cosmic_titanium_wire', '64x gtceu:fine_cosmic_titanium_wire', '64x gtceu:fine_cosmic_titanium_wire')
.itemOutputs('gtceu:component_assembly_line')
.inputFluids(
Fluid.of('gtceu:soldering_alloy', 1152),
Fluid.of('gtceu:peek', 1152),
Fluid.of('gtceu:condensed_star_matter', 8124)
)
.duration(500)
.EUt(GTValues.VA[GTValues.UEV])     
event.recipes.gtceu.assembly_line('circuit_assembly_line')
.itemInputs('gtceu:assembly_line', '8x #gtceu:circuits/uev', '4x avaritia:eternal_singularity', 'gtceu:uhv_ultimate_battery', '64x gtceu:fine_cosmic_neutronium_wire', 'ae2:creative_energy_cell', '64x gtceu:fine_cosmic_tungsten_wire', '64x gtceu:fine_cosmic_tungsten_wire', '64x gtceu:fine_cosmic_tungsten_wire', '64x gtceu:fine_cosmic_tungsten_wire', '64x gtceu:fine_cosmic_tungsten_wire')
.itemOutputs('gtceu:circuit_assembly_line')
.inputFluids(
Fluid.of('gtceu:soldering_alloy', 1152),
Fluid.of('gtceu:peek', 1152),
Fluid.of('gtceu:condensed_star_matter', 8124)
)
.duration(500)
.EUt(GTValues.VA[GTValues.UEV])     


event.recipes.gtceu.assembly_line('quantum_station')
.itemInputs('gtceu:research_station', '8x #gtceu:circuits/uev', '4x avaritia:eternal_singularity', 'gtceu:uhv_ultimate_battery', '64x gtceu:fine_cosmic_neutronium_wire', 'ae2:creative_energy_cell', '64x gtceu:fine_cosmic_iridium_wire', '64x gtceu:fine_cosmic_iridium_wire', '64x gtceu:fine_cosmic_iridium_wire', '64x gtceu:fine_cosmic_iridium_wire', '64x gtceu:fine_cosmic_iridium_wire', '4x gtceu:uhv_field_generator')
.itemOutputs('gtceu:quantum_station')
.inputFluids(
Fluid.of('gtceu:soldering_alloy', 1152),
Fluid.of('gtceu:peek', 1152),
Fluid.of('gtceu:condensed_star_matter', 8124)
)
.duration(500)
.EUt(GTValues.VA[GTValues.UEV])     

event.recipes.gtceu.assembly_line('h_gim')
.itemInputs('64x kubejs:quantum_casing', '16x gtceu:gravi_star', 'gtceu:uev_machine_hull', '32x gtceu:double_cosmic_tungsten_plate', '4x #gtceu:circuits/uev', '16x gtceu:uev_robot_arm', '16x gtceu:uev_electric_piston', 'kubejs:highly_resonative_soc', 'kubejs:gravitational_fluctuation_module', 'kubejs:quantum_resonant_core', 'gtceu:uev_compressor', '4x gtceu:uhv_field_generator')
.itemOutputs('gtceu:gravitational_implosion_machine')
.inputFluids(
  Fluid.of('gtceu:stropharic_hypoxylon', 9152),
  Fluid.of('gtceu:antimatter', 5000),
  Fluid.of('gtceu:crystal_matrix', 5000)
  )
.duration(1000)
.EUt(GTValues.VA[GTValues.UIV])   
event.recipes.gtceu.assembly_line('xl_plasma_turbine')
.itemInputs('16x gtceu:naquadria_plate', '16x gtceu:quantum_star', 'gtceu:zpm_machine_hull', '32x gtceu:double_naquadah_alloy_plate', '4x #gtceu:circuits/uv', '4x gtceu:zpm_robot_arm', '8x gtceu:zpm_electric_piston', 'gtceu:zpm_compressor', '4x gtceu:iv_field_generator')
.itemOutputs('gtceu:xl_plasma_turbine')
.inputFluids(
Fluid.of('gtceu:soldering_alloy', 1152),
Fluid.of('gtceu:polybenzimidazole', 1152),
Fluid.of('gtceu:europium', 244)
)
.duration(1000)
.EUt(GTValues.VA[GTValues.UV])   
event.recipes.gtceu.assembly_line('large_synchrotron_switcher')
.itemInputs('16x gtceu:chaos_plate', '16x kubejs:reactive_chaos_pellet', 'gtceu:uiv_machine_hull', '32x gtceu:double_awakened_draconium_plate', '4x #gtceu:circuits/uiv', '4x gtceu:uiv_robot_arm', '8x gtceu:uiv_electric_piston', 'gtceu:uiv_field_generator', '4x gtceu:uev_fusion_reactor')
.itemOutputs('gtceu:large_synchrotron_switcher')
.inputFluids(
  Fluid.of('gtceu:stropharic_hypoxylon', 9152),
  Fluid.of('gtceu:antimatter', 5000),
  Fluid.of('gtceu:crystal_matrix', 5000)
  )
.duration(1000)
.EUt(GTValues.VA[GTValues.UXV])   
event.recipes.gtceu.assembly_line('chaotic_singularity_reactor')
.itemInputs('16x gtceu:awakened_draconium_plate', 'draconicevolution:chaotic_core', 'gtceu:uiv_machine_hull', '64x draconicevolution:chaos_shard', '4x #gtceu:circuits/uiv', '4x gtceu:uiv_robot_arm', '8x gtceu:uiv_electric_piston', '4x gtceu:uiv_field_generator')
.itemOutputs('gtceu:chaotic_singularity_reactor')
.inputFluids(
  Fluid.of('gtceu:stropharic_hypoxylon', 9152),
  Fluid.of('gtceu:antimatter', 5000),
  Fluid.of('gtceu:crystal_matrix', 5000)
  )
.duration(1000)
.EUt(GTValues.VA[GTValues.UXV])   
event.recipes.gtceu.assembly_line('singularity_data_confinement')
.itemInputs('16x gtceu:awakened_draconium_plate', 'draconicevolution:chaotic_core', 'gtceu:uiv_machine_hull', '1x kubejs:elementary_data', '4x #gtceu:circuits/uiv', '4x gtceu:uiv_field_generator', '8x gtceu:uiv_electric_piston')
.itemOutputs('gtceu:singularity_data_confinement')
.inputFluids(
  Fluid.of('gtceu:awakened_draconium', 9152),
  Fluid.of('gtceu:antimatter', 5000),
  Fluid.of('gtceu:crystal_matrix', 5000)
  )
.duration(1200)
.EUt(GTValues.VA[GTValues.UXV])   
event.recipes.gtceu.assembly_line('quantum_cooling_chamber')
.itemInputs('16x gtceu:cosmic_iridium_plate', 'draconicevolution:chaotic_core', 'gtceu:uiv_machine_hull', '4x #gtceu:circuits/uiv', '4x gtceu:uiv_field_generator', '8x gtceu:uiv_electric_piston', 'gtceu:mega_vacuum_freezer')
.itemOutputs('gtceu:quantum_cooling_chamber')
.inputFluids(
  Fluid.of('gtceu:awakened_draconium', 9152),
  Fluid.of('gtceu:antimatter', 5000),
  Fluid.of('gtceu:crystal_matrix', 5000)
  )
.duration(1200)
.EUt(GTValues.VA[GTValues.UXV])  
event.recipes.gtceu.assembly_line('stasis_phase_shifter')
.itemInputs('16x gtceu:awakened_draconium_plate', 'draconicevolution:chaotic_core', 'gtceu:uiv_machine_hull', '4x #gtceu:circuits/uiv', '4x gtceu:uiv_field_generator', '8x gtceu:uiv_electric_piston', 'gtceu:large_synchrotron_switcher')
.itemOutputs('gtceu:stasis_phase_shifter')
.inputFluids(
  Fluid.of('gtceu:awakened_draconium', 9152),
  Fluid.of('gtceu:antimatter', 5000),
  Fluid.of('gtceu:crystal_matrix', 5000)
  )
.duration(1200)
.EUt(GTValues.VA[GTValues.UXV])  
event.recipes.gtceu.assembly_line('superconductive_stasis_field')
.itemInputs('16x gtceu:awakened_draconium_plate', 'draconicevolution:chaotic_core', 'gtceu:uiv_machine_hull', '4x #gtceu:circuits/uiv', '4x gtceu:uiv_field_generator', '8x gtceu:uiv_electric_piston', 'gtceu:uev_fusion_reactor')
.itemOutputs('gtceu:superconductive_stasis_field')
.inputFluids(
  Fluid.of('gtceu:awakened_draconium', 9152),
  Fluid.of('gtceu:antimatter', 5000),
  Fluid.of('gtceu:crystal_matrix', 5000)
  )
.duration(1200)
.EUt(GTValues.VA[GTValues.UXV])  
event.recipes.gtceu.assembly_line('nebular_plasma_nexus')
.itemInputs('8x kubejs:awakened_draconium_heavy_plating', '4x draconicevolution:chaotic_core', 'gtceu:uiv_machine_hull', '4x #gtceu:circuits/uiv', '16x gtceu:uiv_field_generator', '8x gtceu:uiv_electric_piston', 'gtceu:uev_fusion_reactor',  'gtceu:superconductive_stasis_field', '64x avaritia:eternal_singularity')
.itemOutputs('gtceu:nebular_plasma_nexus')
.inputFluids(
  Fluid.of('gtceu:eternity', 50),
  Fluid.of('gtceu:antimatter', 5000),
  Fluid.of('gtceu:crystal_matrix', 5000)
  )
.duration(60000)
.EUt(GTValues.VA[GTValues.UXV])  
event.recipes.gtceu.assembly_line('ore_processing_plant')
.itemInputs('8x gtceu:osmiridium_plate', '4x gtceu:luv_electric_motor', 'gtceu:luv_machine_hull', '8x #gtceu:circuits/luv', '1x gtceu:luv_electric_piston', 'gtceu:luv_macerator')
.itemOutputs('gtceu:processing_plant')
.inputFluids(
  Fluid.of('gtceu:star_matter', 256),
  Fluid.of('gtceu:silicone_rubber', 1152),
  Fluid.of('gtceu:styrene_butadiene_rubber', 1152),
  Fluid.of('gtceu:soldering_alloy', 1152),
)
.duration(200)
.EUt(GTValues.VA[GTValues.ZPM])
event.recipes.gtceu.assembly_line('chemical_plant')
.itemInputs('8x gtceu:trinium_plate', '4x gtceu:luv_electric_motor', 'gtceu:inert_machine_casing', '8x #gtceu:circuits/zpm', '8x gtceu:trinium_gear', 'gtceu:luv_chemical_reactor')
.itemOutputs('gtceu:chemical_plant')
.inputFluids(
  Fluid.of('gtceu:polybenzimidazole', 256000),
  Fluid.of('gtceu:silicone_rubber', 1152),
  Fluid.of('gtceu:styrene_butadiene_rubber', 1152),
  Fluid.of('gtceu:soldering_alloy', 1152),
)
.duration(200)
.EUt(GTValues.VA[GTValues.ZPM])  
["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:large_chemical_reactor')).EUt(GTValues.VA[GTValues.IV]).duration(4200)) // 
event.recipes.gtceu.assembly_line('dimensional_miner')
.itemInputs('8x kubejs:eternity_heavy_plating', '4x draconicevolution:chaotic_core', '64x gtceu:luv_large_miner', '4x #gtceu:circuits/uxv', '16x gtceu:uiv_field_generator', '8x gtceu:uiv_electric_piston', 'gtceu:uiv_macerator',  '64x kubejs:energized_quantum_anomaly', '64x avaritia:eternal_singularity')
.itemOutputs('gtceu:dimensional_miner')
.inputFluids(
  Fluid.of('gtceu:eternity', 16000),
  Fluid.of('gtceu:antimatter', 5000),
  Fluid.of('gtceu:cosmic_matter', 5000)
  )
.duration(60000)
.EUt(GTValues.VA[GTValues.UXV])  

            event.recipes.gtceu.assembly_line("gtceu:hyper_assembly_line")
                .itemInputs("16x gtceu:assembly_line")
                .itemInputs("2x #gtceu:circuits/uxv", "4x kubejs:eternity_heavy_plating", "1x kubejs:space_time_heavy_plating", "2x gtceu:uiv_field_generator", "8x kubejs:eternity_casing", "32x gtceu:double_space_time_plate", "32x gtceu:double_space_time_plate", "2x gtceu:uiv_electric_motor", "2x #gtceu:circuits/uiv", "8x #gtceu:circuits/uev", "64x gtceu:eternity_bolt", "64x gtceu:eternity_foil", "gtceu:max_battery", "64x kubejs:quantum_anomaly", "64x kubejs:energized_quantum_anomaly")
                .inputFluids("gtceu:nihonium 144*16", "gtceu:oganesson 144*16")
                .itemOutputs("gtceu:hyper_assembly_line")
                .EUt(GTValues.VA[GTValues.UXV])
                .duration(20*240)




event.recipes.gtceu.quantum_station('qee')
.inputFluids('gtceu:oganesson 32', 'gtceu:antimatter 32')
.itemInputs('gtceu:research_station')
.itemOutputs('gtceu:quantum_entanglement_encrypter')
.EUt((GTValues.VA[GTValues.UIV]))
.totalCWU(1000*12000)
.CWUt(1000)
event.recipes.gtceu.quantum_station('qed')
.inputFluids('gtceu:oganesson 32', 'gtceu:awakened_draconium 32')
.itemInputs('gtceu:research_station')
.itemOutputs('gtceu:quantum_entanglement_decrypter')
.EUt((GTValues.VA[GTValues.UIV]))
.totalCWU(1000*12000)
.CWUt(1000)





const hyper = ["cutter", "laser_engraver", "arc_furnace", "bender", "wiremill", "lathe", "extruder", "mixer", "assembler"]
            hyper.forEach((hyper) => {
            event.recipes.gtceu.assembly_line("gtceu:hyper_" + hyper )
                .itemInputs("16x gtceu:uiv_" + hyper )
                .itemInputs("2x #gtceu:circuits/uxv", "4x kubejs:eternity_heavy_plating", "1x kubejs:space_time_heavy_plating", "2x gtceu:uiv_field_generator", "8x kubejs:eternity_casing", "32x gtceu:double_space_time_plate", "32x gtceu:double_space_time_plate", "2x gtceu:uiv_electric_motor", "2x #gtceu:circuits/uiv", "8x #gtceu:circuits/uev", "64x gtceu:eternity_bolt", "64x gtceu:eternity_foil", "gtceu:max_battery", "64x kubejs:quantum_anomaly", "64x kubejs:energized_quantum_anomaly")
                .inputFluids("gtceu:nihonium 144*16", "gtceu:oganesson 144*16")
                .itemOutputs("gtceu:hyper_" + hyper )
                .EUt(GTValues.VA[GTValues.UXV])
                .duration(20*240)
            })

    })