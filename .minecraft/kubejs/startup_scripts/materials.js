

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('infinity').parent(GTMaterialIconSet.SHINY)
    event.create('space_time').parent(GTMaterialIconSet.SHINY)
    event.create('infinity_catalyst').parent(GTMaterialIconSet.FINE)
    event.create('atomic_alloy').parent(GTMaterialIconSet.BRIGHT)
    event.create('cosmic_neutronium').parent(GTMaterialIconSet.BRIGHT)
    event.create('universium').parent(GTMaterialIconSet.METALLIC)
    event.create('stellar_matter').parent(GTMaterialIconSet.METALLIC)
    event.create('cosmic_matter').parent(GTMaterialIconSet.METALLIC)
    event.create('eternity').parent(GTMaterialIconSet.METALLIC)
})

GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('infinity')
        .protons(168)
        .neutrons(316)
        .symbol('∞');
    event.create('crystal_matrix')
        .protons(6)
        .neutrons(6)
        .symbol('C*');
    event.create('stabilized_iridium')
        .protons(77)
        .neutrons(116)
        .symbol('Ir₁₉Os₈(Nc(Cr₇Nt₄)₈)(PbR(Pb₆Pt₂Rn₁))₁)');
    event.create('neutronic_chromite')
        .protons(24)
        .neutrons(34)
        .symbol('Nc(Cr₇Nt₄)');
    event.create('radium_infused_lead')
        .protons(82)
        .neutrons(125)
        .symbol('PbR(Pb₆Pt₂Rn₁)');
    event.create('californite')
        .protons(98)
        .neutrons(151)
        .symbol('Cf₁₉(Si(Ir₁₉Os₈(Nc(Cr₇Nt₄)₈)(PbR(Pb₆Pt₂Rn₁))₁)₈)');
    event.create('hypoxylon')
        .protons(112)
        .neutrons(174)
        .symbol('Xy');
    event.create('antimatter')
        .protons(1000)
        .neutrons(1000)
        .symbol('A');
    event.create('draconium')
        .protons(4043)
        .neutrons(10750)
        .symbol('Dn₁₉(Xy₅Ir₈(Si(Ir₁₉Os₈(Nc(Cr₇Nt₄)₈)(PbR(Pb₆Pt₂Rn₁))₁)₈)RuKe₈AmNt₂O₈A₂)');
    event.create('triplatirium_235')
        .protons(382)
        .neutrons(395)
        .symbol('Tr₂₃₅(U₂₃₅UPt₃Dr)');
    event.create('atomic_alloy')
        .protons(705)
        .neutrons(1784)
        .symbol('Cf₇(Tr₂₃₅(U₂₃₅UPt₃Dr))₀.₅₀');
    event.create('star_matter')
        .protons(10)
        .neutrons(15)
        .symbol('Sm₁₀(H₅He₃C₂)');
    event.create('condensed_star_matter')
        .protons(1510)
        .neutrons(2226)
        .symbol('CsaM₁₅₁₀(SM₁₀(H₅He₃C₂))₁₄₄(NaK₁₂)(C₂H₆OSi)'); 
    event.create('awakened_draconium')
        .protons(61)
        .neutrons(82)
        .symbol('*Dn*');      
    event.create('chaos')
        .protons(50)
        .neutrons(75)
        .symbol('Ch');
    event.create('cosmic_matter')
        .protons(199)
        .neutrons(99)
        .symbol('CoM');
        //  ₂₃₄₅₆₇₈₉₀
})


