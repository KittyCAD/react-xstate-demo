import { createMachine, createActor } from "xstate";

const toggleMachine = createMachine({
  initial: "inactive",
  states: {
    inactive: {
      on: {
        toggle: {
          target: "active",
        },
      },
    },
    active: {
      on: {
        toggle: {
          target: "inactive",
        },
      },
    },
  },
});

export const toggleActor = createActor(toggleMachine);
toggleActor.start();

// State transitions can come from anywhere, not just react
window.toggle = () => toggleActor.send({ type: "toggle" });
