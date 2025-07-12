ServerEvents.recipes(event => {
  event.recipes.gtceu.plasma_nexus("energized_anomaly")
    .itemInputs(Item.of("kubejs:quantum_anomaly", 2))
    .inputFluids(
      Fluid.of("gtceu:eternity", 20),
      Fluid.of("gtceu:hypercharged_nihonium_plasma", 256000)
    )
    .itemOutputs("1x kubejs:energized_quantum_anomaly")
    .circuit(2)
    .duration(20 * 192)
    .EUt(GTValues.VA[GTValues.UXV])

  event.recipes.gtceu.plasma_nexus("quantum_anomaly")
    .itemInputs(Item.of("kubejs:quantum_anomaly"))
    .inputFluids(Fluid.of("gtceu:eternity", 20))
    .itemOutputs(Item.of("kubejs:quantum_anomaly", 2))
    .circuit(1)
    .duration(20 * 192)
    .EUt(GTValues.VA[GTValues.UXV])
})
