
// Advanced Ore Processing Recipes

const advoreProcessableTiers = {
    'UHV': [
        { material: 'cassiterite', secondary: 'tin', tertiary: 'tin', quaternary: 'bismuth' },
        { material: 'silver', secondary: 'gold', tertiary: 'lead', quaternary: 'sulfur' },
        { material: 'gold', secondary: 'silver', tertiary: 'copper', quaternary: 'nickel' },
        { material: 'iron', secondary: 'nickel', tertiary: 'tin' },
        { material: 'copper', secondary: 'gold', tertiary: 'nickel' },
        { material: 'tin', secondary: 'iron', tertiary: 'zinc' },
        { material: 'sphalerite', secondary: 'gallium', tertiary: 'sulfur' },
        { material: 'galena', secondary: 'silver', tertiary: 'sulfur' },
        { material: 'stibnite', secondary: 'antimony', tertiary: 'sulfur' },
        { material: 'salt', secondary: 'rock_salt', tertiary: 'rock_salt', quaternary: 'borax' },
        { material: 'coal', secondary: 'coal', tertiary: 'coal', quaternary: 'thorium' },
    	{ material: 'nickel', secondary: 'cobalt', tertiary: 'iron', quaternary: 'platinum'},
    	{ material: 'lead', secondary: 'silver', tertiary: 'sulfur'},
        { material: 'lapis', secondary: 'lazurite', tertiary: 'sodalite'},
	    { material: 'amethyst', secondary: 'amethyst', tertiary: 'iron'},
	    { material: 'quartzite', secondary: 'certus_quartz', tertiary: 'barite'},
        { material: 'pyrochlore', secondary: 'apatite', tertiary: 'apatite', quaternary: 'niobium' },
        { material: 'cobaltite', secondary: 'cobalt', tertiary: 'sulfur', quaternary: 'cobalt' },
        { material: 'vanadium_magnetite', secondary: 'magnetite', tertiary: 'gold', quaternary: 'vanadium' },
        { material: 'chromite', secondary: 'iron', tertiary: 'magnesium', quaternary: 'iron' },
        { material: 'beryllium', secondary: 'emerald', tertiary: 'emerald', quaternary: 'beryllium' },
        { material: 'apatite', secondary: 'tricalcium_phosphate', tertiary: 'tricalcium_phosphate', quaternary: 'phosphate' },
        { material: 'graphite', secondary: 'graphite', tertiary: 'carbon', quaternary: 'diamond'},
	    { material: 'barite', secondary: 'barium', tertiary: 'sulfur'},
    	{ material: 'calcite', secondary: 'calcium', tertiary: 'sodalite'},
	    { material: 'saltpeter', secondary: 'potassium', tertiary: 'salt'},
	    { material: 'sulfur', secondary: 'sulfur', tertiary: 'sulfur'},
	    { material: 'hematite', secondary: 'magnetite', tertiary: 'calcium', quaternary:'magnesium'},
	    { material: 'oilsands', secondary: 'oilsands', tertiary: 'oilsands'},
	    { material: 'diamond', secondary: 'diamond', tertiary: 'graphite', quaternary:'carbon'},
	    { material: 'emerald', secondary: 'beryllium', tertiary: 'thorium'},
	    { material: 'certus_quartz', secondary: 'nether_quartz', tertiary: 'barite'},
	    { material: 'nether_quartz', secondary: 'quartzite', tertiary: 'certus_quartz'},
        { material: 'bauxite', secondary: 'gallium', tertiary: 'grossular', quaternary: 'rutile' },
        { material: 'pitchblende', secondary: 'thorium', tertiary: 'thorium', quaternary: 'uraninite' },
        { material: 'ilmenite', secondary: 'iron', tertiary: 'iron', quaternary: 'rutile' },
        { material: 'molybdenite', secondary: 'molybdenum', tertiary: 'sulfur', quaternary: 'molybdenum' },
        { material: 'tantalite', secondary: 'manganese', tertiary: 'niobium', quaternary: 'niobium' },
    	{ material: 'kyanite', secondary: 'talc', tertiary: 'aluminium', quaternary:'silicon'},
	    { material: 'platinum', secondary: 'nickel', tertiary: 'palladium', quaternary:'cobalt'},
	    { material: 'tricalcium_phosphate', secondary: 'apatite', tertiary: 'phosphate', quaternary:'pyrochlore'},
	    { material: 'plutonium', secondary: 'uraninite', tertiary: 'lead'},
    	{ material: 'uraninite', secondary: 'thorium', tertiary: 'thorium', quaternary:'silver'},
    	{ material: 'mica', secondary: 'potassium', tertiary: 'aluminium'},
    	{ material: 'green_sapphire', secondary: 'beryllium', tertiary: 'iron', quaternary:'vanadium'},
        { material: 'bastnasite', secondary: 'neodymium', tertiary: 'neodymium', quaternary: 'rare_earth' },
        { material: 'tungstate', secondary: 'platinum', tertiary: 'manganese', quaternary: 'lithium' },
        { material: 'scheelite', secondary: 'manganese', tertiary: 'manganese', quaternary: 'molybdenum' },
        { material: 'zeolite', secondary: 'calcium', tertiary: 'aluminium', quaternary: 'silicon' },
        { material: 'naquadah', secondary: 'sulfur', tertiary: 'barite', quaternary: 'enriched_naquadah' },
    ],

    'UEV': [
        { material: 'cosmic_iridium', secondary: 'iridium', tertiary: 'titanium', quaternary: 'tungsten' },
        { material: 'cosmic_titanium', secondary: 'titanium', tertiary: 'tungsten', quaternary: 'osmium' },
        { material: 'cosmic_tungsten', secondary: 'tungsten', tertiary: 'osmium', quaternary: 'iridium' },
        { material: 'cosmic_osmium', secondary: 'osmium', tertiary: 'iridium', quaternary: 'titanium' },
        { material: 'cosmic_neutronium', secondary: 'cosmic_neutronium', tertiary: 'neutronium', quaternary: 'resonant_essence' },
        { material: 'resonant_essence', secondary: 'resonant_essence', tertiary: 'kaemite', quaternary: 'kaemite' },
        { material: 'resonant_naquadah', secondary: 'resonant_naquadah', tertiary: 'naquadah', quaternary: 'naquadria' },
        { material: 'kaemite', secondary: 'rare_earth', tertiary: 'rare_earth', quaternary: 'naquadria' },
        { material: 'infinity_catalyst', secondary: 'infinity_catalyst', tertiary: 'pure_cosmic_matter', quaternary: 'space_time' },
    ]
};