GTCEuStartupEvents.registry('gtceu:material', event => {
    
    const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
    const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
    const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');

GTMaterials.Neutronium.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_DENSE)
GTMaterials.StainlessSteel.addFlags(GTMaterialFlags.GENERATE_DENSE)

GTMaterials.Californium.setProperty(PropertyKey.DUST, new $DustProperty());

GTMaterials.Nihonium.setProperty(PropertyKey.DUST, new $DustProperty());
GTMaterials.Nihonium.setProperty(PropertyKey.INGOT, new $IngotProperty());



    event.create('star_matter')
        .ingot().fluid()
        .element('star_matter')
        .cableProperties(GTValues.V[GTValues.IV], 128, 0, true)
        .color(0x0059ff)
    event.create('mercury_vapor')
        .fluid()
        .color(0xd7d7db)
    event.create('inert_life_essence')
        .fluid()
        .color(0xe0bcc3)
    event.create('raw_life_essence')
        .liquid()
        .color(0xa8979a)
    event.create('processed_life_essence')
        .liquid()
        .color(0xff7878)
    event.create('processed_naquadria_sulfate')
        .liquid()
        .color(0x82ff82)
    event.create('acidic_processed_naquadria_sulfate')
        .liquid()
        .color(0xc5ff82)
    event.create('acidic_naquadria_fuel_solution')
        .liquid()
        .color(0xc5ff82)
    event.create('impure_naquadria_fuel')
        .liquid()
        .color(0x6d9c76)
    event.create('pure_naquadria_fuel')
        .liquid()
        .color(0x426148)
	event.create('enriched_naquadria_fuel_base')
	    .liquid()
        .color(0x4d8258)
	event.create('lightly_plasmacracked_enriched_naquadria_fuel_base')
        .liquid()
        .color(0x378e49)
	event.create('severly_plasmacracked_enriched_naquadria_fuel_base')
        .liquid()
        .color(0x426148)
	event.create('enriched_naquadah_fuel_waste')
        .liquid()
        .color(0x61a870)
	event.create('light_naquadria_fuel')
        .liquid()
        .color(0x6cd482)
	event.create('treated_light_naquadria_fuel')
        .liquid()
        .color(0x72e389)
	event.create('light_naquadria_fuel_waste')
        .liquid()
        .color(0x72b27f)
	event.create('heavy_naquadria_fuel')
        .liquid()
        .color(0x4f7958)
	event.create('heavy_naquadria_fuel_waste')
        .liquid()
        .color(0x415846)
	event.create('treated_heavy_naquadria_fuel')
        .liquid()
        .color(0x6daa7a)
	event.create('super_dense_naquadria_fuel')
        .liquid()
        .color(0x224e2c)		
	event.create('treated_super_dense_naquadria_fuel')
        .liquid()
        .color(0x2d703c)
	event.create('liquid_nitrogen')
        .liquid()
        .color(0x42d0d0)
	event.create('super_dense_hog')
        .liquid()
        .color(0x9b792f)
	event.create('depleted_thorium_fuel')
        .liquid()
        .color(0x9b792f)
	event.create('unstable_enriched_thorium_fuel')
        .liquid()
        .color(0x2c4022)
	event.create('lightly_plasmacracked_unstable_enriched_thorium_fuel')
        .liquid()
        .color(0x2d5519)
	event.create('severly_plasmacracked_unstable_enriched_thorium_fuel')
        .liquid()
        .color(0x153007)
	event.create('hot_stabilized_enriched_thorium_fuel')
        .liquid()
        .color(0x1b350e)
	event.create('stabilized_enriched_thorium_fuel')
        .liquid()
        .color(0x253f17)
	event.create('very_unstable_hyper_enriched_thorium_fuel')
        .liquid()
        .color(0x132e04)
	event.create('hot_meta_stable_hyper_enriched_thorium_fuel')
        .liquid()
        .color(0x234d0b)
	event.create('meta_stable_hyper_enriched_thorium_fuel')
        .liquid()
        .color(0x16250d)
	event.create('naquadria_fuel_mixture_mk2')
        .liquid()
        .color(0x4fad63)
	event.create('naquadria_fuel_mixture_mk3')
        .liquid()
        .color(0x348045)
	event.create('naquadria_fuel_mk2')
        .liquid()
        .color(0x1c4525)
	event.create('naquadria_fuel_mk3')
        .liquid()
        .color(0x063e13)
    event.create('naquadria_plasma')
        .plasma()
        .color(0x426148)
	event.create('naquadria_plasma_mk2')
        .plasma()
        .color(0x5e8866)
	event.create('naquadria_plasma_mk3')
        .plasma()
        .color(0x87bf92)
	event.create('thorium_plasma')
        .plasma()
        .color(0x09170c)
	event.create('naquadria_mk1_fuel_waste')
        .liquid()
        .color(0x2f4332)
	event.create('naquadria_mk2_fuel_waste')
        .liquid()
        .color(0x2f4934)
	event.create('naquadria_mk3_fuel_waste')
        .liquid()
        .color(0x769377)
    event.create('resonant_naquadah')
        .ingot().fluid().dust()
        .ore(1, 1,)
        .color(0x2b3d2d)
        .blastTemp(9100) 
        .cableProperties(GTValues.V[GTValues.UV], 128, 2, true)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING

        )
        event.create("crystal_matrix")
        .ingot().fluid()
        .color(0x66ffff)
        .iconSet('shiny')
        .fluidPipeProperties(100000, 64000, true, true, true, true)
        .cableProperties(GTValues.V[GTValues.UHV], 256, 0, true)
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_DENSE);
        event.create('infinity')
        .ingot()
        .element(GTElements.get("infinity"))
        .color(0xffffff)
        .iconSet('infinity')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD,  GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE)
        event.create('infinity_catalyst')
        .dust()
        .element(GTElements.get("infinity_catalyst"))
        .color(0xffffff)
        .iconSet('infinity_catalyst')
        .ore(1, 1,)

    event.create("triplatirium_235")
        .ingot().fluid().dust()
        .element('triplatirium_235')
        .blastTemp(10800)
        .color(0x47ffaf)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.NO_SMELTING);

    event.create("atomic_alloy")
        .ingot().dust()
        .blastTemp(10800)
        .element('atomic_alloy')
        .color(0x513499)
        .iconSet('bright')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.NO_SMELTING);

    event.create("triplatirium_sulfate")
        .fluid()
        .color(0xbff52a)
    event.create("processed_triplatirium_sulfate")
        .fluid()
        .color(0x97ba38)
    event.create("trisulfate_slurry")
        .fluid()
        .color(0xbaa238)
    event.create("cleaned_trisulfate_slurry")
        .fluid()
        .color(0xcfbd70)
    event.create("trisulfate_solution")
        .fluid()
        .color(0xa9ccc7)
    event.create("pure_trisulfate_solution")
        .fluid()
        .color(0xc8dedb)
    event.create("trisulfate_waste")
        .fluid()
        .color(0x303635)
    event.create("californium_sulfate")
        .fluid()
        .color(0x99997c)
    event.create("processed_californium_sulfate")
        .fluid()
        .color(0x7c8799)
    event.create("cleaned_californium")
        .dust()
        .color(0xa3b2c9)
    event.create("condensed_star_matter")
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element('condensed_star_matter')
        .color(0xffffff)
    event.create("antimatter")
        .liquid().ingot()
        .color(0x8f34eb)
        .element('antimatter')
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.NO_SMELTING);
    event.create('reactable_fissioned_matter')
        .plasma()
        .color(0x270a4d)
        event.create('cosmic_neutronium')
        .ingot().dust()
        .color(0x161616)
        .ore(1, 1,)
        .element('cosmic_neutronium')
        .iconSet('radioactive')
        .blastTemp(13000, 'highest', 2097152, 2400)
        .cableProperties(GTValues.V[GTValues.OpV], 999, 0, true)
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
            GTMaterialFlags.GENERATE_ROD, 
            GTMaterialFlags.GENERATE_GEAR, 
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FRAME, 
            GTMaterialFlags.GENERATE_DENSE, 
            GTMaterialFlags.GENERATE_ROTOR, 
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_ROUND,
            GTMaterialFlags.GENERATE_SPRING
        )
    event.create('heavy_duty_alloy_t1')
        .ingot().dust()
        .color(0x333e47)
        .blastTemp(10000)
        .cableProperties(GTValues.V[GTValues.EV], 32, 0, true)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.NO_SMELTING)
    event.create('heavy_duty_alloy_t2')
        .ingot().dust()
        .color(0xfbff00)
        .blastTemp(10000)
        .iconSet('metallic')
        .cableProperties(GTValues.V[GTValues.LuV], 64, 0, true)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.NO_SMELTING)
    event.create('heavy_duty_alloy_t3')
        .ingot().dust()
        .color(0xb2a7d4)
        .blastTemp(10000)
        .cableProperties(GTValues.V[GTValues.UHV], 1024, 0, true)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.NO_SMELTING)
        event.create('heavy_duty_alloy_t4')
        .ingot().dust().fluid()
        .color(0x17e0ff)
        .cableProperties(GTValues.V[GTValues.UXV], 24, 0, true)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE)
    event.create('mixed_alloy')
        .ingot().dust()
        .color(0xe8c492)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE)
    event.create('kaemite')
        .ingot().dust().liquid()
        .color(0x00cfff)
        .ore(1, 1,)
        .element('kaemite')
        .iconSet('metallic')
        .cableProperties(GTValues.V[GTValues.UEV], 32, 0, true)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME)
    event.create('acidic_venus_residue')
        .liquid()
        .color(0x944e09)
    event.create('resonant_essence_residue')
        .liquid()
        .color(0x099409)
    event.create('resonant_essence')
        .ingot().dust().fluid()
        .color(0x8ceb34)
        .ore(1, 1,)
        .blastTemp(12000)
        .element('resonant_essence')
        .iconSet('bright')
        .cableProperties(GTValues.V[GTValues.UEV], 256, 0, true)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create('energized_superconductor')
        .ingot().dust()
        .color(0xffa600)
        .iconSet('bright')
        .cableProperties(GTValues.V[GTValues.LV], 4, 0, true)
    event.create('hsc_superconductor')
        .ingot().dust()
        .color(0x3f403d)
        .iconSet('bright')
        .cableProperties(GTValues.V[GTValues.MV], 8, 0, true)
    event.create('platium_superconductor')
        .ingot().dust()
        .color(0xff0000)
        .iconSet('bright')
        .cableProperties(GTValues.V[GTValues.HV], 16, 0, true)
    event.create('tilrunum_superconductor')
        .ingot().dust()
        .color(0xd1dced)
        .iconSet('bright')
        .cableProperties(GTValues.V[GTValues.EV], 32, 0, true)
        event.create('crystal_superconductor')
        .ingot().dust()
        .color(0x6200ff)
        .iconSet('bright')
        .cableProperties(GTValues.V[GTValues.ZPM], 32, 0, true)
        event.create('teslarium')
        .ingot().dust()
        .color(0x4800bd)
        .iconSet('shiny')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE)
        // B A C T E R I A L   S T U F F

        event.create("raw_bacterial_dna")
        .fluid()
        .color(0xf595eb)
        event.create("overgrown_bacterial_dna")
        .fluid()
        .color(0x95f5d0)
        event.create("panaeolus_cyanescens")
        .fluid()
        .color(0x3a5963)
        event.create("streptomyces_coelicolor")
        .fluid()
        .color(0x3a6353)
        event.create("pcr_its1_its2")
        .fluid()
        .color(0xdb393e)
        event.create("streptomyces_peucetius")
        .fluid()
        .color(0xdb3962)
        event.create("taq_polymerase")
        .fluid()
        .color(0x082b06)
        event.create("doxorubicin")
        .fluid()
        .color(0x062b18)
        event.create("phage")
        .fluid()
        .color(0x148f50)
        event.create("bacterium")
        .fluid()
        .color(0xe310b9)
        event.create("bacterial_dna")
        .fluid()
        .color(0xff0066)
        event.create("mycena_hypsizyga")
        .fluid()
        .color(0x00ff11)
        event.create("stropharic_hypoxylon")
        .fluid()
        .color(0x7a64f5)
        event.create("hypoxylon")
        .fluid().ingot().dust()
        .color(0x7c65fc)
        .element('hypoxylon')
        .iconSet('bright')
        .cableProperties(GTValues.V[GTValues.UXV], 64, 2, true)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.NO_ORE_SMELTING)
    
    event.create('draconium')
        .ingot().fluid()
        .ore(1, 1,)
        .color(0x7A42AE)
        .element('draconium')
        .iconSet('metallic')
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
            GTMaterialFlags.GENERATE_ROD, 
            GTMaterialFlags.GENERATE_GEAR, 
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FRAME, 
            GTMaterialFlags.GENERATE_DENSE, 
            GTMaterialFlags.GENERATE_ROTOR, 
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_LENS,
            GTMaterialFlags.GENERATE_ROUND,
        )
        .blastTemp(13000, 'highest', 2097152, 200)
        .cableProperties(GTValues.V[GTValues.UEV], 8, 4, false)
    
    event.create('awakened_draconium')
        .ingot().fluid()
        .ore(1, 1,)
        .color(0xFF6A00)
        .element('awakened_draconium')
        .iconSet('shiny')
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
            GTMaterialFlags.GENERATE_ROD, 
            GTMaterialFlags.GENERATE_GEAR, 
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FRAME, 
            GTMaterialFlags.GENERATE_DENSE, 
            GTMaterialFlags.GENERATE_ROTOR, 
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_ROUND
        )
        .blastTemp(15000, 'highest', 134217728, 3400)
        .cableProperties(GTValues.V[GTValues.UIV], 32, 4, false)
    
    event.create('californite')
        .ingot().fluid()
        .element('californite')
        .color(0xa0b0bd).secondaryColor(0x232020)
        .iconSet('radioactive')
        .flags(GTMaterialFlags.GENERATE_DENSE)
    event.create('stabilized_iridium')
        .ingot().fluid()
        .element('stabilized_iridium')
        .color(0x9deafa).secondaryColor(0x232020)
        .iconSet('radioactive')
        .blastTemp(13000, 'highest', 2097152, 200)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR)
        event.create('magnetic_stabilized_iridium')
        .ingot()
        .components('1x stabilized_iridium')
        .color(0x9deafa).secondaryColor(0x232020)
        .iconSet(GTMaterialIconSet.MAGNETIC)
        .ingotSmeltInto(GTMaterials.get('stabilized_iridium'))
        .arcSmeltInto(GTMaterials.get('stabilized_iridium'))
        .macerateInto(GTMaterials.get('stabilized_iridium'))
        .flags(GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.IS_MAGNETIC)

    event.create('neutronic_chromite')
        .ingot()
        .element('neutronic_chromite')
        .color(0xf5c6da).secondaryColor(0x232020)
        .iconSet('radioactive')
        .blastTemp(10500, 'highest', 524288, 900)
        .flags(GTMaterialFlags.GENERATE_PLATE)
    event.create('radium_infused_lead')
        .ingot()
        .element('radium_infused_lead')
        .color(0x52303e)
        .iconSet('shiny')
        .blastTemp(3500, 'highest', 2048, 900)
        .flags(GTMaterialFlags.GENERATE_PLATE)
    event.create('chaos')
        .gem()
        .ore(1, 1,)
        .element('chaos')
        .cableProperties(GTValues.V[GTValues.UIV], 512, 0, true)
        .color(0x010005)
        .iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_LENS, GTMaterialFlags.GENERATE_DENSE)
    
