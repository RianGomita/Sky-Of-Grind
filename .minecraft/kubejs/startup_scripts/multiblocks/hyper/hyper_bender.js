GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('hyper_bender', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('bender')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:eternity_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("BBBBBBBBBBBB", "BCCCCCCCCCCB", "BCCCCCCCCCCB", "BCCCCCCCCCCB", "BBBBBBBBBBBB")
            .aisle("BCCCCCCCCCCB", "CDDDCDDDDDDC", "CEEECFFFFFFC", "CDDDCDDDDDDC", "BGGGBCCCCCCB")
            .aisle("BCCCCCCCCCCB", "CDDDCDDDDDDC", "CEEECFFFFFFC", "CDDDCDDDDDDC", "BGGGBCCCCCCB")
            .aisle("BCCCCCCCCCCB", "CDDDCDDDDDDC", "CEEECFHHHHFC", "CDDDCDDDDDDC", "BGGGBCCCCCCB")
            .aisle("BBBBBBBBBBBB", "BCCCBCCCCCCB", "BCICBCGGGGCB", "BCCCBCCCCCCB", "BBBBBBBBBBBB")
                .where("I", Predicates.controller(Predicates.blocks(definition.get())))
                .where("B", Predicates.blocks("kubejs:semi_stable_casing"))
                .where("D", Predicates.blocks("kubejs:eternity_casing"))
                .where("E", Predicates.blocks("kubejs:trascendental_space_time_casing"))
                .where("F", Predicates.blocks("kubejs:stellar_powered_casing"))
                .where("G", Predicates.blocks("kubejs:fusion_glass_mk2"))
                .where("H", Predicates.blocks("gtceu:tungstensteel_gearbox"))
                .where("C", Predicates.blocks("gtceu:stress_proof_casing")
                    .or(Predicates.abilities(
                        PartAbility.IMPORT_ITEMS,
                        PartAbility.IMPORT_FLUIDS,
                        PartAbility.EXPORT_ITEMS,
                        PartAbility.EXPORT_FLUIDS,
                        PartAbility.INPUT_ENERGY,
                        PartAbility.INPUT_LASER,
                        PartAbility.PARALLEL_HATCH)))
        .build()
        )
        .workableCasingModel("kubejs:block/casings/eternity_casing", 'gtceu:block/machines/bender')
})