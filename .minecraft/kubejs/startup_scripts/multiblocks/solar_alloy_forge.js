GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('solar_forging')
        .category('multiblocks')
        .setEUIO('in')
        .setMaxIOSize(9, 9, 9, 9) // Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
    event.create('solar_alloy_smelting')
        .category('multiblocks')
        .setEUIO('in')
        .setMaxIOSize(9, 9, 9, 9) // Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('solar_alloy_forge', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeTypes(['solar_forging', 'solar_alloy_smelting'])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:orbital_space_containment_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAABAAAAA", "AAAABBBAAAA", "AAAABBBAAAA", "AAAABBBAAAA", "AAAAABAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA")
            .aisle("AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAABAAAAA", "AAAAABAAAAA", "AAAAABAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAABAAABAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAABAAAAA", "AAAAABAAAAA", "AAAAABAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA")
            .aisle("AAAABBBAAAA", "AAAAAAAAAAA", "AAAABBBAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAABAAAAA", "AAAAABAAAAA", "AAAABBBAAAA", "AAAABIBAAAA", "AAAABBBAAAA", "AAAAABAAAAA", "AAAAEEEAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AABAAAAABAA", "AABAAAAABAA", "AABAAAAABAA", "AABAAAAABAA", "AABAAAAABAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAABAAAAA", "AAAAABAAAAA")
            .aisle("AAABBBBBAAA", "AAAAFFFAAAA", "AAABGGGBAAA", "AAAAEEEAAAA", "AAAAEEEAAAA", "AAAAEEEAAAA", "AAAAEEEAAAA", "AAAAEEEAAAA", "AAABGGGBAAA", "AAABGGGBAAA", "AAABGGGBAAA", "AAAAHHHAAAA", "AAAEEEEEAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "ABAAAAAAABA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA")
            .aisle("AABBBBBBBAA", "AAAFAAAFAAA", "AABGAAAGBAA", "AAAEAAAEAAA", "AAAEAAAEAAA", "AAAEAAAEAAA", "AAAEAAAEAAA", "AAAEAAAEAAA", "AABGAAAGBAA", "AABGAAAGBAA", "AABGAAAGBAA", "AAAHFFFHAAA", "AAEEAAAEEAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "BAAAAAAAAAB", "BAAAAAAAAAB", "BAAAAAAAAAB", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA")
            .aisle("AABBBBBBBAA", "AAAFAIAFAAA", "AABGAIAGBAA", "AAAEAIAEAAA", "AAAEAIAEAAA", "AAAEAIAEAAA", "AABEAIAEBAA", "AABEAIAEBAA", "AABGAIAGBAA", "AAIGAIAGIAA", "AABGAIAGBAA", "AABHFFFHBAA", "ABEEAAAEEBA", "ABAAAAAAABA", "ABAAAAAAABA", "BAAAAAAAAAB", "BAAAAAAAAAB", "BAAAAAAAAAB", "BAAAAAAAAAB", "BAAAAAAAAAB", "ABAAAAAAABA", "ABAAAAAAABA", "ABAAAAAAABA", "AABAAAAABAA", "AABAAAAABAA")
            .aisle("AABBBBBBBAA", "AAAFAAAFAAA", "AABGAAAGBAA", "AAAEAAAEAAA", "AAAEAAAEAAA", "AAAEAAAEAAA", "AAAEAAAEAAA", "AAAEAAAEAAA", "AABGAAAGBAA", "AABGAAAGBAA", "AABGAAAGBAA", "AAAHFFFHAAA", "AAEEAAAEEAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "BAAAAAAAAAB", "BAAAAAAAAAB", "BAAAAAAAAAB", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA")
            .aisle("AAABBBBBAAA", "AAAAFFFAAAA", "AAABGGGBAAA", "AAAAEEEAAAA", "AAAAEJEAAAA", "AAAAEEEAAAA", "AAAAEEEAAAA", "AAAAEEEAAAA", "AAABGGGBAAA", "AAABGGGBAAA", "AAABGGGBAAA", "AAAAHHHAAAA", "AAAEEEEEAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "ABAAAAAAABA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA")
            .aisle("AAAABBBAAAA", "AAAAAAAAAAA", "AAAABBBAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAABAAAAA", "AAAAABAAAAA", "AAAABBBAAAA", "AAAABIBAAAA", "AAAABBBAAAA", "AAAAABAAAAA", "AAAAEEEAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AABAAAAABAA", "AABAAAAABAA", "AABAAAAABAA", "AABAAAAABAA", "AABAAAAABAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAABAAAAA", "AAAAABAAAAA")
            .aisle("AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAABAAAAA", "AAAAABAAAAA", "AAAAABAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAABAAABAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAABAAAAA", "AAAAABAAAAA", "AAAAABAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA")
            .aisle("AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAABAAAAA", "AAAABBBAAAA", "AAAABBBAAAA", "AAAABBBAAAA", "AAAAABAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA", "AAAAAAAAAAA")
                .where("J", Predicates.controller(Predicates.blocks(definition.get())))
                .where("A", Predicates.any())
                .where("B", Predicates.blocks("kubejs:space_resistant_orbital_casing"))
                .where("F", Predicates.blocks("gtceu:heat_vent"))
                .where("G", Predicates.blocks("kubejs:highly_superconducting_coil_block"))
                .where("H", Predicates.blocks("kubejs:orbital_pipe_casing"))
                .where("I", Predicates.blocks("kubejs:orbital_solar_casing"))
                .where("E", Predicates.blocks("kubejs:orbital_space_containment_casing")
                    .setMinGlobalLimited(70)
                    .or(Predicates.abilities(
                        PartAbility.IMPORT_ITEMS,
                        PartAbility.IMPORT_FLUIDS,
                        PartAbility.EXPORT_ITEMS,
                        PartAbility.EXPORT_FLUIDS,
                        PartAbility.INPUT_LASER,
                        PartAbility.INPUT_ENERGY,
                        PartAbility.PARALLEL_HATCH
                )))
            .build()
        )
        .workableCasingModel("kubejs:block/casings/orbital_space_containment_casing", 'kubejs:block/gui/machine_controller/solar_alloy_forge')
})