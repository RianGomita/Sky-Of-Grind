ServerEvents.recipes(sog => {
    // Random Stuff

    exdeorum.setCrucibleHeatValueForState("minecraft:lightning_rod", 80);
    
    sog.remove({ id: "gtceu:shaped/white_carpet" })
    
    // Replacings

    sog.replaceInput( {id: "gtceu:assembly_line/electric_pump_uv"},
        "gtceu:silicone_rubber_ring",
        "gtceu:neoprene_ring")

    sog.replaceInput( {id: "gtceu:assembly_line/conveyor_module_uv"},
        "gtceu:styrene_butadiene_rubber",
        "gtceu:neoprene")
        

    // Auto Turbo Chargers UEV+

    const autoChargerWires = [
        ["uev", "kaemite"],
        ["uiv", "awakened_draconium"],
        ["uxv", "hypoxylon"],
        ["opv", "cosmic_neutronium"]
        ];

    autoChargerWires.forEach(([tier, material]) => {
        sog.replaceInput(
            { id: `gtmutils:shaped/${tier}_auto_charger_4x` },
            "gtceu:lead_quadruple_wire",
            `gtceu:${material}_quadruple_wire`
        );
    });


    // Diode UIV+

    const diodeTiers = [
        "uiv",
        "uxv",
        "opv"
    ];

    diodeTiers.forEach(tier => {
        sog.replaceInput(
            { id: `gtceu:shaped/${tier}_diode` },
            "gtceu:advanced_smd_diode",
            "kubejs:complex_smd_diode"
            );
        });


    // UEV Singleblocks - Kaemite, Draconium, Resonant Essence

    const UEVSingleBlockInputReplacement = { id: /^gtceu:shaped\/uev_.*/ };
    [
        ["gtceu:tin_single_wire", "gtceu:draconium_single_wire"],
        ["gtceu:gold_single_wire", "gtceu:resonant_essence_single_wire"],
        ["gtceu:copper_double_wire", "gtceu:kaemite_double_wire"],
        ["gtceu:copper_quadruple_wire", "gtceu:resonant_essence_quadruple_wire"],
        ["gtceu:lead_quadruple_wire", "gtceu:kaemite_quadruple_wire"],
        ["gtceu:lead_octal_wire", "gtceu:resonant_essence_octal_wire"],
        ["gtceu:lead_hex_wire", "gtceu:resonant_essence_hex_wire"],
        ["gtceu:red_alloy_single_cable", "gtceu:draconium_single_cable"],
        ["gtceu:red_alloy_quadruple_cable", "gtceu:draconium_quadruple_cable"],
        ["#forge:glass", "kubejs:atomic_alloy_plated_glass"],
        ["#ad_astra:iron_rods", "gtceu:kaemite_rod"],
        ["#forge:plates/iron", "gtceu:kaemite_plate"],
        ["gtceu:bronze_normal_fluid_pipe", "gtceu:europium_normal_fluid_pipe"],
        ["gtceu:tin_rotor", "gtceu:resonant_essence_rotor"]
    ].forEach(([from, to]) => {
        sog.replaceInput(UEVSingleBlockInputReplacement, from, to);
    });

    // UIV Singleblocks - Awakened Draconium, Chaos

    const UIVSingleBlockInputReplacement = { id: /^gtceu:shaped\/uiv_.*/ };
    [
        ["gtceu:tin_single_wire", "gtceu:awakened_draconium_single_wire"],
        ["gtceu:gold_single_wire", "gtceu:chaos_single_wire"],
        ["gtceu:copper_double_wire", "gtceu:chaos_double_wire"],
        ["gtceu:copper_quadruple_wire", "gtceu:chaos_quadruple_wire"],
        ["gtceu:lead_quadruple_wire", "gtceu:awakened_draconium_quadruple_wire"],
        ["gtceu:lead_octal_wire", "gtceu:chaos_octal_wire"],
        ["gtceu:lead_hex_wire", "gtceu:chaos_hex_wire"],
        ["gtceu:red_alloy_single_cable", "gtceu:awakened_draconium_single_cable"],
        ["gtceu:red_alloy_quadruple_cable", "gtceu:awakened_draconium_quadruple_cable"],
        ["#forge:glass", "kubejs:fusion_glass_mk2"],
        ["#ad_astra:iron_rods", "gtceu:awakened_draconium_rod"],
        ["#forge:plates/iron", "gtceu:awakened_draconium_plate"],
        ["gtceu:bronze_normal_fluid_pipe", "gtceu:europium_normal_fluid_pipe"],
        ["gtceu:tin_rotor", "gtceu:awakened_draconium_rotor"]
    ].forEach(([from, to]) => {
        sog.replaceInput(UIVSingleBlockInputReplacement, from, to);
    });

    // UXV Singleblocks - Hypoxylon, Cosmic Duty Alloy

    const UXVSingleBlockInputReplacement = { id: /^gtceu:shaped\/uxv_.*/ };
    [
        ["gtceu:tin_single_wire", "gtceu:hypoxylon_single_wire"],
        ["gtceu:gold_single_wire", "gtceu:heavy_duty_alloy_t4_single_wire"],
        ["gtceu:copper_double_wire", "gtceu:chaos_double_wire"],
        ["gtceu:copper_quadruple_wire", "gtceu:chaos_quadruple_wire"],
        ["gtceu:lead_quadruple_wire", "gtceu:hypoxylon_quadruple_wire"],
        ["gtceu:lead_octal_wire", "gtceu:hypoxylon_octal_wire"],
        ["gtceu:lead_hex_wire", "gtceu:hypoxylon_hex_wire"],
        ["gtceu:red_alloy_single_cable", "gtceu:awakened_draconium_single_cable"],
        ["gtceu:red_alloy_quadruple_cable", "gtceu:awakened_draconium_quadruple_cable"],
        ["#forge:glass", "kubejs:fusion_glass_mk2"],
        ["#ad_astra:iron_rods", "gtceu:hypoxylon_rod"],
        ["#forge:plates/iron", "gtceu:hypoxylon_plate"],
        ["gtceu:bronze_normal_fluid_pipe", "gtceu:europium_normal_fluid_pipe"],
        ["gtceu:tin_rotor", "gtceu:heavy_duty_alloy_t4_rotor"]
    ].forEach(([from, to]) => {
        sog.replaceInput(UXVSingleBlockInputReplacement, from, to);
    });

    // OpV Singleblocks - Cosmic Neutronium

    const OpVSingleBlockInputReplacement = { id: /^gtceu:shaped\/opv_.*/ };
    [
        ["gtceu:tin_single_wire", "gtceu:cosmic_neutronium_single_wire"],
        ["gtceu:gold_single_wire", "gtceu:hypoxylon_single_wire"],
        ["gtceu:copper_double_wire", "gtceu:chaos_double_wire"],
        ["gtceu:copper_quadruple_wire", "gtceu:chaos_quadruple_wire"],
        ["gtceu:lead_quadruple_wire", "gtceu:cosmic_neutronium_quadruple_wire"],
        ["gtceu:lead_octal_wire", "gtceu:cosmic_neutronium_octal_wire"],
        ["gtceu:lead_hex_wire", "gtceu:cosmic_neutronium_hex_wire"],
        ["gtceu:red_alloy_single_cable", "gtceu:awakened_draconium_single_cable"],
        ["gtceu:red_alloy_quadruple_cable", "gtceu:awakened_draconium_quadruple_cable"],
        ["#forge:glass", "kubejs:fusion_glass_mk2"],
        ["#ad_astra:iron_rods", "gtceu:cosmic_neutronium_rod"],
        ["#forge:plates/iron", "gtceu:cosmic_neutronium_plate"],
        ["gtceu:bronze_normal_fluid_pipe", "gtceu:europium_normal_fluid_pipe"],
        ["gtceu:tin_rotor", "gtceu:cosmic_neutronium_rotor"]
    ].forEach(([from, to]) => {
        sog.replaceInput(OpVSingleBlockInputReplacement, from, to);
    });


    // Const Stuff


    const ebfHeavyAlloyRecipe = (tier, fluidInput, temperature, voltage, durationInSeconds) => {
        const GAS_BOOST = 0.67
        const idBase = `heavy_duty_alloy_t${tier}`

        sog.recipes.gtceu.electric_blast_furnace(`blast_${idBase}`)
            .itemInputs(
                `gtceu:${idBase}_dust`)
            .itemOutputs(
                `gtceu:${idBase}_ingot`)
            .blastFurnaceTemp(temperature)
            .duration(20 * durationInSeconds)
            .circuit(1)
            .EUt(GTValues.VA[GTValues[voltage]])

        sog.recipes.gtceu.electric_blast_furnace(`blast_${idBase}_gas`)
            .itemInputs(
                `gtceu:${idBase}_dust`)
            .inputFluids(fluidInput)
            .itemOutputs(
                `gtceu:${idBase}_ingot`)
            .blastFurnaceTemp(temperature)
            .duration(20 * durationInSeconds * GAS_BOOST)
            .circuit(2)
            .EUt(GTValues.VA[GTValues[voltage]])
    }

    ebfHeavyAlloyRecipe(1, "gtceu:nitrogen 1000", 3500, "HV", 45)
    ebfHeavyAlloyRecipe(2, "gtceu:argon 50", 5100, "LuV", 60)
    ebfHeavyAlloyRecipe(3, "gtceu:krypton 10", 9600, "UHV", 65)


    // Machine Recipes





    sog.recipes.gtceu.macerator("gypsummacerator")
        .itemInputs(
            "4x exdeorum:dust")
        .itemOutputs(
            "gtceu:gypsum_dust")
        .duration(15)
        .EUt(2)

    sog.recipes.gtceu.coke_oven("sulfur")
        .itemInputs(
            "16x gtceu:stone_dust")
        .itemOutputs(
            "16x gtceu:sulfur_dust")
        .outputFluids(
            "exdeorum:witch_water 16000")
        .duration(40)

    sog.recipes.gtceu.coke_oven("graphite")
        .itemInputs(
            "64x gtceu:raw_coal")
        .itemOutputs(
            "8x gtceu:graphite_dust")
        .outputFluids(
            "gtceu:creosote 8000")
        .duration(40)

    sog.recipes.gtceu.pyrolyse_oven("sulfur")
        .itemInputs(
            "16x gtceu:stone_dust")
        .itemOutputs(
            "16x gtceu:sulfur_dust")
        .duration(20 * 12)
        .EUt(96)
















    sog.recipes.gtceu.electrolyzer("phosphorus")
        .itemInputs(
            "64x minecraft:glowstone_dust")
        .itemOutputs(
            "8x gtceu:phosphorus_dust")
        .duration(200)
        .EUt(512)









    sog.recipes.gtceu.circuit_assembler("engiprocess")
        .itemInputs(
            "ae2:silicon",
            "minecraft:redstone",
            "minecraft:diamond")
        .inputFluids(
            "gtceu:lubricant 63")
        .notConsumable(
            "ae2:name_press")
        .itemOutputs(
            "ae2:engineering_processor")
        .duration(40)
        .EUt(128)

    sog.recipes.gtceu.circuit_assembler("calcprocess")
        .itemInputs(
            "ae2:silicon",
            "minecraft:redstone",
            "gtceu:certus_quartz_dust")
        .inputFluids(
            "gtceu:lubricant 63")
        .notConsumable(
            "ae2:name_press")
        .itemOutputs(
            "ae2:calculation_processor")
        .duration(40)
        .EUt(128)

    sog.recipes.gtceu.circuit_assembler("logicprocess")
        .itemInputs(
            "ae2:silicon",
            "minecraft:redstone",
            "minecraft:gold_ingot")
        .inputFluids(
            "gtceu:lubricant 63")
        .notConsumable(
            "ae2:name_press")
        .itemOutputs(
            "ae2:logic_processor")
        .duration(40)
        .EUt(128)



    sog.recipes.gtceu.macerator("fluixdust")
        .itemInputs(
            "ae2:fluix_crystal")
        .itemOutputs(
            "ae2:fluix_dust")
        .duration(15)
        .EUt(512)



    sog.recipes.gtceu.distillery("fuelastra")
        .circuit(5)
        .inputFluids(
            "gtceu:diesel 1000")
        .outputFluids(
            "ad_astra:fuel 250")
        .duration(2000)
        .EUt(24)















    sog.recipes.gtceu.electrolyzer("sodiumhydroxide")
        .inputFluids(
            [Fluid.of("gtceu:mercury", 500)])
        .outputFluids(
            [Fluid.of("gtceu:mercury_vapor", 1000)])
        .itemOutputsRanged(
            "gtceu:sodium_hydroxide_dust", 2, 15)
        .duration(2000)
        .EUt((GTValues.VA[GTValues.LV]))

    sog.recipes.gtceu.combustion_generator("mercurypower")
        .inputFluids(
            Fluid.of("gtceu:mercury_vapor", 1000))
        .duration(20*40)
        .EUt(-(GTValues.V[GTValues.HV]))









    sog.recipes.gtceu.electric_blast_furnace("gtceu:ebf/resonant_naquadah")
        .itemInputs(
            "gtceu:resonant_naquadah_dust")
        .inputFluids(
            "gtceu:krypton 1000")
        .itemOutputs(
            "gtceu:resonant_naquadah_ingot")
        .blastFurnaceTemp(9001)
        .duration(1400)
        .EUt(GTValues.VA[GTValues.UV]);

    sog.recipes.gtceu.fusion_reactor("darmastadium")
        .inputFluids(
            "gtceu:resonant_naquadah 16",
            "gtceu:ruthenium 16")
        .outputFluids(
            "gtceu:darmstadtium 32")
        .fusionStartEU(200000000)
        .duration(30)
        .EUt((GTValues.VA[GTValues.LuV]))



    sog.recipes.gtceu.circuit_assembler("accuprocess")
        .itemInputs(
            "ae2:silicon",
            "minecraft:redstone",
            "megacells:sky_steel_ingot")
        .inputFluids(
            "gtceu:lubricant 63")
        .notConsumable(
            "ae2:name_press")
        .itemOutputs(
            "megacells:accumulation_processor")
        .duration(40)
        .EUt(128)

    sog.recipes.gtceu.bender("deshplate")
        .itemInputs(
            "ad_astra:desh_ingot")
        .itemOutputs(
            "ad_astra:desh_plate")
        .circuit(1)
        .duration(40)
        .EUt(128)



    sog.recipes.gtceu.electric_blast_furnace("hasoc")
        .itemInputs(
            "gtceu:advanced_soc",
            "kubejs:condensed_star_matter")
        .inputFluids(
            "gtceu:sulfuric_acid 1000")
        .itemOutputs(
            "8x gtceu:highly_advanced_soc")
        .blastFurnaceTemp(12000)
        .duration(160)
        .EUt(GTValues.VA[GTValues.UHV]);

    sog.recipes.gtceu.implosion_compressor("ae2:quantumsingularity")
        .itemInputs(
            "gtceu:industrial_tnt",
            "ae2:singularity",
            "minecraft:ender_pearl")
        .itemOutputs(
            "2x ae2:quantum_entangled_singularity")
        .duration(160)
        .EUt(GTValues.VA[GTValues.UHV]);

    sog.recipes.gtceu.implosion_compressor("gtceu:ic/crystal_matrix")
        .itemInputs(
            "4x gtceu:industrial_tnt",
            "64x avaritia:diamond_lattice")
        .itemOutputs(
            "1x gtceu:crystal_matrix_ingot")
        .duration(5)
        .EUt(GTValues.VA[GTValues.UHV]);

    sog.recipes.gtceu.implosion_compressor("gtceu:ic/draconiccore")
        .itemInputs(
            "4x gtceu:industrial_tnt",
            "4x gtceu:dense_crystal_matrix_plate",
            "8x draconicevolution:draconium_dust")
        .itemOutputs(
            "64x draconicevolution:draconium_core")
        .duration(5)
        .EUt(GTValues.VA[GTValues.UHV]);

    sog.recipes.gtceu.thermal_centrifuge("gtceu:tc/paper")
        .itemInputs(
            "minecraft:sugar_cane")
        .itemOutputs(
            "minecraft:paper")
        .duration(5)
        .EUt(GTValues.VA[GTValues.MV]);

    sog.recipes.gtceu.thermal_centrifuge("gtceu:tc/leather")
        .itemInputs(
            "minecraft:rotten_flesh")
        .itemOutputs(
            "minecraft:leather")
        .duration(5)
        .EUt(GTValues.VA[GTValues.LV]);

    sog.recipes.gtceu.fusion_reactor("reactmatter")
        .inputFluids(
            "gtceu:antimatter 1000",
            "gtceu:star_matter 10000")
        .outputFluids(
            "gtceu:reactable_fissioned_matter_plasma 10000")
        .fusionStartEU(640000000)
        .duration(30)
        .EUt((GTValues.VA[GTValues.UHV]))



    sog.recipes.gtceu.bender("ostrum_plate")
        .itemInputs(
            "ad_astra:ostrum_ingot")
        .itemOutputs(
            "ad_astra:ostrum_plate")
        .circuit(1)
        .duration(40)
        .EUt(128)

    sog.recipes.gtceu.bender("saturlyte_plate")
        .itemInputs(
            "ad_extendra:saturlyte_ingot")
        .itemOutputs(
            "ad_extendra:saturlyte_plate")
        .circuit(1)
        .duration(40)
        .EUt(128)

    sog.recipes.gtceu.implosion_compressor("gtceu:ic/hdat3")
        .itemInputs(
            "4x gtceu:industrial_tnt",
            "gtceu:hot_heavy_duty_alloy_t3_ingot")
        .itemOutputs(
            "gtceu:heavy_duty_alloy_t3_ingot")
        .duration(5)
        .EUt(GTValues.VA[GTValues.UHV]);

    sog.recipes.gtceu.implosion_compressor("gtceu:ic/hdat2")
        .itemInputs(
            "64x minecraft:tnt",
            "gtceu:hot_heavy_duty_alloy_t2_ingot")
        .itemOutputs(
            "gtceu:heavy_duty_alloy_t2_ingot")
        .duration(5)
        .EUt(GTValues.VA[GTValues.LuV]);

    sog.recipes.gtceu.implosion_compressor("gtceu:ic/hdat1")
        .itemInputs(
            "64x minecraft:tnt",
            "gtceu:hot_heavy_duty_alloy_t1_ingot")
        .itemOutputs(
            "gtceu:heavy_duty_alloy_t1_ingot")
        .duration(5)
        .EUt(GTValues.VA[GTValues.LV]);

    sog.recipes.gtceu.implosion_compressor("gtceu:ic/hdat2itnt")
        .itemInputs(
            "32x gtceu:industrial_tnt",
            "gtceu:hot_heavy_duty_alloy_t2_ingot")
        .itemOutputs(
            "gtceu:heavy_duty_alloy_t2_ingot")
        .duration(5)
        .EUt(GTValues.VA[GTValues.LuV]);

    sog.recipes.gtceu.implosion_compressor("gtceu:ic/hdat1itnt")
        .itemInputs(
            "32x gtceu:industrial_tnt",
            "gtceu:hot_heavy_duty_alloy_t1_ingot")
        .itemOutputs(
            "gtceu:heavy_duty_alloy_t1_ingot")
        .duration(5)
        .EUt(GTValues.VA[GTValues.LV]);



    sog.recipes.gtceu.extractor("creative_data2")
        .itemInputs(
            "64x #gtceu:circuits/uv")
        .itemOutputs(
            "gtceu:creative_data_access_hatch")
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV]);











    sog.recipes.gtceu.macerator("shattered")
        .itemInputs(
            "advanced_ae:shattered_singularity")
        .itemOutputs(
            "advanced_ae:quantum_infused_dust")
        .duration(15)
        .EUt(512)

    sog.recipes.gtceu.macerator("refined_apatite_ore_apatite")
        .itemInputs(
            "gtceu:refined_apatite_ore")
        .itemOutputs(
            "gtceu:apatite_dust")
        .duration(400)
        .EUt(2)

    sog.recipes.gtceu.circuit_assembler("quantumprocessor")
        .itemInputs(
            "ae2:silicon",
            "minecraft:redstone",
            "advanced_ae:quantum_alloy")
        .inputFluids(
            "gtceu:lubricant 63")
        .notConsumable(
            "ae2:name_press")
        .itemOutputs(
            "advanced_ae:quantum_processor")
        .duration(40)
        .EUt(2048)





    sog.recipes.smelting(
        "draconicevolution:draconium_ingot",
        "gtceu:raw_draconium");

    sog.recipes.smelting(
        "draconicevolution:awakened_draconium_ingot",
        "gtceu:raw_awakened_draconium");

    sog.recipes.gtceu.electromagnetic_separator("rare_earth")
        .itemInputs(
            "6x gtceu:rare_earth_dust")
        .itemOutputs(
            "gtceu:cadmium_dust",
            "gtceu:neodymium_dust",
            "gtceu:samarium_dust" ,"gtceu:cerium_dust",
            "gtceu:yttrium_dust",
            "gtceu:lanthanum_dust",
            "gtceu:small_europium_dust")
        .duration(20)
        .EUt(GTValues.VA[GTValues.UHV]);









    sog.recipes.gtceu.hgim("bettercondensedstarmatter")
        .itemInputs(
            "8x gtceu:silicone_rubber_plate")
        .inputFluids(
            "gtceu:star_matter 20736",
            "gtceu:sodium_potassium 12000")
        .itemOutputs(
            "kubejs:condensed_star_matter")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(20 * 25)








})