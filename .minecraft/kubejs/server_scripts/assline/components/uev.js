ServerEvents.recipes(event => {
  // U E V
  // U E V
  // U E V
  // U E V
  // U E V
  // U E V

  event.recipes.gtceu.component_assembly_line('uev_electric_motor')
  .itemInputs('gtceu:long_magnetic_samarium_rod', '8x gtceu:cosmic_neutronium_rod', '4x gtceu:cosmic_iridium_bolt', '4x gtceu:double_cosmic_neutronium_plate', '64x gtceu:fine_draconium_wire', '64x gtceu:fine_draconium_wire', '2x gtceu:draconium_single_cable', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module',)
  .itemOutputs('gtceu:uev_electric_motor')
  .inputFluids(
    Fluid.of('gtceu:lubricant', 1000),
    Fluid.of('gtceu:soldering_alloy', 576),
    Fluid.of('gtceu:draconium', 576),
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UIV])
  event.recipes.gtceu.component_assembly_line('uev_electric_pump')
  .itemInputs('gtceu:uev_electric_motor', 'gtceu:crystal_matrix_huge_fluid_pipe', '2x gtceu:cosmic_neutronium_plate', '8x gtceu:draconium_screw', '16x gtceu:draconium_ring', '16x gtceu:peek_ring', 'avaritia:neutron_gear', '2x gtceu:draconium_single_cable', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  .itemOutputs('gtceu:uev_electric_pump')
  .inputFluids(
    Fluid.of('gtceu:lubricant', 1000),
    Fluid.of('gtceu:soldering_alloy', 576),
    Fluid.of('gtceu:draconium', 576),
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UIV])
  event.recipes.gtceu.assembler('fluid_regulator_uev')
  .itemInputs('gtceu:uev_electric_pump', '2x #gtceu:circuits/uev')
  .circuit(1)
  .itemOutputs('gtceu:uev_fluid_regulator')
  .duration(50)
  .EUt(GTValues.VA[GTValues.UIV])
  event.recipes.gtceu.component_assembly_line('uev_conveyor_module')
  .itemInputs('gtceu:uev_electric_motor', '8x gtceu:cosmic_neutronium_rod', '4x gtceu:draconium_bolt', '4x gtceu:double_cosmic_neutronium_plate', '4x gtceu:draconium_screw', '2x gtceu:draconium_single_cable', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  .itemOutputs('gtceu:uev_conveyor_module')
  .inputFluids(
    Fluid.of('gtceu:lubricant', 1000),
    Fluid.of('gtceu:soldering_alloy', 576),
    Fluid.of('gtceu:draconium', 576),
    Fluid.of('gtceu:neoprene', 3456)
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UIV])
  event.recipes.gtceu.component_assembly_line('uev_electric_piston')
  .itemInputs('gtceu:uev_electric_motor', '4x gtceu:cosmic_neutronium_plate', '4x gtceu:draconium_bolt', '16x gtceu:neutronium_round', '4x gtceu:cosmic_neutronium_rod', '2x gtceu:draconium_single_cable', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module', 'gtceu:draconium_rotor', '64x gtceu:fine_draconium_wire')
  .itemOutputs('gtceu:uev_electric_piston')
  .inputFluids(
    Fluid.of('gtceu:lubricant', 1000),
    Fluid.of('gtceu:soldering_alloy', 576),
    Fluid.of('gtceu:draconium', 576),
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UIV])
  event.recipes.gtceu.component_assembly_line('uev_robot_arm')
  .itemInputs('8x gtceu:long_cosmic_osmium_rod', 'avaritia:neutron_gear', '3x gtceu:small_cosmic_neutronium_gear', '2x gtceu:uev_electric_motor', 'gtceu:uev_electric_piston', '#gtceu:circuits/uev', '2x #gtceu:circuits/uhv', '4x #gtceu:circuits/uv', '64x gtceu:fine_draconium_wire', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  .itemOutputs('gtceu:uev_robot_arm')
  .inputFluids(
    Fluid.of('gtceu:lubricant', 1000),
    Fluid.of('gtceu:soldering_alloy', 576),
    Fluid.of('gtceu:draconium', 576),
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UIV])
  event.recipes.gtceu.assembly_line('uev_energy_input_hatch')
  .itemInputs('gtceu:uev_machine_hull', '4x gtceu:draconium_single_cable', '2x kubejs:highly_resonative_soc', '#gtceu:circuits/uev', '2x kubejs:uev_voltage_coil', 'avaritia:eternal_singularity')
  .itemOutputs('gtceu:uev_energy_input_hatch')
  .inputFluids(
    Fluid.of('gtceu:sodium_potassium', 10000),
    Fluid.of('gtceu:soldering_alloy', 2880)
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UEV])
  event.recipes.gtceu.assembly_line('uev_energy_output_hatch')
  .itemInputs('gtceu:uev_machine_casing', '4x gtceu:draconium_single_cable', '2x kubejs:highly_resonative_soc', '#gtceu:circuits/uev', '2x kubejs:uev_voltage_coil', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  .itemOutputs('gtceu:uev_energy_output_hatch')
  .inputFluids(
    Fluid.of('gtceu:sodium_potassium', 10000),
    Fluid.of('gtceu:soldering_alloy', 2880)
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UIV])
  event.recipes.gtceu.component_assembly_line('uev_electric_emitter')
  .itemInputs('gtceu:awakened_draconium_frame', 'gtceu:uev_electric_motor', '4x gtceu:long_awakened_draconium_rod', 'gtceu:gravi_star', '2x #gtceu:circuits/uev', '64x gtceu:awakened_draconium_foil', '32x gtceu:awakened_draconium_foil', '4x gtceu:draconium_single_wire', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  .itemOutputs('gtceu:uev_emitter')
  .inputFluids(
    Fluid.of('gtceu:lubricant', 1000),
    Fluid.of('gtceu:soldering_alloy', 576),
    Fluid.of('gtceu:draconium', 576),
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UIV])
  event.recipes.gtceu.component_assembly_line('uev_electric_sensor')
  .itemInputs('gtceu:awakened_draconium_frame', 'gtceu:uev_electric_motor', '4x gtceu:awakened_draconium_plate', 'gtceu:gravi_star', '2x #gtceu:circuits/uev', '64x gtceu:awakened_draconium_foil', '32x gtceu:awakened_draconium_foil', '4x gtceu:draconium_single_wire', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  
  .itemOutputs('gtceu:uev_sensor')
  .inputFluids(
    Fluid.of('gtceu:lubricant', 1000),
    Fluid.of('gtceu:soldering_alloy', 576),
    Fluid.of('gtceu:draconium', 576),
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UIV])
  event.recipes.gtceu.component_assembly_line('uev_field_generator_voltage')
  .itemInputs('gtceu:gravi_star', 'gtceu:awakened_draconium_gear', '3x gtceu:small_awakened_draconium_gear', '8x gtceu:uev_sensor', '8x gtceu:uev_emitter', '#gtceu:circuits/uiv', '2x #gtceu:circuits/uev', '4x #gtceu:circuits/uhv', '64x gtceu:fine_draconium_wire', 'avaritia:eternal_singularity', 'kubejs:quantum_data_module')
  .itemOutputs('gtceu:uev_field_generator')
  .inputFluids(
    Fluid.of('gtceu:lubricant', 1000),
    Fluid.of('gtceu:soldering_alloy', 576),
    Fluid.of('gtceu:draconium', 576),
  )
  .duration(600)
  .EUt(GTValues.VA[GTValues.UIV])




})