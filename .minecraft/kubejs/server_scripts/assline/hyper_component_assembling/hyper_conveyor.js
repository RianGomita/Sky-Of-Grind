ServerEvents.recipes(event => {
    // Amount of Components per Recipes
    var component_quantities = [16, 64, 256];
    // Discounts for the Recipes
    var component_discounts  = [0.85, 0.5, 0.35];
    // Circuit needed for the Recipe
    var component_circuits   = [10, 11, 12];
    // Duration increase
    var durationMultipliers  = [1, 2, 4];

    // Base Recipes - JUST 1x Electric Motor for example, Script will automatically do the recipes
    var baseRecipes = [
        // Conveyor Modules
        {
            recipeIdPrefix: 'lv_conveyor_module',
            outputItem: 'gtceu:lv_conveyor_module',
            items: [
                ['gtceu:lv_electric_motor', 2],
                ['gtceu:tin_single_cable', 1]
            ],
            fluids: [
                ['gtceu:rubber', 864]
            ],
            duration: 2000,
            EUt: GTValues.VA[GTValues.UV]
        },
        {
            recipeIdPrefix: 'mv_conveyor_module',
            outputItem: 'gtceu:mv_conveyor_module',
            items: [
                ['gtceu:mv_electric_motor', 2],
                ['gtceu:copper_single_cable', 1]
            ],
            fluids: [
                ['gtceu:rubber', 864]
            ],
            duration: 2000,
            EUt: GTValues.VA[GTValues.UV]
        },
        {
            recipeIdPrefix: 'hv_conveyor_module',
            outputItem: 'gtceu:hv_conveyor_module',
            items: [
                ['gtceu:hv_electric_motor', 2],
                ['gtceu:gold_single_cable', 1]
            ],
            fluids: [
                ['gtceu:rubber', 864]
            ],
            duration: 2250,
            EUt: GTValues.VA[GTValues.UV]
        },
        {
            recipeIdPrefix: 'ev_conveyor_module',
            outputItem: 'gtceu:ev_conveyor_module',
            items: [
                ['gtceu:ev_electric_motor', 2],
                ['gtceu:aluminium_single_cable', 1]
            ],
            fluids: [
                ['gtceu:rubber', 864]
            ],
            duration: 2500,
            EUt: GTValues.VA[GTValues.UHV]
        },
        {
            recipeIdPrefix: 'iv_conveyor_module',
            outputItem: 'gtceu:iv_conveyor_module',
            items: [
                ['gtceu:iv_electric_motor', 2],
                ['gtceu:tungsten_single_cable', 1]
            ],
            fluids: [
                ['gtceu:styrene_butadiene_rubber', 864]
            ],
            duration: 2750,
            EUt: GTValues.VA[GTValues.UHV]
        },
        {
            recipeIdPrefix: 'luv_conveyor_module',
            outputItem: 'gtceu:luv_conveyor_module',
            items: [
                ['gtceu:luv_electric_motor', 2],
                ['gtceu:niobium_titanium_single_cable', 2]
            ],
            fluids: [
                ['gtceu:hsss', 760],
                ['gtceu:soldering_alloy', 144],
                ['gtceu:lubricant', 250],
                ['gtceu:styrene_butadiene_rubber', 1152]
            ],
            duration: 3000,
            EUt: GTValues.VA[GTValues.UHV]
        },
        {
            recipeIdPrefix: 'zpm_conveyor_module',
            outputItem: 'gtceu:zpm_conveyor_module',
            items: [
                ['gtceu:zpm_electric_motor', 2],
                ['gtceu:vanadium_gallium_single_cable', 2]
            ],
            fluids: [
                ['gtceu:osmiridium', 760],
                ['gtceu:soldering_alloy', 288],
                ['gtceu:lubricant', 500],
                ['gtceu:styrene_butadiene_rubber', 2304]
            ],
            duration: 3250,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'uv_conveyor_module',
            outputItem: 'gtceu:uv_conveyor_module',
            items: [
                ['gtceu:uv_electric_motor', 2],
                ['gtceu:yttrium_barium_cuprate_single_cable', 2]
            ],
            fluids: [
                ['gtceu:tritanium', 760],
                ['gtceu:soldering_alloy', 576],
                ['gtceu:lubricant', 1000],
                ['gtceu:styrene_butadiene_rubber', 3456],
                ['gtceu:naquadria', 576]
            ],
            duration: 3500,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'uhv_conveyor_module',
            outputItem: 'gtceu:uhv_conveyor_module',
            items: [
                ['gtceu:uhv_electric_motor', 1],
                ['gtceu:europium_single_cable', 2],
                ['avaritia:eternal_singularity', 1]
            ],
            fluids: [
                ['gtceu:neutronium', 1872],
                ['gtceu:soldering_alloy', 576],
                ['gtceu:lubricant', 1000],
                ['gtceu:neoprene', 3456],
                ['gtceu:naquadria', 576]
            ],
            duration: 3750,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'uev_conveyor_module',
            outputItem: 'gtceu:uev_conveyor_module',
            items: [
                ['gtceu:uev_electric_motor', 1],
                ['gtceu:double_cosmic_neutronium_plate', 6],
                ['gtceu:draconium_single_cable', 2],
                ['avaritia:eternal_singularity', 1],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:draconium', 720],
                ['gtceu:soldering_alloy', 576],
                ['gtceu:lubricant', 1000],
                ['gtceu:neoprene', 3456]
            ],
            duration: 4000,
            EUt: GTValues.VA[GTValues.UIV]
        },
        {
            recipeIdPrefix: 'uiv_conveyor_module',
            outputItem: 'gtceu:uiv_conveyor_module',
            items: [
                ['gtceu:uiv_electric_motor', 1],
                ['gtceu:awakened_draconium_single_cable', 2],
                ['avaritia:eternal_singularity', 1],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:awakened_draconium', 1872],
                ['gtceu:stropharic_hypoxylon', 720],
                ['gtceu:antimatter', 576],
                ['gtceu:draconium', 576],
                ['gtceu:neoprene', 3456]
            ],
            duration: 4000,
            EUt: GTValues.VA[GTValues.UXV]
        },
        {
            recipeIdPrefix: 'uxv_conveyor_module',
            outputItem: 'gtceu:uxv_conveyor_module',
            items: [
                ['gtceu:uxv_electric_motor', 1],
                ['gtceu:chaos_single_wire', 2],
                ['avaritia:eternal_singularity', 1],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:cosmic_matter', 3744],
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
