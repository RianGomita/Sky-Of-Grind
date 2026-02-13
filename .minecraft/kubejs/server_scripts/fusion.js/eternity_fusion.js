ServerEvents.recipes(event => {
    // Fusion MK5
    event.recipes.gtceu.assembly_line('fusion_reactor_mk5')
        .itemInputs(
            'kubejs:fusion_coil_block_mk_3',
            '4x #gtceu:circuits/uiv',
            '64x gtceu:gravi_star',
            '16x gtceu:double_awakened_draconium_plate',
            '8x gtceu:uev_field_generator',
            '64x kubejs:extremely_advanced_soc',
            '32x gtceu:awakened_draconium_single_wire',
            '32x gtceu:fine_heavy_duty_alloy_t4_wire')
        .itemOutputs('gtceu:fusion_mk5')
        .inputFluids(
            Fluid.of('gtceu:neoprene', 5950),
            Fluid.of('gtceu:xlpe', 1152),
            Fluid.of('gtceu:meta_stable_molten_kevlar', 1152),
            Fluid.of('gtceu:cosmic_matter', 10152),
    )
    .stationResearch(b => b.researchStack(Item.of('gtceu:uev_fusion_reactor')).EUt(GTValues.VA[GTValues.UIV]).CWUt(512)) // 
    .duration(1000)
    .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.assembly_line('eternity_fusion_reactor')
        .itemInputs(
            'kubejs:eternity_fusion_coil_block',
            '4x #gtceu:circuits/uxv',
            '64x gtceu:gravi_star',
            '16x gtceu:double_stellar_matter_plasma_plate',
            '8x gtceu:uiv_field_generator',
            '64x kubejs:extremely_advanced_soc',
            '32x gtceu:fine_universium_wire',
            '32x gtceu:space_time_spring')
        .itemOutputs('gtceu:eternity_fusion_reactor')
        .inputFluids(
            Fluid.of('gtceu:meta_stable_molten_kevlar', 5950),
            Fluid.of('gtceu:meta_stable_molten_zylon', 1152),
            Fluid.of('gtceu:cosmic_matter', 1152),
            Fluid.of('gtceu:universium', 10152),
    )
    .stationResearch(b => b.researchStack(Item.of('gtceu:fusion_mk5')).EUt(GTValues.VA[GTValues.UXV]).CWUt(512)) // 
    .duration(1000)
    .EUt(GTValues.VA[GTValues.UXV])

    event.recipes.gtceu.assembler('fusion_machine_casing_mk_v')
        .itemInputs(
            '4x gtceu:heavy_duty_alloy_t4_plate',
            '6x gtceu:awakened_draconium_plate',
            '4x gtceu:heavy_duty_alloy_t4_plate',
            'gtceu:uiv_field_generator',
            'kubejs:fusion_coil_block_mk_3',
            '2x kubejs:uiv_voltage_coil',
            '4x gtceu:heavy_duty_alloy_t4_plate',
            '4x kubejs:dragon_processor',
            '4x gtceu:heavy_duty_alloy_t4_plate'
        )
        .inputFluids('gtceu:peek 3600')
        .itemOutputs('4x kubejs:fusion_machine_casing_mk_v')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.assembler('fusion_coil_block_mk_3')
        .itemInputs(
            '4x gtceu:heavy_duty_alloy_t4_plate',
            '6x gtceu:awakened_draconium_plate',
            '4x gtceu:heavy_duty_alloy_t4_plate',
            '2x gtceu:uiv_electric_pump',
            '16x gtceu:superconducting_coil',
            'gtceu:uiv_field_generator',
            '4x gtceu:heavy_duty_alloy_t4_plate',
            '32x gtceu:neutron_reflector',
            '4x gtceu:heavy_duty_alloy_t4_plate'
        )
        .inputFluids('gtceu:peek 3600')
        .itemOutputs('16x kubejs:fusion_coil_block_mk_3')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UIV]);

    // Eternity Fusion Reactor
    event.recipes.gtceu.assembler('eternity_fusion_machine_casing')
        .itemInputs(
            '4x gtceu:eternity_plate',
            '6x gtceu:pure_cosmic_matter_plate',
            '4x gtceu:eternity_plate',
            'gtceu:uxv_field_generator',
            'kubejs:eternity_fusion_coil_block',
            '2x kubejs:uxv_voltage_coil',
            '4x gtceu:eternity_plate',
            '4x kubejs:cosmic_processor',
            '4x gtceu:eternity_plate'
        )
        .inputFluids('gtceu:meta_stable_molten_zylon 3600')
        .itemOutputs('16x kubejs:eternity_fusion_machine_casing')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.assembler('eternity_fusion_coil_block_assembler')
        .itemInputs(
            '4x gtceu:eternity_plate',
            '6x gtceu:pure_cosmic_matter_plate',
            '4x gtceu:eternity_plate',
            '2x gtceu:uxv_electric_pump',
            '32x gtceu:superconducting_coil',
            'gtceu:uxv_field_generator',
            '4x gtceu:eternity_plate',
            '64x gtceu:neutron_reflector',
            '4x gtceu:eternity_plate'
        )
        .inputFluids('gtceu:meta_stable_molten_zylon 3600')
        .itemOutputs('32x kubejs:eternity_fusion_coil_block')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UIV]);

    // Fusion MK 5 Recipes
    event.recipes.gtceu.fusion_mk5('fusion_mk5_1')
        .inputFluids('gtceu:neodymium 16', 'gtceu:hydrogen 375')
        .outputFluids('gtceu:europium 16000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_2')
        .inputFluids('gtceu:diamond 288', 'gtceu:radon 144')
        .outputFluids('gtceu:crystal_matrix 8000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_3')
        .inputFluids('gtceu:gold 16', 'gtceu:aluminium 16')
        .outputFluids('gtceu:uranium 16000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_4')
        .inputFluids('gtceu:silicon 16', 'gtceu:magnesium 16')
        .outputFluids('gtceu:iron_plasma 44')
        .duration(60)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_5')
        .inputFluids('gtceu:xenon 125', 'gtceu:zinc 16')
        .outputFluids('gtceu:plutonium 16000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_6')
        .inputFluids('gtceu:deuterium 125', 'gtceu:tritium 125')
        .outputFluids('gtceu:helium_plasma 688')
        .duration(30)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_7')
        .inputFluids('gtceu:resonant_naquadah 16', 'gtceu:ruthenium 16')
        .outputFluids('gtceu:darmstadtium 16000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_8')
        .inputFluids('gtceu:beryllium 16', 'gtceu:deuterium 375')
        .outputFluids('gtceu:nitrogen_plasma 448')
        .duration(60)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_9')
        .inputFluids('gtceu:carbon 16', 'gtceu:helium_3 125')
        .outputFluids('gtceu:oxygen_plasma 448')
        .duration(60)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_10')
        .inputFluids('gtceu:mercury 125', 'gtceu:magnesium 16')
        .outputFluids('gtceu:uranium_235 16000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_11')
        .inputFluids('gtceu:antimatter 1000', 'gtceu:star_matter 10000')
        .outputFluids('gtceu:reactable_fissioned_matter_plasma 10000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_12')
        .inputFluids('gtceu:titanium 32', 'gtceu:duranium 32')
        .outputFluids('gtceu:tritanium 16000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_13')
        .inputFluids('gtceu:krypton 125', 'gtceu:cerium 16')
        .outputFluids('gtceu:plutonium_241 16000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_14')
        .inputFluids('gtceu:titanium 350', 'gtceu:resonant_essence 16')
        .outputFluids('gtceu:cosmic_titanium 1350')
        .duration(60)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_15')
        .inputFluids('gtceu:stabilized_iridium 350', 'gtceu:resonant_essence 16')
        .outputFluids('gtceu:cosmic_iridium 900')
        .duration(60)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_16')
        .inputFluids('gtceu:silver 144', 'gtceu:helium_3 375')
        .outputFluids('gtceu:tin_plasma 238')
        .duration(60)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_17')
        .inputFluids('gtceu:silver 16', 'gtceu:copper 16')
        .outputFluids('gtceu:osmium 16000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_18')
        .inputFluids('gtceu:enriched_naquadah 16', 'gtceu:radon 125')
        .outputFluids('gtceu:naquadria 16000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_19')
        .inputFluids('gtceu:lutetium 32', 'gtceu:chromium 32')
        .outputFluids('gtceu:americium 16000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_20')
        .inputFluids('gtceu:osmium 355', 'gtceu:resonant_essence 16')
        .outputFluids('gtceu:cosmic_osmium 1350')
        .duration(60)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_21')
        .inputFluids('gtceu:gallium 16', 'gtceu:radon 125')
        .outputFluids('gtceu:duranium 16000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_22')
        .inputFluids('gtceu:californium 255', 'gtceu:cosmic_iridium 35')
        .outputFluids('gtceu:oganesson 24000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_23')
        .inputFluids('gtceu:hydrogen 125', 'gtceu:vanadium 16')
        .outputFluids('gtceu:chromium 16000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_24')
        .inputFluids('gtceu:lanthanum 16', 'gtceu:silicon 16')
        .outputFluids('gtceu:lutetium 16000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_25')
        .inputFluids('gtceu:gold 16', 'gtceu:mercury 16')
        .outputFluids('gtceu:radon 16000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_26')
        .inputFluids('gtceu:tungsten 350', 'gtceu:resonant_essence 16')
        .outputFluids('gtceu:cosmic_tungsten 1350')
        .duration(60)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_27')
        .inputFluids('gtceu:potassium 16', 'gtceu:fluorine 125')
        .outputFluids('gtceu:nickel_plasma 44')
        .duration(60)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_28')
        .inputFluids('gtceu:carbon 16', 'gtceu:magnesium 16')
        .outputFluids('gtceu:argon_plasma 190')
        .duration(60)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_29')
        .inputFluids('gtceu:silver 144', 'gtceu:lithium 144')
        .outputFluids('gtceu:indium 16000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_30')
        .inputFluids('gtceu:americium 128', 'gtceu:naquadria 128')
        .outputFluids('gtceu:neutronium 16000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_31')
        .inputFluids('gtceu:zinc 255', 'gtceu:bismuth 120')
        .outputFluids('gtceu:nihonium 24000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_32')
        .inputFluids('gtceu:plutonium_241 144', 'gtceu:hydrogen 2000')
        .outputFluids('gtceu:americium_plasma 50')
        .duration(60)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.fusion_mk5('fusion_mk5_33')
        .inputFluids('gtceu:neon 144', 'gtceu:argon_plasma 16')
        .outputFluids('gtceu:neon_plasma_plasma 190')
        .duration(30)
        .EUt((GTValues.VA[GTValues.UEV]))
        
    // Eternity Fusion Recipes
    event.recipes.gtceu.eternity_fusion('eternity_fusion_1')
        .inputFluids('gtceu:neodymium 16', 'gtceu:hydrogen 375')
        .outputFluids('gtceu:europium 256000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_2')
        .inputFluids('gtceu:diamond 288', 'gtceu:radon 144')
        .outputFluids('gtceu:crystal_matrix 128000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_3')
        .inputFluids('gtceu:gold 16', 'gtceu:aluminium 16')
        .outputFluids('gtceu:uranium 256000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_4')
        .inputFluids('gtceu:silicon 16', 'gtceu:magnesium 16')
        .outputFluids('gtceu:iron_plasma 704')
        .duration(30)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_5')
        .inputFluids('gtceu:xenon 125', 'gtceu:zinc 16')
        .outputFluids('gtceu:plutonium 256000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_6')
        .inputFluids('gtceu:deuterium 125', 'gtceu:tritium 125')
        .outputFluids('gtceu:helium_plasma 11008')
        .duration(15)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_7')
        .inputFluids('gtceu:resonant_naquadah 16', 'gtceu:ruthenium 16')
        .outputFluids('gtceu:darmstadtium 256000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_8')
        .inputFluids('gtceu:beryllium 16', 'gtceu:deuterium 375')
        .outputFluids('gtceu:nitrogen_plasma 7168')
        .duration(30)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_9')
        .inputFluids('gtceu:carbon 16', 'gtceu:helium_3 125')
        .outputFluids('gtceu:oxygen_plasma 7168')
        .duration(30)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_10')
        .inputFluids('gtceu:mercury 125', 'gtceu:magnesium 16')
        .outputFluids('gtceu:uranium_235 256000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_11')
        .inputFluids('gtceu:antimatter 1000', 'gtceu:star_matter 10000')
        .outputFluids('gtceu:reactable_fissioned_matter_plasma 10000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_12')
        .inputFluids('gtceu:titanium 32', 'gtceu:duranium 32')
        .outputFluids('gtceu:tritanium 256000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_13')
        .inputFluids('gtceu:krypton 125', 'gtceu:cerium 16')
        .outputFluids('gtceu:plutonium_241 256000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_14')
        .inputFluids('gtceu:titanium 350', 'gtceu:resonant_essence 16')
        .outputFluids('gtceu:cosmic_titanium 21600')
        .duration(30)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_15')
        .inputFluids('gtceu:stabilized_iridium 350', 'gtceu:resonant_essence 16')
        .outputFluids('gtceu:cosmic_iridium 14400')
        .duration(30)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_16')
        .inputFluids('gtceu:silver 144', 'gtceu:helium_3 375')
        .outputFluids('gtceu:tin_plasma 3808')
        .duration(30)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_17')
        .inputFluids('gtceu:silver 16', 'gtceu:copper 16')
        .outputFluids('gtceu:osmium 256000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_18')
        .inputFluids('gtceu:enriched_naquadah 16', 'gtceu:radon 125')
        .outputFluids('gtceu:naquadria 256000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_19')
        .inputFluids('gtceu:lutetium 32', 'gtceu:chromium 32')
        .outputFluids('gtceu:americium 256000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_20')
        .inputFluids('gtceu:osmium 355', 'gtceu:resonant_essence 16')
        .outputFluids('gtceu:cosmic_osmium 21600')
        .duration(30)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_21')
        .inputFluids('gtceu:gallium 16', 'gtceu:radon 125')
        .outputFluids('gtceu:duranium 256000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_22')
        .inputFluids('gtceu:californium 255', 'gtceu:cosmic_iridium 35')
        .outputFluids('gtceu:oganesson 384000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_23')
        .inputFluids('gtceu:hydrogen 125', 'gtceu:vanadium 16')
        .outputFluids('gtceu:chromium 256000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_24')
        .inputFluids('gtceu:lanthanum 16', 'gtceu:silicon 16')
        .outputFluids('gtceu:lutetium 256000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_25')
        .inputFluids('gtceu:gold 16', 'gtceu:mercury 16')
        .outputFluids('gtceu:radon 256000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_26')
        .inputFluids('gtceu:tungsten 350', 'gtceu:resonant_essence 16')
        .outputFluids('gtceu:cosmic_tungsten 21600')
        .duration(30)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_27')
        .inputFluids('gtceu:potassium 16', 'gtceu:fluorine 125')
        .outputFluids('gtceu:nickel_plasma 704')
        .duration(30)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_28')
        .inputFluids('gtceu:carbon 16', 'gtceu:magnesium 16')
        .outputFluids('gtceu:argon_plasma 3040')
        .duration(30)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_29')
        .inputFluids('gtceu:silver 144', 'gtceu:lithium 144')
        .outputFluids('gtceu:indium 256000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_30')
        .inputFluids('gtceu:americium 128', 'gtceu:naquadria 128')
        .outputFluids('gtceu:neutronium 256000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_31')
        .inputFluids('gtceu:zinc 255', 'gtceu:bismuth 120')
        .outputFluids('gtceu:nihonium 384000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_32')
        .inputFluids('gtceu:plutonium_241 144', 'gtceu:hydrogen 2000')
        .outputFluids('gtceu:americium_plasma 800')
        .duration(30)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_33')
        .inputFluids('gtceu:molten_space_time 144', 'gtceu:stellar_matter_plasma 1152')
        .outputFluids('gtceu:astral_space_time_plasma 1440')
        .duration(30)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.eternity_fusion('eternity_fusion_34')
        .inputFluids('gtceu:neon 144', 'gtceu:argon_plasma 16')
        .outputFluids('gtceu:neon_plasma_plasma 3040')
        .duration(30)
        .EUt((GTValues.VA[GTValues.UEV]))
});