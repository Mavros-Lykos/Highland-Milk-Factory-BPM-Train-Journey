// Highland Milk Factory - Deep Semantic Component Assembly Engine
// Generates over 500 fully unique, highly realistic business process flows.

function getDeptContext(deptId) {
    const contexts = {
        1: { sys: "Milco Procurement Database (FMS)", role: "Field Extension Officer", metric: "procurement guidelines and milk quality operational standards" },
        2: { sys: "SCADA Production Control System", role: "Shift Supervisor", metric: "pasteurization and continuous processing thresholds" },
        3: { sys: "LIMS (Laboratory Information Management System)", role: "QA Microbiologist/Chemist", metric: "SLSI 181 and ISO 22000 specifications" },
        4: { sys: "Milco Dealer CRM Dashboard", role: "Regional Sales Manager", metric: "sales quotas, distributor limits, and brand guidelines" },
        5: { sys: "Central ERP General Ledger", role: "Financial Controller", metric: "approved budget limits and statutory tax compliance" },
        6: { sys: "Highland HRIS Portal", role: "HR Executive", metric: "government service rules, EPF/ETF statutes, and union agreements" },
        7: { sys: "CMMS (Computerized Maintenance Management System)", role: "Chief Engineer", metric: "equipment safety tolerances, ISO calibration, and MTBF targets" },
        8: { sys: "Fleet GPS Tracking Dashboard", role: "Logistics Coordinator", metric: "cold-chain limits (3-4°C) and route delivery timelines" },
        9: { sys: "E-Tender & Inventory Ledger", role: "Procurement Officer", metric: "government tender guidelines and inventory reorder levels" }
    };
    return contexts[deptId] || contexts[1];
}

const semanticDictionaries = {
    input: {
        "cash": "Receive daily physical currency and bank remittance slips.",
        "tax": "Acquire statutory tax schedules, VAT/PAYE forms, and tax invoices.",
        "invoice": "Receive supplier invoices, matching POs, and Goods Received Notes (GRN).",
        "asset": "Extract fixed asset registry, transfer logs, and depreciation schedules.",
        "budget": "Extract departmental budget requests and capital expenditure (CAPEX) proposals.",
        "audit": "Acquire previous audit records, compliance checklists, and historical financial data.",
        "ledger": "Acquire the monthly general ledger closing data and trial balance sheets.",
        "salary": "Receive employee attendance data, overtime sheets, and salary advance requests.",
        "payroll": "Receive employee attendance data, overtime sheets, and salary advance requests.",
        "leave": "Collect employee leave applications and medical certificates.",
        "recruit": "Acquire candidate resumes, interview scorecards, and HR requisition forms.",
        "farmer": "Extract farmer ledger records, milk yield data, and society credentials from the local FMS.",
        "milk": "Acquire raw milk batch logs, collection route sheets, and chilling center volume reports.",
        "quality": "Collect physical, chemical, and microbiological samples from the production floor.",
        "vehicle": "Receive vehicle dispatch manifests, driver logs, and transport route plans.",
        "campaign": "Receive marketing briefs, creative assets, and promotional campaign parameters.",
        "dealer": "Acquire distributor network orders, sales targets, and dealer credit limit profiles.",
        "maintenance": "Receive preventive maintenance schedules, spare part lists, and breakdown tickets.",
        "tender": "Extract government procurement tender bids, supplier quotes, and technical specifications.",
        "training": "Receive employee skills matrix, safety certificates, and training program enrollment lists.",
        "complaint": "Acquire customer grievance logs, retail shelf audits, and product batch tracing data.",
        "loan": "Extract credit applications, bank details, and background financial check reports.",
        "stock": "Extract warehouse inventory logs, raw material stock counts, and daily reorder triggers.",
        "design": "Receive product design briefs, packaging artwork, and brand identity guidelines.",
        "cost": "Acquire standard costing sheets, overhead absorption data, and factory utility bills."
    },
    action: {
        "reconciliation": "Execute double-entry ledger reconciliation against verified external bank statements.",
        "calculation": "Calculate exact figures, statutory deductions, and prepare the disbursement vouchers.",
        "payment": "Process financial transfers, verify payee bank details, and prepare the disbursement vouchers.",
        "inspection": "Conduct physical on-site assessment, review documentation, and gather procedural evidence.",
        "analysis": "Perform detailed variance analysis against standard operational benchmarks and historical data.",
        "processing": "Process the continuous production run according to the verified recipe and machinery settings.",
        "cleaning": "Run the automated Clean-In-Place (CIP) chemical wash cycle across designated pipeline routes.",
        "testing": "Calibrate laboratory instruments and perform the required analytical assays under sterile conditions.",
        "negotiation": "Conduct strategic negotiation sessions with external parties to finalize pricing and contract terms.",
        "development": "Develop comprehensive strategic roadmaps, design parameters, and timeline forecasting models.",
        "monitoring": "Establish real-time monitoring and actively track critical key performance indicators (KPIs).",
        "update": "Update the central ERP database, synchronize cross-departmental records, and secure data backups.",
        "allocation": "Allocate internal resources and assign accurate cost centers based on departmental utilization rates.",
        "audit": "Review financial trails, conduct fraud risk assessments, and verify statutory compliance logs.",
        "dispatch": "Coordinate logistics, verify route safety, and execute the physical dispatch of resources.",
        "recording": "Log all transaction details meticulously into the central ledger and verify entry accuracy.",
        "evaluation": "Evaluate supplier quotations or internal proposals using the standard scoring matrix.",
        "design": "Iterate on design drafts, incorporate stakeholder feedback, and finalize visual assets.",
        "recruit": "Conduct candidate background checks and finalize the employment contract terms.",
        "maintenance": "Shut down power supplies (LOTO protocol), inspect mechanical components, and replace worn parts."
    },
    decision: {
        "budget": "Does the total expenditure strictly comply with the approved annual budget limits?",
        "tax": "Are all statutory tax deductions accurately calculated per Inland Revenue guidelines?",
        "credit": "Are the distributor or farmer credit limits verified and actively in good standing?",
        "quality": "Do the analytical results strictly meet SLSI 181 and ISO 22000 quality specifications?",
        "audit": "Does the assessment fully comply with regulatory and departmental compliance standards?",
        "safety": "Are all equipment safety tolerances and MTBF targets met post-intervention?",
        "temperature": "Are temperature parameters verified within the strict cold-chain limits (3-4°C)?",
        "inventory": "Are warehouse raw material stock levels sufficient to proceed with the planned requisition?",
        "performance": "Does the recorded performance actively meet or exceed the expected operational KPIs?",
        "reconciliation": "Do the reconciled ledger balances match the external statements without any variance?",
        "payment": "Is the disbursement fully authorized by the steering committee or management?",
        "compliance": "Does the procedure satisfy all government SOE and auditor general checklists?",
        "recruit": "Does the candidate successfully pass all medical, background, and competency criteria?",
        "design": "Does the artwork align with Highland's corporate brand identity and packaging laws?",
        "cost": "Are the cost variances within acceptable thresholds for factory profitability?"
    },
    output: {
        "report": "Publish the finalized analytical report to the management dashboard for board review.",
        "statement": "Generate the official statement, produce an updated balance sheet, and archive the ledger.",
        "certificate": "Issue the official compliance certificate, dispatch release documents, and securely archive samples.",
        "payment": "Authorize the financial disbursement, dispatch payment confirmation advice, and update accounts.",
        "dispatch": "Generate the daily transport log, secure the signed proof-of-delivery receipts, and update stock.",
        "contract": "Award the finalized contract, dispatch the official agreement, and update the system audit trail.",
        "order": "Dispatch the approved Purchase Order (PO) to the selected external vendor and track delivery.",
        "schedule": "Publish the master schedule to the central portal for immediate cross-departmental execution.",
        "profile": "Activate the newly created master profile and trigger the welcome notification workflow.",
        "invoice": "Generate the final tax invoice, transmit to the client/dealer, and post to Accounts Receivable.",
        "design": "Send the finalized print-ready files to the production house and archive brand assets.",
        "recruit": "Issue the official offer letter, trigger IT onboarding, and update the employee roster."
    }
};

