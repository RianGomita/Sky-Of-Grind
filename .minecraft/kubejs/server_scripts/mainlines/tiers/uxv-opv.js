ServerEvents.recipes(sog => {

sog.recipes.gtceu.large_chemical_reactor('chrono_infinity_printed_circuit_board')
.inputFluids('gtceu:chrono_infinity 144', 'gtceu:infinity 144')
.itemInputs('kubejs:cosmic_circuit_board', '64x gtceu:solar_radiation_alloy_bolt')
.itemOutputs('kubejs:chrono_infinity_printed_circuit_board')
.EUt((GTValues.VA[GTValues.OpV]))
.duration(20*90)

})