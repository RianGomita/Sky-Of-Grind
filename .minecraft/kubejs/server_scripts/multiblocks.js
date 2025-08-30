
ServerEvents.recipes(event => {

    //Moon
event.recipes.gtceu.moonminer('titaminer')
    .notConsumable('ad_astra:moon_globe')
    .inputFluids([Fluid.of('gtceu:drilling_fluid', 1000)])
    .itemOutputs('16x gtceu:rutile_dust')
    .dimension('ad_astra:moon')
    .duration(640)
    .EUt(GTValues.VA[GTValues.EV]);
event.recipes.gtceu.moonminer('tungstenminer')
    .notConsumable('kubejs:end_miner_module')
    .inputFluids([Fluid.of('gtceu:drilling_fluid', 1000)])
    .itemOutputsRanged( 'gtceu:endstone_tungstate_ore', 16, 32)
    .itemOutputsRanged( 'gtceu:endstone_scheelite_ore', 16, 32)
    .dimension('minecraft:the_end')
    .duration(640)
    .EUt(GTValues.VA[GTValues.EV]);
    event.replaceOutput({ type: 'gtceu:macerator' }, 'gtceu:tungstate_dust', 'gtceu:platinum_dust')


    //Star extractor
event.recipes.gtceu.starextractor('star_matter')
    .notConsumable('gtceu:quantum_eye')
    .inputFluids([Fluid.of('gtceu:drilling_fluid', 1000)])
    .outputFluids([Fluid.of('gtceu:mercury 1000')])
    .itemOutputs('1x gtceu:star_matter_nugget')
    .biome('ad_astra:orbit')
    .duration(640)
    .EUt(GTValues.VA[GTValues.IV]);

event.recipes.gtceu.starcondenser('liquified_condensed_star_matter')
    .notConsumable('4x kubejs:condensed_star_matter')
    .outputFluids([Fluid.of('gtceu:condensed_star_matter 10000')])
    .duration(640)
    .EUt(GTValues.VA[GTValues.UV]);
event.recipes.gtceu.electrolyzer('electrolyzer/condensed_star_matter')
    .inputFluids([Fluid.of('gtceu:condensed_star_matter 1000')])
    .outputFluids([Fluid.of('gtceu:star_matter 3000')])
    .duration(640)
    .EUt(GTValues.VA[GTValues.UV]);

    //Blood Magic 
event.recipes.gtceu.altart2('magicianorb')
    .inputFluids([Fluid.of('bloodmagic:life_essence_fluid', 20000)])
    .itemInputs('bloodmagic:weakbloodorb')
    .itemOutputs('bloodmagic:magicianbloodorb')
    .duration(3000)
    .EUt(GTValues.VA[GTValues.LuV]);
event.recipes.gtceu.altart2('largebloodbrick')
    .inputFluids([Fluid.of('bloodmagic:life_essence_fluid', 20000)])
    .itemInputs('minecraft:stone_bricks')
    .itemOutputs('4x bloodmagic:largebloodstonebrick')
    .duration(100)
    .EUt(GTValues.VA[GTValues.LuV]);
event.recipes.gtceu.altart3('demoniteblock')
    .inputFluids([Fluid.of('bloodmagic:life_essence_fluid', 10000)])
    .itemInputs('extendedcrafting:crystaltine_ingot')
    .itemOutputs('2x bloodmagic:dungeon_metal')
    .duration(400)
    .EUt(GTValues.VA[GTValues.LuV]);
event.recipes.gtceu.altart4('demoniteblock4')
    .inputFluids([Fluid.of('bloodmagic:life_essence_fluid', 10000)])
    .itemInputs('extendedcrafting:crystaltine_ingot')
    .itemOutputs('2x bloodmagic:dungeon_metal')
    .duration(300)
    .EUt(GTValues.VA[GTValues.LuV]);
event.recipes.gtceu.altart5('demoniteblock5')
    .inputFluids([Fluid.of('bloodmagic:life_essence_fluid', 10000)])
    .itemInputs('extendedcrafting:crystaltine_ingot')
    .itemOutputs('2x bloodmagic:dungeon_metal')
    .duration(100)
    .EUt(GTValues.VA[GTValues.LuV]);
event.recipes.gtceu.altart4('arcmagebloodorb')
    .inputFluids([Fluid.of('bloodmagic:life_essence_fluid', 20000)])
    .itemInputs('bloodmagic:magicianbloodorb')
    .itemOutputs('bloodmagic:archmagebloodorb')
    .duration(3000)
    .EUt(GTValues.VA[GTValues.LuV]);
event.recipes.gtceu.altart5('pylon')
    .inputFluids([Fluid.of('bloodmagic:life_essence_fluid', 40000)])
    .itemInputs('bloodmagic:demoncrystallizer')
    .itemOutputs('bloodmagic:demonpylon')
    .duration(1500)
    .EUt(GTValues.VA[GTValues.LuV]);
event.recipes.gtceu.altart5('photovoltaic')
    .inputFluids([Fluid.of('bloodmagic:life_essence_fluid', 40000)])
    .itemInputs('solarflux:photovoltaic_cell_3')
    .itemOutputs('solarflux:photovoltaic_cell_4')
    .duration(1500)
    .EUt(GTValues.VA[GTValues.LuV]);
event.recipes.gtceu.altart6('pyrochlore')
    .notConsumable('ad_astra:earth_globe')
    .inputFluids([Fluid.of('bloodmagic:life_essence_fluid', 256000)])
    .itemOutputsRanged('gtceu:raw_pyrochlore', 256, 512)
    .itemOutputsRanged('gtceu:raw_apatite', 256, 512)
    .itemOutputsRanged('gtceu:raw_tricalcium_phosphate', 256, 512)
    .itemOutputsRanged('gtceu:rare_earth_dust', 256, 512)
    .circuit(1)
    .duration(3000)
    .EUt(GTValues.VA[GTValues.LuV]);
event.recipes.gtceu.altart6('meteoroverworld')
    .notConsumable('ad_astra:earth_globe')
    .inputFluids([Fluid.of('bloodmagic:life_essence_fluid', 512000)])
    .itemInputs('64x bloodmagic:dungeon_metal')
    .itemOutputsRanged('gtceu:raw_nickel', 500, 4500)
    .itemOutputsRanged('gtceu:raw_graphite', 500, 4500)
    .itemOutputsRanged('gtceu:raw_coal', 500, 4500)
    .itemOutputsRanged('gtceu:raw_diamond', 500, 4500)
    .itemOutputsRanged('gtceu:raw_lapis', 500, 4500)
    .itemOutputsRanged('gtceu:raw_redstone', 500, 4500)
    .itemOutputsRanged('minecraft:raw_copper', 500, 4500)
    .itemOutputsRanged('minecraft:raw_gold', 500, 4500)
    .itemOutputsRanged('minecraft:raw_iron', 500, 4500)
    .itemOutputsRanged('gtceu:raw_cassiterite', 500, 4500)
    .itemOutputsRanged('gtceu:raw_amethyst', 500, 4500)
    .itemOutputsRanged('gtceu:raw_green_sapphire', 500, 4500)
    .itemOutputsRanged('gtceu:raw_sphalerite', 500, 4500)
    .itemOutputsRanged('gtceu:raw_apatite', 500, 4500)
    .itemOutputsRanged('gtceu:raw_cobaltite', 500, 4500)
    .itemOutputsRanged('gtceu:raw_certus_quartz', 500, 4500)
    .itemOutputsRanged('gtceu:raw_quartzite', 500, 4500)
    .itemOutputsRanged('gtceu:raw_salt', 500, 4500)
    .itemOutputsRanged('gtceu:raw_saltpeter', 500, 4500)
    .itemOutputsRanged('gtceu:raw_beryllium', 500, 4500)
    .itemOutputsRanged('gtceu:raw_lead', 500, 4500)
    .itemOutputsRanged('gtceu:raw_silver', 500, 4500)
    .itemOutputsRanged('gtceu:raw_barite', 500, 4500)
    .itemOutputsRanged('gtceu:raw_stibnite', 500, 4500)
    .itemOutputsRanged( 'gtceu:raw_kyanite', 500, 4500)
    .itemOutputsRanged( 'gtceu:raw_emerald', 500, 4500)
    .outputFluids('gtceu:oil 100000')
    .outputFluids('gtceu:natural_gas 50000')
    .outputFluids('minecraft:lava 2500000')
    .circuit(2)
    .duration(6000)
    .EUt(GTValues.VA[GTValues.LuV]);

event.recipes.gtceu.altart6('meteormoon')
    .notConsumable('ad_astra:moon_globe')
    .inputFluids([Fluid.of('bloodmagic:life_essence_fluid', 512000)])
    .itemInputs('64x bloodmagic:dungeon_metal')
    .itemOutputsRanged('ad_astra:raw_desh', 500, 4500)
    .itemOutputsRanged('gtceu:star_matter_nugget', 1, 10)
    .itemOutputsRanged('gtceu:rare_earth_dust', 500, 4500)
    .itemOutputsRanged('gtceu:borax_dust', 500, 4500)
    .outputFluids('gtceu:titanium 144000')
    .outputFluids('gtceu:helium 50000')
    .outputFluids('gtceu:nitrogen 2500000')
    .circuit(2)
    .duration(6000)
    .EUt(GTValues.VA[GTValues.LuV]);

event.recipes.gtceu.altart6('meteormars')
    .notConsumable('ad_astra:mars_globe')
    .inputFluids([Fluid.of('bloodmagic:life_essence_fluid', 512000)])
    .itemInputs('64x bloodmagic:dungeon_metal')
    .itemOutputsRanged('ad_astra:raw_ostrum', 500, 4500)
    .itemOutputsRanged('gtceu:star_matter_nugget', 1, 10)
    .itemOutputsRanged('gtceu:raw_naquadah', 500, 4500)
    .itemOutputsRanged('gtceu:antimony_trifluoride_dust', 500, 4500)
    .itemOutputsRanged('minecraft:netherite_scrap', 500, 4500)
    .itemOutputsRanged('gtceu:raw_plutonium', 500, 4500)
    .itemOutputsRanged( 'gtceu:raw_galena', 500, 4500)
    .itemOutputsRanged( 'minecraft:gunpowder', 500, 4500)
    .itemOutputsRanged( 'minecraft:ender_pearl', 500, 750)
    .itemOutputsRanged( 'gtceu:raw_platinum', 500, 4500)
    .itemOutputsRanged('gtceu:raw_uraninite', 500, 4500)
    .outputFluids('gtceu:natural_gas 144000')
    .outputFluids('gtceu:deuterium 50000')
    .outputFluids('gtceu:nitrogen 2500000')
    .circuit(2)
    .duration(6000)
    .EUt(GTValues.VA[GTValues.LuV]);

event.recipes.gtceu.altart2('altart3recipe')
    .inputFluids([Fluid.of('bloodmagic:life_essence_fluid', 200000)])
    .itemInputs('gtceu:altart2')
    .itemOutputs('gtceu:altart3')
    .duration(3000)
    .EUt(GTValues.VA[GTValues.LuV]);

event.recipes.gtceu.altart3('altart4recipe')
    .inputFluids([Fluid.of('bloodmagic:life_essence_fluid', 200000)])
    .itemInputs('gtceu:altart3')
    .itemOutputs('gtceu:altart4')
    .duration(3000)
    .EUt(GTValues.VA[GTValues.LuV]);
    
event.recipes.gtceu.altart4('altart5recipe')
    .inputFluids([Fluid.of('bloodmagic:life_essence_fluid', 200000)])
    .itemInputs('gtceu:altart4')
    .itemOutputs('gtceu:altart5')
    .duration(3000)
    .EUt(GTValues.VA[GTValues.LuV]);

event.recipes.gtceu.altart5('altart5recipe')
    .inputFluids([Fluid.of('bloodmagic:life_essence_fluid', 200000)])
    .itemInputs('gtceu:altart5')
    .itemOutputs('gtceu:altart6')
    .duration(30000)
    .EUt(GTValues.VA[GTValues.LuV]);
    // Rock Crusher recreation
event.recipes.gtceu.rock_crusher('diorite')
    .notConsumable('minecraft:diorite')
    .itemOutputs('minecraft:diorite')
    .duration(16)
    .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.rock_crusher('blackstone')
    .notConsumable('minecraft:blackstone')
    .itemOutputs('minecraft:blackstone')
    .duration(16)
    .EUt(GTValues.VA[GTValues.HV]);

event.recipes.gtceu.rock_crusher('obsidian')
    .notConsumable('minecraft:redstone')
    .itemOutputs('minecraft:obsidian')
    .duration(16)
    .EUt(GTValues.VA[GTValues.HV]);

event.recipes.gtceu.rock_crusher('red_granite')
    .notConsumable('gtceu:red_granite')
    .itemOutputs('gtceu:red_granite')
    .duration(16)
    .EUt(GTValues.VA[GTValues.EV]);

event.recipes.gtceu.rock_crusher('marble')
    .notConsumable('gtceu:marble')
    .itemOutputs('gtceu:marblee')
    .duration(16)
    .EUt(GTValues.VA[GTValues.HV]);

event.shaped(
    'gtceu:tectonic_plate_accelerator',
    ['GRG', 'ACA', 'PBD'],
    {
        G: 'gtceu:laminated_glass',
        R: 'gtceu:red_granite',
        A: 'gtceu:luv_electric_piston',
        C: 'gtceu:iv_rock_crusher',
        P: 'gtceu:luv_electric_pump',
        B: 'gtceu:tungsten_grinding_head',
        D: 'gtceu:luv_conveyor_module'
    })    

    // ATOMIC FORGE
event.recipes.gtceu.atomicforge('condensed_star_forge')
    .inputFluids([Fluid.of('gtceu:sodium_potassium', 12000)])
    .inputFluids([Fluid.of('gtceu:silicone_rubber', 1120)])
    .itemInputs('16x gtceu:star_matter_block')
    .itemOutputs('kubejs:condensed_star_matter')
    .duration(10000)
    .EUt(GTValues.VA[GTValues.UHV]);
event.recipes.gtceu.atomicforge('atomic_alloy_coil')
    .inputFluids([Fluid.of('gtceu:condensed_star_matter', 12000)])
    .itemInputs('gtceu:dense_atomic_alloy_plate', '16x gtceu:atomic_alloy_foil', 'gtceu:tritanium_coil_block')
    .itemOutputs('kubejs:atomic_alloy_coil_block')
    .duration(640)
    .EUt(GTValues.VA[GTValues.UHV]);
event.recipes.gtceu.atomicforge('fallen_singularity')
    .inputFluids([Fluid.of('gtceu:condensed_star_matter', 100)])
    .itemInputs('gtceu:gravi_star', '4x ae2:singularity')
    .itemOutputs('kubejs:fallen_singularity')
    .duration(20)
    .EUt(GTValues.VA[GTValues.UHV]);
event.recipes.gtceu.atomicforge('gravitation')
    .inputFluids([Fluid.of('gtceu:condensed_star_matter', 1700)])
    .itemInputs('64x gtceu:gravitation_engine_unit', 'gtceu:tungstensteel_fluid_cell', 'gtceu:uhv_machine_casing')
    .itemOutputs('kubejs:gravitational_containment_cell')
    .duration(100)
    .EUt(GTValues.VA[GTValues.UHV]);
event.recipes.gtceu.atomicforge('quantumeneergycapsule')
    .inputFluids([Fluid.of('gtceu:condensed_star_matter', 1700)])
    .itemInputs('1x gtceu:gravitation_engine_unit', 'gtceu:tungstensteel_fluid_cell', 'ae2:quantum_entangled_singularity')
    .itemOutputs('kubejs:quantum_energy_capsule')
    .duration(100)
    .EUt(GTValues.VA[GTValues.UHV]);
event.recipes.gtceu.atomicforge('stable_singularity')
    .inputFluids([Fluid.of('gtceu:condensed_star_matter', 144)])
    .itemInputs('5x kubejs:fallen_singularity', 'kubejs:condensed_star_matter', '5x kubejs:exotic_matter')
    .itemOutputs('kubejs:stabilized_collapsed_singularity')
    .duration(5)
    .EUt(GTValues.VA[GTValues.UHV]);
event.recipes.gtceu.atomicforge('antimatter')
    .inputFluids([Fluid.of('gtceu:condensed_star_matter', 144)])
    .itemInputs('1x kubejs:atomically_compressed_black_hole')
    .outputFluids("gtceu:antimatter 5000")
    .duration(5)
    .EUt(GTValues.VA[GTValues.UHV]);
event.recipes.gtceu.atomicforge('resonant_essence_coil')
    .inputFluids([Fluid.of('gtceu:condensed_star_matter', 144)])
    .notConsumable("kubejs:gravitational_fluctuation_module")
    .itemInputs('kubejs:atomic_alloy_coil_block', '8x gtceu:resonant_essence_double_wire', '8x gtceu:crystal_matrix_foil')
    .itemOutputs("kubejs:resonant_essence_coil_block")
    .duration(200)
    .EUt(GTValues.VA[GTValues.UEV]);
event.recipes.gtceu.atomicforge('awakened_draconium_coil')
    .inputFluids([Fluid.of('gtceu:draconium', 288)])
    .notConsumable("kubejs:gravitational_fluctuation_module")
    .itemInputs('kubejs:resonant_essence_coil_block', '8x gtceu:awakened_draconium_double_wire', '8x gtceu:antimatter_foil')
    .itemOutputs("kubejs:awakened_draconium_coil_block")
    .duration(200)
    .EUt(GTValues.VA[GTValues.UXV]);
event.recipes.gtceu.atomicforge('infinity_coil_block')
    .inputFluids([Fluid.of('gtceu:cosmic_matter', 288)])
    .notConsumable("kubejs:gravitational_fluctuation_module")
    .itemInputs('kubejs:awakened_draconium_coil_block', '8x gtceu:infinity_plate', '1x gtceu:double_infinity_plate')
    .itemOutputs("kubejs:infinity_coil_block")
    .duration(20*20)
    .EUt(GTValues.VA[GTValues.OpV]);

event.recipes.gtceu.dimensionalmatter('matter')
    .notConsumable('kubejs:gravitational_containment_cell')
    .itemInputs('kubejs:quantum_energy_capsule')
    .circuit(22)
    .itemOutputsRanged( 'kubejs:exotic_matter', 10, 15)
    .itemOutputsRanged( 'kubejs:stable_matter', 35, 50)
    .duration(500)
    .EUt(GTValues.VA[GTValues.UHV]);
    event.recipes.gtceu.dimensionalmatter('mercury_primary_rp')
    .notConsumable('kubejs:gravitational_containment_cell')
    .itemInputs('kubejs:quantum_energy_capsule')
    .circuit(24)
    .dimension('ad_astra:mercury')
    .itemOutputsRanged( 'kubejs:exotic_matter', 10, 15)
    .itemOutputsRanged( 'kubejs:rad_primary_resonant_particles', 1, 2)
    .duration(40)
    .EUt(GTValues.VA[GTValues.UEV]);
    event.recipes.gtceu.dimensionalmatter('venus_primary_rp')
    .notConsumable('kubejs:gravitational_containment_cell')
    .itemInputs('kubejs:quantum_energy_capsule')
    .circuit(23)
    .dimension('ad_astra:venus')
    .itemOutputsRanged( 'kubejs:exotic_matter', 10, 15)
    .outputFluids('gtceu:acidic_venus_residue 1000')
    .duration(40)
    .EUt(GTValues.VA[GTValues.UEV]);

event.recipes.gtceu.atomiccompressor('blackhole')
    .notConsumable('kubejs:gravitational_containment_cell')
    .itemInputs('10x kubejs:exotic_matter', '2x kubejs:stabilized_collapsed_singularity', 'gtmutils:neutronium_credit', '4x kubejs:quantum_energy_capsule', 'gtceu:dense_crystal_matrix_plate')
    .itemOutputs('kubejs:atomically_compressed_black_hole')
    .duration(500)
    .EUt(GTValues.VA[GTValues.UHV]);
event.recipes.gtceu.atomiccompressor('resonant_core')
    .notConsumable('kubejs:gravitational_containment_cell')
    .itemInputs('10x kubejs:exotic_matter', '2x kubejs:stabilized_collapsed_singularity', 'kubejs:rad_primary_resonant_particles')
    .itemOutputs('kubejs:primal_resonant_core')
    .duration(100)
    .EUt(GTValues.VA[GTValues.UEV]);
event.recipes.gtceu.atomiccompressor('resonant_essence')
    .notConsumable('kubejs:gravitational_containment_cell')
    .circuit(10)
    .itemInputs('10x kubejs:exotic_matter', '2x kubejs:stabilized_collapsed_singularity')
    .inputFluids(Fluid.of('gtceu:resonant_essence_residue 250'))
    .itemOutputsRanged( 'gtceu:resonant_essence_dust', 25, 50)
    .duration(100)
    .EUt(GTValues.VA[GTValues.UEV]);
event.recipes.gtceu.atomiccompressor('singularity')
    .inputFluids(Fluid.of('minecraft:water', 256000))
    .itemOutputsRanged( 'ae2:singularity', 25, 50)
    .duration(5)
    .EUt(GTValues.VA[GTValues.UV]);
event.recipes.gtceu.atomiccompressor('dragon_heart')
    .inputFluids(Fluid.of('gtceu:antimatter', 10))
    .itemInputs(Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:ender_dragon"}}').strongNBT())
    .itemOutputs('draconicevolution:dragon_heart')
    .duration(20)
    .EUt(GTValues.VA[GTValues.UEV]);
event.recipes.gtceu.atomiccompressor('compressed_industrial_tnt')
    .itemInputs('9x gtceu:industrial_tnt')
    .itemOutputs('kubejs:compressed_industrial_tnt')
    .duration(20)
    .EUt(GTValues.VA[GTValues.UEV]);
event.recipes.gtceu.atomiccompressor('double_compressed_industrial_tnt')
    .itemInputs('9x kubejs:compressed_industrial_tnt')
    .itemOutputs('kubejs:double_compressed_industrial_tnt')
    .duration(20)
    .EUt(GTValues.VA[GTValues.UEV]);
event.recipes.gtceu.atomiccompressor('triple_compressed_industrial_tnt')
    .itemInputs('9x kubejs:double_compressed_industrial_tnt')
    .itemOutputs('kubejs:triple_compressed_industrial_tnt')
    .duration(20)
    .EUt(GTValues.VA[GTValues.UEV]);
event.recipes.gtceu.atomiccompressor('atomically_compressed_neutronium_credit')
    .itemInputs('kubejs:triple_compressed_industrial_tnt', 'gtmutils:neutronium_credit')
    .itemOutputs('kubejs:atomically_compressed_neutronium_credit')
    .duration(20)
    .EUt(GTValues.VA[GTValues.UEV]);
event.recipes.gtceu.atomiccompressor('neutronium_credit')
    .itemInputs('65536x gtceu:cupronickel_ingot')
    .inputFluids('gtceu:neutronium 9216')
    .itemOutputs('gtmutils:neutronium_credit')
    .duration(100)
    .EUt(GTValues.VA[GTValues.UHV]);

event.recipes.gtceu.svs('singularitysteel')
    .itemInputs('1024x gtceu:steel_ingot')
    .itemOutputs(Item.of('avaritia:singularity', '{Id:"avaritia:steel"}'))
    .duration(100)
    .EUt(GTValues.VA[GTValues.UHV]);
event.recipes.gtceu.svs('singularity2')
    .itemInputs('1024x gtceu:aluminium_ingot')
    .itemOutputs(Item.of('avaritia:singularity', '{Id:"avaritia:aluminum"}'))
    .duration(100)
    .EUt(GTValues.VA[GTValues.UHV]);
event.recipes.gtceu.svs('sing3')
    .itemInputs('1024x gtceu:stainless_steel_ingot')
    .itemOutputs(Item.of('avaritia:singularity', '{Id:"avaritia:stainless_steel"}'))
    .duration(100)
    .EUt(GTValues.VA[GTValues.UHV]);
event.recipes.gtceu.svs('sing4')
    .itemInputs('1024x gtceu:titanium_ingot')
    .itemOutputs(Item.of('avaritia:singularity', '{Id:"avaritia:titanium"}'))
    .duration(100)
    .EUt(GTValues.VA[GTValues.UHV]);
event.recipes.gtceu.svs('sing5')
    .itemInputs('1024x gtceu:tungsten_steel_ingot')
    .itemOutputs(Item.of('avaritia:singularity', '{Id:"avaritia:tungstensteel"}'))
    .duration(100)
    .EUt(GTValues.VA[GTValues.UHV]);
event.recipes.gtceu.svs('sing6')
    .itemInputs('1024x gtceu:rhodium_plated_palladium_ingot')
    .itemOutputs(Item.of('avaritia:singularity', '{Id:"avaritia:rhodium_plated_palladium"}'))
    .duration(100)
    .EUt(GTValues.VA[GTValues.UHV]);
event.recipes.gtceu.svs('singularitynaqalloy')
    .itemInputs('512x gtceu:naquadah_alloy_ingot')
    .itemOutputs(Item.of('avaritia:singularity', '{Id:"avaritia:naquadah_alloy"}'))
    .duration(100)
    .EUt(GTValues.VA[GTValues.UHV]);
event.recipes.gtceu.svs('darmstadtium')
    .itemInputs('512x gtceu:darmstadtium_ingot')
    .itemOutputs(Item.of('avaritia:singularity', '{Id:"avaritia:darmstadtium"}'))
    .duration(100)
    .EUt(GTValues.VA[GTValues.UHV]);
event.recipes.gtceu.svs('atomicalloy')
    .itemInputs('128x gtceu:atomic_alloy_ingot')
    .itemOutputs(Item.of('avaritia:singularity', '{Id:"avaritia:atomic_alloy"}'))
    .duration(100)
    .EUt(GTValues.VA[GTValues.UHV]);
event.recipes.gtceu.svs('neutronium')
    .itemInputs('256x #forge:ingots/neutronium')
    .itemOutputs(Item.of('avaritia:singularity', '{Id:"avaritia:neutronium"}'))
    .duration(100)
    .EUt(GTValues.VA[GTValues.UHV]);
event.recipes.gtceu.svs('supercriticalcasing')
    .itemInputs('2x kubejs:neutronium_casing', '1x avaritia:eternal_singularity')
    .itemOutputs('32x kubejs:supercritical_neutronium_casing')
    .duration(100)
    .EUt(GTValues.VA[GTValues.UHV]);
event.recipes.gtceu.svs('quantumcasing')
    .notConsumable('kubejs:gravitational_fluctuation_module')
    .itemInputs('2x kubejs:neutronium_casing', '4x kubejs:kaemite_casing')
    .itemOutputs('4x kubejs:quantum_casing')
    .duration(20)
    .EUt(GTValues.VA[GTValues.UEV]);

event.recipes.gtceu.electric_blast_furnace('antimatterboule')
    .itemInputs('avaritia:eternal_singularity', 'gtceu:antimatter_ingot')
    .itemOutputs('kubejs:antimatter_boule')
    .duration(9000)
    .blastFurnaceTemp(12400)
    .EUt(GTValues.VA[GTValues.UEV]);

event.recipes.gtceu.electric_blast_furnace('neutronium_boule')
    .itemInputs('64x gtceu:silicon_dust', '2x gtceu:neutronium_dust', '1x gtceu:gallium_arsenide_dust')
    .itemOutputs('gtceu:neutronium_boule')
    .duration(600*20)
    .blastFurnaceTemp(9000)
    .EUt(GTValues.VA[GTValues.IV]);

event.recipes.gtceu.electric_blast_furnace('naquadah_boule')
    .itemInputs('64x gtceu:silicon_dust', '8x gtceu:naquadah_dust', '1x gtceu:gallium_arsenide_dust')
    .itemOutputs('gtceu:naquadah_boule')
    .duration(600*20)
    .blastFurnaceTemp(7200)
    .EUt(GTValues.VA[GTValues.EV]);

////// Machine Recipe //////

event.shaped(
    'gtceu:greenhouse',
    ['AWA', 'CSC', 'WCW'],
    {
        A: '#gtceu:circuits/mv',
        W: 'gtceu:copper_single_cable',
        C: '#gtceu:circuits/hv',
        S: 'gtceu:solid_machine_casing'
    }
).id('gtceu:shaped/greenhouse')


////// Greenhouse Recipes //////

function Greenhouse(id, input, fluid, output, boosted) {
    if (boosted) {
        event.recipes.gtceu.greenhouse(id)
            .circuit(2)
            .notConsumable(InputItem.of(input))
            .itemInputs('4x gtceu:fertilizer')
            .inputFluids(Fluid.of('minecraft:water', fluid))
            .itemOutputs(output)
            .duration(320)
            .EUt('512')
    } else {
        event.recipes.gtceu.greenhouse(id)
            .circuit(1)
            .notConsumable(InputItem.of(input))
            .inputFluids(Fluid.of('minecraft:water', fluid))
            .itemOutputs(output)
            .duration(640)
            .EUt('128')
    }
}


////// Trees //////

// Rubber
Greenhouse('rubber_sapling', 'gtceu:rubber_sapling', 1000, ['32x gtceu:rubber_log', '4x gtceu:rubber_sapling'], false)
Greenhouse('rubber_sapling_boosted', 'gtceu:rubber_sapling', 1000, ['64x gtceu:rubber_log', '16x gtceu:sticky_resin', '4x gtceu:rubber_sapling'], true)

// Oak
Greenhouse('oak_sapling', 'minecraft:oak_sapling', 1000, ['64x minecraft:oak_log', '4x minecraft:oak_sapling'], false)
Greenhouse('oak_sapling_boosted', 'minecraft:oak_sapling', 1000, ['64x minecraft:oak_log', '64x minecraft:oak_log', '4x minecraft:oak_sapling'], true)

// Dark Oak
Greenhouse('dark_oak_sapling', 'minecraft:dark_oak_sapling', 1000, ['64x minecraft:dark_oak_log', '4x minecraft:dark_oak_sapling'], false)
Greenhouse('dark_oak_sapling_boosted', 'minecraft:dark_oak_sapling', 1000, ['64x minecraft:dark_oak_log', '64x minecraft:dark_oak_log', '4x minecraft:dark_oak_sapling'], true)

// Spruce
Greenhouse('spruce_sapling', 'minecraft:spruce_sapling', 1000, ['64x minecraft:spruce_log', '4x minecraft:spruce_sapling'], false)
Greenhouse('spruce_sapling_boosted', 'minecraft:spruce_sapling', 1000, ['64x minecraft:spruce_log', '64x minecraft:spruce_log', '4x minecraft:spruce_sapling'], true)

// Birch
Greenhouse('birch_sapling', 'minecraft:birch_sapling', 1000, ['64x minecraft:birch_log', '4x minecraft:birch_sapling'], false)
Greenhouse('birch_sapling_boosted', 'minecraft:birch_sapling', 1000, ['64x minecraft:birch_log', '64x minecraft:birch_log', '4x minecraft:birch_sapling'], true)

// Acacia
Greenhouse('acacia_sapling', 'minecraft:acacia_sapling', 1000, ['64x minecraft:acacia_log', '4x minecraft:acacia_sapling'], false)
Greenhouse('acacia_sapling_boosted', 'minecraft:acacia_sapling', 1000, ['64x minecraft:acacia_log', '64x minecraft:acacia_log', '4x minecraft:acacia_sapling'], true)

// Jungle
Greenhouse('jungle_sapling', 'minecraft:jungle_sapling', 1000, ['64x minecraft:jungle_log', '4x minecraft:jungle_sapling'], false)
Greenhouse('jungle_sapling_boosted', 'minecraft:jungle_sapling', 1000, ['64x minecraft:jungle_log', '64x minecraft:jungle_log', '4x minecraft:jungle_sapling'], true)

// Azalea
Greenhouse('azalea_sapling', 'minecraft:azalea', 1000, ['64x minecraft:oak_log', '4x minecraft:azalea'], false)
Greenhouse('azalea_boosted', 'minecraft:azalea', 1000, ['64x minecraft:oak_log', '64x minecraft:oak_log', '4x minecraft:azalea'], true)

// Flowering Azalea
Greenhouse('flowering_azalea', 'minecraft:flowering_azalea', 1000, ['64x minecraft:oak_log', '4x minecraft:flowering_azalea'], false)
Greenhouse('flowering_azalea_boosted', 'minecraft:flowering_azalea', 1000, ['64x minecraft:oak_log', '64x minecraft:oak_log', '4x minecraft:flowering_azalea'], true)

// Mangrove
Greenhouse('mangrove_propagule', 'minecraft:mangrove_propagule', 1000, ['64x minecraft:mangrove_log', '4x minecraft:mangrove_propagule'], false)
Greenhouse('mangrove_propagule_boosted', 'minecraft:mangrove_propagule', 1000, ['64x minecraft:mangrove_log', '64x minecraft:mangrove_log', '4x minecraft:mangrove_propagule'], true)

////// Crops //////

// Sugarcane
Greenhouse('sugar_cane', 'minecraft:sugar_cane', 1000, '24x minecraft:sugar_cane', false)
Greenhouse('sugar_cane_boosted', 'minecraft:sugar_cane', 1000, '48x minecraft:sugar_cane', true)

// Kelp
Greenhouse('kelp', 'minecraft:kelp', 2000, '24x minecraft:kelp', false)
Greenhouse('kelp_boosted', 'minecraft:kelp', 2000, '48x minecraft:kelp', true)

// Bamboo
Greenhouse('bamboo', 'minecraft:bamboo', 1000, '24x minecraft:bamboo', false)
Greenhouse('bamboo_boosted', 'minecraft:bamboo', 1000, '48x minecraft:bamboo', true)

// Cactus
Greenhouse('cactus', 'minecraft:cactus', 1000, '24x minecraft:cactus', false)
Greenhouse('cactus_boosted', 'minecraft:cactus', 1000, '48x minecraft:cactus', true)

// Wheat
Greenhouse('wheat', 'minecraft:wheat_seeds', 1000, '24x minecraft:wheat', false)
Greenhouse('wheat_boosted', 'minecraft:wheat_seeds', 1000, '48x minecraft:wheat', true)

// Carrot
Greenhouse('carrot', 'minecraft:carrot', 1000, '24x minecraft:carrot', false)
Greenhouse('carrot_boosted', 'minecraft:carrot', 1000, '48x minecraft:carrot', true)

// Potato
Greenhouse('potato', 'minecraft:potato', 1000, '24x minecraft:potato', false)
Greenhouse('potato_boosted', 'minecraft:potato', 1000, '48x minecraft:potato', true)

// Beetroot
Greenhouse('beetroot', 'minecraft:beetroot_seeds', 1000, '24x minecraft:beetroot', false)
Greenhouse('beetroot_boosted', 'minecraft:beetroot_seeds', 1000, '48x minecraft:beetroot', true)

// Mellon
Greenhouse('melon', 'minecraft:melon_seeds', 1000, '12x minecraft:melon', false)
Greenhouse('melon_boosted', 'minecraft:melon_seeds', 1000, '24x minecraft:melon', true)

// Pumpkin
Greenhouse('pumpkin', 'minecraft:pumpkin_seeds', 1000, '12x minecraft:pumpkin', false)
Greenhouse('pumpkin_boosted', 'minecraft:pumpkin_seeds', 1000, '24x minecraft:pumpkin', true)

// Nether Wart
Greenhouse('nether_wart', 'minecraft:nether_wart', 1000, '12x minecraft:nether_wart', false)
Greenhouse('nether_wart_boosted', 'minecraft:nether_wart', 1000, '24x minecraft:nether_wart', true)

// Red Mushroom
Greenhouse('red_mushroom', 'minecraft:red_mushroom', 1000, '12x minecraft:red_mushroom', false)
Greenhouse('red_mushroom_boosted', 'minecraft:red_mushroom', 1000, '24x minecraft:red_mushroom', true)

// Brown Mushroom
Greenhouse('brown_mushroom', 'minecraft:brown_mushroom', 1000, '12x minecraft:brown_mushroom', false)
Greenhouse('brown_mushroom_boosted', 'minecraft:brown_mushroom', 1000, '24x minecraft:brown_mushroom', true)









})
