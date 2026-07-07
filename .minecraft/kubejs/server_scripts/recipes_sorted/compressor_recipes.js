ServerEvents.recipes(event => {
    // Const

    const gemsdusttoplate = [
        "lapis",
        "sodalite",
        "lazurite"]
    gemsdusttoplate.forEach(gem => {
        event.recipes.gtceu.compressor(`${gem}_plate`)
            .itemInputs(
                `gtceu:${gem}_dust`)
            .itemOutputs(
                `gtceu:${gem}_plate`)
            .duration(20 * 15)
            .EUt(2)
    })


    // Individual Recipes

    event.recipes.gtceu.compressor("diamondcompressing")
        .itemInputs(
            "4x minecraft:coal_block")
        .itemOutputs(
            "gtceu:tiny_diamond_dust")
        .duration(20 * 5)
        .EUt(2)

    event.recipes.gtceu.compressor("flux_block")
        .itemInputs(
            "9x fluxnetworks:flux_dust")
        .itemOutputs(
            "fluxnetworks:flux_block")
        .duration(20 * 25)
        .EUt(GTValues.VA[GTValues.UHV]);
})