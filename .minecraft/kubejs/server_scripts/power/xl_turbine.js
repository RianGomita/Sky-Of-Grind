// P L A S M A 

ServerEvents.recipes(sog => {

    sog.recipes.gtceu.xl_plasma_turbine('naquadria_plasma_xl')
    .inputFluids(Fluid.of('gtceu:naquadria_plasma_plasma', 10000))
    .itemInputs('gtceu:naquadah_alloy_rotor')
    .outputFluids(Fluid.of('gtceu:naquadria_mk1_fuel_waste', 2500))
    .duration(8400)
    .EUt(-(GTValues.V[GTValues.UIV]))
    sog.recipes.gtceu.xl_plasma_turbine('naquadria_plasma_mk2_xl')
    .inputFluids(Fluid.of('gtceu:naquadria_plasma_mk2_plasma', 10000))
    .itemInputs('gtceu:atomic_alloy_rotor')
    .outputFluids(Fluid.of('gtceu:naquadria_mk2_fuel_waste', 2500))
    .duration(8400)
    .EUt(-(2*GTValues.V[GTValues.UXV]))
	sog.recipes.gtceu.xl_plasma_turbine('naquadria_plasma_mk3_xl')
    .inputFluids(Fluid.of('gtceu:naquadria_plasma_mk3_plasma', 10000))
    .itemInputs('gtceu:resonant_essence_rotor')
    .outputFluids(Fluid.of('gtceu:naquadria_mk3_fuel_waste', 2500))
    .duration(8400)
    .EUt(-(GTValues.V[GTValues.MAX]))
    sog.recipes.gtceu.xl_plasma_turbine('condensed_star_matter_plasma_xl')
    .inputFluids(Fluid.of('gtceu:condensed_star_matter', 5000))
    .chancedInput('gtceu:neutronium_turbine_blade', 250, 0)
    .outputFluids(Fluid.of('gtceu:star_matter', 250))
    .duration(640)
    .EUt(-(GTValues.V[GTValues.UEV]))
    sog.recipes.gtceu.xl_plasma_turbine('react_able_matter_plasma_xl')
    .inputFluids(Fluid.of('gtceu:reactable_fissioned_matter_plasma', 10000))
    .itemInputs('gtceu:neutronium_turbine_blade')
    .outputFluids(Fluid.of('gtceu:antimatter', 1000))
    .duration(8400)
    .EUt(-(GTValues.V[GTValues.UXV]))






})