ServerEvents.recipes(event => {

    //Multiblocks






    //Emmiters and Capsules

	    event.recipes.gtceu.extreme_cracking_unit('overheated_blaze')
            .inputFluids('gtceu:blaze 10000', 'gtceu:thorium_plasma_plasma 5000')
            .chancedInput('2x gtceu:neutron_reflector', 5000, 0)
            .chancedInput('2x gtceu:neutron_reflector', 2500, 0)
            .chancedInput('2x gtceu:neutron_reflector', 1250, 0)
            .outputFluids('gtceu:overheated_blaze 5000')
            .duration(20*12)
            .EUt((GTValues.VA[GTValues.UIV]))







        event.recipes.gtceu.large_synchrotron_switcher('exquisite_synchronized_chronon_gem')
            .itemInputs('8x gtceu:exquisite_chronon_gem', '2x kubejs:entropic_cosmic_mesh', "2x ae2:quantum_entangled_singularity")
            .notConsumable('kubejs:spacetime_data')
            .itemOutputs('4x gtceu:exquisite_synchronized_chronon_gem')
            .duration(20*10)
            .EUt(GTValues.VA[GTValues.UXV])

        event.recipes.gtceu.laser_engraver('perfectly_polished_sapphire_wafer')
            .itemInputs('kubejs:sapphire_wafer')
            .notConsumable('gtceu:synchronized_chronon_lens')
            .itemOutputs('kubejs:perfectly_polished_sapphire_wafer')
            .duration(20*10)
            .EUt(GTValues.VA[GTValues.UXV])



        event.recipes.gtceu.high_pressure_reactor('silver_doped_sapphire_wafer')
            .inputFluids("gtceu:thorium_plasma_plasma 1000")
            .itemInputs('2x gtceu:nanoreinforced_silver_dust', "1x kubejs:perfectly_polished_sapphire_wafer")
            .perTick(true)
            .inputFluids("gtceu:air 250")
            .perTick(false)
            .itemOutputs('1x kubejs:silver_doped_sapphire_wafer')
            .duration(20*15)
            .EUt((GTValues.VA[GTValues.UIV]))





        event.recipes.gtceu.eternity_fusion('thallium_fusion')
            .inputFluids('gtceu:cadmium 144', "gtceu:arsenic 144")
            .outputFluids('gtceu:thallium 144')
            .duration(20*5)
            .EUt(GTValues.VA[GTValues.UIV]);

        event.recipes.gtceu.electric_blast_furnace('thallium_doped_sodium_iodine')
            .itemInputs("28x gtceu:sodium_iodine_dust", "2x gtceu:thallium_iodine_dust")
            .inputFluids('gtceu:argon 500')
            .itemOutputs('30x gtceu:thallium_doped_sodium_iodine_dust')
            .duration(20*250)
            .blastFurnaceTemp(6003)
            .EUt(GTValues.VA[GTValues.UHV])



        event.recipes.gtceu.stasis_phase_shifter('tachyon_condensate')
            .itemInputs('64x kubejs:woven_space_time')
            .inputFluids("gtceu:antimatter 20000")
            .outputFluids('gtceu:tachyon_condensate 25000')
            .duration(20*10)
            .EUt(GTValues.VA[GTValues.UXV])

        event.recipes.gtceu.large_synchrotron_switcher('tachyon')
            .inputFluids("gtceu:tachyon_condensate 1000")
            .chancedOutput('kubejs:tachyon', 1500, 0)
            .chancedOutput('kubejs:graviton', 750, 0)
            .chancedOutput('kubejs:quantum_anomaly', 500, 0)
            .chancedOutput('kubejs:energized_quantum_anomaly', 250, 0)
            .duration(20*5)
            .EUt(GTValues.VA[GTValues.UXV])

        event.recipes.gtceu.laser_beam_containment_chamber('rgb_spectre_ultimate_mirror')
            .inputFluids("gtceu:tachyon_condensate 1000")
            .chancedInput('6x kubejs:emitter_red', 1250, 0)
            .chancedInput('6x kubejs:emitter_green', 1250, 0)
            .chancedInput('6x kubejs:emitter_blue', 1250, 0)
            .chancedItemInputLogic('or')
            .itemInputs('2x kubejs:multispectral_monochrome_mirror')
            .itemInputs('2x kubejs:multispectral_monochrome_mirror')
            .itemInputs('2x kubejs:multispectral_monochrome_mirror')
            .chancedOutput('6x kubejs:red_spectre_ultimate_mirror', 3333, 0)
            .chancedOutput('6x kubejs:green_spectre_ultimate_mirror', 3333, 0)
            .chancedOutput('6x kubejs:blue_spectre_ultimate_mirror', 3333, 0)
            .chancedItemOutputLogic('xor')
            .duration(20*60)
            .EUt(GTValues.VA[GTValues.OpV])

        event.recipes.gtceu.blackhole_holder('space_time_distorting_ultimate_mirror')
            .itemInputs("3x kubejs:red_spectre_ultimate_mirror", "3x kubejs:green_spectre_ultimate_mirror", "3x kubejs:blue_spectre_ultimate_mirror", "16x kubejs:tachyon")
            .inputFluids('gtceu:stabilized_naquadria_plasma_plasma 1500', "gtceu:astral_space_time_plasma 500")
            .itemOutputs('9x kubejs:space_time_distorting_ultimate_mirror')
            .duration(20*5)
            .EUt(GTValues.VA[GTValues.UXV])

        event.recipes.gtceu.laser_beam_containment_chamber('laser_containment_cell_rgb')
            .inputFluids("gtceu:astral_space_time_plasma 576")
            .perTick(true)
            .inputFluids("gtceu:argon_plasma 25")
            .perTick(false)
            .chancedInput('6x kubejs:emitter_red', 2500, 0)
            .chancedInput('6x kubejs:emitter_green', 2500, 0)
            .chancedInput('6x kubejs:emitter_blue', 2500, 0)
            .chancedItemInputLogic('or')
            .itemInputs('8x kubejs:space_time_distorting_ultimate_mirror')
            .itemInputs('1x kubejs:gravitational_fluctuation_module')
            .itemInputs('4x kubejs:eternity_heavy_plating')
            .chancedOutput('kubejs:laser_containment_cell_red', 3333, 0)
            .chancedOutput('kubejs:laser_containment_cell_green', 3333, 0)
            .chancedOutput('kubejs:laser_containment_cell_blue', 3333, 0)
            .chancedItemOutputLogic('xor')
            .duration(20*10)
            .EUt(GTValues.VA[GTValues.OpV])

    //PCB MK2

         event.recipes.gtceu.implosion_compressor('nano_diamond')
            .itemInputs("64x gtceu:carbon_nanotubes_dust", "4x kubejs:compressed_industrial_tnt")
            .itemOutputs("4x gtceu:exquisite_nano_diamond_gem")
            .duration(20*0.5)
            .EUt(GTValues.VA[GTValues.UIV])

    	event.recipes.gtceu.chemical_plant('activated_nano_diamond')
            .itemInputs("16x gtceu:nano_diamond_dust", "32x gtceu:resonant_essence_dust")
            .notConsumable('kubejs:chemical_tier_four')
            .inputFluids('gtceu:naquadria_plasma_mk2_plasma 500', "gtceu:stropharic_hypoxylon 1500")
            .itemOutputs("16x gtceu:activated_nano_diamond_dust")
            .duration(20*35)
            .EUt((GTValues.VA[GTValues.UEV]))

        event.recipes.gtceu.vacuum_freezer('superfluid_helium')
            .inputFluids('gtceu:helium_3 1000', "gtceu:liquid_nitrogen 500")
            .outputFluids('gtceu:superfluid_helium 250')
            .duration(20*15)
            .EUt((GTValues.VA[GTValues.UEV]))

        event.recipes.gtceu.quantum_station('stabilized_naquadria_plasma_v1')
            .inputFluids("gtceu:oganesson 32", "gtceu:naquadria_plasma_plasma 1000")
            .notConsumable("kubejs:quantum_data_module")
            .outputFluids('gtceu:stabilized_naquadria_plasma_plasma 250')
            .totalCWU(256*5*200)
            .CWUt(128)
            .EUt((GTValues.VA[GTValues.UEV]))

        event.recipes.gtceu.quantum_station('stabilized_naquadria_plasma_v2')
            .inputFluids("gtceu:oganesson 32", "gtceu:naquadria_plasma_mk2_plasma")
            .notConsumable("kubejs:quantum_data_module")
            .outputFluids('gtceu:stabilized_naquadria_plasma_plasma 500')
            .totalCWU(128*5*200)
            .CWUt(64)
            .EUt((GTValues.VA[GTValues.UEV]))

        event.recipes.gtceu.quantum_station('stabilized_naquadria_plasma_v3')
            .inputFluids("gtceu:oganesson 32", "gtceu:naquadria_plasma_mk3_plasma")
            .notConsumable("kubejs:quantum_data_module")
            .outputFluids('gtceu:stabilized_naquadria_plasma_plasma 1000')
            .totalCWU(64*5*200)
            .CWUt(32)
            .EUt((GTValues.VA[GTValues.UEV]))

        event.recipes.gtceu.radiation_chamber('ion_implanted_nanothermal_fluid')
            .inputFluids('gtceu:unprocessed_nanothermal_fluid 2000', "gtceu:tritium 1000")
            .chancedInput('4x gtceu:draconium_bolt', 2500, 0)
            .outputFluids('gtceu:ion_implanted_nanothermal_fluid 2000')
            .duration(20*50)
            .EUt((GTValues.VA[GTValues.UEV]))

    /// PCB MK3

        event.recipes.gtceu.extractinator('spatial_flux')
            .circuit(2)
            .itemInputs('64x kubejs:ultra_stable_cosmic_strings')
            .outputFluids('gtceu:spatial_flux 100')
            .duration(20*25)
            .EUt(GTValues.VA[GTValues.OpV])

        event.recipes.gtceu.stasis_phase_shifter('stabilized_spatial_flux')
            .inputFluids('gtceu:spatial_flux 10000', "advanced_ae:quantum_infusion_source 2500")
            .itemInputs('4x kubejs:stabilized_collapsed_singularity')
            .outputFluids('gtceu:stabilized_spatial_flux 5000')
            .duration(20*150)
            .EUt(GTValues.VA[GTValues.UXV])

        event.recipes.gtceu.catalyst_reactor('temporal_flux_mixture')
            .inputFluids('gtceu:stabilized_spatial_flux 2000', "gtceu:tachyon_condensate 500")
            .itemInputs("8x gtceu:quantum_activated_thermal_blend_dust", "8x gtceu:quantum_activated_thermal_blend_dust", "8x gtceu:quantum_activated_thermal_blend_dust", '8x gtceu:exquisite_synchronized_chronon_gem')
            .outputFluids('gtceu:temporal_flux_mixture 3000')
            .duration(20*10)
            .EUt(GTValues.VA[GTValues.OpV])

        event.recipes.gtceu.laser_synchronizer_chiller('stabilized_temporal_flux_mixture')
            .inputFluids("gtceu:temporal_flux_mixture 1000", "gtceu:molten_space_time 288")
            .perTick(true)
            .inputFluids("gtceu:hydrogen_plasma_plasma 25", "gtceu:hypercharged_nebular_plasma 5")
            .perTick(false)
            .chancedInput('kubejs:laser_containment_cell_red', 10, 0)
            .chancedInput('kubejs:laser_containment_cell_green', 10, 0)
            .chancedInput('kubejs:laser_containment_cell_blue', 10, 0)
            .chancedItemInputLogic('or')
            .outputFluids('gtceu:stabilized_temporal_flux_mixture 750')
            .duration(20*200)
            .EUt(GTValues.VA[GTValues.OpV])

        event.recipes.gtceu.large_synchrotron_switcher('time_looped_flux')
            .inputFluids('gtceu:stabilized_temporal_flux_mixture 1000')
            .notConsumable('kubejs:spacetime_data')
            .notConsumable('kubejs:watch_of_flowing_time')
            .outputFluids('gtceu:time_looped_flux 1000')
            .duration(20*15)
            .EUt(GTValues.VA[GTValues.UXV])

        event.recipes.gtceu.stasis_field('reverse_temporal_flux')
            .inputFluids('gtceu:time_looped_flux 1000')
            .outputFluids('gtceu:reverse_temporal_flux 500')
            .duration(20*30)
            .EUt(GTValues.VA[GTValues.UXV])

        event.recipes.gtceu.laser_synchronizer_chiller('pcb_coolant_mk3')
            .inputFluids("gtceu:time_looped_flux 5000", "gtceu:reverse_temporal_flux 5000", "gtceu:pcb_coolant_mk2 2500")
            .perTick(true)
            .inputFluids("gtceu:cryogenic_neutron_flow 25", "gtceu:stabilized_naquadria_plasma_plasma 50")
            .perTick(false)
            .chancedInput('kubejs:laser_containment_cell_red', 20, 0)
            .chancedInput('kubejs:laser_containment_cell_green', 20, 0)
            .chancedInput('kubejs:laser_containment_cell_blue', 20, 0)
            .chancedItemInputLogic('or')
            .outputFluids('gtceu:pcb_coolant_mk3 10000')
            .duration(20*100)
            .EUt(GTValues.VA[GTValues.OpV])
})