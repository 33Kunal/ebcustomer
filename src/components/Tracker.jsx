import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Tracker = () => {

    const techSections = [
        "Documentation",
        "MSEB Profile and Govt Subsidary",
        "Site Visit Request",
        "Technical Feasibility and Design",
        "Procurrent",
        "Installation",
        "Metering Process",
      ];
    
      const techRows = [
        [
          { name: "MSEB Agreement", field: "mseb_agreement" },
          { name: "Authorisation Letter", field: "authorisation_letter" },
          { name: "Electrical Contractor Licence", field: "electrical_contractor_licence" },
          { name: "MSEB Payment Receipts", field: "mseb_payment_receipts" },
          { name: "Technical Feasibility Document", field: "technical_feasibility_document" },
          { name: "KYC", field: "kyc" },
          { name: "Other", field: "other" },
        ],
        // Dummy data for other sections can be added similarly
      ];




      const solarOnGrid = [
        "Documentation",
        "MSEB Profile and Govt Subsidary",
        "Site Visit Uploads",
        "Technical Feasibility and Design",
        "Procurrent",
        "Installation",
        "Metering Process",
      ];
    
      const solarOffGrid = [
        "Documentation",
        "Site Visit Uploads",
        "Technical Feasibility and Design",
        "Procurrent",
        "Installation",
      ];
    
      const windOnGrid = [
        "Documentation",
        "MSEB Profile and Govt Subsidary",
        "Site Visit Request",
        "Technical Feasibility and Design",
        "Procurrent",
        "Installation",
        "Metering Process",
      ];
    
      const windOffGrid = [
        "Documentation",
        "Site Visit Request",
        "Technical Feasibility and Design",
        "Procurrent",
        "Installation",
      ];
    
      const hybridSolar = [
        "Documentation",
        "MSEB Profile and Govt Subsidary",
        "Site Visit Uploads",
        "Technical Feasibility and Design",
        "Procurrent",
        "Installation",
        "Metering Process",
      ];
    
      const hybridWind = [
        "Documentation",
        "MSEB Profile and Govt Subsidary",
        "Site Visit Uploads",
        "Technical Feasibility and Design",
        "Procurrent",
        "Installation",
        "Metering Process",
      ];
    
      const hybridSolarWind = [
        "Documentation",
        "MSEB Profile and Govt Subsidary",
        "Site Visit Request",
        "Technical Feasibility and Design",
        "Procurrent",
        "Installation",
        "Metering Process",
      ];
      const activeSection = 0;

      const HybridWindSolarRow = [
        [
          { name: "MSEB Agreement", field: "mseb_agreement" },
          {
            name: "Authorisation Letter",
            field: "authorization_letter",
          },
          {
            name: "Electrical Contractor Licence",
            field: "electrical_contractor_license",
          },
          { name: "MSEB Payment Receipts", field: "mseb_payment_reciepts" },
          {
            name: "Technical Feasibility Document",
            field: "technical_feasibility",
          },
          { name: "KYC", field: "kyc" },
          { name: "Other", field: "other" },
        ],
        [
          { name: "MSEB Application", field: "mseb_application" },
          { name: "Subsidy Application", field: "subsidy_application" },
        ],
        [
          { name: "Site Visit 1", field: "site_visit_1" },
          { name: "Site Visit 2", field: "site_visit_2" },
        ],
        [
          { name: "SLD", field: "sld" },
          { name: "Plant Design", field: "plant_design" },
          { name: "Inverter Data Sheet", field: "inverter_data_sheet" },
          { name: "Panel Data Sheet", field: "panel_data_sheet" },
          { name: "Wind turbine Data sheet", field: "wind_turbine_data_sheet" },
        ],
        [
          { name: "Wind Turbine", field: "wind_turbine" },
          { name: "Wind Turbine Serial", field: "wind_turbine_serial" },
          { name: "Solar Panel", field: "solar_panel" },
          { name: "Solar Panel Serial", field: "solar_panel_serial" },
          { name: "Inverter", field: "inverter" },
          { name: "Inverter Serial", field: "inverter_serial" },
          { name: "Tower & Structure", field: "tower_structure" },
          { name: "Cables", field: "cables" },
          { name: "DCR certificate", field: "dcr_certificate" },
          { name: "Meter", field: "meter" },
          { name: "BOS", field: "bos" },
        ],
        [
          { name: "Structure", field: "structure", type: "photo", multiple: true },
          { name: "Installed Panel", field: "installed_panel" },
          { name: "Installed Inverter", field: "installed_inverter" },
          { name: "ACDB/DCDB", field: "acdb_dcdb" },
          { name: "Earthing Status(LA)", field: "earthing_status_la" },
          {
            name: "Earthing Status(Structure Earthing)",
            field: "earthing_status_structure_earthing",
          },
          {
            name: "Earthing Status(Earthing Pit)",
            field: "earthing_status_earthing_pit",
          },
          {
            name: "Earthing Status(Panel to Panel Earthing)",
            field: "earthing_status_panel_to_panel_earthing",
          },
          {
            name: "Earthing Status(AC/Inverter Earthing)",
            field: "earthing_status_ac_inverter_earthing",
          },
          {
            name: "Video Upload",
            field: "video_upload",
            type: "video",
            multiple: false,
          },
        ],
        [
          { name: "Request for QC", field: "request_for_qc" },
          { name: "MSEB QC VISIT", field: "mseb_qc_visit" },
          { name: "MSEB NOC", field: "mseb_noc" },
          { name: "Meter Testing Request", field: "meter_testing_request" },
          { name: "MSEB Testing Report", field: "mseb_testing_report" },
          { name: "MESB Release Letter", field: "mesb_release_letter" },
          { name: "MSEB Meter Installation", field: "mseb_meter_installation" },
          { name: "Send to Billing", field: "send_to_billing" },
        ],
      ];
    
      const HybridWindRow = [
        [
          { name: "MSEB Agreement", field: "mseb_agreement" },
          {
            name: "Authorisation Letter",
            field: "authorization_letter",
          },
          {
            name: "Electrical Contractor Licence",
            field: "electrical_contractor_license",
          },
          { name: "MSEB Payment Receipts", field: "mseb_payment_reciepts" },
          {
            name: "Technical Feasibility Document",
            field: "technical_feasibility",
          },
          { name: "KYC", field: "kyc" },
          { name: "Other", field: "other" },
        ],
        [{ name: "MSEB Application", field: "mseb_application" }],
        [
          { name: "Site Visit 1", field: "site_visit_1" },
          { name: "Site Visit 2", field: "site_visit_2" },
        ],
        [
          { name: "SLD", field: "sld" },
          { name: "Tower Design", field: "tower_design" },
          { name: "Inverter data sheet", field: "inverter_data_sheet" },
          { name: "Wind turbine Data sheet", field: "wind_turbine_data_sheet" },
        ],
        [
          { name: "Wind Turbine", field: "wind_turbine" },
          { name: "Wind Turbine Serial #", field: "wind_turbine_serial" },
          { name: "Inverter", field: "inverter" },
          { name: "Inverter Serial #", field: "inverter_serial" },
          { name: "Tower & Structure", field: "tower_structure" },
          { name: "Cables", field: "cables" },
          { name: "DCR certificate", field: "dcr_certificate" },
          { name: "Battery", field: "battery" },
          { name: "Battery Serial #", field: "battery_serial" },
          { name: "BOS", field: "bos" },
        ],
        [
          { name: "Structure", field: "structure", type: "photo", multiple: true },
          { name: "Installed Panel", field: "installed_panel" },
          { name: "Tower & Structure", field: "tower_structure_installed" },
          { name: "Installed Turbine", field: "installed_turbine" },
          { name: "Controller", field: "controller" },
          { name: "Installed Inverter", field: "installed_inverter" },
          { name: "ACDB/DCDB", field: "acdb_dcdb" },
          { name: "Installed battery", field: "installed_battery" },
          { name: "Battery stand photo", field: "battery_stand_photo" },
          { name: "Earthing Status(LA)", field: "earthing_status_la" },
          {
            name: "Earthing Status(Structure Earthing)",
            field: "earthing_status_structure_earthing",
          },
          {
            name: "Earthing Status(Earthing Pit)",
            field: "earthing_status_earthing_pit",
          },
          {
            name: "Earthing Status(Panel to Panel Earthing)",
            field: "earthing_status_panel_to_panel_earthing",
          },
          {
            name: "Earthing Status(AC/Inverter Earthing)",
            field: "earthing_status_ac_inverter_earthing",
          },
          { name: "Video Upload", field: "video_upload" },
        ],
        [
          { name: "Request for QC", field: "request_for_qc" },
          { name: "MSEB QC VISIT", field: "mseb_qc_visit" },
          { name: "MSEB NOC", field: "mseb_noc" },
          { name: "Meter Testing Request", field: "meter_testing_request" },
          { name: "MSEB Testing Report", field: "mseb_testing_report" },
          { name: "MESB Release Letter", field: "mesb_release_letter" },
          { name: "MSEB Meter Installation", field: "mseb_meter_installation" },
          { name: "Send to Billing", field: "send_to_billing" },
        ],
      ];
    
      const HybridSolarRow = [
        [
          { name: "MSEB Agreement", field: "mseb_agreement" },
          { name: "Authorisation Letter", field: "authorisation_letter" },
          {
            name: "Electrical Contractor Licence",
            field: "electrical_contractor_licence",
          },
          { name: "MSEB Payment Receipts", field: "mseb_payment_receipts" },
          {
            name: "National Portal Acknowledgment Document",
            field: "national_portal_acknowledgment_document",
          },
          {
            name: "Technical Feasibility Document",
            field: "technical_feasibility_document",
          },
          { name: "KYC", field: "kyc" },
          { name: "Other", field: "other" },
        ],
        [
          { name: "MSEB Application", field: "mseb_application" },
          { name: "Subsidy Application", field: "subsidy_application" },
        ],
        [
          { name: "Site Visit 1", field: "site_visit_1" },
          { name: "Site Visit 2", field: "site_visit_2" },
        ],
        [
          { name: "SLD", field: "sld" },
          { name: "Plant Design", field: "plant_design" },
          { name: "Inverter Data Sheet", field: "inverter_data_sheet" },
          { name: "Panel Data Sheet", field: "panel_data_sheet" },
        ],
        [
          { name: "Solar Panel", field: "solar_panel" },
          { name: "Solar Panel Serial", field: "solar_panel_serial" },
          { name: "Inverter", field: "inverter" },
          { name: "Inverter Serial", field: "inverter_serial" },
          { name: "Structure", field: "structure" },
          { name: "Cables", field: "cables" },
          { name: "DCR certificate", field: "dcr_certificate" },
          { name: "Battery", field: "battery" },
          { name: "Battery Serial #", field: "battery_serial" },
          { name: "BOS", field: "bos" },
        ],
        [
          {
            name: "Structure",
            field: "structure_photo",
            type: "photo",
            multiple: true,
          },
          { name: "Installed Panel", field: "installed_panel" },
          { name: "Installed Inverter", field: "installed_inverter" },
          { name: "ACDB/DCDB", field: "acdb_dcdb" },
          {
            name: "Installed battery",
            field: "installed_battery",
            type: "photo",
            multiple: true,
          },
          {
            name: "Battery stand photo",
            field: "battery_stand_photo",
            type: "photo",
            multiple: true,
          },
          { name: "Earthing Status(LA)", field: "earthing_status_la" },
          {
            name: "Earthing Status(Structure Earthing)",
            field: "earthing_status_structure_earthing",
          },
          {
            name: "Earthing Status(Earthing Pit)",
            field: "earthing_status_earthing_pit",
          },
          {
            name: "Earthing Status(Panel to Panel Earthing)",
            field: "earthing_status_panel_to_panel_earthing",
          },
          {
            name: "Earthing Status(AC/Inverter Earthing)",
            field: "earthing_status_ac_inverter_earthing",
          },
          {
            name: "Video Upload",
            field: "video_upload",
            type: "video",
            multiple: false,
          },
        ],
        [
          { name: "Request for QC", field: "request_for_qc" },
          { name: "MSEB QC VISIT", field: "mseb_qc_visit" },
          { name: "MSEB NOC", field: "mseb_noc" },
          { name: "Meter Testing Request", field: "meter_testing_request" },
          { name: "MSEB Testing Report", field: "mseb_testing_report" },
          { name: "MESB Release Letter", field: "mesb_release_letter" },
          { name: "MSEB Meter Installation", field: "mseb_meter_installation" },
          { name: "Send to Billing", field: "send_to_billing" },
        ],
      ];
    
      const WindOffrows = [
        [
          {
            name: "Electrical Contractor Licence",
            field: "electrical_contractor_licence",
          },
          { name: "MSEB Payment Receipts", field: "mseb_payment_receipts" },
          { name: "KYC", field: "kyc" },
          { name: "Other", field: "other" },
        ],
        [
          { name: "Site Visit 1", field: "site_visit_1" },
          { name: "Site Visit 2", field: "site_visit_2" },
        ],
        [
          { name: "SLD", field: "sld" },
          { name: "Tower Design", field: "tower_design" },
          { name: "Inverter data sheet", field: "inverter_data_sheet" },
          { name: "Wind turbine Data sheet", field: "wind_turbine_data_sheet" },
        ],
        [
          { name: "Wind Turbine", field: "wind_turbine", required: true },
          {
            name: "Wind Turbine Serial",
            field: "wind_turbine_serial",
            required: false,
          },
          { name: "Inverter", field: "inverter", required: true },
          { name: "Inverter Serial", field: "inverter_serial", required: false },
          { name: "Tower & Structure", field: "tower_structure", required: true },
          { name: "Cables", field: "cables", required: false },
          { name: "DCR certificate", field: "dcr_certificate", required: false },
          { name: "Battery", field: "battery", required: false },
          { name: "Battery Serial", field: "battery_serial", required: false },
          { name: "BOS", field: "bos", required: false },
        ],
        [
          { name: "Tower & Structure", field: "tower_structure_installed" },
          { name: "Installed Turbine", field: "installed_turbine" },
          { name: "Controller", field: "controller" },
          { name: "Installed Inverter", field: "installed_inverter" },
          { name: "ACDB/DCDB", field: "acdb_dcdb" },
          { name: "Installed battery", field: "installed_battery" },
          { name: "Battery stand photo", field: "battery_stand_photo" },
          { name: "Earthing Status(LA)", field: "earthing_status_la" },
          {
            name: "Earthing Status(Structure Earthing)",
            field: "earthing_status_structure_earthing",
          },
          {
            name: "Earthing Status(Earthing Pit)",
            field: "earthing_status_earthing_pit",
          },
          {
            name: "Earthing Status(Panel to Panel Earthing)",
            field: "earthing_status_panel_to_panel_earthing",
          },
          {
            name: "Earthing Status(AC/Inverter Earthing)",
            field: "earthing_status_ac_inverter_earthing",
          },
          { name: "Video Upload", field: "video_upload" },
        ],
      ];
    
      const WindOnrows = [
        [
          { name: "MSEB Agreement", field: "mseb_agreement" },
          { name: "Authorisation Letter", field: "authorisation_letter" },
          {
            name: "Electrical Contractor Licence",
            field: "electrical_contractor_licence",
          },
          { name: "MSEB Payment Receipts", field: "mseb_payment_receipts" },
          {
            name: "Technical Feasibility Document",
            field: "technical_feasibility_document",
          },
          { name: "KYC", field: "kyc" },
          { name: "Other", field: "other" },
        ],
        [{ name: "MSEB Application", field: "mseb_application" }],
        [
          { name: "Site Visit 1", field: "site_visit_1" },
          { name: "Site Visit 1", field: "site_visit_2" },
        ],
        [
          { name: "SLD", field: "sld" },
          { name: "Tower Design", field: "tower_design" },
          { name: "Inverter Data Sheet", field: "inverter_data_sheet" },
          { name: "Wind Turbine Data Sheet", field: "wind_turbine_data_sheet" },
        ],
        [
          { name: "Wind Turbine", field: "wind_turbine" },
          { name: "Wind Turbine Serial", field: "wind_turbine_serial" },
          { name: "Inverter", field: "inverter" },
          { name: "Inverter Serial", field: "inverter_serial" },
          { name: "Tower & Structure", field: "tower_structure" },
          { name: "Cables", field: "cables" },
          { name: "DCR Certificate", field: "dcr_certificate" },
          { name: "Meter", field: "meter" },
          { name: "BOS", field: "bos" },
        ],
        [
          {
            name: "Tower & Structure",
            field: "tower_structure_photo",
            type: "photo",
            multiple: true,
          },
          { name: "Controller", field: "controller" },
          { name: "Installed Inverter", field: "installed_inverter" },
          { name: "ACDB/DCDB", field: "acdb_dcdb" },
          { name: "Earthing Status(LA)", field: "earthing_status_la" },
          {
            name: "Earthing Status(Structure Earthing)",
            field: "earthing_status_structure_earthing",
          },
          {
            name: "Earthing Status(Earthing Pit)",
            field: "earthing_status_earthing_pit",
          },
          {
            name: "Earthing Status(Panel to Panel Earthing)",
            field: "earthing_status_panel_to_panel_earthing",
          },
          {
            name: "Earthing Status(AC/Inverter Earthing)",
            field: "earthing_status_ac_inverter_earthing",
          },
          { name: "Video Upload", field: "video_upload" },
        ],
        [
          { name: "Request for QC", field: "request_for_qc" },
          { name: "MSEB QC VISIT", field: "mseb_qc_visit" },
          { name: "MSEB NOC", field: "mseb_noc" },
          { name: "Meter Testing Request", field: "meter_testing_request" },
          { name: "MSEB Testing Report", field: "mseb_testing_report" },
          { name: "MESB Release Letter", field: "mesb_release_letter" },
          { name: "MSEB Meter Installation", field: "mseb_meter_installation" },
          { name: "Send to Billing", field: "send_to_billing" },
        ],
      ];
    
      const SolarOffrows = [
        [
          {
            name: "Electrical Contractor Licence",
            field: "electrical_contractor_licence",
          },
          {
            name: "KYC - Aadhar card, Pan card, Ownership proof doc",
            field: "kyc_documents",
          },
          { name: "Other", field: "other" },
        ],
        [
          { name: "Site Visit 1", field: "site_visit_1" },
          { name: "Site Visit 1", field: "site_visit_2" },
        ],
        [
          { name: "SLD", field: "sld" },
          { name: "Plant Design", field: "plant_design" },
          { name: "Inverter Data Sheet", field: "inverter_data_sheet" },
          { name: "Panel Data Sheet", field: "panel_data_sheet" },
        ],
        [
          { name: "Solar Panel", field: "solar_panel", required: true },
          {
            name: "Solar Panel Serial",
            field: "solar_panel_serial",
            required: false,
          },
          { name: "Inverter", field: "inverter", required: false },
          { name: "Inverter Serial", field: "inverter_serial", required: true },
          { name: "Structure", field: "structure", required: true },
          { name: "Cables", field: "cables" },
          { name: "DCR certificate", field: "dcr_certificate" },
          { name: "Battery", field: "battery", required: true },
          { name: "Battery Serial #", field: "battery_serial", required: true },
          { name: "BOS", field: "bos" },
        ],
        [
          {
            name: "Structure",
            field: "structure_photo",
            type: "photo",
            multiple: true,
          },
          { name: "Installed Panel", field: "installed_panel" },
          { name: "Installed Inverter", field: "installed_inverter" },
          { name: "ACDB/DCDB", field: "acdb_dcdb" },
          { name: "Earthing Status(LA)", field: "earthing_status_la" },
          {
            name: "Earthing Status(Structure Earthing)",
            field: "earthing_status_structure_earthing",
          },
          {
            name: "Earthing Status(Earthing Pit)",
            field: "earthing_status_earthing_pit",
          },
          {
            name: "Earthing Status(Panel to Panel Earthing)",
            field: "earthing_status_panel_to_panel_earthing",
          },
          {
            name: "Earthing Status(AC/Inverter Earthing)",
            field: "earthing_status_ac_inverter_earthing",
          },
          {
            name: "Video Upload",
            field: "video_upload",
            type: "video",
            multiple: false,
          },
        ],
      ];
    
      const SolarOnrows = [
        [
          { name: "MSEB Agreement", field: "mseb_agreement", required: false },
          {
            name: "Authorisation Letter",
            field: "authorisation_letter",
            required: false,
          },
          {
            name: "Electrical Contractor Licence",
            field: "electrical_contractor_licence",
            required: false,
          },
          {
            name: "MSEB Payment Receipts",
            field: "mseb_payment_receipts",
            required: false,
          },
          {
            name: "National Portal Acknowledgment Document",
            field: "national_portal_acknowledgment_document",
            required: false,
          },
          {
            name: "Technical Feasibility Document",
            field: "technical_feasibility_document",
            required: false,
          },
          { name: "KYC", field: "kyc", required: false },
          { name: "Other", field: "other", required: false },
        ],
        [
          { name: "MSEB Application", field: "mseb_application", required: false },
          {
            name: "Subsidy Application",
            field: "subsidy_application",
            required: false,
          },
        ],
        [
          { name: "Site Visit 1", field: "site_visit_1", required: false },
          { name: "Site Visit 2", field: "site_visit_2", required: false },
        ],
        [
          { name: "SLD", field: "sld", required: false },
          { name: "Plant Design", field: "plant_design", required: false },
          {
            name: "Inverter Data Sheet",
            field: "inverter_data_sheet",
            required: false,
          },
          { name: "Panel Data Sheet", field: "panel_data_sheet", required: false },
        ],
        [
          { name: "Solar Panel", field: "solar_panel", required: true },
          { name: "Solar Panel Serial", field: "solar_panel_serial" },
          { name: "Inverter", field: "inverter", required: true },
          { name: "Inverter Serial", field: "inverter_serial" },
          { name: "Structure", field: "structure", required: true },
          { name: "Cables", field: "cables", required: false },
          { name: "DCR certificate", field: "dcr_certificate", required: false },
          { name: "Meter", field: "meter", required: false },
          { name: "BOS", field: "bos", required: false },
        ],
        [
          {
            name: "Structure",
            field: "structure_photo",
            type: "photo",
            multiple: true,
          },
          { name: "Installed Panel", field: "installed_panel" },
          { name: "Installed Inverter", field: "installed_inverter" },
          { name: "ACDB/DCDB", field: "acdb_dcdb" },
          { name: "Earthing Status(LA)", field: "earthing_status_la" },
          {
            name: "Earthing Status(Structure Earthing)",
            field: "earthing_status_structure_earthing",
          },
          {
            name: "Earthing Status(Earthing Pit)",
            field: "earthing_status_earthing_pit",
          },
          {
            name: "Earthing Status(Panel to Panel Earthing)",
            field: "earthing_status_panel_to_panel_earthing",
          },
          {
            name: "Earthing Status(AC/Inverter Earthing)",
            field: "earthing_status_ac_inverter_earthing",
          },
          {
            name: "Video Upload",
            field: "video_upload",
            type: "video",
            multiple: false,
          },
        ],
        [
          { name: "Request for QC", field: "request_for_qc" },
          { name: "MSEB QC VISIT", field: "mseb_qc_visit" },
          { name: "MSEB NOC", field: "mseb_noc" },
          { name: "Meter Testing Request", field: "meter_testing_request" },
          { name: "MSEB Testing Report", field: "mseb_testing_report" },
          { name: "MESB Release Letter", field: "mesb_release_letter" },
          { name: "MSEB Meter Installation", field: "mseb_meter_installation" },
          { name: "Send to Billing", field: "send_to_billing" },
        ],
      ];
  return (
    <div>

        <div className='flex ml-4 lg:ml-10 mt-4 lg:mt-10 '>
        <Link to="/project-tracking" >
        
        <img src="/arrow.png" className="w-8 h-7 mx-3" />
        </Link>
      <div className="text-2xl lg:text-3xl  uppercase font-semibold">Project Tracking</div>
        </div>
        <div className='flex lg:mr-24 md:mr-22 mt-6  gap-x-3 justify-end'>
        <p className='my-auto text-xl font-semibold'>Final Proposal</p>
        <button className="rounded-md my-1 bg-blue-800 text-white border-none w-fit px-2 py-1 text-sm mr-2">View</button>
        </div>
      <div className="flex">
       
        <div className="flex justify-center w-screen mx-auto mt-10">
          <div>
            <div className="w-full">
              <div className="flex">
                {techSections.map((section, index) => (
                  <div className="flex w-full gap-20" key={index}>
                    <div className="w-fit text-center cursor-pointer">
                      <img
                        src={activeSection === index ? "/check-point.png" : "/uncheck-point.png"}
                        alt={section}
                        className="cursor-pointer w-4 mx-auto mb-2"
                      />
                      <span className={`text-xs ${activeSection === index && "font-bold"}`}>{section}</span>
                    </div>
                    {index < 6 && <hr className="border-gray-300 w-full mt-2 items-center justify-center" />}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mb-5 mt-5">
                <button className="rounded-md bg-green-500 text-white border-none px-4 py-2">Previous</button>
                <button className="rounded-md bg-gray-500 text-white border-none px-4 py-2">Next</button>
              </div>
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-left">
                    <tr>
                      <th className="px-4 py-2 w-2/3">Document Checklist</th>
                      <th className="px-4 py-2">Actions</th>
                      <th className="px-4 py-2">Upload Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {techRows[activeSection].map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2">{item.name}</td>
                        <td>
                          <button className="rounded-md bg-green-500 my-1 text-white border-none w-fit px-2 py-1 text-sm mr-2">Upload</button>
                          <button className="rounded-md my-1 bg-blue-800 text-white border-none w-fit px-2 py-1 text-sm mr-2">View</button>

                        </td>
                        <td className="px-4 py-2">NA</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tracker