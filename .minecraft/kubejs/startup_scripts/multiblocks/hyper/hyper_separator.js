GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('hyper_separator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['electrolyzer', 'centrifuge', 'electromagnetic_separator'])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:eternity_fusion_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAAAAAAA", "BBBBBBBBB", "AAABABAAA", "BBBBBBBBB", "AAAAAAAAA")
            .aisle("ADDDDDDDA", "BEEEEEEEB", "AFFFFFFFA", "BEEEEEEEB", "ADDDDDDDA")
            .aisle("ADDDDDDDA", "BEGGGGGEB", "AFHHHHHFA", "BEGGGGGEB", "ADDDDDDDA")
            .aisle("ADDDDDDDA", "BEGIIIGEB", "AFHAHAHFA", "BEGIIIGEB", "ADDDDDDDA")
            .aisle("ADDDDDDDA", "BEGIHIGEB", "AFHHHHHFA", "BEGIHIGEB", "ADDDDDDDA")
            .aisle("ADDDDDDDA", "BEGIIIGEB", "AFHAHAHFA", "BEGIIIGEB", "ADDDDDDDA")
            .aisle("ADDDDDDDA", "BEGGGGGEB", "AFHHHHHFA", "BEGGGGGEB", "ADDDDDDDA")
            .aisle("ADDDDDDDA", "BEEEEEEEB", "AFFFFFFFA", "BEEEEEEEB", "ADDDDDDDA")
            .aisle("AAAAAAAAA", "BBBBBBBBB", "AAABJBAAA", "BBBBBBBBB", "AAAAAAAAA")
                .where("J", Predicates.controller(Predicates.blocks(definition.get())))
                .where("A", Predicates.any())
                .where("D", Predicates.blocks("kubejs:semi_stable_casing"))
                .where("E", Predicates.blocks("kubejs:eternity_casing"))
                .where("F", Predicates.blocks("gtceu:electrolytic_cell"))
                .where("G", Predicates.blocks("kubejs:stellar_powered_casing"))
                .where("H", Predicates.blocks("kubejs:highly_superconducting_coil_block"))
                .where("I", Predicates.blocks("kubejs:trascendental_space_time_casing"))
                .where("B", Predicates.blocks("kubejs:eternity_fusion_machine_casing")
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
        .workableCasingModel("kubejs:block/fusion/eternity_fusion_machine_casing", 'gtceu:block/machines/centrifuge')
})