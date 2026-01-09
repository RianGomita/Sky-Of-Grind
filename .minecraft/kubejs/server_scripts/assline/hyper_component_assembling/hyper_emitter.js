ServerEvents.recipes(event => {
    // Amount of Components per Recipes
    var component_quantities = [16, 64, 256];
    // Discounts for the Recipes
    var component_discounts  = [0.85, 0.5, 0.35];
    // Circuit needed for the Recipe
    var component_circuits   = [16, 17, 18];
    // Duration increase
    var durationMultipliers  = [1, 2, 4];

    // Base Recipes - JUST 1x Electric Motor for example, Script will automatically do the recipes
    var baseRecipes = [
        // Robot Arms
        {
            recipeIdPrefix: 'lv_emitter',
            outputItem: 'gtceu:lv_emitter',
            items: [
                ['gtceu:tin_single_cable', 2],
                ['#gtceu:circuits/lv', 2],
                ['gtceu:quartzite_gem', 1]
            ],
            fluids: [
                ['gtceu:brass', 288]
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'mv_emitter',
            outputItem: 'gtceu:mv_emitter',
            items: [
                ['gtceu:copper_single_cable', 2],
                ['#gtceu:circuits/mv', 2],
                ['gtceu:flawless_emerald_gem', 1]
            ],
            fluids: [
                ['gtceu:electrum', 288]
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'hv_emitter',
            outputItem: 'gtceu:hv_emitter',
            items: [
                ['gtceu:gold_single_cable', 2],
                ['#gtceu:circuits/hv', 2],
                ['minecraft:ender_eye', 1]
            ],
            fluids: [
                ['gtceu:chromium', 288]
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'ev_emitter',
            outputItem: 'gtceu:ev_emitter',
            items: [
                ['gtceu:aluminium_single_cable', 2],
                ['#gtceu:circuits/ev', 2],
                ['gtceu:quantum_eye', 1]
            ],
            fluids: [
                ['gtceu:platinum', 288]
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'iv_emitter',
            outputItem: 'gtceu:iv_emitter',
            items: [
                ['gtceu:tungsten_single_cable', 2],
                ['#gtceu:circuits/iv', 2],
                ['gtceu:quantum_star', 1]
            ],
            fluids: [
                ['gtceu:iridium', 288]
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.UIV]
        },
        {
            recipeIdPrefix: 'luv_emitter',
            outputItem: 'gtceu:luv_emitter',
            items: [
                ['gtceu:luv_electric_motor', 1],
                ['gtceu:quantum_star', 1],
                ['#gtceu:circuits/luv', 2],
                ['gtceu:niobium_titanium_single_cable', 4]
            ],
            fluids: [
                ['gtceu:hsss', 288],
                ['gtceu:ruridit', 576],
                ['gtceu:palladium', 3456],
                ['gtceu:soldering_alloy', 288]
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.UIV]
        },
        {
            recipeIdPrefix: 'zpm_emitter',
            outputItem: 'gtceu:zpm_emitter',
            items: [
                ['gtceu:zpm_electric_motor', 1],
                ['gtceu:quantum_star', 2],
                ['#gtceu:circuits/zpm', 2],
                ['gtceu:vanadium_gallium_single_cable', 4]
            ],
            fluids: [
                ['gtceu:naquadah_alloy', 288],
                ['gtceu:osmiridium', 576],
                ['gtceu:trinium', 3456],
                ['gtceu:soldering_alloy', 576]
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.UIV]
        },
        {
            recipeIdPrefix: 'uv_emitter',
            outputItem: 'gtceu:uv_emitter',
            items: [
                ['gtceu:uv_electric_motor', 1],
                ['gtceu:gravi_star', 1],
                ['#gtceu:circuits/uv', 2],
                ['gtceu:yttrium_barium_cuprate_single_cable', 4]
            ],
            fluids: [
                ['gtceu:tritanium', 864],
                ['gtceu:naquadria', 4032],
                ['gtceu:soldering_alloy', 1152]            
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.UIV]
        },
        {
            recipeIdPrefix: 'uhv_emitter',
            outputItem: 'gtceu:uhv_emitter',
            items: [
                ['gtceu:uhv_electric_motor', 1],
                ['gtceu:gravi_star', 1],
                ['#gtceu:circuits/uhv', 2],
                ['gtceu:double_cosmic_neutronium_plate', 12],
                ['gtceu:crystal_matrix_single_wire', 4],
                ['avaritia:eternal_singularity', 1]
            ],
            fluids: [
                ['gtceu:resonant_essence', 288],
                ['gtceu:neutronium', 576],
                ['gtceu:soldering_alloy', 576],
                ['gtceu:lubricant', 1000],
                ['gtceu:naquadria', 576]
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.UIV]
        },
        {
            recipeIdPrefix: 'uev_emitter',
            outputItem: 'gtceu:uev_emitter',
            items: [
                ['gtceu:uev_electric_motor', 1],
                ['gtceu:gravi_star', 1],
                ['#gtceu:circuits/uev', 2],
                ['avaritia:eternal_singularity', 1],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:awakened_draconium', 4320],
                ['gtceu:draconium', 864],
                ['gtceu:soldering_alloy', 576],
                ['gtceu:lubricant', 1000]
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.UIV]
        },
        {
            recipeIdPrefix: 'uiv_emitter',
            outputItem: 'gtceu:uiv_emitter',
            items: [
                ['gtceu:uiv_electric_motor', 1],
                ['draconicevolution:chaos_shard', 4],
                ['#gtceu:circuits/uiv', 2],
                ['avaritia:eternal_singularity', 1],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:awakened_draconium', 4608],
                ['gtceu:stropharic_hypoxylon', 576],
                ['gtceu:antimatter', 576],
                ['gtceu:draconium', 576]
            ],
            duration: 40000,
            EUt: GTValues.VA[GTValues.UXV]
        },
        {
            recipeIdPrefix: 'uxv_emitter',
            outputItem: 'gtceu:uxv_emitter',
            items: [
                ['gtceu:uxv_electric_motor', 1],
                ['draconicevolution:chaos_shard', 4],
                ['#gtceu:circuits/uxv', 2],
                ['gtceu:chaos_single_wire', 4],
                ['avaritia:eternal_singularity', 1],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:cosmic_matter', 8640],
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