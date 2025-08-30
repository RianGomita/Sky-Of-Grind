const FusionReactorMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.electric.FusionReactorMachine")


ItemEvents.tooltip(event => {

    event.add('gtceu:uhv_uhv_parallel_hatch', Text.translatable('gtceu.uhv_parallel_hatch.desc'))
    event.add('gtceu:uev_uev_parallel_hatch', Text.translatable('gtceu.uev_parallel_hatch.desc'))
    event.add('gtceu:uiv_uiv_parallel_hatch', Text.translatable('gtceu.uiv_parallel_hatch.desc'))
    event.add('gtceu:uxv_uxv_parallel_hatch', Text.translatable('gtceu.uxv_parallel_hatch.desc'))
    event.add('gtceu:opv_opv_parallel_hatch', Text.translatable('gtceu.opv_parallel_hatch.desc'))

    event.addAdvanced('gtceu:quantum_space_projector', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.parallelizable.tooltip'))
        text.add(2, Text.translatable('gtceu.multiblock.laser_input.description'))
    })
    event.addAdvanced('gtceu:atomic_moonminer', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.parallelizable.tooltip'))
    })
    event.addAdvanced('gtmutils:doge_coin', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.doge.coin.tooltip'))
    })
    event.addAdvanced('gtceu:atomicompressor', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.parallelizable.tooltip'))
    })
    event.addAdvanced('gtceu:bio_lab', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.parallelizable.tooltip'))
    })
    event.addAdvanced('gtceu:large_bacterial_vat', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.parallelizable.tooltip'))
    })
    event.addAdvanced('gtceu:greenhouse', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.parallelizable.tooltip'))
    })
    event.addAdvanced('gtceu:atmospheric_collector', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.parallelizable.tooltip'))
    })
    event.addAdvanced('gtceu:particle_implosion_chamber', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.parallelizable.tooltip'))
    })
    event.addAdvanced('gtceu:robust_extractinator', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.parallelizable.tooltip'))
    })
    event.addAdvanced('gtceu:nebular_plasma_nexus', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.parallelizable.tooltip'))
    })
    event.addAdvanced('gtceu:processing_plant', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.parallelizable.tooltip'))
        text.add(2, Text.translatable('gtceu.multiblock.laser_input.description'))
    })
    event.addAdvanced('gtceu:uev_fusion_reactor', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.machine.fusion_reactor.capacity', Math.trunc(FusionReactorMachine.calculateEnergyStorageFactor(GTValues.UEV, 16) / 1000000)))
        text.add(2, Text.translatable('gtceu.multiblock.uev_fusion_reactor.description'))
    })
    event.addAdvanced('gtceu:atomicforge', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.atomic_forge.description'))
        text.add(2, Text.translatable('gtceu.multiblock.laser_input.description'))
    })
    event.addAdvanced('gtceu:gravitational_implosion_machine', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.needed_laser_input.description'))
    })
    event.addAdvanced('gtceu:tesla_tower', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.laser_output.description'))
    })
    event.addAdvanced('gtceu:xl_plasma_turbine', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.laser_output.description'))
    })
    event.addAdvanced('gtceu:large_synchrotron_switcher', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.needed_laser_input.description'))
        text.add(2, Text.translatable('gtceu.multiblock.lss.description'))
    })
    event.addAdvanced('gtceu:singularity_data_confinement', (item, adv, text) => {
        text.add(2, Text.translatable('gtceu.multiblock.laser_input.description'))
    })

    event.addAdvanced('gtceu:pocket_universe_destroyer', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.multiblock.pocket_universe_destroyer.description'))
        text.add(2, Text.translatable('gtceu.multiblock.needed_laser_input.description'))
    })

})


ClientEvents.lang("en_us", e => {
    e.renameItem('avaritia:crystal_matrix_ingot', 'Resonant Crystal Matrix Ingot')
    e.renameItem('avaritia:neutron_pile', 'Pile of Cosmic Neutrons')
    e.renameItem('avaritia:neutron_nugget', 'Cosmic Neutronium Nugget')
    e.renameItem('avaritia:neutron_ingot', 'Cosmic Neutronium Ingot')
    e.renameItem('avaritia:neutron_gear', 'Cosmic Neutronium Gear')
    e.renameItem('avaritia:neutron', 'Very Cosmic Neutronate Block')
    e.renameItem('ae2additions:super_cell_component_1024k', '1M ME Super Storage Component')
	e.renameItem('ae2additions:super_cell_component_4096k', '4M ME Super Storage Component')
	e.renameItem('ae2additions:super_cell_component_65m', '64M ME Super Storage Component')
	e.renameItem('ae2additions:super_cell_1024k', '1M ME Super Storage Cell')
	e.renameItem('ae2additions:super_cell_4096k', '4M ME Super Storage Cell')
	e.renameItem('ae2additions:super_cell_65m', '64M ME Super Storage Cell')
	e.renameItem('ae2additions:disk_item_1024k', '1M MEGA DISK Drive')
	e.renameItem('ae2additions:disk_item_4096k', '4M MEGA DISK Drive')
	e.renameItem('ae2additions:disk_item_16384k', '16M MEGA DISK Drive')
	e.renameItem('ae2additions:disk_item_65536k', '64M MEGA DISK Drive')
	e.renameItem('ae2additions:disk_fluid_1024k', '1M MEGA Fluid DISK Drive')
	e.renameItem('ae2additions:disk_fluid_4096k', '4M MEGA Fluid DISK Drive')
	e.renameItem('ae2additions:disk_fluid_16384k', '16M MEGA Fluid DISK Drive')
	e.renameItem('ae2additions:disk_fluid_65536k', '64M MEGA Fluid DISK Drive')
	e.renameItem('ae2additions:cell_component_1024', '1M MEGA DISK Storage Component')
	e.renameItem('ae2additions:cell_component_4096', '4M MEGA DISK Storage Component')
	e.renameItem('ae2additions:cell_component_16384', '16M MEGA DISK Storage Component')
	e.renameItem('ae2additions:cell_component_65536', '64M MEGA DISK Storage Component')
    })
