
// Star Technology Code, Thanks!

const oreProcessableTiers = {
    'lv': [
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
	    { material: 'quartzite', secondary: 'certus_quartz', tertiary: 'barite'}
    ],

    'mv': [
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
	    { material: 'nether_quartz', secondary: 'quartzite', tertiary: 'certus_quartz'}
    ],

    'hv': [
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
    	{ material: 'green_sapphire', secondary: 'beryllium', tertiary: 'iron', quaternary:'vanadium'}
    ],

    'ev': [
        { material: 'bastnasite', secondary: 'neodymium', tertiary: 'neodymium', quaternary: 'rare_earth' },
        { material: 'tungstate', secondary: 'platinum', tertiary: 'manganese', quaternary: 'lithium' },
        { material: 'scheelite', secondary: 'manganese', tertiary: 'manganese', quaternary: 'molybdenum' },
        { material: 'zeolite', secondary: 'calcium', tertiary: 'aluminium', quaternary: 'silicon' },
        { material: 'naquadah', secondary: 'sulfur', tertiary: 'barite', quaternary: 'enriched_naquadah' },
    ]
};

const crushed_ore = (mat, amount) => `${amount}x gtceu:crushed_${mat}_ore`;
const dust = (mat, amount) => `${amount}x gtceu:${mat}_dust`;

const fluids = {
    distilled_water: 'gtceu:distilled_water 100',
    sodium_persulfate: 'gtceu:sodium_persulfate 100',
    sodium_persulfate_5x: 'gtceu:sodium_persulfate 500'
};

const createProcessingRecipe = function(event, materialObj, config) {
    var tier = config.tier;
    var fluidType = config.fluidType || 'water';
    var baseDuration = config.baseDuration || 1200;
    var energyTier = config.energyTier || 'LV';
    var isPrimitive = config.isPrimitive || false;
    var isAdvanced = config.isAdvanced || false;

    var fluidMap = {
        'distilled': fluids.distilled_water,
        'sodium_persulfate': fluids.sodium_persulfate,
        'sodium_persulfate_5x': fluids.sodium_persulfate_5x
    };

    var voltageMap = {
        'LV': GTValues.VA[GTValues.LV],
        'MV': GTValues.VA[GTValues.MV],
        'HV': GTValues.VA[GTValues.HV],
        'EV': GTValues.VA[GTValues.EV],
        'LVA': GTValues.VHA[GTValues.LV],
        'MVA': GTValues.VHA[GTValues.MV],
        'HVA': GTValues.VHA[GTValues.HV],
        'EVA': GTValues.VHA[GTValues.EV],
        'UEV': GTValues.VA[GTValues.UEV]
    };

    var outputConfigs = {
        primitive: {
            main: [10000, 0],
            secondary: [7500, 0],
            tertiary: [4500, 0],
            quaternary: [3250, 0]
        },
        standard: {
            main: [10000, 0],
            secondary: [5000, 150],
            tertiary: [2500, 100],
            quaternary: [1250, 50],
            quinary: [750, 100]
        },
        improved: {
            main: [10000, 0],
            secondary: [7500, 150],
            tertiary: [5500, 100],
            quaternary: [3250, 50],
            quinary: [1750, 100]
        },
        advanced: {
            main: [10000, 0],
            secondary: [7500, 150],
            tertiary: [5500, 100],
            quaternary: [3250, 50],
            quinary: [1750, 100],
            senary: [750, 150]
        }
    };

    var configType = isPrimitive ? 'primitive' : 
                    isAdvanced ? 'advanced' : 
                    energyTier.includes('A') ? 'improved' : 'standard';

    var outputs = outputConfigs[configType];

    var recipe = event.recipes.gtceu.processing_plant(materialObj.material + '_' + tier + '_' + configType)
        .itemInputs(crushed_ore(materialObj.material, 1))
        .inputFluids(fluidMap[fluidType])
        .itemOutputs(dust(materialObj.material, 1))
        .duration(baseDuration)
        .EUt(voltageMap[energyTier]);

    if (materialObj.secondary && outputs.secondary) {
        recipe.chancedOutput(dust(materialObj.secondary, 1), outputs.secondary[0], outputs.secondary[1]);
    }
    if (materialObj.tertiary && outputs.tertiary) {
        recipe.chancedOutput(dust(materialObj.tertiary, 1), outputs.tertiary[0], outputs.tertiary[1]);
    }
    if (materialObj.quaternary && outputs.quaternary) {
        recipe.chancedOutput(dust(materialObj.quaternary, 1), outputs.quaternary[0], outputs.quaternary[1]);
    }
    if (materialObj.quinary && outputs.quinary) {
        recipe.chancedOutput(dust(materialObj.quinary, 1), outputs.quinary[0], outputs.quinary[1]);
    }
};

ServerEvents.recipes(function(event) {
    event.recipes.gtceu.processing_plant('crushed_redstone')
        .itemInputs('gtceu:crushed_redstone_ore')
        .inputFluids(fluids.distilled_water)
        .itemOutputs('minecraft:redstone')
        .chancedOutput('minecraft:redstone', 5000, 150)
        .chancedOutput('gtceu:cinnabar_dust', 2500, 100)
        .chancedOutput('gtceu:rare_earth_dust', 1250, 50)
        .chancedOutput('minecraft:glowstone_dust', 750, 100)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.LV]);

    Object.keys(oreProcessableTiers).forEach(function(tier) {
        oreProcessableTiers[tier].forEach(function(item) {
            var tierConfigs = {
                'lv': [
                    { tier: 'lv1', fluidType: 'distilled', energyTier: 'LV', baseDuration: 1200, isPrimitive: true },
                    { tier: 'lv2', fluidType: 'distilled', energyTier: 'LVA', baseDuration: 240, isPrimitive: true },
                    { tier: 'lv3', fluidType: 'distilled', energyTier: 'LV', baseDuration: 1200 }
                ],
                'mv': [
                    { tier: 'mv1', fluidType: 'distilled', energyTier: 'MV', baseDuration: 1200 },
                    { tier: 'mv2', fluidType: 'distilled', energyTier: 'MVA', baseDuration: 1200 }
                ],
                'hv': [
                    { tier: 'hv1', fluidType: 'sodium_persulfate', energyTier: 'HV', baseDuration: 1200 },
                    { tier: 'hv2', fluidType: 'sodium_persulfate', energyTier: 'HVA', baseDuration: 1200 }
                ],
                'ev': [
                    { tier: 'ev1', fluidType: 'sodium_persulfate', energyTier: 'EV', baseDuration: 1200 },
                    { tier: 'ev2', fluidType: 'sodium_persulfate', energyTier: 'EVA', baseDuration: 1200 },
                    { tier: 'ev3', fluidType: 'sodium_persulfate_5x', energyTier: 'UEV', baseDuration: 1200, isAdvanced: true }
                ]
            };

            if (tierConfigs[tier]) {
                tierConfigs[tier].forEach(function(config) {
                    createProcessingRecipe(event, item, config);
                });
            }
        });
    });
});