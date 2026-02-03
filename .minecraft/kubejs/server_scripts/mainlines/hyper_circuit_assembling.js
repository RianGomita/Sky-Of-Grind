ServerEvents.recipes(event => {
    // Amount of Circuits per Recipe
    var circuit_quantities = [64, 256, 1024];
    // Material discount for bulk crafting
    var circuit_discounts  = [0.85, 0.5, 0.35];
    // Meta circuit used to select recipe
    var circuit_circuits   = [1, 2, 3];
    // Duration scaling
    var durationMultipliers = [1, 2, 4];


    // Base Circuit Recipes
    var baseRecipes = [
        {
            recipeIdPrefix: 'basic_electronic_circuit',
            outputItem: 'gtceu:basic_electronic_circuit',
            baseOutput: 2,
            items: [
                ['gtceu:resin_printed_circuit_board', 1],
                ['#gtceu:resistors', 2],
                ['#gtceu:circuits/ulv', 2]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 72],
                ['gtceu:red_alloy', 144]
            ],
            duration: 20 * 10,
            EUt: GTValues.VA[GTValues.LV]
        },
        {
            recipeIdPrefix: 'good_electronic_circuit',
            outputItem: 'gtceu:good_electronic_circuit',
            baseOutput: 1,
            items: [
                ['gtceu:phenolic_printed_circuit_board', 1],
                ['gtceu:basic_electronic_circuit', 2],
                ['#gtceu:diodes', 2]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 72],
                ['gtceu:copper', 144]
            ],
            duration: 20 * 15,
            EUt: GTValues.VA[GTValues.LV]
        },
        {
            recipeIdPrefix: 'basic_integrated_circuit',
            outputItem: 'gtceu:basic_integrated_circuit',
            baseOutput: 2,
            items: [
                ['gtceu:resin_printed_circuit_board', 1],
                ['gtceu:ilc_chip', 1],
                ['#gtceu:resistors', 2],
                ['#gtceu:diodes', 2]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 72],
                ['gtceu:tin', 36],
                ['gtceu:copper', 36]
            ],
            duration: 20 * 10,
            EUt: GTValues.VA[GTValues.LV]
        },
        {
            recipeIdPrefix: 'good_integrated_circuit',
            outputItem: 'gtceu:good_integrated_circuit',
            baseOutput: 2,
            items: [
                ['gtceu:phenolic_printed_circuit_board', 1],
                ['gtceu:basic_integrated_circuit', 2],
                ['#gtceu:resistors', 2],
                ['#gtceu:diodes', 2]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 72],
                ['gtceu:gold', 72],
                ['gtceu:silver', 72]
            ],
            duration: 20 * 20,
            EUt: GTValues.VA[GTValues.LV]
        },
        {
            recipeIdPrefix: 'advanced_integrated_circuit',
            outputItem: 'gtceu:advanced_integrated_circuit',
            baseOutput: 1,
            items: [
                ['gtceu:good_integrated_circuit', 2],
                ['gtceu:ilc_chip', 2],
                ['gtceu:ram_chip', 2],
                ['#gtceu:transistors', 4]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 72],
                ['gtceu:electrum', 144],
                ['gtceu:annealed_copper', 144]
            ],
            duration: 20 * 40,
            EUt: GTValues.VA[GTValues.LV]
        },
        {
            recipeIdPrefix: 'microchip_processor',
            outputItem: 'gtceu:microchip_processor',
            baseOutput: 6,
            items: [
                ['gtceu:plastic_printed_circuit_board', 1],
                ['gtceu:soc', 1]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 72],
                ['gtceu:copper', 36],
                ['gtceu:tin', 36]
            ],
            duration: 50,
            EUt: GTValues.VA[GTValues.EV]
        },
        {
            recipeIdPrefix: 'nand_chip',
            outputItem: 'gtceu:nand_chip',
            baseOutput: 12,
            items: [
                ['gtceu:plastic_printed_circuit_board', 1],
                ['gtceu:simple_soc', 1]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 72],
                ['gtceu:red_alloy', 36],
                ['gtceu:tin', 36]
            ],
            duration: 50,
            EUt: GTValues.VA[GTValues.EV]
        },
        {
            recipeIdPrefix: 'micro_processor',
            outputItem: 'gtceu:micro_processor',
            baseOutput: 4,
            items: [
                ['gtceu:plastic_printed_circuit_board', 1],
                ['gtceu:soc', 1]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 72],
                ['gtceu:red_alloy', 72],
                ['gtceu:annealed_copper', 72]
            ],
            duration: 50,
            EUt: GTValues.VA[GTValues.IV]
        },
        {
            recipeIdPrefix: 'micro_processor_assembly',
            outputItem: 'gtceu:micro_processor_assembly',
            baseOutput: 2,
            items: [
                ['gtceu:plastic_printed_circuit_board', 1],
                ['gtceu:micro_processor', 2],
                ['#gtceu:inductors', 4],
                ['#gtceu:capacitors', 8],
                ['gtceu:ram_chip', 4]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 144],
                ['gtceu:red_alloy', 144]
            ],
            duration: 20 * 20,
            EUt: GTValues.VA[GTValues.MV]
        },
        {
            recipeIdPrefix: 'micro_processor_computer',
            outputItem: 'gtceu:micro_processor_computer',
            baseOutput: 1,
            items: [
                ['gtceu:plastic_printed_circuit_board', 1],
                ['gtceu:micro_processor_assembly', 2],
                ['#gtceu:diodes', 4],
                ['gtceu:ram_chip', 4]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 144],
                ['gtceu:electrum', 288],
                ['gtceu:blue_alloy', 288]
            ],
            duration: 20 * 20,
            EUt: GTValues.VA[GTValues.MV]
        },
        {
            recipeIdPrefix: 'micro_processor_mainframe',
            outputItem: 'gtceu:micro_processor_mainframe',
            baseOutput: 1,
            items: [
                ['gtceu:micro_processor_computer', 2],
                ['gtceu:advanced_smd_inductor', 2],
                ['gtceu:advanced_smd_capacitor', 4],
                ['gtceu:ram_chip', 16]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 288],
                ['gtceu:aluminium', 576],
                ['gtceu:annealed_copper', 288]
            ],
            duration: 20 * 20,
            EUt: GTValues.VA[GTValues.HV]
        },
        {
            recipeIdPrefix: 'nano_processor',
            outputItem: 'gtceu:nano_processor',
            baseOutput: 4,
            items: [
                ['gtceu:epoxy_printed_circuit_board', 1],
                ['gtceu:advanced_soc', 1]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 72],
                ['gtceu:electrum', 72],
                ['gtceu:platinum', 72]
            ],
            duration: 50,
            EUt: GTValues.VA[GTValues.LuV]
        },
        {
            recipeIdPrefix: 'nano_processor_assembly',
            outputItem: 'gtceu:nano_processor_assembly',
            baseOutput: 2,
            items: [
                ['gtceu:epoxy_printed_circuit_board', 1],
                ['gtceu:nano_processor', 2],
                ['gtceu:advanced_smd_inductor', 1],
                ['gtceu:advanced_smd_capacitor', 2],
                ['gtceu:ram_chip', 8]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 144],
                ['gtceu:electrum', 288]
            ],
            duration: 20 * 10,
            EUt: GTValues.VA[GTValues.EV]
        },
        {
            recipeIdPrefix: 'nano_processor_computer',
            outputItem: 'gtceu:nano_processor_computer',
            baseOutput: 1,
            items: [
                ['gtceu:epoxy_printed_circuit_board', 1],
                ['gtceu:nano_processor_assembly', 2],
                ['gtceu:advanced_smd_diode', 2],
                ['gtceu:nor_memory_chip', 4],
                ['gtceu:ram_chip', 16]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 144],
                ['gtceu:electrum', 288]
            ],
            duration: 20 * 10,
            EUt: GTValues.VA[GTValues.EV]
        },
        {
            recipeIdPrefix: 'nano_processor_mainframe',
            outputItem: 'gtceu:nano_processor_mainframe',
            baseOutput: 1,
            items: [
                ['gtceu:nano_processor_computer', 2],
                ['gtceu:advanced_smd_inductor', 4],
                ['gtceu:advanced_smd_capacitor', 8],
                ['gtceu:ram_chip', 16]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 288],
                ['gtceu:aluminium', 576],
                ['gtceu:annealed_copper', 576]
            ],
            duration: 20 * 20,
            EUt: GTValues.VA[GTValues.EV]
        },
        {
            recipeIdPrefix: 'quantum_processor',
            outputItem: 'gtceu:quantum_processor',
            baseOutput: 4,
            items: [
                ['gtceu:fiber_reinforced_printed_circuit_board', 1],
                ['gtceu:advanced_soc', 1]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 72],
                ['gtceu:platinum', 216],
                ['gtceu:niobium_titanium', 144]
            ],
            duration: 50,
            EUt: GTValues.VA[GTValues.ZPM]
        },
        {
            recipeIdPrefix: 'quantum_processor_assembly',
            outputItem: 'gtceu:quantum_processor_assembly',
            baseOutput: 2,
            items: [
                ['gtceu:fiber_reinforced_printed_circuit_board', 1],
                ['gtceu:quantum_processor', 2],
                ['gtceu:advanced_smd_inductor', 2],
                ['gtceu:advanced_smd_capacitor', 4],
                ['gtceu:ram_chip', 4]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 144],
                ['gtceu:platinum', 288]
            ],
            duration: 20 * 10,
            EUt: GTValues.VA[GTValues.IV]
        },
        {
            recipeIdPrefix: 'quantum_processor_computer',
            outputItem: 'gtceu:quantum_processor_computer',
            baseOutput: 1,
            items: [
                ['gtceu:fiber_reinforced_printed_circuit_board', 1],
                ['gtceu:quantum_processor_assembly', 2],
                ['gtceu:advanced_smd_diode', 2],
                ['gtceu:nor_memory_chip', 4],
                ['gtceu:ram_chip', 16]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 144],
                ['gtceu:platinum', 576]
            ],
            duration: 20 * 10,
            EUt: GTValues.VA[GTValues.IV]
        },
        {
            recipeIdPrefix: 'quantum_processor_mainframe',
            outputItem: 'gtceu:quantum_processor_mainframe',
            baseOutput: 1,
            items: [
                ['gtceu:quantum_processor_computer', 2],
                ['gtceu:advanced_smd_inductor', 6],
                ['gtceu:advanced_smd_capacitor', 12],
                ['gtceu:ram_chip', 24]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 288],
                ['gtceu:hssg', 576],
                ['gtceu:annealed_copper', 3456]
            ],
            duration: 20 * 20,
            EUt: GTValues.VA[GTValues.IV]
        },
        {
            recipeIdPrefix: 'crystal_processor',
            outputItem: 'gtceu:crystal_processor',
            baseOutput: 4,
            items: [
                ['gtceu:multilayer_fiber_reinforced_printed_circuit_board', 1],
                ['gtceu:crystal_soc', 1]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 72],
                ['gtceu:niobium_titanium', 144],
                ['gtceu:yttrium_barium_cuprate', 144]
            ],
            duration: 20 * 5,
            EUt: GTValues.VA[GTValues.ZPM]
        },
        {
            recipeIdPrefix: 'crystal_processor_assembly',
            outputItem: 'gtceu:crystal_processor_assembly',
            baseOutput: 2,
            items: [
                ['gtceu:multilayer_fiber_reinforced_printed_circuit_board', 1],
                ['gtceu:crystal_processor', 2],
                ['gtceu:advanced_smd_inductor', 4],
                ['gtceu:advanced_smd_capacitor', 8],
                ['gtceu:ram_chip', 24]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 144],
                ['gtceu:niobium_titanium', 288]
            ],
            duration: 20 * 20,
            EUt: GTValues.VA[GTValues.LuV]
        },
        {
            recipeIdPrefix: 'crystal_processor_computer',
            outputItem: 'gtceu:crystal_processor_computer',
            baseOutput: 1,
            items: [
                ['gtceu:multilayer_fiber_reinforced_printed_circuit_board', 1],
                ['gtceu:crystal_processor_assembly', 2],
                ['gtceu:ram_chip', 4],
                ['gtceu:nor_memory_chip', 32],
                ['gtceu:nand_memory_chip', 64]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 144],
                ['gtceu:niobium_titanium', 576]
            ],
            duration: 20 * 20,
            EUt: GTValues.VA[GTValues.LuV]
        },
        {
            recipeIdPrefix: 'crystal_processor_mainframe',
            outputItem: 'gtceu:crystal_processor_mainframe',
            baseOutput: 1,
            items: [
                ['gtceu:crystal_processor_computer', 2],
                ['gtceu:ram_chip', 32],
                ['gtceu:hpic_chip', 2],
                ['gtceu:advanced_smd_inductor', 8],
                ['gtceu:advanced_smd_capacitor', 16],
                ['gtceu:advanced_smd_diode', 8]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 1440],
                ['gtceu:hsse', 576],
                ['gtceu:niobium_titanium', 576]
            ],
            duration: 20 * 40,
            EUt: GTValues.VA[GTValues.LuV]
        },
        {
            recipeIdPrefix: 'wetware_processor',
            outputItem: 'gtceu:wetware_processor',
            baseOutput: 4,
            items: [
                ['gtceu:neuro_processing_unit', 1],
                ['gtceu:highly_advanced_soc', 1]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 72],
                ['gtceu:yttrium_barium_cuprate', 144],
                ['gtceu:naquadah', 144]
            ],
            duration: 20 * 5,
            EUt: GTValues.VA[GTValues.UV]
        },
        {
            recipeIdPrefix: 'wetware_processor_assembly',
            outputItem: 'gtceu:wetware_processor_assembly',
            baseOutput: 2,
            items: [
                ['gtceu:wetware_printed_circuit_board', 1],
                ['gtceu:wetware_processor', 2],
                ['gtceu:advanced_smd_inductor', 6],
                ['gtceu:advanced_smd_capacitor', 12],
                ['gtceu:ram_chip', 24]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 144],
                ['gtceu:yttrium_barium_cuprate', 288]
            ],
            duration: 20 * 20,
            EUt: GTValues.VA[GTValues.ZPM]
        },
        {
            recipeIdPrefix: 'wetware_processor_computer',
            outputItem: 'gtceu:wetware_processor_computer',
            baseOutput: 1,
            items: [
                ['gtceu:wetware_printed_circuit_board', 1],
                ['gtceu:wetware_processor_assembly', 2],
                ['gtceu:advanced_smd_diode', 8],
                ['gtceu:nor_memory_chip', 16],
                ['gtceu:ram_chip', 32]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 1152],
                ['gtceu:yttrium_barium_cuprate', 432],
                ['gtceu:polybenzimidazole', 1152],
                ['gtceu:europium', 576]
            ],
            duration: 20 * 20,
            EUt: GTValues.VA[GTValues.ZPM]
        },
        {
            recipeIdPrefix: 'wetware_processor_mainframe',
            outputItem: 'gtceu:wetware_processor_mainframe',
            baseOutput: 1,
            items: [
                ['gtceu:advanced_smd_resistor', 32],
                ['gtceu:advanced_smd_capacitor', 32],
                ['gtceu:advanced_smd_transistor', 32],
                ['gtceu:highly_advanced_soc', 2],
                ['gtceu:wetware_processor_computer', 2],
                ['gtceu:advanced_smd_inductor', 32],
                ['gtceu:advanced_smd_diode', 32],
                ['gtceu:ram_chip', 32]
            ],
            fluids: [
                ['gtceu:condensed_star_matter', 5950],
                ['gtceu:soldering_alloy', 1152],
                ['gtceu:polybenzimidazole', 3456],
                ['gtceu:europium', 1152],
                ['gtceu:tritanium', 576],
                ['gtceu:enriched_naquadah_trinium_europium_duranide', 144]
            ],
            duration: 20 * 100,
            EUt: GTValues.VA[GTValues.UV]
        },
            {
            recipeIdPrefix: 'resonant_processor',
            outputItem: 'kubejs:resonant_processor',
            baseOutput: 2,
            items: [
                ['kubejs:highly_resonative_printed_circuit_board', 1],
                ['gtceu:wetware_processor', 2],
                ['gtceu:advanced_smd_capacitor', 64],
                ['gtceu:highly_advanced_soc', 1]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 1152],
                ['gtceu:peek', 1152],
                ['gtceu:condensed_star_matter', 8124],
                ['gtceu:resonant_essence', 1152],
                ['gtceu:kaemite', 1152]
            ],
            duration: 20 * 10,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'resonant_processor_assembly',
            outputItem: 'kubejs:resonant_processor_assembly',
            baseOutput: 1,
            items: [
                ['kubejs:highly_resonative_printed_circuit_board', 1],
                ['kubejs:resonant_processor', 1],
                ['gtceu:advanced_smd_capacitor', 64],
                ['gtceu:highly_advanced_soc', 1]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 1152],
                ['gtceu:peek', 1152],
                ['gtceu:condensed_star_matter', 8124],
                ['gtceu:resonant_essence', 1152],
                ['gtceu:kaemite', 1152],
                ['gtceu:crystal_matrix', 9072]
            ],
            duration: 20 * 20,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'resonant_processor_computer',
            outputItem: 'kubejs:resonant_processor_computer',
            baseOutput: 1,
            items: [
                ['kubejs:resonant_processor_assembly', 2],
                ['gtceu:advanced_smd_capacitor', 64],
                ['gtceu:highly_advanced_soc', 1]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 1152],
                ['gtceu:peek', 1152],
                ['gtceu:condensed_star_matter', 8124],
                ['gtceu:resonant_essence', 1152],
                ['gtceu:kaemite', 1152],
                ['gtceu:crystal_matrix', 9072],
                ['gtceu:neutronium', 4608]
            ],
            duration: 20 * 40,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'resonant_processor_mainframe',
            outputItem: 'kubejs:resonant_processor_mainframe',
            baseOutput: 1,
            items: [
                ['kubejs:resonant_processor_computer', 2],
                ['gtceu:advanced_smd_capacitor', 64],
                ['gtceu:highly_advanced_soc', 1],
                ['avaritia:eternal_singularity', 1],
                ['avaritia:neutron_gear', 16],
                ['kubejs:highly_resonative_soc', 1]
            ],
            fluids: [
                ['gtceu:soldering_alloy', 1152],
                ['gtceu:peek', 1152],
                ['gtceu:condensed_star_matter', 8124],
                ['gtceu:resonant_essence', 1152],
                ['gtceu:kaemite', 1152],
                ['gtceu:crystal_matrix', 9072],
                ['gtceu:neutronium', 4608]
            ],
            duration: 20 * 80,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'dragon_processor',
            outputItem: 'kubejs:dragon_processor',
            baseOutput: 2,
            items: [
                ['kubejs:dragon_infused_neuro_processing_unit', 1],
                ['kubejs:resonant_processor', 2],
                ['gtceu:advanced_smd_capacitor', 64],
                ['avaritia:neutron_gear', 2],
                ['kubejs:extremely_advanced_soc', 1],
                ['kubejs:quantum_data_module', 1],
                ['avaritia:eternal_singularity', 1]
            ],
            fluids: [
                ['gtceu:neutronium', 1152],
                ['gtceu:hypoxylon', 1152],
                ['gtceu:condensed_star_matter', 8124],
                ['gtceu:naquadria', 8124],
                ['gtceu:draconium', 1152]
            ],
            duration: 20 * 10,
            EUt: GTValues.VA[GTValues.UIV]
        },
        {
            recipeIdPrefix: 'dragon_processor_assembly',
            outputItem: 'kubejs:dragon_processor_assembly',
            baseOutput: 2,
            items: [
                ['kubejs:draconic_printed_circuit_board', 2],
                ['kubejs:dragon_processor', 1],
                ['gtceu:advanced_smd_capacitor', 64],
                ['avaritia:neutron_gear', 2],
                ['kubejs:extremely_advanced_soc', 1],
                ['kubejs:draconium_heavy_plating', 1],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:neutronium', 1152],
                ['gtceu:hypoxylon', 1152],
                ['gtceu:condensed_star_matter', 8124],
                ['gtceu:naquadria', 8124],
                ['gtceu:draconium', 1152]
            ],
            duration: 20 * 20,
            EUt: GTValues.VA[GTValues.UIV]
        },
            {
            recipeIdPrefix: 'dragon_processor_computer',
            outputItem: 'kubejs:dragon_processor_computer',
            baseOutput: 1,
            items: [
                ['kubejs:dragon_processor_assembly', 2],
                ['kubejs:draconic_printed_circuit_board', 1],
                ['gtceu:advanced_smd_capacitor', 64],
                ['avaritia:neutron_gear', 2],
                ['kubejs:extremely_advanced_soc', 1],
                ['kubejs:cosmic_neutronium_heavy_plating', 4],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:neutronium', 1152],
                ['gtceu:polybenzimidazole', 1152],
                ['gtceu:condensed_star_matter', 8124],
                ['gtceu:naquadria', 8124],
                ['gtceu:draconium', 1152],
                ['gtceu:crystal_matrix', 9072]
            ],
            duration: 20 * 40,
            EUt: GTValues.VA[GTValues.UIV]
        },
        {
            recipeIdPrefix: 'dragon_processor_mainframe',
            outputItem: 'kubejs:dragon_processor_mainframe',
            baseOutput: 1,
            items: [
                ['kubejs:dragon_processor_computer', 2],
                ['kubejs:draconium_heavy_plating', 4],
                ['gtceu:advanced_smd_capacitor', 64],
                ['kubejs:dragon_infused_neuro_processing_unit', 1],
                ['kubejs:extremely_advanced_soc', 1],
                ['kubejs:draconic_printed_circuit_board', 4],
                ['kubejs:neutronium_heavy_plating', 4],
                ['avaritia:eternal_singularity', 1],
                ['avaritia:neutron_gear', 16],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:neutronium', 1152],
                ['gtceu:hypoxylon', 1152],
                ['gtceu:condensed_star_matter', 8124],
                ['gtceu:naquadria', 8124]
            ],
            duration: 20 * 80,
            EUt: GTValues.VA[GTValues.UIV]
        },
        {
            recipeIdPrefix: 'cosmic_processor',
            outputItem: 'kubejs:cosmic_processor',
            baseOutput: 2,
            items: [
                ['kubejs:dragon_processor', 2],
                ['kubejs:complex_smd_capacitor', 64],
                ['gtceu:pure_cosmic_matter_plate', 1],
                ['kubejs:extremely_advanced_soc', 1],
                ['kubejs:quantum_data_module', 1],
                ['avaritia:eternal_singularity', 32]
            ],
            fluids: [
                ['gtceu:eternity', 10],
                ['gtceu:cosmic_matter', 100],
                ['gtceu:antimatter', 8124],
                ['gtceu:meta_stable_molten_kevlar', 8124],
                ['gtceu:awakened_draconium', 1152]
            ],
            duration: 20 * 10,
            EUt: GTValues.VA[GTValues.UXV]
        },
        {
            recipeIdPrefix: 'cosmic_processor_assembly',
            outputItem: 'kubejs:cosmic_processor_assembly',
            baseOutput: 2,
            items: [
                ['kubejs:cosmic_printed_circuit_board', 2],
                ['kubejs:cosmic_processor', 4],
                ['kubejs:complex_smd_capacitor', 64],
                ['gtceu:double_pure_cosmic_matter_plate', 1],
                ['kubejs:extremely_advanced_soc', 1],
                ['kubejs:chaos_heavy_plating', 1],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:eternity', 10],
                ['gtceu:cosmic_matter', 100],
                ['gtceu:antimatter', 8124],
                ['gtceu:meta_stable_molten_kevlar', 8124],
                ['gtceu:awakened_draconium', 1152]
            ],
            duration: 20 * 20,
            EUt: GTValues.VA[GTValues.UXV]
        },
        {
            recipeIdPrefix: 'cosmic_processor_computer',
            outputItem: 'kubejs:cosmic_processor_computer',
            baseOutput: 1,
            items: [
                ['kubejs:cosmic_processor_assembly', 4],
                ['kubejs:cosmic_printed_circuit_board', 1],
                ['kubejs:complex_smd_capacitor', 64],
                ['gtceu:pure_cosmic_matter_plate', 3],
                ['kubejs:extremely_advanced_soc', 1],
                ['kubejs:chaos_heavy_plating', 4],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:eternity', 10],
                ['gtceu:cosmic_matter', 100],
                ['gtceu:antimatter', 8124],
                ['gtceu:meta_stable_molten_kevlar', 8124],
                ['gtceu:awakened_draconium', 10224]
            ],
            duration: 20 * 40,
            EUt: GTValues.VA[GTValues.UXV]
        },
        {
            recipeIdPrefix: 'cosmic_processor_mainframe',
            outputItem: 'kubejs:cosmic_processor_mainframe',
            baseOutput: 1,
            items: [
                ['kubejs:cosmic_processor_computer', 2],
                ['kubejs:awakened_draconium_heavy_plating', 4],
                ['kubejs:complex_smd_capacitor', 64],
                ['kubejs:extremely_advanced_soc', 1],
                ['kubejs:cosmic_printed_circuit_board', 4],
                ['kubejs:chaos_heavy_plating', 4],
                ['avaritia:eternal_singularity', 4],
                ['gtceu:pure_cosmic_matter_gear', 2],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:eternity', 100],
                ['gtceu:cosmic_matter', 1000],
                ['gtceu:antimatter', 8124],
                ['gtceu:meta_stable_molten_kevlar', 8124],
                ['gtceu:draconium', 1152]
            ],
            duration: 20 * 80,
            EUt: GTValues.VA[GTValues.UXV]
        }
    ];


    // Recipe Builder
    for (var r = 0; r < baseRecipes.length; r++) {
        for (var i = 0; i < circuit_quantities.length; i++) {

            let qty        = circuit_quantities[i];
            let discount   = circuit_discounts[i];
            let baseOut    = baseRecipes[r].baseOutput ?? 1;

            let scaledItems = baseRecipes[r].items.map(e =>
                Math.ceil(e[1] * qty * discount) + "x " + e[0]
            );

            let scaledFluids = baseRecipes[r].fluids.map(f =>
                Fluid.of(f[0], Math.ceil(f[1] * qty * discount))
            );

            event.recipes.gtceu.hyper_circuit_assembling(
                baseRecipes[r].recipeIdPrefix + "_" + qty
            )
            .circuit(circuit_circuits[i])
            .itemInputs(scaledItems)
            .inputFluids(scaledFluids)
            .itemOutputs((qty * baseOut) + "x " + baseRecipes[r].outputItem)
            .duration(baseRecipes[r].duration * durationMultipliers[i])
            .EUt(baseRecipes[r].EUt);
        }
    }
});
