GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('altart2')
        .category('drack')
        .setEUIO('in')
        .setMaxIOSize(3, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('altart3')
        .category('drack')
        .setEUIO('in')
        .setMaxIOSize(3, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('altart4')
        .category('drack')
        .setEUIO('in')
        .setMaxIOSize(3, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('altart5')
        .category('drack')
        .setEUIO('in')
        .setMaxIOSize(3, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('altart6')
        .category('drack')
        .setEUIO('in')
        .setMaxIOSize(3, 30, 1, 5)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('altart2', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('altart2')
        .appearanceBlock(GTBlocks.MACHINE_CASING_LuV)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BCCCB', 'AAAAA', 'W#A#W', 'WW#WW')
            .aisle('CAAAC', 'A###A', '#####', 'W###W')
            .aisle('CAAAC', 'A###A', 'A#Z#A', '#####')
            .aisle('CAAAC', 'A###A', '#####', 'W###W')
            .aisle('BCCCB', 'AOKNA', 'W#A#W', 'WW#WW')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:red_lamp'))
            .where('C', Predicates.blocks('gtceu:hssg_coil_block'))
            .where('W', Predicates.blocks('gtceu:hsss_frame'))
            .where(
                "A",
                Predicates.blocks('gtceu:palladium_substation')
                  .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('#', Predicates.any())
            .where('Z', Predicates.blocks('bloodmagic:altar'))
            .build()
        )
        .workableCasingRenderer("gtceu:block/casings/voltage/luv/side", 'gtceu:block/multiblock/fusion_reactor', true)

    event.create('altart3', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('altart3')
        .appearanceBlock(GTBlocks.MACHINE_CASING_LuV)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('LAAAAAL', 'LAAAAAL', 'LPP#PPL', 'B#####B', 'WWW#WWW')
            .aisle('AWWWWWA', 'A#####A', 'P#####P', '#######', 'W#####W')
            .aisle('AWWWWWA', 'A#####A', 'P#####P', '#######', 'W#####W')
            .aisle('AWWWWWA', 'A##Z##A', '#######', '#######', '#######')
            .aisle('AWWWWWA', 'A#####A', 'P#####P', '#######', 'W#####W')
            .aisle('AWWWWWA', 'A#####A', 'P#####P', '#######', 'W#####W')
            .aisle('LAAAAAL', 'LAOKNAL', 'LPP#PPL', 'B#####B', 'WWW#WWW')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:red_lamp'))
            .where('L', Predicates.blocks('bloodmagic:largebloodstonebrick'))
            .where('W', Predicates.blocks('gtceu:hsss_frame'))
            .where(
                "A",
                Predicates.blocks('gtceu:palladium_substation')
                  .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('#', Predicates.any())
            .where('P', Predicates.blocks('bloodmagic:stonetilepath'))
            .where('Z', Predicates.blocks('bloodmagic:altar'))
            .build()
        )
        .workableCasingRenderer("gtceu:block/casings/voltage/luv/side", 'gtceu:block/multiblock/fusion_reactor', true)
    
    event.create('altart4', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('altart4')
        .appearanceBlock(GTBlocks.MACHINE_CASING_LuV)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('GAAAAAG', 'GLBLBLG', 'G#####G', 'GWW#WWG', 'B#####B', '#######', '#######', '#######', '#######', '#######', '#######',)
            .aisle('PAAAAAP', 'L#G#G#L', '##G#G##', 'W#####W', '#######', '#######', '#######', '#######', '#######', '#######', '#######',)
            .aisle('PAABAAP', 'BG###GB', '#G###G#', 'WG###GW', '##G#G##', '###G###', '###G###', '#######', '#######', '#######', '#######',)
            .aisle('PABABAP', 'L##Z##L', '#######', '#######', '#######', '##G#G##', '##G#G##', '###G###', '###G###', '###G###', '###H###',)
            .aisle('PAABAAP', 'BG###GB', '#G###G#', 'WG###GW', '##G#G##', '###G###', '###G###', '#######', '#######', '#######', '#######',)
            .aisle('PAAAAAP', 'L#G#G#L', '##G#G##', 'W#####W', '#######', '#######', '#######', '#######', '#######', '#######', '#######',)
            .aisle('GAAAAAG', 'GLOKNLG', 'G#####G', 'GWW#WWG', 'B#####B', '#######', '#######', '#######', '#######', '#######', '#######',)
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:red_lamp'))
            .where('L', Predicates.blocks('bloodmagic:largebloodstonebrick'))
            .where('W', Predicates.blocks('gtceu:hsss_frame'))
            .where(
                "A",
                Predicates.blocks('gtceu:palladium_substation')
                  .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('#', Predicates.any())
            .where('P', Predicates.blocks('bloodmagic:stonetilepath'))
            .where('Z', Predicates.blocks('bloodmagic:altar'))
            .where('G', Predicates.blocks('bloodmagic:dungeon_metal'))
            .where('H', Predicates.blocks('gtceu:cyan_lamp'))
            .build()
        )
        .workableCasingRenderer("gtceu:block/casings/voltage/luv/side", 'gtceu:block/multiblock/fusion_reactor', true)

    event.create('altart5', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('altart5')
        .appearanceBlock(GTBlocks.MACHINE_CASING_LuV)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('GPPPPPPPG', 'GLAAAAALG', 'GBAWWWABG', 'G#AWWWA#G', 'H#AWWWA#H', '##AAAAA##', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########',)
            .aisle('PBPLLLPBP', 'LG#####GL', 'BG#####GB', '#G#####G#', '##G###G##', '##G###G##', '###GGG###', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########',)
            .aisle('PPLLLLLPP', 'A###T###A', 'A#######A', 'A#######A', 'AG#####GA', 'AG#####GA', '##G###G##', '##G#G#G##', '##H#G#H##', '#########', '#########', '#########', '#########', '#########', '#########', '#########',)
            .aisle('PLLLLLLLP', 'A#######A', 'W#######W', 'W#######W', 'W#######W', 'A#######A', '#G#####G#', '#########', '#########', '####G####', '####B####', '####G####', '#########', '#########', '#########', '#########',)
            .aisle('PLLLLLLLP', 'A#T#Z#T#A', 'W#######W', 'W#######W', 'W###H###W', 'A###G###A', '#G##G##G#', '##G#G#G##', '##G#G#G##', '###G#G###', '###B#B###', '###G#G###', '####G####', '####G####', '####G####', '####H####',)
            .aisle('PLLLLLLLP', 'A#######A', 'W#######W', 'W#######W', 'W#######W', 'A#######A', '#G#####G#', '#########', '#########', '####G####', '####B####', '####G####', '#########', '#########', '#########', '#########',)
            .aisle('PPLLLLLPP', 'A###T###A', 'A#######A', 'A#######A', 'AG#####GA', 'AG#####GA', '##G###G##', '##G#G#G##', '##H#G#H##', '#########', '#########', '#########', '#########', '#########', '#########', '#########',)
            .aisle('PBPLLLPBP', 'LG#####GL', 'BG#####GB', '#G#####G#', '##G###G##', '#G#####G#', '###GGG###', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########',)
            .aisle('GPPOKNPPG', 'GL#####LG', 'GB#####BG', 'G#######G', 'H#######H', '#G#####G#', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########', '#########',)
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:red_lamp'))
            .where('L', Predicates.blocks('bloodmagic:largebloodstonebrick'))
            .where('W', Predicates.blocks('gtceu:hsss_frame'))
            .where(
                "A",
                Predicates.blocks('gtceu:palladium_substation')
                  .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('#', Predicates.any())
            .where('P', Predicates.blocks('bloodmagic:stonetilepath'))
            .where('Z', Predicates.blocks('bloodmagic:altar'))
            .where('G', Predicates.blocks('bloodmagic:dungeon_metal'))
            .where('H', Predicates.blocks('gtceu:cyan_lamp'))
            .where('T', Predicates.blocks('bloodmagic:demoncrystallizer'))
            .build()
        )
        .workableCasingRenderer("gtceu:block/casings/voltage/luv/side", 'gtceu:block/multiblock/fusion_reactor', true)
    
   event.create('altart6', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('altart6')
        .appearanceBlock(GTBlocks.MACHINE_CASING_LuV)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BPPPPPB#######BPPPPPB', 'L##L##L#######L##L##L', 'LLL#LLL#######LLL#LLL', '#####################', 'LLL#LLL#######LLL#LLL', 'L##L##L#######L##L##L', 'GGGGGGG#######GGGGGGG', '#G#G#G#########G#G#G#', '###G#############G###', '###G#############G###', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################')
            .aisle('PAAAAAP#######PAAAAAP', '#####################', 'L#####L#######L#####L', '#RRRRR#########RRRRR#', 'L##G##L#######L##G##L', '#GG#GG#########GG#GG#', 'GRRRRRG#######GRRRRRG', 'G#####G#######G#####G', '#G###G#########G###G#', '#G###G#########G###G#', '#G###G#########G###G#', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################')
            .aisle('PAAAAAPG#####GPAAAAAP', '#####################', 'L#####L#######L#####L', '#RRRRR#########RRRRR#', 'L#####L#######L#####L', '#G###G#########G###G#', 'GRRRRRG#######GRRRRRG', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################')
            .aisle('PAAAAAP#AAAAA#PAAAAAP', 'L##T##LG#####GL##T##L', '#######G#####G#######', '#RRRRR#########RRRRR#', '#G###G#########G###G#', 'L#####L#######L#####L', 'GRRRRRG#######GRRRRRG', 'G##T##G#######G##T##G', 'G#####G#######G#####G', 'G#####G#######G#####G', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################')
            .aisle('PAAAAAPG#####GPAAAAAP', '#####################', 'L#####L#######L#####L', '#RRRRR#########RRRRR#', 'L#####L#######L#####L', '#G###G#########G###G#', 'GRRRRRG#######GRRRRRG', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################')
            .aisle('PAAAAAP#G###G#PAAAAAP', '#####################', 'L#####L#######L#####L', '#RRRRR#########RRRRR#', 'L##G##L#######L##G##L', '#GG#GG#########GG#GG#', 'GRRRRRG#######GRRRRRG', 'G#####G#######G#####G', '#G###G#########G###G#', '#G###G#########G###G#', '#G###G#########G###G#', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################')
            .aisle('BPPPPPB#G###G#BPPPPPB', 'L##L##L#######L##L##L', 'LLL#LLL#######LLL#LLL', '#####################', 'LLL#LLL#######LLL#LLL', 'L##L##L#######L##L##L', 'GGGGGGG#######GGGGGGG', '#G#G#G#########G#G#G#', '###G#############G###', '###G#############G###', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################')
            .aisle('##G#G####G#G####G#G##', '###G#############G###', '###G#############G###', '#####################', '#####################', '#####################', '#####################', '#########GGG#########', '#########G#G#########', '#########H#H#########', '#########G#G#########', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################')
            .aisle('###A#GG##G#G##GG#A###', '#####################', '#####################', '#####################', '#####################', '##########G##########', '##########G##########', '########GJGJG########', '#####################', '#####################', '#####################', '#########GGG#########', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################')
            .aisle('###A###GG#G#GG###A###', '##########G##########', '#####################', '#####################', '##########G##########', '#####################', '#####################', '#######GJJJJJG#######', '#######G#####G#######', '#######H#####H#######', '#######G#####G#######', '########G###G########', '##########G##########', '##########G##########', '##########G##########', '#####################', '#####################', '#####################')
            .aisle('###A#####GGG#####A###', '#########GGG#########', '##########G##########', '##########G##########', '#########GHG#########', '########G#Z#G########', '########G###G########', '#######GJJJJJG#######', '##########T##########', '#####################', '#####################', '########G###G########', '#########G#G#########', '#########G#G#########', '#########G#G#########', '##########G##########', '##########H##########', '##########G##########')
            .aisle('###A###GG#G#GG###A###', '##########G##########', '#####################', '#####################', '##########G##########', '#####################', '#####################', '#######GJJJJJG#######', '#######G#####G#######', '#######H#####H#######', '#######G#####G#######', '########G###G########', '##########G##########', '##########G##########', '##########G##########', '#####################', '#####################', '#####################')
            .aisle('###A#GG##G#G##GG#A###', '#####################', '#####################', '#####################', '#####################', '##########G##########', '##########G##########', '########GJGJG########', '#####################', '#####################', '#####################', '#########GGG#########', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################')
            .aisle('##G#G####G#G####G#G##', '###G#############G###', '###G#############G###', '#####################', '#####################', '#####################', '#####################', '#########GGG#########', '#########G#G#########', '#########H#H#########', '#########G#G#########', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################')
            .aisle('BPPPPPB#G###G#BPPPPPB', 'L##L##L#######L##L##L', 'LLL#LLL#######LLL#LLL', '#####################', 'LLL#LLL#######LLL#LLL', 'L##L##L#######L##L##L', 'GGGGGGG#######GGGGGGG', '#G#G#G#########G#G#G#', '###G#############G###', '###G#############G###', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################')
            .aisle('PAAAAAP#G###G#PAAAAAP', '#####################', 'L#####L#######L#####L', '#RRRRR#########RRRRR#', 'L##G##L#######L##G##L', '#GG#GG#########GG#GG#', 'GRRRRRG#######GRRRRRG', 'G#####G#######G#####G', '#G###G#########G###G#', '#G###G#########G###G#', '#G###G#########G###G#', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################')
            .aisle('PAAAAAPG#####GPAAAAAP', '#####################', 'L#####L#######L#####L', '#RRRRR#########RRRRR#', 'L#####L#######L#####L', '#G###G#########G###G#', 'GRRRRRG#######GRRRRRG', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################')
            .aisle('PAAAAAP#AOKNA#PAAAAAP', 'L##T##LG#####GL##T##L', '#######G#####G#######', '#RRRRR#########RRRRR#', '#G###G#########G###G#', 'L#####L#######L#####L', 'GRRRRRG#######GRRRRRG', 'G##T##G#######G##T##G', 'G#####G#######G#####G', 'G#####G#######G#####G', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################')
            .aisle('PAAAAAPG#####GPAAAAAP', '#####################', 'L#####L#######L#####L', '#RRRRR#########RRRRR#', 'L#####L#######L#####L', '#G###G#########G###G#', 'GRRRRRG#######GRRRRRG', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################')
            .aisle('PAAAAAP#######PAAAAAP', '#####################', 'L#####L#######L#####L', '#RRRRR#########RRRRR#', 'L##G##L#######L##G##L', '#GG#GG#########GG#GG#', 'GRRRRRG#######GRRRRRG', 'G#####G#######G#####G', '#G###G#########G###G#', '#G###G#########G###G#', '#G###G#########G###G#', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################')
            .aisle('BPPPPPB#######BPPPPPB', 'L##L##L#######L##L##L', 'LLL#LLL#######LLL#LLL', '#####################', 'LLL#LLL#######LLL#LLL', 'L##L##L#######L##L##L', 'GGGGGGG#######GGGGGGG', '#G#G#G#########G#G#G#', '###G#############G###', '###G#############G###', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################', '#####################')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:red_lamp'))
            .where('L', Predicates.blocks('bloodmagic:largebloodstonebrick'))
            .where(
                "A",
                Predicates.blocks('gtceu:palladium_substation')
                  .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('#', Predicates.any())
            .where('P', Predicates.blocks('bloodmagic:stonetilepath'))
            .where('Z', Predicates.blocks('bloodmagic:altar'))
            .where('G', Predicates.blocks('bloodmagic:dungeon_metal'))
            .where('H', Predicates.blocks('gtceu:cyan_lamp'))
            .where('T', Predicates.blocks('bloodmagic:demonpylon'))
            .where('R', Predicates.blocks('gtceu:black_lamp'))
            .where('J', Predicates.blocks('gtceu:white_lamp'))
            .build()
        )
        .workableCasingRenderer("gtceu:block/casings/voltage/luv/side", 'gtceu:block/multiblock/fusion_reactor', true)
    
    })