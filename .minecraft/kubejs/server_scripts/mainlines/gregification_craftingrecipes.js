ServerEvents.recipes(sog => {
    // Shaped Crafting Recipes

    sog.remove({ id: "enderio:stick" })
    sog.shaped("4x minecraft:stick", [
        " A ", 
        " A ",
        "   "],
        {
            A: "#minecraft:logs"
        })
    sog.shaped("gtceu:firebricks", [
        "ABA", 
        "BCB",
        "ABA"],
        {
            A: "gtceu:firebrick", 
            B: "gtceu:gypsum_dust",
            C: "gtceu:concrete_bucket"
        })
    sog.shaped("gtceu:lp_steam_alloy_smelter", [
        "ABA", 
        "CDC",
        "AAA"],
        {
            A: "gtceu:bronze_small_fluid_pipe", 
            B: "minecraft:diamond",
            C: "minecraft:furnace",
            D: "gtceu:bronze_brick_casing"
        })
    sog.shaped("watersources:water_source_tier_1", [
        "ABA",
        "C C",
        "ABA"],
        {
            A: "gtceu:firebrick", 
            B: "minecraft:glass",
            C: "minecraft:water_bucket"
        })
    sog.shaped("ironfurnaces:iron_furnace", [
        "AAA", 
        "CBD",
        "AAA"],
        {
            A: "gtceu:iron_plate",
            B: "ironfurnaces:copper_furnace",
            C: "#forge:tools/hammers",
            D: "#forge:tools/wrenches"
        })
    sog.shaped("ironfurnaces:gold_furnace", [
        "ABA",
        "BCB",
        "ABA"],
        {
            A: "minecraft:glass",
            B: "minecraft:gold_block",
            C: "ironfurnaces:iron_furnace"
        })
    sog.shaped("gtceu:lv_mixer", [
        "ABA", 
        "ACA",
        "DED"],
        {
            A: "enderio:soularium_ingot",
            B: "gtceu:tin_rotor",
            C: "gtceu:lv_electric_motor",
            D: "#gtceu:circuits/lv",
            E: "gtceu:lv_machine_hull"
        })
    sog.shaped("gtceu:mv_mixer", [
        "ABA",
        "ACA",
        "DED"],
        {
            A: "enderio:soularium_ingot",
            B: "gtceu:cobalt_brass_gear",
            C: "gtceu:mv_electric_motor",
            D: "#gtceu:circuits/mv",
            E: "gtceu:mv_machine_hull"
        })
    sog.shaped("ae2:controller", [
        "ABA", 
        "BCB",
        "ADA"],
        {
            A: "gtceu:platinum_ingot",
            B: "gtceu:lpic_chip",
            C: "gtceu:hv_machine_hull",
            D: "#gtceu:circuits/hv"
        })
    sog.shaped("bonsaitrees3:bonsaipot", [
        "AAA", 
        "ABA",
        "AAA"],
        {
            A: "gtceu:firebrick",
            B: "minecraft:dirt"
        })

    sog.shaped("ae2:cell_component_1k", [
        "ABA", 
        "BCB",
        "ABA"],
        {
            A: "minecraft:redstone",
            B: "gtceu:certus_quartz_gem",
            C: "#gtceu:circuits/lv"
        })
    sog.shaped("ae2:cell_component_4k", [
        "ABA", 
        "BCB",
        "ABA"],
        {
            A: "minecraft:redstone",
            B: "gtceu:certus_quartz_gem",
            C: "#gtceu:circuits/mv"
        })
    sog.shaped("ae2:cell_component_16k", [
        "ABA", 
        "BCB",
        "ABA"],
        {
            A: "minecraft:redstone",
            B: "gtceu:certus_quartz_gem",
            C: "#gtceu:circuits/hv"
        })
    sog.shaped("ae2:cell_component_64k", [
        "ABA", 
        "BCB",
        "ABA"],
        {
            A: "minecraft:redstone",
            B: "gtceu:certus_quartz_gem",
            C: "#gtceu:circuits/ev"
        })
    sog.shaped("ae2:cell_component_256k", [
        "ABA", 
        "BCB",
        "ABA"],
        {
            A: "minecraft:redstone",
            B: "gtceu:certus_quartz_gem",
            C: "#gtceu:circuits/iv"
        })
    sog.shaped("megacells:cell_component_1m", [
        "ABA",
        "CDC",
        "ACA"],
        {
            A: "ae2:sky_dust",
            B: "megacells:accumulation_processor",
            C: "ae2:cell_component_256k",
            D: "#gtceu:circuits/luv"
        })
    sog.shaped("megacells:cell_component_4m",[
        "ABA",
        "CDC",
        "ACA"],
        {
            A: "#forge:dusts/ender_pearl",
            B: "megacells:accumulation_processor",
            C: "megacells:cell_component_1m",
            D: "#gtceu:circuits/zpm"
        })
    sog.shaped("megacells:cell_component_16m",[
        "ABA",
        "CDC",
        "ACA"],
        {
            A: "#forge:dusts/ender_pearl",
            B: "megacells:accumulation_processor",
            C: "megacells:cell_component_4m",
            D: "#gtceu:circuits/uv"
        })
    sog.shaped("megacells:cell_component_64m",[
        "ABA",
        "CDC",
        "ACA"],
        {
            A: "ae2:matter_ball",
            B: "megacells:accumulation_processor",
            C: "megacells:cell_component_16m",
            D: "#gtceu:circuits/uhv"
        })
    sog.shaped("megacells:cell_component_256m",[
        "ABA",
        "CDC",
        "ACA"],
        {
            A: "ae2:matter_ball",
            B: "megacells:accumulation_processor",
            C: "megacells:cell_component_64m",
            D: "#gtceu:circuits/uev"
        })
    sog.shaped("ae2:drive", [
        "ABA", 
        "C C",
        "ABA"],
        {
            A: "gtceu:platinum_ingot",
            B: "#gtceu:circuits/hv",
            C: "enderio:me_conduit"
        })
    sog.shaped("ad_astra:nasa_workbench", [
        "ABA", 
        "CDC",
        "EFE"],
        {
            A: "gtceu:steel_frame",
            B: "gtceu:platinum_single_wire",
            C: "gtceu:double_steel_plate",
            D: "gtceu:kanthal_coil_block",
            E: "#gtceu:circuits/ev",
            F: "gtceu:steel_block"
        })
    sog.shaped("bigger_ae2:advanced_fluid_cell_housing", [
        "ABA",
        "B B",
        "CCC"],
        {
            A: "#gtceu:circuits/luv",
            B: "gtceu:certus_quartz_plate",
            C: "gtceu:rhodium_plated_palladium_plate"
        })
    sog.shaped("bigger_ae2:quantum_cell_component", [
        "ADA",
        "BCB",
        "ABA"],
        {
            A: "gtceu:resonant_naquadah_plate",
            B: "ae2:cell_component_256k",
            C: "gtceu:duranium_plate",
            D: "#gtceu:circuits/zpm"
        })
    sog.shaped("bigger_ae2:digital_singularity_cell_component", [
        "ADA",
        "BCB",
        "ABA"],
        {
            A: "gtceu:cleaned_californium_plate",
            B: "bigger_ae2:quantum_cell_component",
            C: "gtceu:neutronium_plate",
            D: "#gtceu:circuits/uv"
        })
    sog.shaped("expandedae:artificial_universe_fluid_cell", [
        "ADA",
        "BCB",
        "ABA"],
        {
            A: "gtceu:resonant_essence_plate",
            B: "bigger_ae2:digital_singularity_cell_component",
            C: "avaritia:eternal_singularity",
            D: "#gtceu:circuits/uev"
        })
    sog.shaped("expandedae:artificial_universe_item_cell", [
        "ADA",
        "BCB",
        "ABA"],
        {
            A: "gtceu:cosmic_neutronium_plate",
            B: "bigger_ae2:digital_singularity_cell_component",
            C: "avaritia:eternal_singularity",
            D: "#gtceu:circuits/uev"
        })
    sog.shaped("gtceu:moonminer", [
        "ABA",
        "CDC",
        "BCB"],
        {
            A: "#gtceu:circuits/ev",
            B: "ad_astra:desh_block",
            C: "#gtceu:circuits/ev",
            D: "ad_astra:moon_globe"
        }).id("gtceu:shaped/moonminer")
    sog.shaped("ae2:crafting_unit", [
        "ABA",
        "CDC",
        "ABA"],
        {
            A: "gtceu:titanium_ingot",
            B: "gtceu:cpu_chip",
            C: "enderio:dense_me_conduit",
            D: "#gtceu:circuits/hv"
        }).id("ae2:unit")
    sog.shaped("ae2:pattern_provider", [
        "ABA",
        "C C",
        "ABA"],
        {
            A: "gtceu:titanium_ingot",
            B: "gtceu:cpu_chip",
            C: "enderio:dense_me_conduit"
        }).id("ae2:patternprov")
    sog.shaped("ae2:molecular_assembler", [
        "ABA",
        "C C",
        "ABA"],
        {
            A: "gtceu:titanium_ingot",
            B: "gtceu:cpu_chip",
            C: "solarflux:photovoltaic_cell_1"
        }).id("ae2:molecularasse")
    sog.shaped("gtceu:starextractor", [
        "ABA",
        "CDC",
        "BCB"],
        {
            A: "#gtceu:circuits/iv",
            B: "gtceu:polybenzimidazole_plate",
            C: "#gtceu:circuits/iv",
            D: "gtceu:iridium_frame"
        }).id("gtceu:shaped/starextractor")
    sog.shaped("bloodmagic:altar", [
        "A A",
        "ABA",
        "CCC"],
        {
            A: "gtceu:indium_gallium_phosphide_ingot",
            B: "#gtceu:circuits/luv",
            C: "gtceu:dense_rhodium_plated_palladium_plate"
        }
        ).id("bm:altar")
    sog.shaped("angelring:angel_ring", [
        "A A",
        "ABA",
        "CCC"],
        {
            A: "gtceu:manganese_phosphide_ingot",
            B: "gtceu:lv_field_generator",
            C: "gtceu:double_platinum_plate"
        }).id("ag:angel_ring")
    sog.shaped("gtceu:altart2", [
        "ABA",
        "CDC",
        "CEC"],
        {
            A: "gtceu:dense_rhodium_plated_palladium_plate",
            B: "gtceu:hsss_frame",
            C: "#gtceu:circuits/luv",
            D: "bloodmagic:altar",
            E: "megacells:bulk_cell_component"
        }).id("sog:altart2")
    sog.shaped("gtceu:mega_blast_furnace", [
        "ABA",
        "CDC",
        "EBE"],
        {
            A: "gtceu:dense_triplatirium_235_plate",
            B: "gtceu:atomic_casing",
            C: "gtceu:zpm_field_generator",
            D: "gtceu:electric_blast_furnace",
            E: "gtceu:naquadah_alloy_buzz_saw_blade"
        })
    sog.shaped("gtceu:mega_vacuum_freezer", [
        "ABA",
        "CDC",
        "EBE"],
        {
            A: "gtceu:dense_triplatirium_235_plate",
            B: "gtceu:atomic_casing",
            C: "gtceu:zpm_field_generator",
            D: "gtceu:vacuum_freezer",
            E: "gtceu:naquadah_alloy_buzz_saw_blade"
        })
    sog.shaped("gtceu:atomicforge", [
        "ABA",
        "CDC",
        "CEC"],
        {
            A: "gtceu:dense_atomic_alloy_plate",
            B: "gtceu:mega_blast_furnace",
            C: "gtceu:atomic_alloy_foil",
            D: "#gtceu:circuits/uv",
            E: "gtceu:zpm_fusion_reactor"
        }).id("sog:atomicforge")
    sog.shaped("gtceu:reinforced_atomicforge", [
        "ABA",
        "CDC",
        "CEC"],
        {
            A: "gtceu:dense_zylon_plate",
            B: "gtceu:atomicforge",
            C: "gtceu:infinity_screw",
            D: "#gtceu:circuits/uxv",
            E: "gtceu:uev_fusion_reactor"
        }).id("sog:reinforced_atomicforge")
    sog.shaped("gtceu:starcondenser", [
        "ABA",
        "BDB",
        "CCC"],
        {
            A: "#gtceu:circuits/uv",
            B: "gtceu:atomic_alloy_frame",
            C: "gtceu:atomic_casing",
            D: "kubejs:condensed_star_matter"
        }).id("sog:star_condenser")
    sog.shaped("gtceu:blacklight", [
        "ABA",
        "DCD",
        "ABA"],
        {
            A: "gtceu:tungsten_carbide_gear",
            B: "gtceu:chemical_purple_dye",
            C: "gtceu:purple_glass_lens",
            D: "gtceu:triplatirium_235_foil"
        }).id("gt:blacklight")
    sog.shaped("avaritia:diamond_lattice", [
        " BA",
        "BBB",
        "AB "],
        {
            A: "gtceu:quantum_star",
            B: "gtceu:diamond_plate"
        }).id("sog:lattice")
    sog.shaped("draconicevolution:particle_generator", [
        "ABA",
        "BCB",
        "ABA"],
        {
            A: "gtceu:neutronium_plate",
            B: "kubejs:fallen_singularity",
            C: "draconicevolution:draconium_core"
        }).id("de:particlegen")
    sog.shaped("draconicevolution:energy_core_stabilizer", [
        "ABA",
        "BCB",
        "ABA"],
        {
            A: "gtceu:dense_crystal_matrix_plate",
            B: "kubejs:quantum_energy_capsule",
            C: "draconicevolution:particle_generator"
        }).id("de:energycore")
    sog.shaped("gtceu:dimensional_matter_extractor", [
        "ADA",
        "BCB",
        "ABA"],
        {
            A: "gtceu:atomic_casing",
            B: "draconicevolution:energy_core_stabilizer",
            C: "gtceu:uhv_machine_hull",
            D: "kubejs:gravitational_containment_cell"
        }).id("sog:dimensionalextractor")
    sog.shaped("kubejs:neutronate_enriched_atomic_casing", [
        " B ",
        "BAB",
        " B "],
        {
            A: "gtceu:atomic_casing",
            B: "gtceu:ruthenium_trinium_americium_neutronate_hex_wire",
        }).id("sog:neutronate")
    sog.shaped("2x minecraft:paper", [
        "BBB",
        "BAB",
        "BBB"],
        {
            A: Item.of("minecraft:water_bucket"),
            B: "gtceu:wood_dust",
        }).replaceIngredient({item: Item.of("minecraft:water_bucket")}, "minecraft:bucket")
    sog.shaped("gtceu:mv_electric_extractinator", [
        "ABC",
        "DEF",
        "BGA"],
        {
            A: "gtceu:mv_robot_arm",
            B: "gtceu:transistor",
            C: "gtceu:vanadium_steel_gear",
            D: "gtceu:mv_conveyor_module",
            E: "gtceu:mv_machine_hull",
            F: "gtceu:mv_sensor",
            G: "extractinator:extractinator",
        })
    sog.shaped("gtceu:hv_electric_extractinator", [
        "ABC",
        "DEF",
        "GHA"],
        {
            A: "gtceu:hv_robot_arm",
            B: "ae2:engineering_processor",
            C: "gtceu:double_platinum_plate",
            D: "gtceu:hv_conveyor_module",
            E: "gtceu:hv_machine_hull",
            F: "gtceu:hv_sensor",
            G: "gtceu:lv_field_generator",
            H: "extractinator:extractinator",
        })
    sog.shaped("gtceu:ev_electric_extractinator", [
        "ABC",
        "DEF",
        "GHA"],
        {
            A: "gtceu:ev_robot_arm",
            B: "gtceu:ev_voltage_coil",
            C: "gtceu:ultimet_gear",
            D: "gtceu:ev_conveyor_module",
            E: "gtceu:ev_machine_hull",
            F: "#gtceu:circuits/ev",
            G: "gtceu:mpic_chip",
            H: "extractinator:extractinator",
        })
    sog.shaped("gtceu:iv_electric_extractinator", [
        "ABC",
        "DEF",
        "GHA"],
        {
            A: "gtceu:iv_robot_arm",
            B: "gtceu:iv_voltage_coil",
            C: "gtceu:osmiridium_gear",
            D: "gtceu:iv_conveyor_module",
            E: "gtceu:iv_machine_hull",
            F: "gtceu:iv_sensor",
            G: "minecraft:nether_star",
            H: "extractinator:extractinator",
        })
    sog.shaped("gtceu:luv_electric_extractinator", [
        "ABC",
        "DEF",
        "GHA"],
        {
            A: "gtceu:luv_robot_arm",
            B: "gtceu:luv_voltage_coil",
            C: "gtceu:osmiridium_gear",
            D: "gtceu:luv_conveyor_module",
            E: "gtceu:luv_machine_hull",
            F: "gtceu:luv_sensor",
            G: "gtceu:quantum_star",
            H: "extractinator:extractinator",
        })
    sog.shaped("gtceu:zpm_electric_extractinator", [
        "ABC",
        "DEF",
        "GHA"],
        {
            A: "gtceu:zpm_robot_arm",
            B: "gtceu:zpm_voltage_coil",
            C: "gtceu:naquadah_alloy_gear",
            D: "gtceu:zpm_conveyor_module",
            E: "gtceu:zpm_machine_hull",
            F: "gtceu:zpm_sensor",
            G: "gtceu:quantum_star",
            H: "extractinator:extractinator",
        })
    sog.shaped("gtceu:uv_electric_extractinator", [
        "ABC",
        "DEF",
        "GHA"],
        {
            A: "gtceu:uv_robot_arm",
            B: "gtceu:uv_voltage_coil",
            C: "gtceu:small_darmstadtium_gear",
            D: "gtceu:uv_conveyor_module",
            E: "gtceu:uv_machine_hull",
            F: "gtceu:uv_sensor",
            G: "gtceu:quantum_star",
            H: "extractinator:extractinator",
        })
    sog.shaped("gtceu:uhv_electric_extractinator", [
        "ABC",
        "DEF",
        "GHA"],
        {
            A: "gtceu:uhv_robot_arm",
            B: "kubejs:uhv_voltage_coil",
            C: "gtceu:neutronium_gear",
            D: "gtceu:uhv_conveyor_module",
            E: "gtceu:uhv_machine_hull",
            F: "gtceu:uhv_sensor",
            G: "gtceu:gravi_star",
            H: "extractinator:extractinator",
        })
    sog.shaped("gtceu:uev_electric_extractinator", [
        "ABC",
        "DEF",
        "GHA"],
        {
            A: "gtceu:uev_robot_arm",
            B: "kubejs:uev_voltage_coil",
            C: "gtceu:resonant_essence_gear",
            D: "gtceu:uev_conveyor_module",
            E: "gtceu:uev_machine_hull",
            F: "gtceu:uev_sensor",
            G: "gtceu:gravi_star",
            H: "extractinator:extractinator",
        })
    sog.shaped("gtceu:uiv_electric_extractinator", [
        "ABC",
        "DEF",
        "GHA"],
        {
            A: "gtceu:uiv_robot_arm",
            B: "kubejs:uiv_voltage_coil",
            C: "gtceu:draconium_gear",
            D: "gtceu:uiv_conveyor_module",
            E: "gtceu:uiv_machine_hull",
            F: "gtceu:uiv_sensor",
            G: "gtceu:gravi_star",
            H: "extractinator:extractinator",
        })
    sog.shaped("gtceu:uxv_electric_extractinator", [
        "ABC",
        "DEF",
        "GHA"],
        {
            A: "gtceu:uxv_robot_arm",
            B: "kubejs:uxv_voltage_coil",
            C: "gtceu:awakened_draconium_gear",
            D: "gtceu:uxv_conveyor_module",
            E: "gtceu:uxv_machine_hull",
            F: "gtceu:uxv_sensor",
            G: "gtceu:gravi_star",
            H: "extractinator:extractinator",
        })
    sog.shaped("gtceu:robust_extractinator", [
        "ABC",
        "DEF",
        "GHA"],
        {
            A: "gtceu:iv_robot_arm",
            B: "gtceu:iv_voltage_coil",
            C: "gtceu:osmiridium_gear",
            D: "gtceu:iv_conveyor_module",
            E: "gtceu:iv_electric_extractinator",
            F: "gtceu:iv_sensor",
            G: "gtceu:quantum_star",
            H: "#gtceu:circuits/luv",
        })
    sog.shaped("gtceu:atomicompressor", [
        "ABA",
        "CDC",
        "AEA"],
        {
            A: "kubejs:exotic_matter",
            B: "kubejs:stabilized_collapsed_singularity",
            C: "kubejs:stable_matter",
            D: "gtceu:implosion_compressor",
            E: "draconicevolution:energy_core_stabilizer"
        })
    sog.shaped("kubejs:quantum_resonant_core", [
        "ABA",
        "BCB",
        "ABA"],
        {
            A: "gtceu:uv_field_generator",
            B: "kubejs:stabilized_collapsed_singularity",
            C: "kubejs:atomically_compressed_black_hole"
        })
    sog.shaped("gtceu:supercriticalvibrationsifter", [
        "ABA",
        "EDC",
        "EFG"],
        {
            A: "gtceu:uv_field_generator",
            B: "kubejs:quantum_resonant_core",
            C: "gtceu:uv_emitter",
            D: "gtceu:uhv_machine_hull",
            E: "gtceu:uv_robot_arm",
            F: "kubejs:gravitational_containment_cell",
            G: "gtceu:uhv_ultimate_battery"
        })
    sog.shaped("enderio:ender_crystal", [
        " A ",
        "ABA",
        " A "],
        {
            A: "minecraft:ender_pearl",
            B: "enderio:vibrant_crystal",
        })
    sog.shaped("minecraft:netherite_upgrade_smithing_template", [
        "ABA",
        "ACA",
        "AAA"],
        {
            A: "minecraft:diamond",
            B: "minecraft:netherite_scrap",
            C: "minecraft:netherrack"
        })
    sog.shaped("ad_astra:rocket_fin", [
        " A ",
        "ABA",
        "ABA"],
        {
            A: "gtceu:dense_stainless_steel_plate",
            B: "gtceu:smd_inductor"
        })
    sog.shaped("ad_astra:rocket_nose_cone", [
        " A ",
        "BCB",
        "BDB"],
        {
            A: "minecraft:lightning_rod",
            B: "gtceu:dense_magnetic_steel_plate",
            C: "gtceu:lv_field_generator",
            D: "gtceu:steel_block"
        })
    sog.shaped("ad_astra:fan", [
        " A ",
        "ABA",
        " A "],
        {
            A: "gtceu:long_iron_rod",
            B: "gtceu:steel_rotor"
        })
    sog.shaped("ad_astra:engine_frame", [
        "ABB",
        "ACA",
        "BBA"],
        {
            A: "gtceu:long_iron_rod",
            B: "gtceu:dense_stainless_steel_plate",
            C: "gtceu:lv_field_generator"
        })
    sog.shaped("ad_astra:oxygen_gear", [
        "A A",
        "BCB",
        "DED"],
        {
            A: "ad_astra:oxygen_tank",
            B: "gtceu:dense_stainless_steel_plate",
            C: "gtceu:long_iron_rod",
            D: "gtceu:blue_steel_buzz_saw_blade",
            E: "gtceu:blue_steel_frame"
        })
    sog.shaped("ad_astra:gas_tank", [
        "ABC",
        "ADE",
        "AFC"],
        {
            A: "gtceu:dense_stainless_steel_plate",
            B: "gtceu:long_iron_rod",
            C: "gtceu:smd_transistor",
            D: "gtceu:mask_filter",
            E: "gtceu:stainless_steel_drum",
            F: "gtceu:hv_battery_hull"
        })
    sog.shaped("gtceu:atomic_moonminer", [
        "ABA",
        "CDC",
        "ABA"],
        {
            A: "gtceu:atomic_casing",
            B: "gtceu:tritanium_coil_block",
            C: "gtceu:wetware_processor_mainframe",
            D: "gtceu:moonminer"
        })
    sog.shaped("kubejs:drilling_projector_module", [
        "ABA",
        "BCB",
        "ABA"],
        {
            A: "kubejs:gravitational_fluctuation_module",
            B: "gtceu:uv_parallel_hatch",
            C: "gtceu:neutronium_drill_head"
        })
    sog.shaped("kubejs:pumping_projector_module", [
        "ABA",
        "BCB",
        "ABA"],
        {
            A: "kubejs:gravitational_fluctuation_module",
            B: "gtceu:uv_parallel_hatch",
            C: "gtceu:uhv_electric_pump"
        })
    sog.shaped("kubejs:fusion_projector_module", [
        "ABD",
        "BCB",
        "DBA"],
        {
            A: "kubejs:gravitational_fluctuation_module",
            B: "avaritia:eternal_singularity",
            C: "gtceu:uv_fusion_reactor",
            D: "gtceu:fine_cosmic_neutronium_wire"
        })
    sog.shaped("kubejs:cosmic_projector_module", [
        "ABD",
        "BCB",
        "DBA"],
        {
            A: "kubejs:gravitational_fluctuation_module",
            B: "avaritia:eternal_singularity",
            C: "gtceu:uhv_quantum_tank",
            D: "kubejs:gravitational_containment_cell"
        })
    sog.shaped("kubejs:end_miner_module", [
        "ABA",
        "BCB",
        "ABA"],
        {
            A: "minecraft:dragon_egg",
            B: "minecraft:dragon_breath",
            C: "draconicevolution:dragon_heart",
        })
    sog.shaped("gtceu:bio_lab", [
        "ABA",
        "ACA",
        "ADA"],
        {
            A: "gtceu:plascrete",
            B: "gtceu:stem_cells",
            C: "gtceu:uhv_hermetic_casing",
            D: "#gtceu:circuits/uev"
        })
    sog.shaped("gtceu:large_bacterial_bat", [
        "ABA",
        "AZA",
        "AFA"],
        {
            A: "gtceu:plascrete",
            B: "gtceu:stem_cells",
            Z: "gtceu:petri_dish",
            F: "#gtceu:circuits/uv"
        })
    sog.shaped("kubejs:component_tile_casing", [
        "AAA",
        "ABA",
        "AAA"],
        {
            A: "gtceu:cosmic_titanium_plate",
            B: "gtceu:tritanium_frame"
        })
    sog.shaped("kubejs:large_precision_casing", [
        "AAA",
        "ABA",
        "AAA"],
        {
            A: "gtceu:cosmic_tungsten_plate",
            B: "gtceu:hypoxylon_frame"
        })
    sog.shaped("kubejs:reinforced_computation_casing", [
        "AAA",
        "ABA",
        "AAA"],
        {
            A: "gtceu:cosmic_iridium_plate",
            B: "gtceu:computer_casing"
        })
    sog.shaped("2x kubejs:highly_reinforced_radioactive_casing", [
        "AAA",
        "ABA",
        "AAA"],
        {
            A: "gtceu:stabilized_iridium_plate",
            B: "kubejs:californite_heavy_plating"
        })
    sog.shaped("2x kubejs:stellar_powered_casing", [
        "AAA",
        "CBC",
        "AAA"],
        {
            A: "gtceu:dense_antimatter_plate",
            B: "kubejs:highly_reinforced_radioactive_casing",
            C: "kubejs:draconium_heavy_plating"
        })
    sog.shaped("gtceu:atmospheric_collector", [
        "ABA",
        "DCD",
        "ABA"],
        {
            A: "gtceu:luv_electric_pump",
            B: "gtceu:laminated_glass",
            C: "gtceu:luv_machine_hull",
            D: "#gtceu:circuits/luv"
        })
    sog.shaped("gtceu:particle_implosion_chamber", [
        "ABA",
        "DCD",
        "ABA"],
        {
            A: "gtceu:uhv_robot_arm",
            B: "gtceu:atomic_casing",
            C: "gtceu:uhv_machine_hull",
            D: "#gtceu:circuits/uhv"
        })
    sog.shaped("ae2:energy_acceptor", [
        "ABA",
        "BCB",
        "ABA"],
        {
            A: "gtceu:platinum_ingot",
            B: "gtceu:lpic_chip",
            C: "gtceu:hv_machine_hull",
        })
    sog.shaped("ae2:interface", [
        "ABA",
        "BDC",
        "ACA"],
        {
            A: "gtceu:stainless_steel_ingot",
            B: "ae2:annihilation_core",
            C: "ae2:formation_core",
            D: "enderio:me_conduit"
        })
    sog.shaped("ae2:import_bus", [
        "ABA",
        "BCB",
        "   "],
        {
            A: "gtceu:stainless_steel_ingot",
            B: "ae2:formation_core",
            C: "minecraft:sticky_piston",
        })
    sog.shaped("ae2:export_bus", [
        "ABA",
        "BCB",
        "   "],
        {
            A: "gtceu:stainless_steel_ingot",
            B: "ae2:annihilation_core",
            C: "minecraft:sticky_piston",
        })
    sog.shaped("avaritia:extreme_crafting_table", [
        "BB ",
        "AA ",
        "   "],
        {
        A: "avaritia:crystal_matrix_ingot",
        B: "minecraft:flint",
        })
    sog.shaped("gtceu:ulv_input_hatch", [
        " A ", 
        "CBC",
        " C "],
        {
            A: "#forge:glass", 
            B: "gtceu:ulv_machine_hull",
            C: "gtceu:sticky_resin"
        })
    sog.shaped("gtceu:uev_machine_hull", [
        "ABA", 
        "CDC",
        "   "],
        {
            A: "gtceu:peek_plate", 
            B: "gtceu:resonant_essence_plate",
            C: "gtceu:draconium_single_cable",
            D: "gtceu:uev_machine_casing"
        })
    sog.shaped("gtceu:uiv_machine_hull", [
        "ABA", 
        "CDC",
        "   "],
        {
            A: "gtceu:hypoxylon_plate", 
            B: "gtceu:draconium_plate",
            C: "gtceu:awakened_draconium_single_cable",
            D: "gtceu:uiv_machine_casing"
        })
    sog.shaped("gtceu:uxv_machine_hull", [
        "ABA", 
        "CDC",
        "   "],
        {
            A: "gtceu:kevlar_plate", 
            B: "gtceu:chaos_plate",
            C: "gtceu:chaos_single_wire",
            D: "gtceu:uxv_machine_casing"
        })
    sog.shaped("gtmutils:infinite_spray_can",[
        "ABC", 
        "DEF",
        "GHI"],
        {
            A: "gtceu:white_dye_spray_can", 
            B: "gtceu:orange_dye_spray_can", 
            C: "gtceu:magenta_dye_spray_can", 
            D: "gtceu:light_blue_dye_spray_can", 
            E: "#gtceu:circuits/hv",
            F: "gtceu:yellow_dye_spray_can", 
            G: "gtceu:lime_dye_spray_can", 
            H: "gtceu:pink_dye_spray_can", 
            I: "gtceu:gray_dye_spray_can"
        })


    // Shapeless Crafting Recipes

    sog.shapeless("2x gtceu:rubber_planks", [
            "gtceu:rubber_log"
        ])
    sog.shapeless("minecraft:egg", [
        "minecraft:grass",
        "hostilenetworks:overworld_prediction"
        ])
    sog.shapeless(Item.of("gtmutils:neutronium_credit", 1), [
        "8x gtmutils:naquadah_credit"
        ])
    sog.shapeless(Item.of("gtmutils:naquadah_credit", 1), [
        "8x gtmutils:osmium_credit"
        ])

    sog.shapeless(Item.of("gtmutils:osmium_credit", 1), [
        "8x gtmutils:platinum_credit"
        ])
    sog.shapeless(Item.of("gtmutils:platinum_credit", 1), [
        "8x gtmutils:gold_credit"
        ])
    sog.shapeless(Item.of("gtmutils:gold_credit", 1), [
        "8x gtmutils:silver_credit"
        ])
    sog.shapeless(Item.of("gtmutils:silver_credit", 1), [
        "8x gtmutils:cupronickel_credit"
        ])
    sog.shapeless(Item.of("gtmutils:copper_credit", 8), [
        "1x gtmutils:cupronickel_credit"
        ])
    sog.shapeless("minecraft:bamboo", [
        "minecraft:oak_sapling",
        "minecraft:wheat_seeds",
        "hostilenetworks:overworld_prediction"
        ])
    sog.shapeless("minecraft:beetroot_seeds", [
        "minecraft:wheat_seeds",
        "2x hostilenetworks:overworld_prediction"
        ])
    sog.shapeless("minecraft:pumpkin_seeds", [
        "minecraft:beetroot_seeds",
        "minecraft:wheat_seeds",
        "hostilenetworks:overworld_prediction"
        ])
    sog.shapeless("gtmthings:wireless_energy_terminal", [
        "gtmthings:advanced_terminal",
        "gtceu:energy_crystal"
        ])
    sog.shapeless("ae2:interface", [
        "ae2:cable_interface"
        ])
    sog.shapeless("ae2:pattern_provider", [
        "ae2:cable_pattern_provider"
        ])
})