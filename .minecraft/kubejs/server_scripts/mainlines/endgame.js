ServerEvents.recipes(sog => {

sog.recipes.gtceu.electric_blast_furnace('inifnity')
.itemInputs('64x gtceu:infinity_catalyst_dust')
.itemInputs('64x gtceu:infinity_catalyst_dust')
.itemInputs('64x gtceu:infinity_catalyst_dust')
.inputFluids('gtceu:universium 16000')
.inputFluids('gtceu:stellar_matter_plasma 32000')
.inputFluids('gtceu:eternity 16000')
.inputFluids('gtceu:molten_space_time 8000')
.itemOutputs('avaritia:infinity_ingot')
.blastFurnaceTemp(15450)
.duration(1400)
.EUt(GTValues.VA[GTValues.OpV]);

sog.recipes.gtceu.atomic_melting_module('molten_space_time')
.perTick(true)
.inputFluids('gtceu:kerosene_based_heating_fluid 200')
.perTick(false)
.itemInputs('4x gtceu:space_time_ingot')
.outputFluids('gtceu:molten_space_time 144')
.duration(20*20)
.EUt(GTValues.VA[GTValues.OpV]);

})