ServerEvents.recipes(event => {
    event.recipes.gtceu.distillation_facility('mega_logproc')
        .itemInputs('80000x #minecraft:logs_that_burn')
        .inputFluids('gtceu:nitrogen 5000000')
        .outputFluids(
            'gtceu:acetone 230000',
            'gtceu:acetic_acid 460000',
            'gtceu:benzene 1400000',
            'gtceu:carbon_dioxide 1960000',
            'gtceu:carbon_monoxide 1360000',
            'gtceu:dimethylbenzene 1200000',
            'gtceu:ethylene 80000',
            'gtceu:ethanol 460000',
            'gtceu:hydrogen 80000',
            'gtceu:lubricant 5666000',
            'gtceu:methane 520000',
            'gtceu:methanol 1380000',
            'gtceu:methyl_acetate 46000',
            'minecraft:water 2300000',
            'gtceu:toluene 298000',
            'gtceu:phenol 298000'
        )
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.distillation_facility('mega_coalproc')
        .itemInputs('48000x minecraft:coal')
        .inputFluids(
            'gtceu:steam 3000000',
            'gtceu:nitrogen 3000000'
        )
        .outputFluids(
            'gtceu:carbon_dioxide 3000000',
            'gtceu:ammonia 3600000',
            'gtceu:ethylbenzene 3000000',
            'gtceu:phenol 1440000',
            'gtceu:naphthalene 5760000',
            'gtceu:hydrogen_sulfide 4320000',
            'gtceu:lubricant 5440000'
        )
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.distillation_facility('mega_bioproc')
        .itemInputs('8000x gtceu:bio_chaff')
        .inputFluids('minecraft:water 10000000')
        .outputFluids(
            'gtceu:methane 3600000',
            'gtceu:methanol 900000',
            'gtceu:ammonia 600000',
            'gtceu:carbon_dioxide 2400000',
            'gtceu:acetic_acid 148000',
            'gtceu:ethanol 3900000',
            'minecraft:water 3748000'
        )
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.distillation_facility('mega_oil')
        .inputFluids(
            '#forge:oil 500000',
            'gtceu:oil_light 1500000',
            'gtceu:oil_medium 1000000',
            'gtceu:oil_heavy 1000000'
        )
        .outputFluids(
            'gtceu:methane 7516700',
            'gtceu:hydrogen 5964000',
            'gtceu:helium 84000',
            'gtceu:propene 581900',
            'gtceu:ethane 1937100',
            'gtceu:ethylene 828200',
            'gtceu:propane 701100',
            'gtceu:butane 895200',
            'gtceu:benzene 652600',
            'gtceu:butene 202200',
            'gtceu:butadiene 199100',
            'gtceu:toluene 135700',
            'gtceu:octane 49500'
        )
        .circuit(1)
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.distillation_facility('air_distillation')
        .inputFluids(
            'gtceu:air 50000000'
        )
        .outputFluids(
            'gtceu:helium 1000000',
            'gtceu:argon 500000',
            'gtceu:nitrogen 35000000',
            'gtceu:oxygen 11000000',
            'gtceu:carbon_dioxide 2500000'
        )
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.distillation_facility('nether_air_distillation')
        .inputFluids(
            'gtceu:nether_air 100000000'
        )
        .outputFluids(
            'gtceu:sulfur_dioxide 7500000',
            'gtceu:helium_3 2500000',
            'gtceu:neon 500000',
            'gtceu:carbon_monoxide 72000000',
            'gtceu:coal_gas 10000000',
            'gtceu:hydrogen_sulfide 7500000'
        )
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.distillation_facility('ender_air_distillation')
        .inputFluids(
            'gtceu:ender_air 200000000'
        )
        .outputFluids(
            'gtceu:radon 1000000',
            'gtceu:tritium 10000000',
            'gtceu:krypton 1000000',
            'gtceu:xenon 1000000',
            'gtceu:nitrogen_dioxide 122000000',
            'gtceu:deuterium 50000000',
            'gtceu:helium 15000000'
        )
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.distillation_facility('sulfuric_oils')
        .inputFluids(
            '#forge:oil 5000000',
            'gtceu:oil_light 15000000',
            'gtceu:oil_medium 10000000',
            'gtceu:oil_heavy 10000000'
        )
        .outputFluids(
            'gtceu:sulfuric_gas 42000000',
            'gtceu:sulfuric_heavy_fuel 28500000',
            'gtceu:sulfuric_light_fuel 16500000',
            'gtceu:sulfuric_naphtha 21500000'
        )
        .duration(20 * 5)
        .circuit(2)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.distillation_facility('non_sulfuric_oils')
        .inputFluids(
            '#forge:oil 5000000',
            'gtceu:oil_light 15000000',
            'gtceu:oil_medium 10000000',
            'gtceu:oil_heavy 10000000'
        )
        .outputFluids(
            'gtceu:refinery_gas 42000000',
            'gtceu:heavy_fuel 28500000',
            'gtceu:light_fuel 16500000',
            'gtceu:naphtha 21500000'
        )
        .duration(20 * 5)
        .circuit(3)
        .EUt(GTValues.VA[GTValues.UV]);
})