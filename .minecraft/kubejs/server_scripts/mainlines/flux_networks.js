ServerEvents.recipes(sog => {


    sog.recipes.gtceu.implosion_compressor('flux_dust')
        .itemInputs('fluxnetworks:flux_dust', '4x gtceu:industrial_tnt')
        .itemOutputs('fluxnetworks:flux_core')
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