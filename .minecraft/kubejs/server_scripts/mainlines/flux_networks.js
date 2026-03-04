ServerEvents.recipes(sog => {

    sog.recipes.gtceu.forming_press('flux_dust')
        .itemInputs('minecraft:obsidian', '4x gtceu:californium_dust')
        .notConsumable('gtceu:crystal_matrix_block')
        .itemOutputs('fluxnetworks:flux_dust')
        .duration(500)
        .EUt(GTValues.VA[GTValues.UV]);
    sog.recipes.gtceu.implosion_compressor('flux_dust')
        .itemInputs('fluxnetworks:flux_dust', '4x gtceu:industrial_tnt')
        .itemOutputs('fluxnetworks:flux_core')
        .duration(500)
        .EUt(GTValues.VA[GTValues.UV]);
    sog.recipes.gtceu.assembler('flux_plug')
        .itemInputs('4x fluxnetworks:flux_core', 'kubejs:gravitational_containment_cell')
        .itemOutputs('4x fluxnetworks:flux_plug')
        .circuit(2)
        .duration(500)
        .EUt(GTValues.VA[GTValues.UV]);
    sog.recipes.gtceu.assembler('flux_point')
        .itemInputs('64x fluxnetworks:flux_core', 'kubejs:gravitational_containment_cell')
        .itemOutputs('16x fluxnetworks:flux_point')
        .circuit(1)
        .duration(500)
        .EUt(GTValues.VA[GTValues.UV]);
    sog.recipes.gtceu.compressor('flux_block')
        .itemInputs('9x fluxnetworks:flux_dust')
        .itemOutputs('fluxnetworks:flux_block')
        .duration(500)
        .EUt(GTValues.VA[GTValues.UHV]);
    sog.recipes.gtceu.assembler('flux_controller')
        .itemInputs('4x fluxnetworks:flux_core', 'fluxnetworks:flux_block', 'fluxnetworks:flux_plug', 'fluxnetworks:flux_point')
        .itemOutputs('1x fluxnetworks:flux_controller')
        .duration(500)
        .EUt(GTValues.VA[GTValues.UV]);
    sog.shaped(
            'fluxnetworks:flux_configurator',
            [' AB', ' BA', 'B  '],
            {
                A: 'fluxnetworks:flux_core',
                B: 'gtceu:crystal_matrix_rod'
            }
            ).id('flux_configurator')
})