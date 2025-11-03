// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

JEIEvents.hideItems(event => {

  //AdAstra
  event.hide([Item.of('ad_astra:hammer', '{Damage:0}')])
  event.hide(['ad_astra:coal_generator', 'ad_astra:compressor', 'ad_astra:oxygen_distributor', 'ad_astra:fuel_refinery', 'ad_astra:iron_plate', 'ad_astra:steel_ingot', 'ad_astra:steel_plate', 'ad_astra:iron_rod'])
  event.hide(['ad_astra:steel_cable', 'ad_astra:desh_cable', 'ad_astra:wrench', 'ad_astra:desh_fluid_pipe', 'ad_astra:ostrum_fluid_pipe', 'ad_astra:oxygen_sensor'])
  //Furnaces
  event.hide(['ironfurnaces:upgrade_silver', 'ironfurnaces:upgrade_obsidian2', 'ironfurnaces:upgrade_iron2', 'ironfurnaces:upgrade_gold2', 'ironfurnaces:upgrade_silver2', 'ironfurnaces:upgrade_iron', 'ironfurnaces:upgrade_gold', 'ironfurnaces:upgrade_diamond', 'ironfurnaces:upgrade_emerald', 'ironfurnaces:upgrade_obsidian', 'ironfurnaces:upgrade_crystal', 'ironfurnaces:upgrade_netherite', 'ironfurnaces:upgrade_copper', 'ironfurnaces:upgrade_silver'])
  event.hide(['ironfurnaces:rainbow_core', 'ironfurnaces:rainbow_plating', 'ironfurnaces:rainbow_coal', 'ironfurnaces:augment_speed', 'ironfurnaces:augment_generator'])
  //Drawers
  event.hide(['functionalstorage:copper_upgrade', 'functionalstorage:gold_upgrade', 'functionalstorage:diamond_upgrade', 'functionalstorage:netherite_upgrade'])
  event.hide(['functionalstorage:puller_upgrade', 'functionalstorage:collector_upgrade', 'functionalstorage:pusher_upgrade'])
  //deorum
  event.hide([['exdeorum:oak_compressed_sieve', 'exdeorum:birch_compressed_sieve', 'exdeorum:spruce_compressed_sieve', 'exdeorum:jungle_compressed_sieve', 'exdeorum:acacia_compressed_sieve', 'exdeorum:dark_oak_compressed_sieve', 'exdeorum:mangrove_compressed_sieve', 'exdeorum:cherry_compressed_sieve', 'exdeorum:bamboo_compressed_sieve', 'exdeorum:mechanical_sieve', 'exdeorum:mechanical_hammer', 'exdeorum:crimson_compressed_sieve', 'exdeorum:warped_compressed_sieve']])
  event.hide(['exdeorum:oak_sieve', 'exdeorum:spruce_sieve', 'exdeorum:birch_sieve', 'exdeorum:jungle_sieve', 'exdeorum:acacia_sieve', 'exdeorum:dark_oak_sieve', 'exdeorum:mangrove_sieve', 'exdeorum:cherry_sieve', 'exdeorum:bamboo_sieve', 'exdeorum:warped_sieve', 'exdeorum:crimson_sieve'])
  //endertanks
  event.hide(['enderchests:ender_pouch', 'enderchests:ender_bag', 'endertanks:ender_bucket'])
  //ae2
  event.hide([['expatternprovider:ex_inscriber', 'megacells:mega_interface', 'expatternprovider:ex_charger', 'megacells:cable_mega_pattern_provider', 'megacells:mega_pattern_provider', 'megacells:cable_mega_interface']])
  event.hide(['ae2:certus_quartz_crystal', 'ae2:charged_certus_quartz_crystal', 'ae2:certus_quartz_dust', 'ae2:inscriber', 'ae2:charger'])
  event.hide([Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:bronze"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:electrum"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:invar"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:steel"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lapis_lazuli"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:emerald"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:aluminum"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:silver"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:tin"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:diamond"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:platinum"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:copper"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:iron"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lead"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:nickel"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:gold"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:glowstone"}'), 'extendedcrafting:ultimate_singularity'])
  //sources
  event.hide(['watersources:iron_upgrade', 'watersources:gold_upgrade', 'watersources:diamond_upgrade', 'watersources:netherite_upgrade'])
  //solarflux
  event.hide(['solarflux:traversal_upgrade', 'solarflux:block_charging_upgrade', 'solarflux:dispersive_upgrade', 'solarflux:furnace_upgrade', 'solarflux:efficiency_upgrade'])
  event.hide(['solarflux:transfer_rate_upgrade', 'solarflux:capacity_upgrade'])
  //dracevo
  event.hide(['draconicevolution:awakened_crafting_injector', 'draconicevolution:basic_crafting_injector', 'draconicevolution:chaotic_crafting_injector', 'draconicevolution:crafting_core', 'draconicevolution:wyvern_crafting_injector'])
  event.hide(['exdeorum:string_mesh', 'exdeorum:flint_mesh', 'exdeorum:iron_mesh', 'exdeorum:golden_mesh', 'exdeorum:diamond_mesh', 'exdeorum:netherite_mesh', 'exdeorum:iron_ore_chunk', 'exdeorum:copper_ore_chunk', 'exdeorum:gold_ore_chunk'])
  //BM
  event.hide(['bloodmagic:apprenticebloodorb', 'bloodmagic:masterbloodorb'])
  //ae2additions
    event.hide(['ae2additions:1024k_crafting_storage', 'ae2additions:4096k_crafting_storage', 'ae2additions:16384k_crafting_storage', 'ae2additions:65536k_crafting_storage', 'ae2additions:me_wireless_transceiver'])
    event.hide(['ae2additions:disk_item_256k', 'ae2additions:item_storage_cell_1024', 'ae2additions:item_storage_cell_4096','ae2additions:item_storage_cell_16384','ae2additions:item_storage_cell_65536','ae2additions:fluid_storage_cell_1024','ae2additions:fluid_storage_cell_4096', 'ae2additions:fluid_storage_cell_16384'])
  //GTMThings
    event.hide(['gtmthings:ev_16384a_wireless_laser_source_hatch', 'gtmthings:iv_16384a_wireless_laser_source_hatch', 'gtmthings:luv_16384a_wireless_laser_source_hatch', 'gtmthings:zpm_16384a_wireless_laser_source_hatch', 'gtmthings:uv_16384a_wireless_laser_source_hatch', 'gtmthings:uhv_16384a_wireless_laser_source_hatch', 'gtmthings:uev_16384a_wireless_laser_source_hatch', 'gtmthings:uiv_16384a_wireless_laser_source_hatch', 'gtmthings:uxv_16384a_wireless_laser_source_hatch', 'gtmthings:opv_16384a_wireless_laser_source_hatch', 'gtmthings:max_16384a_wireless_laser_source_hatch'])
    event.hide(['gtmthings:ev_16384a_wireless_laser_target_hatch', 'gtmthings:iv_16384a_wireless_laser_target_hatch', 'gtmthings:luv_16384a_wireless_laser_target_hatch', 'gtmthings:zpm_16384a_wireless_laser_target_hatch', 'gtmthings:uv_16384a_wireless_laser_target_hatch', 'gtmthings:uhv_16384a_wireless_laser_target_hatch', 'gtmthings:uev_16384a_wireless_laser_target_hatch', 'gtmthings:uiv_16384a_wireless_laser_target_hatch', 'gtmthings:uxv_16384a_wireless_laser_target_hatch', 'gtmthings:opv_16384a_wireless_laser_target_hatch', 'gtmthings:max_16384a_wireless_laser_target_hatch'])
    event.hide(['gtmthings:ev_256a_wireless_laser_target_hatch', 'gtmthings:ev_256a_wireless_laser_source_hatch', 'gtmthings:ev_1024a_wireless_laser_target_hatch', 'gtmthings:ev_1024a_wireless_laser_source_hatch', 'gtmthings:ev_4096a_wireless_laser_target_hatch', 'gtmthings:ev_4096a_wireless_laser_source_hatch'])
    event.hide(['gtmthings:ev_65536a_wireless_laser_source_hatch', 'gtmthings:iv_65536a_wireless_laser_source_hatch', 'gtmthings:luv_65536a_wireless_laser_source_hatch', 'gtmthings:zpm_65536a_wireless_laser_source_hatch', 'gtmthings:uv_65536a_wireless_laser_source_hatch', 'gtmthings:uhv_65536a_wireless_laser_source_hatch', 'gtmthings:uev_65536a_wireless_laser_source_hatch', 'gtmthings:uiv_65536a_wireless_laser_source_hatch', 'gtmthings:uxv_65536a_wireless_laser_source_hatch', 'gtmthings:opv_65536a_wireless_laser_source_hatch', 'gtmthings:max_65536a_wireless_laser_source_hatch'])
    event.hide(['gtmthings:ev_65536a_wireless_laser_target_hatch', 'gtmthings:iv_65536a_wireless_laser_target_hatch', 'gtmthings:luv_65536a_wireless_laser_target_hatch', 'gtmthings:zpm_65536a_wireless_laser_target_hatch', 'gtmthings:uv_65536a_wireless_laser_target_hatch', 'gtmthings:uhv_65536a_wireless_laser_target_hatch', 'gtmthings:uev_65536a_wireless_laser_target_hatch', 'gtmthings:uiv_65536a_wireless_laser_target_hatch', 'gtmthings:uxv_65536a_wireless_laser_target_hatch', 'gtmthings:opv_65536a_wireless_laser_target_hatch', 'gtmthings:max_65536a_wireless_laser_target_hatch'])
    event.hide(['gtmthings:hv_4a_wireless_energy_input_hatch', 'gtmthings:hv_16a_wireless_energy_input_hatch'])
    event.hide(['gtmthings:hv_4a_wireless_energy_output_hatch', 'gtmthings:hv_16a_wireless_energy_output_hatch'])
    event.hide(['gtmthings:luv_programmablec_hatch', 'gtmthings:zpm_programmablec_hatch', 'gtmthings:uv_programmablec_hatch', 'gtmthings:uhv_programmablec_hatch', 'gtmthings:uev_programmablec_hatch', 'gtmthings:uiv_programmablec_hatch', 'gtmthings:uxv_programmablec_hatch', 'gtmthings:opv_programmablec_hatch', 'gtmthings:max_programmablec_hatch'])
    event.hide(['gtmthings:lv_4a_wireless_energy_input_hatch', 'gtmthings:lv_16a_wireless_energy_input_hatch'])
    event.hide(['gtmthings:lv_4a_wireless_energy_output_hatch', 'gtmthings:lv_16a_wireless_energy_output_hatch'])
    event.hide(['gtmthings:lv_4a_wireless_energy_receive_cover', 'gtmthings:mv_4a_wireless_energy_receive_cover', 'gtmthings:hv_4a_wireless_energy_receive_cover', 'gtmthings:ev_4a_wireless_energy_receive_cover', 'gtmthings:iv_4a_wireless_energy_receive_cover', 'gtmthings:luv_4a_wireless_energy_receive_cover', 'gtmthings:zpm_4a_wireless_energy_receive_cover', 'gtmthings:uv_4a_wireless_energy_receive_cover', 'gtmthings:uhv_4a_wireless_energy_receive_cover', 'gtmthings:uev_4a_wireless_energy_receive_cover', 'gtmthings:uiv_4a_wireless_energy_receive_cover', 'gtmthings:uxv_4a_wireless_energy_receive_cover', 'gtmthings:opv_4a_wireless_energy_receive_cover', ])
    event.hide(['gtmthings:max_2a_wireless_energy_input_hatch', 'gtmthings:max_4a_wireless_energy_input_hatch', 'gtmthings:max_16a_wireless_energy_input_hatch', 'gtmthings:max_256a_wireless_laser_target_hatch', 'gtmthings:max_1024a_wireless_laser_target_hatch', 'gtmthings:max_4096a_wireless_laser_target_hatch'])
    event.hide(['gtmthings:max_2a_wireless_energy_output_hatch', 'gtmthings:max_4a_wireless_energy_output_hatch', 'gtmthings:max_16a_wireless_energy_output_hatch', 'gtmthings:max_256a_wireless_laser_source_hatch', 'gtmthings:max_1024a_wireless_laser_source_hatch', 'gtmthings:max_4096a_wireless_laser_source_hatch'])
    event.hide(['gtmthings:me_export_buffer', 'gtmthings:lv_digital_miner', 'gtmthings:mv_digital_miner', 'gtmthings:hv_digital_miner', 'gtmthings:virtual_item_provider', 'gtmthings:virtual_item_provider_cell', 'gtmthings:advanced_wireless_item_transfer_cover', 'gtmthings:advanced_wireless_fluid_transfer_cover', 'gtmthings:wireless_item_transfer_cover', 'gtmthings:wireless_fluid_transfer_cover'])
    event.hide(['gtmthings:mv_4a_wireless_energy_input_hatch', 'gtmthings:mv_16a_wireless_energy_input_hatch'])
    event.hide(['gtmthings:mv_4a_wireless_energy_output_hatch', 'gtmthings:mv_16a_wireless_energy_output_hatch'])
    event.hide(['gtmthings:opv_2a_wireless_energy_input_hatch', 'gtmthings:opv_4a_wireless_energy_input_hatch', 'gtmthings:opv_16a_wireless_energy_input_hatch', 'gtmthings:opv_256a_wireless_laser_target_hatch', 'gtmthings:opv_1024a_wireless_laser_target_hatch', 'gtmthings:opv_4096a_wireless_laser_target_hatch'])
    event.hide(['gtmthings:opv_2a_wireless_energy_output_hatch', 'gtmthings:opv_4a_wireless_energy_output_hatch', 'gtmthings:opv_16a_wireless_energy_output_hatch', 'gtmthings:opv_256a_wireless_laser_source_hatch', 'gtmthings:opv_1024a_wireless_laser_source_hatch', 'gtmthings:opv_4096a_wireless_laser_source_hatch'])
    event.hide(['gtmthings:opv_wireless_energy_receive_cover'])
    event.hide(['gtmthings:ulv_huge_dual_hatch', 'gtmthings:lv_huge_dual_hatch', 'gtmthings:mv_huge_dual_hatch', 'gtmthings:hv_huge_dual_hatch', 'gtmthings:ev_huge_dual_hatch', 'gtmthings:iv_huge_dual_hatch', 'gtmthings:luv_huge_dual_hatch', 'gtmthings:zpm_huge_dual_hatch', 'gtmthings:uv_huge_dual_hatch', 'gtmthings:uhv_huge_dual_hatch', 'gtmthings:uev_huge_dual_hatch', 'gtmthings:uiv_huge_dual_hatch', 'gtmthings:uxv_huge_dual_hatch', 'gtmthings:opv_huge_dual_hatch', 'gtmthings:max_huge_dual_hatch'])
    event.hide(['gtmthings:ulv_huge_item_export_bus', 'gtmthings:lv_huge_item_export_bus', 'gtmthings:mv_huge_item_export_bus', 'gtmthings:hv_huge_item_export_bus', 'gtmthings:ev_huge_item_export_bus', 'gtmthings:iv_huge_item_export_bus', 'gtmthings:luv_huge_item_export_bus', 'gtmthings:zpm_huge_item_export_bus', 'gtmthings:uv_huge_item_export_bus', 'gtmthings:uhv_huge_item_export_bus', 'gtmthings:uev_huge_item_export_bus', 'gtmthings:uiv_huge_item_export_bus', 'gtmthings:uxv_huge_item_export_bus', 'gtmthings:opv_huge_item_export_bus', 'gtmthings:max_huge_item_export_bus'])
    event.hide(['gtmthings:ulv_huge_item_import_bus', 'gtmthings:lv_huge_item_import_bus', 'gtmthings:mv_huge_item_import_bus', 'gtmthings:hv_huge_item_import_bus', 'gtmthings:ev_huge_item_import_bus', 'gtmthings:iv_huge_item_import_bus', 'gtmthings:luv_huge_item_import_bus', 'gtmthings:zpm_huge_item_import_bus', 'gtmthings:uv_huge_item_import_bus', 'gtmthings:uhv_huge_item_import_bus', 'gtmthings:uev_huge_item_import_bus', 'gtmthings:uiv_huge_item_import_bus', 'gtmthings:uxv_huge_item_import_bus', 'gtmthings:opv_huge_item_import_bus', 'gtmthings:max_huge_item_import_bus'])
    //nerfs
  event.hide(['mae2:eu_multi_p2p_tunnel', 'mae2:eu_p2p_tunnel'])
  event.hide(['crazyae2addons:mob_cell_housing', 'crazyae2addons:mob_storage_cell_1k', 'crazyae2addons:mob_storage_cell_4k', 'crazyae2addons:mob_storage_cell_16k', 'crazyae2addons:mob_storage_cell_64k', 'crazyae2addons:mob_storage_cell_256k', 'crazyae2addons:mob_annihilation_plane', 'crazyae2addons:energy_exporter', 'crazyae2addons:entity_ticker', 'crazyae2addons:crazy_calculator', 'crazyae2addons:xp_shard', 'crazyae2addons:mob_export_bus', 'crazyae2addons:mob_farm_wall', 'crazyae2addons:mob_farm_collector', 'crazyae2addons:mob_farm_input', 'crazyae2addons:mob_farm_damage_module', 'crazyae2addons:spawner_controller_wall', 'expatternprovider:silicon_block'])
})



onEvent('jei.remove.categories', event => {
  event.remove('ae2:inscriber')
  event.remove('ae2:charger')
  event.remove('ae2:transform')
})

