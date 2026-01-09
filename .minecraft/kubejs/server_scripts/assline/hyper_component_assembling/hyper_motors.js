ServerEvents.recipes(event => {
    // Amount of Components per Recipes
    var component_quantities = [16, 64, 256];
    // Discounts for the Recipes
    var component_discounts  = [0.85, 0.5, 0.35];
    // Circuit needed for the Recipe
    var component_circuits   = [1, 2, 3];
    // Duration increase
    var durationMultipliers  = [1, 2, 4];

    // Base Recipes - JUST 1x Electric Motor for example, Script will automatically do the recipes
    var baseRecipes = [
        // Motors
        {
            recipeIdPrefix: 'lv_electric_motor',
            outputItem: 'gtceu:lv_electric_motor',
            items: [
                ['gtceu:iron_rod', 3]
            ],
            fluids: [
                ['gtceu:rubber', 288],
                ['gtceu:tin', 144],
                ['gtceu:copper', 576]
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'mv_electric_motor',
            outputItem: 'gtceu:mv_electric_motor',
            items: [
                ['gtceu:aluminium_rod', 2],
                ['gtceu:cupronickel_double_wire', 4]
            ],
            fluids: [
                ['gtceu:rubber', 288],
                ['gtceu:copper', 144],
                ['gtceu:steel', 72]
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'hv_electric_motor',
            outputItem: 'gtceu:hv_electric_motor',
            items: [
                ['gtceu:stainless_steel_rod', 2],
                ['gtceu:electrum_double_wire', 4]
            ],
            fluids: [
                ['gtceu:rubber', 288],
                ['gtceu:silver', 288],
                ['gtceu:steel', 72]
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'ev_electric_motor',
            outputItem: 'gtceu:ev_electric_motor',
            items: [
                ['gtceu:titanium_rod', 2],
                ['gtceu:kanthal_double_wire', 4]
            ],
            fluids: [
                ['gtceu:rubber', 288],
                ['gtceu:polyvinyl_chloride', 72],
                ['gtceu:aluminium', 288],
                ['gtceu:neodymium', 72]
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'iv_electric_motor',
            outputItem: 'gtceu:iv_electric_motor',
            items: [
                ['gtceu:tungsten_steel_rod', 2],
                ['gtceu:graphene_double_wire', 4]
            ],
            fluids: [
                ['gtceu:styrene_butadiene_rubber', 72],
                ['gtceu:polyvinyl_chloride', 72],
                ['gtceu:tungsten', 288],
                ['gtceu:neodymium', 72]
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.UIV]
        },
        {
            recipeIdPrefix: 'luv_electric_motor',
            outputItem: 'gtceu:luv_electric_motor',
            items: [
                ['gtceu:long_magnetic_samarium_rod', 1]
            ],
            fluids: [
                ['gtceu:styrene_butadiene_rubber', 72],
                ['gtceu:polyvinyl_chloride', 72],
                ['gtceu:polyphenylene_sulfide', 72],
                ['gtceu:niobium_titanium', 144],
                ['gtceu:hsss', 424],
                ['gtceu:ruridit', 1152],
                ['gtceu:soldering_alloy', 144],
                ['gtceu:lubricant', 250]
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.UIV]
        },
        {
            recipeIdPrefix: 'zpm_electric_motor',
            outputItem: 'gtceu:zpm_electric_motor',
            items: [
                ['gtceu:long_magnetic_samarium_rod', 1]
            ],
            fluids: [
                ['gtceu:styrene_butadiene_rubber', 144],
                ['gtceu:polyvinyl_chloride', 72],
                ['gtceu:polyphenylene_sulfide', 72],
                ['gtceu:vanadium_gallium', 144],
                ['gtceu:osmiridium', 848],
                ['gtceu:europium', 1728],
                ['gtceu:soldering_alloy', 288],
                ['gtceu:lubricant', 500]
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.UIV]
        },
        {
            recipeIdPrefix: 'uv_electric_motor',
            outputItem: 'gtceu:uv_electric_motor',
            items: [
                ['gtceu:long_magnetic_samarium_rod', 1]
            ],
            fluids: [
                ['gtceu:neoprene', 72],
                ['gtceu:polyvinyl_chloride', 72],
                ['gtceu:polyphenylene_sulfide', 72],
                ['gtceu:yttrium_barium_cuprate', 144],
                ['gtceu:tritanium', 848],
                ['gtceu:soldering_alloy', 576],
                ['gtceu:lubricant', 1000],
                ['gtceu:naquadria', 576]
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.UIV]
        },
        {
            recipeIdPrefix: 'uhv_electric_motor',
            outputItem: 'gtceu:uhv_electric_motor',
            items: [
                ['gtceu:long_magnetic_samarium_rod', 1],
                ['gtceu:europium_single_cable', 2],
                ['avaritia:eternal_singularity', 1]
            ],
            fluids: [
                ['gtceu:neutronium', 1800],
                ['gtceu:crystal_matrix', 2304],
                ['gtceu:soldering_alloy', 576],
                ['gtceu:lubricant', 1000],
                ['gtceu:naquadria', 576]
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.UIV]
        },
        {
            recipeIdPrefix: 'uev_electric_motor',
            outputItem: 'gtceu:uev_electric_motor',
            items: [
                ['gtceu:long_magnetic_samarium_rod', 1],
                ['gtceu:double_cosmic_neutronium_plate', 6],
                ['gtceu:draconium_single_cable', 2],
                ['avaritia:eternal_singularity', 1],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:cosmic_iridium', 72],
                ['gtceu:draconium', 2880],
                ['gtceu:soldering_alloy', 576],
                ['gtceu:lubricant', 1000]
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.UIV]
        },
        {
            recipeIdPrefix: 'uiv_electric_motor',
            outputItem: 'gtceu:uiv_electric_motor',
            items: [
                ['gtceu:long_magnetic_stabilized_iridium_rod', 1],
                ['gtceu:awakened_draconium_single_cable', 2],
                ['avaritia:eternal_singularity', 1],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:awakened_draconium', 4104],
                ['gtceu:stropharic_hypoxylon', 576],
                ['gtceu:antimatter', 576],
                ['gtceu:draconium', 576]
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.UXV]
        },
        {
            recipeIdPrefix: 'uxv_electric_motor',
            outputItem: 'gtceu:uxv_electric_motor',
            items: [
                ['gtceu:long_magnetic_stabilized_iridium_rod', 1],
                ['gtceu:chaos_single_wire', 2],
                ['avaritia:eternal_singularity', 1],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:cosmic_matter', 8208],
                ['gtceu:eternity', 576],
                ['gtceu:universium', 576],
                ['gtceu:stellar_matter_plasma', 576]
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.OpV]
        }
    ];

    // Recipe Builder
    for (var r = 0; r < baseRecipes.length; r++) {
        for (var i = 0; i < component_quantities.length; i++) {

            let qty      = component_quantities[i];
            let discount = component_discounts[i];

            let scaledItems = baseRecipes[r].items.map(e =>
                Math.ceil(e[1] * qty * discount) + "x " + e[0]
            );

            let scaledFluids = baseRecipes[r].fluids.map(f =>
                Fluid.of(f[0], Math.ceil(f[1] * qty * discount))
            );

            event.recipes.gtceu.hyper_component_assembling(
                baseRecipes[r].recipeIdPrefix + "_" + qty
            )
            .circuit(component_circuits[i])
            .itemInputs(scaledItems)
            .inputFluids(scaledFluids)
            .itemOutputs(qty + "x " + baseRecipes[r].outputItem)
            .duration(baseRecipes[r].duration * durationMultipliers[i])
            .EUt(baseRecipes[r].EUt);
        }
    }
});