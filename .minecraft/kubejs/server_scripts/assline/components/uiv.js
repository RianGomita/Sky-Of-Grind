ServerEvents.recipes(event => {
  // U I V
  // U I V
  // U I V
  // U I V
  // U I V
  // U I V

  event.recipes.gtceu.component_assembly_line('uiv_electric_motor')
  .itemInputs('gtceu:long_magnetic_stabilized_iridium_rod', '8x gtceu:awakened_draconium_rod', '4x gtceu:awakened_draconium_bolt', '4x gtceu:double_awakened_draconium_plate', '64x gtceu:fine_awakened_draconium_wire', '64x gtceu:fine_awakened_draconium_wire', '2x gtceu:awakened_draconium_single_cable', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module',)
  .itemOutputs('gtceu:uiv_electric_motor')
  .inputFluids(
    Fluid.of('gtceu:stropharic_hypoxylon', 576),
    Fluid.of('gtceu:antimatter', 576),
    Fluid.of('gtceu:draconium', 576),
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UIV])
  event.recipes.gtceu.component_assembly_line('uiv_electric_pump')
  .itemInputs('gtceu:uiv_electric_motor', 'gtceu:crystal_matrix_huge_fluid_pipe', '2x gtceu:awakened_draconium_plate', '8x gtceu:awakened_draconium_screw', '16x gtceu:awakened_draconium_ring', '16x gtceu:peek_ring', 'gtceu:awakened_draconium_gear', '2x gtceu:awakened_draconium_single_cable', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  .itemOutputs('gtceu:uiv_electric_pump')
  .inputFluids(
    Fluid.of('gtceu:stropharic_hypoxylon', 576),
    Fluid.of('gtceu:antimatter', 576),
    Fluid.of('gtceu:draconium', 576),
    
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UIV])
  event.recipes.gtceu.assembler('fluid_regulator_uiv')
  .itemInputs('gtceu:uiv_electric_pump', '2x #gtceu:circuits/uiv')
  .circuit(1)
  .itemOutputs('gtceu:uiv_fluid_regulator')
  .duration(50)
  .EUt(GTValues.VA[GTValues.UIV])
  event.recipes.gtceu.component_assembly_line('uiv_conveyor_module')
  .itemInputs('gtceu:uiv_electric_motor', '8x gtceu:awakened_draconium_rod', '4x gtceu:awakened_draconium_bolt', '4x gtceu:double_awakened_draconium_plate', '4x gtceu:awakened_draconium_screw', '2x gtceu:awakened_draconium_single_cable', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  .itemOutputs('gtceu:uiv_conveyor_module')
  .inputFluids(
    Fluid.of('gtceu:stropharic_hypoxylon', 576),
    Fluid.of('gtceu:antimatter', 576),
    Fluid.of('gtceu:draconium', 576),
    Fluid.of('gtceu:neoprene', 3456)
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UIV])
  event.recipes.gtceu.component_assembly_line('uiv_electric_piston')
  .itemInputs('gtceu:uiv_electric_motor', '4x gtceu:awakened_draconium_plate', '4x gtceu:awakened_draconium_bolt', '16x gtceu:awakened_draconium_round', '4x gtceu:awakened_draconium_rod', '2x gtceu:awakened_draconium_single_cable', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module', 'gtceu:awakened_draconium_rotor', '64x gtceu:fine_awakened_draconium_wire')
  .itemOutputs('gtceu:uiv_electric_piston')
  .inputFluids(
    Fluid.of('gtceu:stropharic_hypoxylon', 576),
    Fluid.of('gtceu:antimatter', 576),
    Fluid.of('gtceu:draconium', 576),
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UIV])
  event.recipes.gtceu.component_assembly_line('uiv_robot_arm')
  .itemInputs('8x gtceu:long_magnetic_stabilized_iridium_rod', 'gtceu:awakened_draconium_gear', '3x gtceu:small_awakened_draconium_gear', '2x gtceu:uiv_electric_motor', 'gtceu:uiv_electric_piston', '#gtceu:circuits/uiv', '2x #gtceu:circuits/uev', '4x #gtceu:circuits/uhv', '64x gtceu:fine_awakened_draconium_wire', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  .itemOutputs('gtceu:uiv_robot_arm')
  .inputFluids(
    Fluid.of('gtceu:stropharic_hypoxylon', 576),
    Fluid.of('gtceu:antimatter', 576),
    Fluid.of('gtceu:draconium', 576),
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UIV])
  event.recipes.gtceu.assembly_line('uiv_energy_input_hatch')
  .itemInputs('gtceu:uiv_machine_hull', '4x gtceu:awakened_draconium_single_cable', '2x kubejs:extremely_advanced_soc', '2x #gtceu:circuits/uiv', '2x kubejs:uiv_voltage_coil', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  .itemOutputs('gtceu:uiv_energy_input_hatch')
  .inputFluids(
    Fluid.of('gtceu:sodium_potassium', 5760),
    Fluid.of('gtceu:antimatter', 2880)
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UIV])
  event.recipes.gtceu.assembly_line('uiv_energy_output_hatch')
  .itemInputs('gtceu:uiv_machine_casing', '4x gtceu:awakened_draconium_single_cable', '2x kubejs:extremely_advanced_soc', '2x #gtceu:circuits/uiv', '2x kubejs:uiv_voltage_coil', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  .itemOutputs('gtceu:uiv_energy_output_hatch')
  .inputFluids(
    Fluid.of('gtceu:sodium_potassium', 5760),
    Fluid.of('gtceu:antimatter', 2880)
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UXV])
 
 
 
 
 
 
  event.recipes.gtceu.component_assembly_line('uiv_electric_emitter')
  .itemInputs('gtceu:awakened_draconium_frame', 'gtceu:uiv_electric_motor', '4x gtceu:long_awakened_draconium_rod', '4x draconicevolution:chaos_shard', '2x #gtceu:circuits/uiv', '64x gtceu:awakened_draconium_foil', '32x gtceu:awakened_draconium_foil', '4x gtceu:awakened_draconium_single_wire', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  .itemOutputs('gtceu:uiv_emitter')
  .inputFluids(
    Fluid.of('gtceu:stropharic_hypoxylon', 576),
    Fluid.of('gtceu:antimatter', 576),
    Fluid.of('gtceu:draconium', 576),
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UXV])
  event.recipes.gtceu.component_assembly_line('uiv_electric_sensor')
  .itemInputs('gtceu:awakened_draconium_frame', 'gtceu:uiv_electric_motor', '4x gtceu:awakened_draconium_plate', '4x draconicevolution:chaos_shard', '2x #gtceu:circuits/uiv', '64x gtceu:awakened_draconium_foil', '32x gtceu:awakened_draconium_foil', '4x gtceu:awakened_draconium_single_wire', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  
  .itemOutputs('gtceu:uiv_sensor')
  .inputFluids(
    Fluid.of('gtceu:stropharic_hypoxylon', 576),
    Fluid.of('gtceu:antimatter', 576),
    Fluid.of('gtceu:draconium', 576),
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UXV])
  event.recipes.gtceu.component_assembly_line('uiv_field_generator_voltage')
  .itemInputs('16x draconicevolution:chaos_shard', 'gtceu:awakened_draconium_gear', '3x gtceu:small_awakened_draconium_gear', '8x gtceu:uiv_sensor', '8x gtceu:uiv_emitter', '#gtceu:circuits/uiv', '2x #gtceu:circuits/uev', '4x #gtceu:circuits/uhv', '7x gtceu:dense_chaos_plate', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  .itemOutputs('gtceu:uiv_field_generator')
  .inputFluids(
    Fluid.of('gtceu:stropharic_hypoxylon', 576),
    Fluid.of('gtceu:antimatter', 576),
    Fluid.of('gtceu:draconium', 576),
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UXV])









  event.recipes.gtceu.assembler('uiv_voltage_coil')
  .itemInputs('gtceu:magnetic_stabilized_iridium_rod', '64x gtceu:fine_awakened_draconium_wire')
  .circuit(1)
  .itemOutputs('kubejs:uiv_voltage_coil')
  .duration(400)
  .EUt(GTValues.VA[GTValues.UIV]);
  event.recipes.gtceu.assembler('highly_superconducting_coil')
  .itemInputs('32x gtceu:draconium_double_cable', '32x gtceu:crystal_matrix_foil')
  .inputFluids(Fluid.of('gtceu:draconium', 3456))
  .itemOutputs('kubejs:highly_superconducting_coil_block')
  .duration(200)
  .EUt(GTValues.VA[GTValues.UIV]);
  event.recipes.gtceu.polarizer('magnetic_iridium')
  .itemInputs('gtceu:stabilized_iridium_ingot')
  .itemOutputs('gtceu:magnetic_stabilized_iridium_ingot')
  .duration(1200)
  .EUt(GTValues.VA[GTValues.UEV]);

  event.recipes.gtceu.alloy_blast_smelter("heavy_duty_alloy_t4")
  .itemInputs('8x gtceu:heavy_duty_alloy_t3_dust', '5x draconicevolution:awakened_draconium_dust', '4x kubejs:reactive_chaos_dust')
  .circuit(21)
  .outputFluids(Fluid.of("gtceu:heavy_duty_alloy_t4", 288))
  .duration(20*405)
  .EUt(GTValues.VA[GTValues.UXV])
  .blastFurnaceTemp(15000)

})