// Removing of specific Tooltips
ItemEvents.tooltip(event => {
  const items = [
    "gtmutils:pterb_machine",
    "steamadditions:steam_foundry",
    "steamadditions:steam_separator",
    "gtceu:wooden_multiblock_tank",
    "gtceu:bronze_multiblock_tank",
    "gtceu:steel_multiblock_tank"
  ]

  items.forEach(id => {
    event.addAdvanced(id, (item, advanced, text) => {
      while (text.size() > 1) {
        text.remove(1)
      }
    })
  })
})

// Removing of tooltips containing "gtceu"

const translationKeysToRemove = [
    // "gtceu.universal.tooltip.fluid_storage_capacity",
    "gtceu.machine.network_switch.tooltip.0",
    "gtceu.machine.network_switch.tooltip.1",
    "gtceu.machine.network_switch.tooltip.2",
    "gtceu.machine.network_switch.tooltip.3",
    "gtceu.machine.central_monitor.tooltip",
    "gtceu.machine.power_substation.tooltip.0",
    "gtceu.machine.power_substation.tooltip.1",
    "gtceu.machine.power_substation.tooltip.2",
    "gtceu.machine.power_substation.tooltip.3",
    "gtceu.machine.power_substation.tooltip.4",
    "gtceu.machine.power_substation.tooltip.5",
    "gtceu.machine.active_transformer.tooltip.0",
    "gtceu.machine.active_transformer.tooltip.1",
    "gtceu.machine.active_transformer.tooltip.2",
    "gtceu.machine.data_bank.tooltip.0",
    "gtceu.machine.data_bank.tooltip.1",
    "gtceu.machine.data_bank.tooltip.2",
    "gtceu.machine.data_bank.tooltip.3",
    "gtceu.machine.data_bank.tooltip.4",
    "gtceu.machine.cleanroom.tooltip",
    "gtceu.machine.cleanroom.tooltip.0",
    "gtceu.machine.cleanroom.tooltip.1",
    "gtceu.machine.cleanroom.tooltip.2",
    "gtceu.machine.cleanroom.tooltip.3",
    "gtceu.machine.cleanroom.tooltip.4",
    "gtceu.machine.cleanroom.tooltip.5",
    "gtceu.machine.cleanroom.tooltip.6",
    "gtceu.machine.cleanroom.tooltip.7",
    "gtceu.machine.cleanroom.tooltip.ae2.no_channels",
    "gtceu.machine.cleanroom.tooltip.hold_ctrl",
    "gtceu.machine.large_miner.ev.tooltip",
    "gtceu.machine.large_miner.iv.tooltip",
    "gtceu.machine.large_miner.luv.tooltip",
    "gtceu.machine.miner.multi.modes",
    "gtceu.machine.miner.multi.production",
    "gtceu.machine.miner.multi.description",
    "gtceu.machine.miner.fluid_usage",
    "gtceu.universal.tooltip.working_area_chunks",
    "gtceu.machine.mv_fluid_drilling_rig.tooltip",
    "gtceu.machine.hv_fluid_drilling_rig.tooltip",
    "gtceu.machine.ev_fluid_drilling_rig.tooltip",
    "gtceu.machine.fluid_drilling_rig.description",
    "gtceu.machine.fluid_drilling_rig.depletion",
    "gtceu.machine.bedrock_ore_miner.depletion",
    "gtceu.universal.tooltip.energy_tier_range",
    "gtceu.machine.bedrock_ore_miner.description",
    "gtceu.machine.fluid_drilling_rig.production",
    "gtceu.machine.bedrock_ore_miner.production",
    "gtceu.universal.tooltip.base_production_eut",
    "gtceu.multiblock.turbine.efficiency_tooltip",
    "gtceu.machine.fusion_reactor.overclocking",
    "gtceu.machine.fusion_reactor.capacity",
    "gtceu.multiblock.luv_fusion_reactor.description",
    "gtceu.multiblock.zpm_fusion_reactor.description",
    "gtceu.multiblock.uv_fusion_reactor.description",
    "gtceu.fluid_pipe.max_temperature",
    "gtceu.machine.large_combustion_engine.tooltip.boost_regular",
    "gtceu.multiblock.large_boiler.max_temperature",
    "gtceu.machine.large_combustion_engine.tooltip.boost_extreme",
    "gtceu.universal.tooltip.uses_per_hour_lubricant",
    "gtceu.machine.multiblock.tank.tooltip",
    "gtceu.machine.large_combustion_engine.tooltip",
    "gtceu.multiblock.parallelizable.tooltip",
    "gtceu.multiblock.large_boiler.explosion_tooltip",
    "gtceu.machine.large_chemical_reactor.tooltip",
    "gtceu.machine.vacuum_freezer.tooltip",
    "gtceu.machine.extreme_combustion_engine.tooltip",
    "gtceu.machine.implosion_compressor.tooltip",
    "gtceu.multiblock.large_boiler.heat_time_tooltip",
    "gtceu.machine.cracker.tooltip",
    "gtceu.machine.cracker.tooltip.1",
    "gtceu.machine.pyrolyse_oven.tooltip",
    "gtceu.machine.pyrolyse_oven.tooltip.1",
    "gtceu.machine.electric_blast_furnace.tooltip.0",
    "gtceu.machine.electric_blast_furnace.tooltip.1",
    "gtceu.machine.electric_blast_furnace.tooltip.2",
    "gtceu.machine.distillation_tower.tooltip",
    "gtceu.machine.electric_blast_furnace.tooltip",
    "gtceu.machine.steam_oven.tooltip",
    "gtceu.machine.steam_grinder.tooltip",
    "gtceu.machine.coke_oven.tooltip",
    "gtceu.multiblock.exact_hatch_1.tooltip",
    "gtceu.machine.assembly_line.tooltip"
]
Array.from(Array(4).keys()).forEach(i => {
    const template = "gtceu.machine.available_recipe_map_INDEX.tooltip"
    translationKeysToRemove.push(template.replace("INDEX", `${i + 1}`))
})
ItemEvents.tooltip(event=>{

    const gtceuItems = Ingredient.of("@gtceu").itemIds.toArray().map(id  => `${id}`)
    event.addAdvanced(gtceuItems, (item, advanced, text)=>{
        text.removeIf(component => {
            const translate = JSON.parse(component.toJson().toString()).translate
            if(!translate) return false
            return translationKeysToRemove.indexOf(`${translate}`) != -1
        })
    })
    event.addAdvanced('gtceu:multi_smelter', (item, advanced, text)=>{
        text.removeIf(component => {
            const translate = JSON.parse(component.toJson().toString()).translate
            if(!translate) return false
            return translate.includes("gtceu.machine.available_recipe_map_")
        })
    })
})

// Const for general Tooltips

