// Copyright (c) Microsoft. All rights reserved.

/*global log*/
/*global updateState*/
/*global sleep*/
/*jslint node: true*/

"use strict";

// Default state
var state = {
    // reboot just changes whether the device is on or offline
    online: true
};

/**
 * Entry point function called by the method.
 *
 * @param context        The context contains current time, device model and id
 * @param previousState  The device state since the last iteration
 */
/*jslint unparam: true*/
function main(context, previousState) {

    // Reboot - devices goes offline and comes online after 20 seconds
    log("Executing SwitchOn simulation function.");

    state.DeviceMethodStatus = "Switching MTU-engine ON...";
    state.CalculateRandomizedTelemetry = true;
    state.online = true;
    // update the state to online
    updateState(state);

    // Sleep for 15 seconds
    sleep(5000);

    state.DeviceMethodStatus = "Successfully switched ON the MTU-engine.";
    updateState(state);

}
