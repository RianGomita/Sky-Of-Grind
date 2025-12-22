ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('fusion_coil_mk3')
        .itemInputs(
            'kubejs:cosmic_processor',
            '64x gtceu:neutron_reflector',
            'kubejs:cosmic_processor',
            '4x gtceu:uxv_electric_pump',
            '16x gtceu:superconducting_coil',
            '2x gtceu:uxv_field_generator',
            'kubejs:cosmic_processor',
            '64x gtceu:neutron_reflector',
            'kubejs:cosmic_processor'
        )
        .inputFluids('gtceu:peek 14400')
        .itemOutputs('16x kubejs:fusion_coil_mk3')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.assembler('fusion_machine_casing_mk_v')
        .itemInputs(
            'kubejs:cosmic_processor',
            'gtceu:uxv_machine_casing',
            'kubejs:cosmic_processor',
            '2x gtceu:uxv_field_generator',
            '2x kubejs:fusion_coil_mk3',
            '4x kubejs:uxv_voltage_coil',
            'kubejs:cosmic_processor',
            'gtceu:uxv_machine_casing',
            'kubejs:cosmic_processor'
        )
        .inputFluids('gtceu:peek 14400')
        .itemOutputs('8x kubejs:fusion_casing_mk5')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.eternity_fusion('eternity_fusion_1')
        .inputFluids('gtceu:neodymium 1000', 'gtceu:hydrogen 375')
        .outputFluids('gtceu:europium 50112')
        .duration(64)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_2')
        .inputFluids('gtceu:diamond 288', 'gtceu:radon 144')
        .outputFluids('gtceu:crystal_matrix 50112')
        .duration(512)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_3')
        .inputFluids('gtceu:gold 16', 'gtceu:aluminium 16')
        .outputFluids('gtceu:uranium 50112')
        .duration(128)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_4')
        .inputFluids('gtceu:silicon 16', 'gtceu:magnesium 16')
        .outputFluids('gtceu:iron_plasma 50112')
        .duration(32)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_5')
        .inputFluids('gtceu:xenon 125', 'gtceu:zinc 16')
        .outputFluids('gtceu:plutonium 50112')
        .duration(128)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_6')
        .inputFluids('gtceu:deuterium 125', 'gtceu:tritium 125')
        .outputFluids('gtceu:helium_plasma 50112')
        .duration(16)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_7')
        .inputFluids('gtceu:resonant_naquadah 16', 'gtceu:ruthenium 16')
        .outputFluids('gtceu:darmstadtium 50112')
        .duration(30)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_8')
        .inputFluids('gtceu:beryllium 16', 'gtceu:deuterium 375')
        .outputFluids('gtceu:nitrogen_plasma 50112')
        .duration(16)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_9')
        .inputFluids('gtceu:carbon 16', 'gtceu:helium_3 125')
        .outputFluids('gtceu:oxygen_plasma 50112')
        .duration(32)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_10')
        .inputFluids('gtceu:mercury 125', 'gtceu:magnesium 16')
        .outputFluids('gtceu:uranium_235 50112')
        .duration(128)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_11')
        .inputFluids('gtceu:antimatter 1000', 'gtceu:star_matter 10000')
        .outputFluids('gtceu:reactable_fissioned_matter_plasma 501120')
        .duration(30)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_12')
        .inputFluids('gtceu:titanium 48', 'gtceu:duranium 32')
        .outputFluids('gtceu:tritanium 50112')
        .duration(16)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_13')
        .inputFluids('gtceu:krypton 125', 'gtceu:cerium 16')
        .outputFluids('gtceu:plutonium_241 50112')
        .duration(128)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_14')
        .inputFluids('gtceu:titanium 350', 'gtceu:resonant_essence 16')
        .outputFluids('gtceu:cosmic_titanium 50112')
        .duration(512)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_15')
        .inputFluids('gtceu:stabilized_iridium 350', 'gtceu:resonant_essence 16')
        .outputFluids('gtceu:cosmic_iridium 50112')
        .duration(512)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_16')
        .inputFluids('gtceu:silver 144', 'gtceu:helium_3 375')
        .outputFluids('gtceu:tin_plasma 50112')
        .duration(16)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_17')
        .inputFluids('gtceu:silver 16', 'gtceu:copper 16')
        .outputFluids('gtceu:osmium 50112')
        .duration(64)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_18')
        .inputFluids('gtceu:enriched_naquadah 16', 'gtceu:radon 125')
        .outputFluids('gtceu:naquadria 50112')
        .duration(64)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_19')
        .inputFluids('gtceu:lutetium 16', 'gtceu:chromium 16')
        .outputFluids('gtceu:americium 50112')
        .duration(64)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_20')
        .inputFluids('gtceu:osmium 355', 'gtceu:resonant_essence 16')
        .outputFluids('gtceu:cosmic_osmium 50112')
        .duration(512)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_21')
        .inputFluids('gtceu:gallium 16', 'gtceu:radon 125')
        .outputFluids('gtceu:duranium 50112')
        .duration(32)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_22')
        .inputFluids('gtceu:californium 255', 'gtceu:cosmic_iridium 35')
        .outputFluids('gtceu:oganesson 50112')
        .duration(512)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_23')
        .inputFluids('gtceu:hydrogen 125', 'gtceu:vanadium 16')
        .outputFluids('gtceu:chromium 50112')
        .duration(64)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_24')
        .inputFluids('gtceu:lanthanum 16', 'gtceu:silicon 16')
        .outputFluids('gtceu:lutetium 50112')
        .duration(16)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_25')
        .inputFluids('gtceu:gold 16', 'gtceu:mercury 16')
        .outputFluids('gtceu:radon 50112')
        .duration(64)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_26')
        .inputFluids('gtceu:tungsten 350', 'gtceu:resonant_essence 16')
        .outputFluids('gtceu:cosmic_tungsten 50112')
        .duration(512)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_27')
        .inputFluids('gtceu:potassium 16', 'gtceu:fluorine 125')
        .outputFluids('gtceu:nickel_plasma 50112')
        .duration(16)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_28')
        .inputFluids('gtceu:carbon 16', 'gtceu:magnesium 16')
        .outputFluids('gtceu:argon_plasma 50112')
        .duration(32)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_29')
        .inputFluids('gtceu:silver 144', 'gtceu:lithium 144')
        .outputFluids('gtceu:indium 50112')
        .duration(16)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_30')
        .inputFluids('gtceu:americium 128', 'gtceu:naquadria 128')
        .outputFluids('gtceu:neutronium 50112')
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_31')
        .inputFluids('gtceu:zinc 255', 'gtceu:bismuth 120')
        .outputFluids('gtceu:nihonium 50112')
        .duration(512)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_32')
        .inputFluids('gtceu:plutonium_241 144', 'gtceu:hydrogen 2000')
        .outputFluids('gtceu:americium_plasma 50112')
        .duration(64)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_33')
        .inputFluids('gtceu:molten_space_time 144', 'gtceu:stellar_matter_plasma 1152')
        .outputFluids('gtceu:astral_space_time_plasma 1440')
        .duration(64)
        .EUt(GTValues.VA[GTValues.UIV]);
});
