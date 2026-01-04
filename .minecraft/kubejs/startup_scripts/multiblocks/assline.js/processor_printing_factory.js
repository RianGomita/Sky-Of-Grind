GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    const tiers = [
        'lv', 'mv', 'hv', 'ev',
        'iv', 'luv', 'zpm', 'uv', 'uhv'
    ]

    tiers.forEach(tier => {
        event.create(`processor_printing_factory_${tier}`)
            .category('multiblock')
            .setEUIO('in')
            .setMaxIOSize(9, 1, 4, 0) // Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
            .setProgressBar(
                GuiTextures.PROGRESS_BAR_CIRCUIT_ASSEMBLER,
                FillDirection.LEFT_TO_RIGHT
            )
            .setSound(GTSoundEntries.ASSEMBLER)
    })
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    const tiers = [
        'lv', 'mv', 'hv', 'ev',
        'iv', 'luv', 'zpm', 'uv', 'uhv'
    ]

    tiers.forEach(tier => {
        event.create(`processor_printing_factory_${tier}`, 'multiblock')
            .rotationState(RotationState.NON_Y_AXIS)
            .recipeType(`processor_printing_factory_${tier}`)
            .recipeModifiers([GTRecipeModifiers.OC_PERFECT_SUBTICK])
            .appearanceBlock(() => Block.getBlock('kubejs:neutronium_casing'))
            .pattern(definition => FactoryBlockPattern.start()
                .aisle('CCCCCC', 'GGGGGG', 'FFFFFF', '######')
                .aisle('OBBBBB', 'AAAAAA', 'HHHHHH', 'CCCCCC')
                .aisle('CCCCCC', 'GGGGGG', 'FFFFUK', '######')
                    .where('K', Predicates.controller(Predicates.blocks(definition.get())))
                    .where('#', Predicates.any())
                    .where('G', Predicates.blocks('gtceu:cleanroom_glass'))
                    .where('F', Predicates.blocks('gtceu:sterilizing_filter_casing'))
                    .where('A', Predicates.blocks('gtceu:assembly_line_unit'))
                    .where('H', Predicates.blocks('gtceu:hypoxylon_frame'))
                    .where('U', Predicates.blocks('gtceu:ulv_input_bus'))
                    .where('O', Predicates.abilities(PartAbility.EXPORT_ITEMS))
                    .where('B', Predicates.blocks('gtceu:me_stocking_input_bus')
                        .or(Predicates.blocks('gtceu:ulv_input_bus')))
                    .where('C', Predicates.blocks('kubejs:neutronium_casing')
                        .or(Predicates.abilities(
                            PartAbility.IMPORT_FLUIDS,
                            PartAbility.INPUT_ENERGY
                    )))
                .build()
            )
            .workableCasingModel(
                'kubejs:block/neutronium/ncasing',
                'gtceu:block/multiblock/assembly_line'
            )
    })
})