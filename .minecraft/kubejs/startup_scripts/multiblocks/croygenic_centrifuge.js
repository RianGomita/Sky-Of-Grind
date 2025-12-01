GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('cryogenic_centrifuge')
        .category('multiblocks')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 4, 4)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MIXER)
})





GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('cryogenic_centrifuge', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('cryogenic_centrifuge')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:cryogenic_casing'))
        .pattern(definition => FactoryBlockPattern.start()      
        .aisle('#CCC#', 'OCCCO', 'OCCCO', 'OCCCO', '#CCC#', '#####')
        .aisle('CCCCC', 'C###C', 'C###C', 'C###C', 'CCCCC', '##O##')
        .aisle('CCCCC', 'C###C', 'C###C', 'C###C', 'CCCCC', '#OOO#')
        .aisle('CCCCC', 'C###C', 'C###C', 'C###C', 'CCCCC', '##O##')
        .aisle('#CCC#', 'OCCCO', 'OCKCO', 'OCCCO', '#CCC#', '#####')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where("O", Predicates.blocks('gtceu:europium_frame'))
            .where("C", Predicates.blocks('kubejs:cryogenic_casing')
            .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            .or(Predicates.abilities(PartAbility.MAINTENANCE, PartAbility.PARALLEL_HATCH)) 
            )
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingModel("kubejs:block/casings/cryogenic_casing", 'gtceu:block/machines/centrifuge')
})