/// C O S M I C   M A T E R I A L S   F U S I O N
    
event.create('cosmic_tungsten')
.ingot().fluid()
.ore(1, 1,)
.element('cosmic_tungsten')
.color(0x04011c)
.iconSet('radioactive')
.blastTemp(13000, 'highest', 8388608, 900)
.flags(
    GTMaterialFlags.GENERATE_PLATE, 
    GTMaterialFlags.GENERATE_ROD, 
    GTMaterialFlags.GENERATE_GEAR, 
    GTMaterialFlags.GENERATE_FINE_WIRE,
    GTMaterialFlags.GENERATE_FRAME, 
    GTMaterialFlags.GENERATE_DENSE, 
    GTMaterialFlags.GENERATE_ROTOR, 
    GTMaterialFlags.GENERATE_BOLT_SCREW,
    GTMaterialFlags.GENERATE_SMALL_GEAR,
    GTMaterialFlags.GENERATE_LONG_ROD,
    GTMaterialFlags.GENERATE_ROUND
)
event.create('cosmic_titanium')
.ingot().fluid()
.ore(1, 1,)
.element('cosmic_titanium')
.color(0x3d0245)
.iconSet('radioactive')
.blastTemp(13000, 'highest', 8388608, 900)
.flags(
    GTMaterialFlags.GENERATE_PLATE, 
    GTMaterialFlags.GENERATE_ROD, 
    GTMaterialFlags.GENERATE_GEAR, 
    GTMaterialFlags.GENERATE_FINE_WIRE,
    GTMaterialFlags.GENERATE_FRAME, 
    GTMaterialFlags.GENERATE_DENSE, 
    GTMaterialFlags.GENERATE_ROTOR, 
    GTMaterialFlags.GENERATE_BOLT_SCREW,
    GTMaterialFlags.GENERATE_SMALL_GEAR,
    GTMaterialFlags.GENERATE_ROUND,
    GTMaterialFlags.GENERATE_LONG_ROD
)
event.create('cosmic_iridium')
.ingot().fluid()
.ore(1, 1,)
.element('cosmic_iridium')
.color(0x016646)
.iconSet('radioactive')
.blastTemp(13000, 'highest', 33554432, 900)
.flags(
    GTMaterialFlags.GENERATE_PLATE, 
    GTMaterialFlags.GENERATE_ROD, 
    GTMaterialFlags.GENERATE_GEAR, 
    GTMaterialFlags.GENERATE_FINE_WIRE,
    GTMaterialFlags.GENERATE_FRAME, 
    GTMaterialFlags.GENERATE_DENSE, 
    GTMaterialFlags.GENERATE_ROTOR, 
    GTMaterialFlags.GENERATE_BOLT_SCREW,
    GTMaterialFlags.GENERATE_SMALL_GEAR,
    GTMaterialFlags.GENERATE_ROUND,
    GTMaterialFlags.GENERATE_LONG_ROD
)
event.create('cosmic_osmium')
.ingot().fluid()
.ore(1, 1,)
.element('cosmic_osmium')
.color(0x023e45)
.iconSet('radioactive')
.blastTemp(13000, 'highest', 8388608, 900)
.flags(
    GTMaterialFlags.GENERATE_PLATE, 
    GTMaterialFlags.GENERATE_ROD, 
    GTMaterialFlags.GENERATE_GEAR, 
    GTMaterialFlags.GENERATE_FINE_WIRE,
    GTMaterialFlags.GENERATE_FRAME, 
    GTMaterialFlags.GENERATE_DENSE, 
    GTMaterialFlags.GENERATE_ROTOR, 
    GTMaterialFlags.GENERATE_BOLT_SCREW,
    GTMaterialFlags.GENERATE_LONG_ROD,
    GTMaterialFlags.GENERATE_SMALL_GEAR,
    GTMaterialFlags.GENERATE_ROUND
)


