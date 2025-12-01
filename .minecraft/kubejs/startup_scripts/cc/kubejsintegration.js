// priority: 0
// The following code was last updated: May 3rd 2024

const Double = Java.loadClass("java.lang.Double")
const Integer = Java.loadClass("java.lang.Integer")
const Optional = Java.loadClass("java.util.Optional")

const GTCapabilityHelper = Java.loadClass("com.gregtechceu.gtceu.api.capability.GTCapabilityHelper")
const IntCircuitBehaviour = Java.loadClass("com.gregtechceu.gtceu.common.item.IntCircuitBehaviour")
const LargeTurbineMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.generator.LargeTurbineMachine")
const RotorHolderPartMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.part.RotorHolderPartMachine")

// This function is a shortcut allowing to get
// directly the MetaMachine field without having
// to repeat the same code inside our testers/methods
function metaMachineWrapper (cb) {
    return function (block, dir, args, computer, ctx) {
        if (!block || !block.entity || !block.entity.metaMachine) return false
        return cb(block.entity.metaMachine, block, dir, args, computer, ctx)
    }
}

// Also a shortcut to get/find the RotorHolder
// among the large turbine multiblock parts.
function getRotorHolder (turbineMachine) {
    if (!(turbineMachine instanceof LargeTurbineMachine)) return null

    for (let part of turbineMachine.getParts()) {
        if (part.getClass() == RotorHolderPartMachine) {
          return part
        } 
    } 
    return null
}

function toInt (param) {
    if (param == null) return null
    if (param instanceof Double && Math.floor(param) === param)
        return Integer.valueOf(param.intValue())
    else
        throw new Error("The param value '" + param + "' must be a valid integer")
}
function nullifyUndefined (param) {
    return param === undefined ? null : param
}
function opt (param) {
    return Optional.ofNullable(nullifyUndefined(param))
}

