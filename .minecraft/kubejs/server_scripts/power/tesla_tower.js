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

    sog.recipes.gtceu.assembler('tesla_coil_mk1')
    .itemInputs('1x gtceu:quantum_star', '4x gtceu:osmiridium_rotor', '24x #gtceu:inductors')
    .itemOutputs('8x kubejs:tesla_coil_mk1')
    .duration(1500)
    .EUt(GTValues.VA[GTValues.IV]);
    sog.recipes.gtceu.assembler('tesla_coil_mk2')
    .itemInputs('8x gtceu:quantum_star', '4x gtceu:naquadah_alloy_rotor', '24x #gtceu:inductors')
    .inputFluids('gtceu:naquadria 72')
    .itemOutputs('8x kubejs:tesla_coil_mk2')
    .duration(1500)
    .EUt(GTValues.VA[GTValues.LuV]);
    sog.recipes.gtceu.assembler('tesla_coil_mk3')
    .itemInputs('8x gtceu:quantum_star', 'gtceu:teslarium_gear', '24x #gtceu:inductors')
    .inputFluids('gtceu:naquadria 72')
    .itemOutputs('1x kubejs:tesla_coil_mk3')
    .duration(1500)
    .EUt(GTValues.VA[GTValues.ZPM]);

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