// Highland Milk Factory - Semantic Rule-Based Process Generator
// Generates 504 specific, highly realistic business process flows dynamically.

function getDeptContext(deptId) {
    const contexts = {
        1: { // DD&MP
            loc: "Pattipola DD&MP Regional Office",
            sys: "Milco Procurement Database (FMS)",
            role: "Field Extension Officer",
            metric: "Milk volume & fat content criteria"
        },
        2: { // Production
            loc: "Pattipola Factory Production Floor",
            sys: "SCADA Production Control System",
            role: "Shift Supervisor",
            metric: "Pasteurization & processing thresholds"
        },
        3: { // QA
            loc: "Pattipola Central Laboratory",
            sys: "LIMS (Laboratory Information Management System)",
            role: "QA Microbiologist/Chemist",
            metric: "SLSI 181 / ISO 22000 specifications"
        },
        4: { // Sales
            loc: "Regional Sales & Distribution Hub",
            sys: "Milco Dealer CRM Dashboard",
            role: "Regional Sales Manager",
            metric: "Monthly sales quotas & distributor limits"
        },
        5: { // Finance
            loc: "Pattipola Finance Division",
            sys: "Central ERP General Ledger",
            role: "Financial Controller",
            metric: "Approved budget & statutory tax compliance"
        },
        6: { // HR
            loc: "Factory HR Administration Office",
            sys: "Highland HRIS Portal",
            role: "HR Executive",
            metric: "Government service rules & union agreements"
        },
        7: { // Engineering
            loc: "Plant Engineering & Maintenance Workshop",
            sys: "CMMS (Computerized Maintenance Management System)",
            role: "Chief Engineer",
            metric: "Safety tolerances & MTBF targets"
        },
        8: { // Transport
            loc: "Factory Transport & Dispatch Bay",
            sys: "Fleet GPS Tracking Dashboard",
            role: "Logistics Coordinator",
            metric: "Cold-chain limits (3-4°C) & delivery timelines"
        },
        9: { // Procurement
            loc: "Pattipola Procurement & Stores",
            sys: "E-Tender & Inventory Ledger",
            role: "Procurement Officer",
            metric: "Government tender guidelines & reorder levels"
        }
    };
    return contexts[deptId] || contexts[1];
}

