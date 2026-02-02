ServerEvents.recipes(event => {

const megaoreProcessableTiers = {
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
        { material: 'lithium'},
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

const mega_raw_ore = (mat, amount) => {
    return ChemicalHelper.get(TagPrefix.rawOre, mat, amount);
}

const mega_advanced_dust = (mat, amount) => {
    return `${amount}x gtceu:${mat}_dust`;
}
const mega_advanced_fluids = {
    acid: 'gtceu:sodium_persulfate 50000',
    acidx5: 'gtceu:sodium_persulfate 250000'
  }

const mega_oreproc = (event, materialObj) => {
    let recipe = event.recipes.gtceu.mega_oreproc(`${materialObj.material}`)
        .circuit(1)
        .itemInputs(mega_raw_ore(materialObj.material, 1000000))
        .inputFluids(mega_advanced_fluids.acid)
        .itemOutputs(mega_advanced_dust(materialObj.material, 4000000))
        .duration(20*60)
        .EUt(GTValues.VHA[GTValues.UHV]);
    
    if (materialObj.secondary) {
        recipe.itemOutputs(mega_advanced_dust(materialObj.secondary, 800000));
    }
    if (materialObj.tertiary) {
        recipe.itemOutputs(mega_advanced_dust(materialObj.tertiary, 400000));
    }
    if (materialObj.quaternary) {
        recipe.itemOutputs(mega_advanced_dust(materialObj.quaternary, 400000));
    }
}


// Final form of 1-step ore processing.

const mega_ore_processing_plant = (event, materialObj) => {
    event.recipes.gtceu.mega_oreproc(`${materialObj.material}`)
        .circuit(1)
        .itemInputs(mega_raw_ore(materialObj.material, 10000))
        .inputFluids(mega_advanced_fluids.acidx5)
        .itemOutputs(
                    mega_advanced_dust(materialObj.material, 24000),
                    mega_advanced_dust(materialObj.secondary, 10000),
                    mega_advanced_dust(materialObj.tertiary, 6000),
                    mega_advanced_dust(materialObj.quaternary, 4000),
        )
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.UEV]);
}

// Gem processing

const mega_advgem = [
    'monazite', 'quartzite', 'sodalite', 'coal', 'blue_topaz', 'opal',
    'sapphire', 'malachite', 'apatite', 'ruby', 'spessartine', 'pyrope',
    'topaz', 'lapis', 'green_sapphire', 'amethyst', 'lazurite',
    'almandine', 'diamond', 'rock_salt', 'nether_quartz', 'salt', 'red_garnet',
    'cinnabar', 'grossular', 'emerald', 'realgar', 'yellow_garnet', 'certus_quartz',   
    'olivine', 'chronon'
];

const mega_advgemraw = (mat, amount) => {
    return ChemicalHelper.get(TagPrefix.rawOre, mat, amount);
}

const mega_advgemexquisite = (mat, amount) => {
    return `${amount}x gtceu:exquisite_${mat}_gem`;
}

const mega_advgemflawless = (mat, amount) => {
    return `${amount}x gtceu:flawless_${mat}_gem`;
}

const mega_advgemflawed = (mat, amount) => {
    return `${amount}x #forge:gems/${mat}`;
}

const mega_advgemdust = (mat, amount) => {
    return `${amount}x gtceu:${mat}_dust`;
}

const mega_advgemproc = (event, materialObj) => {
    event.recipes.gtceu.mega_oreproc(`gem_${materialObj.material}`) 
        .circuit(10)
        .itemInputs(mega_advgemraw(materialObj.material, 1000000))
        .inputFluids(mega_advanced_fluids.acid)
        .itemOutputs(
            mega_advgemexquisite(materialObj.material, 100000),
            mega_advgemflawless(materialObj.material, 300000),
            mega_advgemflawed(materialObj.material, 1000000),
            mega_advgemdust(materialObj.material, 500000)
        )
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.UHV]);
};



	// Iterate over each tier and processable item and register the recipes
    Object.keys(megaoreProcessableTiers).forEach((tier) => {
        megaoreProcessableTiers[tier].forEach((item) => {    
            if (tier == 'UHV') {
                mega_oreproc(event, item);
            }  else if (tier == 'UEV') {
                mega_ore_processing_plant(event, item);
            }
        });
    });

    mega_advgem.forEach((mat) => {
        mega_advgemproc(event, { material: mat });
    });

    // Manual Recipes

    event.recipes.gtceu.mega_oreproc(`raw_draconium`)
        .circuit(1)
        .itemInputs('10000x gtceu:raw_draconium')
        .inputFluids(mega_advanced_fluids.acid)
		.itemOutputs('20000x draconicevolution:draconium_dust',
                    '10000x draconicevolution:draconium_dust',
                    '4000x draconicevolution:draconium_dust',
                    '2000x draconicevolution:draconium_dust'
        )
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.UEV]);

	 event.recipes.gtceu.mega_oreproc(`raw_awakened_draconium`)
        .circuit(1)
        .itemInputs('10000x gtceu:raw_awakened_draconium')
        .inputFluids(mega_advanced_fluids.acid)
		.itemOutputs('20000x draconicevolution:awakened_draconium_dust',
                    '10000x draconicevolution:awakened_draconium_dust',
                    '4000x draconicevolution:awakened_draconium_dust',
                    '2000x draconicevolution:awakened_draconium_dust'
        )
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.mega_oreproc('sifted_chaos')
        .circuit(10)    
        .itemInputs('10000x gtceu:raw_chaos')
        .inputFluids(mega_advanced_fluids.acid)
        .itemOutputs(
            '600x draconicevolution:chaos_shard',
            '2000x draconicevolution:large_chaos_frag',
            '7000x draconicevolution:medium_chaos_frag',
            '10000x draconicevolution:small_chaos_frag'
        )
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.mega_oreproc(`raw_redstone`)
        .itemInputs('10000x gtceu:raw_redstone')
        .inputFluids(mega_advanced_fluids.acid)
		.itemOutputs('40000x minecraft:redstone',
                    '8000x gtceu:cinnabar_dust',
                    '4000x gtceu:rare_earth_dust',
                    '4000x minecraft:glowstone_dust'
        )
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.UHV]);
});