const PALLADIUM_SUBSTATION_CASING_TOOLTIP_POWER_SUBSTATION = {
    controller: "§7Front",
    energy: "§7Any Palladium Substation Casing",
    energyoutput: "§7Any Palladium Substation Casing",
    maintenance: "§7Any Palladium Substation Casing"
};
const COMPUTER_CASING_TOOLTIP_HPCA = {
    controller: "§7Front",
    fluidinput: "§7Any Computer Casing",
    energy: "§7Any Computer Casing",
    maintenance: "§7Any Computer Casing",
    dataoutput: "§7Any Computer Casing"
};
const HIGH_POWER_CASING_TOOLTIP_DATA_BANK = {
    controller: "§7Front",
    energy: "§7High Power Casings around the Controller",
    maintenance: "§7High Power Casings around the Controller",
    dataaccesshatch: "§7Every visible Computer Casing",
    datainput: "§7Every visible Computer Casing",
    dataoutput: "§7Every visible Computer Casing"
};
const COMPUTER_CASING_TOOLTIP_RESEARCH_STATION = {
    controller: "§7Front",
    energy: "§7One of the 9 Computer Casings on the Back",
    maintenance: "§7One of the 9 Computer Casings on the Back",
    datainput: "§7One of the 9 Computer Casings on the Back"
};
const HIGH_POWER_CASING_TOOLTIP_ACTIVE_TRANSFORMER = {
    controller: "§7Front",
    energy: "§7Any High Power Casing",
    energyoutput: "§7Any High Power Casing"
};
const SOLID_MACHINE_CASING_TOOLTIP_MINER_PUMP = {
    controller: "§7Front",
    itemoutput: "§7Any Solid Machine Casing at the bottom",
    fluidoutput: "§7Any Solid Machine Casing at the bottom",
    energy: "§7Any Solid Machine Casing at the bottom"
};
const STABLE_TITANIUM_MACHINE_CASING_TOOLTIP_MINER_PUMP = {
    controller: "§7Front",
    itemoutput: "§7Any Stable Titanium Machine Casing",
    fluidoutput: "§7Any Stable Titanium Machine Casing",
    energy: "§7Any Stable Titanium Machine Casing"
};
const ROBUST_TUNGSTENSTEEL_MACHINE_CASING_TOOLTIP_MINER_PUMP = {
    controller: "§7Front",
    itemoutput: "§7Any Robust Tungstensteel Machine Casing",
    fluidoutput: "§7Any Robust Tungstensteel Machine Casing",
    energy: "§7Any Robust Tungstensteel Machine Casing"
};
const WATERTIGHT_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Watertight Casing",
    fluidinput: "§7Any Watertight Casing",
    itemoutput: "§7Any Watertight Casing",
    fluidoutput: "§7Any Watertight Casing",
    energy: "§7Any Watertight Casing",
    maintenance: "§7Any Watertight Casing",
    muffler: "§7Any Watertight Casing",
    pch: "§7Any Watertight Casing"
};
const WATERTIGHT_CASING_DT_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any first two layer (Watertight Casing)",
    fluidinput: "§7Any first two layer (Watertight Casing)",
    itemoutput: "§7Any first two layer (Watertight Casing)",
    fluidoutput: "§7Any layer except first two (Watertight Casing - one per layer)",
    energy: "§7Any first two layer (Watertight Casing)",
    maintenance: "§7Any first two layer (Watertight Casing)",
    muffler: "§7Top Center",
    pch: "§7Any first two layer (Watertight Casing)"
};
const LARGE_SCALE_ASSEMBLER_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Large-Scale Assembler Casing",
    fluidinput: "§7Any Large-Scale Assembler Casing",
    itemoutput: "§7Any Large-Scale Assembler Casing",
    fluidoutput: "§7Any Large-Scale Assembler Casing",
    energy: "§7Any Large-Scale Assembler Casing",
    maintenance: "§7Any Large-Scale Assembler Casing",
    pch: "§7Any Large-Scale Assembler Casing"
};
const STRESS_PROOF_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Stress Proof Casing",
    fluidinput: "§7Any Stress Proof Casing",
    itemoutput: "§7Any Stress Proof Casing",
    fluidoutput: "§7Any Stress Proof Casing",
    energy: "§7Any Stress Proof Casing",
    maintenance: "§7Any Stress Proof Casing",
    pch: "§7Any Stress Proof Casing"
};
const NONCONDUCTING_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Nonconducting Casing",
    fluidinput: "§7Any Nonconducting Casing",
    itemoutput: "§7Any Nonconducting Casing",
    fluidoutput: "§7Any Nonconducting Casing",
    energy: "§7Any Nonconducting Casing",
    maintenance: "§7Any Nonconducting Casing",
    pch: "§7Any Nonconducting Casing"
};
const PLASCRETE_CASING_TOOLTIP = {
    controller: "§7Top middle",
    energy: "§7Any Plascrete",
    maintenance: "§7Any Plascrete",
    filtercasings: "§7In the ceiling, excluding the edges",
    hullsdiodes: "§7Any Plascrete"
};
const VIBRATION_SAFE_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Vibration-Safe Casing",
    fluidinput: "§7Any Vibration-Safe Casing",
    itemoutput: "§7Any Vibration-Safe Casing",
    fluidoutput: "§7Any Vibration-Safe Casing",
    energy: "§7Any Vibration-Safe Casing",
    maintenance: "§7Any Vibration-Safe Casing",
    pch: "§7Any Vibration-Safe Casing"
};
const HIGH_TEMPERATURE_SMELTING_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any High Temperature Smelting Casing",
    fluidinput: "§7Any High Temperature Smelting Casing",
    itemoutput: "§7Any High Temperature Smelting Casing",
    fluidoutput: "§7Any High Temperature Smelting Casing",
    energy: "§7Any High Temperature Smelting Casing",
    maintenance: "§7Any High Temperature Smelting Casing",
    muffler: "§7Top Center",
    pch: "§7Any High Temperature Smelting Casing"
};
const HIGH_TEMPERATURE_SMELTING_CASING_RHF_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any High Temperature Smelting Casing at the bottom",
    fluidinput: "§7Any High Temperature Smelting Casing at the bottom",
    itemoutput: "§7Any High Temperature Smelting Casing at the bottom",
    fluidoutput: "§7Any High Temperature Smelting Casing at the bottom",
    energy: "§7Any High Temperature Smelting Casing at the bottom",
    maintenance: "§7Any High Temperature Smelting Casing at the bottom",
    muffler: "§7Top Center",
    pch: "§7Any High Temperature Smelting Casing at the bottom"
};
const CORROSION_PROOF_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Corrosion Proof Casing",
    fluidinput: "§7Any Corrosion Proof Casing",
    itemoutput: "§7Any Corrosion Proof Casing",
    fluidoutput: "§7Any Corrosion Proof Casing",
    energy: "§7Any Corrosion Proof Casing",
    maintenance: "§7Any Corrosion Proof Casing",
    muffler: "§7Top Center",
    pch: "§7Any Corrosion Proof Casing"
};
const SHOCK_PROOF_CUTTING_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Shock Proof Cutting Casing",
    fluidinput: "§7Any Shock Proof Cutting Casing",
    itemoutput: "§7Any Shock Proof Cutting Casing",
    fluidoutput: "§7Any Shock Proof Cutting Casing",
    energy: "§7Any Shock Proof Cutting Casing",
    maintenance: "§7Any Shock Proof Cutting Casing",
    muffler: "§7Top Center",
    pch: "§7Any Shock Proof Cutting Casing"
};
const LASER_SAFE_ENGRAVING_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Laser-Safe Engraving Casing",
    fluidinput: "§7Any Laser-Safe Engraving Casing",
    itemoutput: "§7Any Laser-Safe Engraving Casing",
    fluidoutput: "§7Any Laser-Safe Engraving Casing",
    energy: "§7Any Laser-Safe Engraving Casing",
    maintenance: "§7Any Laser-Safe Engraving Casing",
    muffler: "§7Top Center",
    pch: "§7Any Laser-Safe Engraving Casing"
};
const SECURE_MACERATION_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Secure Maceration Casing",
    fluidinput: "§7Any Secure Maceration Casing",
    itemoutput: "§7Any Secure Maceration Casing",
    fluidoutput: "§7Any Secure Maceration Casing",
    energy: "§7Any Secure Maceration Casing",
    maintenance: "§7Any Secure Maceration Casing",
    muffler: "§7Top Center",
    pch: "§7Any Secure Maceration Casing"
};
const REACTION_SAFE_MIXING_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Reaction-Safe Mixing Casing",
    fluidinput: "§7Any Reaction-Safe Mixing Casing",
    itemoutput: "§7Any Reaction-Safe Mixing Casing",
    fluidoutput: "§7Any Reaction-Safe Mixing Casing",
    energy: "§7Any Reaction-Safe Mixing Casing",
    maintenance: "§7Any Reaction-Safe Mixing Casing",
    muffler: "§7Top Center",
    pch: "§7Any Reaction-Safe Mixing Casing"
};
const ROBUST_TUNGSTENSTEEL_MACHINE_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Robust Tungstensteel Machine Casing",
    fluidinput: "§7Any Robust Tungstensteel Machine Casing",
    itemoutput: "§7Any Robust Tungstensteel Machine Casing",
    fluidoutput: "§7Any Robust Tungstensteel Machine Casing",
    energy: "§7Any Robust Tungstensteel Machine Casing",
    maintenance: "§7Any Robust Tungstensteel Machine Casing",
    muffler: "§7Top Center",
    pch: "§7Any Robust Tungstensteel Machine Casing"
};
const FROST_PROOF_ALUMINIUM_MACHINE_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Frost Proof Aluminium Machine Casing",
    fluidinput: "§7Any Frost Proof Aluminium Machine Casing",
    itemoutput: "§7Any Frost Proof Aluminium Machine Casing",
    fluidoutput: "§7Any Frost Proof Aluminium Machine Casing",
    energy: "§7Any Frost Proof Aluminium Machine Casing",
    maintenance: "§7Any Frost Proof Aluminium Machine Casing",
    muffler: "§7Top Center",
    pch: "§7Any Frost Proof Aluminium Machine Casing"
};
const CHEMICALLY_INERT_PTFE_MACHINE_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Chemically Inert PTFE Machine Casing",
    fluidinput: "§7Any Chemically Inert PTFE Machine Casing",
    itemoutput: "§7Any Chemically Inert PTFE Machine Casing",
    fluidoutput: "§7Any Chemically Inert PTFE Machine Casing",
    energy: "§7Any Chemically Inert PTFE Machine Casing",
    maintenance: "§7Any Chemically Inert PTFE Machine Casing",
    muffler: "§7Top Center",
    pch: "§7Any Chemically Inert PTFE Machine Casing"
};
const SOLID_MACHINE_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Solid Machine Casing",
    fluidinput: "§7Any Solid Machine Casing",
    itemoutput: "§7Any Solid Machine Casing",
    fluidoutput: "§7Any Solid Machine Casing",
    energy: "§7Any Solid Machine Casing",
    maintenance: "§7Any Solid Machine Casing",
    muffler: "§7Top Center",
    pch: "§7Any Solid Machine Casing"
};
const SOLID_MACHINE_CASING_ASSEMBLY_LINE_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Middle Bottom Layer every slice except last",
    fluidinput: "§7Any Solid Machine Casing at the bottom except middle ones",
    itemoutput: "§7Middle Bottom Layer last slice",
    fluidoutput: "§7Any Solid Machine Casing",
    energy: "§7Any Solid Machine Casing on top",
    maintenance: "§7Any Solid Machine Casing",
    muffler: "§7Top Center",
    pch: "§7Any Solid Machine Casing",
    datahatch: "§7Any Assembly Line Grating on controller side"
};
const CLEAN_STAINLESS_STEEL_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Clean Stainless Steel Casing",
    fluidinput: "§7Any Clean Stainless Steel Casing",
    itemoutput: "§7Any Clean Stainless Steel Casing",
    fluidoutput: "§7Any Clean Stainless Steel Casing",
    energy: "§7Any Clean Stainless Steel Casing",
    energyoutput: "§7Any Clean Stainless Steel Casing",
    maintenance: "§7Any Clean Stainless Steel Casing",
    muffler: "§7Any Clean Stainless Steel Casing",
    pch: "§7Any Clean Stainless Steel Casing"
};
const STABLE_TITANIUM_MACHINE_CASING_COMBUSTION_TOOLTIP = {
    controller: "§7Front",
    fluidinput: "§7Non-edge Stable Titanium Machine Casings",
    energyoutput: "§7Backside in the middle",
    maintenance: "§7Non-edge Stable Titanium Machine Casings",
    muffler: "§7Non-edge Stable Titanium Machine Casings"
};
const ROBUST_TUNGSTENSTEEL_MACHINE_CASING_COMBUSTION_TOOLTIP = {
    controller: "§7Front",
    fluidinput: "§7Non-edge Robust Tungstensteel Machine Casings",
    energyoutput: "§7Backside in the middle",
    maintenance: "§7Non-edge Robust Tungstensteel Machine Casings",
    muffler: "§7Non-edge Robust Tungstensteel Machine Casings"
};
const MAGNALIUM_TURBINE_CASING_TURBINE_TOOLTIP = {
    controller: "§7Front",
    fluidinput: "§7Non-edge Magnalium Turbine Casings",
    fluidoutput: "§7Non-edge Magnalium Turbine Casings",
    energyoutput: "§7Left or right side in the middle",
    rotorholder: "§7Left or right side in the middle",
    maintenance: "§7Non-edge Magnalium Turbine Casings",
    muffler: "§7Non-edge Magnalium Turbine Casings"
};
const STAINLESS_TURBINE_CASING_TURBINE_TOOLTIP = {
    controller: "§7Front",
    fluidinput: "§7Non-edge Stainless Turbine Casings",
    energyoutput: "§7Left or right side in the middle",
    rotorholder: "§7Left or right side in the middle",
    maintenance: "§7Non-edge Stainless Turbine Casings",
    muffler: "§7Non-edge Stainless Turbine Casings"
};
const TUNGSTENSTEEL_TURBINE_CASING_TURBINE_TOOLTIP = {
    controller: "§7Front",
    fluidinput: "§7Non-edge Tungstensteel Turbine Casings",
    energyoutput: "§7Left or right side in the middle",
    rotorholder: "§7Left or right side in the middle",
    maintenance: "§7Non-edge Tungstensteel Turbine Casings",
    muffler: "§7Non-edge Tungstensteel Turbine Casings"
};
const CLEAN_STAINLESS_STEEL_CASING_TOOLTIP_LARGESOLAR = {
    controller: "§7Front",
    iteminput: "§7Any Clean Stainless Steel Casing (ULV Input Bus!)",
    fluidinput: "§7Any Clean Stainless Steel Casing",
    itemoutput: "§7Any Clean Stainless Steel Casing",
    fluidoutput: "§7Any Clean Stainless Steel Casing",
    energy: "§7Any Clean Stainless Steel Casing",
    energyoutput: "§7Any Clean Stainless Steel Casing",
    maintenance: "§7Any Clean Stainless Steel Casing",
    muffler: "§7Any Clean Stainless Steel Casing",
    pch: "§7Any Clean Stainless Steel Casing"
};
const CLEAN_STAINLESS_STEEL_CASING_DT_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Bottom Clean Stainless Steel Casing",
    fluidinput: "§7Any Bottom Clean Stainless Steel Casing",
    itemoutput: "§7Any Bottom Clean Stainless Steel Casing",
    fluidoutput: "§7Every Layer one output hatch",
    energy: "§7Any Bottom Clean Stainless Steel Casing",
    maintenance: "§7Any first two layers Clean Stainless Steel Casing",
    muffler: "§7Any Clean Stainless Steel Casing",
    pch: "§7Any Clean Stainless Steel Casing"
};
const ULV_MACHINE_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any ULV Machine Casing",
    fluidinput: "§7Any ULV Machine Casing",
    itemoutput: "§7Any ULV Machine Casing",
    fluidoutput: "§7Any ULV Machine Casing",
    energy: "§7Any ULV Machine Casing",
    maintenance: "§7Any ULV Machine Casing",
    muffler: "§7Any ULV Machine Casing",
    pch: "§7Any ULV Machine Casing"
};
const HEAT_PROOF_INVAR_MACHINE_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Heat Proof Invar Machine Casing",
    fluidinput: "§7Any Heat Proof Invar Machine Casing",
    itemoutput: "§7Any Heat Proof Invar Machine Casing",
    fluidoutput: "§7Any Heat Proof Invar Machine Casing",
    energy: "§7Any Heat Proof Invar Machine Casing",
    maintenance: "§7Any Heat Proof Invar Machine Casing",
    muffler: "§7Top Center",
    pch: "§7Any Heat Proof Invar Machine Casing"
};
const LOOK_AT_THE_MULTIBLOCK_PREVIEW_TOOLTIP = {
    controller: "§7Front"
};
const COKE_OVEN_BRICKS_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Controller or Coke Oven Hatch",
    itemoutput: "§7Controller or Coke Oven Hatch",
    fluidoutput: "§7Controller or Coke Oven Hatch",
    cokeovenhatch: "§7Any Coke Oven Bricks"
};
const STEAM_MACHINE_CASING_TOOLTIP = {
    controller: "§7Front",
    steamiteminput: "§7Any Steam Machine Casing",
    steamitemoutput: "§7Any Steam Machine Casing",
    steamenergy: "§7Any Steam Machine Casing"
};
const STEAM_MACHINE_CASING_OVEN_TOOLTIP = {
    controller: "§7Front",
    steamiteminput: "§7Any Steam Machine Casing",
    steamitemoutput: "§7Any Steam Machine Casing",
    steamenergy: "§7Any Bronze Firebox Casing"
};
const STEAM_MACHINE_CASING_TOOLTIP_BRONZE_TANK = {
    controller: "§7Front",
    bronzetankvalve: "§7Any Steam Machine Casing"
};
const CHARCOAL_PILE_IGNITER_TOOLTIP = {
    controller: "§7Top Middle"
};
const WOOD_WALL_TOOLTIP_WOODEN_TANK = {
    controller: "§7Front",
    woodentankvalve: "§7Any Wood Wall"
};
const SOLID_MACHINE_CASING_TOOLTIP_STEEL_TANK = {
    controller: "§7Front",
    steeltankvalve: "§7Any Solid Machine Casing"
};
const STEAM_MACHINE_CASING_TOOLTIP_BOILER = {
    controller: "§7Front",
    iteminput: "§7Any Bronze Firebox Casing",
    fluidinput: "§7Any Bronze Firebox Casing",
    fluidoutput: "§7Any Steam Machine Casing",
    maintenance: "§7Any Bronze Firebox Casing",
    muffler: "§7Any Bronze Firebox Casing"
};
const SOLID_MACHINE_CASING_TOOLTIP_BOILER = {
    controller: "§7Front",
    iteminput: "§7Any Steel Firebox Casing",
    fluidinput: "§7Any Steel Firebox Casing",
    fluidoutput: "§7Any Solid Machine Casing",
    maintenance: "§7Any Steel Firebox Casing",
    muffler: "§7Any Steel Firebox Casing"
};
const STABLE_TITANIUM_MACHINE_CASING_TOOLTIP_BOILER = {
    controller: "§7Front",
    iteminput: "§7Any Titanium Firebox Casing",
    fluidinput: "§7Any Titanium Firebox Casing",
    fluidoutput: "§7Any Stable Titanium Machine Casing",
    maintenance: "§7Any Titanium Firebox Casing",
    muffler: "§7Any Titanium Firebox Casing"
};
const ROBUST_TUNGSTENSTEEL_MACHINE_CASING_TOOLTIP_BOILER = {
    controller: "§7Front",
    iteminput: "§7Any Tungstensteel Firebox Casing",
    fluidinput: "§7Any Tungstensteel Firebox Casing",
    fluidoutput: "§7Any Robust Tungstensteel Machine Casing",
    maintenance: "§7Any Tungstensteel Firebox Casing",
    muffler: "§7Any Tungstensteel Firebox Casing"
};
const FUSION_MACHINE_CASING_TOOLTIP_FUSION_MKI = {
    controller: "§7Front",
    fluidinput: "§7Any Fusion Machine Casing",
    fluidoutput: "§7Any Fusion Machine Casing",
    energy: "§7At the diagonal points of the circle - inside and outside!"
};
const FUSION_MACHINE_CASING_MKII_TOOLTIP_FUSION_MKII = {
    controller: "§7Front",
    fluidinput: "§7Any Fusion Machine Casing MK II",
    fluidoutput: "§7Any Fusion Machine Casing MK II",
    energy: "§7At the diagonal points of the circle - inside and outside!"
};
const FUSION_MACHINE_CASING_MKIII_TOOLTIP_FUSION_MKIII = {
    controller: "§7Front",
    fluidinput: "§7Any Fusion Machine Casing MK III",
    fluidoutput: "§7Any Fusion Machine Casing MK III",
    energy: "§7At the diagonal points of the circle - inside and outside!"
};
const COMPUTER_CASING_TOOLTIP_NETWORK_SWITCH = {
    controller: "§7Front",
    energy: "§7Any Computer Casing",
    maintenance: "§7Any Computer Casing",
    datainput: "§7Any Computer Casing",
    dataoutput: "§7Any Computer Casing"
};
// GTMUtils
const PALLADIUM_SUBSTATION_CASING_TOOLTIP_WIRELESS_AT = {
    controller: "§7Center",
    energy: "§7Any Palladium Substation Casing",
    energyoutput: "§7Any Palladium Substation Casing"
};
// Sky of Grind!
const FUSION_MACHINE_CASING_MKIV_TOOLTIP_FUSION_MKIV = {
    controller: "§7Front",
    fluidinput: "§7Any Fusion Machine Casing MK IV",
    fluidoutput: "§7Any Fusion Machine Casing MK IV",
    energy: "§7At the diagonal points of the circle - inside and outside!",
    maintenance: "§7Any Fusion Machine Casing MK IV"
};
const FUSION_MACHINE_CASING_MKV_TOOLTIP_ETERNITY_FUSION = {
    controller: "§7Middle",
    iteminput: "§7Any Fusion Machine Casing MK V",
    itemoutput: "§7Any Fusion Machine Casing MK V",
    fluidinput: "§7Any Fusion Machine Casing MK V",
    fluidoutput: "§7Any Fusion Machine Casing MK V",
    energy: "§7Any Fusion Machine Casing MK V",
    pch: "§7Any Fusion Machine Casing MK V"
};
const KEVLAR_CASING_TOOLTIP_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Kevlar Casing",
    fluidinput: "§7Any Kevlar Casing",
    itemoutput: "§7Any Kevlar Casing",
    fluidoutput: "§7Any Kevlar Casing",
    energy: "§7Any Kevlar Casing",
    maintenance: "§7Any Kevlar Casing",
    muffler: "§7Any Kevlar Casing",
    pch: "§7Any Kevlar Casing"
};
const CLEAN_STAINLESS_STEEL_CASING_TOOLTIP_LARGEDEHYDRATION_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Clean Stainless Steel Casing",
    fluidinput: "§7Any Clean Stainless Steel Casing",
    itemoutput: "§7Any Clean Stainless Steel Casing",
    fluidoutput: "§7Any Clean Stainless Steel Casing",
    energy: "§7Any Clean Stainless Steel Casing",
    energyoutput: "§7Any Clean Stainless Steel Casing",
    maintenance: "§7Any Clean Stainless Steel Casing",
    muffler: "§7Right side in the middle",
    pch: "§7Any Clean Stainless Steel Casing"
};
const INERT_PEEK_CASING_TOOLTIP_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Inert PEEK Casing",
    fluidinput: "§7Any Inert PEEK Casing",
    itemoutput: "§7Any Inert PEEK Casing",
    fluidoutput: "§7Any Inert PEEK Casing",
    energy: "§7Any Inert PEEK Casing",
    energyoutput: "§7Any Inert PEEK Casing",
    maintenance: "§7Any Inert PEEK Casing",
    muffler: "§7Right tower on top",
    pch: "§7Any Inert PEEK Casing"
};
const ETERNITY_CASING_TOOLTIP_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Eternity Casing",
    fluidinput: "§7Any Eternity Casing",
    itemoutput: "§7Any Eternity Casing",
    fluidoutput: "§7Any Eternity Casing",
    energy: "§7Any Eternity Casing",
    maintenance: "§7Any Eternity Casing",
    muffler: "§7Any Eternity Casing",
    pch: "§7Any Eternity Casing"
};
const QUANTUM_CASING_TOOLTIP_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Quantum Casing",
    fluidinput: "§7Any Quantum Casing",
    itemoutput: "§7Any Quantum Casing",
    fluidoutput: "§7Any Quantum Casing",
    energy: "§7Any Quantum Casing",
    maintenance: "§7Any Quantum Casing",
    muffler: "§7Any Quantum Casing",
    pch: "§7Any Quantum Casing"
};
const ATOMIC_CASING_TOOLTIP_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Atomic Casing",
    fluidinput: "§7Any Atomic Casing",
    itemoutput: "§7Any Atomic Casing",
    fluidoutput: "§7Any Atomic Casing",
    energy: "§7Any Atomic Casing",
    maintenance: "§7Any Atomic Casing",
    muffler: "§7Any Atomic Casing",
    pch: "§7Any Atomic Casing"
};
const ATOMIC_CASING_TOOLTIP_SPECIAL_MAINTENANCE_MUFFLER_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Atomic Casing",
    fluidinput: "§7Any Atomic Casing",
    itemoutput: "§7Any Atomic Casing",
    fluidoutput: "§7Any Atomic Casing",
    energy: "§7Any Atomic Casing",
    maintenance: "§7Right side of controller",
    muffler: "§7Left side of controller",
    pch: "§7Any Atomic Casing"
};
const ATOMIC_CASING_TOOLTIP_ATOMICFORGE_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Atomic Casing",
    fluidinput: "§7Any Atomic Casing",
    itemoutput: "§7Any Atomic Casing",
    fluidoutput: "§7Any Atomic Casing",
    energy: "§7Any Atomic Casing",
    maintenance: "§7Right side from Atomic Casing-Tower",
    muffler: "§7Left side from Atomic Casing-Tower",
    pch: "§7Any Atomic Casing"
};
const HIGH_POWER_MACERATING_CASING_SOG = {
    controller: "§7Front",
    iteminput: "§7Any High Power Macerating Casing",
    fluidinput: "§7Any High Power Macerating Casing",
    itemoutput: "§7Any High Power Macerating Casing",
    fluidoutput: "§7Any High Power Macerating Casing",
    energy: "§7Any High Power Macerating Casing",
    maintenance: "§7Any High Power Macerating Casing",
    muffler: "§7Any High Power Macerating Casing",
    pch: "§7Any High Power Macerating Casing"
};
const ROBUST_TUNGSTENSTEEL_MACHINE_CASING_MAINTENANCE_MUFFLER_TOOLTIP_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Robust Tungstensteel Machine Casing",
    fluidinput: "§7Any Robust Tungstensteel Machine Casing",
    itemoutput: "§7Any Robust Tungstensteel Machine Casing",
    fluidoutput: "§7Any Robust Tungstensteel Machine Casing",
    energy: "§7Any Robust Tungstensteel Machine Casing",
    maintenance: "§7Right side of controller",
    muffler: "§7Left side of controller",
    pch: "§7Any Robust Tungstensteel Machine Casing"
};
const ROBUST_TUNGSTENSTEEL_MACHINE_CASING_MAINTENANCE_MUFFLER_TESLA_TOOLTIP_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Robust Tungstensteel Machine Casing",
    fluidinput: "§7Any Robust Tungstensteel Machine Casing",
    itemoutput: "§7Any Robust Tungstensteel Machine Casing",
    fluidoutput: "§7Any Robust Tungstensteel Machine Casing",
    energy: "§7Any Robust Tungstensteel Machine Casing",
    maintenance: "§7Left side from the tower",
    muffler: "§7Right side from the tower",
    pch: "§7Any Robust Tungstensteel Machine Casing"
};
const WATERTIGHT_CASING_TOOLTIP_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Watertight Casing",
    fluidinput: "§7Any Watertight Casing",
    itemoutput: "§7Any Watertight Casing",
    fluidoutput: "§7Any Watertight Casing",
    energy: "§7Any Watertight Casing",
    maintenance: "§7Any Watertight Casing",
    muffler: "§7Any Watertight Casing",
    pch: "§7Any Watertight Casing"
};
const NAQUADRIA_TURBINE_CASING_TOOLTIP_SOG_EXTREMECRACKER = {
    controller: "§7Front Top",
    iteminput: "§7Any Naquadria Turbine Casing",
    fluidinput: "§7Any Naquadria Turbine Casing",
    itemoutput: "§7Any Naquadria Turbine Casing",
    fluidoutput: "§7Any Naquadria Turbine Casing",
    energy: "§7Any Naquadria Turbine Casing",
    maintenance: "§7Any Naquadria Turbine Casing",
    muffler: "§7Top Middle block of the Nonconducting Casing Tower",
    pch: "§7Any Naquadria Turbine Casing"
};
const NAQUADRIA_TURBINE_CASING_XLPLASMATURBINE_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Naquadria Turbine Casing",
    fluidinput: "§7Any Naquadria Turbine Casing",
    itemoutput: "§7Any Naquadria Turbine Casing",
    fluidoutput: "§7Any Naquadria Turbine Casing",
    energyoutput: "§7Top Middle block",
    maintenance: "§7On the back - look at the multiblock preview!",
    muffler: "§7On the back - look at the multiblock preview!",
    pch: "§7Any Naquadria Turbine Casing"
};
const PLASCRETE_TOOLTIP_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Plascrete",
    fluidinput: "§7Any Plascrete",
    itemoutput: "§7Any Plascrete",
    fluidoutput: "§7Any Plascrete",
    energy: "§7Any Plascrete",
    maintenance: "§7Any Plascrete",
    muffler: "§7Any Plascrete",
    pch: "§7Any Plascrete"
};
const SOLID_MACHINE_CASING_TOOLTIP_GREENHOUSE_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Solid Machine Casing",
    fluidinput: "§7Any Solid Machine Casing",
    itemoutput: "§7Any Solid Machine Casing",
    fluidoutput: "§7Any Solid Machine Casing",
    energy: "§7Any Solid Machine Casing",
    maintenance: "§7Under the controller",
    muffler: "§7Backside at the bottom",
    pch: "§7Any Solid Machine Casing"
};
const HIGHLY_REINFORCED_RADIOACTIVE_CASING_TOOLTIP_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Highly Reinforced Radioactive Casing",
    fluidinput: "§7Any Highly Reinforced Radioactive Casing",
    itemoutput: "§7Any Highly Reinforced Radioactive Casing",
    fluidoutput: "§7Any Highly Reinforced Radioactive Casing",
    energy: "§7Any Highly Reinforced Radioactive Casing",
    energyoutput: "§7Any Highly Reinforced Radioactive Casing",
    maintenance: "§7Any Highly Reinforced Radioactive Casing",
    muffler: "§7Any Highly Reinforced Radioactive Casing",
    pch: "§7Any Highly Reinforced Radioactive Casing"
};
const HIGHLY_REINFORCED_RADIOACTIVE_CASING_TOOLTIP_CHAOTICREACTOR_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Highly Reinforced Radioactive Casing",
    fluidinput: "§7Any Highly Reinforced Radioactive Casing",
    itemoutput: "§7Any Highly Reinforced Radioactive Casing",
    fluidoutput: "§7Any Highly Reinforced Radioactive Casing",
    energy: "§7Any Highly Reinforced Radioactive Casing",
    energyoutput: "§7Top center",
    maintenance: "§7Any Highly Reinforced Radioactive Casing",
    muffler: "§7Any Highly Reinforced Radioactive Casing",
    pch: "§7Any Highly Reinforced Radioactive Casing"
};
const PALLADIUM_SUBSTATION_CASING_TOOLTIP_BLOODALTAR_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Palladium Substation Casing",
    fluidinput: "§7Any Palladium Substation Casing",
    itemoutput: "§7Any Palladium Substation Casing",
    fluidoutput: "§7Any Palladium Substation Casing",
    energy: "§7Any Palladium Substation Casing",
    maintenance: "§7Right side of controller",
    muffler: "§7Left side of controller",
    pch: "§7Any Palladium Substation Casing"
};
const REINFORCED_COMPUTATION_CASING_TOOLTIP_QUANTUMSTATION_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Reinforced Computation Casing",
    fluidinput: "§7Any Reinforced Computation Casing",
    itemoutput: "§7Any Reinforced Computation Casing",
    fluidoutput: "§7Any Reinforced Computation Casing",
    energy: "§7Any Reinforced Computation Casing",
    maintenance: "§7Any Reinforced Computation Casing",
    muffler: "§7Any Reinforced Computation Casing",
    pch: "§7Any Reinforced Computation Casing",
    computationinput: "§7Any Reinforced Computation Casing"
};
const FROST_PROOF_ALUMINIUM_MACHINE_CASING_TOOLTIP_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Frost Proof Aluminium Machine Casing",
    fluidinput: "§7Any Frost Proof Aluminium Machine Casing",
    itemoutput: "§7Any Frost Proof Aluminium Machine Casing",
    fluidoutput: "§7Any Frost Proof Aluminium Machine Casing",
    energy: "§7Any Frost Proof Aluminium Machine Casing",
    maintenance: "§7Any Frost Proof Aluminium Machine Casing",
    muffler: "§7Any Frost Proof Aluminium Machine Casing",
    pch: "§7Any Frost Proof Aluminium Machine Casing"
};
const SUPERCONDUCTIVE_CASING_TOOLTIP_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Superconductive Casing",
    fluidinput: "§7Any Superconductive Casing",
    itemoutput: "§7Any Superconductive Casing",
    fluidoutput: "§7Any Superconductive Casing",
    energy: "§7Any Superconductive Casing",
    maintenance: "§7Any Superconductive Casing",
    muffler: "§7Any Superconductive Casing",
    pch: "§7Any Superconductive Casing"
};
const CHEMICALLY_INERT_PTFE_MACHINE_CASING_TOOLTIP_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Chemically Inert PTFE Machine Casing",
    fluidinput: "§7Any Chemically Inert PTFE Machine Casing",
    itemoutput: "§7Any Chemically Inert PTFE Machine Casing",
    fluidoutput: "§7Any Chemically Inert PTFE Machine Casing",
    energy: "§7Any Chemically Inert PTFE Machine Casing",
    maintenance: "§7Any Chemically Inert PTFE Machine Casing",
    muffler: "§7Any Chemically Inert PTFE Machine Casing",
    pch: "§7Any Chemically Inert PTFE Machine Casing"
};
const CHEMICALLY_INERT_PTFE_MACHINE_CASING_TOOLTIP_SOG_NAQREACTOR = {
    controller: "§7Front",
    iteminput: "§7Any Chemically Inert PTFE Machine Casing",
    fluidinput: "§7Any Chemically Inert PTFE Machine Casing",
    itemoutput: "§7Any Chemically Inert PTFE Machine Casing",
    fluidoutput: "§7Any Chemically Inert PTFE Machine Casing",
    energy: "§7Any Chemically Inert PTFE Machine Casing",
    maintenance: "§7Right side of controller",
    muffler: "§7Left side of controller",
    pch: "§7Any Chemically Inert PTFE Machine Casing"
};
const NEUTRONATE_ENRICHED_ATOMIC_CASING_TOOLTIP_SOG_NAQREACTOR = {
    controller: "§7Front",
    iteminput: "§7Any Neutronate Enriched Atomic Casing",
    fluidinput: "§7Any Neutronate Enriched Atomic Casing",
    itemoutput: "§7Any Neutronate Enriched Atomic Casing",
    fluidoutput: "§7Any Neutronate Enriched Atomic Casing",
    energy: "§7Any Neutronate Enriched Atomic Casing",
    maintenance: "§7Right side of controller",
    muffler: "§7Left side of controller",
    pch: "§7Any Neutronate Enriched Atomic Casing"
};
const CLEAN_STAINLESS_STEEL_CASING_TOOLTIP_MAINTENANCEMUFFLER_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Clean Stainless Steel Casing",
    fluidinput: "§7Any Clean Stainless Steel Casing",
    itemoutput: "§7Any Clean Stainless Steel Casing",
    fluidoutput: "§7Any Clean Stainless Steel Casing",
    energy: "§7Any Clean Stainless Steel Casing",
    maintenance: "§7Right side of controller",
    muffler: "§7Left side of controller",
    pch: "§7Any Clean Stainless Steel Casing"
};
const COMPONENT_TILE_CASING_ASSEMBLY_LINE_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Middle Bottom Layer every slice except last",
    fluidinput: "§7Any Component Tile Casing at the bottom except middle ones",
    itemoutput: "§7Middle Bottom Layer last slice",
    fluidoutput: "§7Any Component Tile Casing",
    energy: "§7Any Component Tile Casing on top",
    maintenance: "§7Any Component Tile Casing",
    muffler: "§7Top Center",
    pch: "§7Any Component Tile Casing",
    datahatch: "§7Any Component Tile Casing on controller side"
};
const LARGE_PRECISION_CASING_CIRCUIT_ASSEMBLY_LINE_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Middle Bottom Layer every slice except last",
    fluidinput: "§7Any Large Precision Casing at the bottom except middle ones",
    itemoutput: "§7Middle Bottom Layer last slice",
    fluidoutput: "§7Any Large Precision Casing",
    energy: "§7Any Large Precision Casing on top",
    maintenance: "§7Any Large Precision Casing",
    muffler: "§7Top Center",
    pch: "§7Any Large Precision Casing",
    datahatch: "§7Any Large Precision Casing on controller side"
};
const NEUTRONIUM_CASING_TOOLTIP_SOG = {
    controller: "§7Bottom Front",
    iteminput: "§7Any Neutronium Casing",
    fluidinput: "§7Any Neutronium Casing",
    itemoutput: "§7Any Neutronium Casing",
    fluidoutput: "§7Any Neutronium Casing",
    energy: "§7Any Neutronium Casing",
    maintenance: "§7Any Neutronium Casing",
    muffler: "§7Any Neutronium Casing",
    pch: "§7Any Neutronium Casing"
};
const NEUTRONIUM_CASING_TOOLTIP_SOG_PROCESSOR_PRINTING_FACTORIES = {
    controller: "§7Front",
    iteminput: "§7Middle Bottom Layer every slice except last",
    fluidinput: "§7Any Neutronium Casing",
    itemoutput: "§7Middle Bottom Layer last slice",
    energy: "§7Any Neutronium Casing"
};
const SEMI_STABLE_CASING_TOOLTIP_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Semi-Stable Casing Casing",
    fluidinput: "§7Any Semi-Stable Casing Casing",
    itemoutput: "§7Any Semi-Stable Casing Casing",
    energy: "§7Any Semi-Stable Casing Casing",
    maintenance: "§7Any Semi-Stable Casing Casing",
    muffler: "§7Any Semi-Stable Casing Casing",
    pch: "§7Any Semi-Stable Casing Casing"
};
const CRYOGENIC_CASING_TOOLTIP_SOG = {
    controller: "§7Front",
    iteminput: "§7Any Cryogenic Casing",
    fluidinput: "§7Any Cryogenic Casing",
    itemoutput: "§7Any Cryogenic Casing",
    fluidoutput: "§7Any Cryogenic Casing",
    energy: "§7Any Cryogenic Casing",
    maintenance: "§7Any Cryogenic Casing",
    muffler: "§7Any Cryogenic Casing",
    pch: "§7Any Cryogenic Casing"
};

