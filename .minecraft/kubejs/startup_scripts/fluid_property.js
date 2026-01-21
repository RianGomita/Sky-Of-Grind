const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');

GTCEuStartupEvents.registry('gtceu:material', event => {
    addFluid(GTMaterials.Nihonium, $FluidStorageKeys.LIQUID);
    addFluid(GTMaterials.Diamond, $FluidStorageKeys.LIQUID);
    addFluid(GTMaterials.Californium, $FluidStorageKeys.LIQUID); // Can be LIQUID, GAS, PLASMA or MOLTEN
    addFluid(GTMaterials.Oganesson, $FluidStorageKeys.GAS);
    addFluid(GTMaterials.Neptunium, $FluidStorageKeys.GAS);
    addFluid(GTMaterials.Cadmium, $FluidStorageKeys.LIQUID); 
    addFluid(GTMaterials.Thallium, $FluidStorageKeys.LIQUID);
})


let addFluid = (material, key) => {
    let prop = new $FluidProperty();
    prop.getStorage().enqueueRegistration(key, new $FluidBuilder());
    material.setProperty(PropertyKey.FLUID, prop);
}