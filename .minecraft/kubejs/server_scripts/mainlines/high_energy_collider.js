ServerEvents.recipes(sog => {

sog.recipes.gtceu.high_energy_collider('proto_matter')
.itemInputs('64x gtceu:infinity_catalyst_dust')
.inputFluids('gtceu:cryogenic_neutron_flow 8000')
.outputFluids('gtceu:proto_matter 8000')
.outputFluids('gtceu:exotic_particle_suspension 16000')
.duration(20*100)
.EUt(GTValues.VA[GTValues.OpV]);

})