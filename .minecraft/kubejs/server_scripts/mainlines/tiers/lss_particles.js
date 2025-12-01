ServerEvents.recipes(sog => {

    sog.recipes.gtceu.atomiccompressor('compressed_hydrogen_ball')
    .inputFluids('gtceu:hydrogen 5000000')
    .notConsumable('gtceu:ball_casting_mold')
    .itemOutputs('kubejs:condensed_hydrogen_ball')
    .EUt((GTValues.VA[GTValues.UV]))
    .duration(20*20)
    sog.recipes.gtceu.large_synchrotron_switcher('particle_accelerator')
    .itemInputs('kubejs:condensed_hydrogen_ball')
    .chancedOutput('kubejs:quarks', 500, 100)
    .chancedOutput('kubejs:photon', 500, 100)
    .chancedOutput('kubejs:strange_quarks', 300, 100)
    .chancedOutput('kubejs:tau_neutrino', 300, 100)
    .chancedOutput('kubejs:graviton', 100, 100)
    .chancedOutput('kubejs:quantum_anomaly', 10, 10)
    .outputFluids('gtceu:hydrogen_plasma_plasma 144')
    .EUt((GTValues.VA[GTValues.UIV]))
    .duration(20*5)










})