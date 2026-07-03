/// M O N I F A C T O R Y   C O D E /// M O N I F A C T O R Y   C O D E ///
/// M O N I F A C T O R Y   C O D E /// M O N I F A C T O R Y   C O D E ///
/// M O N I F A C T O R Y   C O D E /// M O N I F A C T O R Y   C O D E ///


ServerEvents.recipes(event => {
    const transformer = [
        ['uhv', 'ruthenium_trinium_americium_neutronate', 'crystal_matrix'],
        ['uev', 'cosmic_neutronium', 'draconium'],
        ['uiv', 'awakened_draconium', 'chaos'],
        ['uxv', 'chaos', 'chaos'],
    ]

    transformer.forEach(([tier, mat1, mat2]) => {
        event.shaped(Item.of(`gtceu:${tier}_transformer_1a`), [
            'WBB',
            'AH ',
            'WBB'
        ], {
            A: `gtceu:${mat1}_single_wire`,
            B: `gtceu:${mat2}_single_wire`,
            H: `gtceu:${tier}_machine_hull`,
            W: 'kubejs:highly_resonative_soc'
        })
        event.shaped(Item.of(`gtceu:${tier}_transformer_2a`), [
            'WBB',
            'AH ',
            'WBB'
        ], {
            A: `gtceu:${mat1}_double_wire`,
            B: `gtceu:${mat2}_double_wire`,
            H: `gtceu:${tier}_machine_hull`,
            W: 'kubejs:highly_resonative_soc'
        })
        event.shaped(Item.of(`gtceu:${tier}_transformer_4a`), [
            'WBB',
            'AH ',
            'WBB'
        ], {
            A: `gtceu:${mat1}_quadruple_wire`,
            B: `gtceu:${mat2}_quadruple_wire`,
            H: `gtceu:${tier}_machine_hull`,
            W: 'kubejs:highly_resonative_soc'
        })
        event.shaped(Item.of(`gtceu:${tier}_transformer_16a`), [
            'WBB',
            'AH ',
            'WBB'
        ], {
            A: `gtceu:${mat1}_hex_wire`,
            B: `gtceu:${mat2}_hex_wire`,
            H: `gtceu:${tier}_machine_hull`,
            W: 'kubejs:highly_resonative_soc'
        })
    })

    // UEV+ Transformers
    event.remove({ id: "gtceu:assembler/uev_transformer" })
    event.remove({ id: "gtceu:assembler/uev_hi_amp_2a_transformer" })
    event.remove({ id: "gtceu:assembler/uev_hi_amp_4a_transformer" })
    event.remove({ id: "gtceu:assembler/uev_power_transformer" })
    event.remove({ id: "gtceu:assembler/uiv_transformer" })
    event.remove({ id: "gtceu:assembler/uiv_hi_amp_2a_transformer" })
    event.remove({ id: "gtceu:assembler/uiv_hi_amp_4a_transformer" })
    event.remove({ id: "gtceu:assembler/uiv_power_transformer" })
    event.remove({ id: "gtceu:assembler/uxv_transformer" })
    event.remove({ id: "gtceu:assembler/uxv_hi_amp_2a_transformer" })
    event.remove({ id: "gtceu:assembler/uxv_hi_amp_4a_transformer" })
    event.remove({ id: "gtceu:assembler/uxv_power_transformer" })
        
    const transformerTiers = [
        ["uev", "draconium", "cosmic_neutronium", "cosmic_neutronium"],
        ["uiv", "awakened_draconium", "chaos", "awakened_draconium"],
        ["uxv", "awakened_draconium", "hypoxylon", "heavy_duty_alloy_t4"]
    ];

    transformerTiers.forEach(([tier, wireA, wireB, spring]) => {
        const lowercasetier = tier.toLowerCase();
        const energytier = GTValues.VA[GTValues[tier.toUpperCase()]];

        event.recipes.gtceu.assembler(`${lowercasetier}_transformer`)
            .itemInputs(
                `1x gtceu:${lowercasetier}_machine_hull`,
                `1x gtceu:${wireA}_single_wire`,
                `4x gtceu:${wireB}_single_wire`,
                "2x kubejs:highly_resonative_soc")
            .itemOutputs(
                `gtceu:${lowercasetier}_transformer_1a`)
            .duration(20*5)
            .EUt(energytier);

        event.recipes.gtceu.assembler(`${lowercasetier}_hi_amp_2a_transformer`)
            .itemInputs(
                `1x gtceu:${lowercasetier}_transformer_1a`,
                `1x gtceu:${wireA}_double_wire`,
                `4x gtceu:${wireB}_double_wire`,
                "2x kubejs:highly_resonative_soc")
            .itemOutputs(
                `gtceu:${lowercasetier}_transformer_2a`)
            .duration(20*5)
            .EUt(energytier);

        event.recipes.gtceu.assembler(`${lowercasetier}_hi_amp_4a_transformer`)
            .itemInputs(
                `1x gtceu:${lowercasetier}_transformer_1a`,
                `1x gtceu:${wireA}_quadruple_wire`,
                `4x gtceu:${wireB}_quadruple_wire`,
                "2x kubejs:highly_resonative_soc")
            .itemOutputs(
                `gtceu:${lowercasetier}_transformer_4a`)
            .duration(20*5)
            .EUt(energytier);

        event.recipes.gtceu.assembler(`${lowercasetier}_power_transformer`)
            .itemInputs(
                `1x gtceu:${lowercasetier}_transformer_4a`,
                `1x gtceu:${lowercasetier}_electric_pump`,
                `1x gtceu:${wireA}_octal_cable`,
                `1x gtceu:${wireA}_hex_cable`,
                `1x gtceu:small_${spring}_spring`,
                `1x gtceu:${spring}_spring`)
            .inputFluids(
                "gtceu:lubricant 2000")
            .itemOutputs(
                `gtceu:${lowercasetier}_transformer_16a`)
            .duration(20*5)
            .EUt(energytier);
        });


    // OpV Transformers

    event.remove({ id: "gtceu:assembler/opv_transformer" })
    event.remove({ id: "gtceu:assembler/opv_hi_amp_2a_transformer" })
    event.remove({ id: "gtceu:assembler/opv_hi_amp_4a_transformer" })
    event.remove({ id: "gtceu:assembler/opv_power_transformer" })

    event.recipes.gtceu.assembler("opv_transformer")
        .itemInputs(
            "1x gtceu:opv_machine_hull",
            "1x gtceu:awakened_draconium_single_wire",
            "4x gtceu:cosmic_neutronium_single_wire",
            "2x kubejs:highly_resonative_soc")
        .itemOutputs(
            "gtceu:opv_transformer_1a")
        .duration(20*5)
        .EUt((GTValues.VA[GTValues.OpV]));

        event.recipes.gtceu.assembler("opv_hi_amp_2a_transformer")
            .itemInputs(
                "1x gtceu:opv_transformer_1a",
                "1x gtceu:awakened_draconium_double_wire",
                "4x gtceu:cosmic_neutronium_double_wire",
                "2x kubejs:highly_resonative_soc")
            .itemOutputs(
                "gtceu:opv_transformer_2a")
            .duration(20*5)
            .EUt((GTValues.VA[GTValues.OpV]));

        event.recipes.gtceu.assembler("opv_hi_amp_4a_transformer")
            .itemInputs(
                "1x gtceu:opv_transformer_1a",
                "1x gtceu:awakened_draconium_quadruple_wire",
                "4x gtceu:cosmic_neutronium_quadruple_wire",
                "2x kubejs:highly_resonative_soc")
            .itemOutputs(
                "gtceu:opv_transformer_4a")
            .duration(20*5)
            .EUt((GTValues.VA[GTValues.OpV]));

        event.recipes.gtceu.assembler("opv_power_transformer")
            .itemInputs(
                "1x gtceu:opv_transformer_4a",
                "1x gtceu:opv_electric_pump",
                "1x gtceu:awakened_draconium_octal_cable",
                "1x gtceu:awakened_draconium_hex_cable",
                "1x gtceu:small_cosmic_neutronium_spring",
                "1x gtceu:cosmic_neutronium_spring")
            .inputFluids(
                "gtceu:lubricant 2000")
            .itemOutputs(
                "gtceu:opv_transformer_16a")
            .duration(20*5)
            .EUt((GTValues.VA[GTValues.OpV]));


    // no MAX tier laserhatch :1984:
    const laserhatch = [
        ['uev', 'draconium', '1966080'],
        ['uiv', 'awakened_draconium', '3932160'],
    ]

    laserhatch.forEach(([tier, mat1, eut]) => {
        event.recipes.gtceu.assembler(`${tier}_256a_laser_target_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, 'gtceu:diamond_lens', `gtceu:${tier}_emitter`, `gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_single_wire`)
            .itemOutputs(`gtceu:${tier}_256a_laser_target_hatch`)
            .circuit(1)
            .duration(400)
            .EUt(eut)

        event.recipes.gtceu.assembler(`${tier}_256a_laser_source_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, 'gtceu:diamond_lens', `gtceu:${tier}_sensor`, `gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_single_wire`)
            .itemOutputs(`gtceu:${tier}_256a_laser_source_hatch`)
            .circuit(1)
            .duration(400)
            .EUt(eut)

        event.recipes.gtceu.assembler(`${tier}_1024a_laser_target_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, '2x gtceu:diamond_lens', `2x gtceu:${tier}_emitter`, `2x gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_single_wire`)
            .itemOutputs(`gtceu:${tier}_1024a_laser_target_hatch`)
            .circuit(2)
            .duration(400)
            .EUt(eut)

        event.recipes.gtceu.assembler(`${tier}_1024a_laser_source_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, '2x gtceu:diamond_lens', `2x gtceu:${tier}_sensor`, `2x gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_double_wire`)
            .itemOutputs(`gtceu:${tier}_1024a_laser_source_hatch`)
            .circuit(2)
            .duration(400)
            .EUt(eut)

        event.recipes.gtceu.assembler(`${tier}_4096a_laser_target_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, '4x gtceu:diamond_lens', `4x gtceu:${tier}_emitter`, `4x gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_quadruple_wire`)
            .itemOutputs(`gtceu:${tier}_4096a_laser_target_hatch`)
            .circuit(3)
            .duration(400)
            .EUt(eut)

        event.recipes.gtceu.assembler(`${tier}_4096a_laser_source_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, '4x gtceu:diamond_lens', `4x gtceu:${tier}_sensor`, `4x gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_quadruple_wire`)
            .itemOutputs(`gtceu:${tier}_4096a_laser_source_hatch`)
            .circuit(3)
            .duration(400)
            .EUt(eut)
    })

})

