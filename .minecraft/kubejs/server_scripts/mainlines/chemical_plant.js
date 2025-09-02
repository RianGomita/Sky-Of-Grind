// Star Tech code, thanks! a
ServerEvents.recipes(event => {
 // TIERED

 event.recipes.gtceu.assembler('chem_i')
 .itemInputs('gtceu:computer_casing', '8x gtceu:naquadah_alloy_gear', '16x gtceu:trinium_ingot', '8x #gtceu:circuits/zpm', 'gtceu:advanced_soc', 'gtceu:iv_field_generator')
 .inputFluids(Fluid.of('gtceu:polybenzimidazole 16000'))
 .itemOutputs('kubejs:chemical_tier_one')
 .duration(500)
 .EUt((GTValues.VA[GTValues.LuV]))
 event.recipes.gtceu.assembler('chem_ii')
 .itemInputs('gtceu:computer_casing', '8x gtceu:naquadria_gear', '16x gtceu:europium_ingot', '8x #gtceu:circuits/uv', 'gtceu:advanced_soc', 'gtceu:zpm_field_generator')
 .inputFluids(Fluid.of('gtceu:polybenzimidazole 16000'))
 .itemOutputs('kubejs:chemical_tier_two')
 .duration(500)
 .EUt((GTValues.VA[GTValues.ZPM]))
 event.recipes.gtceu.assembler('chem_iii')
 .itemInputs('gtceu:computer_casing', '8x gtceu:small_darmstadtium_gear', 'kubejs:condensed_star_matter', '8x #gtceu:circuits/uhv', 'gtceu:highly_advanced_soc', 'gtceu:zpm_field_generator', '16x gtceu:blacklight')
 .inputFluids(Fluid.of('gtceu:condensed_star_matter 16000'))
 .itemOutputs('kubejs:chemical_tier_three')
 .duration(500)
 .EUt((GTValues.VA[GTValues.UV]))
 event.recipes.gtceu.assembler('chem_iv')
 .itemInputs('gtceu:computer_casing', '8x gtceu:neutronium_gear', '16x kubejs:condensed_star_matter', '8x #gtceu:circuits/uev', 'kubejs:highly_resonative_soc', 'gtceu:uhv_field_generator', '16x kubejs:quantum_energy_capsule', '2x kubejs:gravitational_containment_cell')
 .inputFluids(Fluid.of('gtceu:condensed_star_matter 16000'))
 .itemOutputs('kubejs:chemical_tier_four')
 .duration(500)
 .EUt((GTValues.VA[GTValues.UHV]))
 event.recipes.gtceu.assembler('chem_v')
 .itemInputs('gtceu:computer_casing', '8x gtceu:cosmic_iridium_gear', '64x kubejs:condensed_star_matter', '8x #gtceu:circuits/uiv', 'kubejs:extremely_advanced_soc', 'gtceu:uhv_field_generator', '4x kubejs:draconium_heavy_plating', '2x kubejs:gravitational_containment_cell')
 .inputFluids(Fluid.of('gtceu:condensed_star_matter 16000'))
 .itemOutputs('kubejs:chemical_tier_five')
 .duration(500)
 .EUt((GTValues.VA[GTValues.UEV]))
 event.recipes.gtceu.assembler('chem_vi')
 .itemInputs('gtceu:computer_casing', '8x gtceu:pure_cosmic_matter_gear', '64x kubejs:reactive_chaos_pellet', '8x #gtceu:circuits/uxv', 'kubejs:extremely_advanced_soc', 'gtceu:uiv_field_generator', '4x kubejs:chaos_heavy_plating', '32x kubejs:energized_quantum_anomaly')
 .inputFluids(Fluid.of('gtceu:eternity 100'))
 .itemOutputs('kubejs:chemical_tier_six')
 .duration(500)
 .EUt((GTValues.VA[GTValues.UIV]))




    // RECIPES

    event.recipes.gtceu.chemical_plant('fluoroantimonic_acid')
        .notConsumable('kubejs:chemical_tier_one')
        .itemInputs('gtceu:antimony_dust')
        .inputFluids('gtceu:hydrogen 2000', 'gtceu:fluorine 7000')
        .outputFluids('gtceu:fluoroantimonic_acid 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.chemical_plant('polybenzimidazole_with_phenol')
    .notConsumable('kubejs:chemical_tier_two')
        .inputFluids('gtceu:benzene 2000', 'gtceu:phenol 1000', 'gtceu:carbon_dioxide 2000', 'gtceu:ammonia 4000', 'gtceu:oxygen 4000')
        .outputFluids('gtceu:polybenzimidazole 1000', 'minecraft:water 9000')
        .circuit(24)
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.chemical_plant('polybenzimidazole_without_phenol')
    .notConsumable('kubejs:chemical_tier_three')
        .inputFluids('gtceu:benzene 3000', 'gtceu:carbon_dioxide 2000', 'gtceu:ammonia 4000', 'gtceu:oxygen 5000')
        .outputFluids('gtceu:polybenzimidazole 1000', 'minecraft:water 9000')
        .circuit(25)
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV]);

        event.recipes.gtceu.chemical_plant('plat_line')
        .notConsumable('kubejs:chemical_tier_two')
        .itemInputs('6x gtceu:platinum_group_sludge_dust')
        .inputFluids('gtceu:aqua_regia 1500')
        .itemOutputs('gtceu:platinum_dust', 'gtceu:palladium_dust', 'gtceu:ruthenium_dust', 'gtceu:rhodium_dust', 'gtceu:osmium_dust', 'gtceu:iridium_dust')
        .outputFluids('gtceu:nitric_acid 500', 'gtceu:hydrochloric_acid 1000')
        .duration(600)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.chemical_plant('sulfuric_acid')
    .notConsumable('kubejs:chemical_tier_one')
        .itemInputs('gtceu:sulfur_dust')
        .inputFluids('minecraft:water 4000')
        .outputFluids('gtceu:sulfuric_acid 1000')
        .duration(320)
        .EUt(480)
        .circuit(24);

    event.recipes.gtceu.chemical_plant('ptfe')
    .notConsumable('kubejs:chemical_tier_two')
        .itemInputs('2x gtceu:carbon_dust')
        .inputFluids('gtceu:fluorine 4000')
        .outputFluids('gtceu:tetrafluoroethylene 1000')
        .duration(480)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.chemical_plant('epoxy')
        .notConsumable('kubejs:chemical_tier_one')
        .inputFluids('gtceu:benzene 2000', 'gtceu:propene 2000', 'gtceu:chlorine 2000', 'gtceu:oxygen 4000')
        .outputFluids('gtceu:epoxy 1000', 'gtceu:hydrochloric_acid 1000')
        .duration(500)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.chemical_plant('naquadah_line')
        .notConsumable('kubejs:chemical_tier_three')
        .itemInputs('2x gtceu:naquadah_dust')
        .inputFluids('gtceu:fluoroantimonic_acid 1000', 'gtceu:sulfuric_acid 1500')
        .itemOutputs('2x gtceu:enriched_naquadah_dust', '2x gtceu:naquadria_dust', '2x gtceu:trinium_dust', '2x gtceu:antimony_dust', '2x gtceu:indium_phosphide_dust')
        .outputFluids('gtceu:hydrogen 2000', 'gtceu:fluorine 7000', 'gtceu:sulfuric_acid 500')
        .duration(800)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.chemical_plant('naquadah_line_p2')
        .notConsumable('kubejs:chemical_tier_four')
        .itemInputs('1x gtceu:naquadria_dust')
        .inputFluids('gtceu:enriched_naquadah 144', 'gtceu:diluted_sulfuric_acid 1500')
        .itemOutputs('5x gtceu:resonant_naquadah_dust')
        .itemOutputsRanged('gtceu:resonant_naquadah_dust', 5, 15)
        .outputFluids('gtceu:pure_naquadria_fuel 5000', 'gtceu:sulfuric_acid 500')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.chemical_plant('eternity')
        .notConsumable('kubejs:chemical_tier_six')
        .inputFluids('gtceu:hypercharged_nebular_plasma 256000', 'gtceu:supercritical_californium_plasma 256000', 'gtceu:high_entropy_neptunium_plasma 256000')
        .chancedFluidOutput('gtceu:eternity 64000', 2500, 0)
        .duration(500)
        .EUt(GTValues.VA[GTValues.UXV]);

    event.recipes.gtceu.chemical_plant('chaos')
        .notConsumable('kubejs:chemical_tier_five') 
        .itemInputs('draconicevolution:chaos_shard')
        .inputFluids('gtceu:eternity 10')
        .itemOutputs('16x draconicevolution:chaos_shard')
        .duration(500)
        .EUt(GTValues.VA[GTValues.UXV]);

    event.recipes.gtceu.chemical_plant('neptunium')
        .notConsumable('kubejs:chemical_tier_five')
        .inputFluids('gtceu:eternity 10', 'gtceu:uranium 16000', 'gtceu:neutronium 16000')
        .chancedFluidOutput('gtceu:neptunium 64000', 7500, 0)
        .duration(500)
        .EUt(GTValues.VA[GTValues.UXV]);

        event.recipes.gtceu.chemical_plant('californium_line')
        .notConsumable('kubejs:chemical_tier_four')
        .itemInputs('4x gtceu:triplatirium_235_dust')
        .inputFluids('gtceu:sulfuric_acid 1000')
        .chancedFluidOutput('gtceu:processed_californium_sulfate 64000', 7500, 0)
        .duration(500)
        .EUt(GTValues.VA[GTValues.UHV]);

        event.recipes.gtceu.chemical_plant('biological_carrot_goop')
        .notConsumable('kubejs:chemical_tier_one')
        .inputFluids('gtceu:glutamic_acid 100', 'gtceu:chlorogenic_acid 300')
        .outputFluids('gtceu:biological_carrot_goop 50')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LuV]);

        event.recipes.gtceu.chemical_plant('uraninite_processing')
        .notConsumable('kubejs:chemical_tier_four')
        .itemInputs('30x gtceu:uraninite_dust')
        .inputFluids('gtceu:fluorine 60000', 'gtceu:hydrogen 40000')
        .itemOutputsRanged('gtceu:uranium_235_dust',1,3)
        .itemOutputsRanged('gtceu:uranium_dust',9,11)
        .outputFluids('gtceu:fluorine 50000', 'gtceu:hydrogen 20000')
        .duration(500)
        .EUt(GTValues.VA[GTValues.UHV]);

        event.recipes.gtceu.chemical_plant('hog')
        .notConsumable('kubejs:chemical_tier_three')
        .inputFluids('gtceu:naphtha 8000','gtceu:refinery_gas 1000','gtceu:octane 1000','gtceu:toluene 1000','gtceu:hydrogen 16000','gtceu:nitrogen 2000','gtceu:oxygen 8000')
        .itemInputs('gtceu:phosphorus_dust')
        .outputFluids('gtceu:high_octane_gasoline 32000')
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.UHV]);

        event.recipes.gtceu.chemical_plant('sbr')
        .notConsumable('kubejs:chemical_tier_two')
        .inputFluids('gtceu:hydrogen 6000','gtceu:oxygen 22000','gtceu:benzene 2000','gtceu:butadiene 4500','gtceu:ethylene 1500')
        .itemInputs('10x gtceu:sulfur_dust')
        .outputFluids('gtceu:styrene_butadiene_rubber 16000')   
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.UV]);

        event.recipes.gtceu.chemical_plant('silicone_rubber')
        .notConsumable('kubejs:chemical_tier_two')
        .inputFluids('gtceu:hydrogen 150000','gtceu:chlorine 75000')
        .itemInputs('10x gtceu:sulfur_dust','20x gtceu:silicon_dust', '50x gtceu:carbon_dust')
        .outputFluids('gtceu:silicone_rubber 16000')
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.UV]);
})