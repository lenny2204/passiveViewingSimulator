import { initJsPsych } from 'jspsych';

import htmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';

import { 
    PsyanimApp, 
    PsyanimJsPsychPlugin,
    PsyanimJsPsychTrial,

} from 'psyanim2';

import PredatorPreyV2 from './PredatorPreyV2.js';

/**
 *  Handle user authentication and any other configuration
 */
const userID = 'Jason';
const experimentName = 'passiveViewingSimulator';

/**
 *  Setup Psyanim App
 */
PsyanimApp.Instance.run();

PsyanimApp.Instance.setCanvasVisible(false);

/**
 *  Setup PsyanimJsPsychPlugin
 */
PsyanimJsPsychPlugin.setUserID(userID);
PsyanimJsPsychPlugin.setExperimentName(experimentName);

/**
 *  Setup jsPsych experiment
 */
const jsPsych = initJsPsych();

let timeline = [];

// 'Welcome' trial
timeline.push({
    type: htmlKeyboardResponse,
    stimulus: "<p style='text-align:center'>Welcome to the experiment.  Press any key to begin.</p>",
});

// predator-prey scene trial
let predatorPreySceneTrial = new PsyanimJsPsychTrial(PredatorPreyV2, PredatorPreyV2.key);

timeline.push(predatorPreySceneTrial.jsPsychTrialDefinition);

// 'End' trial
timeline.push({
    type: htmlKeyboardResponse,
    stimulus: "<p style='text-align:center'>Congrats - you have completed your first experiment!  Press any key to end this trial.</p>",
});

jsPsych.run(timeline);