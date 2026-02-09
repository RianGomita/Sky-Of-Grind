ServerEvents.recipes(event => {
    // Amount of Components per Recipes
    var component_quantities = [16, 64, 256];
    // Discounts for the Recipes
    var component_discounts  = [0.85, 0.5, 0.35];
    // Circuit needed for the Recipe
    var component_circuits   = [13, 14, 15];
    // Duration increase
    var durationMultipliers  = [1, 2, 4];

    // Base Recipes - JUST 1x Electric Motor for example, Script will automatically do the recipes
    var baseRecipes = [
        // Robot Arms
        {
            recipeIdPrefix: 'lv_robot_arm',
            outputItem: 'gtceu:lv_robot_arm',
            items: [
                ['gtceu:lv_electric_motor', 2],
                ['gtceu:lv_electric_piston', 1],
                ['gtceu:tin_single_cable', 3],
                ['#gtceu:circuits/lv', 1]
            ],
            fluids: [
                ['gtceu:steel', 144]
            ],
            duration: 2000,
            EUt: GTValues.VA[GTValues.UV]
        },
        {
            recipeIdPrefix: 'mv_robot_arm',
            outputItem: 'gtceu:mv_robot_arm',
            items: [
                ['gtceu:mv_electric_motor', 2],
                ['gtceu:mv_electric_piston', 1],
                ['gtceu:copper_single_cable', 3],
                ['#gtceu:circuits/mv', 1]
            ],
            fluids: [
                ['gtceu:aluminium', 144]
            ],
            duration: 2000,
            EUt: GTValues.VA[GTValues.UV]
        },
        {
            recipeIdPrefix: 'hv_robot_arm',
            outputItem: 'gtceu:hv_robot_arm',
            items: [
                ['gtceu:hv_electric_motor', 2],
                ['gtceu:hv_electric_piston', 1],
                ['gtceu:gold_single_cable', 3],
                ['#gtceu:circuits/hv', 1]
            ],
            fluids: [
                ['gtceu:stainless_steel', 144]
            ],
            duration: 2250,
            EUt: GTValues.VA[GTValues.UV]
        },
        {
            recipeIdPrefix: 'ev_robot_arm',
            outputItem: 'gtceu:ev_robot_arm',
            items: [
                ['gtceu:ev_electric_motor', 2],
                ['gtceu:ev_electric_piston', 1],
                ['gtceu:aluminium_single_cable', 3],
                ['#gtceu:circuits/ev', 1]
            ],
            fluids: [
                ['gtceu:titanium', 144]
            ],
            duration: 2500,
            EUt: GTValues.VA[GTValues.UHV]
        },
        {
            recipeIdPrefix: 'iv_robot_arm',
            outputItem: 'gtceu:iv_robot_arm',
            items: [
                ['gtceu:iv_electric_motor', 2],
                ['gtceu:iv_electric_piston', 1],
                ['gtceu:tungsten_single_cable', 3],
                ['#gtceu:circuits/iv', 1]
            ],
            fluids: [
                ['gtceu:tungsten_steel', 144]
            ],
            duration: 2750,
            EUt: GTValues.VA[GTValues.UHV]
        },
        {
            recipeIdPrefix: 'luv_robot_arm',
            outputItem: 'gtceu:luv_robot_arm',
            items: [
                ['gtceu:luv_electric_motor', 2],
                ['gtceu:luv_electric_piston', 1],
                ['gtceu:niobium_titanium_single_cable', 4],
                ['#gtceu:circuits/ev', 4],
                ['#gtceu:circuits/iv', 2],
                ['#gtceu:circuits/luv', 1]
            ],
            fluids: [
                ['gtceu:hsss', 1584],
                ['gtceu:soldering_alloy', 576],
                ['gtceu:lubricant', 250]
            ],
            duration: 3000,
            EUt: GTValues.VA[GTValues.UHV]
        },
        {
            recipeIdPrefix: 'zpm_robot_arm',
            outputItem: 'gtceu:zpm_robot_arm',
            items: [
                ['gtceu:zpm_electric_motor', 2],
                ['gtceu:zpm_electric_piston', 1],
                ['gtceu:vanadium_gallium_single_cable', 4],
                ['#gtceu:circuits/iv', 4],
                ['#gtceu:circuits/luv', 2],
                ['#gtceu:circuits/zpm', 1]
            ],
            fluids: [
                ['gtceu:osmiridium', 1584],
                ['gtceu:soldering_alloy', 1152],
                ['gtceu:lubricant', 500]
            ],
            duration: 3250,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'uv_robot_arm',
            outputItem: 'gtceu:uv_robot_arm',
            items: [
                ['gtceu:uv_electric_motor', 2],
                ['gtceu:uv_electric_piston', 1],
                ['gtceu:yttrium_barium_cuprate_single_cable', 4],
                ['#gtceu:circuits/luv', 4],
                ['#gtceu:circuits/zpm', 2],
                ['#gtceu:circuits/uv', 1]
            ],
            fluids: [
                ['gtceu:tritanium', 1584],
                ['gtceu:soldering_alloy', 1728],
                ['gtceu:lubricant', 1000],
                ['gtceu:naquadria', 576]
            ],
            duration: 3500,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'uhv_robot_arm',
            outputItem: 'gtceu:uhv_robot_arm',
            items: [
                ['gtceu:uhv_electric_motor', 2],
                ['gtceu:uhv_electric_piston', 1],
                ['#gtceu:circuits/zpm', 4],
                ['#gtceu:circuits/uv', 2],
                ['#gtceu:circuits/uhv', 1],
                ['avaritia:eternal_singularity', 1]
            ],
            fluids: [
                ['gtceu:neutronium', 3456],
                ['gtceu:crystal_matrix', 1152],
                ['gtceu:soldering_alloy', 576],
                ['gtceu:lubricant', 1000],
                ['gtceu:naquadria', 576]
            ],
            duration: 3750,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'uev_robot_arm',
            outputItem: 'gtceu:uev_robot_arm',
            items: [
                ['gtceu:uev_electric_motor', 2],
                ['gtceu:uev_electric_piston', 1],
                ['gtceu:cosmic_neutronium_plate', 7],
                ['#gtceu:circuits/uv', 4],
                ['#gtceu:circuits/uhv', 2],
                ['#gtceu:circuits/uev', 1],
                ['avaritia:eternal_singularity', 1],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:cosmic_osmium', 1152],
                ['gtceu:draconium', 1728],
                ['gtceu:soldering_alloy', 576],
                ['gtceu:lubricant', 1000]
            ],
            duration: 4000,
            EUt: GTValues.VA[GTValues.UIV]
        },
        {
            recipeIdPrefix: 'uiv_robot_arm',
            outputItem: 'gtceu:uiv_robot_arm',
            items: [
                ['gtceu:uiv_electric_motor', 2],
                ['gtceu:uiv_electric_piston', 1],
                ['#gtceu:circuits/uhv', 4],
                ['#gtceu:circuits/uev', 2],
                ['#gtceu:circuits/uiv', 1],
                ['avaritia:eternal_singularity', 1],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:stabilized_iridium', 1152],
                ['gtceu:awakened_draconium', 2160],
                ['gtceu:stropharic_hypoxylon', 576],
                ['gtceu:antimatter', 576],
                ['gtceu:draconium', 576]
            ],
            duration: 4000,
            EUt: GTValues.VA[GTValues.UXV]
        },
        {
            recipeIdPrefix: 'uxv_robot_arm',
            outputItem: 'gtceu:uxv_robot_arm',
            items: [
                ['gtceu:uxv_electric_motor', 2],
                ['gtceu:uxv_electric_piston', 1],
                ['#gtceu:circuits/uev', 4],
                ['#gtceu:circuits/uiv', 2],
                ['#gtceu:circuits/uxv', 1],
                ['avaritia:eternal_singularity', 1],
                ['kubejs:quantum_data_module', 1],
                ['gtceu:pure_cosmic_matter_plate', 30]
            ],
            fluids: [
                ['gtceu:stabilized_iridium', 1152],
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
