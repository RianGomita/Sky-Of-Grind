GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('hyper_crystallization_chamber')
        .category('multiblocks')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 1, 1) // Item Input, Output, Fluid Input, Output
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('hyper_crystallization_chamber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('autoclave')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock(GTBlocks.MACHINE_CASING_UXV))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("aaabbbaaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa", "aaabbbaaa")
            .aisle("abbbbbbba", "aaaacaaaa", "aaaacaaaa", "aaaacaaaa", "abbbbbbba")
            .aisle("abbdddbba", "aaceeecaa", "aaceeecaa", "aaceeecaa", "abbdddbba")
            .aisle("bbdddddbb", "aaefffeaa", "aaefffeaa", "aaefffeaa", "bbdddddbb")
            .aisle("bbdddddbb", "acefgfeca", "acefgfeca", "acefgfeca", "bbdddddbb")
            .aisle("bbdddddbb", "aaefffeaa", "aaefffeaa", "aaefffeaa", "bbdddddbb")
            .aisle("abbdddbba", "aaceeecaa", "aaceeecaa", "aaceeecaa", "abbdddbba")
            .aisle("abbbbbbba", "aaaacaaaa", "aaaacaaaa", "aaaacaaaa", "abbbbbbba")
            .aisle("aaabhbaaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa", "aaabbbaaa")
                .where("a", Predicates.any())
                .where("b", Predicates.blocks("kubejs:semi_stable_casing")
                .or(Predicates.abilities(
                    PartAbility.IMPORT_ITEMS, 
                    PartAbility.IMPORT_FLUIDS, 
                    PartAbility.EXPORT_ITEMS, 
                    PartAbility.EXPORT_FLUIDS, 
                    PartAbility.INPUT_ENERGY, 
                    PartAbility.INPUT_LASER, 
                    PartAbility.PARALLEL_HATCH)))
                .where("c", Predicates.blocks("gtceu:pure_cosmic_matter_frame"))
                .where("d", Predicates.blocks("kubejs:space_resistant_orbital_casing"))
                .where("e", Predicates.blocks("kubejs:trascendental_space_time_casing"))
                .where("f", Predicates.blocks("kubejs:eternity_casing"))
                .where("g", Predicates.blocks("kubejs:stellar_powered_casing"))
                .where("h", Predicates.controller(Predicates.blocks(definition.get())))
         .build()
        )
        .workableCasingModel("kubejs:block/casings/semi_stable_casing", 'gtceu:block/machines/autoclave')
})