event.create("universium")
.liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
.ingot().dust()
.element(GTElements.get("universium"))
.color(0xffffff)
.iconSet('universium')
.flags(
    GTMaterialFlags.GENERATE_PLATE, 
    GTMaterialFlags.GENERATE_ROD, 
    GTMaterialFlags.GENERATE_GEAR, 
    GTMaterialFlags.GENERATE_FINE_WIRE,
    GTMaterialFlags.GENERATE_DENSE, 
    GTMaterialFlags.GENERATE_ROTOR, 
    GTMaterialFlags.GENERATE_BOLT_SCREW,
    GTMaterialFlags.GENERATE_SMALL_GEAR,
    GTMaterialFlags.GENERATE_ROUND,
    GTMaterialFlags.GENERATE_SPRING,
    GTMaterialFlags.GENERATE_FRAME
)
event.create("eternity")
.liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
.ingot().dust()
.element(GTElements.get("eternity"))
.color(0xffffff)
.iconSet('eternity')
.flags(
    GTMaterialFlags.GENERATE_PLATE, 
    GTMaterialFlags.GENERATE_ROD, 
    GTMaterialFlags.GENERATE_GEAR, 
    GTMaterialFlags.GENERATE_FINE_WIRE,
    GTMaterialFlags.GENERATE_DENSE, 
    GTMaterialFlags.GENERATE_ROTOR, 
    GTMaterialFlags.GENERATE_BOLT_SCREW,
    GTMaterialFlags.GENERATE_SMALL_GEAR,
    GTMaterialFlags.GENERATE_ROUND,
    GTMaterialFlags.GENERATE_SPRING,
    GTMaterialFlags.GENERATE_FRAME
)
event.create("molten_space_time")
.liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
.color(0xffffff)
event.create('space_time')
.ingot()
.element('space_time')
.color(0xffffff)
.iconSet('space_time')
.flags(
    GTMaterialFlags.GENERATE_PLATE,
    GTMaterialFlags.GENERATE_ROD,
    GTMaterialFlags.GENERATE_LONG_ROD,
    GTMaterialFlags.GENERATE_RING,
    GTMaterialFlags.GENERATE_ROUND,
    GTMaterialFlags.GENERATE_GEAR, 
    GTMaterialFlags.GENERATE_SMALL_GEAR,
    GTMaterialFlags.GENERATE_SPRING, 
    GTMaterialFlags.GENERATE_BOLT_SCREW, 
    GTMaterialFlags.PHOSPHORESCENT
)

