ServerEvents.recipes(event => {
  const LASER_RECIPES = [
    { tier: "iv", amp: "16384a", cable: "gtceu:platinum_octal_cable", circuitTarget: 4, circuitSource: 4, eut: GTValues.VA[GTValues.IV] },
    { tier: "iv", amp: "65536a", cable: "gtceu:platinum_hex_cable", circuitTarget: 5, circuitSource: 5, eut: GTValues.VA[GTValues.IV] },

    { tier: "luv", amp: "16384a", cable: "gtceu:niobium_titanium_octal_cable", circuitTarget: 4, circuitSource: 4, eut: GTValues.VA[GTValues.LuV] },
    { tier: "luv", amp: "65536a", cable: "gtceu:niobium_titanium_hex_cable", circuitTarget: 5, circuitSource: 5, eut: GTValues.VA[GTValues.LuV] },
    
    { tier: "zpm", amp: "16384a", cable: "gtceu:vanadium_gallium_octal_cable", circuitTarget: 4, circuitSource: 4, eut: GTValues.VA[GTValues.ZPM] },
    { tier: "zpm", amp: "65536a", cable: "gtceu:vanadium_gallium_hex_cable", circuitTarget: 5, circuitSource: 5, eut: GTValues.VA[GTValues.ZPM] },
    
    { tier: "uv", amp: "16384a", cable: "gtceu:yttrium_barium_cuprate_octal_cable", circuitTarget: 4, circuitSource: 4, eut: GTValues.VA[GTValues.UV] },
    { tier: "uv", amp: "65536a", cable: "gtceu:yttrium_barium_cuprate_hex_cable", circuitTarget: 5, circuitSource: 5, eut: GTValues.VA[GTValues.UV] },
    
    { tier: "uhv", amp: "16384a", cable: "gtceu:europium_octal_cable", circuitTarget: 4, circuitSource: 4, eut: GTValues.VA[GTValues.UHV] },
    { tier: "uhv", amp: "65536a", cable: "gtceu:europium_hex_cable", circuitTarget: 5, circuitSource: 5, eut: GTValues.VA[GTValues.UHV] },
    
    { tier: "uev", amp: "16384a", cable: "gtceu:draconium_octal_cable", circuitTarget: 4, circuitSource: 4, eut: GTValues.VA[GTValues.UEV] },
    { tier: "uev", amp: "65536a", cable: "gtceu:draconium_hex_cable", circuitTarget: 5, circuitSource: 5, eut: GTValues.VA[GTValues.UEV] },
    
    { tier: "uiv", amp: "16384a", cable: "gtceu:awakened_draconium_octal_cable", circuitTarget: 4, circuitSource: 4, eut: GTValues.VA[GTValues.UIV] },
    { tier: "uiv", amp: "65536a", cable: "gtceu:awakened_draconium_hex_cable", circuitTarget: 5, circuitSource: 5, eut: GTValues.VA[GTValues.UIV] },
    
    { tier: "uxv", amp: "16384a", cable: "gtceu:chaos_octal_wire", circuitTarget: 4, circuitSource: 4, eut: GTValues.VA[GTValues.UXV] },
    { tier: "uxv", amp: "65536a", cable: "gtceu:chaos_hex_wire", circuitTarget: 5, circuitSource: 5, eut: GTValues.VA[GTValues.UXV] }
  ]

  LASER_RECIPES.forEach(recipe => {
    const tier = recipe.tier
    const amp = recipe.amp
    const cable = recipe.cable
    const circuitTarget = recipe.circuitTarget
    const circuitSource = recipe.circuitSource
    const eut = recipe.eut
    const lensAmount = amp === "16384a" ? 8 : 16
    const pumpAmount = amp === "16384a" ? 8 : 16
    const duration = amp === "16384a" ? 20*120 : 20*240
    
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
      .duration(duration)
      .EUt(eut)
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
      .duration(duration)
      .EUt(eut)
      .circuit(circuitSource)
  })
})