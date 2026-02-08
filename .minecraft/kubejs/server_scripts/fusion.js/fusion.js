ServerEvents.recipes(sog => {

        // C A S I N G S   A N D   B L O C K S

sog.recipes.gtceu.assembler('fusion_glass_mk2')
.itemInputs('8x gtceu:resonant_essence_plate', 'gtceu:fusion_glass', '8x gtceu:draconium_plate', '16x gtceu:neutron_reflector', '256x gtceu:neutronium_foil')
.inputFluids('gtceu:peek 1000')
.itemOutputs('2x kubejs:fusion_glass_mk2')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.duration(400)
.EUt(GTValues.VA[GTValues.UEV]);
sog.recipes.gtceu.assembler('fusion_coil_mk2')
.itemInputs('8x gtceu:resonant_essence_plate', '2x gtceu:superconducting_coil', '2x gtceu:uv_field_generator', '4x gtceu:uv_electric_pump', '8x gtceu:neutron_reflector', '4x #gtceu:circuits/uhv', '4x gtceu:crystal_matrix_huge_fluid_pipe', '4x gtceu:draconium_plate')
.inputFluids('gtceu:peek 1000')
.itemOutputs('2x kubejs:fusion_coil_mk2')
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
.duration(100)
.EUt(GTValues.VA[GTValues.UEV]);
sog.recipes.gtceu.assembler('fusion_casing_mk4')
.itemInputs('2x gtceu:uev_machine_casing', 'kubejs:fusion_coil_mk2', '4x kubejs:uev_voltage_coil', '2x gtceu:uv_field_generator', '8x gtceu:neutron_reflector', '1x #gtceu:circuits/uev', '4x gtceu:crystal_matrix_huge_fluid_pipe', '12x gtceu:draconium_plate')
.inputFluids('gtceu:peek 1000')
.itemOutputs('2x kubejs:fusion_casing_mk4')
.cleanroom(CleanroomType.STERILE_CLEANROOM)
.duration(100)
.EUt(GTValues.VA[GTValues.UEV]);

sog.recipes.gtceu.assembly_line('fusion_reactor_mk4')
.itemInputs('kubejs:fusion_coil_mk2', '4x #gtceu:circuits/uev', '64x gtceu:gravi_star', '16x gtceu:double_draconium_plate', '8x gtceu:uhv_field_generator', '64x kubejs:highly_resonative_soc', '32x gtceu:draconium_single_wire', '32x gtceu:fine_hypoxylon_wire')
.itemOutputs('gtceu:uev_fusion_reactor')
.inputFluids(
  Fluid.of('gtceu:condensed_star_matter', 5950),
  Fluid.of('gtceu:peek', 1152),
  Fluid.of('gtceu:neoprene', 1152),
  Fluid.of('gtceu:crystal_matrix', 10152),
)
.stationResearch(b => b.researchStack(Item.of('gtceu:uv_fusion_reactor')).EUt(GTValues.VA[GTValues.UEV]).CWUt(256)) // 
.duration(1000)
.EUt(GTValues.VA[GTValues.UEV])





sog.recipes.gtceu.fusion_reactor('crystal_matrix')
.inputFluids('gtceu:diamond 288', 'gtceu:radon 144')
.outputFluids('gtceu:crystal_matrix 144')
.fusionStartEU(640000000)
.EUt((GTValues.VA[GTValues.UEV]))
.totalCWU(64*5)
.CWUt(64)
    sog.recipes.gtceu.fusion_reactor('cosmic_titanium')
            .inputFluids('gtceu:titanium 350', 'gtceu:resonant_essence 16')
            .outputFluids('gtceu:cosmic_titanium 32')
            .fusionStartEU(640000000)
            .EUt((GTValues.VA[GTValues.UEV]))
            .totalCWU(64*5)
            .CWUt(64)
    sog.recipes.gtceu.fusion_reactor('cosmic_tungsten')
            .inputFluids('gtceu:tungsten 350', 'gtceu:resonant_essence 16')
            .outputFluids('gtceu:cosmic_tungsten 32')
            .fusionStartEU(640000000)
            .EUt((GTValues.VA[GTValues.UEV]))
            .totalCWU(64*5)
            .CWUt(64)
    sog.recipes.gtceu.fusion_reactor('cosmic_iridium')
            .inputFluids('gtceu:stabilized_iridium 350', 'gtceu:resonant_essence 16')
            .outputFluids('gtceu:cosmic_iridium 32')
            .fusionStartEU(640000000)
            .EUt((GTValues.VA[GTValues.UEV]))
            .totalCWU(64*5)
            .CWUt(96)
    sog.recipes.gtceu.fusion_reactor('cosmic_osmium')
            .inputFluids('gtceu:osmium 355', 'gtceu:resonant_essence 16')
            .outputFluids('gtceu:cosmic_osmium 32')
            .fusionStartEU(640000000)
            .EUt((GTValues.VA[GTValues.UEV]))
            .totalCWU(64*5)
            .CWUt(64)
    sog.recipes.gtceu.fusion_reactor('nihonium')
            .inputFluids('gtceu:zinc 255', 'gtceu:bismuth 120')
            .outputFluids('gtceu:nihonium 256')
            .fusionStartEU(640000000)
            .EUt((GTValues.VA[GTValues.UEV]))
            .totalCWU(256*5)
            .CWUt(256)
    sog.recipes.gtceu.fusion_reactor('oganesson')
            .inputFluids('gtceu:californium 255', 'gtceu:cosmic_iridium 35')
            .outputFluids('gtceu:oganesson 256')
            .fusionStartEU(640000000)
            .EUt((GTValues.VA[GTValues.UEV]))
            .totalCWU(256*5)
            .CWUt(256)



})