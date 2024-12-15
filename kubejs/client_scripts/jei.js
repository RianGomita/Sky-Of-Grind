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



})



onEvent('jei.remove.categories', event => {
  event.remove('ae2:inscriber')
  event.remove('ae2:charger')
  event.remove('ae2:transform')
})