window.generateSpecificFlow = function(processName, deptId) {
    let steps = [];
    const pName = processName.trim();
    const nameLower = pName.toLowerCase();
    
    const ctx = getDeptContext(deptId);
    
    // Base Initialization
    steps.push({ type: "start", text: `Start: Initiate procedure for [ ${pName} ]` });

    // Semantic Archetype Matching
    if (nameLower.includes("registration") || nameLower.includes("enrollment") || nameLower.includes("application") || nameLower.includes("recruit")) {
        steps.push({ type: "input", text: `Receive official application documents for [ ${pName} ] at the ${ctx.loc}.` });
        steps.push({ type: "action", text: `Cross-reference applicant details against National Identity database and ${ctx.sys}.` });
        steps.push({ type: "decision", text: `Are all criteria and background checks for [ ${pName} ] completely verified?`, yes: "Approve application", no: `Reject and issue clarification notice via ${ctx.role}` });
        steps.push({ type: "action", text: `Generate a new unique identifier and create a master profile for [ ${pName} ].` });
        steps.push({ type: "output", text: `Dispatch welcome packet/confirmation letter and update the ${ctx.sys}.` });
    } 
    else if (nameLower.includes("audit") || nameLower.includes("review") || nameLower.includes("inspection") || nameLower.includes("evaluation")) {
        steps.push({ type: "input", text: `Acquire previous records and compliance checklists for [ ${pName} ].` });
        steps.push({ type: "action", text: `Conduct a physical on-site assessment at Highland Pattipola regarding [ ${pName} ].` });
        steps.push({ type: "decision", text: `Does the assessment for [ ${pName} ] comply with ${ctx.metric}?`, yes: "Issue pass certificate", no: "Trigger non-conformance protocol" });
        steps.push({ type: "action", text: `Compile findings and draft the preliminary [ ${pName} ] report.` });
        steps.push({ type: "output", text: `Publish the finalized [ ${pName} ] audit report and submit to the Management Committee.` });
    }
    else if (nameLower.includes("test") || nameLower.includes("sample") || nameLower.includes("quality") || nameLower.includes("assay")) {
        steps.push({ type: "input", text: `Extract physical/chemical samples required for [ ${pName} ] from the production batch.` });
        steps.push({ type: "action", text: `Calibrate laboratory instruments and perform analysis for [ ${pName} ].` });
        steps.push({ type: "decision", text: `Do the results for [ ${pName} ] meet strict ${ctx.metric}?`, yes: "Approve quality batch clearance", no: "Quarantine batch and alert Plant Manager" });
        steps.push({ type: "action", text: `Log all precise testing metrics into the ${ctx.sys}.` });
        steps.push({ type: "output", text: `Issue official Certificate of Analysis (CoA) for [ ${pName} ].` });
    }
    else if (nameLower.includes("payment") || nameLower.includes("invoice") || nameLower.includes("budget") || nameLower.includes("fund") || nameLower.includes("salary")) {
        steps.push({ type: "input", text: `Receive invoices, vouchers, and metadata related to [ ${pName} ].` });
        steps.push({ type: "action", text: `Perform double-entry ledger reconciliation for [ ${pName} ].` });
        steps.push({ type: "decision", text: `Is the transaction for [ ${pName} ] within approved budget limits and tax regulations?`, yes: "Authorize financial disbursement", no: "Hold transaction and flag for internal audit" });
        steps.push({ type: "action", text: `Post the approved transaction details to the ${ctx.sys}.` });
        steps.push({ type: "output", text: `Generate payment confirmation advice and updated balance sheet for [ ${pName} ].` });
    }
    else if (nameLower.includes("maintenance") || nameLower.includes("repair") || nameLower.includes("equipment") || nameLower.includes("breakdown")) {
        steps.push({ type: "input", text: `Receive breakdown ticket or preventive schedule for [ ${pName} ].` });
        steps.push({ type: "action", text: `Shut down power supply (LOTO protocol) and inspect components for [ ${pName} ].` });
        steps.push({ type: "decision", text: `Is the repair successful and within safety ${ctx.metric}?`, yes: "Commission back into service", no: "Escalate to specialized contractor" });
        steps.push({ type: "action", text: `Update spare parts inventory and log maintenance hours in ${ctx.sys}.` });
        steps.push({ type: "output", text: `Close the work order and issue equipment compliance certificate for [ ${pName} ].` });
    }
    else if (nameLower.includes("dispatch") || nameLower.includes("route") || nameLower.includes("transport") || nameLower.includes("delivery") || nameLower.includes("vehicle")) {
        steps.push({ type: "input", text: `Acquire the daily manifest and route plan for [ ${pName} ].` });
        steps.push({ type: "action", text: `Execute vehicle safety checks and verify cold-chain settings for [ ${pName} ].` });
        steps.push({ type: "decision", text: `Are conditions optimal to proceed with [ ${pName} ]?`, yes: "Authorize vehicle departure", no: "Ground vehicle and request immediate maintenance" });
        steps.push({ type: "action", text: `Monitor real-time GPS fleet tracking coordinates during [ ${pName} ].` });
        steps.push({ type: "output", text: `Generate daily transport log and proof-of-delivery receipt for [ ${pName} ].` });
    }
    else if (nameLower.includes("milk") || nameLower.includes("production") || nameLower.includes("batch") || nameLower.includes("processing") || nameLower.includes("pasteurization")) {
        steps.push({ type: "input", text: `Acquire raw material volumes and recipe guidelines for [ ${pName} ].` });
        steps.push({ type: "action", text: `Configure factory floor machinery and execute [ ${pName} ] processing steps.` });
        steps.push({ type: "decision", text: `Are operational parameters for [ ${pName} ] within safe tolerances?`, yes: "Continue continuous processing phase", no: "Halt line and recalibrate control valves" });
        steps.push({ type: "action", text: `Transfer processed materials to the next stage in accordance with [ ${pName} ].` });
        steps.push({ type: "output", text: `Update factory floor dashboard and complete batch records for [ ${pName} ].` });
    }
    else if (nameLower.includes("schedule") || nameLower.includes("plan") || nameLower.includes("strategy") || nameLower.includes("forecast")) {
        steps.push({ type: "input", text: `Extract historical data and operational constraints required for [ ${pName} ].` });
        steps.push({ type: "action", text: `Draft the initial timeline/framework for [ ${pName} ] using optimization algorithms.` });
        steps.push({ type: "decision", text: `Does the framework for [ ${pName} ] align with overall factory capacity?`, yes: "Approve and finalize schedule", no: "Revise parameters and re-run forecast" });
        steps.push({ type: "action", text: `Communicate the finalized timeline to the ${ctx.role} and relevant departments.` });
        steps.push({ type: "output", text: `Publish the [ ${pName} ] master document to the ${ctx.sys}.` });
    }
    else if (nameLower.includes("cleaning") || nameLower.includes("wash") || nameLower.includes("sanitation") || nameLower.includes("cip")) {
        steps.push({ type: "input", text: `Review hygiene schedules and prepare chemical dosing for [ ${pName} ].` });
        steps.push({ type: "action", text: `Run the automated clean-in-place (CIP) cycle for [ ${pName} ].` });
        steps.push({ type: "decision", text: `Does the rinse water conductivity and pH meet safe ${ctx.metric}?`, yes: "Certify equipment as sterile", no: "Trigger secondary intensive wash cycle" });
        steps.push({ type: "action", text: `Perform visual inspection and swab tests post-[ ${pName} ].` });
        steps.push({ type: "output", text: `Log sanitation completion and release equipment back to Production.` });
    }
    else if (nameLower.includes("order") || nameLower.includes("purchase") || nameLower.includes("tender") || nameLower.includes("quote")) {
        steps.push({ type: "input", text: `Review department requisition forms and specifications for [ ${pName} ].` });
        steps.push({ type: "action", text: `Ensure compliance with government tender procurement rules for [ ${pName} ].` });
        steps.push({ type: "decision", text: `Does the vendor quote for [ ${pName} ] represent the lowest evaluated bid?`, yes: "Award tender contract", no: "Reject and request revised quotations" });
        steps.push({ type: "action", text: `Generate official purchase order (PO) and negotiate delivery timelines.` });
        steps.push({ type: "output", text: `Dispatch approved PO and update the ${ctx.sys} audit trail.` });
    }
    else {
        // Generic fallback with highly realistic terminology
        steps.push({ type: "input", text: `Extract operational inputs and constraints for [ ${pName} ] at the ${ctx.loc}.` });
        steps.push({ type: "action", text: `Execute core workflow tasks for [ ${pName} ] and log preliminary data into the ${ctx.sys}.` });
        steps.push({ type: "decision", text: `Does the data for [ ${pName} ] meet the required ${ctx.metric}?`, yes: `Approve and proceed with [ ${pName} ]`, no: `Halt [ ${pName} ] and notify the ${ctx.role}` });
        steps.push({ type: "action", text: `Finalize execution of [ ${pName} ] under the supervision of the ${ctx.role}.` });
        steps.push({ type: "output", text: `Generate official summary report for [ ${pName} ] and securely archive records.` });
    }

    steps.push({ type: "end", text: `End: [ ${pName} ] cycle successfully finalized` });
    
    return steps;
}