event.create("stellar_matter_plasma")
.liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
.ingot().dust()
.element(GTElements.get("stellar_matter_plasma"))
.color(0xffffff)
.iconSet('stellar_matter')
.flags(
    GTMaterialFlags.GENERATE_PLATE, 
    GTMaterialFlags.GENERATE_ROD, 
    GTMaterialFlags.GENERATE_GEAR, 
    GTMaterialFlags.GENERATE_FINE_WIRE,
    GTMaterialFlags.GENERATE_DENSE, 
    GTMaterialFlags.GENERATE_ROTOR, 
    GTMaterialFlags.GENERATE_BOLT_SCREW,
    GTMaterialFlags.GENERATE_SMALL_GEAR,
    GTMaterialFlags.GENERATE_ROUND,
    GTMaterialFlags.GENERATE_SPRING,
    GTMaterialFlags.GENERATE_FRAME

)



// COSMIC LINE

event.create("raw_cosmic_matter")
.gas()
.color(0x000000) 
event.create("crude_astral_flux")
.plasma()
.color(0x2c00ad)
event.create("astral_flux") 
.plasma()
.color(0x4000ff)
event.create("hyper_ionized_helium")
.plasma()
.color(0xfff2ab)
event.create("infused_cosmic_matter")
.gas()
.color(0xaeabff)
event.create("stabilized_raw_cosmic_matter")
.gas()
.color(0x14004f)
event.create("cryo_compressed_raw_cosmic_matter")
.gas()
.color(0x00224f)
event.create("cryogenic_neutron_flow")
.liquid()
.color(0x00fff7)
event.create("shifted_cosmic_matter_base")
.gas()
.color(0x020078)
event.create("plasma_tempered_cosmic_matter_base") // Transcendental Plasma Nexus
.plasma()
.color(0x060040)
event.create("hyper_dense_cosmic_matter_base") // Large Synchrotron Switcher --
.plasma()
.color(0x020012)
event.create("refined_cosmic_matter") // Trascendental Plasma Nexus
.plasma()
.color(0x1c00ff)
event.create("cosmic_matter")
.liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill()) // Vacuum Freezer
.color(0xffffff)
event.create("pure_cosmic_matter")
.ingot().dust()
.element(GTElements.get("cosmic_matter"))
.color(0xffffff)
.iconSet('cosmic_matter')
.flags(
    GTMaterialFlags.GENERATE_PLATE, 
    GTMaterialFlags.GENERATE_ROD, 
    GTMaterialFlags.GENERATE_GEAR, 
    GTMaterialFlags.GENERATE_FINE_WIRE,
    GTMaterialFlags.GENERATE_DENSE, 
    GTMaterialFlags.GENERATE_ROTOR, 
    GTMaterialFlags.GENERATE_BOLT_SCREW,
    GTMaterialFlags.GENERATE_SMALL_GEAR,
    GTMaterialFlags.GENERATE_ROUND,
    GTMaterialFlags.GENERATE_SPRING,
    GTMaterialFlags.GENERATE_FRAME
)
 
// PLASMAS NEBULA

event.create("hypercharged_nebular") 
.plasma()
.color(0x1c03fc)
event.create("high_entropy_neptunium") 
.plasma()
.color(0x03a1fc)
event.create("supercritical_californium") 
.plasma()
.color(0xffffff)
event.create("hypercharged_oganesson") 
.plasma()
.color(0xa39672)
event.create("hypercharged_nihonium") 
.plasma()
.color(0x84a1e8)


event.create("astral_space_time_plasma")
.liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

event.create("quark_gluon")
    .plasma()
    .color(0xc7cdcdd)
event.create("degenerate_gluon_condensate")
    .liquid()
    .color(0xf7d0ed)

    })


    
