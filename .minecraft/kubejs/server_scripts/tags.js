ServerEvents.tags('item', event => {
    // Remove Tags
    //event.removeAllTagsFrom("ad_astra:steel_plate")

    
    // Add Tags
    event.add("forge:ingots", "avaritia:neutron_ingot")
    event.add("forge:ingots/cosmic_neutronium", "avaritia:neutron_ingot")
    event.add("forge:gears", "avaritia:neutron_gear")
    event.add("forge:gears/cosmic_neutronium", "avaritia:neutron_gear")
    event.add("forge:storage_blocks", "avaritia:neutron")
    event.add("forge:storage_blocks/cosmic_neutronium", "avaritia:neutron")
    event.add("forge:ingots", "avaritia:infinity_ingot")
    event.add("forge:ingots/infinity", "avaritia:infinity_ingot")
    event.add("forge:nuggets", "avaritia:infinity_nugget")
    event.add("forge:nuggets/infinity", "avaritia:infinity_nugget")


  const advAEArmor = [
        "advanced_ae:quantum_helmet",
        "advanced_ae:quantum_chestplate",
        "advanced_ae:quantum_leggings",
        "advanced_ae:quantum_boots"
    ]
    event.add("ad_astra:space_resistant_armor", advAEArmor)
    event.add("ad_astra:freeze_resistant_armor", advAEArmor)
    event.add("ad_astra:heat_resistant_armor", advAEArmor)

        const quarkTechArmor = [
        "gtceu:quarktech_helmet",
        "gtceu:quarktech_chestplate",
        "gtceu:advanced_quarktech_chestplate",
        "gtceu:quarktech_leggings",
        "gtceu:quarktech_boots"
    ]
    event.add("ad_astra:space_resistant_armor", quarkTechArmor)
    event.add("ad_astra:freeze_resistant_armor", quarkTechArmor)
    event.add("ad_astra:heat_resistant_armor", quarkTechArmor)

})