ComputerCraftEvents.peripheral(event => {
    // Example use of the registerPeripheral method by
    // providing a regex pattern to match GTCEu wires & cables
    event.registerPeripheral("gt_cable", /^gtceu:.*_(wire|cable)$/)
        .mainThreadMethod("getAverageVoltage", (block) => {
            if (!block.entity) return 0;
            return block.entity.averageVoltage
        })
        .mainThreadMethod("getAverageAmperage", (block) => {
            if (!block.entity) return 0;
            return block.entity.averageAmperage
        })
        .mainThreadMethod("getAverageFlowingCurrent", (block) => {
            if (!block.entity) return 0;
            return block.entity.averageVoltage * block.entity.averageAmperage
        })

    // registerComplexPeripheral is another way of registering
    // a peripheral toward many blocks sharing a capability/feature
    // checked inside a custom test function returning only true or false.
    event.registerComplexPeripheral("gt_energy_container", metaMachineWrapper((machine) => {
        return !!(machine.energyContainer)
    }))
        .mainThreadMethod("getEnergyStored", metaMachineWrapper((machine) => {
            return machine.energyContainer.energyStored
        }))
        .mainThreadMethod("getEnergyCapacity", metaMachineWrapper((machine) => {
            return machine.energyContainer.energyCapacity
        }))
        .mainThreadMethod("getOutputPerSec", metaMachineWrapper((machine) => {
            return machine.energyContainer.getOutputPerSec()
        }))
        .mainThreadMethod("getInputPerSec", metaMachineWrapper((machine) => {
            return machine.energyContainer.getInputPerSec()
        }))

    // GTCapabilityHelper.getXXX() is another handy way to get
    // capability handlers directly, but we suspect it might
    // take more resources than our custom metaMachineWrapper.
    event.registerComplexPeripheral("gt_workable", (block) => !!GTCapabilityHelper.getWorkable(block.level, block.pos, null))
        .mainThreadMethod("getProgress", (block, dir) => GTCapabilityHelper.getWorkable(block.level, block.pos, dir).progress)
        .mainThreadMethod("getMaxProgress", (block, dir) => GTCapabilityHelper.getWorkable(block.level, block.pos, dir).maxProgress)
        .mainThreadMethod("isActive", (block, dir) => GTCapabilityHelper.getWorkable(block.level, block.pos, dir).isActive())

    event.registerComplexPeripheral("gt_controllable", (block) => !!GTCapabilityHelper.getControllable(block.level, block.pos, null))
        .mainThreadMethod("isWorkingEnabled", (block, dir) => GTCapabilityHelper.getControllable(block.level, block.pos, dir).isWorkingEnabled())
        .mainThreadMethod("setWorkingEnabled", (block, dir, args) => GTCapabilityHelper.getControllable(block.level, block.pos, dir).setWorkingEnabled(!!args[0]) || "OK")

    event.registerComplexPeripheral("gt_overclockable", (block) => !!GTCapabilityHelper.getWorkable(block.level, block.pos, null))
        .mainThreadMethod("getOverclockTier", (block, dir) => GTCapabilityHelper.getWorkable(block.level, block.pos, dir).getOverclockTier())
        .mainThreadMethod("getOverclockVoltage", (block, dir) => GTCapabilityHelper.getWorkable(block.level, block.pos, dir).getOverclockVoltage())
        .mainThreadMethod("getMaxOverclockTier", (block, dir) => GTCapabilityHelper.getWorkable(block.level, block.pos, dir).getMaxOverclockTier())
        .mainThreadMethod("getMinOverclockTier", (block, dir) => GTCapabilityHelper.getWorkable(block.level, block.pos, dir).getMinOverclockTier())
        .mainThreadMethod("setOverclockTier", (block, dir, args) => GTCapabilityHelper.getWorkable(block.level, block.pos, dir).setOverclockTier(toInt(args[0])) || "OK")

    // This one feels like magic: it allows to get/set the circuit number
    // used by the machine / bus. Keep in mind that `-1` means no circuit.
    event.registerComplexPeripheral("gt_circuit_machine", metaMachineWrapper((machine) => {
        return !!machine && !!machine.getCircuitInventory
    }))
        .mainThreadMethod("getProgrammedCircuit", metaMachineWrapper((machine) => {
            const stack = machine.getCircuitInventory().storage.getStackInSlot(0)
            if (stack == Item.empty) return -1;
            return IntCircuitBehaviour.getCircuitConfiguration(stack)
        }))
        .mainThreadMethod("setProgrammedCircuit", metaMachineWrapper((machine, block, _, args) => {
            const storage = machine.getCircuitInventory().storage
            if (args[0] == -1)
                storage.setStackInSlot(0, Item.empty)
            else
                storage.setStackInSlot(0, IntCircuitBehaviour.stack(toInt(args[0])))

            storage.onContentsChanged(0);
            return "OK"
        }))

    event.registerComplexPeripheral("gt_distinct_part", metaMachineWrapper((machine) => {
        return !!machine && !!machine.setDistinct
    }))
        .mainThreadMethod("isDistinct", metaMachineWrapper(machine => machine.isDistinct()))
        .mainThreadMethod("setDistinct", metaMachineWrapper((machine, block, _, args) => machine.setDistinct(!!args[0]) || "OK"))

    // This one is the most complex one, it allows to manage
    // a large turbine (steam/gas/plasma) and get information
    // about its rotor power/durability/efficiency/speed.
    event.registerComplexPeripheral("gt_turbine_rotor", metaMachineWrapper((machine) => {
        return !!machine && (machine instanceof LargeTurbineMachine)
    }))
        .mainThreadMethod("getOverclockVoltage", metaMachineWrapper((machine) => {
            return machine.getOverclockVoltage()
        }))
        .mainThreadMethod("getCurrentProduction", metaMachineWrapper((machine) => {
            const rotor = getRotorHolder(machine)
            if (!rotor) return 0;
            let voltage = machine.getOverclockVoltage()
            let speed = rotor.getRotorSpeed()
            let maxSpeed = rotor.getMaxRotorHolderSpeed()
            if (speed >= maxSpeed) return voltage

            return Math.floor(voltage * JavaMath.pow(speed / maxSpeed, 2))
        }))
        .mainThreadMethod("getRotorDurability", metaMachineWrapper((machine) => {
            const rotor = getRotorHolder(machine)
            return rotor && rotor.getRotorDurabilityPercent()
        }))
        .mainThreadMethod("hasRotor", metaMachineWrapper((machine) => {
            const rotor = getRotorHolder(machine)
            return rotor && rotor.hasRotor()
        }))
        .mainThreadMethod("getRotorEfficiency", metaMachineWrapper((machine) => {
            const rotor = getRotorHolder(machine)
            return rotor && rotor.getRotorEfficiency()
        }))
        .mainThreadMethod("getRotorPower", metaMachineWrapper((machine) => {
            const rotor = getRotorHolder(machine)
            return rotor && rotor.getRotorPower()
        }))
        .mainThreadMethod("getRotorSpeed", metaMachineWrapper((machine) => {
            const rotor = getRotorHolder(machine)
            return rotor && rotor.getRotorSpeed()
        }))
        .mainThreadMethod("getMaxRotorSpeed", metaMachineWrapper((machine) => {
            const rotor = getRotorHolder(machine)
            return rotor && rotor.getMaxRotorHolderSpeed()
        }))
         /**
         * In order to use the three following methods, you'll need to declare those
         * variables in the top-level of your script (that's the very first lines):
         * const InventoryMethodsClass = Java.loadClass("dan200.computercraft.shared.peripheral.generic.methods.InventoryMethods")
         * const InventoryMethods = new InventoryMethodsClass()
         */
        .mainThreadMethod("insertRotor", metaMachineWrapper((machine, block, dir, args, computer) => {
            if (args.length < 2)
                throw new Error("insertRotor(fromInvPeriphName, fromSlot)\n" +
                    "If you use a modem network, the inventory peripheral must be connected on that network.")
            
            const rotor = getRotorHolder(machine)
            if (rotor) {
                const invHandler = rotor.holder.getCapability(ForgeCapabilities.ITEM_HANDLER).resolve().get()
                InventoryMethods.pullItems.apply(InventoryMethods, [invHandler, computer, args[0], toInt(args[1]), opt(toInt(1)), opt(toInt(1))])

                return 1
            }
        }))
        .mainThreadMethod("extractRotor", metaMachineWrapper((machine, block, dir, args, computer) => {
            if (args.length < 1)
                throw new Error("extractRotor(toInvPeriphName[, toSlot])\n" +
                    "If you use a modem network, the inventory peripheral must be connected on that network.\n" +
                    "The inventory peripheral must have one free slot to put the current rotor.")
            
            const rotor = getRotorHolder(machine)
            if (rotor) {
                const invHandler = rotor.holder.getCapability(ForgeCapabilities.ITEM_HANDLER).resolve().get()
                return InventoryMethods.pushItems.apply(InventoryMethods, [invHandler, computer, args[0], toInt(1), opt(toInt(1)), opt(toInt(args[1]))])
            }
        }))
        .mainThreadMethod("hotswapRotor", metaMachineWrapper((machine, block, dir, args, computer) => {
            if (args.length < 2)
                throw new Error("hotswapRotor(fromInvPeriphName, fromSlot)\n" +
                    "If you use a modem network, the inventory peripheral must be connected on that network.\n" +
                    "The inventory peripheral must have one free slot to put the current rotor during the swap.")

            const rotor = getRotorHolder(machine)
            if (rotor) {
                const invHandler = rotor.holder.getCapability(ForgeCapabilities.ITEM_HANDLER).resolve().get()
                InventoryMethods.pushItems.apply(InventoryMethods, [invHandler, computer, args[0], toInt(1), opt(toInt(1)), opt(null)])
                return InventoryMethods.pullItems.apply(InventoryMethods, [invHandler, computer, args[0], toInt(args[1]), opt(toInt(1)), opt(toInt(1))])
            }
        }))
})