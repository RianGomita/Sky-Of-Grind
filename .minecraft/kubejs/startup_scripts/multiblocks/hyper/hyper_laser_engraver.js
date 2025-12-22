GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('hyper_laser_engraver', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('laser_engraver')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:eternity_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("BBBBBBBBB", "BCCCCCCCB", "BCCDDDCCB", "BCCDDDCCB", "BCCDDDCCB", "BCCCCCCCB", "BBBBBBBBB")
            .aisle("BCCCCCCCB", "CEEAAAEEC", "CEAAAAAEC", "CEAAAAAEC", "CEAAAAAEC", "CEEAAAEEC", "BFFFBFFFB")
            .aisle("BCCCCCCCB", "CEAAAAAEC", "CAAAAAAAC", "CAAAAAAAC", "CAAAAAAAC", "CEAAAAAEC", "BFGGBGGFB")
            .aisle("BCCCCCCCB", "CAAAAAAAC", "HAAAAAAAH", "HAAAAAAAH", "HAAAAAAAH", "CAAIIIAAC", "BFGBBBGFB")
            .aisle("BCCCCCCCB", "CAAAAAAAC", "HAAAAAAAH", "HAAAAAAAH", "HAAAAAAAH", "CAAIIIAAC", "BBBBBBBBB")
            .aisle("BCCCCCCCB", "CAAAAAAAC", "HAAAAAAAH", "HAAAAAAAH", "HAAAAAAAH", "CAAIIIAAC", "BFGBBBGFB")
            .aisle("BCCCCCCCB", "CEAAAAAEC", "CAAAAAAAC", "CAAAAAAAC", "CAAAAAAAC", "CEAAAAAEC", "BFGGBGGFB")
            .aisle("BCCCCCCCB", "CEEAAAEEC", "CEAAAAAEC", "CEAAAAAEC", "CEAAAAAEC", "CEEAAAEEC", "BFFFBFFFB")
            .aisle("BBBBBBBBB", "BCCCJCCCB", "BCCHHHCCB", "BCCHHHCCB", "BCCHHHCCB", "BCCCCCCCB", "BBBBBBBBB")
                .where("J", Predicates.controller(Predicates.blocks(definition.get())))
                .where("A", Predicates.any())
                .where("B", Predicates.blocks("kubejs:semi_stable_casing"))
                .where("D", Predicates.blocks("kubejs:trascendental_space_time_casing"))
                .where("E", Predicates.blocks("kubejs:stellar_powered_casing"))
                .where("F", Predicates.blocks("gtceu:sterilizing_filter_casing"))
                .where("G", Predicates.blocks("kubejs:eternity_casing"))
                .where("H", Predicates.blocks("kubejs:fusion_glass_mk2"))
                .where("I", Predicates.blocks("kubejs:osmiridium_pipe_casing"))
                .where("C", Predicates.blocks("gtceu:laser_safe_engraving_casing")
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
        .workableCasingModel("kubejs:block/casings/eternity_casing", 'gtceu:block/machines/laser_engraver')
})