// Const for Tooltip Groups

const NON_SHIFT_TOOLTIP_GROUPS = {
    'PCH_SUBTICK_MULTIBLOCKS': {
        multiblockIds: [
            "gtceu:large_arc_smelter",
            "gtceu:large_assembler",
            "gtceu:large_autoclave",
            "gtceu:large_brewer",
            "gtceu:large_centrifuge",
            "gtceu:large_chemical_bath",
            "gtceu:large_circuit_assembler",
            "gtceu:large_cutter",
            "gtceu:large_electrolyzer",
            "gtceu:large_electromagnet",
            "gtceu:large_engraving_laser",
            "gtceu:large_maceration_tower",
            "gtceu:large_material_press",
            "gtceu:large_mixer",
            "gtceu:large_packer",
            "gtceu:large_sifting_funnel",
            "gtceu:large_solidifier",
            "gtceu:large_wiremill",
            "gtceu:large_distillery",
            "gtceu:large_extruder",
            "gtceu:large_extractor",
            "gtceu:mega_vacuum_freezer",
            "gtceu:mega_blast_furnace"
        ],
        tooltipKeys: [
            "multiblock.pchaccess1",
            "multiblock.pchaccess2",
            "multiblock.subtickaccess1",
            "multiblock.subtickaccess2"
        ]
    },
    'SUBTICK_AND_PERF_OC_GROUP': {
        multiblockIds: [
            "gtceu:large_chemical_reactor"
        ],
        tooltipKeys: [
            'multiblock.subtickaccess1',
            'multiblock.subtickaccess2',
            'multiblock.perfocaccess1',
            'multiblock.perfocaccess2'
        ]
    },
    'SUBTICK_ONLY': {
        multiblockIds: [
            "gtceu:vacuum_freezer",
            "gtceu:implosion_compressor",
            "gtceu:cracker",
            "gtceu:pyrolyse_oven",
            "gtceu:alloy_blast_smelter",
            "gtceu:distillation_tower",
            "gtceu:electric_blast_furnace"
        ],
        tooltipKeys: [
            'multiblock.subtickaccess1',
            'multiblock.subtickaccess2'
        ]
    },
    'LASER_INPUT_AND_OUTPUT_GTM': {
        multiblockIds: [
            "gtceu:active_transformer",
            "gtceu:power_substation"
        ],
        tooltipKeys: [
            'multiblock.laseraccess1',
            'multiblock.laseraccess2',
            'multiblock.laseroutputaccess1',
            'multiblock.laseroutputaccess2'
        ]
    },
    // GTMUtils
    'LASER_INPUT_AND_OUTPUT_GTMUTILS': {
        multiblockIds: [
            "gtmutils:pterb_machine"
        ],
        tooltipKeys: [
            'multiblock.laseraccess1',
            'multiblock.laseraccess2',
            'multiblock.laseroutputaccess1',
            'multiblock.laseroutputaccess2'
        ]
    },
    // Sky of Grind!
    'PCH_SOG': {
        multiblockIds: [
            "gtceu:atomicompressor",
            "gtceu:atomic_moonminer",
            "gtceu:atmospheric_collector",
            "gtceu:robust_extractinator",
            "gtceu:large_bacterial_vat",
            "gtceu:greenhouse",
            "gtceu:large_polymerization_chamber",
            "gtceu:large_high_pressure_reactor",
            "gtceu:large_evaporation_pool",
            "gtceu:cryogenic_centrifuge",
            "gtceu:extreme_cracking_unit",
            "gtceu:particle_implosion_chamber",
            "gtceu:xl_radiation_chamber"
        ],
        tooltipKeys: [
            "multiblock.pchaccess1",
            "multiblock.pchaccess2"
        ]
    },
    'PCH_LASER_SOG': {
        multiblockIds: [
            "gtceu:quantum_space_projector",
            "gtceu:nebular_plasma_nexus"
        ],
        tooltipKeys: [
            "multiblock.pchaccess1",
            "multiblock.pchaccess2",
            "multiblock.laseraccess1",
            "multiblock.laseraccess2"
        ]
    },
    'PCH_LASER_NEEDED_SOG': {
        multiblockIds: [
            "gtceu:gravitational_implosion_machine"
        ],
        tooltipKeys: [
            "multiblock.pchaccess1",
            "multiblock.pchaccess2",
            "multiblock.needlaseraccess1",
            "multiblock.needlaseraccess2"
        ]
    },
    'PCH_LASER_PERF_OC_SOG': {
        multiblockIds: [
            "gtceu:processing_plant",
            "gtceu:adv_processing_plant"
        ],
        tooltipKeys: [
            "multiblock.pchaccess1",
            "multiblock.pchaccess2",
            "multiblock.laseraccess1",
            "multiblock.laseraccess2",
            "multiblock.perfocaccess1",
            "multiblock.perfocaccess2"
        ]
    },
    'PCH_LASER_SUBTICK_SOG': {
        multiblockIds: [
            "gtceu:reinforced_atomicforge",
            "gtceu:chemical_plant"
        ],
        tooltipKeys: [
            "multiblock.pchaccess1",
            "multiblock.pchaccess2",
            "multiblock.laseraccess1",
            "multiblock.laseraccess2",
            "multiblock.subtickaccess1",
            "multiblock.subtickaccess2"
        ]
    },
    'PCH_LASER_SUBTICK_PERFECT_OC_SOG': {
        multiblockIds: [
            "gtceu:hyper_assembly_line",
            "gtceu:hyper_assembler",
            "gtceu:hyper_cutter",
            "gtceu:hyper_laser_engraver",
            "gtceu:hyper_arc_furnace",
            "gtceu:hyper_bender",
            "gtceu:hyper_wiremill",
            "gtceu:hyper_lathe",
            "gtceu:hyper_extruder",
            "gtceu:hyper_mixer"
        ],
        tooltipKeys: [
            "multiblock.pchaccess1",
            "multiblock.pchaccess2",
            "multiblock.laseraccess1",
            "multiblock.laseraccess2",
            "multiblock.subtickaccess1",
            "multiblock.subtickaccess2",
            "multiblock.perfocaccess1",
            "multiblock.perfocaccess2"
        ]
    },
    'PCH_SUBTICK_SOG': {
        multiblockIds: [
            "gtceu:tectonic_plate_accelerator",
            "gtceu:large_dehydration_unit"
        ],
        tooltipKeys: [
            "multiblock.pchaccess1",
            "multiblock.pchaccess2",
            "multiblock.subtickaccess1",
            "multiblock.subtickaccess2"
        ]
    },
    'LASER_SOG': {
        multiblockIds: [
            "gtceu:atomicforge",
            "gtceu:singularity_data_confinement"
        ],
        tooltipKeys: [
            "multiblock.laseraccess1",
            "multiblock.laseraccess2"
        ]
    },
    'LASER_NEEDED_SOG': {
        multiblockIds: [
            "gtceu:large_synchrotron_switcher"
        ],
        tooltipKeys: [
            "multiblock.needlaseraccess1",
            "multiblock.needlaseraccess2"
        ]
    },
    'LASER_OUTPUT_SOG': {
        multiblockIds: [
            "gtceu:xl_plasma_turbine",
            "gtceu:chaotic_singularity_reactor",
            "gtceu:tesla_tower"
        ],
        tooltipKeys: [
            "multiblock.laseroutputaccess1",
            "multiblock.laseroutputaccess2"
        ]
    },
    'LASER_SUBTICK_PERFECT_OC_SOG': {
        multiblockIds: [
            "gtceu:eternity_fusion_reactor"
        ],
        tooltipKeys: [
            "multiblock.laseraccess1",
            "multiblock.laseraccess2",
            "multiblock.subtickaccess1",
            "multiblock.subtickaccess2",
            "multiblock.perfocaccess1",
            "multiblock.perfocaccess2"
        ]
    },
    'SUBTICK_PERF_OC_SOG': {
        multiblockIds: [
            "gtceu:processor_printing_factory_lv",
            "gtceu:processor_printing_factory_mv",
            "gtceu:processor_printing_factory_hv",
            "gtceu:processor_printing_factory_ev",
            "gtceu:processor_printing_factory_iv",
            "gtceu:processor_printing_factory_luv",
            "gtceu:processor_printing_factory_zpm",
            "gtceu:processor_printing_factory_uv",
            "gtceu:processor_printing_factory_uhv"
        ],
        tooltipKeys: [
            "multiblock.subtickaccess1",
            "multiblock.subtickaccess2",
            "multiblock.perfocaccess1",
            "multiblock.perfocaccess2"
        ]
    },
    'PERF_OC_SOG': {
        multiblockIds: [
            "gtceu:bio_lab",
            "gtceu:naquadahreactormk2"
        ],
        tooltipKeys: [
            "multiblock.perfocaccess1",
            "multiblock.perfocaccess2"
        ]
    },
};
const MULTIBLOCK_DESCRIPTION_TOOLTIPS = {
    "gtceu:large_arc_smelter": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_arc_smelter_1"
    ],
    "gtceu:large_assembler": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_assembler_1",
        "basegtm.custom.tooltip_one_energy_hatch"
    ],
    "gtceu:assembly_line": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_assembly_line_1",
        "basegtm.custom.tooltip_assembly_line_2"
    ],
    "gtceu:large_autoclave": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_autoclave_1"
    ],
    "gtceu:large_brewer": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_brewer_1"
    ],
    "gtceu:large_centrifuge": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_centrifuge_1"
    ],
    "gtceu:large_chemical_bath": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_chemical_bath_1"
    ],
    "gtceu:large_circuit_assembler": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_circuit_assembler_1"
    ],
    "gtceu:large_cutter": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_cutter_1"
    ],
    "gtceu:large_electrolyzer": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_electrolyzer_1"
    ],
    "gtceu:large_electromagnet": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_electromagnet_1"
    ],
    "gtceu:large_engraving_laser": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_engraving_laser_1"
    ],
    "gtceu:large_maceration_tower": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_maceration_tower_1"
    ],
    "gtceu:large_material_press": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_material_press_1"
    ],
    "gtceu:large_mixer": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_mixer_1"
    ],
    "gtceu:large_packer": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_packer_1"
    ],
    "gtceu:large_sifting_funnel": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_sifting_funnel_1"
    ],
    "gtceu:large_solidifier": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_solidifier_1"
    ],
    "gtceu:large_wiremill": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_wiremill_1"
    ],
    "gtceu:large_distillery": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_distillation_tower_1",
        "basegtm.custom.tooltip_distillation_tower_2",
        "basegtm.custom.tooltip_large_distillery_1"
    ],
    "gtceu:large_extruder": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_extruder_1"
    ],
    "gtceu:large_extractor": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_extractor_1"
    ],
    "gtceu:large_chemical_reactor": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_chemical_reactor_1"
    ],
    "gtceu:vacuum_freezer": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_vacuum_freezer_1"
    ],
    "gtceu:implosion_compressor": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_implosion_compressor_1",
        "basegtm.custom.tooltip_implosion_compressor_2"
    ],
    "gtceu:cracker": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_cracker_1",
        "basegtm.custom.tooltip_cracker_2"
    ],
    "gtceu:pyrolyse_oven": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_pyrolyse_oven_1",
        "basegtm.custom.tooltip_pyrolyse_oven_2"
    ],
    "gtceu:mega_vacuum_freezer": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_mega_vacuum_freezer_1"
    ],
    "gtceu:mega_blast_furnace": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_mega_blast_furnace_1",
        "basegtm.custom.tooltip_ebf_coils.0",
        "basegtm.custom.tooltip_ebf_coils.1",
        "basegtm.custom.tooltip_ebf_coils.2",
        "basegtm.custom.tooltip_ebf_coils.3",
        "basegtm.custom.tooltip_ebf_coils.4",
        "basegtm.custom.tooltip_ebf_coils.5"
    ],
    "gtceu:alloy_blast_smelter": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_alloy_blast_smelter_1",
        "basegtm.custom.tooltip_ebf_coils.0",
        "basegtm.custom.tooltip_ebf_coils.1",
        "basegtm.custom.tooltip_ebf_coils.2",
        "basegtm.custom.tooltip_ebf_coils.3",
        "basegtm.custom.tooltip_ebf_coils.4",
        "basegtm.custom.tooltip_ebf_coils.5"
    ],
    "gtceu:electric_blast_furnace": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_electric_blast_furnace_1",
        "basegtm.custom.tooltip_ebf_coils.0",
        "basegtm.custom.tooltip_ebf_coils.1",
        "basegtm.custom.tooltip_ebf_coils.2",
        "basegtm.custom.tooltip_ebf_coils.3",
        "basegtm.custom.tooltip_ebf_coils.4",
        "basegtm.custom.tooltip_ebf_coils.5"
    ],
    "gtceu:multi_smelter": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_multi_smelter_1",
        "basegtm.custom.tooltip_multi_smelter_2"
    ],
    "gtceu:distillation_tower": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_distillation_tower_1",
        "basegtm.custom.tooltip_distillation_tower_2"
    ],
    "gtceu:steam_oven": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_steam_oven_1"
    ],
    "gtceu:steam_grinder": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_steam_grinder_1"
    ],
    "gtceu:primitive_pump": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_primitive_pump_1"
    ],
    "gtceu:primitive_blast_furnace": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_primitive_blast_furnace_1"
    ],
    "gtceu:coke_oven": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_coke_oven_1"
    ],
    "gtceu:charcoal_pile_igniter": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_charcoal_pile_igniter_1",
        "basegtm.custom.tooltip_charcoal_pile_igniter_2",
        "basegtm.custom.tooltip_charcoal_pile_igniter_3"
    ],
    "gtceu:large_combustion_engine": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_combustion_engine_1",
        "basegtm.custom.tooltip_large_combustion_engine_2",
        "basegtm.custom.tooltip_large_combustion_engine_3",
        "basegtm.custom.tooltip_large_combustion_engine_4"
    ],
    "gtceu:steel_multiblock_tank": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_steel_multiblock_tank_1",
        "basegtm.custom.tooltip_bronze_multiblock_tank_2",
        "basegtm.custom.tooltip_steel_multiblock_tank_2"
    ],
    "gtceu:ev_large_miner": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_ev_large_miner_1",
        "basegtm.custom.tooltip_working_area_3_3",
        "basegtm.custom.tooltip_allowed_voltage_ev_iv",
        "basegtm.custom.tooltip_large_miner_silk_chunk",
        "basegtm.custom.tooltip_large_miner_macerator_3_output",
        "basegtm.custom.tooltip_large_miner_drilling_fluid_9"
    ],
    "gtceu:iv_large_miner": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_iv_large_miner_1",
        "basegtm.custom.tooltip_working_area_5_5",
        "basegtm.custom.tooltip_allowed_voltage_iv_luv",
        "basegtm.custom.tooltip_large_miner_silk_chunk",
        "basegtm.custom.tooltip_large_miner_macerator_3_output",
        "basegtm.custom.tooltip_large_miner_drilling_fluid_8"
    ],
    "gtceu:luv_large_miner": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_luv_large_miner_1",
        "basegtm.custom.tooltip_working_area_7_7",
        "basegtm.custom.tooltip_allowed_voltage_luv_zpm",
        "basegtm.custom.tooltip_large_miner_silk_chunk",
        "basegtm.custom.tooltip_large_miner_macerator_3_output",
        "basegtm.custom.tooltip_large_miner_drilling_fluid_7"
    ],
    "gtceu:network_switch": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_network_switch_1",
        "basegtm.custom.tooltip_network_switch_2",
        "basegtm.custom.tooltip_network_switch_3"
    ],
    "gtceu:mv_fluid_drilling_rig": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_mv_fluid_drilling_rig_1",
        "basegtm.custom.tooltip_depletion_rate_100",
        "basegtm.custom.tooltip_allowed_voltage_mv_hv",
        "basegtm.custom.tooltip_production_multiplier_1_1_5"
    ],
    "gtceu:hv_fluid_drilling_rig": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_hv_fluid_drilling_rig_1",
        "basegtm.custom.tooltip_depletion_rate_50",
        "basegtm.custom.tooltip_allowed_voltage_hv_ev",
        "basegtm.custom.tooltip_production_multiplier_16_24"
    ],
    "gtceu:ev_fluid_drilling_rig": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_ev_fluid_drilling_rig_1",
        "basegtm.custom.tooltip_depletion_rate_12_5",
        "basegtm.custom.tooltip_allowed_voltage_ev_iv",
        "basegtm.custom.tooltip_production_multiplier_64_96"
    ],
    "gtceu:cleanroom": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_cleanroom_1",
        "basegtm.custom.tooltip_cleanroom_2",
        "basegtm.custom.tooltip_cleanroom_3",
        "basegtm.custom.tooltip_cleanroom_4",
        "basegtm.custom.tooltip_cleanroom_5",
        "basegtm.custom.tooltip_cleanroom_6",
        "basegtm.custom.tooltip_cleanroom_7",
        "basegtm.custom.tooltip_cleanroom_8"
    ],
    "gtceu:central_monitor": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_central_monitor_1"
    ],
    "gtceu:active_transformer": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_active_transformer_1",
        "basegtm.custom.tooltip_active_transformer_2",
        "basegtm.custom.tooltip_active_transformer_3"
    ],
    "gtceu:plasma_large_turbine": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_plasma_large_turbine_1",
        "basegtm.custom.tooltip_rotor_holder_3"
    ],
    "gtceu:wooden_multiblock_tank": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_wooden_multiblock_tank_1",
        "basegtm.custom.tooltip_bronze_multiblock_tank_2",
        "basegtm.custom.tooltip_wooden_multiblock_tank_2",
        "basegtm.custom.tooltip_wooden_multiblock_tank_3"
    ],
    "gtceu:luv_fusion_reactor": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_luv_fusion_reactor_1",
        "basegtm.custom.tooltip_fusion_reactor_energy_storage_1",
        "basegtm.custom.tooltip_luv_fusion_reactor_2",
        "basegtm.custom.tooltip_luv_fusion_reactor_3"
    ],
    "gtceu:zpm_fusion_reactor": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_zpm_fusion_reactor_1",
        "basegtm.custom.tooltip_fusion_reactor_energy_storage_2",
        "basegtm.custom.tooltip_zpm_fusion_reactor_2",
        "basegtm.custom.tooltip_zpm_fusion_reactor_3"
    ],
    "gtceu:uv_fusion_reactor": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_uv_fusion_reactor_1",
        "basegtm.custom.tooltip_fusion_reactor_energy_storage_3",
        "basegtm.custom.tooltip_uv_fusion_reactor_2",
        "basegtm.custom.tooltip_uv_fusion_reactor_3"
    ],
    "gtceu:gas_large_turbine": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_large_combustion_engine",
        "basegtm.custom.tooltip_rotor_holder_2"
    ],
    "gtceu:data_bank": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_data_bank_1",
        "basegtm.custom.tooltip_data_bank_2",
        "basegtm.custom.tooltip_data_bank_3",
        "basegtm.custom.tooltip_data_bank_4",
        "basegtm.custom.tooltip_data_bank_5"
    ],
    "gtceu:extreme_combustion_engine": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_extreme_combustion_engine_1",
        "basegtm.custom.tooltip_extreme_combustion_engine_3",
        "basegtm.custom.tooltip_large_combustion_engine_3",
        "basegtm.custom.tooltip_extreme_combustion_engine_2"
    ],
    "gtceu:research_station": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_research_station_1"
    ],
    "gtceu:mv_bedrock_ore_miner": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_mv_bedrock_ore_miner_1",
        "basegtm.custom.tooltip_depletion_rate_100",
        "basegtm.custom.tooltip_allowed_voltage_mv_hv",
        "basegtm.custom.tooltip_production_multiplier_1_1_5"
    ],
    "gtceu:hv_bedrock_ore_miner": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_hv_bedrock_ore_miner_1",
        "basegtm.custom.tooltip_depletion_rate_50",
        "basegtm.custom.tooltip_allowed_voltage_hv_ev",
        "basegtm.custom.tooltip_production_multiplier_4_6"
    ],
    "gtceu:ev_bedrock_ore_miner": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_ev_bedrock_ore_miner_1",
        "basegtm.custom.tooltip_depletion_rate_12_5",
        "basegtm.custom.tooltip_allowed_voltage_ev_iv",
        "basegtm.custom.tooltip_production_multiplier_16_24"
    ],
    "gtceu:steam_large_turbine": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_steam_large_turbine_1",
        "basegtm.custom.tooltip_rotor_holder_1"
    ],
    "gtceu:power_substation": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_power_substation_1",
        "basegtm.custom.tooltip_power_substation_2",
        "basegtm.custom.tooltip_power_substation_3",
        "basegtm.custom.tooltip_power_substation_4",
        "basegtm.custom.tooltip_power_substation_5"
    ],
    "gtceu:high_performance_computation_array": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_high_performance_computation_array_1"
    ],
    "gtceu:bronze_multiblock_tank": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_bronze_multiblock_tank_1",
        "basegtm.custom.tooltip_bronze_multiblock_tank_2",
        "basegtm.custom.tooltip_bronze_multiblock_tank_3",
        "basegtm.custom.tooltip_bronze_multiblock_tank_4"
    ],
    "gtceu:bronze_large_boiler": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_bronze_large_boiler_1",
        "basegtm.custom.tooltip_bronze_large_boiler_2",
        "basegtm.custom.tooltip_bronze_large_boiler_3",
        "basegtm.custom.tooltip_bronze_large_boiler_4",
        "basegtm.custom.tooltip_boilers_warning"
    ],
    "gtceu:steel_large_boiler": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_steel_large_boiler_1",
        "basegtm.custom.tooltip_steel_large_boiler_2",
        "basegtm.custom.tooltip_steel_large_boiler_3",
        "basegtm.custom.tooltip_steel_large_boiler_4",
        "basegtm.custom.tooltip_boilers_warning"
    ],
    "gtceu:titanium_large_boiler": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_titanium_large_boiler_1",
        "basegtm.custom.tooltip_titanium_large_boiler_2",
        "basegtm.custom.tooltip_titanium_large_boiler_3",
        "basegtm.custom.tooltip_titanium_large_boiler_4",
        "basegtm.custom.tooltip_boilers_warning"
    ],
    "gtceu:tungstensteel_large_boiler": [
        "basegtm.custom.tooltip_descriptions_all",
        "basegtm.custom.tooltip_tungstensteel_large_boiler_1",
        "basegtm.custom.tooltip_tungstensteel_large_boiler_2",
        "basegtm.custom.tooltip_tungstensteel_large_boiler_3",
        "basegtm.custom.tooltip_tungstensteel_large_boiler_4",
        "basegtm.custom.tooltip_boilers_warning"
    ],
    // GTMUtils
    "gtmutils:pterb_machine": [
        "basegtm.custom.tooltip_descriptions_all",
        "gtmutils.custom.tooltip_pterb_machine_1",
        "gtmutils.custom.tooltip_pterb_machine_2",
        "basegtm.custom.tooltip_active_transformer_2",
        "gtmutils.custom.tooltip_pterb_machine_3"
    ],
    // SteamAdditions
    "steamadditions:steam_separator": [
        "basegtm.custom.tooltip_descriptions_all",
        "steamadditions.custom.tooltip_steam_separator_1",
    ],
    "steamadditions:steam_foundry": [
        "basegtm.custom.tooltip_descriptions_all",
        "steamadditions.custom.tooltip_steam_foundry_1",
    ],
    // Sky of Grind!
    
    "gtceu:eternity_fusion_reactor": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_eternity_fusion_reactor_1",
        "skyofgrind.custom.tooltip_eternity_fusion_reactor_2",
        "skyofgrind.custom.tooltip_eternity_fusion_reactor_3"
    ],
    "gtceu:hyper_assembly_line": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_hyper_assembly_line_1",
        "skyofgrind.custom.tooltip_hyper_assembly_line_2",
        "skyofgrind.custom.tooltip_hyper_assembly_line_3"
    ],
    "gtceu:hyper_assembler": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_hyper_assembler_1",
        "skyofgrind.custom.tooltip_hyper_assembler_2",
        "skyofgrind.custom.tooltip_hyper_assembler_3"
    ],
    "gtceu:hyper_cutter": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_hyper_cutter_1",
        "skyofgrind.custom.tooltip_hyper_cutter_2",
        "skyofgrind.custom.tooltip_hyper_cutter_3"
    ],
    "gtceu:hyper_laser_engraver": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_hyper_laser_engraver_1",
        "skyofgrind.custom.tooltip_hyper_laser_engraver_2",
        "skyofgrind.custom.tooltip_hyper_laser_engraver_3"
    ],
    "gtceu:hyper_arc_furnace": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_hyper_arc_furnace_1",
        "skyofgrind.custom.tooltip_hyper_arc_furnace_2",
        "skyofgrind.custom.tooltip_hyper_arc_furnace_3"
    ],
    "gtceu:hyper_bender": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_hyper_bender_1",
        "skyofgrind.custom.tooltip_hyper_bender_2",
        "skyofgrind.custom.tooltip_hyper_bender_3"
    ],
    "gtceu:hyper_wiremill": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_hyper_wiremill_1",
        "skyofgrind.custom.tooltip_hyper_wiremill_2",
        "skyofgrind.custom.tooltip_hyper_wiremill_3"
    ],
    "gtceu:hyper_lathe": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_hyper_lathe_1",
        "skyofgrind.custom.tooltip_hyper_lathe_2",
        "skyofgrind.custom.tooltip_hyper_lathe_3"
    ],
    "gtceu:hyper_extruder": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_hyper_extruder_1",
        "skyofgrind.custom.tooltip_hyper_extruder_2",
        "skyofgrind.custom.tooltip_hyper_extruder_3"
    ],
    "gtceu:hyper_mixer": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_hyper_mixer_1",
        "skyofgrind.custom.tooltip_hyper_mixer_2",
        "skyofgrind.custom.tooltip_hyper_mixer_3"
    ],
    "gtceu:dimensional_miner": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_dimensional_miner_1",
        "skyofgrind.custom.tooltip_dimensional_miner_2",
        "skyofgrind.custom.tooltip_dimensional_miner_3",
        "skyofgrind.custom.tooltip_dimensional_miner_4"
    ],
    "gtceu:quantum_space_projector": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_quantum_space_projector_1",
        "skyofgrind.custom.tooltip_quantum_space_projector_2",
        "skyofgrind.custom.tooltip_quantum_space_projector_3"
    ],
    "gtceu:gravitational_implosion_machine": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_gravitational_implosion_machine_1",
        "skyofgrind.custom.tooltip_gravitational_implosion_machine_2"
    ],
    "gtceu:atomicompressor": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_atomicompressor_1"
    ],
    "gtceu:atomicforge": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_atomicforge_1",
        "skyofgrind.custom.tooltip_atomicforge_2",
        "skyofgrind.custom.tooltip_atomicforge_3"
    ],
    "gtceu:reinforced_atomicforge": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_reinforced_atomicforge_1",
        "skyofgrind.custom.tooltip_reinforced_atomicforge_2",
        "skyofgrind.custom.tooltip_reinforced_atomicforge_3",
        "skyofgrind.custom.tooltip_reinforced_atomicforge_4"
    ],
    "gtceu:dimensional_matter_extractor": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_dimensional_matter_extractor_1",
        "skyofgrind.custom.tooltip_dimensional_matter_extractor_2"
    ],
    "gtceu:atomic_moonminer": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_atomic_moonminer_1"
    ],
    "gtceu:starcondenser": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_starcondenser_1"
    ],
    "gtceu:processing_plant": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_processing_plant_1"
    ],
    "gtceu:tesla_tower": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_tesla_tower_1"
    ],
    "gtceu:starextractor": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_starextractor_1"
    ],
    "gtceu:atmospheric_collector": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_atmospheric_collector_1"
    ],
    "gtceu:robust_extractinator": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_robust_extractinator_1"
    ],
    "gtceu:xl_plasma_turbine": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_xl_plasma_turbine_1"
    ],
    "gtceu:bio_lab": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_bio_lab_1"
    ],
    "gtceu:large_bacterial_bat": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_large_bacterial_bat_1"
    ],
    "gtceu:greenhouse": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_greenhouse_1"
    ],
    "gtceu:nebular_plasma_nexus": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_nebular_plasma_nexus_1"
    ],
    "gtceu:large_synchrotron_switcher": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_large_synchrotron_switcher_1",
        "skyofgrind.custom.tooltip_large_synchrotron_switcher_2"
    ],
    "gtceu:singularity_data_confinement": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_singularity_data_confinement_1",
        "skyofgrind.custom.tooltip_singularity_data_confinement_2"
    ],
    "gtceu:altart2": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_altart2_1"
    ],
    "gtceu:altart3": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_altart3_1"
    ],
    "gtceu:altart4": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_altart4_1"
    ],
    "gtceu:altart5": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_altart5_1"
    ],
    "gtceu:altart6": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_altart6_1"
    ],
    "gtceu:quantum_entanglement_decrypter": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_quantum_entanglement_decrypter_1"
    ],
    "gtceu:quantum_entanglement_encrypter": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_quantum_entanglement_encrypter_1"
    ],
    "gtceu:quantum_station": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_quantum_station_1"
    ],
    "gtceu:quantum_cooling_chamber": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_quantum_cooling_chamber_1"
    ],
    "gtceu:stasis_phase_shifter": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_stasis_phase_shifter_1"
    ],
    "gtceu:superconductive_stasis_field": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_superconductive_stasis_field_1",
        "skyofgrind.custom.tooltip_superconductive_stasis_field_2"
    ],
    "gtceu:basic_fusion_injector": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_basic_fusion_injector"
    ],
    "gtceu:wyvern_fusion_injector": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_wyvern_fusion_injector_1",
        "skyofgrind.custom.tooltip_wyvern_fusion_injector_2"
    ],
    "gtceu:draconic_fusion_injector": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_draconic_fusion_injector_1",
        "skyofgrind.custom.tooltip_draconic_fusion_injector_2"
    ],
    "gtceu:chaotic_fusion_injector": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_chaotic_fusion_injector"
    ],
    "gtceu:chemical_plant": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_chemical_plant_1",
        "skyofgrind.custom.tooltip_chemical_plant_2"
    ],
    "gtceu:moonminer": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_moonminer"
    ],
    "gtceu:chaotic_singularity_reactor": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_chaotic_singularity_reactor_1",
        "skyofgrind.custom.tooltip_chaotic_singularity_reactor_2"
    ],
    "gtceu:large_solar_panel": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_large_solar_panel_1",
        "skyofgrind.custom.tooltip_large_solar_panel_2"
    ],
    "gtceu:supercriticalvibrationsifter": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_supercriticalvibrationsifter"
    ],
    "gtceu:component_assembly_line": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_component_assembly_line_1",
        "skyofgrind.custom.tooltip_component_assembly_line_2"
    ],
    "gtceu:circuit_assembly_line": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_circuit_assembly_line_1",
        "skyofgrind.custom.tooltip_circuit_assembly_line_2"
    ],
    "gtceu:naquadahreactormk1": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_naquadahreactormk1_1",
        "skyofgrind.custom.tooltip_naquadahreactormk1_2"
    ],
    "gtceu:large_evaporation_pool": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_large_evaporation_pool_1"
    ],
    "gtceu:naquadahreactormk2": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_naquadahreactormk2_1"
    ],
    "gtceu:large_high_pressure_reactor": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_large_high_pressure_reactor_1"
    ],
    "gtceu:large_polymerization_chamber": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_large_polymerization_chamber_1",
        "basegtm.custom.tooltip_pyrolyse_oven_2"
    ],
    "gtceu:uev_fusion_reactor": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_uev_fusion_reactor_1",
        "skyofgrind.custom.tooltip_fusion_reactor_energy_storage_1",
        "skyofgrind.custom.tooltip_uev_fusion_reactor_2",
        "skyofgrind.custom.tooltip_uev_fusion_reactor_3"
    ],
    "gtceu:plasma_mixer": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_plasma_mixer_1",
        "skyofgrind.custom.tooltip_plasma_mixer_2",
        "skyofgrind.custom.tooltip_plasma_mixer_3",
        "skyofgrind.custom.tooltip_plasma_mixer_4",
        "skyofgrind.custom.tooltip_plasma_mixer_5",
        "skyofgrind.custom.tooltip_plasma_mixer_6",
        "skyofgrind.custom.tooltip_plasma_mixer_7",
        "skyofgrind.custom.tooltip_plasma_mixer_8",
        "skyofgrind.custom.tooltip_plasma_mixer_9"
    ],
    "gtceu:processor_printing_factory_lv": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_processor_printing_factory_lv_1"
    ],
    "gtceu:processor_printing_factory_mv": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_processor_printing_factory_mv_1"
    ],
    "gtceu:processor_printing_factory_hv": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_processor_printing_factory_hv_1"
    ],
    "gtceu:processor_printing_factory_ev": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_processor_printing_factory_ev_1"
    ],
    "gtceu:processor_printing_factory_iv": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_processor_printing_factory_iv_1"
    ],
    "gtceu:processor_printing_factory_luv": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_processor_printing_factory_luv_1"
    ],
    "gtceu:processor_printing_factory_zpm": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_processor_printing_factory_zpm_1"
    ],
    "gtceu:processor_printing_factory_uv": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_processor_printing_factory_uv_1"
    ],
    "gtceu:processor_printing_factory_uhv": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_processor_printing_factory_uhv_1"
    ],
    "gtceu:large_dehydration_unit": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_large_dehydration_unit_1",
        "basegtm.custom.tooltip_pyrolyse_oven_2"
    ],
    "gtceu:xl_radiation_chamber": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_xl_radiation_chamber_1"
    ],
    "gtceu:tectonic_plate_accelerator": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_tectonic_plate_accelerator_1"
    ],
    "gtceu:catalyst_reactor": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_catalyst_reactor_1"
    ],
    "gtceu:particle_implosion_chamber": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_particle_implosion_chamber_1"
    ],
    "gtceu:extreme_cracking_unit": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_extreme_cracking_unit_1"
    ],
    "gtceu:cryogenic_centrifuge": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_cryogenic_centrifuge_1",
        "skyofgrind.custom.tooltip_cryogenic_centrifuge_2"
    ],
    "gtceu:adv_processing_plant": [
        "basegtm.custom.tooltip_descriptions_all",
        "skyofgrind.custom.tooltip_adv_processing_plant_1"
    ]
};
const MACHINE_TYPE_NAMES = {
    "gtceu:large_arc_smelter": "§eArc Furnace",
    "gtceu:large_assembler": "§eAssembling Machine",
    "gtceu:large_autoclave": "§eAutoclave",
    "gtceu:large_brewer": "§eBrewery | Fermenter | Fluid Heater",
    "gtceu:large_centrifuge": "§eCentrifuge | Thermal Centrifuge",
    "gtceu:large_chemical_bath": "§eChemical Bath | Ore Washer",
    "gtceu:large_circuit_assembler": "§eCircuit Assembler",
    "gtceu:large_cutter": "§eCutter | Lathe",
    "gtceu:large_electrolyzer": "§eElectrolyzer",
    "gtceu:large_extruder": "§eExtruder",
    "gtceu:large_electromagnet": "§eElectromagnetic Separator | Polarizer",
    "gtceu:large_engraving_laser": "§eLaser Engraver",
    "gtceu:large_maceration_tower": "§eMacerator",
    "gtceu:large_material_press": "§eBending | Compressor | Forge Hammer | Forming Press",
    "gtceu:large_mixer": "§eMixer",
    "gtceu:large_packer": "§ePacker",
    "gtceu:large_sifting_funnel": "§eSifter",
    "gtceu:large_solidifier": "§eFluid Solidifier",
    "gtceu:large_wiremill": "§eWiremill",
    "gtceu:large_chemical_reactor": "§eChemical Reactor | LCR",
    "gtceu:vacuum_freezer": "§eVacuum Freezer",
    "gtceu:implosion_compressor": "§eImplosion Compressor",
    "gtceu:cracker": "§eCracker",
    "gtceu:pyrolyse_oven": "§ePyrolyse Oven",
    "gtceu:mega_vacuum_freezer": "§eVacuum Freezer",
    "gtceu:mega_blast_furnace": "§eElectric Blast Furnace",
    "gtceu:multi_smelter": "§eSmelting | Alloy Smelter",
    "gtceu:alloy_blast_smelter": "§eAlloy Blast Smelter",
    "gtceu:distillation_tower": "§eDistillation Tower",
    "gtceu:electric_blast_furnace": "§eElectric Blast Furnace",
    "gtceu:steam_grinder": "§eMacerator",
    "gtceu:steam_oven": "§eSmelting",
    "gtceu:primitive_pump": "§eWater Pump",
    "gtceu:primitive_blast_furnace": "§ePrimitive Blast Furnace",
    "gtceu:coke_oven": "§eCoke Oven",
    "gtceu:assembly_line": "§eAssembly Line",
    "gtceu:steam_grinder": "§eMacerating",
    "gtceu:steam_oven": "§eSmelting",
    "gtceu:large_extractor": "§eCanner | Extractor",
    "gtceu:large_distillery": "§eDistillery | Distillation Tower",
    "gtceu:bronze_large_boiler": "§eLarge Boiler",
    "gtceu:bronze_multiblock_tank": "§eMultiblock Tank",
    "gtceu:uv_fusion_reactor": "§eFusion Reactor",
    "gtceu:mv_fluid_drilling_rig": "§eFluid Drilling Rig",
    "gtceu:hv_fluid_drilling_rig": "§eFluid Drilling Rig",
    "gtceu:ev_fluid_drilling_rig": "§eFluid Drilling Rig",
    "gtceu:steam_large_turbine": "§eSteam Turbine",
    "gtceu:luv_fusion_reactor": "§eFusion Reactor",
    "gtceu:mv_bedrock_ore_miner": "§eBedrock Ore Miner",
    "gtceu:hv_bedrock_ore_miner": "§eBedrock Ore Miner",
    "gtceu:ev_bedrock_ore_miner": "§eBedrock Ore Miner",
    "gtceu:research_station": "§eResearch Station",
    "gtceu:extreme_combustion_engine": "§eCombustion Generator",
    "gtceu:data_bank": "§eData Bank",
    "gtceu:gas_large_turbine": "§eGas Turbine",
    "gtceu:zpm_fusion_reactor": "§eFusion Reactor",
    "gtceu:titanium_large_boiler": "§eLarge Boiler",
    "gtceu:wooden_multiblock_tank": "§eMultiblock Tank",
    "gtceu:steel_large_boiler": "§eLarge Boiler",
    "gtceu:plasma_large_turbine": "§ePlasma Generator",
    "gtceu:luv_large_miner": "§eOre Miner",
    "gtceu:ev_large_miner": "§eOre Miner",
    "gtceu:iv_large_miner": "§eOre Miner",
    "gtceu:active_transformer": "§eActive Transformer",
    "gtceu:high_performance_computation_array": "§eHPCA",
    "gtceu:central_monitor": "§eMonitor",
    "gtceu:cleanroom": "§eCleanroom",
    "gtceu:network_switch": "§eNetwork Switch",
    "gtceu:tungstensteel_large_boiler": "§eLarge Boiler",
    "gtceu:steel_multiblock_tank": "§eMultiblock Tank",
    "gtceu:large_combustion_engine": "§eCombustion Generator",
    "gtceu:charcoal_pile_igniter": "§eCharcoal Pile Igniter",
    // Steam Additions
    "steamadditions:steam_foundry": "§eAlloy Smelter",
    "steamadditions:steam_separator": "§eCentrifuge",
    // GTMUtils
    "gtmutils:pterb_machine": "§eWireless Active Transformer",
    // Sky of Grind
    "gtceu:large_dehydration_unit": "§eDehydration Unit | Pyrolyse Oven",
    "gtceu:eternity_fusion_reactor": "§eEternity Fusion",
    "gtceu:xl_radiation_chamber": "§eRadiation Chamber",
    "gtceu:tectonic_plate_accelerator": "§eTectonic Plate Accelerator",
    "gtceu:catalyst_reactor": "§eCatalyst Reactor",
    "gtceu:particle_implosion_chamber": "§eImplosion Compressor",
    "gtceu:extreme_cracking_unit": "§eExtreme Cracking Unit | Cracker",
    "gtceu:cryogenic_centrifuge": "§eCryogenic Centrifuge",
    "gtceu:adv_processing_plant": "§eAdvanced Ore Processing Plant",
    "gtceu:large_evaporation_pool": "§eEvaporation Pool",
    "gtceu:large_solar_panel": "§eLarge Solar Panel",
    "gtceu:naquadahreactormk1": "§eNaquadah Reactor MK I",
    "gtceu:naquadahreactormk2": "§eNaquadah Reactor MK II",
    "gtceu:large_high_pressure_reactor": "§eHigh-Pressure Reactor",
    "gtceu:large_polymerization_chamber": "§ePolymerization Chamber",
    "gtceu:plasma_mixer": "§ePlasma Mixer",
    "gtceu:supercriticalvibrationsifter": "§eSupercritical Vibrational Shifting",
    "gtceu:power_substation": "§ePower Substation",
    "gtceu:uev_fusion_reactor": "§eFusion Reactor",
    "gtceu:hyper_assembly_line": "§eAssembly Line",
    "gtceu:hyper_assembler": "§eAssembler",
    "gtceu:hyper_cutter": "§eCutter",
    "gtceu:hyper_laser_engraver": "§eLaser Engraver",
    "gtceu:hyper_arc_furnace": "§eArc Furnace",
    "gtceu:component_assembly_line": "§eComponent Assembly Line",
    "gtceu:hyper_bender": "§eBender",
    "gtceu:hyper_wiremill": "§eWiremill",
    "gtceu:hyper_lathe": "§eLathe",
    "gtceu:hyper_extruder": "§eExtruder",
    "gtceu:hyper_mixer": "§eMixer",
    "gtceu:dimensional_miner": "§eDimensional Miner",
    "gtceu:quantum_space_projector": "§eSpace Projector",
    "gtceu:gravitational_implosion_machine": "§eHexa-Implosion Machine",
    "gtceu:atomicompressor": "§eSub-Atomical Compressor",
    "gtceu:atomicforge": "§eAtomic Forge",
    "gtceu:reinforced_atomicforge": "§eAtomic Melting Module | Atomic Forge | Electric Blast Furnace",
    "gtceu:dimensional_matter_extractor": "§eDimensional Matter Extractor",
    "gtceu:atomic_moonminer": "§eMoon Miner",
    "gtceu:starcondenser": "§eStar Condenser",
    "gtceu:processing_plant": "§eOre Processing Plant",
    "gtceu:tesla_tower": "§eTesla Tower",
    "gtceu:starextractor": "§eStar Extractor",
    "gtceu:atmospheric_collector": "§eGas Collector",
    "gtceu:robust_extractinator": "§eElectric Extractinator",
    "gtceu:xl_plasma_turbine": "§eXL Plasma Turbine",
    "gtceu:bio_lab": "§eBio-Lab",
    "gtceu:large_bacterial_bat": "§eLarge Bacterial Vat",
    "gtceu:greenhouse": "§eGreenhouse",
    "gtceu:nebular_plasma_nexus": "§ePlasma Nexus",
    "gtceu:large_synchrotron_switcher": "§eHyperphased Accelerator",
    "gtceu:singularity_data_confinement": "§eBlack Hole Holder",
    "gtceu:altart2": "§eBlood Altar Tier 2",
    "gtceu:altart3": "§eBlood Altar Tier 3",
    "gtceu:altart4": "§eBlood Altar Tier 4",
    "gtceu:altart5": "§eBlood Altar Tier 5",
    "gtceu:altart6": "§eMAX Blood Altar",
    "gtceu:quantum_entanglement_decrypter": "§eQuantum Entanglement Decrypter",
    "gtceu:quantum_entanglement_encrypter": "§eQuantum Entanglement Encrypter",
    "gtceu:quantum_station": "§eQuantum Station",
    "gtceu:quantum_cooling_chamber": "§eQuantum Cooling Chamber",
    "gtceu:stasis_phase_shifter": "§eStasis Phase Shifter",
    "gtceu:superconductive_stasis_field": "§eStasis Field",
    "gtceu:chaotic_singularity_reactor": "§eChaotic Singularity Reactor",
    "gtceu:basic_fusion_injector": "§eBasis Fusion Injector",
    "gtceu:wyvern_fusion_injector": "§e(Basis | Wyvern) Fusion Injector",
    "gtceu:draconic_fusion_injector": "§e(Basis | Wyvern | Draconic) Fusion Injector",
    "gtceu:chaotic_fusion_injector": "§e(Basis | Wyvern | Draconic | Chaotic) Fusion Injector",
    "gtceu:chemical_plant": "§eChemical Plant | Large Chemical Reactor",
    "gtceu:moonminer": "§eMoon Miner",
    "gtceu:circuit_assembly_line": "§eCircuit Assembly Line",
    "gtceu:processor_printing_factory_lv": "§eLV Processor Printer",
    "gtceu:processor_printing_factory_mv": "§eMV Processor Printer",
    "gtceu:processor_printing_factory_hv": "§eHV Processor Printer",
    "gtceu:processor_printing_factory_ev": "§eEV Processor Printer",
    "gtceu:processor_printing_factory_iv": "§eIV Processor Printer",
    "gtceu:processor_printing_factory_luv": "§eLuV Processor Printer",
    "gtceu:processor_printing_factory_zpm": "§eZPM Processor Printer",
    "gtceu:processor_printing_factory_uv": "§eUV Processor Printer",
    "gtceu:processor_printing_factory_uhv": "§eUHV Processor Printer",
};
const SHIFT_PLACEHOLDER_VALUES = {
    // PALLADIUM_SUBSTATION_CASING_TOOLTIP_POWER_SUBSTATION
    "gtceu:power_substation": {
        tooltipOrder: ["controller", "energy", "energyoutput", "maintenance"],
        values:
            PALLADIUM_SUBSTATION_CASING_TOOLTIP_POWER_SUBSTATION
    },
    // COMPUTER_CASING_TOOLTIP_HPCA
    "gtceu:high_performance_computation_array": {
        tooltipOrder: ["controller", "fluidinput", "energy", "maintenance", "dataoutput"],
        values:
            COMPUTER_CASING_TOOLTIP_HPCA
    },
    // HIGH_POWER_CASING_TOOLTIP_ACTIVE_TRANSFORMER
    "gtceu:active_transformer": {
        tooltipOrder: ["controller", "energy", "energyoutput"],
        values:
            HIGH_POWER_CASING_TOOLTIP_ACTIVE_TRANSFORMER
    },
    // COMPUTER_CASING_TOOLTIP_RESEARCH_STATION
    "gtceu:research_station": {
        tooltipOrder: ["controller", "energy", "maintenance", "datainput"],
        values:
            COMPUTER_CASING_TOOLTIP_RESEARCH_STATION
    },
    // HIGH_POWER_CASING_TOOLTIP_DATA_BANK
    "gtceu:data_bank": {
        tooltipOrder: ["controller", "energy", "maintenance", "dataaccesshatch", "datainput", "dataoutput"],
        values:
            HIGH_POWER_CASING_TOOLTIP_DATA_BANK
    },
    // PLASCRETE_CASING_TOOLTIP
    "gtceu:cleanroom": {
        tooltipOrder: ["controller", "energy", "maintenance", "filtercasings", "hullsdiodes"],
        values:
            PLASCRETE_CASING_TOOLTIP
    },
    // WATERTIGHT_CASING_TOOLTIP
    "gtceu:large_autoclave": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            WATERTIGHT_CASING_TOOLTIP
    },
    "gtceu:large_chemical_bath": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            WATERTIGHT_CASING_TOOLTIP
    },
    "gtceu:large_solidifier": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            WATERTIGHT_CASING_TOOLTIP
    },
    "gtceu:large_extractor": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            WATERTIGHT_CASING_TOOLTIP
    },
    // FUSION_MACHINE_CASING_TOOLTIP_FUSION_MKI
    "gtceu:luv_fusion_reactor": {
        tooltipOrder: ["controller", "fluidinput", "fluidoutput", "energy"],
        values:
            FUSION_MACHINE_CASING_TOOLTIP_FUSION_MKI
    },
    // FUSION_MACHINE_CASING_MKII_TOOLTIP_FUSION_MKII
    "gtceu:zpm_fusion_reactor": {
        tooltipOrder: ["controller", "fluidinput", "fluidoutput", "energy"],
        values:
            FUSION_MACHINE_CASING_MKII_TOOLTIP_FUSION_MKII
    },
    // FUSION_MACHINE_CASING_MKIII_TOOLTIP_FUSION_MKIII
    "gtceu:uv_fusion_reactor": {
        tooltipOrder: ["controller", "fluidinput", "fluidoutput", "energy"],
        values:
            FUSION_MACHINE_CASING_MKIII_TOOLTIP_FUSION_MKIII
    },
    // WATERTIGHT_CASING_DT_TOOLTIP
    "gtceu:large_distillery": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            WATERTIGHT_CASING_DT_TOOLTIP
    },
    // COMPUTER_CASING_TOOLTIP_NETWORK_SWITCH
    "gtceu:network_switch": {
        tooltipOrder: ["controller", "energy", "maintenance", "datainput", "dataoutput"],
        values:
            COMPUTER_CASING_TOOLTIP_NETWORK_SWITCH
    },
    // LARGE_SCALE_ASSEMBLER_CASING_TOOLTIP
    "gtceu:large_assembler": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            LARGE_SCALE_ASSEMBLER_CASING_TOOLTIP
    },
    "gtceu:large_circuit_assembler": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            LARGE_SCALE_ASSEMBLER_CASING_TOOLTIP
    },
    // STRESS_PROOF_CASING_TOOLTIP
    "gtceu:large_material_press": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            STRESS_PROOF_CASING_TOOLTIP
    },
    "gtceu:large_wiremill": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            STRESS_PROOF_CASING_TOOLTIP
    },
    "gtceu:large_extruder": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            STRESS_PROOF_CASING_TOOLTIP
    },
    // NONCONDUCTING_CASING_TOOLTIP
    "gtceu:large_electrolyzer": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            NONCONDUCTING_CASING_TOOLTIP
    },
    "gtceu:large_electromagnet": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            NONCONDUCTING_CASING_TOOLTIP
    },
    // VIBRATION_SAFE_CASING_TOOLTIP
    "gtceu:large_centrifuge": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            VIBRATION_SAFE_CASING_TOOLTIP
    },
    "gtceu:large_sifting_funnel": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            VIBRATION_SAFE_CASING_TOOLTIP
    },
    // HIGH_TEMPERATURE_SMELTING_CASING_TOOLTIP
    "gtceu:large_arc_smelter": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            HIGH_TEMPERATURE_SMELTING_CASING_TOOLTIP
    },
    "gtceu:alloy_blast_smelter": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler"],
        values:
            HIGH_TEMPERATURE_SMELTING_CASING_TOOLTIP
    },
    // HIGH_TEMPERATURE_SMELTING_CASING_RHF_TOOLTIP
    "gtceu:mega_blast_furnace": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            HIGH_TEMPERATURE_SMELTING_CASING_RHF_TOOLTIP
    },
    // CORROSION_PROOF_CASING_TOOLTIP
    "gtceu:large_brewer": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            CORROSION_PROOF_CASING_TOOLTIP
    },
    "gtceu:large_evaporation_pool": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            CORROSION_PROOF_CASING_TOOLTIP
    },
    // SHOCK_PROOF_CUTTING_CASING_TOOLTIP
    "gtceu:large_cutter": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            SHOCK_PROOF_CUTTING_CASING_TOOLTIP
    },
    // LASER_SAFE_ENGRAVING_CASING_TOOLTIP
    "gtceu:large_engraving_laser": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            LASER_SAFE_ENGRAVING_CASING_TOOLTIP
    },
    // SECURE_MACERATION_CASING_TOOLTIP
    "gtceu:large_maceration_tower": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            SECURE_MACERATION_CASING_TOOLTIP
    },
    // REACTION_SAFE_MIXING_CASING_TOOLTIP
    "gtceu:large_mixer": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            REACTION_SAFE_MIXING_CASING_TOOLTIP
    },
    // ROBUST_TUNGSTENSTEEL_MACHINE_CASING_TOOLTIP
    "gtceu:large_packer": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            ROBUST_TUNGSTENSTEEL_MACHINE_CASING_TOOLTIP
    },
    // FROST_PROOF_ALUMINIUM_MACHINE_CASING_TOOLTIP
    "gtceu:vacuum_freezer": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance"],
        values:
            FROST_PROOF_ALUMINIUM_MACHINE_CASING_TOOLTIP
    },
    "gtceu:mega_vacuum_freezer": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            FROST_PROOF_ALUMINIUM_MACHINE_CASING_TOOLTIP
    },
    // CHEMICALLY_INERT_PTFE_MACHINE_CASING_TOOLTIP
    "gtceu:large_chemical_reactor": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance"],
        values:
            CHEMICALLY_INERT_PTFE_MACHINE_CASING_TOOLTIP
    },
    // SOLID_MACHINE_CASING_TOOLTIP_MINER_PUMP
    "gtceu:mv_fluid_drilling_rig": {
        tooltipOrder: ["controller", "fluidoutput", "energy"],
        values:
            SOLID_MACHINE_CASING_TOOLTIP_MINER_PUMP
    },
    "gtceu:mv_bedrock_ore_miner": {
        tooltipOrder: ["controller", "itemoutput", "energy"],
        values:
            SOLID_MACHINE_CASING_TOOLTIP_MINER_PUMP
    },
    "gtceu:ev_large_miner": {
        tooltipOrder: ["controller", "itemoutput", "energy"],
        values:
            SOLID_MACHINE_CASING_TOOLTIP_MINER_PUMP
    },
    // STABLE_TITANIUM_MACHINE_CASING_TOOLTIP_MINER_PUMP
    "gtceu:hv_fluid_drilling_rig": {
        tooltipOrder: ["controller", "fluidoutput", "energy"],
        values:
            STABLE_TITANIUM_MACHINE_CASING_TOOLTIP_MINER_PUMP
    },
    "gtceu:hv_bedrock_ore_miner": {
        tooltipOrder: ["controller", "itemoutput", "energy"],
        values:
            STABLE_TITANIUM_MACHINE_CASING_TOOLTIP_MINER_PUMP
    },
    "gtceu:iv_large_miner": {
        tooltipOrder: ["controller", "itemoutput", "energy"],
        values:
            STABLE_TITANIUM_MACHINE_CASING_TOOLTIP_MINER_PUMP
    },
    // ROBUST_TUNGSTENSTEEL_MACHINE_CASING_TOOLTIP_MINER_PUMP
    "gtceu:ev_fluid_drilling_rig": {
        tooltipOrder: ["controller", "fluidoutput", "energy"],
        values:
            ROBUST_TUNGSTENSTEEL_MACHINE_CASING_TOOLTIP_MINER_PUMP
    },
    "gtceu:ev_bedrock_ore_miner": {
        tooltipOrder: ["controller", "itemoutput", "energy"],
        values:
            ROBUST_TUNGSTENSTEEL_MACHINE_CASING_TOOLTIP_MINER_PUMP
    },
    "gtceu:luv_large_miner": {
        tooltipOrder: ["controller", "itemoutput", "energy"],
        values:
            ROBUST_TUNGSTENSTEEL_MACHINE_CASING_TOOLTIP_MINER_PUMP
    },
    // SOLID_MACHINE_CASING_TOOLTIP
    "gtceu:implosion_compressor": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance"],
        values:
            SOLID_MACHINE_CASING_TOOLTIP
    },
    // SOLID_MACHINE_CASING_ASSEMBLY_LINE_TOOLTIP
    "gtceu:assembly_line": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "energy", "datahatch"],
        values:
            SOLID_MACHINE_CASING_ASSEMBLY_LINE_TOOLTIP
    },
    // CLEAN_STAINLESS_STEEL_CASING_TOOLTIP
    "gtceu:cracker": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler"],
        values:
            CLEAN_STAINLESS_STEEL_CASING_TOOLTIP
    },
    // CLEAN_STAINLESS_STEEL_CASING_TOOLTIP_LARGESOLAR
    "gtceu:large_solar_panel": {
        tooltipOrder: ["controller", "iteminput", "energyoutput"],
        values:
            CLEAN_STAINLESS_STEEL_CASING_TOOLTIP_LARGESOLAR
    },
    // CLEAN_STAINLESS_STEEL_CASING_DT_TOOLTIP
    "gtceu:distillation_tower": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance"],
        values:
            CLEAN_STAINLESS_STEEL_CASING_DT_TOOLTIP
    },
    // ULV_MACHINE_CASING_TOOLTIP
    "gtceu:pyrolyse_oven": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler"],
        values:
            ULV_MACHINE_CASING_TOOLTIP
    },
    //HEAT_PROOF_INVAR_MACHINE_CASING_TOOLTIP
    "gtceu:electric_blast_furnace": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler"],
        values:
            HEAT_PROOF_INVAR_MACHINE_CASING_TOOLTIP
    },
    "gtceu:multi_smelter": {
        tooltipOrder: ["controller", "iteminput", "itemoutput", "energy", "maintenance", "muffler"],
        values:
            HEAT_PROOF_INVAR_MACHINE_CASING_TOOLTIP
    },
    "gtceu:tectonic_plate_accelerator": {
        tooltipOrder: ["controller", "iteminput", "itemoutput", "energy", "maintenance", "pch"],
        values:
            HEAT_PROOF_INVAR_MACHINE_CASING_TOOLTIP
    },
    // LOOK_AT_THE_MULTIBLOCK_PREVIEW_TOOLTIP
    "gtceu:primitive_pump": {
        tooltipOrder: ["controller"],
        values:
            LOOK_AT_THE_MULTIBLOCK_PREVIEW_TOOLTIP
    },
    "gtceu:primitive_blast_furnace": {
        tooltipOrder: ["controller"],
        values:
            LOOK_AT_THE_MULTIBLOCK_PREVIEW_TOOLTIP
    },
    // COKE_OVEN_BRICKS_TOOLTIP
    "gtceu:coke_oven": {
        tooltipOrder: ["controller", "iteminput", "itemoutput", "fluidoutput", "cokeovenhatch"],
        values:
            COKE_OVEN_BRICKS_TOOLTIP
    },
    // STEAM_MACHINE_CASING_TOOLTIP
    "gtceu:steam_grinder": {
        tooltipOrder: ["controller", "steamiteminput", "steamitemoutput", "steamenergy"],
        values:
            STEAM_MACHINE_CASING_TOOLTIP
    },
    "steamadditions:steam_separator": {
        tooltipOrder: ["controller", "steamiteminput", "steamitemoutput", "steamenergy"],
        values:
            STEAM_MACHINE_CASING_TOOLTIP
    },
    // STEAM_MACHINE_CASING_OVEN_TOOLTIP
    "gtceu:steam_oven": {
        tooltipOrder: ["controller", "steamiteminput", "steamitemoutput", "steamenergy"],
        values:
            STEAM_MACHINE_CASING_OVEN_TOOLTIP
    },
    "steamadditions:steam_foundry": {
        tooltipOrder: ["controller", "steamiteminput", "steamitemoutput", "steamenergy"],
        values:
            STEAM_MACHINE_CASING_OVEN_TOOLTIP
    },
    // CHARCOAL_PILE_IGNITER_TOOLTIP
    "gtceu:charcoal_pile_igniter": {
        tooltipOrder: ["controller"],
        values:
            CHARCOAL_PILE_IGNITER_TOOLTIP
    },
    // STABLE_TITANIUM_MACHINE_CASING_COMBUSTION_TOOLTIP
    "gtceu:large_combustion_engine": {
        tooltipOrder: ["controller", "fluidinput", "energyoutput", "maintenance", "muffler"],
        values:
            STABLE_TITANIUM_MACHINE_CASING_COMBUSTION_TOOLTIP
    },
    // ROBUST_TUNGSTENSTEEL_MACHINE_CASING_COMBUSTION_TOOLTIP
    "gtceu:extreme_combustion_engine": {
        tooltipOrder: ["controller", "fluidinput", "energyoutput", "maintenance", "muffler"],
        values:
            ROBUST_TUNGSTENSTEEL_MACHINE_CASING_COMBUSTION_TOOLTIP
    },
    // MAGNALIUM_TURBINE_CASING_TURBINE_TOOLTIP
    "gtceu:steam_large_turbine": {
        tooltipOrder: ["controller", "fluidinput", "fluidoutput", "energyoutput", "rotorholder", "maintenance", "muffler"],
        values:
            MAGNALIUM_TURBINE_CASING_TURBINE_TOOLTIP
    },
    // STAINLESS_TURBINE_CASING_TURBINE_TOOLTIP
    "gtceu:gas_large_turbine": {
        tooltipOrder: ["controller", "fluidinput", "energyoutput", "rotorholder", "maintenance", "muffler"],
        values:
            STAINLESS_TURBINE_CASING_TURBINE_TOOLTIP
    },
    // TUNGSTENSTEEL_TURBINE_CASING_TURBINE_TOOLTIP
    "gtceu:plasma_large_turbine": {
        tooltipOrder: ["controller", "fluidinput", "energyoutput", "rotorholder", "maintenance", "muffler"],
        values:
            TUNGSTENSTEEL_TURBINE_CASING_TURBINE_TOOLTIP
    },
    // GTMUtils
    // PALLADIUM_SUBSTATION_CASING_TOOLTIP_WIRELESS_AT
    "gtmutils:pterb_machine": {
        tooltipOrder: ["controller", "energy", "energyoutput"],
        values:
            PALLADIUM_SUBSTATION_CASING_TOOLTIP_WIRELESS_AT
    },
    // Sky of Grind!
    // FUSION_MACHINE_CASING_MKIV_TOOLTIP_FUSION_MKIV
    "gtceu:uev_fusion_reactor": {
        tooltipOrder: ["controller", "fluidinput", "fluidoutput", "energy", "maintenance"],
        values:
            FUSION_MACHINE_CASING_MKIV_TOOLTIP_FUSION_MKIV
    },
    // ETERNITY_CASING_TOOLTIP_SOG
    "gtceu:hyper_assembly_line": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            ETERNITY_CASING_TOOLTIP_SOG
    },
    "gtceu:hyper_assembler": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            ETERNITY_CASING_TOOLTIP_SOG
    },
    "gtceu:hyper_cutter": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            ETERNITY_CASING_TOOLTIP_SOG
    },
    "gtceu:hyper_laser_engraver": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            ETERNITY_CASING_TOOLTIP_SOG
    },
    "gtceu:hyper_arc_furnace": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            ETERNITY_CASING_TOOLTIP_SOG
    },
    "gtceu:hyper_bender": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            ETERNITY_CASING_TOOLTIP_SOG
    },
    "gtceu:hyper_wiremill": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            ETERNITY_CASING_TOOLTIP_SOG
    },
    "gtceu:hyper_lathe": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            ETERNITY_CASING_TOOLTIP_SOG
    },
    "gtceu:hyper_extruder": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            ETERNITY_CASING_TOOLTIP_SOG
    },
    "gtceu:hyper_mixer": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            ETERNITY_CASING_TOOLTIP_SOG
    },
    "gtceu:dimensional_miner": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance"],
        values:
            ETERNITY_CASING_TOOLTIP_SOG
    },
    // FUSION_MACHINE_CASING_MKV_TOOLTIP_ETERNITY_FUSION
    "gtceu:eternity_fusion_reactor": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "pch"],
        values:
            FUSION_MACHINE_CASING_MKV_TOOLTIP_ETERNITY_FUSION
    },
    // QUANTUM_CASING_TOOLTIP_SOG
    "gtceu:quantum_space_projector": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            QUANTUM_CASING_TOOLTIP_SOG
    },
    "gtceu:gravitational_implosion_machine": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            QUANTUM_CASING_TOOLTIP_SOG
    },
    // ATOMIC_CASING_TOOLTIP_SOG
    "gtceu:starcondenser": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            ATOMIC_CASING_TOOLTIP_SOG
    },
    "gtceu:particle_implosion_chamber": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            ATOMIC_CASING_TOOLTIP_SOG
    },
    "gtceu:xl_radiation_chamber": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            ATOMIC_CASING_TOOLTIP_SOG
    },
    "gtceu:adv_processing_plant": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "energy", "maintenance", "pch"],
        values:
            ATOMIC_CASING_TOOLTIP_SOG
    },
    // ATOMIC_CASING_TOOLTIP_SPECIAL_MAINTENANCE_MUFFLER_SOG
    "gtceu:atomicompressor": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            ATOMIC_CASING_TOOLTIP_SPECIAL_MAINTENANCE_MUFFLER_SOG
    },
    "gtceu:dimensional_matter_extractor": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            ATOMIC_CASING_TOOLTIP_SPECIAL_MAINTENANCE_MUFFLER_SOG
    },
    "gtceu:atomic_moonminer": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            ATOMIC_CASING_TOOLTIP_SPECIAL_MAINTENANCE_MUFFLER_SOG
    },
    // ATOMIC_CASING_TOOLTIP_ATOMICFORGE_SOG
    "gtceu:atomicforge": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler"],
        values:
            ATOMIC_CASING_TOOLTIP_ATOMICFORGE_SOG
    },
    "gtceu:reinforced_atomicforge": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            ATOMIC_CASING_TOOLTIP_ATOMICFORGE_SOG
    },
    // HIGH_POWER_MACERATING_CASING_SOG
    "gtceu:processing_plant": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            HIGH_POWER_MACERATING_CASING_SOG
    },
    // ROBUST_TUNGSTENSTEEL_MACHINE_CASING_MAINTENANCE_MUFFLER_TOOLTIP_SOG
    "gtceu:starextractor": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler"],
        values:
            ROBUST_TUNGSTENSTEEL_MACHINE_CASING_MAINTENANCE_MUFFLER_TOOLTIP_SOG
    },
    // ROBUST_TUNGSTENSTEEL_MACHINE_CASING_MAINTENANCE_MUFFLER_TESLA_TOOLTIP_SOG
    "gtceu:tesla_tower": {
        tooltipOrder: ["controller", "iteminput", "itemoutput", "energy", "maintenance", "muffler"],
        values:
            ROBUST_TUNGSTENSTEEL_MACHINE_CASING_MAINTENANCE_MUFFLER_TESLA_TOOLTIP_SOG
    },
    // WATERTIGHT_CASING_TOOLTIP_SOG
    "gtceu:atmospheric_collector": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            WATERTIGHT_CASING_TOOLTIP_SOG
    },
    "gtceu:robust_extractinator": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            WATERTIGHT_CASING_TOOLTIP_SOG
    },
    // NAQUADRIA_TURBINE_CASING_XLPLASMATURBINE_SOG
    "gtceu:xl_plasma_turbine": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energyoutput", "maintenance", "muffler"],
        values:
            NAQUADRIA_TURBINE_CASING_XLPLASMATURBINE_SOG
    },
    // NAQUADRIA_TURBINE_CASING_TOOLTIP_SOG_EXTREMECRACKER
    "gtceu:extreme_cracking_unit": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            NAQUADRIA_TURBINE_CASING_TOOLTIP_SOG_EXTREMECRACKER
    },
    // PLASCRETE_TOOLTIP_SOG
    "gtceu:bio_lab": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance"],
        values:
            PLASCRETE_TOOLTIP_SOG
    },
    "gtceu:large_bacterial_bat": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            PLASCRETE_TOOLTIP_SOG
    },
    // SOLID_MACHINE_CASING_TOOLTIP_SOG
    "gtceu:greenhouse": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            SOLID_MACHINE_CASING_TOOLTIP_GREENHOUSE_SOG
    },
    // HIGHLY_REINFORCED_RADIOACTIVE_CASING_TOOLTIP_SOG
    "gtceu:nebular_plasma_nexus": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            HIGHLY_REINFORCED_RADIOACTIVE_CASING_TOOLTIP_SOG
    },
    "gtceu:large_synchrotron_switcher": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance"],
        values:
            HIGHLY_REINFORCED_RADIOACTIVE_CASING_TOOLTIP_SOG
    },
    "gtceu:singularity_data_confinement": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            HIGHLY_REINFORCED_RADIOACTIVE_CASING_TOOLTIP_SOG
    },
    "gtceu:quantum_entanglement_decrypter": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance"],
        values:
            HIGHLY_REINFORCED_RADIOACTIVE_CASING_TOOLTIP_SOG
    },
    "gtceu:quantum_entanglement_encrypter": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance"],
        values:
            HIGHLY_REINFORCED_RADIOACTIVE_CASING_TOOLTIP_SOG
    },
    "gtceu:basic_fusion_injector": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "energy", "maintenance", "muffler"],
        values:
            HIGHLY_REINFORCED_RADIOACTIVE_CASING_TOOLTIP_SOG
    },
    "gtceu:wyvern_fusion_injector": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "energy", "maintenance", "muffler"],
        values:
            HIGHLY_REINFORCED_RADIOACTIVE_CASING_TOOLTIP_SOG
    },
    "gtceu:draconic_fusion_injector": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "energy", "maintenance", "muffler"],
        values:
            HIGHLY_REINFORCED_RADIOACTIVE_CASING_TOOLTIP_SOG
    },
    "gtceu:chaotic_fusion_injector": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "energy", "maintenance", "muffler"],
        values:
            HIGHLY_REINFORCED_RADIOACTIVE_CASING_TOOLTIP_SOG
    },
    "gtceu:large_high_pressure_reactor": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "energy", "maintenance", "muffler"],
        values:
            HIGHLY_REINFORCED_RADIOACTIVE_CASING_TOOLTIP_SOG
    },
    // HIGHLY_REINFORCED_RADIOACTIVE_CASING_TOOLTIP_CHAOTICREACTOR_SOG
    "gtceu:chaotic_singularity_reactor": {
        tooltipOrder: ["controller", "iteminput", "itemoutput", "energyoutput"],
        values:
            HIGHLY_REINFORCED_RADIOACTIVE_CASING_TOOLTIP_CHAOTICREACTOR_SOG
    },
    // PALLADIUM_SUBSTATION_CASING_TOOLTIP_BLOODALTAR_SOG
    "gtceu:altart2": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler"],
        values:
            PALLADIUM_SUBSTATION_CASING_TOOLTIP_BLOODALTAR_SOG
    },
    "gtceu:altart3": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler"],
        values:
            PALLADIUM_SUBSTATION_CASING_TOOLTIP_BLOODALTAR_SOG
    },
    "gtceu:altart4": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler"],
        values:
            PALLADIUM_SUBSTATION_CASING_TOOLTIP_BLOODALTAR_SOG
    },
    "gtceu:altart5": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler"],
        values:
            PALLADIUM_SUBSTATION_CASING_TOOLTIP_BLOODALTAR_SOG
    },
    "gtceu:altart6": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler"],
        values:
            PALLADIUM_SUBSTATION_CASING_TOOLTIP_BLOODALTAR_SOG
    },
    // KEVLAR_CASING_TOOLTIP_SOG
    "gtceu:catalyst_reactor": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance"],
        values:
            KEVLAR_CASING_TOOLTIP_SOG
    },
    // REINFORCED_COMPUTATION_CASING_TOOLTIP_QUANTUMSTATION_SOG
    "gtceu:quantum_station": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "computationinput"],
        values:
            REINFORCED_COMPUTATION_CASING_TOOLTIP_QUANTUMSTATION_SOG
    },
    // FROST_PROOF_ALUMINIUM_MACHINE_CASING_TOOLTIP_SOG
    "gtceu:quantum_cooling_chamber": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance"],
        values:
            FROST_PROOF_ALUMINIUM_MACHINE_CASING_TOOLTIP_SOG
    },
    // SUPERCONDUCTIVE_CASING_TOOLTIP_SOG
    "gtceu:stasis_phase_shifter": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance"],
        values:
            SUPERCONDUCTIVE_CASING_TOOLTIP_SOG
    },
    "gtceu:superconductive_stasis_field": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance"],
        values:
            SUPERCONDUCTIVE_CASING_TOOLTIP_SOG
    },
    // CHEMICALLY_INERT_PTFE_MACHINE_CASING_TOOLTIP_SOG
    "gtceu:chemical_plant": {
        tooltipOrder: ["controller", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance"],
        values:
            CHEMICALLY_INERT_PTFE_MACHINE_CASING_TOOLTIP_SOG
    },
    "gtceu:naquadahreactormk1": {
        tooltipOrder: ["controller", "fluidinput", "fluidoutput", "energy", "maintenance", "muffler"],
        values:
            CHEMICALLY_INERT_PTFE_MACHINE_CASING_TOOLTIP_SOG_NAQREACTOR
    },
    // CLEAN_STAINLESS_STEEL_CASING_TOOLTIP_LARGEDEHYDRATION_SOG
    "gtceu:large_dehydration_unit": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            CLEAN_STAINLESS_STEEL_CASING_TOOLTIP_LARGEDEHYDRATION_SOG
    },
    // INERT_PEEK_CASING_TOOLTIP_SOG
    "gtceu:large_polymerization_chamber": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            INERT_PEEK_CASING_TOOLTIP_SOG
    },
    // NEUTRONATE_ENRICHED_ATOMIC_CASING_TOOLTIP_SOG_NAQREACTOR
    "gtceu:naquadahreactormk2": {
        tooltipOrder: ["controller", "fluidinput", "fluidoutput", "energy", "maintenance", "muffler"],
        values:
            NEUTRONATE_ENRICHED_ATOMIC_CASING_TOOLTIP_SOG_NAQREACTOR
    },
    // CLEAN_STAINLESS_STEEL_CASING_TOOLTIP_MAINTENANCEMUFFLER_SOG
    "gtceu:moonminer": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler"],
        values:
            CLEAN_STAINLESS_STEEL_CASING_TOOLTIP_MAINTENANCEMUFFLER_SOG
    },
    // COMPONENT_TILE_CASING_ASSEMBLY_LINE_TOOLTIP
    "gtceu:component_assembly_line": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler"],
        values:
            COMPONENT_TILE_CASING_ASSEMBLY_LINE_TOOLTIP
    },
    // LARGE_PRECISION_CASING_CIRCUIT_ASSEMBLY_LINE_TOOLTIP
    "gtceu:circuit_assembly_line": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler"],
        values:
            LARGE_PRECISION_CASING_CIRCUIT_ASSEMBLY_LINE_TOOLTIP
    },
    // NEUTRONIUM_CASING_TOOLTIP_SOG
    "gtceu:supercriticalvibrationsifter": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance"],
        values:
            NEUTRONIUM_CASING_TOOLTIP_SOG
    },
    // SEMI_STABLE_CASING_TOOLTIP_SOG_PLASMA_MIXER
    "gtceu:plasma_mixer": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance"],
        values:
            SEMI_STABLE_CASING_TOOLTIP_SOG
    },
    // STEAM_MACHINE_CASING_TOOLTIP_BRONZE_TANK
    "gtceu:bronze_multiblock_tank": {
        tooltipOrder: ["controller", "bronzetankvalve"],
        values:
            STEAM_MACHINE_CASING_TOOLTIP_BRONZE_TANK
    },
    // STEAM_MACHINE_CASING_TOOLTIP_BOILER
    "gtceu:bronze_large_boiler": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "fluidoutput", "maintenance", "muffler"],
        values:
            STEAM_MACHINE_CASING_TOOLTIP_BOILER
    },
    // SOLID_MACHINE_CASING_TOOLTIP_BOILER
    "gtceu:steel_large_boiler": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "fluidoutput", "maintenance", "muffler"],
        values:
            SOLID_MACHINE_CASING_TOOLTIP_BOILER
    },
    // STABLE_TITANIUM_MACHINE_CASING_TOOLTIP_BOILER
    "gtceu:titanium_large_boiler": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "fluidoutput", "maintenance", "muffler"],
        values:
            STABLE_TITANIUM_MACHINE_CASING_TOOLTIP_BOILER
    },
    // ROBUST_TUNGSTENSTEEL_MACHINE_CASING_TOOLTIP_BOILER
    "gtceu:tungstensteel_large_boiler": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "fluidoutput", "maintenance", "muffler"],
        values:
            ROBUST_TUNGSTENSTEEL_MACHINE_CASING_TOOLTIP_BOILER
    },
    // WOOD_WALL_TOOLTIP_WOODEN_TANK
    "gtceu:wooden_multiblock_tank": {
        tooltipOrder: ["controller", "woodentankvalve"],
        values:
            WOOD_WALL_TOOLTIP_WOODEN_TANK
    },
    // SOLID_MACHINE_CASING_TOOLTIP_STEEL_TANK
    "gtceu:steel_multiblock_tank": {
        tooltipOrder: ["controller", "steeltankvalve"],
        values:
            SOLID_MACHINE_CASING_TOOLTIP_STEEL_TANK
    },
    // CRYOGENIC_CASING_TOOLTIP_SOG
    "gtceu:cryogenic_centrifuge": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy"],
        values:
            CRYOGENIC_CASING_TOOLTIP_SOG
    },
    // NEUTRONIUM_CASING_TOOLTIP_SOG_PROCESSOR_PRINTING_FACTORIES
    "gtceu:processor_printing_factory_lv": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "energy"],
        values:
            NEUTRONIUM_CASING_TOOLTIP_SOG_PROCESSOR_PRINTING_FACTORIES
    },
    "gtceu:processor_printing_factory_mv": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "energy"],
        values:
            NEUTRONIUM_CASING_TOOLTIP_SOG_PROCESSOR_PRINTING_FACTORIES
    },
    "gtceu:processor_printing_factory_hv": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "energy"],
        values:
            NEUTRONIUM_CASING_TOOLTIP_SOG_PROCESSOR_PRINTING_FACTORIES
    },
    "gtceu:processor_printing_factory_ev": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "energy"],
        values:
            NEUTRONIUM_CASING_TOOLTIP_SOG_PROCESSOR_PRINTING_FACTORIES
    },
    "gtceu:processor_printing_factory_iv": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "energy"],
        values:
            NEUTRONIUM_CASING_TOOLTIP_SOG_PROCESSOR_PRINTING_FACTORIES
    },
    "gtceu:processor_printing_factory_luv": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "energy"],
        values:
            NEUTRONIUM_CASING_TOOLTIP_SOG_PROCESSOR_PRINTING_FACTORIES
    },
    "gtceu:processor_printing_factory_zpm": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "energy"],
        values:
            NEUTRONIUM_CASING_TOOLTIP_SOG_PROCESSOR_PRINTING_FACTORIES
    },
    "gtceu:processor_printing_factory_uv": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "energy"],
        values:
            NEUTRONIUM_CASING_TOOLTIP_SOG_PROCESSOR_PRINTING_FACTORIES
    },
    "gtceu:processor_printing_factory_uhv": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "energy"],
        values:
            NEUTRONIUM_CASING_TOOLTIP_SOG_PROCESSOR_PRINTING_FACTORIES
    }
};