function getSemanticStep(type, pNameLower, ctx) {
    const dict = semanticDictionaries[type];
    for (const key in dict) {
        if (pNameLower.includes(key)) {
            return dict[key];
        }
    }
    
    // Fallbacks if no keyword matched
    if (type === "input") {
        return `Receive necessary documentation, historical records, and operational parameters from the ${ctx.sys}.`;
    } else if (type === "action") {
        return `Execute the primary workflow tasks, cross-reference data, and verify parameters under the supervision of the ${ctx.role}.`;
    } else if (type === "decision") {
        return `Are all conditions, calculations, and metrics strictly within the accepted ${ctx.metric}?`;
    } else if (type === "output") {
        return `Finalize the procedure, issue completion notifications, and securely archive the summary records in the ${ctx.sys}.`;
    }
}

window.generateSpecificFlow = function(processName, deptId) {
    let steps = [];
    const pName = processName.trim();
    const nameLower = pName.toLowerCase();
    
    const ctx = getDeptContext(deptId);
    
    steps.push({ type: "start", text: `Start: Initiate procedure for ${pName}` });

    // Build the flow using deep semantic component assembly
    const inputStep = getSemanticStep("input", nameLower, ctx);
    steps.push({ type: "input", text: inputStep });

    const actionStep = getSemanticStep("action", nameLower, ctx);
    steps.push({ type: "action", text: actionStep });

    const decisionStep = getSemanticStep("decision", nameLower, ctx);
    steps.push({ type: "decision", text: decisionStep, yes: "Proceed with execution phase", no: "Halt procedure and flag for review" });

    // A realistic intermediate action step tying back to the specific system
    steps.push({ type: "action", text: `Review phase outcomes, validate operational compliance, and securely log audit trails into the ${ctx.sys}.` });

    const outputStep = getSemanticStep("output", nameLower, ctx);
    steps.push({ type: "output", text: outputStep });

    steps.push({ type: "end", text: `End: ${pName} cycle successfully completed and closed.` });
    
    return steps;
}
