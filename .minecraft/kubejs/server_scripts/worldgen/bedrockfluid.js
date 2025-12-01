GTCEuServerEvents.fluidVeins(event => {

    event.add('gtceu:kaemite_bedrock', vein => {
        vein.dimensions('ad_astra:mercury')
        vein.fluid(() => Fluid.of('gtceu:kaemite').fluid)
        vein.weight(600)
        vein.minimumYield(120)
        vein.maximumYield(720)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    });
    event.add('gtceu:raw_cosmic_matter_saturn', vein => {
        vein.dimensions('ad_extendra:saturn')
        vein.fluid(() => Fluid.of('gtceu:raw_cosmic_matter').fluid)
        vein.weight(600)
        vein.minimumYield(120)
        vein.maximumYield(720)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    });
    event.add('gtceu:salt_water_overworld', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('gtceu:salt_water').fluid)
        vein.weight(35)
        vein.minimumYield(50)
        vein.maximumYield(150)
        vein.depletionAmount(1)
        vein.depletionChance(100)
        vein.depletedYield(15)
    });
        event.add('gtceu:deep_water_glacio', vein => {
        vein.dimensions('ad_extendra:glacio')


        vein.fluid(() => Fluid.of('gtceu:deep_water').fluid) 
        vein.weight(600)
        vein.minimumYield(120)
        vein.maximumYield(720)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    });
})