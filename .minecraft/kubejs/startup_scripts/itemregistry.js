Platform.mods.kubejs.name = 'GregTech';
Platform.mods.bloodmagic.name = 'GregTechBM';

StartupEvents.registry('item', sog => {
    //Universal circuits
        const tiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv"]
        tiers.forEach((universal_circuit) => {
            sog.create(universal_circuit + "_universal_circuit")
                .tag("gtceu:circuits/" + universal_circuit)
                .tag("gtceu:circuits/universal")
                .displayName(universal_circuit.toUpperCase() + " Universal Circuit")
                .tooltip("§7A Universal Circuit")
                .textureJson({ layer0: `kubejs:item/universal_circuit/${universal_circuit}_universal_circuit` })
        })

    // Circuit stuff
sog.create('star_extruder_mold').maxStackSize(64).glow(true).displayName('Extruder Mold (Star)')
sog.create('resonant_processor').maxStackSize(64).displayName('Resonant Processor').tooltip('§2ZPM-Tier Circuit')
sog.create('resonant_processor_assembly').maxStackSize(64).displayName('Resonant Processor Assembly').tooltip('§2UV-Tier Circuit')
sog.create('resonant_processor_computer').maxStackSize(64).displayName('Resonant Processor Computer').tooltip('§2UHV-Tier Circuit')
sog.create('resonant_processor_mainframe').maxStackSize(64).displayName('Resonant Processor Mainframe').tooltip('§2UEV-Tier Circuit')
sog.create('dragon_processor').maxStackSize(64).displayName('Dragon Processor').tooltip('§5UV-Tier Circuit')
sog.create('dragon_processor_assembly').maxStackSize(64).displayName('Dragon Processor Assembly').tooltip('§5UHV-Tier Circuit')
sog.create('dragon_processor_computer').maxStackSize(64).displayName('Dragon Processor Computer').tooltip('§5UEV-Tier Circuit')
sog.create('dragon_processor_mainframe').maxStackSize(64).displayName('Dragon Processor Mainframe').tooltip('§5UIV-Tier Circuit')
sog.create('cosmic_processor').maxStackSize(64).displayName('Cosmic Processor').tooltip('§0UHV-Tier Circuit')
sog.create('cosmic_processor_assembly').maxStackSize(64).displayName('Cosmic Processor Assembly').tooltip('§0UEV-Tier Circuit')
sog.create('cosmic_processor_computer').maxStackSize(64).displayName('Cosmic Processor Computer').tooltip('§0UIV-Tier Circuit')
sog.create('cosmic_processor_mainframe').maxStackSize(64).displayName('Cosmic Processor Mainframe').tooltip('§0UXV-Tier Circuit')
sog.create('space_time_processor').maxStackSize(64).displayName('Space Time Processor').tooltip('§bUEV-Tier Circuit')
sog.create('space_time_processor_assembly').maxStackSize(64).displayName('Space Time Processor Assembly').tooltip('§bUIV-Tier Circuit')
sog.create('space_time_processor_computer').maxStackSize(64).displayName('Space Time Processor Computer').tooltip('§bUXV-Tier Circuit')
sog.create('space_time_processor_mainframe').maxStackSize(64).displayName('Space Time Processor Mainframe').tooltip('§bOPV-Tier Circuit')
sog.create('dimensional_circuit_board').maxStackSize(64).displayName('Dimensional Circuit Board').rarity('epic')
sog.create('dimensional_printed_circuit_board').maxStackSize(64).displayName('Dimensional Printed Circuit Board').rarity('epic')
sog.create('dimensional_processor').maxStackSize(64).displayName('Dimensional Processor').tooltip('§f§lUIV-Tier Circuit').rarity('epic')
sog.create('dimensional_processor_assembly').maxStackSize(64).displayName('Dimensional Processor Assembly').tooltip('§f§lUXV-Tier Circuit').rarity('epic')
sog.create('dimensional_processor_computer').maxStackSize(64).displayName('Dimensional Processor Computer').tooltip('§f§lOPV-Tier Circuit').rarity('epic')
sog.create('dimensional_processor_mainframe').maxStackSize(64).displayName('Dimensional Processor Mainframe').tooltip('§f§lMAX-Tier Circuit').rarity('epic')

    // Condensed / Atomic Stuff
sog.create('condensed_star_matter').maxStackSize(64).displayName('Condensed Star Matter').tooltip('Matter of gods')
sog.create('quantum_energy_capsule').maxStackSize(64).displayName('Quantum Energy Capsule').tooltip('Not safe for work')
sog.create('gravitational_containment_cell').maxStackSize(64).displayName('Gravitational Containment Cell')
sog.create('gravitational_fluctuation_module').maxStackSize(64).displayName('Gravitational Fluctuation Module')
sog.create('exotic_matter').maxStackSize(64).displayName('§5Exotic Matter')
sog.create('stable_matter').maxStackSize(64).displayName('Stable Matter')
sog.create('atomically_compressed_black_hole').maxStackSize(64).displayName('Atomically-Compressed Black Hole').tooltip('§0Hold with caution. Maintains an Event Horizon')
sog.create('quantum_resonant_core').maxStackSize(64).displayName('Quantum Resonant Core')
    //Singularities Stuff 
sog.create('quantum_anomaly').maxStackSize(64).displayName('Quantum Anomaly').glow(true).tooltip('Not safe for work')
sog.create('energized_quantum_anomaly').maxStackSize(64).displayName('Energized Anomaly').glow(true)
sog.create('stabilized_collapsed_singularity').maxStackSize(64).displayName('Stabilized Collapsed Singularity')    
sog.create('fallen_singularity').maxStackSize(64).displayName('Fallen Singularity').tooltip('§cNot-Stabilized Collapsed Singularity')
//voltage coils
sog.create('uhv_voltage_coil').maxStackSize(64).displayName('Ultra High Voltage Coil')
sog.create('uev_voltage_coil').maxStackSize(64).displayName('Ultra Excessive Voltage Coil')
sog.create('uiv_voltage_coil').maxStackSize(64).displayName('Ultra Immense Voltage Coil')
sog.create('uxv_voltage_coil').maxStackSize(64).displayName('Ultra Extreme Voltage Coil')
sog.create('opv_voltage_coil').maxStackSize(64).displayName('Overpowered Voltage Coil')
sog.create('max_voltage_coil').maxStackSize(64).displayName('Max Voltage Coil').rarity('epic')
    //uevstuff
sog.create('rad_primary_resonant_particles').maxStackSize(16).displayName('Rad-Primary Resonant Particles')
sog.create('primal_resonant_core').maxStackSize(64).displayName('Primal Resonant Core')
sog.create('antimatter_boule').maxStackSize(64).displayName('Antimatter-Doped Monocrystalline Silicon Boule')
sog.create('highly_resonative_soc').maxStackSize(64).displayName('Highly-Resonative Soc')
sog.create('highly_resonative_circuit_board').maxStackSize(64).displayName('Highly-Resonative Circuit Board')
sog.create('highly_resonative_printed_circuit_board').maxStackSize(64).displayName('Highly-Resonative Printed Circuit Board')
//uiv stuff
sog.create('dragon_infused_neuro_processing_unit').maxStackSize(64).displayName('Dragon-infused Neuro Processing Board')
sog.create('draconic_circuit_board').maxStackSize(64).displayName('Draconic Circuit Board')
sog.create('draconic_printed_circuit_board').maxStackSize(64).displayName('Draconic Printed Circuit Board')
sog.create('antimatter_wafer').maxStackSize(64).displayName('Antimatter Wafer')
sog.create('highly_draconized_engraved_lapotron_crystal_chip').maxStackSize(64).displayName('Highly-Draconized Engraved Lapotron Chip')
sog.create('extremely_advanced_soc_wafer').maxStackSize(64).displayName('EaSoC Wafer')
sog.create('extremely_advanced_soc').maxStackSize(64).displayName('EaSoC')
    //extras
sog.create('end_miner_module').maxStackSize(1).displayName('End Miner Module')
sog.create('quantum_data_module').maxStackSize(1).displayName('Quantum Data Module').texture('kubejs:item/misc/quantum_data_module')
    //tube
sog.create('chlorine_tube').maxStackSize(1).displayName('Chlorine Tube').texture('kubejs:item/tubes/chlorine_tube')
sog.create('mycena_hypsizyga_dna').maxStackSize(1).displayName('Mycena Hypsizyga DNA Sample').texture('kubejs:item/tubes/dna_sample_mychyps')
        //heavy plating
sog.create('cosmic_neutronium_heavy_plating').displayName('Cosmic Neutronium Heavy Plating').texture('kubejs:item/heavy_plating/cosmic_neutronium_heavy_plating')
sog.create('awakened_draconium_heavy_plating').displayName('Awakened Draconium Heavy Plating').texture('kubejs:item/heavy_plating/awakened_draconium_heavy_plating')
sog.create('draconium_heavy_plating').displayName('Draconium Heavy Plating').texture('kubejs:item/heavy_plating/draconium_heavy_plating')
sog.create('neutronium_heavy_plating').displayName('Neutronium Heavy Plating').texture('kubejs:item/heavy_plating/neutronium_heavy_plating')
sog.create('infinity_heavy_plating').displayName('Infinity Heavy Plating').texture('kubejs:item/heavy_plating/infinity_heavy_plating')
sog.create('chaos_heavy_plating').displayName('Chaotic Heavy Plating').texture('kubejs:item/heavy_plating/chaotic_heavy_plating')
sog.create('californite_heavy_plating').displayName('Radioactive Heavy Plating').texture('kubejs:item/heavy_plating/irradiated_heavy_plating')
sog.create('space_time_heavy_plating').displayName('Space Time Heavy Plating').texture('kubejs:item/heavy_plating/space_time_heavy_plating')
sog.create('eternity_heavy_plating').displayName('Eternity Heavy Plating').texture('kubejs:item/heavy_plating/eternity_heavy_plating')
        //power
sog.create('tesla_coil_mk1').displayName('Tesla Coil MKI').texture('kubejs:item/power/tesla_coil_mk1').tooltip('Produces 1 ZPM amp when used on the Tesla Tower')
sog.create('tesla_coil_mk2').displayName('Tesla Coil MKII').texture('kubejs:item/power/tesla_coil_mk2').tooltip('Produces 1 UEV amp when used on the Tesla Tower')
sog.create('tesla_coil_mk3').displayName('Tesla Coil MKIII').texture('kubejs:item/power/tesla_coil_mk3').tooltip('Produces 1 UXV amp when used on the Tesla Tower')
        //Particles
sog.create('graviton').displayName('Graviton').texture('kubejs:item/particles/graviton')   
sog.create('quarks').displayName('Quarks').texture('kubejs:item/particles/quarks')   
sog.create('photon').displayName('Photon').texture('kubejs:item/particles/photon')   
sog.create('strange_quarks').displayName('Strange Quarks').texture('kubejs:item/particles/strange_quarks')   
sog.create('tau_neutrino').displayName('Tau Neutrino').texture('kubejs:item/particles/tau_neutrino')   
sog.create('condensed_hydrogen_ball').displayName('Condensed Hydrogen Ball').texture('kubejs:item/particles/condensed_hydrogen_ball')   
        //chaos
sog.create('reactive_blend').displayName('Reactive Blend').texture('kubejs:item/chaos/reactive_blend')    
sog.create('reactive_chaos_dust').displayName('Reactive Chaos Dust').texture('kubejs:item/chaos/reactive_chaos_dust')    
sog.create('reactive_chaos_pellet').displayName('Reactive Chaos Pellet').texture('kubejs:item/chaos/reactive_chaos_pellet').tooltip('Produces 1 MAX AMP on the Chaotic Singularity Reactor') 
sog.create('infused_reactive_chaos_pellet').displayName('Infused Reactive Chaos Pellet').texture('kubejs:item/chaos/infused_reactive_chaos_pellet').tooltip('Produces 1 MAX+4 AMP on the Chaotic Singularity Reactor') 
sog.create('reactive_chaos_waste').displayName('Reactive Chaos Waste').texture('kubejs:item/chaos/reactive_chaos_waste')    
        //UXV stuff
sog.create('cosmic_circuit_board').maxStackSize(64).displayName('Cosmic Circuit Board')
sog.create('cosmic_printed_circuit_board').maxStackSize(64).displayName('Cosmic Printed Circuit Board')
        // SMDS
        sog.create('complex_smd_capacitor').maxStackSize(64).displayName('Complex SMD Capacitor')
        sog.create('complex_smd_diode').maxStackSize(64).displayName('Complex SMD Diode')
        sog.create('complex_smd_inductor').maxStackSize(64).displayName('Complex SMD Inductor')
        sog.create('complex_smd_resistor').maxStackSize(64).displayName('Complex SMD Resistor')
        sog.create('complex_smd_transistor').maxStackSize(64).displayName('Complex SMD Transistor')
        // NANITES
sog.create('cosmic_matter_nanites').maxStackSize(64).displayName('Cosmic Matter Nanites')
sog.create('eternity_nanites').maxStackSize(64).displayName('Eternity Nanites')
sog.create('stellar_matter_nanites').maxStackSize(64).displayName('Stellar Matter Nanites')
sog.create('universium_nanites').maxStackSize(64).displayName('Universium Nanites')




const data = ["cosmic", "elementary", "eternity", "plasma", "singularity", "spacetime", "universe"]
        data.forEach((data) => {
            sog.create(data + "_data")
                .displayName(data.toUpperCase() + " Data")
                .tooltip("§7Encrypted Data")
                .textureJson({ layer0: `kubejs:item/data/${data}_data` })
        })

})

