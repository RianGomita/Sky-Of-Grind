ServerEvents.recipes(event => {
    // Amount of Components per Recipes
    var component_quantities = [16, 64, 256];
    // Discounts for the Recipes
    var component_discounts  = [0.85, 0.5, 0.35];
    // Circuit needed for the Recipe
    var component_circuits   = [7, 8, 9];
    // Duration increase
    var durationMultipliers  = [1, 2, 4];

    // Base Recipes - JUST 1x Electric Motor for example, Script will automatically do the recipes
    var baseRecipes = [
        // Pumps
        {
            recipeIdPrefix: 'lv_electric_pump',
            outputItem: 'gtceu:lv_electric_pump',
            items: [
                ['gtceu:lv_electric_motor', 1],
                ['gtceu:tin_single_cable', 1]
            ],
            fluids: [
                ['gtceu:rubber', 72],
                ['gtceu:bronze', 432],
                ['gtceu:tin', 594]
            ],
            duration: 2000,
            EUt: GTValues.VA[GTValues.UV]
        },
        {
            recipeIdPrefix: 'mv_electric_pump',
            outputItem: 'gtceu:mv_electric_pump',
            items: [
                ['gtceu:mv_electric_motor', 1],
                ['gtceu:copper_single_cable', 1]
            ],
            fluids: [
                ['gtceu:rubber', 72],
                ['gtceu:steel', 432],
                ['gtceu:bronze', 594]
            ],
            duration: 2000,
            EUt: GTValues.VA[GTValues.UV]
        },
        {
            recipeIdPrefix: 'hv_electric_pump',
            outputItem: 'gtceu:hv_electric_pump',
            items: [
                ['gtceu:hv_electric_motor', 1],
                ['gtceu:gold_single_cable', 1]
            ],
            fluids: [
                ['gtceu:rubber', 72],
                ['gtceu:stainless_steel', 432],
                ['gtceu:steel', 594]
            ],
            duration: 2250,
            EUt: GTValues.VA[GTValues.UV]
        },
        {
            recipeIdPrefix: 'ev_electric_pump',
            outputItem: 'gtceu:ev_electric_pump',
            items: [
                ['gtceu:ev_electric_motor', 1],
                ['gtceu:aluminium_single_cable', 1]
            ],
            fluids: [
                ['gtceu:rubber', 72],
                ['gtceu:titanium', 432],
                ['gtceu:stainless_steel', 594]
            ],
            duration: 2500,
            EUt: GTValues.VA[GTValues.UHV]
        },
        {
            recipeIdPrefix: 'iv_electric_pump',
            outputItem: 'gtceu:iv_electric_pump',
            items: [
                ['gtceu:iv_electric_motor', 1],
                ['gtceu:tungsten_single_cable', 1]
            ],
            fluids: [
                ['gtceu:styrene_butadiene_rubber', 72],
                ['gtceu:tungsten_steel', 1026]
            ],
            duration: 2750,
            EUt: GTValues.VA[GTValues.UHV]
        },
        {
            recipeIdPrefix: 'luv_electric_pump',
            outputItem: 'gtceu:luv_electric_pump',
            items: [
                ['gtceu:luv_electric_motor', 1],
                ['gtceu:niobium_titanium_single_cable', 2]
            ],
            fluids: [
                ['gtceu:niobium_titanium', 144],
                ['gtceu:hsss', 1008],
                ['gtceu:silicone_rubber', 144],
                ['gtceu:soldering_alloy', 144],
                ['gtceu:lubricant', 250]
            ],
            duration: 3000,
            EUt: GTValues.VA[GTValues.UHV]
        },
        {
            recipeIdPrefix: 'zpm_electric_pump',
            outputItem: 'gtceu:zpm_electric_pump',
            items: [
                ['gtceu:zpm_electric_motor', 1],
                ['gtceu:vanadium_gallium_single_cable', 2]
            ],
            fluids: [
                ['gtceu:polybenzimidazole', 432],
                ['gtceu:osmiridium', 1008],
                ['gtceu:silicone_rubber', 288],
                ['gtceu:soldering_alloy', 288],
                ['gtceu:lubricant', 500]
            ],
            duration: 3250,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'uv_electric_pump',
            outputItem: 'gtceu:uv_electric_pump',
            items: [
                ['gtceu:uv_electric_motor', 1],
                ['gtceu:yttrium_barium_cuprate_single_cable', 2]
            ],
            fluids: [
                ['gtceu:naquadah', 864],
                ['gtceu:tritanium', 432],
                ['gtceu:neoprene', 576],
                ['gtceu:naquadah_alloy', 576],
                ['gtceu:soldering_alloy', 576],
                ['gtceu:lubricant', 1000],
                ['gtceu:naquadria', 576]
            ],
            duration: 3500,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'uhv_electric_pump',
            outputItem: 'gtceu:uhv_electric_pump',
            items: [
                ['gtceu:uhv_electric_motor', 1],
                ['gtceu:europium_single_cable', 2],
                ['avaritia:eternal_singularity', 1]
            ],
            fluids: [
                ['gtceu:crystal_matrix', 864],
                ['gtceu:neutronium', 1008],
                ['gtceu:neoprene', 576],
                ['gtceu:soldering_alloy', 576],
                ['gtceu:lubricant', 1000],
                ['gtceu:naquadria', 576]
            ],
            duration: 3750,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'uev_electric_pump',
            outputItem: 'gtceu:uev_electric_pump',
            items: [
                ['gtceu:uev_electric_motor', 1],
                ['gtceu:double_cosmic_neutronium_plate', 3],
                ['gtceu:draconium_single_cable', 2],
                ['avaritia:eternal_singularity', 1],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:crystal_matrix', 1728],
                ['gtceu:draconium', 1296],
                ['gtceu:peek', 576],
                ['gtceu:soldering_alloy', 576],
                ['gtceu:lubricant', 1000]
            ],
            duration: 4000,
            EUt: GTValues.VA[GTValues.UIV]
        },
        {
            recipeIdPrefix: 'uiv_electric_pump',
            outputItem: 'gtceu:uiv_electric_pump',
            items: [
                ['gtceu:uiv_electric_motor', 1],
                ['gtceu:awakened_draconium_single_cable', 2],
                ['avaritia:eternal_singularity', 1],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:crystal_matrix', 1728],
                ['gtceu:awakened_draconium', 1584],
                ['gtceu:peek', 576],
                ['gtceu:stropharic_hypoxylon', 576],
                ['gtceu:antimatter', 576],
                ['gtceu:draconium', 576]
            ],
            duration: 4000,
            EUt: GTValues.VA[GTValues.UXV]
        },
        {
            recipeIdPrefix: 'uxv_electric_pump',
            outputItem: 'gtceu:uxv_electric_pump',
            items: [
                ['gtceu:uxv_electric_motor', 1],
                ['gtceu:chaos_single_wire', 2],
                ['avaritia:eternal_singularity', 1],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:crystal_matrix', 1728],
                ['gtceu:cosmic_matter', 3168],
                ['gtceu:eternity', 576],
                ['gtceu:universium', 576],
                ['gtceu:stellar_matter_plasma', 576]
            ],
            duration: 4000,
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
