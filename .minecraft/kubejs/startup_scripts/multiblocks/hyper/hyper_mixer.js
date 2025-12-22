GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('hyper_mixer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mixer')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:eternity_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("ABBBBBBBA", "ABCCCCCBA", "ABCCCCCBA", "ABCCCCCBA", "ABCCCCCBA", "ABCCCCCBA", "ABCCCCCBA", "ABCCCCCBA", "ABCCCCCBA", "ABCCCCCBA", "ABBBBBBBA", "AAAADAAAA", "AAAAAAAAA")
            .aisle("BCCCCCCCB", "BAAFGFAAB", "BGAFAFAGB", "BAAFGFAAB", "BGAFAFAGB", "BAAFGFAAB", "BAAAAAAAB", "BAAAAAAAB", "BAAAAAAAB", "BAAAAAAAB", "BFFFFFFFB", "ADDDDDDDA", "AAAAAAAAA")
            .aisle("BCCCCCCCB", "CAAFGFAAC", "CAGFAFGAC", "CAAFGFAAC", "CAGFAFGAC", "CAAFGFAAC", "CAAHHHAAC", "CAAHHHAAC", "CAAHHHAAC", "CAAHHHAAC", "BFAHHHAFB", "ADAHDHADA", "AAAAAAAAA")
            .aisle("BCCCCCCCB", "CFFGIGFFC", "CFFGGGFFC", "CFFGIGFFC", "CFFGGGFFC", "CFFGIGFFC", "CAHHIHHAC", "CAHHIHHAC", "CAHHIHHAC", "CAHHIHHAC", "BFHHIHHFB", "ADHHIHHDA", "AAAAJAAAA")
            .aisle("BCCCCCCCB", "CGGIIIGGC", "CAAGKGAAC", "CGGIKIGGC", "CAAGKGAAC", "CGGIKIGGC", "CAHIKIHAC", "CAHIKIHAC", "CAHIKIHAC", "CAHIKIHAC", "BFHIKIHFB", "DDDIKIDDD", "AAAJJJAAA")
            .aisle("BCCCCCCCB", "CFFGIGFFC", "CFFGGGFFC", "CFFGIGFFC", "CFFGGGFFC", "CFFGIGFFC", "CAHHIHHAC", "CAHHIHHAC", "CAHHIHHAC", "CAHHIHHAC", "BFHHIHHFB", "ADHHIHHDA", "AAAAJAAAA")
            .aisle("BCCCCCCCB", "CAAFGFAAC", "CAGFAFGAC", "CAAFGFAAC", "CAGFAFGAC", "CAAFGFAAC", "CAAHHHAAC", "CAAHHHAAC", "CAAHHHAAC", "CAAHHHAAC", "BFAHHHAFB", "ADAHDHADA", "AAAAAAAAA")
            .aisle("BCCCCCCCB", "BAAFGFAAB", "BGAFAFAGB", "BAAFGFAAB", "BGAFAFAGB", "BAAFGFAAB", "BAAAAAAAB", "BAAAAAAAB", "BAAAAAAAB", "BAAAAAAAB", "BFFFFFFFB", "ADDDDDDDA", "AAAAAAAAA")
            .aisle("ABBBBBBBA", "ABCBLBCBA", "ABCBBBCBA", "ABCMNMCBA", "ABCMNMCBA", "ABCMNMCBA", "ABCMNMCBA", "ABCMNMCBA", "ABCMNMCBA", "ABCMNMCBA", "ABBBBBBBA", "AAAADAAAA", "AAAAAAAAA")
                .where("L", Predicates.controller(Predicates.blocks(definition.get())))
                .where("A", Predicates.any())
                .where("B", Predicates.blocks("kubejs:semi_stable_casing"))
                .where("D", Predicates.blocks("gtceu:eternity_frame"))
                .where("F", Predicates.blocks("kubejs:eternity_casing"))
                .where("G", Predicates.blocks("kubejs:machine_casing_pipe_peek"))
                .where("H", Predicates.blocks("kubejs:stellar_powered_casing"))
                .where("I", Predicates.blocks("gtceu:titanium_gearbox"))
                .where("J", Predicates.blocks("kubejs:trascendental_space_time_casing"))
                .where("K", Predicates.blocks("gtceu:stainless_steel_gearbox"))
                .where("M", Predicates.blocks("gtceu:extreme_engine_intake_casing"))
                .where("N", Predicates.blocks("gtceu:tungstensteel_firebox_casing"))
                .where("C", Predicates.blocks("gtceu:reaction_safe_mixing_casing")
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
        .workableCasingModel("kubejs:block/casings/eternity_casing", 'gtceu:block/machines/mixer')
})