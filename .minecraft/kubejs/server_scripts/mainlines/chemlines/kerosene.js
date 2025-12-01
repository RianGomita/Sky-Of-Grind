ServerEvents.recipes(sog => {

    sog.recipes.gtceu.dehydration_unit('hpk')
        .inputFluids('gtceu:hydrogen 16000', 'gtceu:light_fuel 8000')
        .outputFluids('gtceu:high_purity_kerosene 4000')
        .itemOutputs('4x gtceu:aromatic_byproduct_dust')
        .duration(20*20)
        .EUt(GTValues.VA[GTValues.IV]);
    sog.recipes.gtceu.cryogenic_centrifuge('wfhpk')
        .perTick(true)
        .itemInputs('64x gtceu:ice_dust')
        .perTick(false)
        .inputFluids('gtceu:high_purity_kerosene 8000')
        .outputFluids('gtceu:wax_free_high_purity_kerosene 8000')
        .itemOutputs('4x gtceu:paraffin_wax_dust')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.UV]);
        sog.recipes.gtceu.large_chemical_reactor('fluoropolymer')
        .inputFluids('gtceu:fluoroantimonic_acid 3000', 'gtceu:supercritical_carbon_dioxide 250')
        .itemOutputs('9x gtceu:fluoropolymer_solution_dust')
        .itemInputs('16x gtceu:polytetrafluoroethylene_dust')
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.UV]);
        sog.recipes.gtceu.svs('supercriticalco2')
        .inputFluids('gtceu:carbon_dioxide 3000')
        .outputFluids('gtceu:supercritical_carbon_dioxide 100')
        .duration(20*8)
        .EUt(GTValues.VA[GTValues.UV]);
        sog.recipes.gtceu.large_chemical_reactor('aoc')
        .inputFluids('gtceu:phenol 3000', 'gtceu:toluene 2500', 'gtceu:nitric_acid 8000')
        .outputFluids('gtceu:antioxidant_complex 160')
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.IV]);
        sog.recipes.gtceu.large_chemical_reactor('ps')
        .inputFluids('gtceu:antioxidant_complex 3000', 'gtceu:hyper_ionized_helium_plasma 64')
        .itemInputs('64x gtceu:graphene_dust', '64x gtceu:graphene_dust', '64x gtceu:graphene_dust')
        .outputFluids('gtceu:precursor_suspension 1800')
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.UV]);
        sog.recipes.gtceu.extreme_cracking_unit('ptb')
        .inputFluids('gtceu:wax_free_high_purity_kerosene 30000', 'gtceu:precursor_suspension 1900')
	    .chancedInput('2x gtceu:neutron_reflector', 3333, 0)
        .chancedInput('2x gtceu:neutron_reflector', 2500, 0)
        .chancedInput('2x gtceu:neutron_reflector', 1111, 0)
        .outputFluids('gtceu:precursor_thermal_blend 1000')
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.UV]);
        sog.recipes.gtceu.catalyst_reactor('rtb')
        .inputFluids('gtceu:precursor_thermal_blend 1500', 'gtceu:hydrogen 30000')
        .itemInputs('8x gtceu:thermal_conductivity_additive_dust', '8x gtceu:thermal_conductivity_additive_dust', '8x gtceu:thermal_conductivity_additive_dust')
        .itemInputs('8x gtceu:paraffin_wax_dust')
        .itemOutputs('16x gtceu:refined_thermal_blend_dust')
        .duration(20*1)
        .EUt(GTValues.VA[GTValues.UXV]);
        sog.recipes.gtceu.large_chemical_reactor('qatb')
        .inputFluids('gtceu:neon_plasma_plasma 1500')
	    .chancedInput('2x gtceu:quantum_star', 3333, 0)
        .chancedInput('2x gtceu:quantum_star', 2500, 0)
        .itemInputs('8x gtceu:refined_thermal_blend_dust')
        .itemOutputs('8x gtceu:quantum_activated_thermal_blend_dust')
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.UV]);
        sog.recipes.gtceu.catalyst_reactor('kbhf')
        .inputFluids('gtceu:hyper_ionized_helium_plasma 32', 'gtceu:californite 576')
	    .chancedInput('2x gtceu:neutron_reflector', 3333, 0)
        .chancedInput('2x gtceu:neutron_reflector', 2500, 0)
        .chancedInput('2x gtceu:neutron_reflector', 1111, 0)
        .itemInputs('16x gtceu:quantum_activated_thermal_blend_dust')
        .outputFluids('gtceu:kerosene_based_heating_fluid 2000')
        .duration(20*1)
        .EUt(GTValues.VA[GTValues.UXV]);

        sog.recipes.gtceu.plasma_mixer('tca1')
        .perTick(true)
        .inputFluids('gtceu:helium_plasma 100', 'gtceu:oxygen_plasma 100')
        .perTick(false)
        .itemInputs('gtceu:fluoropolymer_solution_dust')
        .chancedInput('32x gtceu:silver_dust', 2500, 0)
        .itemOutputs('8x gtceu:thermal_conductivity_additive_dust')
        .duration(20*405)
        .EUt(GTValues.VA[GTValues.UIV]);
        sog.recipes.gtceu.plasma_mixer('tca2')
        .perTick(true)
        .inputFluids('gtceu:argon_plasma 100', 'gtceu:nitrogen_plasma 100')
        .perTick(false)
        .itemInputs('gtceu:fluoropolymer_solution_dust')
        .chancedInput('32x gtceu:silver_dust', 2500, 0)
        .itemOutputs('16x gtceu:thermal_conductivity_additive_dust')
        .duration(20*305)
        .EUt(GTValues.VA[GTValues.UIV]);
        sog.recipes.gtceu.plasma_mixer('tca3')
        .perTick(true)
        .inputFluids('gtceu:iron_plasma 100', 'gtceu:nickel_plasma 100')
        .perTick(false)
        .itemInputs('gtceu:fluoropolymer_solution_dust')
        .chancedInput('32x gtceu:silver_dust', 2500, 0)
        .itemOutputs('32x gtceu:thermal_conductivity_additive_dust')
        .duration(20*205)
        .EUt(GTValues.VA[GTValues.UIV]);
        sog.recipes.gtceu.plasma_mixer('tca4')
        .perTick(true)
        .inputFluids('gtceu:thorium_plasma_plasma 10', 'gtceu:naquadria_plasma_mk2_plasma 10')
        .perTick(false)
        .itemInputs('gtceu:fluoropolymer_solution_dust')
        .chancedInput('32x gtceu:silver_dust', 2500, 0)
        .itemOutputs('64x gtceu:thermal_conductivity_additive_dust')
        .duration(20*105)
        .EUt(GTValues.VA[GTValues.UIV]);
        sog.recipes.gtceu.plasma_mixer('tca5')
        .perTick(true)
        .inputFluids('gtceu:stellar_matter_plasma 10', 'gtceu:astral_space_time_plasma 10')
        .perTick(false)
        .itemInputs('gtceu:fluoropolymer_solution_dust')
        .chancedInput('32x gtceu:silver_dust', 2500, 0)
        .itemOutputs('128x gtceu:thermal_conductivity_additive_dust')
        .duration(20*5)
        .EUt(GTValues.VA[GTValues.UIV]);

