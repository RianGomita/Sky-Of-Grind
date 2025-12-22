GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('hyper_extruder', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('extruder')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:eternity_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAABBBBBBB", "AAAABCCCCCB", "AAAABCCCCCB", "AAAABCCCCCB", "AAAABBBBBBB")
            .aisle("AAAABCCCCCB", "AAAACCDDDCC", "AAAACCEEECC", "AAAACCDDDCC", "AAAABCCCCCB")
            .aisle("AAAABCCCCCB", "AAAACCDDDCC", "AAAACCEEECC", "AAAACCDDDCC", "AAAABCFFFCB")
            .aisle("AAAABCCCCCB", "AAAACCDDDCC", "AAAACCEEECC", "AAAACCDDDCC", "AAAABCFFFCB")
            .aisle("AAAABCCCCCB", "AAAACCDDDCC", "AAAACCEEECC", "AAAACCDDDCC", "AAAABCFFFCB")
            .aisle("AAAABCCCCCB", "AAAACCDDDCC", "AAAACCEEECC", "AAAACCDDDCC", "AAAABCFFFCB")
            .aisle("AAAABCCCCCB", "AAAACCDDDCC", "AAAACCEEECC", "AAAACCDDDCC", "AAAABCFFFCB")
            .aisle("AAAABCCCCCB", "AAAACCDDDCC", "AAAACCEEECC", "AAAACCDDDCC", "AAAABCFFFCB")
            .aisle("BBBBBCCCCCB", "BCCCBCDDDCC", "BCCCBCEEECC", "BCCCBCDDDCC", "BBBBBCFFFCB")
            .aisle("BCCCCCCCCCB", "CEEECCDDDCC", "CGGGCCEEECC", "CEEECCDDDCC", "BCCCCCFFFCB")
            .aisle("BCCCCCCCCCB", "CEEECCDDDCC", "CGGGCCEEECC", "CEEECCDDDCC", "BCCCCCFFFCB")
            .aisle("BCCCCCCCCCB", "CEEECCDDDCC", "CGGGCCEEECC", "CEEECCDDDCC", "BCCCCCCCCCB")
            .aisle("BBBBBBBBBBB", "BCHCCCCCCCB", "BCCCCCCCCCB", "BCCCCCCCCCB", "BBBBBBBBBBB")
                .where("H", Predicates.controller(Predicates.blocks(definition.get())))
                .where("A", Predicates.any())
                .where("B", Predicates.blocks("kubejs:semi_stable_casing"))
                .where("D", Predicates.blocks("kubejs:stellar_powered_casing"))
                .where("E", Predicates.blocks("kubejs:eternity_casing"))
                .where("F", Predicates.blocks("kubejs:fusion_glass_mk2"))
                .where("G", Predicates.blocks("kubejs:trascendental_space_time_casing"))
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
        .workableCasingModel("kubejs:block/casings/eternity_casing", 'gtceu:block/machines/extruder')
})