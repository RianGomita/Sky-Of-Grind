ServerEvents.recipes(event => {
  // U X V  // U X V  // U X V
  // U X V  // U X V  // U X V
    // U X V  // U X V  // U X V
      // U X V  // U X V  // U X V
        // U X V  // U X V  // U X V
          // U X V  // U X V  // U X V  
            // U X V  // U X V  // U X V

  event.recipes.gtceu.component_assembly_line('uxv_electric_motor')
  .itemInputs('gtceu:long_magnetic_stabilized_iridium_rod', '8x gtceu:pure_cosmic_matter_rod', '4x gtceu:pure_cosmic_matter_bolt', '4x gtceu:double_pure_cosmic_matter_plate', '64x gtceu:fine_pure_cosmic_matter_wire', '64x gtceu:fine_pure_cosmic_matter_wire', '2x gtceu:chaos_single_wire', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module',)
  .itemOutputs('gtceu:uxv_electric_motor')
  .inputFluids(
    Fluid.of('gtceu:eternity', 576),
    Fluid.of('gtceu:universium', 576),
    Fluid.of('gtceu:stellar_matter_plasma', 576),
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UXV])
  event.recipes.gtceu.component_assembly_line('uxv_electric_pump')
  .itemInputs('gtceu:uxv_electric_motor', 'gtceu:crystal_matrix_huge_fluid_pipe', '2x gtceu:pure_cosmic_matter_plate', '8x gtceu:pure_cosmic_matter_screw', '16x gtceu:pure_cosmic_matter_ring', '16x gtceu:peek_ring', 'gtceu:pure_cosmic_matter_gear', '2x gtceu:chaos_single_wire', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  .itemOutputs('gtceu:uxv_electric_pump')
  .inputFluids(
    Fluid.of('gtceu:eternity', 576),
    Fluid.of('gtceu:universium', 576),
    Fluid.of('gtceu:stellar_matter_plasma', 576),
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UXV])
  event.recipes.gtceu.assembler('fluid_regulator_uxv')
  .itemInputs('gtceu:uxv_electric_pump', '2x #gtceu:circuits/uxv')
  .circuit(1)
  .itemOutputs('gtceu:uxv_fluid_regulator')
  .duration(50)
  .EUt(GTValues.VA[GTValues.UXV])
  event.recipes.gtceu.component_assembly_line('uxv_conveyor_module')
  .itemInputs('gtceu:uxv_electric_motor', '8x gtceu:pure_cosmic_matter_rod', '4x gtceu:pure_cosmic_matter_bolt', '4x gtceu:double_pure_cosmic_matter_plate', '4x gtceu:pure_cosmic_matter_screw', '2x gtceu:chaos_single_wire', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  .itemOutputs('gtceu:uxv_conveyor_module')
  .inputFluids(
    Fluid.of('gtceu:eternity', 576),
    Fluid.of('gtceu:universium', 576),
    Fluid.of('gtceu:stellar_matter_plasma', 576),
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UXV])
  event.recipes.gtceu.component_assembly_line('uxv_electric_piston')
  .itemInputs('gtceu:uxv_electric_motor', '4x gtceu:pure_cosmic_matter_plate', '4x gtceu:pure_cosmic_matter_bolt', '16x gtceu:pure_cosmic_matter_round', '4x gtceu:pure_cosmic_matter_rod', '2x gtceu:chaos_single_wire', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module', 'gtceu:pure_cosmic_matter_rotor', '64x gtceu:fine_pure_cosmic_matter_wire')
  .itemOutputs('gtceu:uxv_electric_piston')
  .inputFluids(
    Fluid.of('gtceu:eternity', 576),
    Fluid.of('gtceu:universium', 576),
    Fluid.of('gtceu:stellar_matter_plasma', 576),
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UXV])
  event.recipes.gtceu.component_assembly_line('uxv_robot_arm')
  .itemInputs('8x gtceu:long_magnetic_stabilized_iridium_rod', 'gtceu:pure_cosmic_matter_gear', '3x gtceu:small_pure_cosmic_matter_gear', '2x gtceu:uxv_electric_motor', 'gtceu:uxv_electric_piston', '#gtceu:circuits/uxv', '2x #gtceu:circuits/uiv', '4x #gtceu:circuits/uev', '64x gtceu:fine_pure_cosmic_matter_wire', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  .itemOutputs('gtceu:uxv_robot_arm')
  .inputFluids(
    Fluid.of('gtceu:eternity', 576),
    Fluid.of('gtceu:universium', 576),
    Fluid.of('gtceu:stellar_matter_plasma', 576),
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UXV])
  event.recipes.gtceu.assembly_line('uxv_energy_input_hatch')
  .itemInputs('gtceu:uxv_machine_hull', '4x gtceu:chaos_single_wire', '2x kubejs:extremely_advanced_soc', '2x #gtceu:circuits/uxv', '2x kubejs:uxv_voltage_coil', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  .itemOutputs('gtceu:uxv_energy_input_hatch')
  .inputFluids(
    Fluid.of('gtceu:sodium_potassium', 5760),
    Fluid.of('gtceu:universium', 2880)
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UXV])
  event.recipes.gtceu.assembly_line('uxv_energy_output_hatch')
  .itemInputs('gtceu:uxv_machine_casing', '4x gtceu:chaos_single_wire', '2x kubejs:extremely_advanced_soc', '2x #gtceu:circuits/uxv', '2x kubejs:uxv_voltage_coil', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  .itemOutputs('gtceu:uxv_energy_output_hatch')
  .inputFluids(
    Fluid.of('gtceu:sodium_potassium', 5760),
    Fluid.of('gtceu:universium', 2880)
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UXV])
 
 
 
 
 
 
  event.recipes.gtceu.component_assembly_line('uxv_electric_emitter')
  .itemInputs('gtceu:pure_cosmic_matter_frame', 'gtceu:uxv_electric_motor', '4x gtceu:long_pure_cosmic_matter_rod', '4x draconicevolution:chaos_shard', '2x #gtceu:circuits/uxv', '64x gtceu:pure_cosmic_matter_foil', '32x gtceu:pure_cosmic_matter_foil', '4x gtceu:chaos_single_wire', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  .itemOutputs('gtceu:uxv_emitter')
  .inputFluids(
    Fluid.of('gtceu:eternity', 576),
    Fluid.of('gtceu:universium', 576),
    Fluid.of('gtceu:stellar_matter_plasma', 576),
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UXV])
  event.recipes.gtceu.component_assembly_line('uxv_electric_sensor')
  .itemInputs('gtceu:pure_cosmic_matter_frame', 'gtceu:uxv_electric_motor', '4x gtceu:pure_cosmic_matter_plate', '4x draconicevolution:chaos_shard', '2x #gtceu:circuits/uxv', '64x gtceu:pure_cosmic_matter_foil', '32x gtceu:pure_cosmic_matter_foil', '4x gtceu:chaos_single_wire', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  
  .itemOutputs('gtceu:uxv_sensor')
  .inputFluids(
    Fluid.of('gtceu:eternity', 576),
    Fluid.of('gtceu:universium', 576),
    Fluid.of('gtceu:stellar_matter_plasma', 576),
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UXV])
  event.recipes.gtceu.component_assembly_line('uxv_field_generator_voltage')
  .itemInputs('16x draconicevolution:chaos_shard', 'gtceu:pure_cosmic_matter_gear', '3x gtceu:small_pure_cosmic_matter_gear', '8x gtceu:uxv_sensor', '8x gtceu:uxv_emitter', '#gtceu:circuits/uxv', '2x #gtceu:circuits/uiv', '4x #gtceu:circuits/uev', '7x gtceu:dense_chaos_plate', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  .itemOutputs('gtceu:uxv_field_generator')
  .inputFluids(
    Fluid.of('gtceu:eternity', 576),
    Fluid.of('gtceu:universium', 576),
    Fluid.of('gtceu:stellar_matter_plasma', 576),
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UXV])









  event.recipes.gtceu.assembler('uxv_voltage_coil')
  .itemInputs('gtceu:magnetic_stabilized_iridium_rod', '64x gtceu:fine_pure_cosmic_matter_wire')
  .circuit(1)
  .itemOutputs('kubejs:uxv_voltage_coil')
  .duration(400)
  .EUt(GTValues.VA[GTValues.UXV]);

})