ServerEvents.recipes(event => {
	

	
	event.recipes.gtceu.assembler('uprade_base')
          .itemInputs('16x advanced_ae:quantum_alloy_plate', '8x advanced_ae:quantum_processor', '16x gtceu:fine_americium_wire')
          .inputFluids('gtceu:polybenzimidazole 576')
          .itemOutputs('advanced_ae:quantum_upgrade_base')
          .duration(1500)
          .EUt(GTValues.VA[GTValues.ZPM])
		  
	let upgradecards = (input1, input2, input3, output) => {
		event.recipes.gtceu.assembler(output)
			.itemInputs('advanced_ae:quantum_upgrade_base', '32x gtceu:tritanium_foil', '32x gtceu:fine_americium_wire', input1, input2, input3)
          .inputFluids('gtceu:polybenzimidazole 1152')
          .itemOutputs(output)
          .duration(1500)
          .EUt(GTValues.VA[GTValues.ZPM])
		
	}
	upgradecards('4x gtceu:zpm_electric_piston', '8x gtceu:zpm_electric_motor', '32x ae2:speed_card', 'advanced_ae:walk_speed_card')
	upgradecards('8x gtceu:uv_electric_piston', '64x ae2:speed_card', '4x advanced_ae:walk_speed_card', 'advanced_ae:sprint_speed_card')
	upgradecards('4x gtceu:zpm_electric_piston', '8x gtceu:zpm_electric_motor', '16x advanced_ae:quantum_alloy_stairs', 'advanced_ae:step_assist_card')
	upgradecards('2x gtceu:gravitation_engine_unit', '4x gtceu:zpm_electric_piston','4x gtceu:zpm_electric_motor' , 'advanced_ae:jump_height_card')
	upgradecards('4x gtceu:zpm_field_generator', 'minecraft:lava_bucket','64x gtceu:polyvinyl_chloride_foil' , 'advanced_ae:lava_immunity_card')
	upgradecards('16x gtceu:gravitation_engine_unit', '16x #gtceu:circuits/zpm', 'angelring:energetic_angel_ring', 'advanced_ae:flight_card')
	upgradecards('4x gtceu:uv_electric_pump', 'gtceu:zpm_compressor', 'ad_astra:large_gas_tank', 'advanced_ae:water_breathing_card')
	upgradecards('4x advanced_ae:stock_export_bus_part', 'sophisticatedbackpacks:advanced_feeding_upgrade', 'ae2:wireless_access_point', 'advanced_ae:auto_feeding_card')
	upgradecards('16x advanced_ae:stock_export_bus_part', 'merequester:requester', 'ae2:wireless_access_point', 'advanced_ae:auto_stock_card')
	upgradecards('2x gtceu:zpm_robot_arm', '2x gtceu:zpm_field_generator', 'gtceu:hv_item_magnet', 'advanced_ae:magnet_card')
	upgradecards('16x gtceu:uv_field_generator', 'ae2:portable_item_cell_256k', '16x megacells:mega_energy_cell', 'advanced_ae:hp_buffer_card')
	upgradecards('8x gtceu:uv_field_generator', '8x gtceu:uv_electric_piston', '64x ae2:speed_card', 'advanced_ae:evasion_card')
	upgradecards('16x gtceu:uv_field_generator', Item.of('gtceu:gold_drum', '{Fluid:{Amount:32000,FluidName:"gtceu:potion",Tag:{Potion:"minecraft:strong_regeneration"}}}'), '16x megacells:mega_energy_cell', 'advanced_ae:regeneration_card')
	upgradecards('8x gtceu:uv_robot_arm', '8x gtceu:uv_electric_piston', 'gtceu:nano_saber', 'advanced_ae:strength_card')
	upgradecards('8x gtceu:uv_robot_arm', '8x gtceu:uv_electric_piston', '64x ae2:speed_card', 'advanced_ae:attack_speed_card')
	upgradecards('16x gtceu:zpm_world_accelerator', '32x gtceu:zpm_field_generator', '64x minecraft:beacon', 'advanced_ae:luck_card')
	upgradecards('2x gtceu:uv_robot_arm', '4x gtceu:uv_electric_piston', '4x gtceu:long_tritanium_rod', 'advanced_ae:reach_card')
	upgradecards('8x gtceu:uv_electric_motor', '8x gtceu:naquadah_alloy_rotor', '64x ae2:speed_card', 'advanced_ae:swim_speed_card')
	upgradecards('8x gtceu:zpm_sensor', '8x gtceu:zpm_emitter', 'gtceu:nightvision_goggles', 'advanced_ae:night_vision_card')
	upgradecards('8x gtceu:uv_field_generator', '8x gtceu:gravitation_engine_unit', '16x #gtceu:circuits/uv', 'advanced_ae:flight_drift_card')
	upgradecards('4x gtceu:uv_charger_4x', '32x megacells:mega_energy_cell', 'ae2:wireless_access_point', 'advanced_ae:recharging_card')
	upgradecards('8x gtceu:uv_robot_arm', 'ae2:cell_workbench', 'ae2:wireless_access_point', 'advanced_ae:portable_workbench_card')
	upgradecards('8x gtceu:zpm_sensor', 'merequester:requester', 'ae2:wireless_access_point', 'advanced_ae:pick_craft_card')
	
	})