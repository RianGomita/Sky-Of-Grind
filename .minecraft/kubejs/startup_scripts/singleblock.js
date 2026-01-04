GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('extractinator')
        .category('extractor')
        .setEUIO('in')
        .setMaxIOSize(2, 8, 1, 2)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('electric_extractinator', 'simple') 
        .tiers(GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV)
        .definition((tier, builder) =>
            builder
        .langValue(GTValues.VLVH[tier] + " Electric Extractinator")
        .recipeType('extractinator')
        .workableTieredHullModel('gtceu:block/machines/extractinator')
        )
})




const $ParallelHatchPartMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.part.ParallelHatchPartMachine')

// Parallel Hatches
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create("uhv_parallel_hatch", "custom")
    .tiers(GTValues.UHV)
    .machine((holder, tier, t) => new $ParallelHatchPartMachine(holder, tier))
    .definition((tier, builder) => {
        builder.rotationState(RotationState.ALL)
                .abilities(PartAbility.PARALLEL_HATCH)
                .workableTieredHullModel(GTCEu.id("block/machines/parallel_hatch_uhv"))
    })
    event.create("uev_parallel_hatch", "custom")
    .tiers(GTValues.UEV)
    .machine((holder, tier, t) => new $ParallelHatchPartMachine(holder, tier))
    .definition((tier, builder) => {
        builder.rotationState(RotationState.ALL)
                .abilities(PartAbility.PARALLEL_HATCH)
                .workableTieredHullModel(GTCEu.id("block/machines/parallel_hatch_uev"))
    })
    event.create("uiv_parallel_hatch", "custom")
    .tiers(GTValues.UIV)
    .machine((holder, tier, t) => new $ParallelHatchPartMachine(holder, tier))
    .definition((tier, builder) => {
        builder.rotationState(RotationState.ALL)
                .abilities(PartAbility.PARALLEL_HATCH)
                .workableTieredHullModel(GTCEu.id("block/machines/parallel_hatch_uiv"))
    })
    event.create("uxv_parallel_hatch", "custom")
    .tiers(GTValues.UXV)
    .machine((holder, tier, t) => new $ParallelHatchPartMachine(holder, tier))
    .definition((tier, builder) => {
        builder.rotationState(RotationState.ALL)
                .abilities(PartAbility.PARALLEL_HATCH)
                .workableTieredHullModel(GTCEu.id("block/machines/parallel_hatch_uxv"))
    })
    event.create("opv_parallel_hatch", "custom")
    .tiers(GTValues.OpV)
    .machine((holder, tier, t) => new $ParallelHatchPartMachine(holder, tier))
    .definition((tier, builder) => {
        builder.rotationState(RotationState.ALL)
                .abilities(PartAbility.PARALLEL_HATCH)
                .workableTieredHullModel(GTCEu.id("block/machines/parallel_hatch_opv"))
    })

})


const $WorldAcceleratorMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.electric.WorldAcceleratorMachine')
const $GTMachineModelProperties = Java.loadClass('com.gregtechceu.gtceu.api.machine.property.GTMachineModelProperties')
const $FormattingUtil = Java.loadClass('com.gregtechceu.gtceu.utils.FormattingUtil')
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create("world_accelerator", "simple")
        .tiers(GTValues.UHV, GTValues.UEV, GTValues.UIV)
        .machine((holder) => new $WorldAcceleratorMachine(holder))
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Advanced World Accelerator")
                .modelPropertyBool($GTMachineModelProperties.IS_RANDOM_TICK_MODE, true)
                .modelPropertyBool($GTMachineModelProperties.IS_WORKING_ENABLED, true)
                .modelPropertyBool($GTMachineModelProperties.IS_ACTIVE, false)
                .rotationState(RotationState.NONE)
                .tooltipBuilder((stack, tooltip) => {
                            let randTickWorkingArea = 3 + (tier - 1) * 2;
                            tooltip.add(Component.translatable("gtceu.machine.world_accelerator.description"));

                            tooltip.add(Component.translatable("gtceu.universal.tooltip.voltage_in",
                                    $FormattingUtil.formatNumbers(GTValues.V[tier]),
                                    GTValues.VNF[tier]));
                            tooltip.add(Component.translatable("gtceu.universal.tooltip.energy_storage_capacity",
                                    $FormattingUtil.formatNumbers(GTValues.V[tier] * 64)));

                            tooltip.add(Component.translatable("gtceu.machine.world_accelerator.working_area"));
                            tooltip.add(Component.translatable("gtceu.machine.world_accelerator.working_area_tile"));
                            tooltip.add(Component.translatable("gtceu.machine.world_accelerator.working_area_random",
                                    randTickWorkingArea, randTickWorkingArea));

}))
})