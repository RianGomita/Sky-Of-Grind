ServerEvents.recipes(sog => {

    sog.recipes.gtceu.assembly_line('basic_fusion_injector')
    .itemInputs('16x gtceu:cosmic_tungsten_plate', '16x gtceu:gravi_star', 'gtceu:uev_fusion_reactor', '4x #gtceu:circuits/uiv', '4x #gtceu:circuits/uhv', '4x gtceu:uev_robot_arm', '8x gtceu:uev_electric_piston', '4x gtceu:uhv_field_generator')
    .itemOutputs('gtceu:basic_fusion_injector')
    .inputFluids(
    Fluid.of('gtceu:stropharic_hypoxylon', 9152),
    Fluid.of('gtceu:antimatter', 1152),
    Fluid.of('gtceu:crystal_matrix', 1152),
    Fluid.of('gtceu:peek', 1152)
    )
    .duration(20*300)
    .EUt(GTValues.VA[GTValues.UV])   
    sog.recipes.gtceu.assembly_line('wyvern_fusion_injector')
    .itemInputs('16x gtceu:double_draconium_plate', '8x draconicevolution:wyvern_core', 'gtceu:basic_fusion_injector', '4x #gtceu:circuits/uiv', '4x #gtceu:circuits/uev', '16x gtceu:uev_robot_arm', '8x gtceu:uev_electric_piston', '8x gtceu:uhv_field_generator')
    .itemOutputs('gtceu:wyvern_fusion_injector')
    .inputFluids(
    Fluid.of('gtceu:stropharic_hypoxylon', 9152),
    Fluid.of('gtceu:antimatter', 1152),
    Fluid.of('gtceu:peek', 1152),
    Fluid.of('gtceu:crystal_matrix', 1152)
    )
    .duration(20*300)
    .EUt(GTValues.VA[GTValues.UIV])  
    sog.recipes.gtceu.assembly_line('draconic_fusion_injector')
    .itemInputs('16x gtceu:double_awakened_draconium_plate', '8x draconicevolution:awakened_core', 'gtceu:wyvern_fusion_injector', '16x #gtceu:circuits/uiv', '8x #gtceu:circuits/uev', '16x gtceu:uev_robot_arm', '8x gtceu:uev_electric_piston', '8x gtceu:uev_field_generator')
    .itemOutputs('gtceu:draconic_fusion_injector')
    .inputFluids(
    Fluid.of('gtceu:stropharic_hypoxylon', 9152),
    Fluid.of('gtceu:antimatter', 5000),
    Fluid.of('gtceu:peek', 1152),
    Fluid.of('gtceu:crystal_matrix', 5000)
    )
    .duration(20*300)
    .EUt(GTValues.VA[GTValues.UXV])  
    sog.recipes.gtceu.assembly_line('chaotic_fusion_injector')
    .itemInputs('7x gtceu:dense_chaos_plate', '8x draconicevolution:chaotic_core', 'gtceu:draconic_fusion_injector', '8x #gtceu:circuits/uxv', '4x #gtceu:circuits/uiv', '16x gtceu:uiv_robot_arm', '8x gtceu:uiv_electric_piston', '8x gtceu:uiv_field_generator', '64x kubejs:space_time_heavy_plating')
    .itemOutputs('gtceu:chaotic_fusion_injector')
    .inputFluids(
    Fluid.of('gtceu:stropharic_hypoxylon', 9152),
    Fluid.of('gtceu:antimatter', 5000),
    Fluid.of('gtceu:meta_stable_molten_kevlar', 5000),
    Fluid.of('gtceu:crystal_matrix', 5000)
    )
    .duration(20*300)
    .EUt(GTValues.VA[GTValues.OpV])  

    const basic_injector = (id, output, input, voltage, durationInSeconds) => {
    
        sog.recipes.gtceu.basic_injector(id)
            .itemInputs(input)
            .itemOutputs(output)
            .duration(20 * durationInSeconds)
            .circuit(1)
            .EUt(GTValues.VA[GTValues[voltage]])

    }
    const wyvern_injector = (id, output, input, voltage, durationInSeconds) => {
    
        sog.recipes.gtceu.wyvern_injector(id)
            .itemInputs(input)
            .itemOutputs(output)
            .duration(20 * durationInSeconds)
            .circuit(1)
            .EUt(GTValues.VA[GTValues[voltage]])

    }
    const draconic_injector = (id, output, input, voltage, durationInSeconds) => {
    
        sog.recipes.gtceu.draconic_injector(id)
            .itemInputs(input)
            .itemOutputs(output)
            .duration(20 * durationInSeconds)
            .circuit(1)
            .EUt(GTValues.VA[GTValues[voltage]])

    }
    const chaotic_injector = (id, output, input, voltage, durationInSeconds) => {
    
        sog.recipes.gtceu.chaotic_injector(id)
            .itemInputs(input)
            .itemOutputs(output)
            .duration(20 * durationInSeconds)
            .circuit(1)
            .EUt(GTValues.VA[GTValues[voltage]])

    }
    
    wyvern_injector('wyvern_energy_core', 'draconicevolution:wyvern_energy_core', ['4x draconicevolution:wyvern_core', '4x gtceu:gravi_star', '1x kubejs:draconium_heavy_plating'], "UEV", 90)
    basic_injector('wyvern_core', '8x draconicevolution:wyvern_core', ['16x draconicevolution:draconium_core', '8x gtceu:gravi_star', '1x kubejs:draconium_heavy_plating'], "UEV", 90)
    wyvern_injector('wyvern_shovel', 'draconicevolution:wyvern_shovel', ['4x draconicevolution:draconium_core', '8x draconicevolution:draconium_ingot', '1x draconicevolution:wyvern_energy_core', '4x draconicevolution:basic_relay_crystal', 'minecraft:diamond_shovel'], "UEV", 90)
    chaotic_injector('chaos_infuser', 'draconicadditions:chaos_infuser', ['1x draconicevolution:energy_transfuser', '1x draconicadditions:chaos_container'], "UXV", 90)
    basic_injector('draconium_chest', 'draconicevolution:draconium_chest', ['16x draconicevolution:draconium_core', '5x minecraft:furnace', '2x minecraft:crafting_table', '2x draconicevolution:draconium_block', 'minecraft:chest'], "UEV", 90)
    chaotic_injector('chaotic_capacitor', 'draconicevolution:chaotic_capacitor', ['32x draconicevolution:awakened_draconium_ingot', '6x draconicevolution:chaotic_energy_core', '2x draconicevolution:chaotic_core', 'draconicevolution:draconic_capacitor'], "UXV", 90)
    wyvern_injector('advanced_dislocator', 'draconicevolution:advanced_dislocator', ['4x draconicevolution:wyvern_core', '12x draconicevolution:draconium_ingot', '16x minecraft:ender_pearl', '1x draconicevolution:dislocator'], "UEV", 90)
    chaotic_injector('chaotic_pickaxe', 'draconicevolution:chaotic_pickaxe', ['18x draconicevolution:awakened_draconium_ingot', '4x draconicevolution:chaotic_core', '2x draconicevolution:chaotic_energy_core', 'draconicevolution:draconic_pickaxe'], "UXV", 90)
    wyvern_injector('awakened_draconium_block', 'draconicevolution:awakened_draconium_block', ['12x draconicevolution:wyvern_core', '4x draconicevolution:dragon_heart', '4x draconicevolution:draconium_block'], "UEV", 90)
    chaotic_injector('chaotic_staff', 'draconicevolution:chaotic_staff', ['4x draconicevolution:large_chaos_frag', '4x draconicevolution:chaos_shard', '6x draconicevolution:chaotic_energy_core', '8x draconicevolution:awakened_core', '4x draconicevolution:chaotic_core', 'draconicevolution:draconic_staff'], "UXV", 90)
    draconic_injector('draconic_staff', 'draconicevolution:draconic_staff', ['18x draconicevolution:awakened_draconium_ingot', '2x draconicevolution:draconic_energy_core', '1x draconicevolution:awakened_core', '1x draconicevolution:draconic_sword', '1x draconicevolution:draconic_shovel', 'draconicevolution:draconic_pickaxe'], "UIV", 90)
    chaotic_injector('chaotic_shovel', 'draconicevolution:chaotic_shovel', ['18x draconicevolution:awakened_draconium_ingot', '4x draconicevolution:chaotic_core', '2x draconicevolution:chaotic_energy_core', 'draconicevolution:draconic_shovel'], "UXV", 90)
    chaotic_injector('chaotic_sword', 'draconicevolution:chaotic_sword', ['18x draconicevolution:awakened_draconium_ingot', '4x draconicevolution:chaotic_core', '2x draconicevolution:chaotic_energy_core', 'draconicevolution:draconic_sword'], "UXV", 90)
    chaotic_injector('chaos_crystalizer', 'draconicadditions:chaos_crystalizer', ['1x draconicevolution:energy_transfuser', '1x draconicadditions:chaos_liquifier'], "UXV", 90)
    wyvern_injector('draconic_core', 'draconicevolution:awakened_core', ['16x draconicevolution:wyvern_core', '8x gtceu:gravi_star', '2x kubejs:awakened_draconium_heavy_plating'], "UEV", 90)
    wyvern_injector('wyvern_capacitor', 'draconicevolution:wyvern_capacitor', ['32x draconicevolution:draconium_ingot', '8x draconicevolution:wyvern_energy_core', '2x draconicevolution:wyvern_core'], "UEV", 90)
    draconic_injector('draconic_sword', 'draconicevolution:draconic_sword', ['18x draconicevolution:awakened_draconium_ingot', '4x draconicevolution:wyvern_core', '2x draconicevolution:draconic_energy_core', 'draconicevolution:wyvern_sword'], "UIV", 90)
    chaotic_injector('chaotic_bow', 'draconicevolution:chaotic_bow', ['18x draconicevolution:awakened_draconium_ingot', '4x draconicevolution:chaotic_core', '2x draconicevolution:chaotic_energy_core', 'draconicevolution:draconic_bow'], "UXV", 90)
    chaotic_injector('chaos_extractor', 'draconicadditions:chaos_extractor', ['1x draconicevolution:energy_transfuser', '1x draconicadditions:chaos_infuser'], "UXV", 90)
    draconic_injector('draconic_pickaxe', 'draconicevolution:draconic_pickaxe', ['18x draconicevolution:awakened_draconium_ingot', '4x draconicevolution:wyvern_core', '2x draconicevolution:draconic_energy_core', 'draconicevolution:wyvern_pickaxe'], "UIV", 90)
    wyvern_injector('wyvern_sword', 'draconicevolution:wyvern_sword', ['4x draconicevolution:draconium_core', '8x draconicevolution:draconium_ingot', '1x draconicevolution:wyvern_energy_core', '4x draconicevolution:basic_relay_crystal', 'minecraft:diamond_sword'], "UEV", 90)
    chaotic_injector('chaotic_axe', 'draconicevolution:chaotic_axe', ['18x draconicevolution:awakened_draconium_ingot', '4x draconicevolution:chaotic_core', '2x draconicevolution:chaotic_energy_core', 'draconicevolution:draconic_axe'], "UXV", 90)
    draconic_injector('draconic_relay_crystal', '4x draconicevolution:draconic_relay_crystal', ['12x draconicevolution:wyvern_energy_core', '2x draconicevolution:wyvern_core', '8x gtceu:crystal_matrix_plate', '4x draconicevolution:wyvern_relay_crystal'], "UIV", 90)
    draconic_injector('draconic_capacitor', 'draconicevolution:draconic_capacitor', ['32x draconicevolution:awakened_draconium_ingot', '8x draconicevolution:draconic_energy_core', '2x draconicevolution:awakened_core'], "UIV", 90)
    wyvern_injector('wyvern_chestpiece', 'draconicevolution:wyvern_chestpiece', ['4x draconicevolution:draconium_core', '8x draconicevolution:draconium_ingot', '1x draconicevolution:wyvern_energy_core', '4x draconicevolution:basic_relay_crystal', 'minecraft:diamond_chestplate'], "UEV", 90)
    draconic_injector('draconic_bow', 'draconicevolution:draconic_bow', ['18x draconicevolution:awakened_draconium_ingot', '4x draconicevolution:wyvern_core', '2x draconicevolution:draconic_energy_core', 'draconicevolution:wyvern_bow'], "UIV", 90)
    draconic_injector('draconic_axe', 'draconicevolution:draconic_axe', ['18x draconicevolution:awakened_draconium_ingot', '4x draconicevolution:wyvern_core', '2x draconicevolution:draconic_energy_core', 'draconicevolution:wyvern_axe'], "UIV", 90)
    chaotic_injector('chaotic_chestpiece', 'draconicevolution:chaotic_chestpiece', ['18x draconicevolution:awakened_draconium_ingot', '4x draconicevolution:chaotic_core', '2x draconicevolution:chaotic_energy_core', 'draconicevolution:draconic_chestpiece'], "UXV", 90)
    wyvern_injector('wyvern_hoe', 'draconicevolution:wyvern_hoe', ['4x draconicevolution:draconium_core', '8x draconicevolution:draconium_ingot', '1x draconicevolution:wyvern_energy_core', '4x draconicevolution:basic_relay_crystal', 'minecraft:diamond_hoe'], "UEV", 90)
    chaotic_injector('chaotic_hoe', 'draconicevolution:chaotic_hoe', ['18x draconicevolution:awakened_draconium_ingot', '4x draconicevolution:chaotic_core', '2x draconicevolution:chaotic_energy_core', 'draconicevolution:draconic_hoe'], "UXV", 90)
    wyvern_injector('wyvern_pickaxe', 'draconicevolution:wyvern_pickaxe', ['4x draconicevolution:draconium_core', '8x draconicevolution:draconium_ingot', '1x draconicevolution:wyvern_energy_core', '4x draconicevolution:basic_relay_crystal', 'minecraft:diamond_pickaxe'], "UEV", 90)
    chaotic_injector('chaotic_staff_tool', 'draconicevolution:chaotic_staff', ['12x draconicevolution:large_chaos_frag', '2x draconicevolution:chaotic_energy_core', '1x draconicevolution:chaotic_core', 'draconicevolution:chaotic_sword', 'draconicevolution:chaotic_shovel', 'draconicevolution:chaotic_pickaxe'], "UXV", 90)
    draconic_injector('draconic_hoe', 'draconicevolution:draconic_hoe', ['18x draconicevolution:awakened_draconium_ingot', '4x draconicevolution:wyvern_core', '2x draconicevolution:draconic_energy_core', 'draconicevolution:wyvern_hoe'], "UIV", 90)
    draconic_injector('chaos_container', 'draconicadditions:chaos_container', ['4x draconicevolution:infused_obsidian', '4x draconicevolution:wyvern_energy_core', '1x draconicevolution:dislocator', 'minecraft:bucket'], "UIV", 90)
    wyvern_injector('wyvern_bow', 'draconicevolution:wyvern_bow', ['4x draconicevolution:draconium_core', '8x draconicevolution:draconium_ingot', '1x draconicevolution:wyvern_energy_core', '4x draconicevolution:basic_relay_crystal', 'minecraft:bow'], "UEV", 90)
    draconic_injector('draconic_chestpiece', 'draconicevolution:draconic_chestpiece', ['18x draconicevolution:awakened_draconium_ingot', '4x draconicevolution:wyvern_core', '2x draconicevolution:draconic_energy_core', 'draconicevolution:wyvern_chestpiece'], "UIV", 90)
    draconic_injector('draconic_shovel', 'draconicevolution:draconic_shovel', ['18x draconicevolution:awakened_draconium_ingot', '4x draconicevolution:wyvern_core', '2x draconicevolution:draconic_energy_core', 'draconicevolution:wyvern_shovel'], "UIV", 90)
    wyvern_injector('wyvern_axe', 'draconicevolution:wyvern_axe', ['4x draconicevolution:draconium_core', '8x draconicevolution:draconium_ingot', '1x draconicevolution:wyvern_energy_core', '4x draconicevolution:basic_relay_crystal', 'minecraft:diamond_axe'], "UEV", 90)
    draconic_injector('chaotic_core', 'draconicevolution:chaotic_core', ['16x draconicevolution:awakened_core', '16x draconicevolution:chaos_shard', '2x kubejs:chaos_heavy_plating', '16x draconicevolution:awakened_draconium_ingot'], "UEV", 90)
    chaotic_injector('chaos_liquifier', 'draconicadditions:chaos_liquifier', ['gtceu:draconic_fusion_injector', '1x draconicadditions:chaos_container'], "UXV", 90)


})