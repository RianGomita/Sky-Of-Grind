ServerEvents.recipes(event => {
    // Const

    
    // Individual Recipes

    event.recipes.gtceu.forge_hammer("diamondhammah")
        .itemInputs(
            "4x gtceu:tiny_diamond_dust")
        .itemOutputs(
            "minecraft:diamond")
        .duration(20 * 30)
        .EUt(2)

    event.recipes.gtceu.forge_hammer("dustex")
        .itemInputs(
            "minecraft:sand")
        .itemOutputs(
            "exdeorum:dust")
        .duration(15)
        .EUt(8)    
})