sog.recipes.gtceu.assembly_line('plasma_mixer')
.itemInputs('8x gtceu:pure_cosmic_matter_plate', '4x gtceu:uxv_electric_motor', 'kubejs:semi_stable_casing', '1x #gtceu:circuits/uxv', '4x gtceu:uiv_field_generator', 'gtceu:uxv_mixer')
.itemOutputs('gtceu:plasma_mixer')
.inputFluids(
  Fluid.of('gtceu:awakened_draconium', 9152),
  Fluid.of('gtceu:antimatter', 5000),
  Fluid.of('gtceu:crystal_matrix', 5000)
)
.duration(200)
.EUt(GTValues.VA[GTValues.UXV])

sog.recipes.gtceu.assembly_line('cryogenic_centrifuge')
.itemInputs('8x gtceu:cosmic_iridium_plate', '4x gtceu:uev_electric_motor', 'kubejs:cryogenic_casing', '8x #gtceu:circuits/uiv', '8x gtceu:cosmic_iridium_plate', 'gtceu:uev_centrifuge')
.itemOutputs('gtceu:cryogenic_centrifuge')
.inputFluids(
  Fluid.of('gtceu:condensed_star_matter', 9152),
  Fluid.of('gtceu:antimatter', 5000),
  Fluid.of('gtceu:crystal_matrix', 5000)
)
.duration(200)
.EUt(GTValues.VA[GTValues.UXV])

sog.recipes.gtceu.assembly_line('catalyst_reactor')
.itemInputs('8x gtceu:infinity_plate', '4x gtceu:uxv_electric_motor', 'kubejs:kevlar_casing', '2x #gtceu:circuits/uxv', '8x gtceu:infinity_gear', 'gtceu:uxv_chemical_reactor')
.itemOutputs('gtceu:catalyst_reactor')
.inputFluids(
  Fluid.of('gtceu:awakened_draconium', 9152),
  Fluid.of('gtceu:antimatter', 5000),
  Fluid.of('gtceu:crystal_matrix', 5000)
)
.duration(200)
.EUt(GTValues.VA[GTValues.UXV])



})