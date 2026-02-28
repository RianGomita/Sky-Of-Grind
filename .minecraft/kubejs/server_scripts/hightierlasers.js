ServerEvents.recipes(event => {
  const LASER_RECIPES = [
    { tier: "iv", amp: "16384a", cable: "gtceu:platinum_octal_cable", circuitTarget: 4, circuitSource: 4 },
    { tier: "iv", amp: "65536a", cable: "gtceu:platinum_hex_cable", circuitTarget: 5, circuitSource: 5 },

    { tier: "luv", amp: "16384a", cable: "gtceu:niobium_titanium_octal_cable", circuitTarget: 4, circuitSource: 4 },
    { tier: "luv", amp: "65536a", cable: "gtceu:niobium_titanium_hex_cable", circuitTarget: 5, circuitSource: 5 },
    
    { tier: "zpm", amp: "16384a", cable: "gtceu:vanadium_gallium_octal_cable", circuitTarget: 4, circuitSource: 4 },
    { tier: "zpm", amp: "65536a", cable: "gtceu:vanadium_gallium_hex_cable", circuitTarget: 5, circuitSource: 5 },
    
    { tier: "uv", amp: "16384a", cable: "gtceu:yttrium_barium_cuprate_octal_cable", circuitTarget: 4, circuitSource: 4 },
    { tier: "uv", amp: "65536a", cable: "gtceu:yttrium_barium_cuprate_hex_cable", circuitTarget: 5, circuitSource: 5 },
    
    { tier: "uhv", amp: "16384a", cable: "gtceu:europium_octal_cable", circuitTarget: 4, circuitSource: 4 },
    { tier: "uhv", amp: "65536a", cable: "gtceu:europium_hex_cable", circuitTarget: 5, circuitSource: 5 },
    
    { tier: "uev", amp: "16384a", cable: "gtceu:draconium_octal_cable", circuitTarget: 4, circuitSource: 4 },
    { tier: "uev", amp: "65536a", cable: "gtceu:draconium_hex_cable", circuitTarget: 5, circuitSource: 5 },
    
    { tier: "uiv", amp: "16384a", cable: "gtceu:awakened_draconium_octal_cable", circuitTarget: 4, circuitSource: 4 },
    { tier: "uiv", amp: "65536a", cable: "gtceu:awakened_draconium_hex_cable", circuitTarget: 5, circuitSource: 5 },
    
    { tier: "uxv", amp: "16384a", cable: "gtceu:chaos_octal_wire", circuitTarget: 4, circuitSource: 4 },
    { tier: "uxv", amp: "65536a", cable: "gtceu:chaos_hex_wire", circuitTarget: 5, circuitSource: 5 }
  ]

LASER_RECIPES.forEach(recipe => {
    const tier = recipe.tier
    const amp = recipe.amp
    const cable = recipe.cable
    const circuitTarget = recipe.circuitTarget
    const circuitSource = recipe.circuitSource
    const lensAmount = amp === "16384a" ? 8 : 16
    const pumpAmount = amp === "16384a" ? 8 : 16
    
    const targetHatchId = `gtmthings:${tier}_${amp}_wireless_laser_target_hatch`
    
    event.recipes.gtceu.assembler(targetHatchId)
      .itemInputs(
        `gtceu:${tier}_machine_hull`,
        `${lensAmount}x gtceu:diamond_lens`,
        `${lensAmount}x gtceu:${tier}_sensor`,
        `${pumpAmount}x gtceu:${tier}_electric_pump`,
        `4x ${cable}`
      )
      .itemOutputs(targetHatchId)
      .duration(600)
      .EUt(480)
      .circuit(circuitTarget)

    const sourceHatchId = `gtmthings:${tier}_${amp}_wireless_laser_source_hatch`
    
    event.recipes.gtceu.assembler(sourceHatchId)
      .itemInputs(
        `gtceu:${tier}_machine_hull`,
        `${lensAmount}x gtceu:diamond_lens`,
        `${lensAmount}x gtceu:${tier}_emitter`,
        `${pumpAmount}x gtceu:${tier}_electric_pump`,
        `4x ${cable}`
      )
      .itemOutputs(sourceHatchId)
      .duration(600)
      .EUt(480)
      .circuit(circuitSource)
  })
})