const raw_ore = (mat, amount) => {
    return ChemicalHelper.get(TagPrefix.rawOre, mat, amount);
}

const advanced_dust = (mat, amount) => {
    return `${amount}x gtceu:${mat}_dust`;
}
const advanced_fluids = {
    acid: 'gtceu:sodium_persulfate 10000',
    acidx5: 'gtceu:sodium_persulfate 50000'
  }

const adv_processing_plant = (event, materialObj) => {
    let recipe = event.recipes.gtceu.adv_processing_plant(`${materialObj.material}`)
        .circuit(1)
        .itemInputs(raw_ore(materialObj.material, 10000))
        .inputFluids(advanced_fluids.acid)
        .itemOutputs(advanced_dust(materialObj.material, 40000))
        .duration(20*60)
        .EUt(GTValues.VHA[GTValues.UHV]);
    
    if (materialObj.secondary) {
        recipe.itemOutputs(advanced_dust(materialObj.secondary, 8000));
    }
    if (materialObj.tertiary) {
        recipe.itemOutputs(advanced_dust(materialObj.tertiary, 4000));
    }
    if (materialObj.quaternary) {
        recipe.itemOutputs(advanced_dust(materialObj.quaternary, 4000));
    }
}


// Final form of 1-step ore processing.

const adv_plant_ore_processing = (event, materialObj) => {
    event.recipes.gtceu.adv_processing_plant(`${materialObj.material}`)
        .circuit(1)
        .itemInputs(raw_ore(materialObj.material, 100))
        .inputFluids(advanced_fluids.acidx5)
        .itemOutputs(
                    advanced_dust(materialObj.material, 240),
                    advanced_dust(materialObj.secondary, 100),
                    advanced_dust(materialObj.tertiary, 60),
                    advanced_dust(materialObj.quaternary, 40),
        )
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.UEV]);
}

// Gem processing

const advgem = [
    'monazite', 'quartzite', 'sodalite', 'coal', 'blue_topaz', 'opal',
    'sapphire', 'malachite', 'apatite', 'ruby', 'spessartine', 'pyrope',
    'topaz', 'lapis', 'green_sapphire', 'amethyst', 'lazurite',
    'almandine', 'diamond', 'rock_salt', 'nether_quartz', 'salt', 'red_garnet',
    'cinnabar', 'grossular', 'emerald', 'realgar', 'yellow_garnet', 'certus_quartz',
    'olivine'
];

