// priority: 100

ServerEvents.recipes(event => {
    // Multiblock Controller
    event.recipes.gtceu.assembler('solar_alloy_forge_controller')
        .itemInputs(
            '4x kubejs:orbital_solar_casing',
            '64x gtceu:alloy_blast_smelter',
            '4x kubejs:orbital_solar_casing',
            '64x gtceu:alloy_blast_smelter',
            '4x #gtceu:circuits/uiv',
            '64x gtceu:alloy_blast_smelter',
            '4x kubejs:orbital_solar_casing',
            '64x gtceu:alloy_blast_smelter',
            '4x kubejs:orbital_solar_casing'
        )
        .inputFluids('gtceu:antimatter 20000')
        .itemOutputs('gtceu:solar_alloy_forge')
        .duration(20 * 240)
        .EUt(GTValues.VA[GTValues.UEV])

    // Solar Forging
    event.recipes.gtceu.solar_forging('liquid_solar_eclipse_alloy')
        .itemInputs(
            '64x gtceu:naquadah_dust',
            '64x gtceu:enriched_naquadah_dust',
            '64x gtceu:naquadah_alloy_dust',
            '64x gtceu:naquadria_dust',
            '64x gtceu:cosmic_neutronium_dust'
        )
        .inputFluids(
            'gtceu:antimatter 5000',
            'gtceu:awakened_draconium 9216'
        )
        .itemOutputs(
            '16x draconicevolution:awakened_draconium_ingot',
            '16x avaritia:neutron_ingot'
        )
        .outputFluids(
            'gtceu:solar_eclipse_alloy 92160',
            'gtceu:naquadah 2304',
            'gtceu:enriched_naquadah 2304',
            'gtceu:naquadah_alloy 2304',
            'gtceu:naquadria 2304'
        )
        .duration(20 * 240)
        .EUt(GTValues.VA[GTValues.UEV])

    // Solar Alloy Smelting
    event.recipes.gtceu.solar_alloy_smelting('solar_battery_alloy')
        .itemInputs(
            '64x gtceu:lead_dust',
            '16x gtceu:antimony_dust'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            'gtceu:battery_alloy 115200'
        )
        .circuit(5)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_bismuth_bronze')
        .itemInputs(
            '16x gtceu:bismuth_dust',
            '16x gtceu:zinc_dust',
            '48x gtceu:copper_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 80000'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            'gtceu:bismuth_bronze 115200'
        )
        .circuit(13)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_black_bronze')
        .itemInputs(
            '16x gtceu:gold_dust',
            '16x gtceu:silver_dust',
            '48x gtceu:copper_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 80000'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            'gtceu:black_bronze 115200'
        )
        .circuit(13)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_black_steel')
        .itemInputs(
            '16x gtceu:nickel_dust',
            '16x gtceu:black_bronze_dust',
            '48x gtceu:steel_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 80000'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            'gtceu:black_steel 115200'
        )
        .circuit(13)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_blue_alloy')
        .itemInputs(
            '16x gtceu:silver_dust',
            '64x gtceu:electrotine_dust'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            'gtceu:blue_alloy 23040'
        )
        .circuit(5)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_blue_steel')
        .itemInputs(
            '16x gtceu:sterling_silver_dust',
            '16x gtceu:bismuth_bronze_dust',
            '32x gtceu:steel_dust',
            '64x gtceu:black_steel_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 128000'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            'gtceu:blue_steel 184320'
        )
        .circuit(14)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_borosilicate_glass')
        .itemInputs(
            '112x gtceu:glass_dust',
            '16x gtceu:boron_dust'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:borosilicate_glass 184320"
        )
        .circuit(8)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_brass')
        .itemInputs(
            '48x gtceu:copper_dust',
            '16x gtceu:zinc_dust'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:brass 92160"
        )
        .circuit(4)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_bronze')
        .itemInputs(
            '48x gtceu:copper_dust',
            '16x gtceu:tin_dust'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:bronze 92160"
        )
        .circuit(4)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_cobalt_brass')
        .itemInputs(
            '112x gtceu:brass_dust',
            '16x gtceu:aluminium_dust',
            '16x gtceu:cobalt_dust'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:cobalt_brass 207360"
        )
        .circuit(9)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_cupronickel')
        .itemInputs(
            '16x gtceu:copper_dust',
            '16x gtceu:nickel_dust'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:cupronickel 46080"
        )
        .circuit(2)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_electrum')
        .itemInputs(
            '16x gtceu:gold_dust',
            '16x gtceu:silver_dust'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:electrum 46080"
        )
        .circuit(2)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_enriched_naquadah_trinium_europium_duranide')
        .itemInputs(
            '16x gtceu:enriched_naquadah_dust',
            '48x gtceu:trinium_dust',
            '32x gtceu:europium_dust',
            '16x gtceu:duranium_dust'
        )
        .inputFluids(
            'gtceu:argon 8000'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:enriched_naquadah_trinium_europium_duranide 230400"
        )
        .circuit(14)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_gallium_arsenide')
        .itemInputs(
            '16x gtceu:arsenic_dust',
            '16x gtceu:gallium_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 32000'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:gallium_arsenide 46080"
        )
        .circuit(12)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_hastelloy_c_276')
        .itemInputs(
            '192x gtceu:nickel_dust',
            '128x gtceu:molybdenum_dust',
            '112x gtceu:chromium_dust',
            '16x gtceu:tungsten_dust',
            '16x gtceu:cobalt_dust',
            '16x gtceu:copper_dust'
        )
        .inputFluids(
            'gtceu:argon 24000'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:hastelloy_c_276 691200"
        )
        .circuit(16)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_hastelloy_x')
        .itemInputs(
            '128x gtceu:nickel_dust',
            '48x gtceu:iron_dust',
            '64x gtceu:tungsten_dust',
            '32x gtceu:molybdenum_dust',
            '16x gtceu:chromium_dust',
            '16x gtceu:niobium_dust'
        )
        .inputFluids(
            'gtceu:argon 15200'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:hastelloy_x 437760"
        )
        .circuit(16)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_hsla_steel')
        .itemInputs(
            '32x gtceu:invar_dust',
            '16x gtceu:vanadium_dust',
            '16x gtceu:titanium_dust',
            '16x gtceu:molybdenum_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 80000'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:hsla_steel 115200"
        )
        .circuit(14)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_hsse')
        .itemInputs(
            '96x gtceu:hssg_dust',
            '16x gtceu:cobalt_dust',
            '16x gtceu:manganese_dust',
            '16x gtceu:silicon_dust'
        )
        .inputFluids(
            'gtceu:argon 7200'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:hsse 207360"
        )
        .circuit(14)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_hssg')
        .itemInputs(
            '80x gtceu:tungsten_steel_dust',
            '16x gtceu:chromium_dust',
            '32x gtceu:molybdenum_dust',
            '16x gtceu:vanadium_dust'
        )
        .inputFluids(
            'gtceu:helium 14400'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:hssg 207360"
        )
        .circuit(14)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_hsss')
        .itemInputs(
            '96x gtceu:hssg_dust',
            '32x gtceu:iridium_dust',
            '16x gtceu:osmium_dust'
        )
        .inputFluids(
            'gtceu:argon 7200'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:hsss 207360"
        )
        .duration(20 * 40)
        .circuit(13)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_incoloy_ma_956')
        .itemInputs(
            '64x gtceu:vanadium_steel_dust',
            '32x gtceu:manganese_dust',
            '80x gtceu:aluminium_dust',
            '32x gtceu:yttrium_dust'
        )
        .inputFluids(
            'gtceu:helium 20800'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:incoloy_ma_956 299520"
        )
        .circuit(14)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_indium_tin_barium_titanium_cuprate')
        .itemInputs(
            '64x gtceu:indium_dust',
            '32x gtceu:tin_dust',
            '32x gtceu:barium_dust',
            '16x gtceu:titanium_dust',
            '112x gtceu:copper_dust'
        )
        .inputFluids(
            'gtceu:oxygen 2240000',
            'gtceu:argon 12800'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:indium_tin_barium_titanium_cuprate 368640"
        )
        .circuit(16)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_invar')
        .itemInputs(
            '32x gtceu:iron_dust',
            '16x gtceu:nickel_dust'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:invar 69120"
        )
        .circuit(3)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_kanthal')
        .itemInputs(
            '16x gtceu:iron_dust',
            '16x gtceu:aluminium_dust',
            '16x gtceu:chromium_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 48000'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:kanthal 69120"
        )
        .circuit(13)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_magnalium')
        .itemInputs(
            '16x gtceu:magnesium_dust',
            '32x gtceu:aluminium_dust'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:magnalium 69120"
        )
        .circuit(3)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_magnesium_diboride')
        .itemInputs(
            '16x gtceu:magnesium_dust',
            '32x gtceu:boron_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 48000'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:magnesium_diboride 69120"
        )
        .circuit(12)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_manganese_phosphide')
        .itemInputs(
            '16x gtceu:manganese_dust',
            '16x gtceu:phosphorus_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 32000'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:manganese_phosphide 46080"
        )
        .circuit(12)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_maraging_steel_300')
        .itemInputs(
            '256x gtceu:iron_dust',
            '16x gtceu:titanium_dust',
            '16x gtceu:aluminium_dust',
            '64x gtceu:nickel_dust',
            '32x gtceu:cobalt_dust'
        )
        .inputFluids(
            'gtceu:argon 19200'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:maraging_steel_300 552960"
        )
        .circuit(15)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_mercury_barium_calcium_cuprate')
        .itemInputs(
            '32x gtceu:barium_dust',
            '32x gtceu:calcium_dust',
            '48x gtceu:copper_dust'
        )
        .inputFluids(
            'gtceu:mercury 16000',
            'gtceu:oxygen 128000',
            'gtceu:nitrogen 256000'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:mercury_barium_calcium_cuprate 368640"
        )
        .circuit(15)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_molybdenum_disilicide')
        .itemInputs(
            '16x gtceu:molybdenum_dust',
            '32x gtceu:silicon_dust'
        )
        .inputFluids(
            'gtceu:helium 4800'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:molybdenum_disilicide 69120"
        )
        .circuit(12)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_naquadah_alloy')
        .itemInputs(
            '32x gtceu:naquadah_dust',
            '16x gtceu:osmiridium_dust',
            '16x gtceu:trinium_dust'
        )
        .inputFluids(
            'gtceu:argon 3200'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:naquadah_alloy 92160"
        )
        .circuit(13)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_nichrome')
        .itemInputs(
            '64x gtceu:nickel_dust',
            '16x gtceu:chromium_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 80000'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:nichrome 115200"
        )
        .circuit(12)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_nickel_zinc_ferrite')
        .itemInputs(
            '16x gtceu:nickel_dust',
            '16x gtceu:zinc_dust',
            '64x gtceu:iron_dust'
        )
        .inputFluids(
            'gtceu:oxygen 128000'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:nickel_zinc_ferrite 138240"
        )
        .circuit(6)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_niobium_nitride')
        .itemInputs(
            '16x gtceu:niobium_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 16000',
            'gtceu:helium 3200'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:niobium_nitride 46080"
        )
        .circuit(11)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_niobium_titanium')
        .itemInputs(
            '16x gtceu:niobium_dust',
            '16x gtceu:titanium_dust'
        )
        .inputFluids(
            'gtceu:argon 1600'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:niobium_titanium 46080"
        )
        .circuit(12)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_osmiridium')
        .itemInputs(
            '48x gtceu:iridium_dust',
            '16x gtceu:osmium_dust'
        )
        .inputFluids(
            'gtceu:argon 3200'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:osmiridium 92160"
        )
        .circuit(12)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_potin')
        .itemInputs(
            '96x gtceu:copper_dust',
            '32x gtceu:tin_dust',
            '16x gtceu:lead_dust'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:potin 207360"
        )
        .circuit(9)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_red_alloy')
        .itemInputs(
            '16x gtceu:copper_dust',
            '64x minecraft:redstone'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:red_alloy 23040"
        )
        .circuit(5)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_red_steel')
        .itemInputs(
            '16x gtceu:rose_gold_dust',
            '16x gtceu:brass_dust',
            '32x gtceu:steel_dust',
            '64x gtceu:black_steel_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 128000'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:red_steel 184320"
        )
        .circuit(14)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_rhodium_plated_palladium')
        .itemInputs(
            '48x gtceu:palladium_dust',
            '16x gtceu:rhodium_dust'
        )
        .inputFluids(
            'gtceu:argon 3200'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:rhodium_plated_palladium 92160"
        )
        .circuit(12)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_rose_gold')
        .itemInputs(
            '16x gtceu:copper_dust',
            '64x gtceu:gold_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 80000'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:rose_gold 115200"
        )
        .circuit(12)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_rtm_alloy')
        .itemInputs(
            '64x gtceu:ruthenium_dust',
            '32x gtceu:tungsten_dust',
            '16x gtceu:molybdenum_dust'
        )
        .inputFluids(
            'gtceu:helium 11200'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:rtm_alloy 161280"
        )
        .circuit(13)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_ruridit')
        .itemInputs(
            '32x gtceu:ruthenium_dust',
            '16x gtceu:iridium_dust'
        )
        .inputFluids(
            'gtceu:argon 2400'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:ruridit 69120"
        )
        .circuit(12)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_ruthenium_trinium_americium_neutronate')
        .itemInputs(
            '16x gtceu:ruthenium_dust',
            '32x gtceu:trinium_dust',
            '16x gtceu:americium_dust',
            '32x gtceu:neutronium_dust'
        )
        .inputFluids(
            'gtceu:oxygen 128000',
            'gtceu:neon 5600'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:ruthenium_trinium_americium_neutronate 322560"
        )
        .circuit(15)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_samarium_iron_arsenic_oxide')
        .itemInputs(
            '16x gtceu:samarium_dust',
            '16x gtceu:iron_dust',
            '16x gtceu:arsenic_dust'
        )
        .inputFluids(
            'gtceu:oxygen 16000',
            'gtceu:helium 6400'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:samarium_iron_arsenic_oxide 92160"
        )
        .circuit(14)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_soldering_alloy')
        .itemInputs(
            '96x gtceu:tin_dust',
            '48x gtceu:lead_dust',
            '16x gtceu:antimony_dust'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:soldering_alloy 230400"
        )
        .circuit(10)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_stabilized_iridium')
        .itemInputs(
            '304x gtceu:iridium_dust',
            '128x gtceu:osmium_dust',
            '896x gtceu:chromium_dust',
            '576x gtceu:neutronium_dust',
            '96x gtceu:lead_dust',
            '32x gtceu:platinum_dust'
        )
        .inputFluids(
            'gtceu:radon 16000',
            'gtceu:krypton 20480'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:stabilized_iridium 2949120"
        )
        .circuit(17)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_stainless_steel')
        .itemInputs(
            '96x gtceu:iron_dust',
            '16x gtceu:chromium_dust',
            '16x gtceu:manganese_dust',
            '16x gtceu:nickel_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 144000'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:stainless_steel 207360"
        )
        .circuit(14)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_stellite_100')
        .itemInputs(
            '64x gtceu:iron_dust',
            '48x gtceu:chromium_dust',
            '32x gtceu:tungsten_dust',
            '16x gtceu:molybdenum_dust'
        )
        .inputFluids(
            'gtceu:argon 8000'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:stellite_100 230400"
        )
        .circuit(14)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_sterling_silver')
        .itemInputs(
            '16x gtceu:copper_dust',
            '64x gtceu:silver_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 80000'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:sterling_silver 115200"
        )
        .circuit(12)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_tantalum_carbide')
        .itemInputs(
            '16x gtceu:tantalum_dust',
            '16x gtceu:carbon_dust'
        )
        .inputFluids(
            'gtceu:helium 3200'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:tantalum_carbide 46080"
        )
        .circuit(12)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_tin_alloy')
        .itemInputs(
            '16x gtceu:iron_dust',
            '16x gtceu:tin_dust'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:tin_alloy 46080"
        )
        .circuit(2)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_titanium_carbide')
        .itemInputs(
            '16x gtceu:titanium_dust',
            '16x gtceu:carbon_dust'
        )
        .inputFluids(
            'gtceu:helium 3200'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:titanium_carbide 46080"
        )
        .circuit(12)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_titanium_tungsten_carbide')
        .itemInputs(
            '32x gtceu:titanium_carbide_dust',
            '16x gtceu:tungsten_carbide_dust'
        )
        .inputFluids(
            'gtceu:argon 2400'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:titanium_tungsten_carbide 69120"
        )
        .circuit(12)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_tungsten_carbide')
        .itemInputs(
            '16x gtceu:tungsten_dust',
            '16x gtceu:carbon_dust'
        )
        .inputFluids(
            'gtceu:helium 3200'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:tungsten_carbide 46080"
        )
        .circuit(12)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_tungsten_steel')
        .itemInputs(
            '16x gtceu:steel_dust',
            '16x gtceu:tungsten_dust'
        )
        .inputFluids(
            'gtceu:helium 3200'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:tungsten_steel 46080"
        )
        .circuit(12)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_ultimet')
        .itemInputs(
            '80x gtceu:cobalt_dust',
            '32x gtceu:chromium_dust',
            '16x gtceu:nickel_dust',
            '16x gtceu:molybdenum_dust'
        )
        .inputFluids(
            'gtceu:helium 14400'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:ultimet 207360"
        )
        .circuit(14)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_uranium_rhodium_dinaquadide')
        .itemInputs(
            '16x gtceu:uranium_dust',
            '16x gtceu:rhodium_dust',
            '16x gtceu:naquadah_dust'
        )
        .inputFluids(
            'gtceu:argon 3200'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:uranium_rhodium_dinaquadide 92160"
        )
        .circuit(13)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_uranium_triplatinum')
        .itemInputs(
            '16x gtceu:uranium_dust',
            '48x gtceu:platinum_dust'
        )
        .inputFluids(
            'gtceu:helium 6400'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:uranium_triplatinum 92160"
        )
        .circuit(12)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_vanadium_gallium')
        .itemInputs(
            '48x gtceu:vanadium_dust',
            '16x gtceu:gallium_dust'
        )
        .inputFluids(
            'gtceu:argon 3200'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:vanadium_gallium 92160"
        )
        .circuit(12)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_vanadium_steel')
        .itemInputs(
            '16x gtceu:vanadium_dust',
            '16x gtceu:chromium_dust',
            '112x gtceu:steel_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 144000'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:vanadium_steel 207360"
        )
        .circuit(13)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_watertight_steel')
        .itemInputs(
            '112x gtceu:iron_dust',
            '64x gtceu:aluminium_dust',
            '32x gtceu:nickel_dust',
            '16x gtceu:chromium_dust',
            '16x gtceu:sulfur_dust'
        )
        .inputFluids(
            'gtceu:helium 24000'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:watertight_steel 345600"
        )
        .circuit(15)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_yttrium_barium_cuprate')
        .itemInputs(
            '16x gtceu:yttrium_dust',
            '32x gtceu:barium_dust',
            '48x gtceu:copper_dust'
        )
        .inputFluids(
            'gtceu:oxygen 112000',
            'gtceu:argon 10400'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:yttrium_barium_cuprate 299520"
        )
        .circuit(14)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.solar_alloy_smelting('solar_zeron_100')
        .itemInputs(
            '160x gtceu:iron_dust',
            '32x gtceu:nickel_dust',
            '32x gtceu:tungsten_dust',
            '16x gtceu:niobium_dust',
            '16x gtceu:cobalt_dust'
        )
        .inputFluids(
            'gtceu:helium 25600'
        )
        .perTick(true)
        .inputFluids(
            'gtceu:antimatter 50',
            'gtceu:solar_eclipse_alloy 144'
        )
        .perTick(false)
        .outputFluids(
            "gtceu:zeron_100 368640"
        )
        .circuit(15)
        .duration(20 * 40)
        .EUt(GTValues.VA[GTValues.UEV])
});