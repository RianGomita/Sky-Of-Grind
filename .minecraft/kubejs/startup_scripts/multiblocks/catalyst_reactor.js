GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('catalyst_reactor')
        .category('multiblocks')
        .setEUIO('in')
        .setMaxIOSize(4, 2, 2, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MIXER)
})





GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('catalyst_reactor', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('catalyst_reactor')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:cryogenic_casing'))
        .pattern(definition => FactoryBlockPattern.start()      
        .aisle('CCCCCCCCC', 'CBBBBBBBC', 'CBBBBBBBC', 'CBBBBBBBC', 'CCCCCCCCC')
        .aisle('CCCCCCCCC', 'A#######A', 'A#######A', 'A#######A', 'CCCCCCCCC')
        .aisle('CCCCCCCCC', 'A#######A', 'AOOOOOOOA', 'A#######A', 'CCCCCCCCC')
        .aisle('CCCCCCCCC', 'A#######A', 'A#######A', 'A#######A', 'CCCCCCCCC')
        .aisle('CCCCKCCCC', 'CBBBBBBBC', 'CBBBBBBBC', 'CBBBBBBBC', 'CCCCCCCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where("O", Predicates.blocks('gtceu:infinity_frame'))
            .where("B", Predicates.blocks('gtceu:tempered_glass'))
            .where("A", Predicates.blocks('kubejs:advanced_air_intake_hatch'))
            .where("C", Predicates.blocks('kubejs:kevlar_casing')
            .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            .or(Predicates.abilities(PartAbility.MAINTENANCE)) 
            )
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingModel("kubejs:block/casings/kevlar_casing", 'gtceu:block/machines/replicator')
})