StartupEvents.registry('block', sog => {

    // C A S I N G S

    sog.create('neutronate_enriched_atomic_casing')
        .displayName('Neutronate Enriched Atomic Casing')
        .textureAll('kubejs:block/atomic/casing')
        .soundType('metal')
        .hardness(9)
        .requiresTool(true)
        .resistance(1)
        .lightLevel(0)
        .tagBlock('forge:mineable/wrench')
    sog.create('supercritical_neutronium_casing')
        .displayName('Supercritical Neutronium Casing')
        .textureAll('kubejs:block/neutronium/casing')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .tagBlock('forge:mineable/wrench')
    sog.create('neutronium_casing')
        .displayName('Neutronium Casing')
        .textureAll('kubejs:block/neutronium/ncasing')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .tagBlock('forge:mineable/wrench')
    sog.create('kaemite_casing')
        .displayName('Kaemite Casing')
        .textureAll('kubejs:block/casings/kaemite_casing')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .tagBlock('forge:mineable/wrench')
    sog.create('quantum_casing')
        .displayName('Quantum Casing')
        .textureAll('kubejs:block/casings/quantum_casing')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .tagBlock('forge:mineable/wrench')
    sog.create('reinforced_computation_casing')
        .displayName('Reinforced Computation Casing')
        .textureAll('kubejs:block/casings/reinforced_computation_casing')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .tagBlock('forge:mineable/wrench')
    sog.create('large_precision_casing')
        .displayName('Large Precision Casing')
        .textureAll('kubejs:block/casings/large_precision_casing')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .tagBlock('forge:mineable/wrench')
    sog.create('component_tile_casing')
        .displayName('Component Tile Casing')
        .textureAll('kubejs:block/casings/component_tile_casing')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .tagBlock('forge:mineable/wrench')
        sog.create('stellar_powered_casing')
        .displayName('Stellar Powered Casing')
        .textureAll('kubejs:block/casings/stellar_powered_casing')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .tagBlock('forge:mineable/wrench')
        sog.create('highly_reinforced_radioactive_casing')
        .displayName('Highly Reinforced Radioactive Casing')
        .textureAll('kubejs:block/casings/highly_reinforced_radioactive_casing')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .tagBlock('forge:mineable/wrench')
        sog.create('naquadria_turbine_casing')
        .displayName('Naquadria Turbine Casing')
        .textureAll('kubejs:block/casings/machine_casing_turbine_naquadria')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .tagBlock('forge:mineable/wrench')
        sog.create('osmiridium_pipe_casing')
        .displayName('Osmiridium Pipe Casing')
        .textureAll('kubejs:block/casings/machine_casing_pipe_osmiridium')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .lightLevel(0)
        .hardness(9)
        .tagBlock('forge:mineable/wrench')
        sog.create('superconductive_casing')
        .displayName('Superconductive Casing')
        .textureAll('kubejs:block/casings/superconductive_casing')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .lightLevel(0)
        .hardness(9)
        .tagBlock('forge:mineable/wrench')
        sog.create('conductive_glass')
        .displayName('Conductive Glass')
        .textureAll('kubejs:block/casings/transparent/conductive_glass')
        .soundType('glass')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('forge:mineable/wrench')
        sog.create('high_power_casing')
        .displayName('High Power Maceration Casing')
        .textureAll('kubejs:block/casings/high_power_casing')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('forge:mineable/wrench')
        sog.create('industrial_power_casing')
        .displayName('Industrial Power Casing')
        .textureAll('kubejs:block/casings/industrial_power_casing')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('forge:mineable/wrench')
        sog.create('high_power_crushing_wheels')
        .displayName('High Power Crushing Wheels')
        .textureAll('kubejs:block/casings/high_power_crushing_wheels')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('forge:mineable/wrench')
        sog.create('highly_superconducting_coil_block')
        .displayName('Highly Superconducting Coil Block')
        .textureAll('kubejs:block/coils/machine_coil_highly_superconductor')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('forge:mineable/wrench')
        sog.create('trascendental_casing')
        .displayName('Trascendental Casing')
        .textureAll('kubejs:block/casings/endgame/trascendental_casing')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('forge:mineable/wrench')
        sog.create('trascendental_shifter_casing')
        .displayName('Trascendental Shifter Casing')
        .textureAll('kubejs:block/casings/endgame/trascendental_sifter_casing')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('forge:mineable/wrench')
        sog.create('trascendental_reinforced_casing')
        .displayName('Trascendental Reinforced Casing')
        .textureAll('kubejs:block/casings/endgame/trascendental_reinforced_casing')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('forge:mineable/wrench')
        sog.create('trascendental_space_time_casing')
        .displayName('Trascendental Space Time Casing')
        .textureAll('kubejs:block/casings/endgame/trascendental_space_time_casing')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('forge:mineable/wrench')
        sog.create('trascendental_resonant_casing')
        .displayName('Trascendental Resonant Casing')
        .textureAll('kubejs:block/casings/endgame/trascendental_resonant_casing')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('forge:mineable/wrench')
        sog.create('trascendental_neutronic_casing')
        .displayName('Trascendental Neutronic Casing')
        .textureAll('kubejs:block/casings/endgame/trascendental_neutronic_casing')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('forge:mineable/wrench')
        sog.create('trascendental_draconic_casing')
        .displayName('Trascendental Draconic Casing')
        .textureAll('kubejs:block/casings/endgame/trascendental_draconic_casing')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('forge:mineable/wrench')
        sog.create('trascendental_cosmic_casing')
        .displayName('Trascendental Cosmic Casing')
        .textureAll('kubejs:block/casings/endgame/trascendental_cosmic_casing')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('forge:mineable/wrench')
        sog.create('chemical_tier_one')
        .displayName('Chemical Tier 1')
        .textureAll('kubejs:block/casings/tiered/chemical_tier_one')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('forge:mineable/wrench')
        sog.create('chemical_tier_two')
        .displayName('Chemical Tier 2')
        .textureAll('kubejs:block/casings/tiered/chemical_tier_two')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('forge:mineable/wrench')
        sog.create('chemical_tier_three')
        .displayName('Chemical Tier 3')
        .textureAll('kubejs:block/casings/tiered/chemical_tier_three')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('forge:mineable/wrench')
        sog.create('chemical_tier_four')
        .displayName('Chemical Tier 4')
        .textureAll('kubejs:block/casings/tiered/chemical_tier_four')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('forge:mineable/wrench')
        sog.create('chemical_tier_five')
        .displayName('Chemical Tier 5')
        .textureAll('kubejs:block/casings/tiered/chemical_tier_five')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('forge:mineable/wrench')
        sog.create('chemical_tier_six')
        .displayName('Chemical Tier 6')
        .textureAll('kubejs:block/casings/tiered/chemical_tier_six')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('forge:mineable/wrench')
        sog.create('asteroid_belt_marker')
        .displayName('Asteroid Belt')
        .textureAll('kubejs:block/asteroid_belt')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('forge:mineable/wrench')
        sog.create('eternity_casing')
        .displayName('Eternity Casing')
        .textureAll('kubejs:block/casings/eternity_casing')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('forge:mineable/wrench')

        // F U S I O N   M K 4

        sog.create('fusion_casing_mk4')
        .displayName('Fusion Casing MK IV')
        .textureAll('kubejs:block/fusion/fusion_casing_mk4')
        .soundType('metal')
        .resistance(1)
        .hardness(9)
        .requiresTool(true)
        .lightLevel(0)
        .tagBlock('forge:mineable/wrench')
        sog.create('fusion_coil_mk2')
        .displayName('Fusion Coil MK II')
        .textureAll('kubejs:block/fusion/fusion_coil_mk2')
        .soundType('metal')
        .resistance(1)
        .hardness(9)
        .requiresTool(true)
        .lightLevel(0)
        .tagBlock('forge:mineable/wrench')
        sog.create('fusion_glass_mk2')
        .displayName('Reinforced Fusion Glass')
        .textureAll('kubejs:block/fusion/fusion_glass_mk2')
        .soundType('glass')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('forge:mineable/wrench')

    // P R O J E C T O R   M O D U L E S
    
    sog.create('drilling_projector_module')
        .displayName('Space Drill Projector Module')
        .textureAll('kubejs:block/projector/drilling_projector_module')
        .soundType('metal')
        .resistance(1)
        .hardness(9)
        .requiresTool(true)
        .lightLevel(0)
        .tagBlock('forge:mineable/wrench')
    sog.create('pumping_projector_module')
        .displayName('Space Pump Projector Module')
        .textureAll('kubejs:block/projector/pumping_projector_module')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .tagBlock('forge:mineable/wrench')
    sog.create('cosmic_projector_module')
        .displayName('Cosmic Projector Module')
        .textureAll('kubejs:block/projector/cosmic_projector_module')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .lightLevel(0)
        .tagBlock('forge:mineable/wrench')
    sog.create('fusion_projector_module')
        .displayName('Fusion Projector Module')
        .textureAll('kubejs:block/projector/fusion_projector_module')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .tagBlock('forge:mineable/wrench')

        sog.create('dimensional_pump_module')
        .displayName('Dimensional Pump Module')
        .textureAll('kubejs:block/casings/tiered/dimensional_pump_module')
        .soundType('metal')
        .resistance(1)
        .requiresTool(true)
        .hardness(9)
        .lightLevel(0)
        .tagBlock('forge:mineable/wrench')


        // C O I L S
    sog.create('atomic_alloy_coil_block', 'gtceu:coil')
        .temperature(12500)
        .level(9)
        .energyDiscount(16) // 
        .tier(9)
        .textureAll('kubejs:block/atomic/coil')
        .hardness(5)
        .requiresTool(true)
        .soundType('metal')
        .tagBlock('forge:mineable/wrench')
    sog.create('resonant_essence_coil_block', 'gtceu:coil')
        .temperature(13500)
        .level(15)
        .energyDiscount(250) // 
        .tier(9.5)
        .textureAll('kubejs:block/coils/machine_coil_resonant_essence')
        .hardness(5)
        .requiresTool(true)
        .soundType('metal')
        .tagBlock('forge:mineable/wrench')
    sog.create('awakened_draconium_coil_block', 'gtceu:coil')
        .temperature(15500)
        .level(16)
        .energyDiscount(300) // 
        .tier(10)
        .coilMaterial(() => GTMaterials.get('awakened_draconium'))
        .textureAll('kubejs:block/coils/machine_coil_awakened_draconium')
        .hardness(5)
        .requiresTool(true)
        .soundType('metal')
        .tagBlock('forge:mineable/wrench')
        sog.create('infinity_coil_block', 'gtceu:coil')
        .temperature(19950)
        .level(99)
        .energyDiscount(999) // 
        .tier(99)
        .coilMaterial(() => GTMaterials.get('infinity'))
        .textureAll('kubejs:block/coils/machine_coil_infinity')
        .hardness(5)
        .requiresTool(true)
        .soundType('metal')
        .tagBlock('forge:mineable/wrench')
})