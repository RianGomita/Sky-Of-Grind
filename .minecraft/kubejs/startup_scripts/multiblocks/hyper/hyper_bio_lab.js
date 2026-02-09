GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('hyper_bio_lab')
        .category('multiblocks')
        .setEUIO('in')
        .setMaxIOSize(3, 2, 3, 2) // Item Input, Output, Fluid Input, Output
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('hyper_bio_lab', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['biolab','large_bacterial_vat'])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock(GTBlocks.MACHINE_CASING_UXV))
        .pattern(definition => FactoryBlockPattern.start()
                .aisle("aaaabbbaaaa", "aaaabbbaaaa", "aaaabbbaaaa", "aaaabbbaaaa", "aaaabbbaaaa", "aaaabbbaaaa", "aaaaaaaaaaa", "aaaaaaaaaaa", "aaaaaaaaaaa", "aaaabbbaaaa", "aaaabbbaaaa", "aaaabbbaaaa", "aaaaaaaaaaa", "aaaaaaaaaaa", "aaaaaaaaaaa", "aaaaaaaaaaa")
                .aisle("aaabcccbaaa", "aaabcccbaaa", "aaaacccaaaa", "aaaacccaaaa", "aaabbbbbaaa", "aaabbbbbaaa", "aaabdddbaaa", "aaaadddaaaa", "aaaadddaaaa", "aaaadddaaaa", "aaabbbbbaaa", "aaabeeebaaa", "aaabfffbaaa", "aaaaafaaaaa", "aaaaaaaaaaa", "aaaaaaaaaaa")
                .aisle("aabcgggcbaa", "aabcaaacbaa", "aabcahacbaa", "aaacacacaaa", "aaacaaacaaa", "aabbahabbaa", "aabbaeabbaa", "aabdaeadbaa", "aaadaeadaaa", "aaadacadaaa", "aaadiiidaaa", "aabbicibbaa", "aabeeeeebaa", "aabfffffbaa", "aaaafffaaaa", "aaaaaaaaaaa")
                .aisle("abcgggggcba", "abcahahacba", "abcaahaacba", "abcaacaacba", "aacahahacaa", "aacaahaacaa", "abbaabaabba", "abbaabaabba", "abdaaaaadba", "aadaacaadaa", "aadiaaaidaa", "aadiacaidaa", "abbiiiiibba", "abeeeeeeeba", "abfffffffba", "aaaafffaaaa")
                .aisle("hbcggcggcbh", "hbcaacaacbh", "hkchhchhckh", "hbcccccccbh", "hacaacaacah", "hachhchhcah", "hbbebbbebbh", "hkbebbbebkh", "hbdeacaedbh", "hadcccccdah", "hadiacaidah", "hadcccccdah", "hbbiiciibbh", "hkeeeeeeekh", "abfffffffba", "aaafffffaaa")
                .aisle("abcgggggcba", "abcahahacba", "abcaahaacba", "abcaacaacba", "aacahahacaa", "aacaahaacaa", "abbaabaabba", "abbaabaabba", "abdaaaaadba", "aadaacaadaa", "aadiaaaidaa", "aadiacaidaa", "abbiiiiibba", "abeeeeeeeba", "abfffffffba", "aaaafffaaaa")
                .aisle("aabcgggcbaa", "aabcaaacbaa", "aabcahacbaa", "aaacacacaaa", "aaacaaacaaa", "aabbahabbaa", "aabbaeabbaa", "aabdaeadbaa", "aaadaeadaaa", "aaadacadaaa", "aaadiiidaaa", "aabbicibbaa", "aabeeeeebaa", "aabfffffbaa", "aaaafffaaaa", "aaaaaaaaaaa")
                .aisle("aaabcccbaaa", "aaabcccbaaa", "aaaacccaaaa", "aaaacccaaaa", "aaabbbbbaaa", "aaabbbbbaaa", "aaabdddbaaa", "aaaadddaaaa", "aaaadddaaaa", "aaaadddaaaa", "aaabbbbbaaa", "aaabeeebaaa", "aaabfffbaaa", "aaaaafaaaaa", "aaaaaaaaaaa", "aaaaaaaaaaa")
                .aisle("aaaabbbaaaa", "aaaablbaaaa", "aaaabbbaaaa", "aaaabbbaaaa", "aaaabbbaaaa", "aaaabbbaaaa", "aaaaaaaaaaa", "aaaaaaaaaaa", "aaaaaaaaaaa", "aaaabbbaaaa", "aaaabbbaaaa", "aaaabbbaaaa", "aaaaaaaaaaa", "aaaaaaaaaaa", "aaaaaaaaaaa", "aaaaaaaaaaa")
                .where("l", Predicates.controller(Predicates.blocks(definition.get())))
                .where("a", Predicates.any())
                .where("c", Predicates.blocks("kubejs:neutronium_casing"))
                .where("d", Predicates.blocks("phoenix_gregic_additons:blazing_filter_casing"))
                .where("e", Predicates.blocks("gtceu:electrolytic_cell"))
                .where("f", Predicates.blocks("gtceu:cleanroom_glass"))
                .where("g", Predicates.blocks("gtceu:heat_vent"))
                .where("h", Predicates.blocks("gtceu:neutronium_frame"))
                .where("i", Predicates.blocks("kubejs:highly_superconducting_coil_block"))
                .where("k", Predicates.blocks("gtceu:uhv_hermetic_casing"))
                .where("b", Predicates.blocks("gtceu:plascrete")
                .or(Predicates.abilities(
                    PartAbility.IMPORT_ITEMS, 
                    PartAbility.IMPORT_FLUIDS, 
                    PartAbility.EXPORT_ITEMS, 
                    PartAbility.EXPORT_FLUIDS, 
                    PartAbility.INPUT_ENERGY, 
                    PartAbility.INPUT_LASER, 
                    PartAbility.PARALLEL_HATCH))
            )
            .build()
        )
         .workableCasingModel("gtceu:block/casings/cleanroom/plascrete", 'gtceu:block/machines/replicator')
})