const advgemraw = (mat, amount) => {
    return ChemicalHelper.get(TagPrefix.rawOre, mat, amount);
}

const advgemexquisite = (mat, amount) => {
    return `${amount}x gtceu:exquisite_${mat}_gem`;
}

const advgemflawless = (mat, amount) => {
    return `${amount}x gtceu:flawless_${mat}_gem`;
}

const advgemflawed = (mat, amount) => {
    return `${amount}x #forge:gems/${mat}`;
}

const advgemdust = (mat, amount) => {
    return `${amount}x gtceu:${mat}_dust`;
}

const advgemproc = (event, materialObj) => {
    event.recipes.gtceu.adv_processing_plant(`gem_${materialObj.material}`) 
        .circuit(10)
        .itemInputs(advgemraw(materialObj.material, 10000))
        .inputFluids(advanced_fluids.acid)
        .itemOutputs(
            advgemexquisite(materialObj.material, 1000),
            advgemflawless(materialObj.material, 3000),
            advgemflawed(materialObj.material, 10000),
            advgemdust(materialObj.material, 5000)
        )
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.UHV]);
};

// Final Product 

ServerEvents.recipes(event => {
	// Iterate over each tier and processable item and register the recipes
    Object.keys(advoreProcessableTiers).forEach((tier) => {
        advoreProcessableTiers[tier].forEach((item) => {    
            if (tier == 'UHV') {
                adv_processing_plant(event, item);
            }  else if (tier == 'UEV') {
                adv_plant_ore_processing(event, item);
            }
        });
    });

    advgem.forEach((mat) => {
        advgemproc(event, { material: mat });
    });

    // Manual Recipes

    event.recipes.gtceu.adv_processing_plant(`raw_draconium`)
        .circuit(1)
        .itemInputs('100x gtceu:raw_draconium')
        .inputFluids(advanced_fluids.acid)
		.itemOutputs('200x draconicevolution:draconium_dust',
                    '100x draconicevolution:draconium_dust',
                    '40x draconicevolution:draconium_dust',
                    '20x draconicevolution:draconium_dust'
        )
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.UEV]);

	 event.recipes.gtceu.adv_processing_plant(`raw_awakened_draconium`)
        .circuit(1)
        .itemInputs('100x gtceu:raw_awakened_draconium')
        .inputFluids(advanced_fluids.acid)
		.itemOutputs('200x draconicevolution:awakened_draconium_dust',
                    '100x draconicevolution:awakened_draconium_dust',
                    '40x draconicevolution:awakened_draconium_dust',
                    '20x draconicevolution:awakened_draconium_dust'
        )
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.adv_processing_plant('sifted_chaos')
        .circuit(10)    
        .itemInputs('100x gtceu:raw_chaos')
        .inputFluids(advanced_fluids.acid)
        .itemOutputs(
            '6x draconicevolution:chaos_shard',
            '20x draconicevolution:large_chaos_frag',
            '70x draconicevolution:medium_chaos_frag',
            '100x draconicevolution:small_chaos_frag'
        )
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.adv_processing_plant(`raw_redstone`)
        .itemInputs('10000x gtceu:raw_redstone')
        .inputFluids(advanced_fluids.acid)
		.itemOutputs('40000x minecraft:redstone',
                    '8000x gtceu:cinnabar_dust',
                    '4000x gtceu:rare_earth_dust',
                    '4000x minecraft:glowstone_dust'
        )
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.UHV]);

//recipes components

    event.recipes.gtceu.assembler('adv_high_power_crushing_wheels')
        .itemInputs('kubejs:high_power_crushing_wheels','gtceu:uv_electric_motor','8x gtceu:darmstadtium_plate')
        .circuit(4)
        .itemOutputs('kubejs:adv_high_power_crushing_wheels')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.assembly_line('adv_processing_plant')
    .itemInputs(
        '8x gtceu:neutronium_plate',
        '4x gtceu:uhv_electric_motor',
        'gtceu:uhv_machine_hull',
        '8x #gtceu:circuits/uhv',
        'gtceu:uhv_electric_piston',
        'gtceu:processing_plant'
    )
    .inputFluids(
        'gtceu:condensed_star_matter 1256',
        'gtceu:neoprene 2152',
        'gtceu:peek 2152',
        'gtceu:soldering_alloy 2152'
    )
    .itemOutputs('gtceu:adv_processing_plant')
    .duration(200)
    .EUt(GTValues.VA[GTValues.UHV]);

});