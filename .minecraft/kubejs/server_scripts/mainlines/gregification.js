ServerEvents.recipes(sog => {
    sog.recipes.gtceu.compressor('diamondcompressing')
        .itemInputs(
            '4x minecraft:coal_block'
        )
        .itemOutputs(
            'gtceu:tiny_diamond_dust'
        )
        .duration(100)
        .EUt(2)
    
    sog.recipes.gtceu.forge_hammer('diamondhammah')
        .itemInputs(
            '4x gtceu:tiny_diamond_dust'
        )
        .itemOutputs(
            'minecraft:diamond'
        )
        .duration(600)
        .EUt(2)

    sog.recipes.gtceu.macerator('gypsummacerator')
        .itemInputs(
            '4x exdeorum:dust'
        )
        .itemOutputs(
            'gtceu:gypsum_dust'
        )
        .duration(15)
        .EUt(2)

    sog.shaped('gtceu:firebricks', [// arg 1: output
            'ABA', 
            'BCB', // arg 2: the shape (array of strings)
            'ABA'  
          ], {
            A: 'gtceu:firebrick', 
            B: 'gtceu:gypsum_dust',  //arg 3: the mapping object
            C: 'gtceu:concrete_bucket'
          }
          
        )

    sog.shaped('gtceu:lp_steam_alloy_smelter', [// arg 1: output
            'ABA', 
            'CDC', // arg 2: the shape (array of strings)
            'AAA'  
          ], {
            A: 'gtceu:bronze_small_fluid_pipe', 
            B: 'minecraft:diamond',  //arg 3: the mapping object
            C: 'minecraft:furnace',
            D: 'gtceu:bronze_brick_casing'
          }
          
        )

    sog.shaped('watersources:water_source_tier_1', [// arg 1: output
            'ABA', 
            'C C', // arg 2: the shape (array of strings)
            'ABA'  
          ], {
            A: 'gtceu:firebrick', 
            B: 'minecraft:glass',  //arg 3: the mapping object
            C: 'minecraft:water_bucket'
          }
          
        )
    
    sog.recipes.gtceu.coke_oven('sulfur')
        .itemInputs('16x gtceu:stone_dust')
        .itemOutputs('16x gtceu:sulfur_dust')
        .outputFluids('exdeorum:witch_water 16000')
        .duration(40)
    sog.recipes.gtceu.coke_oven('graphite')
        .itemInputs('64x gtceu:raw_coal')
        .itemOutputs('8x gtceu:graphite_dust')
        .outputFluids('gtceu:creosote 8000')
        .duration(40)
    sog.recipes.gtceu.pyrolyse_oven('sulfur')
        .itemInputs('16x gtceu:stone_dust')
        .itemOutputs('16x gtceu:sulfur_dust')
        .duration(20 * 12)
        .EUt(96)
    sog.recipes.gtceu.arc_furnace('lead')
        .itemInputs('gtceu:raw_tin')
        .inputFluids('gtceu:oxygen 63')
        .itemOutputs('gtceu:raw_lead')
        .duration(5)
        .EUt(4)
    sog.recipes.gtceu.arc_furnace('diamond')
        .itemInputs('gtceu:raw_coal')
        .inputFluids('gtceu:oxygen 63')
        .itemOutputs('gtceu:raw_diamond')
        .duration(5)
        .EUt(4)
    sog.recipes.gtceu.arc_furnace('silver')
        .itemInputs('minecraft:raw_iron')
        .inputFluids('gtceu:oxygen 63')
        .itemOutputs('gtceu:raw_silver')
        .duration(5)
        .EUt(4)
    sog.recipes.gtceu.arc_furnace('zinc')
        .itemInputs('minecraft:raw_gold')
        .inputFluids('gtceu:oxygen 63')
        .itemOutputs('gtceu:raw_sphalerite')
        .duration(5)
        .EUt(4)
    sog.recipes.gtceu.arc_furnace('lapis')
        .itemInputs('gtceu:raw_diamond')
        .inputFluids('gtceu:oxygen 63')
        .itemOutputs('gtceu:raw_lapis')
        .duration(5)
        .EUt(4)
    sog.shaped('ironfurnaces:iron_furnace', [// arg 1: output
            'AAA', 
            'CBD', // arg 2: the shape (array of strings)
            'AAA'  
          ], {
            A: 'gtceu:iron_plate', 
            C: '#forge:tools/hammers',  //arg 3: the mapping object
            B: 'ironfurnaces:copper_furnace',
            D: '#forge:tools/wrenches'
          }
          
        )
    sog.shaped('ironfurnaces:gold_furnace', [// arg 1: output
            'ABA', 
            'BCB', // arg 2: the shape (array of strings)
            'ABA'  
          ], {
            A: 'minecraft:glass', 
            C: 'ironfurnaces:iron_furnace',  //arg 3: the mapping object
            B: 'minecraft:gold_block'
          }
          
        )
    sog.recipes.gtceu.assembler('diamond_furnace')
        .itemInputs('4x minecraft:diamond_block', 'ironfurnaces:gold_furnace')
        .itemOutputs('ironfurnaces:diamond_furnace')
        .duration(100)
        .EUt(8)
    sog.recipes.gtceu.assembler('emerald_furnace')
        .itemInputs('4x minecraft:emerald_block', 'ironfurnaces:diamond_furnace')
        .itemOutputs('ironfurnaces:emerald_furnace')
        .duration(100)
        .EUt(128)
    sog.recipes.gtceu.arc_furnace('quartz')
        .itemInputs('gtceu:raw_silver')
        .inputFluids('gtceu:oxygen 63')
        .itemOutputs('gtceu:raw_nether_quartz')
        .duration(5)
        .EUt(4)
    sog.recipes.gtceu.arc_furnace('quartzite')
        .itemInputs('gtceu:raw_nether_quartz')
        .inputFluids('gtceu:nitrogen 63')
        .itemOutputs('gtceu:raw_quartzite')
        .duration(5)
        .EUt(4)
    sog.recipes.gtceu.arc_furnace('nickel')
        .itemInputs('minecraft:raw_copper')
        .inputFluids('gtceu:nitrogen 63')
        .itemOutputs('gtceu:raw_nickel')
        .duration(5)
        .EUt(4)
    sog.recipes.gtceu.arc_furnace('sapph')
        .itemInputs('gtceu:raw_lapis')
        .inputFluids('gtceu:nitrogen 63')
        .itemOutputs('gtceu:sapphire_gem')
        .duration(5)
        .EUt(4)
    sog.recipes.gtceu.centrifuge('cobaltite')
        .itemInputs('8x gtceu:raw_nickel')
        .itemOutputs('2x gtceu:cobaltite_dust')
        .duration(100)
        .EUt(32)
    sog.recipes.gtceu.centrifuge('gallium')
        .itemInputs('8x gtceu:raw_sphalerite')
        .itemOutputs('2x gtceu:gallium_dust')
        .duration(100)
        .EUt(32)
    sog.recipes.gtceu.alloy_smelter('soularium')
        .itemInputs('8x gtceu:brass_ingot', '8x minecraft:soul_sand')
        .itemOutputs('4x enderio:soularium_ingot')
        .duration(100)
        .EUt(8)
    sog.recipes.gtceu.assembler('predictionmatrix')
        .itemInputs('8x gtceu:aluminium_dust', '8x gtceu:gallium_dust', '32x minecraft:glass_pane')
        .itemOutputs('8x hostilenetworks:prediction_matrix')
        .duration(20)
        .EUt(32)
    sog.recipes.gtceu.assembler('simchamber')
        .itemInputs('4x gtceu:steel_plate', '2x gtceu:cobaltite_dust', '3x gtceu:phenolic_printed_circuit_board', '#gtceu:circuits/lv')
        .itemOutputs('hostilenetworks:sim_chamber')
        .duration(100)
        .EUt(32)
    sog.recipes.gtceu.assembler('lootchamber')
        .itemInputs('4x gtceu:steel_plate', 'gtceu:gallium_arsenide_dust', '2x gtceu:diode', '3x #gtceu:circuits/lv')
        .itemOutputs('hostilenetworks:loot_fabricator')
        .duration(100)
        .EUt(32)
    sog.recipes.gtceu.assembler('solidsteelmachinecasing')
        .itemInputs('8x gtceu:steel_plate')
        .itemOutputs('gtceu:steel_machine_casing')
        .duration(100)
        .EUt(32)
        .circuit(9)
    sog.recipes.gtceu.assembler('bronzemachinecasing')
        .itemInputs('8x gtceu:bronze_plate')
        .itemOutputs('gtceu:bronze_machine_casing')
        .duration(100)
        .EUt(32)
        .circuit(8)
    sog.recipes.gtceu.assembler('hss_e_casing')
        .itemInputs('8x gtceu:hsse_plate')
        .itemOutputs('gtceu:sturdy_machine_casing')
        .duration(100)
        .EUt(32)
        .circuit(6)
        sog.recipes.gtceu.assembler('eternity_casing')
        .itemInputs('8x gtceu:eternity_plate', 'gtceu:eternity_frame')
        .itemOutputs('kubejs:eternity_casing')
        .duration(170000)
        .EUt(32)
        .circuit(6)
    sog.recipes.gtceu.assembler('uivmachinecasing')
        .itemInputs('8x gtceu:draconium_plate', 'kubejs:draconium_heavy_plating')
        .itemOutputs('gtceu:uiv_machine_casing')
        .EUt(32)
        .circuit(8)
        sog.recipes.gtceu.assembler('uxvmachinecasing')
        .itemInputs('8x gtceu:chaos_plate', 'kubejs:awakened_draconium_heavy_plating')
        .itemOutputs('gtceu:uxv_machine_casing')
        .EUt(32)
        .circuit(8)
        sog.recipes.gtceu.assembler('dimensional_pumping_module')
        .itemInputs('8x kubejs:space_time_heavy_plating', 'gtceu:uiv_fluid_regulator')
        .itemOutputs('kubejs:dimensional_pump_module')
        .EUt(32)
        sog.recipes.gtceu.assembler('trascendental_space_time_casing')
        .itemInputs('16x kubejs:space_time_heavy_plating')
        .itemOutputs('kubejs:trascendental_space_time_casing')
        .EUt(32)
        .circuit(6)
        sog.recipes.gtceu.assembler('high_power_casing_plant')
        .itemInputs('8x gtceu:osmiridium_plate', 'gtceu:secure_maceration_casing')
        .itemOutputs('kubejs:high_power_casing')
        .EUt((GTValues.VA[GTValues.IV]))
        .circuit(8)
        sog.recipes.gtceu.assembler('high_power_crushing_wheels')
        .itemInputs('8x gtceu:rhodium_plated_palladium_plate', 'kubejs:high_power_casing', 'gtceu:iv_electric_motor')
        .itemOutputs('kubejs:high_power_crushing_wheels')
        .EUt((GTValues.VA[GTValues.IV]))
        .circuit(8)
    sog.recipes.gtceu.alloy_smelter('soulsand')
        .itemInputs('8x minecraft:ink_sac', '16x minecraft:sand')
        .itemOutputs('4x minecraft:soul_sand')
        .duration(140)
        .EUt(32)
    sog.recipes.gtceu.alloy_smelter('conduitbinder')
        .itemInputs('8x enderio:conduit_binder_composite', '2x enderio:soularium_ingot')
        .itemOutputs('12x enderio:conduit_binder')
        .duration(60)
        .EUt(32)
    sog.recipes.gtceu.mixer('pulsatingiron')
        .itemInputs('4x minecraft:iron_ingot', 'gtceu:aluminium_ingot')
        .itemOutputs('3x enderio:pulsating_alloy_ingot')
        .duration(100)
        .EUt(32)
    sog.recipes.gtceu.mixer('redstonealloy')
        .itemInputs('4x gtceu:red_alloy_ingot', 'gtceu:lead_ingot')
        .itemOutputs('3x enderio:redstone_alloy_ingot')
        .duration(100)
        .EUt(32)
    sog.recipes.gtceu.mixer('conductiveiron')
        .itemInputs('4x minecraft:iron_ingot', '2x gtceu:annealed_copper_ingot', 'gtceu:red_alloy_ingot')
        .itemOutputs('4x enderio:conductive_alloy_ingot')
        .duration(100)
        .EUt(32)
    sog.shaped('gtceu:lv_mixer', [// arg 1: output
            'ABA', 
            'ACA', // arg 2: the shape (array of strings)
            'DED'  
          ], {
            A: 'enderio:soularium_ingot', 
            C: 'gtceu:lv_electric_motor',  //arg 3: the mapping object
            B: 'gtceu:tin_rotor',
            D: '#gtceu:circuits/lv',
            E: 'gtceu:lv_machine_hull'
          }
        )
    sog.recipes.gtceu.wiremill('simplecable')
        .itemInputs('2x enderio:conductive_alloy_ingot')
        .itemOutputs('4x storagenetwork:kabel')
        .duration(20)
        .EUt(32)
    sog.recipes.gtceu.assembler('master')
        .itemInputs('ironchest:gold_chest', '4x #gtceu:circuits/lv', 'gtceu:lv_machine_hull')
        .itemOutputs('storagenetwork:master')
        .duration(1000)
        .EUt(32) 
    sog.recipes.gtceu.assembler('request')
        .itemInputs('8x minecraft:glass', 'gtceu:lv_machine_hull', '4x #gtceu:circuits/lv', 'avaritia:double_compressed_crafting_table')
        .itemOutputs('storagenetwork:request')
        .duration(1000)
        .EUt(32) 
    sog.recipes.gtceu.assembler('upgradebase')
          .itemInputs('16x minecraft:leather', '64x minecraft:string', 'minecraft:iron_block')
          .itemOutputs('sophisticatedbackpacks:upgrade_base')
          .duration(100)
          .EUt(32) 
    sog.recipes.gtceu.forge_hammer('dustex')
          .itemInputs('minecraft:sand')
          .itemOutputs('exdeorum:dust')
          .duration(15)
          .EUt(8)     
    sog.recipes.gtceu.centrifuge('emerald')
          .itemInputs('8x gtceu:raw_diamond')
          .itemOutputs('2x gtceu:raw_emerald')
          .duration(300)
          .EUt(128) 
    sog.recipes.gtceu.centrifuge('rubydust')
          .itemInputs('gtceu:redstone_plate')
          .itemOutputs('8x gtceu:ruby_gem')
          .duration(80)
          .EUt(128) 
    sog.recipes.gtceu.centrifuge('vanadium')
          .itemInputs('gtceu:wrought_iron_ingot')
          .itemOutputs('2x gtceu:vanadium_dust')
          .duration(80)
          .EUt(128)
    sog.shaped('gtceu:mv_mixer', [// arg 1: output
            'ABA', 
            'ACA', // arg 2: the shape (array of strings)
            'DED'  
          ], {
            A: 'enderio:soularium_ingot', 
            C: 'gtceu:mv_electric_motor',  //arg 3: the mapping object
            B: 'gtceu:cobalt_brass_gear',
            D: '#gtceu:circuits/mv',
            E: 'gtceu:mv_machine_hull'
          }
        )
    sog.recipes.gtceu.arc_furnace('clay')
        .itemInputs('exdeorum:dust')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('minecraft:clay')
        .duration(60)
        .EUt(128)
    sog.recipes.gtceu.arc_furnace('watert2')
        .itemInputs('watersources:water_source_tier_1')
        .inputFluids('gtceu:distilled_water 5000')
        .itemOutputs('watersources:water_source_tier_2')
        .duration(800)
        .EUt(128)
    sog.recipes.gtceu.centrifuge('manganese')
        .itemInputs('8x gtceu:raw_calcite')
        .itemOutputs('2x gtceu:manganese_dust')
        .duration(80)
        .EUt(128)
    sog.shapeless('2x gtceu:rubber_planks', [ // arg 1: output
            'gtceu:rubber_log'
          ])
    sog.recipes.gtceu.electrolyzer('phosphorus')
        .itemInputs('64x minecraft:glowstone_dust')
        .itemOutputs('8x gtceu:phosphorus_dust')
        .duration(200)
        .EUt(512)
    sog.recipes.gtceu.assembler('enderchest')
        .itemInputs('gtceu:hv_super_chest', 'minecraft:ender_eye')
        .inputFluids('gtceu:ender_air 5000')
        .itemOutputs('enderchests:ender_chest')
        .duration(400)
        .EUt(512)
    sog.recipes.gtceu.assembler('endertank')
        .itemInputs('gtceu:lv_super_tank', 'minecraft:ender_eye')
        .inputFluids('gtceu:ender_air 5000')
        .itemOutputs('endertanks:ender_tank')
        .duration(200)
        .EUt(512)
    sog.recipes.gtceu.mixer('platinum')
        .itemInputs('8x gtceu:silver_dust', '2x gtceu:ender_eye_block', 'enderio:pulsating_alloy_ingot')
        .inputFluids('gtceu:ender_air 5000', 'gtceu:deuterium 1000')
        .itemOutputs('2x gtceu:platinum_dust')
        .duration(100)
        .EUt(512)
    sog.recipes.gtceu.arc_furnace('potasio')
        .itemInputs('gtceu:calcite_dust')
        .inputFluids('gtceu:nitrogen_dioxide 63')
        .itemOutputs('2x gtceu:potassium_dust')
        .duration(15)
        .EUt(512)
    sog.recipes.gtceu.centrifuge('salt')
        .itemInputs('gtceu:potassium_dust')
        .itemOutputs('8x gtceu:salt_dust')
        .duration(15)
        .EUt(512)
    sog.shaped('ae2:controller', [// arg 1: output
            'ABA', 
            'BCB', // arg 2: the shape (array of strings)
            'ADA'  
          ], {
            A: 'gtceu:platinum_ingot', 
            C: 'gtceu:hv_machine_hull',  //arg 3: the mapping object
            B: 'gtceu:lpic_chip',
            D: '#gtceu:circuits/hv'
          }
        )
    sog.shaped('bonsaitrees3:bonsaipot', [// arg 1: output
        'AAA', 
        'ABA', // arg 2: the shape (array of strings)
        'AAA'  
      ], {
        A: 'gtceu:firebrick',
        B: 'minecraft:dirt'
      }
    )
    sog.recipes.gtceu.cutter('press')
        .itemInputs('16x gtceu:certus_quartz_plate')
        .inputFluids('gtceu:lubricant 1000')
        .itemOutputs('ae2:name_press')
        .duration(2400)
        .EUt(512)
    sog.recipes.gtceu.circuit_assembler('engiprocess')
        .itemInputs('ae2:silicon', 'minecraft:redstone', 'minecraft:diamond')
        .inputFluids('gtceu:lubricant 63')
        .notConsumable('ae2:name_press')
        .itemOutputs('ae2:engineering_processor')
        .duration(40)
        .EUt(128)
    sog.recipes.gtceu.circuit_assembler('calcprocess')
        .itemInputs('ae2:silicon', 'minecraft:redstone', 'gtceu:certus_quartz_dust')
        .inputFluids('gtceu:lubricant 63')
        .notConsumable('ae2:name_press')
        .itemOutputs('ae2:calculation_processor')
        .duration(40)
        .EUt(128)
    sog.recipes.gtceu.circuit_assembler('logicprocess')
        .itemInputs('ae2:silicon', 'minecraft:redstone', 'minecraft:gold_ingot')
        .inputFluids('gtceu:lubricant 63')
        .notConsumable('ae2:name_press')
        .itemOutputs('ae2:logic_processor')
        .duration(40)
        .EUt(128)
    sog.recipes.gtceu.mixer('fluix')
        .itemInputs('gtceu:quartzite_gem', 'minecraft:redstone', 'gtceu:certus_quartz_dust')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('3x ae2:fluix_crystal')
        .duration(15)
        .EUt(512)
    sog.recipes.gtceu.macerator('fluixdust')
        .itemInputs('ae2:fluix_crystal')
        .itemOutputs('ae2:fluix_dust')
        .duration(15)
        .EUt(512)
    sog.recipes.gtceu.alloy_smelter('quartzglass')
        .itemInputs('5x gtceu:certus_quartz_dust', '4x #forge:glass')
        .itemOutputs('4x ae2:quartz_glass')
        .duration(200)
        .EUt(32)
    sog.shaped('ae2:cell_component_1k', [// arg 1: output
            'ABA', 
            'BCB', // arg 2: the shape (array of strings)
            'ABA'  
          ], {
            A: 'minecraft:redstone',
            B: 'gtceu:certus_quartz_gem',
            C: '#gtceu:circuits/lv'
          }
        )
    sog.shaped('ae2:cell_component_4k', [// arg 1: output
            'ABA', 
            'BCB', // arg 2: the shape (array of strings)
            'ABA'  
          ], {
            A: 'minecraft:redstone',
            B: 'gtceu:certus_quartz_gem',
            C: '#gtceu:circuits/mv'
          }
        )
    sog.shaped('ae2:cell_component_16k', [// arg 1: output
            'ABA', 
            'BCB', // arg 2: the shape (array of strings)
            'ABA'  
          ], {
            A: 'minecraft:redstone',
            B: 'gtceu:certus_quartz_gem',
            C: '#gtceu:circuits/hv'
          }
        )
    sog.shaped('ae2:cell_component_64k', [// arg 1: output
            'ABA', 
            'BCB', // arg 2: the shape (array of strings)
            'ABA'  
          ], {
            A: 'minecraft:redstone',
            B: 'gtceu:certus_quartz_gem',
            C: '#gtceu:circuits/ev'
          }
        )
    sog.shaped('ae2:cell_component_256k', [// arg 1: output
            'ABA', 
            'BCB', // arg 2: the shape (array of strings)
            'ABA'  
          ], {
            A: 'minecraft:redstone',
            B: 'gtceu:certus_quartz_gem',
            C: '#gtceu:circuits/iv'
          }
        )
    sog.shaped('megacells:cell_component_1m', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: 'ae2:sky_dust',
        B: 'megacells:accumulation_processor',
        C: 'ae2:cell_component_256k',
        D: '#gtceu:circuits/luv'
      }
    )
    sog.shaped('megacells:cell_component_4m',[
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: '#forge:dusts/ender_pearl',
        B: 'megacells:accumulation_processor',
        C: 'megacells:cell_component_1m',
        D: '#gtceu:circuits/zpm'
      }
    )
    sog.shaped('megacells:cell_component_16m',[
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: '#forge:dusts/ender_pearl',
        B: 'megacells:accumulation_processor',
        C: 'megacells:cell_component_4m',
        D: '#gtceu:circuits/uv'
      }
    )
    sog.shaped('megacells:cell_component_64m',[
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: 'ae2:matter_ball',
        B: 'megacells:accumulation_processor',
        C: 'megacells:cell_component_16m',
        D: '#gtceu:circuits/uhv'
      }
    )
    sog.shaped('megacells:cell_component_256m',[
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: 'ae2:matter_ball',
        B: 'megacells:accumulation_processor',
        C: 'megacells:cell_component_64m',
        D: '#gtceu:circuits/uev'
      }
    )
    sog.shaped('ae2:drive', [// arg 1: output
            'ABA', 
            'C C', // arg 2: the shape (array of strings)
            'ABA'  
          ], {
            A: 'gtceu:platinum_ingot',
            B: '#gtceu:circuits/hv',
            C: 'enderio:me_conduit'
          }
        )
    sog.shaped('ad_astra:nasa_workbench', [// arg 1: output
          'ABA', 
          'CDC', // arg 2: the shape (array of strings)
          'EFE'  
        ], {
          A: 'gtceu:steel_frame',
          E: '#gtceu:circuits/ev',
          B: 'gtceu:platinum_single_wire',
          C: 'gtceu:double_steel_plate',
          D: 'gtceu:kanthal_coil_block',
          F: 'gtceu:steel_block'
        }
      )

    ////// Machine Recipe //////

    sog.shaped(
        'gtceu:moonminer',
        ['AWA', 'CSC', 'WCW'],
        {
            A: '#gtceu:circuits/ev',
            W: 'ad_astra:desh_block',
            C: '#gtceu:circuits/ev',
            S: 'ad_astra:moon_globe'
        }
    ).id('gtceu:shaped/moonminer')
  

    sog.recipes.gtceu.distillery('fuelastra')
        .circuit(5)
        .inputFluids('gtceu:diesel 1000')
        .outputFluids('ad_astra:fuel 250')
        .duration(2000)
        .EUt(24)
    sog.recipes.gtceu.alloy_smelter('neodymium')
        .itemInputs('8x gtceu:potin_dust', '4x gtceu:stainless_steel_dust')
        .itemOutputs('4x gtceu:neodymium_dust')
        .duration(120)
        .EUt(24)

      sog.shaped(
          'ae2:crafting_unit',
          ['AWA', 'CSC', 'AWA'],
          {
              A: 'gtceu:titanium_ingot',
              W: 'gtceu:cpu_chip',
              C: 'enderio:dense_me_conduit',
              S: '#gtceu:circuits/hv'
          }
      ).id('ae2:unit')
      sog.shaped(
        'ae2:pattern_provider',
        ['AWA', 'C C', 'AWA'],
        {
            A: 'gtceu:titanium_ingot',
            W: 'gtceu:cpu_chip',
            C: 'enderio:dense_me_conduit'
        }
      ).id('ae2:patternprov')
      sog.shaped(
        'ae2:molecular_assembler',
        ['AWA', 'C C', 'AWA'],
        {
            A: 'gtceu:titanium_ingot',
            W: 'gtceu:cpu_chip',
            C: 'solarflux:photovoltaic_cell_1'
        }
      ).id('ae2:molecularasse')
      sog.recipes.gtceu.assembler('pattern')
          .itemInputs('8x solarflux:mirror', 'gtceu:aluminium_ingot', 'ae2:calculation_processor')
          .inputFluids('gtceu:lubricant 63')
          .itemOutputs('8x ae2:blank_pattern')
          .duration(60)
          .EUt(2048)
      sog.recipes.gtceu.alloy_smelter('skystonedust')
          .itemInputs('ae2:fluix_crystal', 'gtceu:stone_dust')
          .itemOutputs('ae2:sky_dust')
          .duration(60)
          .EUt(32)
      sog.recipes.gtceu.mixer('fluorine')
          .itemInputs('64x gtceu:sulfur_dust')
          .inputFluids('minecraft:water 1000')
          .outputFluids('gtceu:fluorine 6000')
          .duration(60)
          .EUt(32)
      sog.recipes.gtceu.centrifuge('rocksalt')
          .itemInputs('32x gtceu:sulfur_dust')
          .itemOutputs("8x gtceu:rock_salt_dust")
          .duration(100)
          .EUt(32)
        exdeorum.setCrucibleHeatValueForState('minecraft:lightning_rod', 80);
      sog.recipes.gtceu.centrifuge('ruthenium')
          .itemInputs("gtceu:diamond_dust")
          .itemOutputs("gtceu:ruthenium_dust")
          .duration(400)
          .EUt(32)
                const gems = ["lapis", "sodalite", "lazurite"]
      gems.forEach(gem => {
        sog.recipes.gtceu.compressor(`${gem}_plate`)
          .itemInputs(`gtceu:${gem}_dust`)
          .itemOutputs(`gtceu:${gem}_plate`)
          .duration(20 * 15)
          .EUt(2)
      })
      sog.recipes.gtceu.arc_furnace('platinumsludge')
          .itemInputs('gtceu:platinum_dust')
          .inputFluids('gtceu:nitric_acid 1000')
          .itemOutputs('4x gtceu:platinum_group_sludge_dust')
          .duration(120)
          .EUt(8192)
      sog.shaped(
            'gtceu:starextractor',
            ['AWA', 'CSC', 'WCW'],
            {
                A: '#gtceu:circuits/iv',
                W: 'gtceu:polybenzimidazole_plate',
                C: '#gtceu:circuits/iv',
                S: 'gtceu:iridium_frame'
            }
        ).id('gtceu:shaped/starextractor')
    sog.recipes.gtceu.alloy_smelter('marble')
        .itemInputs("gtceu:calcite_dust", 'exdeorum:compressed_cobblestone')
        .itemOutputs("gtceu:marble")
        .duration(4000)
        .EUt(32)
    sog.recipes.gtceu.alloy_smelter('galliumarsenide')
        .itemInputs('gtceu:arsenic_dust', 'gtceu:gallium_dust')
        .itemOutputs('gtceu:gallium_arsenide_dust')
        .duration(4000)
        .EUt(32)
    sog.recipes.gtceu.centrifuge('mattercentrifuge')
        .inputFluids('gtceu:star_matter 100')
        .itemOutputsRanged('gtceu:raw_beryllium', 1, 10)
        .itemOutputsRanged('gtceu:raw_apatite', 10, 60)
        .itemOutputsRanged('gtceu:raw_mica', 1, 10)
        .itemOutputsRanged('gtceu:raw_oilsands', 40, 60)
        .itemOutputsRanged('gtceu:raw_amethyst', 10, 60)
        .itemOutputsRanged('gtceu:indium_dust', 2, 4)
        .outputFluids('gtceu:tantalum_carbide 500')
        .duration(4000)
        .EUt((GTValues.VA[GTValues.HV]))
    sog.recipes.gtceu.electrolyzer('sodiumhydroxide')
        .inputFluids([Fluid.of('gtceu:mercury', 500)])
        .outputFluids([Fluid.of('gtceu:mercury_vapor', 1000)])
        .itemOutputsRanged('gtceu:sodium_hydroxide_dust', 2, 15)
        .duration(2000)
        .EUt((GTValues.VA[GTValues.LV]))
    sog.recipes.gtceu.combustion_generator('mercurypower')
        .inputFluids(Fluid.of('gtceu:mercury_vapor', 1000))
        .duration(20*40).EUt(-(GTValues.V[GTValues.HV]))
    sog.recipes.gtceu.autoclave('starmold')
        .inputFluids(Fluid.of('gtceu:star_matter', 144))
        .itemInputs('gtceu:empty_mold')
        .itemOutputs('kubejs:star_extruder_mold')
        .duration(2000)
        .EUt((GTValues.VA[GTValues.IV]))
    sog.recipes.gtceu.autoclave('nether_star')
        .inputFluids(Fluid.of('gtceu:star_matter', 144))
        .notConsumable('kubejs:star_extruder_mold')
        .itemOutputs('minecraft:nether_star')
        .duration(20)
        .EUt((GTValues.VA[GTValues.LuV]))
    sog.recipes.gtceu.chemical_reactor('raw_life_essence')
        .itemInputs('16x minecraft:rotten_flesh')
        .inputFluids(Fluid.of('gtceu:nitric_acid 1000'))
        .outputFluids('gtceu:raw_life_essence 3000')
        .duration(200)
        .EUt((GTValues.VA[GTValues.IV]))
    sog.recipes.gtceu.mixer('inert_life_essence')
        .itemInputs('3x gtceu:epoxy_dust')
        .inputFluids(Fluid.of('gtceu:raw_life_essence 3000'))
        .outputFluids('gtceu:inert_life_essence 3000')
        .duration(200)
        .EUt((GTValues.VA[GTValues.IV]))
    sog.shaped(
        'bloodmagic:altar',
        ['A A', 'AWA', 'CCC'],
        {
            A: 'gtceu:indium_gallium_phosphide_ingot',
            W: '#gtceu:circuits/luv',
            C: 'gtceu:dense_rhodium_plated_palladium_plate'
        }
        ).id('bm:altar')
    sog.recipes.gtceu.chemical_bath('processed_life_essence')
        .notConsumable('bloodmagic:weakbloodorb')
        .inputFluids(Fluid.of('gtceu:inert_life_essence 3000'))
        .outputFluids('gtceu:processed_life_essence 3000')
        .duration(200)
        .EUt((GTValues.VA[GTValues.IV]))
    sog.recipes.gtceu.autoclave('weakbloodorb_dupe')
        .notConsumable('bloodmagic:weakbloodorb')
        .inputFluids(Fluid.of('gtceu:inert_life_essence 3000'))
        .itemOutputs('bloodmagic:weakbloodorb')
        .duration(400)
        .EUt((GTValues.VA[GTValues.IV]))
    sog.recipes.gtceu.chemical_reactor('life_essence')
        .notConsumable('bloodmagic:weakbloodorb')
        .inputFluids(Fluid.of('gtceu:processed_life_essence 3000'))
        .inputFluids(Fluid.of('gtceu:oxygen 1000'))
        .outputFluids('bloodmagic:life_essence_fluid 7000')
        .duration(200)
        .EUt((GTValues.VA[GTValues.IV]))
    sog.recipes.gtceu.assembler('advancedtable')
        .itemInputs('avaritia:double_compressed_crafting_table', 'gtceu:luv_machine_casing', '8x extendedcrafting:luminessence')
        .inputFluids(Fluid.of('gtceu:polybenzimidazole 266'))
        .itemOutputs('extendedcrafting:advanced_table')
        .duration(500)
        .EUt(4)
    sog.recipes.gtceu.forming_press('earth_globe')
        .itemInputs(['64x exdeorum:compressed_diorite', '64x exdeorum:compressed_cobblestone', '64x exdeorum:compressed_granite', '64x exdeorum:compressed_andesite', '64x exdeorum:compressed_gravel'])
        .notConsumable('extendedcrafting:nether_star_block')
        .itemOutputs('ad_astra:earth_globe')
        .duration(500)
    sog.shaped(
            'angelring:angel_ring',
            ['A A', 'AWA', 'CCC'],
            {
                A: 'gtceu:manganese_phosphide_ingot',
                W: 'gtceu:lv_field_generator',
                C: 'gtceu:double_platinum_plate'
            }
            ).id('ag:angel_ring')
    sog.recipes.gtceu.assembler('mars_globe')
            .itemInputs('ad_astra:earth_globe', 'ad_astra:ostrum_block', '16x gtceu:cobalt_brass_ingot')
            .inputFluids(Fluid.of('gtceu:polybenzimidazole 266'))
            .itemOutputs('ad_astra:mars_globe')
            .duration(500)
            .EUt((GTValues.VA[GTValues.LuV]))
    sog.recipes.gtceu.chemical_bath('meat')
            .itemInputs('16x minecraft:rotten_flesh')
            .inputFluids(Fluid.of('bloodmagic:life_essence_fluid 16000'))
            .itemOutputs('minecraft:porkchop')
            .duration(500)
            .EUt((GTValues.VA[GTValues.HV]))
    sog.recipes.gtceu.electric_blast_furnace('gtceu:ebf/resonant_naquadah')
            .itemInputs('gtceu:resonant_naquadah_dust')
            .inputFluids('gtceu:krypton 1000')
            .itemOutputs('gtceu:resonant_naquadah_ingot')
            .blastFurnaceTemp(9001)
            .duration(1400)
            .EUt(GTValues.VA[GTValues.UV]);
    sog.recipes.gtceu.fusion_reactor('darmastadium')
            .inputFluids('gtceu:resonant_naquadah 16', 'gtceu:ruthenium 16')
            .outputFluids('gtceu:darmstadtium 32')
            .fusionStartEU(200000000)
            .duration(30)
            .EUt((GTValues.VA[GTValues.LuV]))
    sog.recipes.gtceu.autoclave('sky_steel')
            .inputFluids(Fluid.of('gtceu:iron', 144))
            .itemInputs('gtceu:certus_quartz_gem', 'ae2:sky_dust')
            .itemOutputs('megacells:sky_steel_ingot')
            .duration(20)
            .EUt((GTValues.VA[GTValues.HV]))
    sog.recipes.gtceu.circuit_assembler('accuprocess')
            .itemInputs('ae2:silicon', 'minecraft:redstone', 'megacells:sky_steel_ingot')
            .inputFluids('gtceu:lubricant 63')
            .notConsumable('ae2:name_press')
            .itemOutputs('megacells:accumulation_processor')
            .duration(40)
            .EUt(128)
    sog.shapeless('minecraft:egg', [ 'minecraft:grass', 'hostilenetworks:overworld_prediction'])
    sog.recipes.gtceu.bender('deshplate')
            .itemInputs('ad_astra:desh_ingot')
            .itemOutputs('ad_astra:desh_plate')
            .circuit(1)
            .duration(40)
            .EUt(128)
    sog.shapeless(
        Item.of('gtmutils:neutronium_credit', 1),
            ['8x gtmutils:naquadah_credit']
    )
    sog.shapeless(
        Item.of('gtmutils:naquadah_credit', 1),
            ['8x gtmutils:osmium_credit']
    )
    sog.shapeless(
        Item.of('gtmutils:osmium_credit', 1),
            ['8x gtmutils:platinum_credit']
    )
    sog.shapeless(
        Item.of('gtmutils:platinum_credit', 1),
            ['8x gtmutils:gold_credit']
    )
    sog.shapeless(
        Item.of('gtmutils:gold_credit', 1),
            ['8x gtmutils:silver_credit']
    )
    sog.shapeless(
        Item.of('gtmutils:silver_credit', 1),
            ['8x gtmutils:cupronickel_credit']
    )
        sog.shapeless(
        Item.of('gtmutils:copper_credit', 8),
            ['1x gtmutils:cupronickel_credit']
    )
    sog.shaped(
            'gtceu:altart2',
            ['ABA', 'CZC', 'CFC'],
            {
                A: 'gtceu:dense_rhodium_plated_palladium_plate',
                B: 'gtceu:hsss_frame',
                C: '#gtceu:circuits/luv',
                Z: 'bloodmagic:altar',
                F: 'megacells:bulk_cell_component'
           }
            ).id('sog:altart2')
    sog.recipes.gtceu.assembler('atomic_casing')
            .itemInputs('6x gtceu:atomic_alloy_frame', '4x gtceu:atomic_alloy_foil')
            .inputFluids('gtceu:polybenzimidazole 63')
            .circuit(24)
            .itemOutputs('2x gtceu:atomic_casing')
            .duration(40)
            .EUt(524288)
    sog.shaped(
            'gtceu:mega_blast_furnace',
            ['ABA', 'CZC', 'HBH'],
            {
                A: 'gtceu:dense_triplatirium_235_plate',
                B: 'gtceu:atomic_casing',
                Z: 'gtceu:electric_blast_furnace',
                C: 'gtceu:zpm_field_generator',
                H: 'gtceu:naquadah_alloy_buzz_saw_blade'
           }
            ).id('sog:mega_ebf')
    sog.shaped(
            'gtceu:atomicforge',
            ['ABA', 'CZC', 'CHC'],
            {
                A: 'gtceu:dense_atomic_alloy_plate',
                B: 'gtceu:mega_blast_furnace',
                Z: '#gtceu:circuits/uv',
                C: 'gtceu:atomic_alloy_foil',
                H: 'gtceu:zpm_fusion_reactor'
           }
            ).id('sog:atomicforge')
            sog.shaped(
                'gtceu:reinforced_atomicforge',
                ['ABA', 'CZC', 'CHC'],
                {
                    A: 'gtceu:dense_infinity_plate',
                    B: 'gtceu:atomicforge',
                    Z: '#gtceu:circuits/uxv',
                    C: 'gtceu:infinity_screw',
                    H: 'gtceu:uev_fusion_reactor'
               }
                ).id('sog:reinforced_atomicforge')
    sog.shaped(
            'gtceu:starcondenser',
            ['ABA', 'BZB', 'CCC'],
            {
                A: '#gtceu:circuits/uv',
                B: 'gtceu:atomic_alloy_frame',
                Z: 'kubejs:condensed_star_matter',
                C: 'gtceu:atomic_casing'
            }
            ).id('sog:star_condenser')
    sog.shaped(
            'gtceu:blacklight',
            ['ABA', 'HZH', 'ABA'],
            {
                A: 'gtceu:tungsten_carbide_gear',
                B: 'gtceu:chemical_purple_dye',
                Z: 'gtceu:purple_glass_lens',
                H: 'gtceu:triplatirium_235_foil'
            }
            ).id('gt:blacklight')
    sog.recipes.gtceu.electric_blast_furnace('hasoc')
            .itemInputs('gtceu:advanced_soc', 'kubejs:condensed_star_matter')
            .inputFluids('gtceu:sulfuric_acid 1000')
            .itemOutputs('8x gtceu:highly_advanced_soc')
            .blastFurnaceTemp(12000)
            .duration(160)
            .EUt(GTValues.VA[GTValues.UHV]);
sog.recipes.gtceu.implosion_compressor('ae2:quantumsingularity')
            .itemInputs('gtceu:industrial_tnt', 'ae2:singularity', 'minecraft:ender_pearl')
            .itemOutputs('2x ae2:quantum_entangled_singularity')
            .duration(160)
            .EUt(GTValues.VA[GTValues.UHV]);
sog.recipes.gtceu.implosion_compressor('gtceu:ic/crystal_matrix')
            .itemInputs('4x gtceu:industrial_tnt', '64x avaritia:diamond_lattice')
            .itemOutputs('1x gtceu:crystal_matrix_ingot')
            .duration(5)
            .EUt(GTValues.VA[GTValues.UHV]);
sog.shaped(
                'avaritia:diamond_lattice',
                [' BA', 'BBB', 'AB '],
                {
                    A: 'gtceu:quantum_star',
                    B: 'gtceu:diamond_plate'
               }
                ).id('sog:lattice')
sog.recipes.gtceu.implosion_compressor('gtceu:ic/draconiccore')
            .itemInputs('4x gtceu:industrial_tnt', '4x gtceu:dense_crystal_matrix_plate', '8x draconicevolution:draconium_dust')
            .itemOutputs('64x draconicevolution:draconium_core')
            .duration(5)
            .EUt(GTValues.VA[GTValues.UHV]);
sog.shaped(
                'draconicevolution:particle_generator',
                ['ABA', 'BZB', 'ABA'],
                {
                    A: 'gtceu:neutronium_plate',
                    B: 'kubejs:fallen_singularity',
                    Z: 'draconicevolution:draconium_core'
               }
                ).id('de:particlegen')
sog.shaped(
                'draconicevolution:energy_core_stabilizer',
                ['ABA', 'BZB', 'ABA'],
                {
                    A: 'gtceu:dense_crystal_matrix_plate',
                    B: 'kubejs:quantum_energy_capsule',
                    Z: 'draconicevolution:particle_generator'
                }
                ).id('de:energycore')
sog.shaped(
                'gtceu:dimensional_matter_extractor',
                ['AHA', 'BZB', 'ABA'],
                {
                    A: 'gtceu:atomic_casing',
                    B: 'draconicevolution:energy_core_stabilizer',
                    Z: 'gtceu:uhv_machine_hull',
                    H: 'kubejs:gravitational_containment_cell'
                }
                ).id('sog:dimensionalextractor')
sog.shaped(
    'kubejs:neutronate_enriched_atomic_casing',
    [' B ', 'BAB', ' B '],
    {
        A: 'gtceu:atomic_casing',
        B: 'gtceu:ruthenium_trinium_americium_neutronate_hex_wire',
    }
    ).id('sog:neutronate')
sog.shaped(
        '2x minecraft:paper',
        ['BBB', 'BAB', 'BBB'],
        {
            A: Item.of('minecraft:water_bucket'),
            B: 'gtceu:wood_dust',
        }).replaceIngredient({item: Item.of('minecraft:water_bucket')}, 'minecraft:bucket')
        sog.recipes.gtceu.thermal_centrifuge('gtceu:tc/paper')
        .itemInputs('minecraft:sugar_cane')
        .itemOutputs('minecraft:paper')
        .duration(5)
        .EUt(GTValues.VA[GTValues.MV]);
        sog.recipes.gtceu.thermal_centrifuge('gtceu:tc/leather')
        .itemInputs('minecraft:rotten_flesh')
        .itemOutputs('minecraft:leather')
        .duration(5)
        .EUt(GTValues.VA[GTValues.LV]);

sog.shaped(
    'gtceu:mv_electric_extractinator',
    ['ABC', 'DEF', 'BGA'],
    {
        A: 'gtceu:mv_robot_arm',
        B: 'gtceu:transistor',
        C: 'gtceu:vanadium_steel_gear',
        D: 'gtceu:mv_conveyor_module',
        E: 'gtceu:mv_machine_hull',
        F: 'gtceu:mv_sensor',
        G: 'extractinator:extractinator',
    }
)
sog.shaped(
    'gtceu:hv_electric_extractinator',
    ['ABC', 'DEF', 'GHA'],
    {
        A: 'gtceu:hv_robot_arm',
        B: 'ae2:engineering_processor',
        C: 'gtceu:double_platinum_plate',
        D: 'gtceu:hv_conveyor_module',
        E: 'gtceu:hv_machine_hull',
        F: 'gtceu:hv_sensor',
        G: 'gtceu:lv_field_generator',
        H: 'extractinator:extractinator',
    }
)
sog.shaped(
    'gtceu:ev_electric_extractinator',
    ['ABC', 'DEF', 'GHA'],
    {
        A: 'gtceu:ev_robot_arm',
        B: 'gtceu:ev_voltage_coil',
        C: 'gtceu:ultimet_gear',
        D: 'gtceu:ev_conveyor_module',
        E: 'gtceu:ev_machine_hull',
        F: '#gtceu:circuits/ev',
        G: 'gtceu:mpic_chip',
        H: 'extractinator:extractinator',
    }
)        
sog.shaped(
    'gtceu:iv_electric_extractinator',
    ['ABC', 'DEF', 'GHA'],
    {
        A: 'gtceu:iv_robot_arm',
        B: 'gtceu:iv_voltage_coil',
        C: 'gtceu:osmiridium_gear',
        D: 'gtceu:iv_conveyor_module',
        E: 'gtceu:iv_machine_hull',
        F: 'gtceu:iv_sensor',
        G: 'minecraft:nether_star',
        H: 'extractinator:extractinator',

    }
)
sog.shaped(
    'gtceu:robust_extractinator',
    ['ABC', 'DEF', 'GHA'],
    {
        A: 'gtceu:iv_robot_arm',
        B: 'gtceu:iv_voltage_coil',
        C: 'gtceu:osmiridium_gear',
        D: 'gtceu:iv_conveyor_module',
        E: 'gtceu:iv_electric_extractinator',
        F: 'gtceu:iv_sensor',
        G: 'gtceu:quantum_star',
        H: '#gtceu:circuits/luv',

    }
)
sog.shaped(
    'gtceu:atomicompressor',
    ['ABA', 'CDC', 'AEA'],
    {
        A: 'kubejs:exotic_matter',
        B: 'kubejs:stabilized_collapsed_singularity',
        C: 'kubejs:stable_matter',
        D: 'gtceu:implosion_compressor',
        E: 'draconicevolution:energy_core_stabilizer'

    }
)
sog.recipes.gtceu.fusion_reactor('reactmatter')
        .inputFluids('gtceu:antimatter 1000', 'gtceu:star_matter 10000')
        .outputFluids('gtceu:reactable_fissioned_matter_plasma 10000')
        .fusionStartEU(640000000)
        .duration(30)
        .EUt((GTValues.VA[GTValues.UHV]))


sog.shaped(
    'kubejs:quantum_resonant_core',
    ['ABA', 'BZB', 'ABA'],
    {
        A: 'gtceu:uv_field_generator',
        B: 'kubejs:stabilized_collapsed_singularity',
        Z: 'kubejs:atomically_compressed_black_hole'
})
sog.recipes.gtceu.assembler('neutronium_casing')
.itemInputs('6x gtceu:neutronium_frame', '4x gtceu:neutronium_foil')
.inputFluids('gtceu:polybenzimidazole 63')
.circuit(24)
.itemOutputs('2x kubejs:neutronium_casing')
.duration(40)
.EUt(GTValues.VA[GTValues.UV]);
sog.shaped(
    'gtceu:supercriticalvibrationsifter',
    ['ABA', 'YZC', 'YKL'],
    {
        A: 'gtceu:uv_field_generator',
        B: 'kubejs:quantum_resonant_core',
        Z: 'gtceu:uhv_machine_hull',
        C: 'gtceu:uv_emitter',
        Y: 'gtceu:uv_robot_arm',
        K: 'kubejs:gravitational_containment_cell',
        L: 'gtceu:uhv_ultimate_battery'
})
sog.recipes.gtceu.alloy_smelter('copperalloy')
.itemInputs('2x gtceu:annealed_copper_ingot', 'gtceu:red_alloy_ingot')
.itemOutputs('4x enderio:copper_alloy_ingot')
.duration(100)
.EUt(32)
sog.recipes.gtceu.alloy_smelter('energeticalloy')
.itemInputs('24x minecraft:glowstone_dust', 'enderio:copper_alloy_ingot')
.itemOutputs('4x enderio:energetic_alloy_ingot')
.duration(100)
.EUt(32)
sog.recipes.gtceu.alloy_smelter('vibrantalloy')
.itemInputs('8x gtceu:aluminium_ingot', 'enderio:pulsating_alloy_ingot')
.itemOutputs('4x enderio:vibrant_alloy_ingot')
.duration(100)
.EUt(32)
sog.recipes.gtceu.alloy_smelter('endsteel')
.itemInputs('2x gtceu:steel_ingot', '16x minecraft:end_stone')
.itemOutputs('4x enderio:end_steel_ingot')
.duration(100)
.EUt(32)
sog.recipes.gtceu.alloy_smelter('darksteel')
.itemInputs('2x gtceu:steel_ingot', 'enderio:soularium_ingot')
.itemOutputs('4x enderio:dark_steel_ingot')
.duration(100)
.EUt(32)
sog.shaped(
    'enderio:ender_crystal',
    [' A ', 'ABA', ' A '],
    {
        A: 'minecraft:ender_pearl',
        B: 'enderio:vibrant_crystal',
})
sog.recipes.gtceu.autoclave('condensed_nether_star')
.inputFluids(Fluid.of('gtceu:condensed_star_matter', 144))
.notConsumable('kubejs:star_extruder_mold')
.itemOutputs('16x minecraft:nether_star')
.duration(20)
.EUt((GTValues.VA[GTValues.LuV]))
sog.recipes.gtceu.assembler('uhv_voltage_coil')
.itemInputs('gtceu:magnetic_samarium_rod', '16x gtceu:fine_neutronium_wire')
.circuit(1)
.itemOutputs('kubejs:uhv_voltage_coil')
.duration(200)
.EUt(GTValues.VA[GTValues.UHV]);
sog.recipes.gtceu.assembler('uev_voltage_coil')
.itemInputs('gtceu:magnetic_samarium_rod', '16x gtceu:fine_draconium_wire')
.circuit(1)
.itemOutputs('kubejs:uev_voltage_coil')
.duration(400)
.EUt(GTValues.VA[GTValues.UHV]);
sog.shaped(
    'minecraft:netherite_upgrade_smithing_template',
    ['ABA', 'AZA', 'AAA'],
    {
        A: 'minecraft:diamond',
        B: 'minecraft:netherite_scrap',
        Z: 'minecraft:netherrack'
})
sog.recipes.gtceu.bender('ostrum_plate')
.itemInputs('ad_astra:ostrum_ingot')
.itemOutputs('ad_astra:ostrum_plate')
.circuit(1)
.duration(40)
.EUt(128)
sog.recipes.gtceu.bender('saturlyte_plate')
.itemInputs('ad_extendra:saturlyte_ingot')
.itemOutputs('ad_extendra:saturlyte_plate')
.circuit(1)
.duration(40)
.EUt(128)
sog.shaped(
    'ad_astra:rocket_fin',
    [' A ', 'ABA', 'ABA'],
    {
        A: 'gtceu:dense_stainless_steel_plate',
        B: 'gtceu:smd_inductor'
})
sog.shaped(
    'ad_astra:rocket_nose_cone',
    [' A ', 'BGB', 'BHB'],
    {
        A: 'minecraft:lightning_rod',
        B: 'gtceu:dense_magnetic_steel_plate',
        G: 'gtceu:lv_field_generator',
        H: 'gtceu:steel_block'
})
sog.shaped(
    'ad_astra:fan',
    [' A ', 'ABA', ' A '],
    {
        A: 'gtceu:long_iron_rod',
        B: 'gtceu:steel_rotor'
})
sog.shaped(
    'ad_astra:engine_frame',
    ['ABB', 'AZA', 'BBA'],
    {
        B: 'gtceu:dense_stainless_steel_plate',
        A: 'gtceu:long_iron_rod',
        Z: 'gtceu:lv_field_generator'
})
sog.shaped(
    'ad_astra:oxygen_gear',
    ['A A', 'BHB', 'FGF'],
    {
        A: 'ad_astra:oxygen_tank',
        B: 'gtceu:dense_stainless_steel_plate',
        H: 'gtceu:long_iron_rod',
        F: 'gtceu:blue_steel_buzz_saw_blade',
        G: 'gtceu:blue_steel_frame'
})
sog.shaped(
    'ad_astra:gas_tank',
    ['ABC', 'ADE', 'AFC'],
    {
        A: 'gtceu:dense_stainless_steel_plate',
        C: 'gtceu:smd_transistor',
        B: 'gtceu:long_iron_rod',
        D: 'gtceu:mask_filter',
        E: 'gtceu:stainless_steel_drum',
        F: 'gtceu:hv_battery_hull'
})
sog.recipes.gtceu.mixer('mixed_alloy')
.itemInputs('7x gtceu:copper_dust', '4x gtceu:tin_dust', '11x gtceu:iron_dust')
.itemOutputs('22x gtceu:mixed_alloy_dust')
.circuit(4)
.duration(200)
.EUt((GTValues.VA[GTValues.MV]))
sog.recipes.gtceu.mixer('heavy_duty_alloy_t1')
.itemInputs('16x gtceu:mixed_alloy_dust', '4x gtceu:steel_dust', '11x gtceu:iron_dust')
.inputFluids(Fluid.of('gtceu:stainless_steel 144'))
.itemOutputs('gtceu:hot_heavy_duty_alloy_t1_ingot')
.circuit(4)
.duration(200)
.EUt((GTValues.VA[GTValues.HV]))
sog.recipes.gtceu.mixer('heavy_duty_alloy_t2')
.itemInputs('7x gtceu:platinum_dust', '4x gtceu:osmiridium_dust', '11x gtceu:tantalum_carbide_dust', 'gtceu:heavy_duty_alloy_t1_dust')
.inputFluids(Fluid.of('gtceu:rhodium_plated_palladium 144'))
.itemOutputs('gtceu:hot_heavy_duty_alloy_t2_ingot')
.circuit(4)
.duration(200)
.EUt((GTValues.VA[GTValues.LuV]))
sog.recipes.gtceu.mixer('heavy_duty_alloy_t3')
.itemInputs('7x gtceu:ruthenium_trinium_americium_neutronate_dust', '4x gtceu:triplatirium_235_dust', '11x gtceu:atomic_alloy_dust', 'gtceu:heavy_duty_alloy_t2_dust')
.inputFluids(Fluid.of('gtceu:condensed_star_matter 144'))
.itemOutputs('gtceu:hot_heavy_duty_alloy_t3_ingot')
.circuit(4)
.duration(200)
.EUt((GTValues.VA[GTValues.UHV]))
sog.recipes.gtceu.implosion_compressor('gtceu:ic/hdat3')
.itemInputs('4x gtceu:industrial_tnt', 'gtceu:hot_heavy_duty_alloy_t3_ingot')
.itemOutputs('gtceu:heavy_duty_alloy_t3_ingot')
.duration(5)
.EUt(GTValues.VA[GTValues.UHV]);
sog.recipes.gtceu.implosion_compressor('gtceu:ic/hdat2')
.itemInputs('64x minecraft:tnt', 'gtceu:hot_heavy_duty_alloy_t2_ingot')
.itemOutputs('gtceu:heavy_duty_alloy_t2_ingot')
.duration(5)
.EUt(GTValues.VA[GTValues.LuV]);
sog.recipes.gtceu.implosion_compressor('gtceu:ic/hdat1')
.itemInputs('64x minecraft:tnt', 'gtceu:hot_heavy_duty_alloy_t1_ingot')
.itemOutputs('gtceu:heavy_duty_alloy_t1_ingot')
.duration(5)
.EUt(GTValues.VA[GTValues.LV]);
sog.recipes.gtceu.implosion_compressor('gtceu:ic/hdat2itnt')
.itemInputs('32x gtceu:industrial_tnt', 'gtceu:hot_heavy_duty_alloy_t2_ingot')
.itemOutputs('gtceu:heavy_duty_alloy_t2_ingot')
.duration(5)
.EUt(GTValues.VA[GTValues.LuV]);
sog.recipes.gtceu.implosion_compressor('gtceu:ic/hdat1itnt')
.itemInputs('32x gtceu:industrial_tnt', 'gtceu:hot_heavy_duty_alloy_t1_ingot')
.itemOutputs('gtceu:heavy_duty_alloy_t1_ingot')
.duration(5)
.EUt(GTValues.VA[GTValues.LV]);
sog.shaped(
    'gtceu:atomic_moonminer',
    ['ABA', 'EDE', 'ABA'],
    {
        A: 'gtceu:atomic_casing',
        B: 'gtceu:tritanium_coil_block',
        D: 'gtceu:moonminer',
        E: 'gtceu:wetware_processor_mainframe',

})
sog.recipes.gtceu.autoclave('gtceu:ac/acidic_resonant_residue')
.itemInputs('kubejs:primal_resonant_core')
.inputFluids(Fluid.of('gtceu:acidic_venus_residue 144'))
.outputFluids(Fluid.of('gtceu:resonant_essence_residue 1000'))
.duration(100)
.EUt(GTValues.VA[GTValues.UEV]);
sog.recipes.gtceu.extractor('creative_data2')
.itemInputs('64x #gtceu:circuits/uv')
.itemOutputs('gtceu:creative_data_access_hatch')
.duration(100)
.EUt(GTValues.VA[GTValues.UV]);
sog.recipes.gtceu.assembler('kaemite_casing')
.itemInputs('6x gtceu:kaemite_frame', '4x gtceu:kaemite_foil')
.inputFluids('gtceu:polybenzimidazole 63')
.circuit(24)
.itemOutputs('2x kubejs:kaemite_casing')
.duration(40)
.EUt(GTValues.VA[GTValues.UHV]);
sog.shaped(
    'kubejs:drilling_projector_module',
    ['ABA', 'BZB', 'ABA'],
    {
        A: 'kubejs:gravitational_fluctuation_module',
        B: 'gtceu:uv_parallel_hatch',
        Z: 'gtceu:neutronium_drill_head'
})
sog.shaped(
    'kubejs:pumping_projector_module',
    ['ABA', 'BZB', 'ABA'],
    {
        A: 'kubejs:gravitational_fluctuation_module',
        B: 'gtceu:uv_parallel_hatch',
        Z: 'gtceu:uhv_electric_pump'
})
sog.shaped(
    'kubejs:fusion_projector_module',
    ['ABF', 'BZB', 'FBA'],
    {
        A: 'kubejs:gravitational_fluctuation_module',
        B: 'avaritia:eternal_singularity',
        Z: 'gtceu:uv_fusion_reactor',
        F: 'gtceu:fine_cosmic_neutronium_wire'
})
sog.shaped(
    'kubejs:cosmic_projector_module',
    ['ABF', 'BZB', 'FBA'],
    {
        A: 'kubejs:gravitational_fluctuation_module',
        B: 'avaritia:eternal_singularity',
        Z: 'gtceu:uhv_quantum_tank',
        F: 'kubejs:gravitational_containment_cell'
})
sog.recipes.gtceu.assembler('uevcasing')
.itemInputs('8x gtceu:resonant_essence_plate')
.circuit(8)
.itemOutputs('gtceu:uev_machine_casing')
.duration(50)
.EUt(GTValues.VA[GTValues.LV]);
sog.recipes.gtceu.large_chemical_reactor('hrcb')
.itemInputs('2x gtceu:wetware_circuit_board', '64x gtceu:antimatter_foil', 'kubejs:antimatter_boule')
.inputFluids(Fluid.of('gtceu:antimatter', 100))
.itemOutputs('4x kubejs:highly_resonative_circuit_board')
.cleanroom(CleanroomType.CLEANROOM)
.duration(900)
.EUt(GTValues.VA[GTValues.UEV]);
sog.recipes.gtceu.large_chemical_reactor('hrcb2')
.itemInputs('kubejs:highly_resonative_circuit_board', '32x gtceu:resonant_essence_single_wire')
.inputFluids(Fluid.of('gtceu:antimatter', 100))
.itemOutputs('kubejs:highly_resonative_printed_circuit_board')
.cleanroom(CleanroomType.CLEANROOM)
.duration(1800)
.EUt(GTValues.VA[GTValues.UEV]);
sog.recipes.gtceu.large_chemical_reactor('red_granite')
.itemInputs('minecraft:granite')
.inputFluids(Fluid.of('gtceu:redstone', 144))
.circuit(8)
.itemOutputs('gtceu:red_granite')
.duration(100)
.EUt(GTValues.VA[GTValues.EV]);
sog.shapeless('minecraft:bamboo', ['minecraft:oak_sapling', 'minecraft:wheat_seeds', 'hostilenetworks:overworld_prediction'])
sog.shapeless('minecraft:beetroot_seeds', ['minecraft:wheat_seeds', '2x hostilenetworks:overworld_prediction'])
sog.shapeless('minecraft:pumpkin_seeds', ['minecraft:beetroot_seeds', 'minecraft:wheat_seeds', 'hostilenetworks:overworld_prediction'])
sog.recipes.gtceu.autoclave('resonant_matrix')
.inputFluids(Fluid.of('gtceu:resonant_naquadah', 144))
.itemInputs('gtceu:crystal_matrix_ingot')
.itemOutputs('avaritia:crystal_matrix_ingot')
.duration(20)
.EUt((GTValues.VA[GTValues.UHV]))
sog.recipes.gtceu.mixer('energizedsuperconductor')
.circuit(2)
.itemInputs('4x gtceu:gold_dust', 'gtceu:coal_dust', '2x minecraft:redstone')
.itemOutputs('3x gtceu:energized_superconductor_dust')
.duration(100)
.EUt(32)
sog.recipes.gtceu.mixer('hscsuperconductor')
.circuit(4)
.itemInputs('4x gtceu:coal_dust', '4x gtceu:silicon_dust', '2x gtceu:annealed_copper_dust')
.inputFluids('gtceu:oxygen 2000')
.itemOutputs('3x gtceu:hsc_superconductor_dust')
.duration(175)
.EUt(128)
sog.recipes.gtceu.mixer('platiumsuperconductor')
.circuit(4)
.itemInputs('1x gtceu:coal_dust', '4x gtceu:platinum_dust', '8x gtceu:energium_dust')
.itemOutputs('4x gtceu:platium_superconductor_dust')
.duration(275)
.EUt(512)
sog.recipes.gtceu.mixer('tilrunumsuperconductor')
.circuit(4)
.itemInputs('1x gtceu:titanium_dust', '4x gtceu:ruthenium_dust', '8x gtceu:molybdenum_dust')
.itemOutputs('13x gtceu:tilrunum_superconductor_dust')
.duration(175)
.EUt(2048)
sog.recipes.gtceu.autoclave('crystal_superconductor')
.inputFluids(Fluid.of('gtceu:europium', 144))
.itemInputs('gtceu:crystal_soc')
.itemOutputs('4x gtceu:crystal_superconductor_ingot')
.duration(380)
.EUt((GTValues.VA[GTValues.ZPM]))
sog.shaped(
    'kubejs:end_miner_module',
    ['ABA', 'BZB', 'ABA'],
    {
        A: 'minecraft:dragon_egg',
        B: 'minecraft:dragon_breath',
        Z: 'draconicevolution:dragon_heart',
})
sog.recipes.gtceu.forming_press('cupro_credit')
.itemInputs('gtceu:cupronickel_plate')
.notConsumable('gtceu:cylinder_casting_mold')
.itemOutputs('4x gtmutils:cupronickel_credit')
.duration(100)
.EUt((GTValues.VA[GTValues.LV]))
sog.recipes.gtceu.forming_press('moonglobe')
.itemInputs('gtceu:stainless_steel_block')
.notConsumable('ae2:name_press')
.notConsumable('ad_astra:moon_globe')
.itemOutputs('ad_astra:moon_globe')
.duration(500)
.EUt((GTValues.VA[GTValues.HV]))
sog.recipes.gtceu.centrifuge('magnaliumbismuth')
.itemInputs('3x gtceu:magnalium_dust')
.itemOutputs('1x gtceu:bismuth_dust')
.duration(100)
.EUt(32)
sog.recipes.gtceu.centrifuge('californium')
.itemInputs('3x gtceu:cleaned_californium_dust')
.itemOutputs('1x gtceu:californium_dust')
.duration(100)
.EUt(32)
sog.shaped(
    'gtceu:bio_lab',
    ['ABA', 'AZA', 'AFA'],
    {
        A: 'gtceu:plascrete',
        B: 'gtceu:stem_cells',
        Z: 'gtceu:uhv_hermetic_casing',
        F: '#gtceu:circuits/uev'
})
sog.shaped(
    'gtceu:large_bacterial_bat',
    ['ABA', 'AZA', 'AFA'],
    {
        A: 'gtceu:plascrete',
        B: 'gtceu:stem_cells',
        Z: 'gtceu:petri_dish',
        F: '#gtceu:circuits/uv'
    })

//Stabilized Iridium

sog.recipes.gtceu.mixer('neutronic_chromite')
.circuit(4)
.itemInputs('7x gtceu:chromium_dust', '4x gtceu:neutronium_dust')
.itemOutputs('4x gtceu:neutronic_chromite_dust')
.duration(275)
.EUt((GTValues.VA[GTValues.UHV]))
sog.recipes.gtceu.mixer('radium_infused_lead')
.circuit(2)
.itemInputs('6x gtceu:lead_dust', '2x gtceu:platinum_dust')
.inputFluids('gtceu:radon 1000')
.itemOutputs('4x gtceu:radium_infused_lead_dust')
.duration(275)
.EUt((GTValues.VA[GTValues.EV]))
sog.recipes.gtceu.mixer('stabilized_iridium_dust')
.circuit(3)
.itemInputs('19x gtceu:iridium_dust', '4x gtceu:osmium_dust', '8x gtceu:neutronic_chromite_dust', 'gtceu:radium_infused_lead_dust')
.itemOutputs('4x gtceu:stabilized_iridium_dust')
.duration(275)
.EUt((GTValues.VA[GTValues.UHV]))
sog.recipes.gtceu.mixer('californite')
.circuit(4)
.itemInputs('19x gtceu:californium_dust', '8x gtceu:stabilized_iridium_dust')
.itemOutputs('4x gtceu:californite_dust')
.duration(275)
.EUt((GTValues.VA[GTValues.UEV]))
sog.recipes.gtceu.mixer('draconium')
.circuit(1)
.itemInputs('5x gtceu:hypoxylon_dust', '8x gtceu:stabilized_iridium_dust', '8x gtceu:ruthenium_trinium_americium_neutronate_dust', '2x gtceu:antimatter_dust')
.itemOutputs('4x draconicevolution:draconium_dust')
.duration(400)
.EUt((GTValues.VA[GTValues.UEV]))

//


    // Universal Circuits
    const tiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv"]
        tiers.forEach((level) => {
        sog.recipes.gtceu.forming_press("kubejs:" + level + "_universal_circuit")
            .itemInputs("#gtceu:circuits/" + level)
            .itemOutputs("kubejs:" + level + "_universal_circuit")
            .EUt(32)
            .duration(5)
    })
sog.recipes.gtceu.macerator('shattered')
.itemInputs('advanced_ae:shattered_singularity')
.itemOutputs('advanced_ae:quantum_infused_dust')
.duration(15)
.EUt(512)
sog.recipes.gtceu.macerator('refined_apatite_ore_apatite')
.itemInputs('gtceu:refined_apatite_ore')
.itemOutputs('gtceu:apatite_dust')
.duration(400)
.EUt(2)
sog.recipes.gtceu.circuit_assembler('quantumprocessor')
.itemInputs('ae2:silicon', 'minecraft:redstone', 'advanced_ae:quantum_alloy')
.inputFluids('gtceu:lubricant 63')
.notConsumable('ae2:name_press')
.itemOutputs('advanced_ae:quantum_processor')
.duration(40)
.EUt(2048)

sog.shaped(
    'kubejs:component_tile_casing',
    ['AAA', 'ABA', 'AAA'],
    {
        A: 'gtceu:cosmic_titanium_plate',
        B: 'gtceu:tritanium_frame'
})
sog.shaped(
    'kubejs:large_precision_casing',
    ['AAA', 'ABA', 'AAA'],
    {
        A: 'gtceu:cosmic_tungsten_plate',
        B: 'gtceu:hypoxylon_frame'
})
sog.shaped(
    'kubejs:reinforced_computation_casing',
    ['AAA', 'ABA', 'AAA'],
    {
        A: 'gtceu:cosmic_iridium_plate',
        B: 'gtceu:computer_casing'
})
sog.shaped(
    '2x kubejs:highly_reinforced_radioactive_casing',
    ['AAA', 'ABA', 'AAA'],
    {
        A: 'gtceu:stabilized_iridium_plate',
        B: 'kubejs:californite_heavy_plating'
})
sog.shaped(
    '2x kubejs:stellar_powered_casing',
    ['AAA', 'EBE', 'AAA'],
    {
        E: 'kubejs:draconium_heavy_plating',
        A: 'gtceu:dense_antimatter_plate',
        B: 'kubejs:highly_reinforced_radioactive_casing'
})
sog.shaped(
    'gtceu:atmospheric_collector',
    ['ABA', 'YCY', 'ABA'],
    {
        A: 'gtceu:luv_electric_pump',
        B: 'gtceu:laminated_glass',
        Y: '#gtceu:circuits/luv',
        C: 'gtceu:luv_machine_hull'
})
sog.shaped(
    'gtceu:particle_implosion_chamber',
    ['ABA', 'YCY', 'ABA'],
    {
        A: 'gtceu:uhv_robot_arm',
        B: 'gtceu:atomic_casing',
        Y: '#gtceu:circuits/uhv',
        C: 'gtceu:uhv_machine_hull'
})
sog.shaped(
    'ae2:energy_acceptor',
    ['ABA', 'BYB', 'ABA'],
    {
        A: 'gtceu:platinum_ingot',
        B: 'gtceu:lpic_chip',
        Y: 'gtceu:hv_machine_hull',
})
sog.shaped(
    'ae2:interface',
    ['ABA', 'BYC', 'ACA'],
    {
        A: 'gtceu:stainless_steel_ingot',
        B: 'ae2:annihilation_core',
        Y: 'enderio:me_conduit',
        C: 'ae2:formation_core'
})
sog.shaped(
    'ae2:import_bus',
    ['ABA', 'BYB', '   '],
    {
        A: 'gtceu:stainless_steel_ingot',
        B: 'ae2:formation_core',
        Y: 'minecraft:sticky_piston',
})
sog.shaped(
    'ae2:export_bus',
    ['ABA', 'BYB', '   '],
    {
        A: 'gtceu:stainless_steel_ingot',
        B: 'ae2:annihilation_core',
        Y: 'minecraft:sticky_piston',
})
sog.shaped(
    'avaritia:extreme_crafting_table',
    ['BB ', 'AA ', '   '],
    {
        A: 'avaritia:crystal_matrix_ingot',
        B: 'minecraft:flint',
})

    sog.recipes.gtceu.autoclave("glow_ink_sac") // sog=event.recipes.gtceu.autoclave(name of the machine)"glow_ink_sak"=recipe id
      .itemInputs("1x minecraft:ink_sac") // inputs  of the machine
      .inputFluids(Fluid.of("gtceu:glowstone", 144)) //fl
      .itemOutputs("1x minecraft:glow_ink_sac")
      .duration(20 * 5)
      .EUt(16)

sog.shapeless('ae2:interface', ['ae2:cable_interface'])
sog.shapeless('ae2:pattern_provider', ['ae2:cable_pattern_provider'])

const ebfHeavyAlloyRecipe = (tier, fluidInput, temperature, voltage, durationInSeconds) => {
    const GAS_BOOST = 0.67
    const idBase = `heavy_duty_alloy_t${tier}`

    sog.recipes.gtceu.electric_blast_furnace(`blast_${idBase}`)
        .itemInputs(`gtceu:${idBase}_dust`)
        .itemOutputs(`gtceu:${idBase}_ingot`)
        .blastFurnaceTemp(temperature)
        .duration(20 * durationInSeconds)
        .circuit(1)
        .EUt(GTValues.VA[GTValues[voltage]])

    sog.recipes.gtceu.electric_blast_furnace(`blast_${idBase}_gas`)
        .itemInputs(`gtceu:${idBase}_dust`)
        .inputFluids(fluidInput)
        .itemOutputs(`gtceu:${idBase}_ingot`)
        .blastFurnaceTemp(temperature)
        .duration(20 * durationInSeconds * GAS_BOOST)
        .circuit(2)
        .EUt(GTValues.VA[GTValues[voltage]])
}

ebfHeavyAlloyRecipe(1, "gtceu:nitrogen 1000", 3500, "HV", 45)
ebfHeavyAlloyRecipe(2, "gtceu:argon 50", 5100, "LuV", 60)
ebfHeavyAlloyRecipe(3, "gtceu:krypton 10", 9600, "UHV", 65)


sog.recipes.gtceu.assembler('sterile_cleaning_maintenance_hatch')
    .itemInputs('gtceu:cleaning_maintenance_hatch')
    .inputFluids(Fluid.of('gtceu:purified_biological_vegtable_goop', 2500))
    .circuit(9)
    .itemOutputs('gtmutils:sterile_cleaning_maintenance_hatch')
    .duration(50)
    .EUt(GTValues.VA[GTValues.LV]);

sog.recipes.smelting('draconicevolution:draconium_ingot','gtceu:raw_draconium');
sog.recipes.smelting('draconicevolution:awakened_draconium_ingot','gtceu:raw_awakened_draconium');

sog.recipes.gtceu.electromagnetic_separator('rare_earth')
    .itemInputs('6x gtceu:rare_earth_dust')
    .itemOutputs('gtceu:cadmium_dust', 'gtceu:neodymium_dust', 'gtceu:samarium_dust' ,'gtceu:cerium_dust', 'gtceu:yttrium_dust', 'gtceu:lanthanum_dust', 'gtceu:small_europium_dust')
    .duration(20)
    .EUt(GTValues.VA[GTValues.UHV]);


})
