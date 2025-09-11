ServerEvents.recipes(event => {

    event.recipes.gtceu.pocket_universe_destroyer('eternity_uhv')
        .perTick(true)
        .inputFluids('gtceu:quark_gluon_plasma 16')
        .perTick(false)
        .itemInputs('gtceu:uhv_world_accelerator', 'gtceu:uhv_uhv_parallel_hatch')
        .notConsumable('kubejs:eternity_data')
        .outputFluids('gtceu:molten_space_time 1152', 'gtceu:eternity 288', 'gtceu:universium 576', 'gtceu:stellar_matter_plasma 576')
        .circuit(1)
        .duration(640)
        .EUt(31541166)
    
    event.recipes.gtceu.pocket_universe_destroyer('eternity_uev')
        .perTick(true)
        .inputFluids('gtceu:quark_gluon_plasma 16')
        .perTick(false)
        .itemInputs('gtceu:uev_world_accelerator', 'gtceu:uev_uev_parallel_hatch')
        .notConsumable('kubejs:eternity_data')
        .outputFluids('gtceu:molten_space_time 4608', 'gtceu:eternity 1152', 'gtceu:universium 2304', 'gtceu:stellar_matter_plasma 2304')
        .circuit(1)
        .duration(320)
        .EUt(31541166)

    event.recipes.gtceu.pocket_universe_destroyer('eternity_uiv')
        .perTick(true)
        .inputFluids('gtceu:quark_gluon_plasma 16')
        .perTick(false)
        .itemInputs('gtceu:uiv_world_accelerator', 'gtceu:uiv_uiv_parallel_hatch')
        .notConsumable('kubejs:eternity_data')
        .outputFluids('gtceu:molten_space_time 18432', 'gtceu:eternity 4608', 'gtceu:universium 9216', 'gtceu:stellar_matter_plasma 9216')
        .circuit(1)
        .duration(160)
        .EUt(31541166)

    event.recipes.gtceu.pocket_universe_destroyer('eternity_big_uhv')
        .perTick(true)
        .inputFluids('gtceu:quark_gluon_plasma 32')
        .perTick(false)
        .itemInputs('16x gtceu:uhv_world_accelerator','16x gtceu:uhv_uhv_parallel_hatch', 'kubejs:eternity_data')
        .outputFluids('gtceu:eternity 9216')
        .circuit(2)
        .duration(4000)
        .EUt(31541166)

    event.recipes.gtceu.pocket_universe_destroyer('eternity_big_uev')
        .perTick(true)
        .inputFluids('gtceu:quark_gluon_plasma 32')
        .perTick(false)
        .itemInputs('16x gtceu:uev_world_accelerator','16x gtceu:uev_uev_parallel_hatch', 'kubejs:eternity_data')
        .outputFluids('gtceu:eternity 36864')
        .circuit(2)
        .duration(2000)
        .EUt(31541166)

    event.recipes.gtceu.pocket_universe_destroyer('eternity_big_uiv')
        .perTick(true)
        .inputFluids('gtceu:quark_gluon_plasma 32')
        .perTick(false)
        .itemInputs('16x gtceu:uiv_world_accelerator','16x gtceu:uiv_uiv_parallel_hatch', 'kubejs:eternity_data')
        .outputFluids('gtceu:eternity 147456')
        .circuit(2)
        .duration(1000)
        .EUt(31541166)
    
    event.recipes.gtceu.large_synchrotron_switcher('degenerate_gluon_condensate')
        .itemInputs('4x kubejs:quarks', '4x kubejs:strange_quarks')
        .notConsumable("kubejs:spacetime_data")
        .outputFluids('gtceu:degenerate_gluon_condensate 4')
        .duration(16)
        .EUt(31541166)

    event.recipes.gtceu.plasma_nexus('quark_gluon')
        .inputFluids('gtceu:cosmic_matter 144', 'gtceu:hyper_ionized_helium_plasma 2000', 'gtceu:degenerate_gluon_condensate 480')
        .itemInputs('64x kubejs:quarks', '16x kubejs:strange_quarks')
        .outputFluids('gtceu:quark_gluon_plasma 256')
        .duration(1024)
        .EUt(GTValues.VA[GTValues.UIV])
    
    event.recipes.gtceu.quantum_entanglement_decrypter('spacetime_data')
        .itemInputs('16x gtceu:space_time_block', 'kubejs:quantum_data_module')
        .itemOutputs('kubejs:spacetime_data')
        .duration(4800)
        .EUt(126164664)
    
    event.recipes.gtceu.quantum_entanglement_encrypter('eternity_data')
        .itemInputs('kubejs:watch_of_flowing_time', 'kubejs:quantum_data_module')
        .itemOutputs('kubejs:eternity_data')
        .duration(4800)
        .EUt(504658656)

    event.recipes.gtceu.assembler('watch_of_flowing_time')
        .itemInputs('minecraft:clock', '4x kubejs:woven_space_time', '3x gtceu:small_eternity_gear', '2x gtceu:eternity_gear', 'gtceu:chaos_lens', 'gtceu:pure_cosmic_matter_rod', 'gtceu:long_pure_cosmic_matter_rod', '12x gtceu:exquisite_echo_shard_gem', '64x kubejs:dragon_processor_mainframe')
        .itemOutputs('kubejs:watch_of_flowing_time')
        .duration(100)
        .EUt(126164664)

    event.recipes.gtceu.atomiccompressor('disordered_cosmic_string_sheet')
        .itemInputs('kubejs:gravitational_fluctuation_module', '2048x kubejs:ultra_stable_cosmic_strings')
        .inputFluids('advanced_ae:quantum_infusion_source')
        .itemOutputs('kubejs:entropic_cosmic_mesh')
        .duration(500)
        .EUt(1971322)

    event.recipes.gtceu.laser_engraver('mesh_alignment')
        .itemInputs('kubejs:entropic_cosmic_mesh')
        .notConsumable('gtceu:nether_star_lens')
        .itemOutputs('2x kubejs:woven_space_time')
        .duration(1200)
        .EUt(126164664)

    event.recipes.gtceu.macerator('stable_cosmic_strings')
        .itemInputs('kubejs:stable_matter')
        .itemOutputsRanged('kubejs:ultra_stable_cosmic_strings', 2, 5)
        .duration(20)
        .EUt(480)

    // Controller Recipe:

    event.recipes.gtceu.assembly_line('pocket_universe_destroyer')
        .itemInputs('gtceu:large_synchrotron_switcher', 'gtceu:uxv_field_generator', '16x kubejs:energized_quantum_anomaly', '32x kubejs:highly_superconducting_coil_block', '2x gtceu:infinity_frame', '2x kubejs:uxv_voltage_coil', '16x gtceu:pure_cosmic_matter_gear', 'kubejs:watch_of_flowing_time')
        .inputFluids('gtceu:quark_gluon_plasma 1440', 'gtceu:heavy_duty_alloy_t4 576', 'gtceu:hypoxylon 9216')
        .itemOutputs('gtceu:pocket_universe_destroyer')
        .duration(3000)
        .EUt(504658656)

    event.shaped(
        'gtceu:uhv_world_accelerator',
        ['FSF', 'ECE', 'FSF'],
        {
            F: 'gtceu:uhv_field_generator',
            S: 'gtceu:uhv_sensor',
            E: 'gtceu:uhv_emitter',
            C: 'gtceu:uhv_machine_hull'

        })

    event.shaped(
        'gtceu:uev_world_accelerator',
        ['FSF', 'ECE', 'FSF'],
        {
            F: 'gtceu:uev_field_generator',
            S: 'gtceu:uev_sensor',
            E: 'gtceu:uev_emitter',
            C: 'gtceu:uev_machine_hull'

        })
        
    event.shaped(
        'gtceu:uiv_world_accelerator',
        ['FSF', 'ECE', 'FSF'],
        {
            F: 'gtceu:uiv_field_generator',
            S: 'gtceu:uiv_sensor',
            E: 'gtceu:uiv_emitter',
            C: 'gtceu:uiv_machine_hull'

        })        
})