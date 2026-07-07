ServerEvents.recipes(sog => {

    sog.recipes.gtceu.electric_blast_furnace('gtceu:ebf/hot_triplatirium_235')
       .itemInputs('gtceu:triplatirium_235_dust')
       .inputFluids('gtceu:darmstadtium 63')
       .itemOutputs('gtceu:hot_triplatirium_235_ingot')
       .blastFurnaceTemp(10800)
       .duration(1400)
       .EUt(524288)
    sog.recipes.gtceu.vacuum_freezer('vac/triplatirium_235_ingot')
       .itemInputs('gtceu:hot_triplatirium_235_ingot')
       .inputFluids('gtceu:liquid_helium 1000')
       .itemOutputs('gtceu:triplatirium_235_ingot')
       .duration(1400)
       .EUt(524288)

    sog.recipes.gtceu.fluid_heater('cleaned_trisulfate_slurry')
       .circuit('24')
       .inputFluids('gtceu:trisulfate_slurry 1000')
       .outputFluids('gtceu:cleaned_trisulfate_slurry 990')
       .cleanroom(CleanroomType.CLEANROOM)
       .duration(20)
       .EUt(524288)


    sog.recipes.gtceu.electric_blast_furnace('gtceu:ebf/hot_atomic_alloy')
       .itemInputs('gtceu:atomic_alloy_dust')
       .inputFluids('gtceu:krypton 1000')
       .itemOutputs('gtceu:hot_atomic_alloy_ingot')
       .blastFurnaceTemp(10800)
       .duration(1400)
       .EUt(524288)
    sog.recipes.gtceu.vacuum_freezer('vac/atomic_alloy_ingot')
       .itemInputs('gtceu:hot_atomic_alloy_ingot')
       .inputFluids('gtceu:liquid_helium 1000')
       .itemOutputs('gtceu:atomic_alloy_ingot')
       .duration(25)
       .EUt(524288)
    
    


    














})