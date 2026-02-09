ServerEvents.recipes(event => {
    // Amount of Components per Recipes
    var component_quantities = [16, 64, 256];
    // Discounts for the Recipes
    var component_discounts  = [0.85, 0.5, 0.35];
    // Circuit needed for the Recipe
    var component_circuits   = [4, 5, 6];
    // Duration increase
    var durationMultipliers  = [1, 2, 4];

    // Base Recipes - JUST 1x Electric Motor for example, Script will automatically do the recipes
    var baseRecipes = [
        // Pistons
        {
            recipeIdPrefix: 'lv_electric_piston',
            outputItem: 'gtceu:lv_electric_piston',
            items: [
                ['gtceu:lv_electric_motor', 1]
            ],
            fluids: [
                ['gtceu:rubber', 288],
                ['gtceu:tin', 144],
                ['gtceu:steel', 720]
            ],
            duration: 2000,
            EUt: GTValues.VA[GTValues.UV]
        },
        {
            recipeIdPrefix: 'mv_electric_piston',
            outputItem: 'gtceu:mv_electric_piston',
            items: [
                ['gtceu:mv_electric_motor', 1]
            ],
            fluids: [
                ['gtceu:rubber', 288],
                ['gtceu:copper', 144],
                ['gtceu:aluminium', 720]
            ],
            duration: 2000,
            EUt: GTValues.VA[GTValues.UV]
        },
        {
            recipeIdPrefix: 'hv_electric_piston',
            outputItem: 'gtceu:hv_electric_piston',
            items: [
                ['gtceu:hv_electric_motor', 1]
            ],
            fluids: [
                ['gtceu:rubber', 288],
                ['gtceu:gold', 144],
                ['gtceu:stainless_steel', 720]
            ],
            duration: 2250,
            EUt: GTValues.VA[GTValues.UV]
        },
        {
            recipeIdPrefix: 'ev_electric_piston',
            outputItem: 'gtceu:ev_electric_piston',
            items: [
                ['gtceu:ev_electric_motor', 1]
            ],
            fluids: [
                ['gtceu:rubber', 288],
                ['gtceu:polyvinyl_chloride', 72],
                ['gtceu:aluminium', 144],
                ['gtceu:titanium', 720]
            ],
            duration: 2500,
            EUt: GTValues.VA[GTValues.UHV]
        },
        {
            recipeIdPrefix: 'iv_electric_piston',
            outputItem: 'gtceu:iv_electric_piston',
            items: [
                ['gtceu:iv_electric_motor', 1]
            ],
            fluids: [
                ['gtceu:styrene_butadiene_rubber', 72],
                ['gtceu:polyvinyl_chloride', 72],
                ['gtceu:tungsten', 144],
                ['gtceu:tungsten_steel', 720]
            ],
            duration: 2750,
            EUt: GTValues.VA[GTValues.UHV]
        },
        {
            recipeIdPrefix: 'luv_electric_piston',
            outputItem: 'gtceu:luv_electric_piston',
            items: [
                ['gtceu:luv_electric_motor', 1]
            ],
            fluids: [
                ['gtceu:styrene_butadiene_rubber', 72],
                ['gtceu:polyvinyl_chloride', 72],
                ['gtceu:polyphenylene_sulfide', 72],
                ['gtceu:niobium_titanium', 144],
                ['gtceu:hsss', 2056],
                ['gtceu:soldering_alloy', 144],
                ['gtceu:lubricant', 250]
            ],
            duration: 3000,
            EUt: GTValues.VA[GTValues.UHV]
        },
        {
            recipeIdPrefix: 'zpm_electric_piston',
            outputItem: 'gtceu:zpm_electric_piston',
            items: [
                ['gtceu:zpm_electric_motor', 1]
            ],
            fluids: [
                ['gtceu:styrene_butadiene_rubber', 144],
                ['gtceu:polyvinyl_chloride', 72],
                ['gtceu:polyphenylene_sulfide', 72],
                ['gtceu:vanadium_gallium', 144],
                ['gtceu:osmiridium', 2056],
                ['gtceu:soldering_alloy', 288],
                ['gtceu:lubricant', 500]
            ],
            duration: 3250,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'uv_electric_piston',
            outputItem: 'gtceu:uv_electric_piston',
            items: [
                ['gtceu:uv_electric_motor', 1]
            ],
            fluids: [
                ['gtceu:neoprene', 72],
                ['gtceu:polyvinyl_chloride', 72],
                ['gtceu:polyphenylene_sulfide', 72],
                ['gtceu:yttrium_barium_cuprate', 144],
                ['gtceu:tritanium', 1192],
                ['gtceu:naquadah_alloy', 864],
                ['gtceu:soldering_alloy', 576],
                ['gtceu:lubricant', 1000],
                ['gtceu:naquadria', 576]
            ],
            duration: 3500,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'uhv_electric_piston',
            outputItem: 'gtceu:uhv_electric_piston',
            items: [
                ['gtceu:uhv_electric_motor', 1],
                ['gtceu:europium_single_cable', 2],
                ['avaritia:eternal_singularity', 1]
            ],
            fluids: [
                ['gtceu:neutronium', 1192],
                ['gtceu:crystal_matrix', 1728],
                ['gtceu:soldering_alloy', 576],
                ['gtceu:lubricant', 1000],
                ['gtceu:naquadria', 576]
            ],
            duration: 3750,
            EUt: GTValues.VA[GTValues.UEV]
        },
        {
            recipeIdPrefix: 'uev_electric_piston',
            outputItem: 'gtceu:uev_electric_piston',
            items: [
                ['gtceu:uev_electric_motor', 1],
                ['gtceu:double_cosmic_neutronium_plate', 3],
                ['gtceu:draconium_single_cable', 2],
                ['avaritia:eternal_singularity', 1],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:draconium', 2376],
                ['gtceu:neutronium', 256],
                ['gtceu:soldering_alloy', 576],
                ['gtceu:lubricant', 1000]
            ],
            duration: 4000,
            EUt: GTValues.VA[GTValues.UIV]
        },
        {
            recipeIdPrefix: 'uiv_electric_piston',
            outputItem: 'gtceu:uiv_electric_piston',
            items: [
                ['gtceu:uiv_electric_motor', 1],
                ['gtceu:awakened_draconium_single_cable', 2],
                ['avaritia:eternal_singularity', 1],
                ['kubejs:quantum_data_module', 1]
            ],
            fluids: [
                ['gtceu:awakened_draconium', 2920],
                ['gtceu:stropharic_hypoxylon', 576],
                ['gtceu:antimatter', 576],
                ['gtceu:draconium', 576]
            ],
            duration: 4000,
            EUt: GTValues.VA[GTValues.UXV]
        },
        {
            recipeIdPrefix: 'uxv_electric_piston',
            outputItem: 'gtceu:uxv_electric_piston',
            items: [
                ['gtceu:uxv_electric_motor', 1],
                ['gtceu:chaos_double_wire', 1],
                ['avaritia:eternal_singularity', 1],
                ['kubejs:quantum_data_module', 1],
                ['gtceu:pure_cosmic_matter_plate', 41]
            ],
            fluids: [
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
