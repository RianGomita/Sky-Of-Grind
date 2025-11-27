ServerEvents.recipes(event => {


    //  U E V   C I R C U I T S 
    
    
    
    event.recipes.gtceu.assembly_line('resonant_processor')
    .itemInputs('kubejs:highly_resonative_printed_circuit_board', '2x gtceu:wetware_processor', '64x gtceu:fine_resonant_essence_wire', '64x gtceu:advanced_smd_capacitor', '64x gtceu:fine_kaemite_wire', 'gtceu:highly_advanced_soc')
    .itemOutputs('2x kubejs:resonant_processor')
    .inputFluids(
    Fluid.of('gtceu:soldering_alloy', 1152),
    Fluid.of('gtceu:peek', 1152),
    Fluid.of('gtceu:condensed_star_matter', 8124)
    )
    .duration(200)
    .EUt(GTValues.VA[GTValues.UEV])     
    event.recipes.gtceu.assembly_line('resonant_processor_assembly')
    .itemInputs('kubejs:highly_resonative_printed_circuit_board', 'kubejs:resonant_processor', '64x gtceu:fine_resonant_essence_wire', '64x gtceu:advanced_smd_capacitor', '64x gtceu:fine_kaemite_wire', 'gtceu:highly_advanced_soc', '7x gtceu:dense_crystal_matrix_plate')
    .itemOutputs('1x kubejs:resonant_processor_assembly')
    .inputFluids(
    Fluid.of('gtceu:soldering_alloy', 1152),
    Fluid.of('gtceu:peek', 1152),
    Fluid.of('gtceu:condensed_star_matter', 8124)
    )
    .duration(400)
    .EUt(GTValues.VA[GTValues.UEV])     
    event.recipes.gtceu.assembly_line('resonant_processor_computer')
    .itemInputs('2x kubejs:resonant_processor_assembly', '64x gtceu:fine_resonant_essence_wire', '64x gtceu:advanced_smd_capacitor', '64x gtceu:fine_kaemite_wire', 'gtceu:highly_advanced_soc', '7x gtceu:dense_crystal_matrix_plate', '32x gtceu:neutronium_plate')
    .itemOutputs('1x kubejs:resonant_processor_computer')
    .inputFluids(
    Fluid.of('gtceu:soldering_alloy', 1152),
    Fluid.of('gtceu:peek', 1152),
    Fluid.of('gtceu:condensed_star_matter', 8124)
    )
    .duration(800)
    .EUt(GTValues.VA[GTValues.UEV])   
    event.recipes.gtceu.assembly_line('resonant_processor_mainframe')
    .itemInputs('2x kubejs:resonant_processor_computer', '64x gtceu:fine_resonant_essence_wire', '64x gtceu:advanced_smd_capacitor', '64x gtceu:fine_kaemite_wire', 'gtceu:highly_advanced_soc', '7x gtceu:dense_crystal_matrix_plate', '32x gtceu:neutronium_plate', 'avaritia:eternal_singularity', '16x avaritia:neutron_gear', 'kubejs:highly_resonative_soc')
    .itemOutputs('1x kubejs:resonant_processor_mainframe')
    .inputFluids(
    Fluid.of('gtceu:soldering_alloy', 1152),
    Fluid.of('gtceu:peek', 1152),
    Fluid.of('gtceu:condensed_star_matter', 8124)
    )
    .duration(1600)
    .EUt(GTValues.VA[GTValues.UEV])   

// E A R L Y   C I R C U I T S

event.recipes.gtceu.circuit_assembly_line('microchip_processor')
.itemInputs('16x gtceu:plastic_printed_circuit_board', '8x gtceu:advanced_soc')
.itemOutputs('64x gtceu:microchip_processor')
.inputFluids(
Fluid.of('gtceu:copper', 2056),
Fluid.of('gtceu:soldering_alloy', 2056)
)
.duration(320)
.EUt(GTValues.VA[GTValues.UV])


event.recipes.gtceu.circuit_assembly_line('micro_processor')
.itemInputs('16x gtceu:plastic_printed_circuit_board', '16x gtceu:advanced_soc')
.itemOutputs('64x gtceu:micro_processor')
.inputFluids(
Fluid.of('gtceu:red_alloy', 2056),
Fluid.of('gtceu:soldering_alloy', 4112)
)
.duration(480)
.EUt(GTValues.VA[GTValues.UV])


event.recipes.gtceu.circuit_assembly_line('nano_processor')
.itemInputs('16x gtceu:epoxy_printed_circuit_board', '24x gtceu:advanced_soc')
.itemOutputs('64x gtceu:nano_processor')
.inputFluids(
Fluid.of('gtceu:electrum', 4112),
Fluid.of('gtceu:soldering_alloy', 8124)
)
.duration(640)
.EUt(GTValues.VA[GTValues.UV])


event.recipes.gtceu.circuit_assembly_line('quantum_processor')
.itemInputs('16x gtceu:fiber_reinforced_printed_circuit_board', '32x gtceu:advanced_soc')
.itemOutputs('64x gtceu:quantum_processor')
.inputFluids(
Fluid.of('gtceu:niobium_titanium', 2056),
Fluid.of('gtceu:platinum', 4112),
Fluid.of('gtceu:soldering_alloy', 8124)
)
.duration(800)
.EUt(GTValues.VA[GTValues.UV])

//  U I V   C I R C U I T S 


event.recipes.gtceu.circuit_assembly_line('dragon_processor')
.itemInputs('kubejs:dragon_infused_neuro_processing_unit', '2x kubejs:resonant_processor', '64x gtceu:fine_draconium_wire', '64x gtceu:advanced_smd_capacitor', '64x gtceu:fine_cosmic_neutronium_wire', 'kubejs:extremely_advanced_soc', 'kubejs:quantum_data_module', 'avaritia:eternal_singularity')
.itemOutputs('2x kubejs:dragon_processor')
.inputFluids(
    Fluid.of('gtceu:neutronium', 1152),
    Fluid.of('gtceu:hypoxylon', 1152),
    Fluid.of('gtceu:condensed_star_matter', 8124),
    Fluid.of('gtceu:naquadria', 8124)
)
.duration(200)
.EUt(GTValues.VA[GTValues.UIV])     
event.recipes.gtceu.circuit_assembly_line('dragon_processor_assembly')
.itemInputs('2x kubejs:draconic_printed_circuit_board', 'kubejs:dragon_processor', '64x gtceu:fine_draconium_wire', '64x gtceu:advanced_smd_capacitor', '64x gtceu:fine_cosmic_neutronium_wire', 'kubejs:extremely_advanced_soc', 'kubejs:draconium_heavy_plating', 'kubejs:quantum_data_module')
.itemOutputs('2x kubejs:dragon_processor_assembly')
.inputFluids(
    Fluid.of('gtceu:neutronium', 1152),
    Fluid.of('gtceu:hypoxylon', 1152),
    Fluid.of('gtceu:condensed_star_matter', 8124),
    Fluid.of('gtceu:naquadria', 8124)
)
.duration(400)
.EUt(GTValues.VA[GTValues.UIV])     
event.recipes.gtceu.circuit_assembly_line('dragon_processor_computer')
.itemInputs('2x kubejs:dragon_processor_assembly', 'kubejs:draconic_printed_circuit_board', '64x gtceu:fine_draconium_wire', '64x gtceu:advanced_smd_capacitor', '64x gtceu:fine_cosmic_neutronium_wire', 'kubejs:extremely_advanced_soc', '7x gtceu:dense_crystal_matrix_plate', '4x kubejs:cosmic_neutronium_heavy_plating', 'kubejs:quantum_data_module')
.itemOutputs('1x kubejs:dragon_processor_computer')
.inputFluids(
    Fluid.of('gtceu:neutronium', 1152),
    Fluid.of('gtceu:hypoxylon', 1152),
    Fluid.of('gtceu:condensed_star_matter', 8124),
    Fluid.of('gtceu:naquadria', 8124)
)
.duration(800)
.EUt(GTValues.VA[GTValues.UIV])   
event.recipes.gtceu.circuit_assembly_line('dragon_processor_mainframe')
.itemInputs('2x kubejs:dragon_processor_computer', '4x kubejs:draconium_heavy_plating', '64x gtceu:advanced_smd_capacitor', 'kubejs:dragon_infused_neuro_processing_unit', 'kubejs:extremely_advanced_soc', '4x kubejs:draconic_printed_circuit_board', '4x kubejs:neutronium_heavy_plating', 'avaritia:eternal_singularity', '16x avaritia:neutron_gear', 'kubejs:quantum_data_module')
.itemOutputs('1x kubejs:dragon_processor_mainframe')
.inputFluids(
    Fluid.of('gtceu:neutronium', 1152),
    Fluid.of('gtceu:hypoxylon', 1152),
    Fluid.of('gtceu:condensed_star_matter', 8124),
    Fluid.of('gtceu:naquadria', 8124)
)
.duration(1600)
.EUt(GTValues.VA[GTValues.UIV])  



// UXV CIRCUITS 

event.recipes.gtceu.circuit_assembly_line('cosmic_processor')
.itemInputs('2x kubejs:dragon_processor', '64x gtceu:fine_awakened_draconium_wire', '64x kubejs:complex_smd_capacitor', '8x gtceu:fine_pure_cosmic_matter_wire', 'kubejs:extremely_advanced_soc', 'kubejs:quantum_data_module', '32x avaritia:eternal_singularity')
.itemOutputs('2x kubejs:cosmic_processor')
.inputFluids(
    Fluid.of('gtceu:eternity', 10),
    Fluid.of('gtceu:cosmic_matter', 100),
    Fluid.of('gtceu:antimatter', 8124),
    Fluid.of('gtceu:meta_stable_molten_kevlar', 8124)
)
.duration(200)
.EUt(GTValues.VA[GTValues.UXV])     
event.recipes.gtceu.circuit_assembly_line('cosmic_processor_assembly')
.itemInputs('2x kubejs:cosmic_printed_circuit_board', '4x kubejs:cosmic_processor', '64x gtceu:fine_awakened_draconium_wire', '64x kubejs:complex_smd_capacitor', '16x gtceu:fine_pure_cosmic_matter_wire', 'kubejs:extremely_advanced_soc', 'kubejs:chaos_heavy_plating', 'kubejs:quantum_data_module')
.itemOutputs('2x kubejs:cosmic_processor_assembly')
.inputFluids(
    Fluid.of('gtceu:eternity', 10),
    Fluid.of('gtceu:cosmic_matter', 100),
    Fluid.of('gtceu:antimatter', 8124),
    Fluid.of('gtceu:meta_stable_molten_kevlar', 8124)
)
.duration(400)
.EUt(GTValues.VA[GTValues.UXV])     
event.recipes.gtceu.circuit_assembly_line('cosmic_processor_computer')
.itemInputs('4x kubejs:cosmic_processor_assembly', 'kubejs:cosmic_printed_circuit_board', '64x gtceu:fine_awakened_draconium_wire', '64x kubejs:complex_smd_capacitor', '24x gtceu:fine_pure_cosmic_matter_wire', 'kubejs:extremely_advanced_soc', '7x gtceu:dense_awakened_draconium_plate', '4x kubejs:chaos_heavy_plating', 'kubejs:quantum_data_module')
.itemOutputs('1x kubejs:cosmic_processor_computer')
.inputFluids(
    Fluid.of('gtceu:eternity', 10),
    Fluid.of('gtceu:cosmic_matter', 100),
    Fluid.of('gtceu:antimatter', 8124),
    Fluid.of('gtceu:meta_stable_molten_kevlar', 8124)
)
.duration(800)
.EUt(GTValues.VA[GTValues.UXV])   
event.recipes.gtceu.circuit_assembly_line('cosmic_processor_mainframe')
.itemInputs('2x kubejs:cosmic_processor_computer', '4x kubejs:awakened_draconium_heavy_plating', '64x kubejs:complex_smd_capacitor', 'kubejs:extremely_advanced_soc', '4x kubejs:cosmic_printed_circuit_board', '4x kubejs:chaos_heavy_plating', '4x avaritia:eternal_singularity', '2x gtceu:pure_cosmic_matter_gear', '64x gtceu:draconium_screw', 'kubejs:quantum_data_module')
.itemOutputs('1x kubejs:cosmic_processor_mainframe')
.inputFluids(
    Fluid.of('gtceu:eternity', 100),
    Fluid.of('gtceu:cosmic_matter', 1000),
    Fluid.of('gtceu:antimatter', 8124),
    Fluid.of('gtceu:meta_stable_molten_kevlar', 8124)
)
.duration(1600)
.EUt(GTValues.VA[GTValues.UXV])  

// M A X CIRCUITS

event.recipes.gtceu.circuit_assembly_line('dimensional_processor')
.itemInputs('2x kubejs:cosmic_processor', '64x gtceu:fine_pure_cosmic_matter_wire', '64x kubejs:complex_smd_capacitor', '64x gtceu:fine_pure_cosmic_matter_wire', '2x gtceu:dense_infinity_plate', 'kubejs:extremely_advanced_soc', 'kubejs:quantum_data_module', '32x avaritia:eternal_singularity')
.itemOutputs('1x kubejs:dimensional_processor')
.inputFluids(
    Fluid.of('gtceu:eternity', 64000),
    Fluid.of('gtceu:cosmic_matter', 800),
    Fluid.of('gtceu:universium', 16248),
    Fluid.of('gtceu:stellar_matter_plasma', 16248)
)
.duration(200)
.EUt(GTValues.VA[GTValues.OpV])     
event.recipes.gtceu.circuit_assembly_line('dimensional_processor_assembly')
.itemInputs('2x kubejs:dimensional_printed_circuit_board', '4x kubejs:dimensional_processor', '64x gtceu:fine_pure_cosmic_matter_wire', '64x gtceu:infinity_bolt', '64x kubejs:complex_smd_capacitor', '16x gtceu:fine_pure_cosmic_matter_wire', 'kubejs:extremely_advanced_soc', 'kubejs:eternity_heavy_plating', 'kubejs:quantum_data_module')
.itemOutputs('1x kubejs:dimensional_processor_assembly')
.inputFluids(
    Fluid.of('gtceu:eternity', 64000),
    Fluid.of('gtceu:cosmic_matter', 800),
    Fluid.of('gtceu:universium', 16248),
    Fluid.of('gtceu:stellar_matter_plasma', 16248)
)
.duration(400)
.EUt(GTValues.VA[GTValues.OpV])     
event.recipes.gtceu.circuit_assembly_line('dimensional_processor_computer')
.itemInputs('2x kubejs:dimensional_processor_assembly', 'kubejs:dimensional_printed_circuit_board', '64x gtceu:fine_pure_cosmic_matter_wire', '64x gtceu:infinity_bolt', '64x gtceu:infinity_bolt', '64x kubejs:complex_smd_capacitor', '24x gtceu:fine_pure_cosmic_matter_wire', 'kubejs:extremely_advanced_soc', '7x gtceu:dense_infinity_plate', '4x kubejs:eternity_heavy_plating', 'kubejs:quantum_data_module')
.itemOutputs('1x kubejs:dimensional_processor_computer')
.inputFluids(
    Fluid.of('gtceu:eternity', 64000),
    Fluid.of('gtceu:cosmic_matter', 800),
    Fluid.of('gtceu:universium', 16248),
    Fluid.of('gtceu:stellar_matter_plasma', 16248)
)
.duration(800)
.EUt(GTValues.VA[GTValues.OpV])   
event.recipes.gtceu.circuit_assembly_line('dimensional_processor_mainframe')
.itemInputs('4x gtceu:infinity_frame', '2x kubejs:dimensional_processor_computer', '16x kubejs:infinity_heavy_plating', '64x gtceu:infinity_bolt', '64x gtceu:infinity_bolt', '64x gtceu:infinity_bolt', '64x kubejs:complex_smd_capacitor', 'kubejs:extremely_advanced_soc', '4x kubejs:dimensional_printed_circuit_board', '4x kubejs:eternity_heavy_plating', '4x avaritia:eternal_singularity', '2x gtceu:infinity_gear', '64x gtceu:infinity_screw', 'kubejs:quantum_data_module')
.itemOutputs('1x kubejs:dimensional_processor_mainframe')
.inputFluids(
    Fluid.of('gtceu:eternity', 64000),
    Fluid.of('gtceu:cosmic_matter', 16000),
    Fluid.of('gtceu:universium', 16248),
    Fluid.of('gtceu:stellar_matter_plasma', 16248)
)
.duration(1600)
.EUt(GTValues.VA[GTValues.OpV])  

})
