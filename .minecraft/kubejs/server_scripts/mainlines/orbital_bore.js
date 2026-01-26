ServerEvents.recipes(event => {
    // Multiblock Casings & Controller
    event.recipes.gtceu.assembler('orbital_bore')
        .itemInputs(
            '64x kubejs:orbital_solar_casing',
            '32x gtceu:quantum_space_projector',
            '64x kubejs:orbital_solar_casing',
            '64x kubejs:pumping_projector_module',
            '16x #gtceu:circuits/uiv',
            '64x kubejs:pumping_projector_module',
            '64x kubejs:orbital_solar_casing',
            '32x gtceu:quantum_space_projector',
            '64x kubejs:orbital_solar_casing',
        )
        .inputFluids('gtceu:antimatter 100000')
        .itemOutputs('gtceu:orbital_bore')
        .duration(20 * 960)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('orbital_space_containment_casing')
        .itemInputs(
            'gtceu:dense_cosmic_neutronium_plate',
            'gtceu:dense_solar_eclipse_alloy_plate',
            'gtceu:dense_cosmic_neutronium_plate',
            'gtceu:dense_solar_eclipse_alloy_plate',
            'gtceu:solar_eclipse_alloy_frame',
            'gtceu:dense_solar_eclipse_alloy_plate',
            'gtceu:dense_cosmic_neutronium_plate',
            'gtceu:dense_solar_eclipse_alloy_plate',
            'gtceu:dense_cosmic_neutronium_plate'
        )
        .inputFluids('gtceu:antimatter 1440')
        .itemOutputs('kubejs:orbital_space_containment_casing')
        .duration(20 * 200)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('orbital_solar_casing')
        .itemInputs(
            'gtceu:dense_solar_eclipse_alloy_plate',
            'gtceu:awakened_draconium_plate',
            'gtceu:dense_solar_eclipse_alloy_plate',
            'gtceu:awakened_draconium_plate',
            'kubejs:orbital_space_containment_casing',
            'gtceu:awakened_draconium_plate',
            'gtceu:dense_solar_eclipse_alloy_plate',
            'gtceu:awakened_draconium_plate',
            'gtceu:dense_solar_eclipse_alloy_plate'
        )
        .inputFluids('gtceu:awakened_draconium 288')
        .itemOutputs('kubejs:orbital_solar_casing')
        .duration(20 * 600)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('orbital_pipe_casing')
        .itemInputs(
            '2x gtceu:dense_cosmic_neutronium_plate',
            '64x kubejs:machine_casing_pipe_peek',
            '2x gtceu:dense_cosmic_neutronium_plate',
            '64x gtceu:ptfe_pipe_casing',
            'avaritia:eternal_singularity',
            '64x gtceu:ptfe_pipe_casing',
            '2x gtceu:dense_cosmic_neutronium_plate',
            '64x kubejs:machine_casing_pipe_peek',
            '2x gtceu:dense_cosmic_neutronium_plate'
        )
        .inputFluids('gtceu:antimatter 1440')
        .itemOutputs('kubejs:orbital_pipe_casing')
        .duration(20 * 1000)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('space_resistant_orbital_casing')
        .itemInputs(
            '64x gtceu:dense_naquadah_alloy_plate',
            '1x gtceu:dense_cosmic_neutronium_plate',
            '64x gtceu:dense_naquadah_alloy_plate',
            '1x kubejs:cosmic_neutronium_heavy_plating',
            '8x kubejs:quantum_casing',
            '1x kubejs:cosmic_neutronium_heavy_plating',
            '64x gtceu:dense_naquadah_alloy_plate',
            '1x gtceu:dense_cosmic_neutronium_plate',
            '64x gtceu:dense_naquadah_alloy_plate',
        )
        .inputFluids('gtceu:antimatter 1440')
        .itemOutputs('kubejs:space_resistant_orbital_casing')
        .duration(20 * 50)
        .EUt(GTValues.VA[GTValues.UEV])


    // Modules
    event.shaped('kubejs:dimensional_orbital_fusion_module', [
        'ABC', 
        'BDB', 
        'CBA'  
    ], {
    A: 'kubejs:gravitational_fluctuation_module', 
    B: 'avaritia:eternal_singularity',  
    C: 'gtceu:fine_pure_cosmic_matter_wire',
	D: 'gtceu:fusion_mk5'
    })

    event.shaped('kubejs:interstellar_fusion_module', [
        'ABC', 
        'BDB', 
        'CBA'  
    ], {
    A: 'kubejs:gravitational_fluctuation_module', 
    B: 'avaritia:eternal_singularity',  
    C: 'gtceu:synchronized_chronon_gem',
	D: 'gtceu:eternity_fusion_reactor'
    })

    event.shaped('kubejs:dimensional_orbital_pumping_module', [
        'ABA', 
        'BCB', 
        'ABA'  
    ], {
    A: 'kubejs:gravitational_fluctuation_module', 
    B: '#gtceu:circuits/uxv',  
    C: 'gtceu:uxv_electric_pump'
    })

    event.shaped('kubejs:interstellar_pumping_module', [
        'ABA', 
        'BCB', 
        'ABA'  
    ], {
    A: 'kubejs:gravitational_fluctuation_module', 
    B: 'kubejs:chrono_infinity_processor_mainframe',  
    C: 'gtceu:opv_electric_pump'
    })

    event.shaped('kubejs:dimensional_orbital_mining_module', [
        'ABA', 
        'BCB', 
        'ABA'  
    ], {
    A: 'kubejs:gravitational_fluctuation_module', 
    B: '#gtceu:circuits/uxv',  
    C: 'gtceu:neutronium_drill_head'
    })

    event.shaped('kubejs:interstellar_mining_module', [
        'ABA', 
        'BCB', 
        'ABA'  
    ], {
    A: 'kubejs:gravitational_fluctuation_module', 
    B: 'kubejs:chrono_infinity_processor_mainframe',  
    C: 'gtceu:neutronium_drill_head'
    })


    // Material Recipes
    event.recipes.gtceu.mixer('solar_eclipse_alloy_dust')
        .itemInputs(
            "4x gtceu:cosmic_neutronium_dust"
        )
        .inputFluids('gtceu:awakened_draconium 576')
        .itemOutputs('16x gtceu:solar_eclipse_alloy_dust')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.UIV])


    // Orbital Pumping
    event.recipes.gtceu.orbital_pump('orbitalpump')
        .notConsumable('kubejs:pumping_projector_module')
        .outputFluids(
            "gtceu:oxygen 144000000",
            "gtceu:hydrogen 144000000",
            "gtceu:nitrogen 144000000",
            "gtceu:fluorine 144000000",
            "gtceu:chlorine 144000000",
            "gtceu:air 144000000",
            "gtceu:nether_air 144000000",
            "gtceu:ender_air 144000000",
            "gtceu:helium 144000000",
            "gtceu:oil_heavy 144000000",
            "gtceu:oil 144000000",
            "gtceu:oil_medium 144000000",
            "gtceu:oil_light 144000000",
            "gtceu:natural_gas 144000000",
            "gtceu:polyethylene 144000000",
            "gtceu:polytetrafluoroethylene 144000000",
            "gtceu:polybenzimidazole 144000000",
            "minecraft:lava 144000000",
            "gtceu:titanium 144000000",
            "gtceu:star_matter 144000000",
            "gtceu:condensed_star_matter 14400000",
            "gtceu:salt_water 144000000",
            "gtceu:deuterium 144000000",
            "gtceu:neon 144000000",
            "gtceu:argon 144000000",
            "gtceu:krypton 144000000"
        )
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.orbital_pump('orbitalpump_galactical')
        .notConsumable('kubejs:dimensional_orbital_pumping_module')
        .outputFluids(
            "gtceu:crude_astral_flux_plasma 10000",
            "gtceu:acidic_venus_residue 10000",
            "gtceu:kaemite 10000",
            "gtceu:raw_cosmic_matter 10000",
            "gtceu:deep_water 10000"
        )
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.UIV])


    // Orbital Mining
    const basic_ores_1 = [
        'gtceu:raw_amethyst',
        'gtceu:raw_apatite',
        'gtceu:raw_barite',
        'gtceu:raw_bastnasite',
        'gtceu:raw_beryllium',
        'gtceu:raw_bauxite',
        'gtceu:raw_certus_quartz',
        'gtceu:raw_chromite',
        'gtceu:raw_cobaltite',
        'gtceu:raw_coal',
        'minecraft:raw_copper',
        'gtceu:raw_diamond',
        'gtceu:raw_emerald',
        'gtceu:raw_galena',
        'minecraft:raw_gold',
        'gtceu:raw_graphite',
        'gtceu:raw_green_sapphire',
        'minecraft:raw_iron',
        'gtceu:raw_lapis',
        "gtceu:star_matter_nugget",
        "gtceu:antimony_trifluoride_dust",
        "minecraft:netherite_scrap",
        "minecraft:gunpowder",
        "gtceu:raw_tricalcium_phosphate",
        "gtceu:raw_pyrochlore"
    ];

    const recipe_basic_ores_1 = event.recipes.gtceu.orbital_miner('orbitalminer_basic_ores1')
        .notConsumable('kubejs:drilling_projector_module')
        .circuit(1)
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.UIV]);

    basic_ores_1.forEach((ore) => {
        recipe_basic_ores_1.itemOutputsRanged(ore, 1000, 5000);
    });

    const basic_ores_2 = [
        "gtceu:raw_lead",
        "gtceu:raw_molybdenite",
        "gtceu:raw_naquadah",
        "gtceu:raw_nickel",
        "gtceu:raw_platinum",
        "gtceu:raw_plutonium",
        "gtceu:raw_quartzite",
        "gtceu:raw_redstone",
        "gtceu:raw_salt",
        "gtceu:raw_saltpeter",
        "gtceu:raw_silver",
        "gtceu:raw_sphalerite",
        "gtceu:raw_stibnite",
        "gtceu:raw_sulfur",
        "gtceu:raw_tantalite",
        "gtceu:raw_tin",
        "gtceu:raw_uraninite",
        "gtceu:raw_vanadium_magnetite",
        "gtceu:raw_zeolite",
        "minecraft:ender_pearl",
        "gtceu:rare_earth_dust",
        "minecraft:glowstone_dust",
        "gtceu:borax_dust",
        "gtceu:raw_kyanite",
        "gtceu:raw_cassiterite",
        "gtceu:raw_lithium"
    ];

    const recipe_basic_ores_2 = event.recipes.gtceu.orbital_miner('orbitalminer_basic_ores2')
        .notConsumable('kubejs:drilling_projector_module')
        .circuit(2)
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.UIV]);

    basic_ores_2.forEach((ore) => {
        recipe_basic_ores_2.itemOutputsRanged(ore, 1000, 5000);
    });

    // Adding new non-consumable and the ad_extendra ores later with a different non-consumable
    const ad_astra_ores = [
        "ad_astra:raw_desh",
        "ad_astra:raw_ostrum",
        "ad_astra:raw_calorite"
        /*
        "ad_extendra:raw_juperium",
        "ad_extendra:raw_saturlyte",
        "ad_extendra:raw_uranium",
        "ad_extendra:raw_neptunium",
        "ad_extendra:raw_radium",
        "ad_extendra:raw_plutonium",
        "ad_extendra:raw_electrolyte"
        */
    ];

    const recipe_ad_astra_ores = event.recipes.gtceu.orbital_miner('orbitalminer_ad_astra_ores')
        .notConsumable('kubejs:drilling_projector_module')
        .circuit(3)
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.UIV]);

    ad_astra_ores.forEach((ore) => {
        recipe_ad_astra_ores.itemOutputsRanged(ore, 1000, 5000);
    });

    event.recipes.gtceu.orbital_miner('orbitalminer_advanced_ores')
        .notConsumable('kubejs:drilling_projector_module')
        .circuit(4)
        .itemOutputsRanged('gtceu:raw_cosmic_iridium', 50, 500)
        .itemOutputsRanged('gtceu:raw_cosmic_neutronium', 50, 500)
        .itemOutputsRanged('gtceu:raw_cosmic_osmium', 50, 500)
        .itemOutputsRanged('gtceu:raw_cosmic_titanium', 50, 500)
        .itemOutputsRanged('gtceu:raw_cosmic_tungsten', 50, 500)
        .itemOutputsRanged('gtceu:raw_draconium', 50, 500)
        .itemOutputsRanged('gtceu:raw_kaemite', 50, 500)
        .itemOutputsRanged('gtceu:raw_resonant_essence', 50, 500)
        .itemOutputsRanged('gtceu:raw_resonant_naquadah', 50, 500)
        .itemOutputsRanged('kubejs:stable_matter', 50, 500)
        .itemOutputsRanged('kubejs:exotic_matter', 50, 500)
        .itemOutputsRanged('kubejs:rad_primary_resonant_particles', 50, 500)
        .duration(20 * 4000)
        .EUt(GTValues.VA[GTValues.UIV])


    event.recipes.gtceu.orbital_miner('orbitalminer_advanced_ores_uxv')
        .notConsumable('kubejs:dimensional_orbital_mining_module')
        .circuit(4)
        .itemOutputsRanged('gtceu:raw_cosmic_iridium', 500, 5000)
        .itemOutputsRanged('gtceu:raw_cosmic_neutronium', 500, 5000)
        .itemOutputsRanged('gtceu:raw_cosmic_osmium', 500, 5000)
        .itemOutputsRanged('gtceu:raw_cosmic_titanium', 500, 5000)
        .itemOutputsRanged('gtceu:raw_cosmic_tungsten', 500, 5000)
        .itemOutputsRanged('gtceu:raw_draconium', 500, 5000)
        .itemOutputsRanged('gtceu:raw_kaemite', 500, 5000)
        .itemOutputsRanged('gtceu:raw_resonant_essence', 500, 5000)
        .itemOutputsRanged('gtceu:raw_resonant_naquadah', 500, 5000)
        .itemOutputsRanged('kubejs:stable_matter', 500, 5000)
        .itemOutputsRanged('kubejs:exotic_matter', 500, 5000)
        .itemOutputsRanged('kubejs:rad_primary_resonant_particles', 500, 5000)
        .duration(20 * 4000)
        .EUt(GTValues.VA[GTValues.UIV])

})
