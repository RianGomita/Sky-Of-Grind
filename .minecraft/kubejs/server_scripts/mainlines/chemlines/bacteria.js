ServerEvents.recipes(event => {



event.recipes.gtceu.biolab('rawdna')
    .inputFluids('gtceu:sterilized_growth_medium 1000', 'gtceu:mutagen 1000')
    .outputFluids('gtceu:raw_bacterial_dna 500')
    .duration(790)
    .EUt(GTValues.VA[GTValues.UEV]);
    event.recipes.gtceu.large_bacterial_vat('overgrowndna')
    .inputFluids('gtceu:raw_bacterial_dna 1000', 'gtceu:ice 1000')
    .outputFluids('gtceu:overgrown_bacterial_dna 1500')
    .duration(800)
    .EUt(GTValues.VA[GTValues.UEV]);
    event.recipes.gtceu.centrifuge('obdnacentrifuge')
    .inputFluids('gtceu:overgrown_bacterial_dna 1000')
    .outputFluids('gtceu:streptomyces_coelicolor 500', 'gtceu:panaeolus_cyanescens 500')
    .duration(800)
    .EUt(GTValues.VA[GTValues.UEV]);
    event.recipes.gtceu.biolab('bacterium')
    .inputFluids('gtceu:panaeolus_cyanescens 1000', 'gtceu:mutagen 1000')
    .outputFluids('gtceu:bacterium 750')
    .duration(790)
    .EUt(GTValues.VA[GTValues.UEV]);
    event.recipes.gtceu.large_bacterial_vat('pcrmushroom')
    .inputFluids('gtceu:mutagen 150', 'gtceu:ice 1000')
    .itemInputs('minecraft:red_mushroom')
    .outputFluids('gtceu:pcr_its1_its2 150')
    .duration(100)
    .EUt(GTValues.VA[GTValues.UEV]);
    event.recipes.gtceu.biolab('peucetius')
    .inputFluids('gtceu:pcr_its1_its2 500', 'gtceu:streptomyces_coelicolor 1000')
    .outputFluids('gtceu:streptomyces_peucetius 750')
    .duration(790)
    .EUt(GTValues.VA[GTValues.UEV]);
    event.recipes.gtceu.centrifuge('polymerase')
    .inputFluids('gtceu:pcr_its1_its2 150')
    .outputFluids('gtceu:taq_polymerase 75')
    .duration(800)
    .EUt(GTValues.VA[GTValues.UEV]);
    event.recipes.gtceu.biolab('doxorubicin')
    .inputFluids('gtceu:taq_polymerase 500', 'gtceu:streptomyces_peucetius 500')
    .outputFluids('gtceu:doxorubicin 750')
    .duration(790)
    .EUt(GTValues.VA[GTValues.UEV]);
    event.recipes.gtceu.large_bacterial_vat('phage')
    .inputFluids('gtceu:doxorubicin 1500', 'gtceu:ice 1000')
    .outputFluids('gtceu:phage 750')
    .duration(790)
    .EUt(GTValues.VA[GTValues.UEV]);
    event.recipes.gtceu.biolab('bacterialdna')
    .inputFluids('gtceu:phage 1500', 'gtceu:bacterium 1500')
    .outputFluids('gtceu:bacterial_dna 750')
    .duration(790)
    .EUt(GTValues.VA[GTValues.UEV]);
    event.recipes.gtceu.biolab('mycena_hypsizyga')
    .itemInputs('kubejs:rad_primary_resonant_particles')
    .inputFluids('gtceu:mutagen 1500', 'gtceu:bacterial_dna 900')
    .outputFluids('gtceu:mycena_hypsizyga 750')
    .duration(790)
    .EUt(GTValues.VA[GTValues.UEV]);
    event.recipes.gtceu.biolab('mycena_hypsizyga_dna_sample')
    .itemInputs('gtceu:glass_vial')
    .inputFluids('gtceu:mycena_hypsizyga 2500', 'gtceu:bacterial_dna 900')
    .chancedOutput('kubejs:mycena_hypsizyga_dna', 250, 0)
    .duration(1000)
    .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.large_bacterial_vat('stem_cells')
    .itemInputs('gtceu:osmiridium_dust')
    .inputFluids('gtceu:bacteria 500', 'gtceu:sterilized_growth_medium 250')
    .outputFluids('gtceu:bacterial_sludge 750')
    .itemOutputs('32x gtceu:stem_cells')
    .duration(790)
    .EUt(GTValues.VA[GTValues.LuV]);

    event.replaceOutput({ type: 'gtceu:chemical_reactor' }, 'gtceu:stem_cells', '1x gtceu:stem_cells')
    event.replaceOutput({ type: 'gtceu:large_chemical_reactor' }, 'gtceu:stem_cells', '1x gtceu:stem_cells')

    event.recipes.gtceu.biolab('strophar_fungi')
    .notConsumable('kubejs:mycena_hypsizyga_dna')
    .inputFluids('gtceu:mutagen 900')
    .chancedOutput('ad_astra:strophar_mushroom', 250, 0)
    .duration(790)
    .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.large_bacterial_vat('strophar_mushroom_farm')
    .notConsumable('ad_astra:strophar_mushroom')
    .inputFluids('gtceu:bacteria 500', 'gtceu:sterilized_growth_medium 250')
    .itemOutputs('16x ad_astra:strophar_mushroom')
    .duration(790)
    .EUt(GTValues.VA[GTValues.UEV]);
    event.recipes.gtceu.large_bacterial_vat('stropharic_hypoxylon')
    .circuit(2)
    .itemInputs('64x ad_astra:strophar_mushroom', '64x ad_astra:strophar_mushroom')
    .inputFluids('gtceu:bacteria 500', 'gtceu:sterilized_growth_medium 250')
    .outputFluids('gtceu:stropharic_hypoxylon 750')
    .duration(1000)
    .EUt(GTValues.VA[GTValues.UEV]);
    event.recipes.gtceu.large_bacterial_vat('bacteria')
    .itemInputs('16x gtceu:bio_chaff')
    .inputFluids('gtceu:distilled_water 750')
    .outputFluids('gtceu:bacteria 500', 'gtceu:sterilized_growth_medium 500')
    .duration(100)
    .EUt(GTValues.VA[GTValues.UV]);
    event.recipes.gtceu.large_bacterial_vat('hypoxylon')
    .circuit(2)
    .notConsumableFluid('gtceu:stropharic_hypoxylon 1500')
    .inputFluids('gtceu:ice 500', 'gtceu:sterilized_growth_medium 250')
    .outputFluids('gtceu:hypoxylon 144')
    .duration(100)
    .EUt(GTValues.VA[GTValues.UEV]);
        event.recipes.gtceu.biolab('living_biological_carrot_goop')
    .circuit(1)
    .inputFluids('gtceu:biological_carrot_goop 5000', 'gtceu:sterilized_growth_medium 500')
    .outputFluids('gtceu:living_biological_carrot_goop 100')
    .duration(200)
    .EUt(GTValues.VA[GTValues.UEV]);
    event.recipes.gtceu.biolab('purified_biological_vegtable_goop')
    .circuit(1)
    .inputFluids('gtceu:living_biological_carrot_goop 1000', 'gtceu:ferulic_acid 250')
    .outputFluids('gtceu:purified_biological_vegtable_goop 1000')
    .duration(200)
    .EUt(GTValues.VA[GTValues.UEV]);


})