





GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    GTRecipeTypes.BLAST_RECIPES.setMaxIOSize(3, 3, 4, 1)
    })

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    GTRecipeTypes.ELECTROMAGNETIC_SEPARATOR_RECIPES.setMaxIOSize(1, 7, 0, 0)
    })




// Create New Begginings Code


GTCEuStartupEvents.materialModification(/*'gtceu:material',*/ event => {

    //Functions
        function ingot (material, item){
            TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(material), 
            () => Item.getItem(item))
        }
        function block (material, item){
            TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(material), 
            () => Item.getItem(item))
        }
        function nugget (material, item){
            TagPrefix.nugget['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(material), 
            () => Item.getItem(item))
        }
        function plate (material, item){
            TagPrefix.plate['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(material), 
            () => Item.getItem(item))
        }
        function dust (material, item){
            TagPrefix.dust['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(material), 
            () => Item.getItem(item))
        }
        function gem (material, item){
            TagPrefix.gem['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(material), 
            () => Item.getItem(item))
        }
        function gear (material, item){
            TagPrefix.gear['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(material), 
            () => Item.getItem(item))
        }
        function gemExquisite (material, item){
            TagPrefix.gemExquisite['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(material), 
            () => Item.getItem(item))
        }
        function gemFlawless (material, item){
            TagPrefix.gemFlawless['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(material), 
            () => Item.getItem(item))
        }
    
    //Ingots
        ingot('draconium', 'draconicevolution:draconium_ingot')
        ingot('awakened_draconium', 'draconicevolution:awakened_draconium_ingot')
        ingot('infinity', 'avaritia:infinity_ingot')
        ingot('cosmic_neutronium', 'avaritia:neutron_ingot')
    
    //Blocks
        block('draconium', 'draconicevolution:draconium_block')
        block('awakened_draconium', 'draconicevolution:awakened_draconium_block')
        block('infinity', 'avaritia:infinity_block')
        block('cosmic_neutronium', 'avaritia:neutron')
    
    //Nuggets
        nugget('draconium', 'draconicevolution:draconium_nugget')
        nugget('awakened_draconium', 'draconicevolution:awakened_draconium_nugget')
        nugget('cosmic_neutronium', 'avaritia:neutron_nugget')
    
    //Plates
    
    //Gear
        gear('cosmic_neutronium', 'avaritia:neutron_gear')

    //Dusts
        dust('draconium', 'draconicevolution:draconium_dust')
        dust('awakened_draconium', 'draconicevolution:awakened_draconium_dust')
        dust('chaos', 'draconicevolution:small_chaos_frag')
    //Gems
        gem('chaos', 'draconicevolution:medium_chaos_frag')
        gemExquisite('chaos', 'draconicevolution:chaos_shard')
        gemFlawless('chaos', 'draconicevolution:large_chaos_frag')
    //Iconsets
        GTMaterials.Neutronium.setMaterialIconSet(GTMaterialIconSet.RADIOACTIVE)
    })
    