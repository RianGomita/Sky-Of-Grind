// T E S L A 

ServerEvents.recipes(sog => {

    // P O W E R   R E C I P E S

    sog.recipes.gtceu.tesla_tower('tesla_mk1')
    .chancedInput('kubejs:tesla_coil_mk1', 500, 0)
    .chancedOutput('gtceu:small_teslarium_dust', 500, 0)
    .duration(200)
    .EUt(-(GTValues.V[GTValues.UV]))
    sog.recipes.gtceu.tesla_tower('tesla_mk2')
    .chancedInput('kubejs:tesla_coil_mk2', 500, 0)
    .chancedOutput('gtceu:small_teslarium_dust', 2500, 0)
    .duration(200)
    .EUt(-(GTValues.V[GTValues.UEV]))
    sog.recipes.gtceu.tesla_tower('tesla_mk3')
    .chancedInput('kubejs:tesla_coil_mk3', 500, 0)
    .duration(200)
    .EUt(-(GTValues.V[GTValues.UXV]))

    // C O I L   R E C I P E S



    sog.shaped(
        '2x kubejs:osmiridium_pipe_casing',
        ['ABA', 'BYB', 'ABA'],
        {
            A: 'gtceu:osmiridium_plate',
            B: 'gtceu:osmiridium_normal_item_pipe',
            Y: 'gtceu:hssg_frame',
    })
    sog.shaped(
        'gtceu:tesla_tower',
        ['ABA', 'HYH', 'LPL'],
        {
            A: 'gtceu:osmiridium_normal_item_pipe',
            B: 'kubejs:tesla_coil_mk1',
            Y: 'gtceu:advanced_smd_inductor',
            H: 'gtceu:robust_machine_casing',
            L: 'gtceu:iv_machine_hull',
            P: 'kubejs:osmiridium_pipe_casing'
    })
})