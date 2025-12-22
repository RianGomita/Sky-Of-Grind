GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('hyper_cutter', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('cutter')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:eternity_casing'))
        .pattern(definition => FactoryBlockPattern.start()
        .aisle("ABA", "BBB", "ABA")
        .aisle("CCC", "CCC", "CCC")
        .aisle("CCC", "CDC", "CCC")
        .aisle("CCC", "CKC", "CCC")
            .where('A', Predicates.any())
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks("gtceu:eternity_frame"))
            .where('D', Predicates.blocks("kubejs:trascendental_space_time_casing"))
            .where('C', Predicates.blocks("kubejs:eternity_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(
                    PartAbility.EXPORT_ITEMS, 
                    PartAbility.EXPORT_FLUIDS, 
                    PartAbility.IMPORT_ITEMS, 
                    PartAbility.IMPORT_FLUIDS, 
                    PartAbility.INPUT_LASER, 
                    PartAbility.INPUT_ENERGY, 
                    PartAbility.PARALLEL_HATCH)))
        .build()
        )
        .workableCasingModel("kubejs:block/casings/eternity_casing", 'gtceu:block/machines/cutter')
})