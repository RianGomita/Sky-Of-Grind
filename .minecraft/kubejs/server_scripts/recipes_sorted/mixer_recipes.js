ServerEvents.recipes(event => {
    // Const


    // Individual Recipes

    event.recipes.gtceu.mixer("pulsatingiron")
        .itemInputs(
            "4x minecraft:iron_ingot",
            "gtceu:aluminium_ingot")
        .itemOutputs(
            "3x enderio:pulsating_alloy_ingot")
        .duration(20 * 5)
        .EUt(32)

    event.recipes.gtceu.mixer("redstonealloy")
        .itemInputs(
            "4x gtceu:red_alloy_ingot",
            "gtceu:lead_ingot")
        .itemOutputs(
            "3x enderio:redstone_alloy_ingot")
        .duration(20 * 5)
        .EUt(32)

    event.recipes.gtceu.mixer("conductiveiron")
        .itemInputs(
            "4x minecraft:iron_ingot",
            "2x gtceu:annealed_copper_ingot",
            "gtceu:red_alloy_ingot")
        .itemOutputs(
            "4x enderio:conductive_alloy_ingot")
        .duration(20 * 5)
        .EUt(32)

    event.recipes.gtceu.mixer("platinum")
        .itemInputs(
            "8x gtceu:silver_dust",
            "2x gtceu:ender_eye_block",
            "enderio:pulsating_alloy_ingot")
        .inputFluids(
            "gtceu:ender_air 5000",
            "gtceu:deuterium 1000")
        .itemOutputs(
            "2x gtceu:platinum_dust")
        .duration(20 * 5)
        .EUt((GTValues.VA[GTValues.HV]))

    event.recipes.gtceu.mixer("fluix")
        .itemInputs(
            "gtceu:quartzite_gem",
            "minecraft:redstone",
            "gtceu:certus_quartz_dust")
        .inputFluids(
            "minecraft:water 1000")
        .itemOutputs(
            "3x ae2:fluix_crystal")
        .duration(15)
        .EUt((GTValues.VA[GTValues.HV]))

    event.recipes.gtceu.mixer("fluorine")
        .itemInputs(
            "64x gtceu:sulfur_dust")
        .inputFluids(
            "minecraft:water 1000")
        .outputFluids(
            "gtceu:fluorine 6000")
        .duration(20 * 3)
        .EUt(32)

    event.recipes.gtceu.mixer("inert_life_essence")
        .itemInputs(
            "3x gtceu:epoxy_dust")
        .inputFluids(
            Fluid.of("gtceu:raw_life_essence 3000"))
        .outputFluids(
            "gtceu:inert_life_essence 3000")
        .duration(20 * 10)
        .EUt((GTValues.VA[GTValues.IV]))

    event.recipes.gtceu.mixer("mixed_alloy")
        .itemInputs(
            "7x gtceu:copper_dust",
            "4x gtceu:tin_dust",
            "11x gtceu:iron_dust")
        .itemOutputs(
            "22x gtceu:mixed_alloy_dust")
        .circuit(4)
        .duration(20 * 10)
        .EUt((GTValues.VA[GTValues.MV]))

    event.recipes.gtceu.mixer("heavy_duty_alloy_t1")
        .itemInputs(
            "16x gtceu:mixed_alloy_dust",
            "4x gtceu:steel_dust",
            "11x gtceu:iron_dust")
        .inputFluids(
            Fluid.of("gtceu:stainless_steel 144"))
        .itemOutputs(
            "gtceu:hot_heavy_duty_alloy_t1_ingot")
        .circuit(4)
        .duration(20 * 10)
        .EUt((GTValues.VA[GTValues.HV]))

    event.recipes.gtceu.mixer("heavy_duty_alloy_t2")
        .itemInputs(
            "7x gtceu:platinum_dust",
            "4x gtceu:osmiridium_dust",
            "11x gtceu:tantalum_carbide_dust",
            "gtceu:heavy_duty_alloy_t1_dust")
        .inputFluids(
            Fluid.of("gtceu:rhodium_plated_palladium 144"))
        .itemOutputs(
            "gtceu:hot_heavy_duty_alloy_t2_ingot")
        .circuit(4)
        .duration(20 * 10)
        .EUt((GTValues.VA[GTValues.LuV]))

    event.recipes.gtceu.mixer("heavy_duty_alloy_t3")
        .itemInputs(
            "7x gtceu:ruthenium_trinium_americium_neutronate_dust",
            "4x gtceu:triplatirium_235_dust",
            "11x gtceu:atomic_alloy_dust",
            "gtceu:heavy_duty_alloy_t2_dust")
        .inputFluids(
            Fluid.of("gtceu:condensed_star_matter 144"))
        .itemOutputs(
            "gtceu:hot_heavy_duty_alloy_t3_ingot")
        .circuit(4)
        .duration(20 * 10)
        .EUt((GTValues.VA[GTValues.UHV]))

    event.recipes.gtceu.mixer("energizedsuperconductor")
        .itemInputs(
            "4x gtceu:gold_dust",
            "gtceu:coal_dust",
            "2x minecraft:redstone")
        .itemOutputs(
            "3x gtceu:energized_superconductor_dust")
        .circuit(2)
        .duration(20 * 5)
        .EUt(32)

    event.recipes.gtceu.mixer("hscsuperconductor")
        .itemInputs(
            "4x gtceu:coal_dust",
            "4x gtceu:silicon_dust",
            "2x gtceu:annealed_copper_dust")
        .inputFluids(
            "gtceu:oxygen 2000")
        .itemOutputs(
            "3x gtceu:hsc_superconductor_dust")
        .circuit(4)
        .duration(20 * 9)
        .EUt((GTValues.VA[GTValues.MV]))

    event.recipes.gtceu.mixer("platiumsuperconductor")
        .itemInputs(
            "1x gtceu:coal_dust",
            "4x gtceu:platinum_dust",
            "8x gtceu:energium_dust")
        .itemOutputs(
            "4x gtceu:platium_superconductor_dust")
        .circuit(4)
        .duration(20 * 14)
        .EUt((GTValues.VA[GTValues.HV]))

    event.recipes.gtceu.mixer("tilrunumsuperconductor")
        .itemInputs(
            "1x gtceu:titanium_dust",
            "4x gtceu:ruthenium_dust",
            "8x gtceu:molybdenum_dust")
        .itemOutputs(
            "13x gtceu:tilrunum_superconductor_dust")
        .circuit(4)
        .duration(20 * 9)
        .EUt((GTValues.VA[GTValues.EV]))

    event.recipes.gtceu.mixer("neutronic_chromite")
        .itemInputs(
            "7x gtceu:chromium_dust",
            "4x gtceu:neutronium_dust")
        .itemOutputs(
            "4x gtceu:neutronic_chromite_dust")
        .circuit(4)
        .duration(20 * 14)
        .EUt((GTValues.VA[GTValues.UHV]))

    event.recipes.gtceu.mixer("radium_infused_lead")
        .itemInputs(
            "6x gtceu:lead_dust",
            "2x gtceu:platinum_dust")
        .inputFluids(
            "gtceu:radon 1000")
        .itemOutputs(
            "4x gtceu:radium_infused_lead_dust")
        .circuit(2)
        .duration(20 * 14)
        .EUt((GTValues.VA[GTValues.EV]))

    event.recipes.gtceu.mixer("stabilized_iridium_dust")
        .itemInputs(
            "19x gtceu:iridium_dust",
            "4x gtceu:osmium_dust",
            "8x gtceu:neutronic_chromite_dust",
            "gtceu:radium_infused_lead_dust")
        .itemOutputs(
            "4x gtceu:stabilized_iridium_dust")
        .circuit(3)
        .duration(20 * 14)
        .EUt((GTValues.VA[GTValues.UHV]))

    event.recipes.gtceu.mixer("californite")
        .itemInputs(
            "19x gtceu:californium_dust",
            "8x gtceu:stabilized_iridium_dust")
        .itemOutputs(
            "4x gtceu:californite_dust")
        .circuit(4)
        .duration(20 * 14)
        .EUt((GTValues.VA[GTValues.UEV]))

    event.recipes.gtceu.mixer("draconium")
        .itemInputs(
            "5x gtceu:hypoxylon_dust",
            "8x gtceu:stabilized_iridium_dust",
            "8x gtceu:ruthenium_trinium_americium_neutronate_dust",
            "2x gtceu:antimatter_dust")
        .itemOutputs(
            "4x draconicevolution:draconium_dust")
        .circuit(1)
        .duration(20 * 20)
        .EUt((GTValues.VA[GTValues.UEV]))

    event.recipes.gtceu.mixer("gregification_crystaltine")
        .itemInputs(
            "4x gtceu:iron_dust",
            "10x gtceu:lapis_dust",
            "2x gtceu:nether_star_dust",
            "8x gtceu:diamond_dust",
            "4x gtceu:gold_dust")
        .itemOutputs(
            "4x extendedcrafting:crystaltine_ingot")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.mixer("mixed_quantum_infused_dust")
        .itemInputs(
            "advanced_ae:quantum_infused_dust")
        .inputFluids(
            "minecraft:water 1000")
        .outputFluids(
            "advanced_ae:quantum_infusion_source 1000")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.mixer("mixed_shattered_singularity")
        .itemInputs(
            "ae2:singularity",
            "2x ae2:sky_dust",
            "2x #forge:dusts/ender_pearl")
        .inputFluids(
            "minecraft:lava 100")
        .itemOutputs(
            "2x advanced_ae:shattered_singularity")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.mixer("mixed_quantum_alloy")
        .itemInputs(
            "4x gtceu:copper_dust",
            "4x advanced_ae:shattered_singularity",
            "4x ae2:singularity")
        .inputFluids(
            "advanced_ae:quantum_infusion_source 1000")
        .itemOutputs(
            "4x advanced_ae:quantum_alloy") 
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.mixer("mixed_quantum_alloy_plate")
        .itemInputs(
            "8x advanced_ae:quantum_alloy",
            "2x minecraft:netherite_ingot",
            "minecraft:nether_star")
        .inputFluids(
            "advanced_ae:quantum_infusion_source 1000")
        .itemOutputs(
            "advanced_ae:quantum_alloy_plate") 
        .duration(20 * 10)  
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.mixer("diluting_sulfuric_acid")
        .inputFluids(
            Fluid.of("gtceu:sulfuric_acid 1000"))
        .inputFluids(
            Fluid.of("minecraft:water 1000"))
        .outputFluids(
            "gtceu:diluted_sulfuric_acid 1000")
        .duration(20 * 2.5)
        .EUt((GTValues.VA[GTValues.HV]))

    event.recipes.gtceu.mixer("thallium_iodine")
        .itemInputs(
            "1x gtceu:thallium_dust",
            "1x gtceu:iodine_dust")
        .itemOutputs(
            "2x gtceu:thallium_iodine_dust")
        .circuit(24)
        .duration(20 * 35)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.mixer("unprocessed_nanothermal_fluid")
        .inputFluids(
            "gtceu:superfluid_helium 1000",
            "gtceu:stabilized_naquadria_plasma_plasma 500")
        .itemInputs(
            "4x gtceu:activated_nano_diamond_dust")
        .outputFluids(
            "gtceu:unprocessed_nanothermal_fluid 1500")
        .duration(20 * 30)
        .EUt((GTValues.VA[GTValues.UIV]))

    event.recipes.gtceu.mixer("pcb_coolant_mk2")
        .inputFluids(
            "gtceu:pcb_coolant 1000",
            "gtceu:ion_implanted_nanothermal_fluid 500")
        .outputFluids(
            "gtceu:pcb_coolant_mk2 1500")
        .duration(20 * 15)
        .EUt((GTValues.VA[GTValues.UIV]))

	event.recipes.gtceu.mixer("tetramethylthiuramdisulfide")
		.inputFluids(
            "minecraft:water 1000")
		.itemInputs(
            "10x gtceu:tetramethylthiuramdisulfide_dust")
		.outputFluids(
            "gtceu:tetramethylthiuramdisulfide_solution 1500")
  		.duration(20 * 10)
		.EUt((GTValues.VA[GTValues.UV]))

	event.recipes.gtceu.mixer("pe_peroxide_mixing")
		.inputFluids(
            "gtceu:polyethylene 1000",
            "gtceu:dicumyl_peroxide 150")
		.outputFluids(
            "gtceu:pe_peroxide_mixture 1150")
		.duration(20 * 30)
		.EUt((GTValues.VA[GTValues.UV]))

	event.recipes.gtceu.mixer("enriched_carbon_slurry")
		.itemInputs(
            "16x gtceu:exquisite_coke_gem",
            "16x gtceu:exquisite_diamond_gem",
            "32x gtceu:graphene_dust",
            "64x gtceu:activated_carbon_dust")
		.inputFluids(
            "gtceu:carbon 10000",
            "gtceu:fluoroantimonic_acid 5000")
		.outputFluids(
            "gtceu:enriched_carbon_slurry 20000")
		.duration(20 * 35)
		.EUt((GTValues.VA[GTValues.UHV]))

	event.recipes.gtceu.mixer("zsm_5_solution")
		.itemInputs(
            "6x gtceu:silicon_dioxide_dust",
            "4x gtceu:sodium_aluminate_dust",
            "3x gtceu:sodium_hydroxide_dust",
            "5x gtceu:tetrapropylammonium_bromide_dust")
		.inputFluids(
            "minecraft:water 2000")
		.outputFluids(
            "gtceu:zsm_5_solution 5000")
		.itemOutputs(
            "4x gtceu:certus_quartz_dust")
		.duration(20 * 40)
		.EUt((GTValues.VA[GTValues.UHV]))

	event.recipes.gtceu.mixer("technical_pyridine_mixing")
		.inputFluids(
            "gtceu:crude_pyridine 1000",
            "gtceu:crude_synthetic_pyridine 1000")
		.outputFluids(
            "gtceu:technical_pyridine_mixture 2000")
		.duration(20 * 20)
		.EUt((GTValues.VA[GTValues.HV]))

	event.recipes.gtceu.mixer("pentose_enriched_biomass")
		.inputFluids(
            "gtceu:biomass 3000",
            "gtceu:wood_vinegar 2000")
		.itemInputs(
            "64x gtceu:wheat_dust",
            "48x minecraft:sugar")
		.outputFluids(
            "gtceu:pentose_enriched_biomass 5000")
		.duration(20 * 46)
		.EUt((GTValues.VA[GTValues.ZPM]))

    event.recipes.gtceu.mixer("triplatirium_235_dust")
       .itemInputs(
            "1x gtceu:uranium_235_dust",
            "1x gtceu:uranium_triplatinum_dust",
            "gtceu:duranium_dust")
       .itemOutputs(
            "16x gtceu:triplatirium_235_dust")
       .duration(20 * 15)
       .EUt((GTValues.VA[GTValues.UV]))

    event.recipes.gtceu.mixer("atomic_alloy_dust")
       .itemInputs(
            "7x gtceu:cleaned_californium_dust")
       .inputFluids(
            "gtceu:triplatirium_235 50")
       .itemOutputs(
            "64x gtceu:atomic_alloy_dust")
       .duration(20 * 1)
       .EUt((GTValues.VA[GTValues.UV]))

    event.recipes.gtceu.mixer("reactive_blend")
        .itemInputs(
            "2x draconicevolution:chaos_shard")
        .inputFluids(
            Fluid.of("gtceu:antimatter", 576))
        .itemOutputs(
            "8x kubejs:reactive_blend")
        .circuit(19)
        .duration(20 * 50)
        .EUt((GTValues.VA[GTValues.UXV]))

    event.recipes.gtceu.mixer("reactive_chaos_pellet")
        .itemInputs(
            "4x kubejs:reactive_chaos_dust")
        .inputFluids(
            Fluid.of("gtceu:awakened_draconium", 576))
        .itemOutputs(
            "2x kubejs:reactive_chaos_pellet")
        .circuit(19)
        .duration(20 * 5)
        .EUt((GTValues.VA[GTValues.UXV]))

    event.recipes.gtceu.mixer("infused_reactive_chaos_pellet")
        .itemInputs(
            "4x kubejs:reactive_chaos_dust")
        .inputFluids(
            Fluid.of("gtceu:eternity", 10))
        .itemOutputs(
            "2x kubejs:infused_reactive_chaos_pellet")
        .circuit(19)
        .duration(20 * 5)
        .EUt((GTValues.VA[GTValues.UXV]))

    event.recipes.gtceu.mixer("unstableenrichedthoriumfuel")
        .inputFluids(
            "gtceu:depleted_thorium_fuel 30000",
            "gtceu:radon 15000")
        .itemInputs(
            "16x gtceu:plutonium_241_dust",
            "32x gtceu:cadmium_dust","16x gtceu:cleaned_californium_dust")
        .outputFluids(
            "gtceu:unstable_enriched_thorium_fuel 60000")
        .duration(20 * 100)
        .EUt((GTValues.VA[GTValues.UV]))

    event.recipes.gtceu.mixer("treatedlightnaquadriafuel")
        .itemInputs(
            "56x gtceu:polyphenylene_sulfide_dust")
        .inputFluids(
            "gtceu:light_naquadria_fuel 12500",
            "gtceu:nitration_mixture 3000")
        .outputFluids(
            "gtceu:treated_light_naquadria_fuel 18000")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(20 * 100)
        .EUt((GTValues.VA[GTValues.UV]))

    event.recipes.gtceu.mixer("treatedheavynaquadriafuel")
        .itemInputs(
            "48x gtceu:polybenzimidazole_dust")
        .inputFluids(
            "gtceu:heavy_naquadria_fuel 10000",
            "gtceu:sterilized_growth_medium 5000")
        .outputFluids(
            "gtceu:treated_heavy_naquadria_fuel 18000")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(20 * 100)
        .EUt((GTValues.VA[GTValues.UHV]))

    event.recipes.gtceu.mixer("solar_eclipse_alloy_dust")
        .itemInputs(
            "4x gtceu:cosmic_neutronium_dust")
        .inputFluids(
            "gtceu:awakened_draconium 576")
        .itemOutputs(
            "16x gtceu:solar_eclipse_alloy_dust")
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.UIV])
})