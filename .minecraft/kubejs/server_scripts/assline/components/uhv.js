
ServerEvents.recipes(event => {

  // U H V
  // U H V
  // U H V
  // U H V
  // U H V
  // U H V

event.recipes.gtceu.assembly_line('uhv_motor')
.itemInputs('gtceu:long_magnetic_samarium_rod', '8x gtceu:neutronium_rod', '4x gtceu:neutronium_bolt', '4x gtceu:double_neutronium_plate', '64x gtceu:fine_crystal_matrix_wire', '64x gtceu:fine_crystal_matrix_wire', '2x gtceu:europium_single_cable', 'avaritia:eternal_singularity')
.itemOutputs('gtceu:uhv_electric_motor')
.inputFluids(
Fluid.of('gtceu:lubricant', 1000),
Fluid.of('gtceu:soldering_alloy', 576),
Fluid.of('gtceu:naquadria', 576),
)
.stationResearch(b => b.researchStack(Item.of('gtceu:uv_electric_motor')).EUt(GTValues.VA[GTValues.UHV]).CWUt(64)) // 
.duration(600)
.EUt(GTValues.VA[GTValues.UV])
event.recipes.gtceu.assembly_line('uhv_pump')
.itemInputs('gtceu:uhv_electric_motor', 'gtceu:crystal_matrix_large_fluid_pipe', '2x gtceu:neutronium_plate', '8x gtceu:neutronium_screw', '16x gtceu:neoprene_ring', 'gtceu:neutronium_gear', '2x gtceu:europium_single_cable', 'avaritia:eternal_singularity')
.itemOutputs('gtceu:uhv_electric_pump')
.inputFluids(
Fluid.of('gtceu:lubricant', 1000),
Fluid.of('gtceu:soldering_alloy', 576),
Fluid.of('gtceu:naquadria', 576),
)
.stationResearch(b => b.researchStack(Item.of('gtceu:uv_electric_pump')).EUt(GTValues.VA[GTValues.UHV]).CWUt(64)) // 
.duration(600)
.EUt(GTValues.VA[GTValues.UV])
event.recipes.gtceu.assembler('fluid_regulator_uhv')
.itemInputs('gtceu:uhv_electric_pump', '2x #gtceu:circuits/uhv')
.circuit(1)
.itemOutputs('gtceu:uhv_fluid_regulator')
.duration(50)
.EUt(GTValues.VA[GTValues.UV])
event.recipes.gtceu.assembly_line('uhv_conveyor')
.itemInputs('gtceu:uhv_electric_motor', '8x gtceu:neutronium_rod', '4x gtceu:neutronium_bolt', '4x gtceu:double_neutronium_plate', '4x gtceu:neutronium_screw', '2x gtceu:europium_single_cable', 'avaritia:eternal_singularity')
.itemOutputs('gtceu:uhv_conveyor_module')
.inputFluids(
Fluid.of('gtceu:lubricant', 1000),
Fluid.of('gtceu:soldering_alloy', 576),
Fluid.of('gtceu:naquadria', 576),
Fluid.of('gtceu:neoprene', 3456)
)
.stationResearch(b => b.researchStack(Item.of('gtceu:uv_conveyor_module')).EUt(GTValues.VA[GTValues.UHV]).CWUt(64)) // 
.duration(600)
.EUt(GTValues.VA[GTValues.UV])
event.recipes.gtceu.assembly_line('uhv_piston')
.itemInputs('gtceu:uhv_electric_motor', '4x gtceu:neutronium_plate', '4x gtceu:neutronium_bolt', '16x gtceu:neutronium_round', '4x gtceu:neutronium_rod', '2x gtceu:europium_single_cable', 'avaritia:eternal_singularity', 'gtceu:crystal_matrix_rotor', '64x gtceu:fine_crystal_matrix_wire')
.itemOutputs('gtceu:uhv_electric_piston')
.inputFluids(
Fluid.of('gtceu:lubricant', 1000),
Fluid.of('gtceu:soldering_alloy', 576),
Fluid.of('gtceu:naquadria', 576),
)
.stationResearch(b => b.researchStack(Item.of('gtceu:uv_electric_piston')).EUt(GTValues.VA[GTValues.UHV]).CWUt(64)) // 
.duration(600)
.EUt(GTValues.VA[GTValues.UV])
event.recipes.gtceu.assembly_line('uhv_arm')
.itemInputs('8x gtceu:long_neutronium_rod', 'gtceu:neutronium_gear', '3x gtceu:neutronium_buzz_saw_blade', '2x gtceu:uhv_electric_motor', 'gtceu:uhv_electric_piston', '#gtceu:circuits/uhv', '2x #gtceu:circuits/uv', '4x #gtceu:circuits/zpm', '64x gtceu:fine_crystal_matrix_wire', 'avaritia:eternal_singularity')
.itemOutputs('gtceu:uhv_robot_arm')
.inputFluids(
Fluid.of('gtceu:lubricant', 1000),
Fluid.of('gtceu:soldering_alloy', 576),
Fluid.of('gtceu:naquadria', 576),
)
.stationResearch(b => b.researchStack(Item.of('gtceu:uv_robot_arm')).EUt(GTValues.VA[GTValues.UHV]).CWUt(64)) // 
.duration(600)
.EUt(GTValues.VA[GTValues.UV])
event.recipes.gtceu.assembly_line('energy_hatch_uhv')
.itemInputs('gtceu:uhv_machine_hull', '4x gtceu:europium_single_cable', '2x gtceu:highly_advanced_soc', '#gtceu:circuits/uhv', '2x kubejs:uhv_voltage_coil', 'avaritia:eternal_singularity')
.itemOutputs('gtceu:uhv_energy_input_hatch')
.inputFluids(
Fluid.of('gtceu:sodium_potassium', 10000),
Fluid.of('gtceu:soldering_alloy', 2880)
)
.stationResearch(b => b.researchStack(Item.of('gtceu:uv_energy_input_hatch')).EUt(GTValues.VA[GTValues.UHV]).CWUt(64)) // 
.duration(600)
.EUt(GTValues.VA[GTValues.UHV])
event.recipes.gtceu.assembly_line('dynamo_hatch_uhv')
.itemInputs('gtceu:uhv_machine_casing', '4x gtceu:europium_single_cable', '2x gtceu:highly_advanced_soc', '#gtceu:circuits/uhv', '2x kubejs:uhv_voltage_coil', 'avaritia:eternal_singularity')
.itemOutputs('gtceu:uhv_energy_output_hatch')
.inputFluids(
Fluid.of('gtceu:sodium_potassium', 10000),
Fluid.of('gtceu:soldering_alloy', 2880)
)
.stationResearch(b => b.researchStack(Item.of('gtceu:uv_energy_output_hatch')).EUt(GTValues.VA[GTValues.UHV]).CWUt(64)) // 
.duration(600)
.EUt(GTValues.VA[GTValues.UHV])
event.recipes.gtceu.assembly_line('uhvemitter')
.itemInputs('gtceu:resonant_essence_frame', 'gtceu:uhv_electric_motor', '4x gtceu:long_neutronium_rod', 'gtceu:gravi_star', '2x #gtceu:circuits/uhv', '64x gtceu:cosmic_neutronium_foil', '32x gtceu:cosmic_neutronium_foil', '4x gtceu:crystal_matrix_single_wire', 'avaritia:eternal_singularity')
.itemOutputs('gtceu:uhv_emitter')
.inputFluids(
Fluid.of('gtceu:lubricant', 1000),
Fluid.of('gtceu:soldering_alloy', 576),
Fluid.of('gtceu:naquadria', 576),
)
.stationResearch(b => b.researchStack(Item.of('gtceu:uv_emitter')).EUt(GTValues.VA[GTValues.UHV]).CWUt(96)) // 
.duration(600)
.EUt(GTValues.VA[GTValues.UV])
event.recipes.gtceu.assembly_line('uhvsensor')
.itemInputs('gtceu:resonant_essence_frame', 'gtceu:uhv_electric_motor', '4x gtceu:neutronium_plate', 'gtceu:gravi_star', '2x #gtceu:circuits/uhv', '64x gtceu:cosmic_neutronium_foil', '32x gtceu:cosmic_neutronium_foil', '4x gtceu:crystal_matrix_single_wire', 'avaritia:eternal_singularity')

.itemOutputs('gtceu:uhv_sensor')
.inputFluids(
Fluid.of('gtceu:lubricant', 1000),
Fluid.of('gtceu:soldering_alloy', 576),
Fluid.of('gtceu:naquadria', 576),
)
.stationResearch(b => b.researchStack(Item.of('gtceu:uv_sensor')).EUt(GTValues.VA[GTValues.UHV]).CWUt(96)) // 
.duration(600)
.EUt(GTValues.VA[GTValues.UV])
event.recipes.gtceu.assembly_line('uhv_field_generator_vol')
.itemInputs('gtceu:gravi_star', 'avaritia:neutron_gear', '3x gtceu:neutronium_buzz_saw_blade', '8x gtceu:uhv_sensor', '8x gtceu:uhv_emitter', '#gtceu:circuits/uev', '2x #gtceu:circuits/uhv', '4x #gtceu:circuits/uv', '64x gtceu:fine_crystal_matrix_wire', 'avaritia:eternal_singularity')
.itemOutputs('gtceu:uhv_field_generator')
.inputFluids(
Fluid.of('gtceu:lubricant', 1000),
Fluid.of('gtceu:soldering_alloy', 576),
Fluid.of('gtceu:naquadria', 576),
)
.stationResearch(b => b.researchStack(Item.of('gtceu:uv_field_generator')).EUt(GTValues.VA[GTValues.UHV]).CWUt(96)) // 
.duration(600)
.EUt(GTValues.VA[GTValues.UV])

})