ServerEvents.recipes(sog => {

    sog.recipes.gtceu.quantum_station("qdm")
        .inputFluids(
            "gtceu:oganesson 32",
            "gtceu:nihonium 32")
        .itemInputs(
            "gtceu:data_module")
        .itemOutputs(
            "kubejs:quantum_data_module")
        .EUt((GTValues.VA[GTValues.UEV]))
        .totalCWU(256*500)
        .CWUt(256)

    sog.recipes.gtceu.hgim("kubejs:space_time_heavy_plating")
        .notConsumable(
            "kubejs:gravitational_containment_cell")
        .itemInputs(
            "7x gtceu:dense_hypoxylon_plate",
            "kubejs:quantum_energy_capsule")
        .itemInputs(
            "31x gtceu:double_space_time_plate")
        .inputFluids(
            "gtceu:nihonium 144*16",
            "gtceu:oganesson 144*16")
        .itemOutputs(
            "kubejs:space_time_heavy_plating")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(20*60)

    sog.recipes.gtceu.extruder("nan_certificate")
        .itemInputs(
            "64x gtceu:dense_infinity_plate")
        .itemInputs(
            "64x gtceu:dense_infinity_plate")
        .itemOutputs(
            "gtceu:nan_certificate")
        .duration(3600*20*2)
        .EUt((GTValues.VA[GTValues.OpV]))

    const plating = ["neutronium", "chaos", "infinity", "cosmic_neutronium", "draconium", "awakened_draconium", "californite", "eternity"]
        plating.forEach((plate) => {
            sog.recipes.gtceu.hgim("kubejs:" + plate + "_heavy_plating")
                .notConsumable(
                    "kubejs:gravitational_containment_cell")
                .itemInputs(
                    "7x gtceu:dense_hypoxylon_plate",
                    "kubejs:quantum_energy_capsule")
                .itemInputs(
                    "7x gtceu:dense_" + plate + "_plate")
                .inputFluids(
                    "gtceu:nihonium 144*16",
                    "gtceu:oganesson 144*16")
                .itemOutputs(
                    "kubejs:" + plate + "_heavy_plating")
                .EUt(GTValues.VA[GTValues.UEV])
                .duration(20*60)
        })
})