function addTooltipsFromGroups(text, itemId, tooltipGroups, startIndex) {
    for (var groupName in tooltipGroups) {
        var group = tooltipGroups[groupName];
        if (group.multiblockIds.includes(itemId)) {
            group.tooltipKeys.forEach(key => {
                text.add(startIndex++, Text.translatable(key));
            });
            return startIndex;
        }
    }
    return startIndex;
}

ItemEvents.tooltip(event => {
    const allMultiblockIds = new Set();
    for (const groupName in NON_SHIFT_TOOLTIP_GROUPS) {
        NON_SHIFT_TOOLTIP_GROUPS[groupName].multiblockIds.forEach(id => allMultiblockIds.add(id));
    }
    for (const itemId in MULTIBLOCK_DESCRIPTION_TOOLTIPS) {
        allMultiblockIds.add(itemId);
    }
    for (const itemId in MACHINE_TYPE_NAMES) {
        allMultiblockIds.add(itemId);
    }
    for (const itemId in SHIFT_PLACEHOLDER_VALUES) {
        allMultiblockIds.add(itemId);
    }

    allMultiblockIds.forEach(multiblockId => {
        event.addAdvanced(multiblockId, (item, adv, text) => {
            let startIndex = 1; 
            
            let multiblockInfo; 

            if (!event.shift) {
                if (MACHINE_TYPE_NAMES[item.id]) {
                    text.add(startIndex++, Text.translatable('multiblock.tooltip.machinetype', Text.of(MACHINE_TYPE_NAMES[item.id])));
                }
                if (MULTIBLOCK_DESCRIPTION_TOOLTIPS[item.id]) {
                    MULTIBLOCK_DESCRIPTION_TOOLTIPS[item.id].forEach(tooltipKey => {
                        text.add(startIndex++, Text.translatable(tooltipKey));
                    });
                }                
                startIndex = addTooltipsFromGroups(text, item.id, NON_SHIFT_TOOLTIP_GROUPS, startIndex);

                text.add(startIndex++, Text.translatable('multiblock.yellowline'));
                text.add(startIndex++, Text.translatable('multiblock.underyellowline'));
            } else { 
                multiblockInfo = SHIFT_PLACEHOLDER_VALUES[item.id]; 

                text.add(startIndex++, Text.translatable('multiblock.structureadvtooltip'));

                if (multiblockInfo && multiblockInfo.tooltipOrder && multiblockInfo.values) {
                    multiblockInfo.tooltipOrder.forEach(keySuffix => {
                        const tooltipKey = `multiblock.tooltip.${keySuffix}`;
                        const value = multiblockInfo.values[keySuffix]; 

                        if (value !== undefined) {
                            text.add(startIndex++, Text.translatable(tooltipKey, Text.of(value)));
                        }
                    });
                } else {
                    console.log(`Debug: No Shift-Informations (tooltipOrder or values) for Item-ID: ${item.id}`);
                }
            }
        });
    });
});

