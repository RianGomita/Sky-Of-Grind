ServerEvents.recipes(sog => {

    sog.recipes.gtceu.singularity_reactor('proto_matter')
        .perTick(true)
        .inputFluids(
            'gtceu:proto_matter 10',
            'gtceu:exotic_particle_suspension 20'
        )
        .perTick(false)
    .duration(20*20)
    .EUt(-8796093022208)

})