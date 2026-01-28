ServerEvents.recipes(event => {
    // Amount of Components per Recipes
    var component_quantities = [16, 64, 256];
    // Discounts for the Recipes
    var component_discounts  = [0.85, 0.5, 0.35];
    // Circuit needed for the Recipe
    var component_circuits   = [22, 23, 24];
    // Duration increase
    var durationMultipliers  = [1, 2, 4];

    // Base Recipes - JUST 1x Electric Motor for example, Script will automatically do the recipes
    var baseRecipes = [
        // Robot Arms
        {
            recipeIdPrefix: 'lv_field_generator',
            outputItem: 'gtceu:lv_field_generator',
            items: [
                ['minecraft:ender_pearl', 1],
                ['#gtceu:circuits/lv', 2]
            ],
            fluids: [
                ['gtceu:steel', 288],
                ['gtceu:manganese_phosphide', 1152]
            ],
            duration: 2000,
            EUt: GTValues.VA[GTValues.UV]
        },
        {
            recipeIdPrefix: 'mv_field_generator',
            outputItem: 'gtceu:mv_field_generator',
            items: [
                ['minecraft:ender_eye', 1],
                ['#gtceu:circuits/mv', 2]
            ],
            fluids: [
                ['gtceu:aluminium', 288],
                ['gtceu:magnesium_diboride', 1152]
            ],
            duration: 2000,
            EUt: GTValues.VA[GTValues.UV]
        },
        {
            recipeIdPrefix: 'hv_field_generator',
            outputItem: 'gtceu:hv_field_generator',
            items: [
                ['gtceu:quantum_eye', 1],
                ['#gtceu:circuits/hv', 2]
            ],
            fluids: [
                ['gtceu:stainless_steel', 288],
                ['gtceu:mercury_barium_calcium_cuprate', 1152]
            ],
            duration: 2250,
            EUt: GTValues.VA[GTValues.UV]
        },
        {
            recipeIdPrefix: 'ev_field_generator',
            outputItem: 'gtceu:ev_field_generator',
            items: [
                ['minecraft:nether_star', 1],
                ['#gtceu:circuits/ev', 2]
            ],
            fluids: [
                ['gtceu:titanium', 576],
                ['gtceu:uranium_triplatinum', 1152]
            ],
            duration: 2500,
            EUt: GTValues.VA[GTValues.UHV]
        },
        {
            recipeIdPrefix: 'iv_field_generator',
            outputItem: 'gtceu:iv_field_generator',
            items: [
                ['gtceu:quantum_star', 1],
                ['#gtceu:circuits/iv', 2]
            ],
            fluids: [
                ['gtceu:tungsten_steel', 576],
                ['gtceu:samarium_iron_arsenic_oxide', 1152]
            ],
            duration: 2750,
            EUt: GTValues.VA[GTValues.UHV]
        },
        {
            recipeIdPrefix: 'luv_field_generator',
            outputItem: 'gtceu:luv_field_generator',
            items: [
                ['gtceu:quantum_star', 1],
                ['gtceu:luv_emitter', 2],
                ['#gtceu:circuits/luv', 2],
                ['gtceu:niobium_titanium_single_cable', 4]
            ],
            fluids: [
                ['gtceu:hsss', 1152],
                ['gtceu:indium_tin_barium_titanium_cuprate', 2304],
                ['gtceu:soldering_alloy', 576]
            ],
            duration: 3000,
            EUt: GTValues.VA[GTValues.UHV]
        },
        {
            recipeIdPrefix: 'zpm_field_generator',
            outputItem: 'gtceu:zpm_field_generator',
            items: [
                ['gtceu:quantum_star', 1],
                ['gtceu:zpm_emitter', 2],
                ['#gtceu:circuits/zpm', 2],
                ['gtceu:vanadium_gallium_single_cable', 4]
            ],
            fluids: [
                ['gtceu:naquadah_alloy', 1152],
                ['gtceu:uranium_rhodium_dinaquadide', 2304],
                ['gtceu:soldering_alloy', 1152]
            ],
            duration: 3250,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'uv_field_generator',
            outputItem: 'gtceu:uv_field_generator',
            items: [
                ['gtceu:gravi_star', 1],
                ['gtceu:uv_emitter', 2],
                ['#gtceu:circuits/uv', 2],
                ['gtceu:yttrium_barium_cuprate_single_cable', 4]
            ],
            fluids: [
                ['gtceu:tritanium', 1152],
                ['gtceu:enriched_naquadah_trinium_europium_duranide', 2304],
                ['gtceu:soldering_alloy', 1728],
                ['gtceu:naquadria', 576]
            ],
            duration: 3500,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'uhv_field_generator',
            outputItem: 'gtceu:uhv_field_generator',
            items: [
                ['gtceu:gravi_star', 1],
                ['gtceu:double_cosmic_neutronium_plate', 2],
                ['gtceu:uhv_sensor', 8],
                ['gtceu:uhv_emitter', 8],
                ['#gtceu:circuits/uev', 1],
                ['#gtceu:circuits/uhv', 2],
                ['#gtceu:circuits/uv', 4],
                ['avaritia:eternal_singularity', 1]
            ],
            fluids: [
                ['gtceu:neutronium', 2016],
                ['gtceu:crystal_matrix', 1152],
                ['gtceu:soldering_alloy', 576],
                ['gtceu:lubricant', 1000],
                ['gtceu:naquadria', 576]
            ],
            duration: 3750,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'uev_field_generator',
            outputItem: 'gtceu:uev_field_generator',
            items: [
                ['gtceu:gravi_star', 1],
                ['gtceu:uev_sensor', 8],
                ['gtceu:uev_emitter', 8],
                ['#gtceu:circuits/uiv', 1],
                ['#gtceu:circuits/uev', 2],
                ['#gtceu:circuits/uhv', 4],
                ['avaritia:eternal_singularity', 1],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:awakened_draconium', 1008],
                ['gtceu:draconium', 1728],
                ['gtceu:soldering_alloy', 576],
                ['gtceu:lubricant', 1000]
            ],
            duration: 4000,
            EUt: GTValues.VA[GTValues.UIV]
        },
        {
            recipeIdPrefix: 'uiv_field_generator',
            outputItem: 'gtceu:uiv_field_generator',
            items: [
                ['gtceu:uiv_sensor', 8],
                ['gtceu:uiv_emitter', 8],
                ['#gtceu:circuits/uiv', 1],
                ['#gtceu:circuits/uev', 2],
                ['#gtceu:circuits/uhv', 4],
                ['avaritia:eternal_singularity', 1],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:chaos', 18288],
                ['gtceu:awakened_draconium', 1008],
                ['gtceu:stropharic_hypoxylon', 576],
                ['gtceu:antimatter', 576],
                ['gtceu:draconium', 576]
            ],
            duration: 4000,
            EUt: GTValues.VA[GTValues.UXV]
        },
        {
            recipeIdPrefix: 'uxv_field_generator',
            outputItem: 'gtceu:uxv_field_generator',
            items: [
                ['gtceu:uxv_sensor', 8],
                ['gtceu:uxv_emitter', 8],
                ['#gtceu:circuits/uxv', 1],
                ['#gtceu:circuits/uiv', 2],
                ['#gtceu:circuits/uev', 4],
                ['avaritia:eternal_singularity', 1],
                ['kubejs:quantum_data_module', 1],
                ['gtceu:pure_cosmic_matter_plate', 14]
            ],
            fluids: [
                ['gtceu:chaos', 18288],
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
