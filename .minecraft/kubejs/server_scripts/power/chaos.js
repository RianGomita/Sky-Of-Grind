ServerEvents.recipes(sog => {

    sog.recipes.gtceu.electric_blast_furnace('reactive_chaos_dust')
    .itemInputs('2x gtceu:cosmic_neutronium_dust', '4x kubejs:reactive_blend')
    .inputFluids('gtceu:aqua_regia 1000')
    .itemOutputs('8x kubejs:reactive_chaos_dust')
    .blastFurnaceTemp(15200)
    .duration(20*10)
    .EUt(GTValues.VA[GTValues.UXV]);
    sog.recipes.gtceu.csr('chaotic_pellet')
    .chancedInput('kubejs:reactive_chaos_pellet', 1000, 0)
    .chancedOutput('kubejs:reactive_chaos_waste', 500, 0)
    .duration(20*20)
    .EUt(-4*(GTValues.V[GTValues.MAX]))
    sog.recipes.gtceu.csr('infused_chaotic_pellet')
    .itemInputs('kubejs:infused_reactive_chaos_pellet')
    .duration(20*800)
    .EUt(-549755813888)

})