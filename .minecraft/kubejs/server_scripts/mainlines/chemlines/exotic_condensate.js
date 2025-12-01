       ServerEvents.recipes(sog => {

       sog.recipes.gtceu.catalyst_reactor('neutron_flux')
        .inputFluids('gtceu:hyper_ionized_helium_plasma 32', 'gtceu:californite 576')
	    .chancedInput('2x gtceu:neutron_reflector', 3333, 0)
        .chancedInput('2x gtceu:neutron_reflector', 2500, 0)
        .chancedInput('2x gtceu:neutron_reflector', 1111, 0)
        .itemInputs('16x gtceu:quantum_activated_thermal_blend_dust')
        .outputFluids('gtceu:kerosene_based_heating_fluid 2000')
        .duration(20*1)
        .EUt(GTValues.VA[GTValues.UXV]);

       })