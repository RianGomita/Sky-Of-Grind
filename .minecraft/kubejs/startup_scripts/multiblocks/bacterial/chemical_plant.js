
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('chemical_plant')
        .category('drack')
        .setEUIO('in')
        .setMaxIOSize(8, 7, 8, 4)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})





GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('chemical_plant', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['chemical_plant', 'large_chemical_reactor'])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK])
        .appearanceBlock(() => Block.getBlock('gtceu:inert_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('##AAA##', '##CCC##', '##CCC##', '##CCC##', '##CCC##', '##CCC##', '##AAA##')
            .aisle('#AAAAA#', '#CDDDC#', '#CFFFC#', '#CDDDC#', '#CFFFC#', '#CDDDC#', '#AAAAA#')
            .aisle('AAAAAAA', 'CDEEEDC', 'CFEEEFC', 'CDEEEDC', 'CFEEEFC', 'CDEEEDC', 'AAAAAAA')
            .aisle('AAAAAAA', 'CDEEEDC', 'CFEEEFC', 'CDEEEDC', 'CFEEEFC', 'CDEEEDC', 'AAAAAAA')
            .aisle('AAAAAAA', 'CDEEEDC', 'CFEEEFC', 'CDEEEDC', 'CFEEEFC', 'CDEEEDC', 'AAAAAAA')
            .aisle('#AAAAA#', '#CDDDC#', '#CFFFC#', '#CDDDC#', '#CFFFC#', '#CDDDC#', '#AAAAA#')
            .aisle('##AKA##', '##CCC##', '##CCC##', '##CCC##', '##CCC##', '##CCC##', '##AAA##')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where("C", Predicates.blocks("gtceu:fusion_glass"))
            .where("D", Predicates.blocks("gtceu:heat_vent"))
            .where("E", Predicates.blocks("gtceu:superconducting_coil"))
            .where("F", Predicates.blocks("gtceu:assembly_line_grating"))
            .where("A",Predicates.blocks('gtceu:inert_machine_casing')
            .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            .or(Predicates.abilities(PartAbility.MAINTENANCE))
            .or(Predicates.abilities(PartAbility.EXPORT_ITEMS, PartAbility.EXPORT_FLUIDS, PartAbility.IMPORT_ITEMS, PartAbility.IMPORT_FLUIDS, PartAbility.INPUT_LASER, PartAbility.INPUT_ENERGY, PartAbility.PARALLEL_HATCH))
            )
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_inert_ptfe", 'gtceu:block/machines/replicator', true)
})

