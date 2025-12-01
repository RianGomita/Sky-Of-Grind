ServerEvents.recipes(event => {
  const GTMTHINGS_WHITELIST = [
    "wireless_energy_monitor",
  ].map(id => ({ output: `gtmthings:${id}` }))
  const TIERS = [
    "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv",
    "uhv", "uev", "uiv", "uxv", "opv", "max"
  ]

  const tierIndex = tier => TIERS.indexOf(tier)
  const tiersBetween = (start, end) => TIERS.slice(tierIndex(start), tierIndex(end) + 1)

  const getHatchId = (tier, amp, isInput, isLaser, isWireless) => {
    const hatchIoName = isInput ? ["input", "target"] : ["output", "source"]
    const wirelessPart = isWireless ? `wireless_` : ""
    const modId = isWireless ? "gtmthings" : "gtceu"

    const doPrefix = isWireless || isLaser
    const ampPrefix = doPrefix ? `${amp}_` : ""
    const ampSuffix = !doPrefix && amp !== "2a" ? `_${amp}` : ""

    const commonPrefix = `${modId}:${tier}_${ampPrefix}${wirelessPart}`

    return isLaser
      ? `${commonPrefix}laser_${hatchIoName[1]}_hatch${ampSuffix}`
      : `${commonPrefix}energy_${hatchIoName[0]}_hatch${ampSuffix}`
  }

  const addWirelessHatchRecipe = (tier, amp, isInput, isLaser) => {
    const wirelessHatchId = getHatchId(tier, amp, isInput, isLaser, true)
    const gtceuHatchId = getHatchId(tier, amp, isInput, isLaser, false)
    const fluxItem = isInput ? "point" : "plug"

    for (const hatch of [wirelessHatchId, gtceuHatchId]) {
      if (!Item.exists(hatch)) {
        console.warn(`${hatch} does not exist`)
        return
      }
    }

    event.shapeless(wirelessHatchId, [gtceuHatchId, `fluxnetworks:flux_${fluxItem}`])
  }

  event.remove({ mod: "gtmthings", not: GTMTHINGS_WHITELIST })

  tiersBetween("lv", "opv").forEach(tier => {
    event.shapeless(`gtmthings:${tier}_wireless_energy_receive_cover`, [
      `gtceu:${tier}_energy_input_hatch`,
      "gtceu:machine_controller_cover",
      "fluxnetworks:flux_point"
    ])
  })

  tiersBetween("lv", "uxv").forEach((tier, index) => {
    const energyAmps = ["2a"]

    if (index >= tierIndex("ev")) {
      energyAmps.push("4a", "16a")
    }

    energyAmps.forEach(amp => {
      addWirelessHatchRecipe(tier, amp, true, false)
      addWirelessHatchRecipe(tier, amp, false, false)
    })

    if (index >= tierIndex("iv")) {
      let laserAmps = ["256a", "1024a", "4096a"]

      laserAmps.forEach(amp => {
        addWirelessHatchRecipe(tier, amp, true, true)
        addWirelessHatchRecipe(tier, amp, false, true)
      })
    }
  })

    event.shapeless("gtmthings:wireless_computation_receiver_hatch", [
    "gtceu:computation_receiver_hatch",
    "fluxnetworks:flux_point"
  ])
  event.shapeless("gtmthings:wireless_computation_transmitter_hatch", [
    "gtceu:computation_transmitter_hatch",
    "fluxnetworks:flux_plug"
  ])
  event.shapeless("gtmthings:wireless_energy_binding_tool", [
    "gtceu:data_stick",
    "gtceu:machine_controller_cover"
  ])
  event.shapeless("gtmthings:advanced_terminal", [
    "gtceu:terminal",
    "gtceu:data_stick"
  ])
  event.shapeless("gtmthings:wireless_energy_interface", [
    "gtmthings:wireless_energy_monitor",
    "gtceu:power_substation",
    "ae2:interface",
    "fluxnetworks:flux_plug"
  ])
})