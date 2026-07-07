ServerEvents.recipes(event => {
    // Const


    // Individual Recipes

    event.recipes.gtceu.cutter("press")
        .itemInputs(
            "16x gtceu:certus_quartz_plate")
        .inputFluids(
            "gtceu:lubricant 1000")
        .itemOutputs(
            "ae2:name_press")
        .duration(20 * 120)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.cutter("sapphire_wafer")
        .itemInputs(
            "kubejs:sapphire_boule")
        .inputFluids(
            "gtceu:lubricant 1000")
        .itemOutputs(
            "64x kubejs:sapphire_wafer")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(20 * 180)
        .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.cutter("draconium_lens")
        .inputFluids(
            "gtceu:lubricant 1000")
        .itemInputs(
            "gtceu:draconium_plate")
        .itemOutputs(
            "gtceu:draconium_lens")
        .duration(20*120)
        .EUt((GTValues.VA[GTValues.UIV]))

    event.recipes.gtceu.cutter("antimatter_wafer")
        .inputFluids(
            "gtceu:lubricant 1000")
        .itemInputs(
            "kubejs:antimatter_boule")
        .itemOutputs(
            "64x kubejs:antimatter_wafer")
        .itemOutputs(
            "64x kubejs:antimatter_wafer")
        .duration(20 * 150)
        .EUt((GTValues.VA[GTValues.UV]))

    event.recipes.gtceu.cutter("easoc_chip")
        .inputFluids(
            "gtceu:lubricant 1000")
        .itemInputs(
            "kubejs:extremely_advanced_soc_wafer")
        .itemOutputs(
            "5x kubejs:extremely_advanced_soc")
        .duration(20 * 45)
        .EUt((GTValues.VA[GTValues.UHV]))
})