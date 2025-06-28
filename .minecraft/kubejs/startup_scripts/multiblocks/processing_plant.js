GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('processing_plant')
        .category('multiblocks')
        .setEUIO('in')
        .setMaxIOSize(2, 8, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR)
})





GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('processing_plant', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('processing_plant')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT])
        .appearanceBlock(() => Block.getBlock('kubejs:high_power_casing'))
        .pattern(definition => FactoryBlockPattern.start()      
        .aisle('#C#C#', '#C#C#', '#CCC#', 'CCCCC', '#CCC#')
        .aisle('CCCCC', 'CBCBC', 'CBBBC', 'CBBBC', 'COOOC')
        .aisle('#CCC#', '#CBC#', 'CBBBC', 'CBBBC', 'COOOC')
        .aisle('CCCCC', 'CBCBC', 'CBBBC', 'CBBBC', 'COOOC')
        .aisle('#C#C#', '#C#C#', '#CCC#', 'CCKCC', '#CCC#')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where("B", Predicates.blocks('kubejs:high_power_crushing_wheels'))
            .where("O", Predicates.air())
            .where("C", Predicates.blocks('kubejs:high_power_casing')
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS, PartAbility.IMPORT_ITEMS, PartAbility.INPUT_LASER, PartAbility.INPUT_ENERGY, PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.MAINTENANCE, PartAbility.PARALLEL_HATCH))
                .or(Predicates.abilities(PartAbility.INPUT_LASER))
            )
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingRenderer("kubejs:block/casings/high_power_casing", 'gtceu:block/multiblock/generator/large_plasma_turbine', true)
})

