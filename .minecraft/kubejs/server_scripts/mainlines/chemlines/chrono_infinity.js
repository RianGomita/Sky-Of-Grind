ServerEvents.recipes(sog => {

sog.recipes.gtceu.high_energy_collider('quantum_stretched_lattice')
    .inputFluids('gtceu:proto_matter 200', 'gtceu:universium 576', 'gtceu:neon_plasma_plasma 1000', 'gtceu:neutron_flux_plasma 1000', 'gtceu:tungsten_plasma_plasma 1000')
    .itemInputs('8x gtceu:pure_cosmic_matter_dust')
    .itemOutputs('1x kubejs:quantum_stretched_lattice')
    .duration(20*1)
    .EUt(GTValues.VA[GTValues.UXV]);
sog.recipes.gtceu.high_energy_collider('temporal_singularity_core')
    .inputFluids('gtceu:infinity 200', 'gtceu:molten_space_time 576', 'gtceu:plutonium_239_plasma_plasma 1000', 'gtceu:iridium_plasma_plasma 1000', 'gtceu:osmium_plasma_plasma 1000')
    .itemInputs('8x gtceu:eternity_dust')
    .itemOutputs('1x kubejs:temporal_singularity_core')
    .duration(20*1)
    .EUt(GTValues.VA[GTValues.UXV]);
sog.recipes.gtceu.high_energy_collider('stellar_flux_binder')
    .inputFluids('gtceu:quark_gluon_plasma 200', 'gtceu:exotic_particle_suspension 576')
    .itemInputs('16x gtceu:solar_radiation_alloy_dust')
    .itemOutputs('1x kubejs:stellar_flux_binder')
    .duration(20*1)
    .EUt(GTValues.VA[GTValues.UXV]);
sog.recipes.gtceu.high_energy_collider('chronon_shard')
    .inputFluids('gtceu:decay_stabilized_plasma 1000', 'gtceu:infinity 72', 'gtceu:exotic_particle_suspension 576')
    .itemInputs('2x kubejs:temporal_singularity_core', '2x kubejs:quantum_stretched_lattice')
    .itemOutputs('1x kubejs:chronon_shard')
    .duration(20*10)
    .EUt(GTValues.VA[GTValues.UXV]);
sog.recipes.gtceu.high_energy_collider('chrono_dust')
    .inputFluids('gtceu:infinity 72')
    .itemInputs('2x kubejs:chronon_shard', '4x kubejs:stellar_flux_binder')
    .itemOutputs('4x gtceu:chrono_infinity_dust')
    .duration(20*10)
    .EUt(GTValues.VA[GTValues.UXV]);

})