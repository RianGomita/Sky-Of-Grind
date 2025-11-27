ServerEvents.recipes(event => {

    //Cable Removal Function
    function cable_recipe_removal(material) {
      const cableSingle = `gtceu:${material}_single_cable`;
      const cableDouble = `gtceu:${material}_double_cable`;
      const cableQuadruple = `gtceu:${material}_quadruple_cable`;
      const cableOctal = `gtceu:${material}_octal_cable`;
      const cableHex = `gtceu:${material}_hex_cable`;
      event.remove({ output: [cableSingle, cableDouble, cableQuadruple, cableOctal, cableHex]})}

    //Cable Recipe Functions
    function makeWireToCableRecipenofoil(material, wireSize, EUt, duration, fluidId, fluidAmount) {
            const inputWire = `gtceu:${material}_${wireSize}_wire`;
            const outputCable = `gtceu:${material}_${wireSize}_cable`;
            const recipeId = `kubejs:gtceu/wire_to_cable/${material}_${wireSize}_${fluidId}_covered`

            event.recipes.gtceu.assembler(recipeId)
                .itemInputs(inputWire)
                .inputFluids(`gtceu:${fluidId} ${fluidAmount}`)
                .itemOutputs(outputCable)
                .EUt(EUt)
                .duration(duration);
        }

	
	function makeWireToCableRecipeonefoil(material, wireSize, EUt, duration, fluidId, fluidAmount, foilammount, foilmat) {
            const inputWire = `gtceu:${material}_${wireSize}_wire`;
            const outputCable = `gtceu:${material}_${wireSize}_cable`;
			const inputFoil = `${foilammount}x gtceu:${foilmat}_foil`;
            const recipeId = `kubejs:gtceu/wire_to_cable/${material}_${wireSize}_${fluidId}_covered`

            event.recipes.gtceu.assembler(recipeId)
                .itemInputs(inputWire, inputFoil)
                .inputFluids(`gtceu:${fluidId} ${fluidAmount}`)
                .itemOutputs(outputCable)
                .EUt(EUt)
                .duration(duration);
        }
	
	function makeWireToCableRecipetwofoil(material, wireSize, EUt, duration, fluidId, fluidAmount, foilammount, foilmat1, foilmat2) {
            const inputWire = `gtceu:${material}_${wireSize}_wire`;
            const outputCable = `gtceu:${material}_${wireSize}_cable`;
			const inputFoil1 = `${foilammount}x gtceu:${foilmat1}_foil`;
			const inputFoil2 = `${foilammount}x gtceu:${foilmat2}_foil`;
            const recipeId = `kubejs:gtceu/wire_to_cable/${material}_${wireSize}_${fluidId}_covered`

            event.recipes.gtceu.assembler(recipeId)
                .itemInputs(inputWire, inputFoil1, inputFoil2)
                .inputFluids(`gtceu:${fluidId} ${fluidAmount}`)
                .itemOutputs(outputCable)
                .EUt(EUt)
                .duration(duration);
        }
	
	function makeWireToCableRecipethreefoil(material, wireSize, EUt, duration, fluidId, fluidAmount, foilammount, foilmat1, foilmat2, foilmat3) {
            const inputWire = `gtceu:${material}_${wireSize}_wire`;
            const outputCable = `gtceu:${material}_${wireSize}_cable`;
			const inputFoil1 = `${foilammount}x gtceu:${foilmat1}_foil`;
			const inputFoil2 = `${foilammount}x gtceu:${foilmat2}_foil`;
			const inputFoil3 = `${foilammount}x gtceu:${foilmat3}_foil`;
            const recipeId = `kubejs:gtceu/wire_to_cable/${material}_${wireSize}_${fluidId}_covered`

            event.recipes.gtceu.assembler(recipeId)
                .itemInputs(inputWire, inputFoil1, inputFoil2, inputFoil3)
                .inputFluids(`gtceu:${fluidId} ${fluidAmount}`)
                .itemOutputs(outputCable)
                .EUt(EUt)
                .duration(duration);
        }
	
	function cablecoatnofoil(material, fluidId, fluidAmount) {
		makeWireToCableRecipenofoil(material,'single',7,100,fluidId,0.5*fluidAmount)
		makeWireToCableRecipenofoil(material,'double',7,100,fluidId,0.5*fluidAmount)
		makeWireToCableRecipenofoil(material,'quadruple',7,100,fluidId,fluidAmount)
		makeWireToCableRecipenofoil(material,'octal',7,100,fluidId,1.5*fluidAmount)
		makeWireToCableRecipenofoil(material,'hex',7,100,fluidId,2.5*fluidAmount)
	}

	function cablecoatonefoil(material, fluidId, fluidAmount, foilmat1) {
		makeWireToCableRecipeonefoil(material,'single',7,100,fluidId,0.5*fluidAmount, 1, foilmat1)
		makeWireToCableRecipeonefoil(material,'double',7,100,fluidId,0.5*fluidAmount, 1, foilmat1)
		makeWireToCableRecipeonefoil(material,'quadruple',7,100,fluidId,fluidAmount, 2, foilmat1)
		makeWireToCableRecipeonefoil(material,'octal',7,100,fluidId,1.5*fluidAmount, 3, foilmat1)
		makeWireToCableRecipeonefoil(material,'hex',7,100,fluidId,2.5*fluidAmount, 5, foilmat1)
	}

	function cablecoattwofoil(material, fluidId, fluidAmount,  foilmat1, foilmat2) {
		makeWireToCableRecipetwofoil(material,'single',7,100,fluidId,0.5*fluidAmount, 1, foilmat1, foilmat2)
		makeWireToCableRecipetwofoil(material,'double',7,100,fluidId,0.5*fluidAmount, 1, foilmat1, foilmat2)
		makeWireToCableRecipetwofoil(material,'quadruple',7,100,fluidId,fluidAmount, 2, foilmat1, foilmat2)
		makeWireToCableRecipetwofoil(material,'octal',7,100,fluidId,1.5*fluidAmount, 3, foilmat1, foilmat2)
		makeWireToCableRecipetwofoil(material,'hex',7,100,fluidId,2.5*fluidAmount, 5, foilmat1, foilmat2)
	}

	function cablecoatthreefoil(material, fluidId, fluidAmount, foilmat1, foilmat2, foilmat3) {
		makeWireToCableRecipethreefoil(material,'single',7,100,fluidId,0.5*fluidAmount, 1, foilmat1, foilmat2, foilmat3)
		makeWireToCableRecipethreefoil(material,'double',7,100,fluidId,0.5*fluidAmount,1, foilmat1, foilmat2, foilmat3)
		makeWireToCableRecipethreefoil(material,'quadruple',7,100,fluidId,fluidAmount, 2, foilmat1, foilmat2, foilmat3)
		makeWireToCableRecipethreefoil(material,'octal',7,100,fluidId,1.5*fluidAmount, 3, foilmat1, foilmat2, foilmat3)
		makeWireToCableRecipethreefoil(material,'hex',7,100,fluidId,2.5*fluidAmount, 5, foilmat1, foilmat2, foilmat3)
	}

    //Cable Materials
	const LV_HV_wirematerials = ["lead", "red_alloy", "cobalt", "nickel", "tin", "copper", "iron", "annealed_copper", "cupronickel", "gold", "silver", "electrum", "blue_alloy"];
	const EV_wirematerials = ["aluminium", "nichrome", "rtm_alloy", "steel", "black_steel"];
    const IV_wirematerials = [ "platinum", "tungsten", "graphene", "tungsten_steel"];
	const LUV_wirematerials = ["osmium", "niobium_nitride", "niobium_titanium", "hssg"];
	const ZPM_wirematerials = ["naquadah", "trinium", "vanadium_gallium"];
	const UV_wirematerials = ["tritanium", "yttrium_barium_cuprate", "naquadah_alloy"];
	const UHV_UIV_wirematerials = ["europium", "draconium", "awakened_draconium"];
    const UXV_MAX_wirematerials = []

    //Old recipes removal
    IV_wirematerials.forEach(material => {
          cable_recipe_removal(material)
        });
    LUV_wirematerials.forEach(material => {
          cable_recipe_removal(material)
        });
    ZPM_wirematerials.forEach(material => {
          cable_recipe_removal(material)
        });
    UV_wirematerials.forEach(material => {
          cable_recipe_removal(material)
        });
    UHV_UIV_wirematerials.forEach(material => {
          cable_recipe_removal(material)
        }); 
    // Silicone Rubber Recipes
    IV_wirematerials.forEach(material => {
        cablecoatonefoil(material, 'silicone_rubber', 72, 'polyvinyl_chloride')
         });
    LUV_wirematerials.forEach(material => {
        cablecoattwofoil(material, 'silicone_rubber', 144, 'polyvinyl_chloride', 'polyphenylene_sulfide')
         });
    // SBR Recipes
    IV_wirematerials.forEach(material => {
        cablecoatonefoil(material, 'styrene_butadiene_rubber', 72, 'polyvinyl_chloride')
         });
    LUV_wirematerials.forEach(material => {
        cablecoattwofoil(material, 'styrene_butadiene_rubber', 72, 'polyvinyl_chloride', 'polyphenylene_sulfide')
         });
    ZPM_wirematerials.forEach(material => {
        cablecoattwofoil(material, 'styrene_butadiene_rubber', 144, 'polyvinyl_chloride', 'polyphenylene_sulfide')
         });
    // Neoprene Recipes
    LV_HV_wirematerials.forEach(material => {
        cablecoatnofoil(material, 'neoprene', 36)
         });
    EV_wirematerials.forEach(material => {
        cablecoatonefoil(material, 'neoprene', 36, 'polyvinyl_chloride')
         });
    IV_wirematerials.forEach(material => {
        cablecoatonefoil(material, 'neoprene', 36, 'polyvinyl_chloride')
         });
    LUV_wirematerials.forEach(material => {
        cablecoattwofoil(material, 'neoprene', 36, 'polyvinyl_chloride', 'polyphenylene_sulfide')
         });
    ZPM_wirematerials.forEach(material => {
        cablecoattwofoil(material, 'neoprene', 72, 'polyvinyl_chloride', 'polyphenylene_sulfide')
         });
    UV_wirematerials.forEach(material => {
        cablecoattwofoil(material, 'neoprene', 72, 'polyvinyl_chloride', 'polyphenylene_sulfide')
         });
    UHV_UIV_wirematerials.forEach(material => {
        cablecoatthreefoil(material, 'neoprene', 144, 'polyvinyl_chloride', 'polyphenylene_sulfide', 'xlpe')
         });
    /* // Molten Kevlar Recipes
    UXV_MAX_wirematerials.forEach(material => {
        cablecoatthreefoil(material, 'meta_stable_molten_kevlar', 144, 'polyvinyl_chloride', 'polyphenylene_sulfide', 'xlpe')
         });
    */     
})