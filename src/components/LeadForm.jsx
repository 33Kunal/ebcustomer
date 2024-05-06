import { useEffect, useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";


import { useParams } from "react-router-dom";

import { Divider } from "@mui/material";

const LeadForm = () => {
  const { leadId } = useParams();
  const [bigImage, setBigImage] = useState(null);
  const [lead, setLead] = useState(null);
  const [activeSection, setActiveSection] = useState([]);
  const [error, setError] = useState(null);

  const images = [
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
  ];

  const requirements = [
    { label: "Type Of Installation", value: "typeOfInstallation" },
    { label: "Location", value: "location" },
    { label: "Pincode", value: "pincode" },
    { label: "Technology", value: "technology" },
  ];

  const siteCondition = [
    { label: "Average Electricity Bill", value: "avgBill" },
    { label: "Site Coordinates", value: "siteCoordinates" },
    { label: "No. Of Floors", value: "noOfFloors" },
    { label: "Total Flats", value: "totalFlats" },
    { label: "Roof Top Area", value: "roofTopArea" },
    { label: "Site Description", value: "siteDescription" },
  ];

  const meterDetails = [
    { label: "Meter Type", value: "meterType" },
    { label: "Number Of Meters", value: "numberOfMeter" },
    { label: "Consumer Number", value: "consumerNo" },
    { label: "Connection Type", value: "consumerType" },
    { label: "Sanctioned Load", value: "sanctionedLoad" },
    { label: "Contract Demand", value: "contractDemand" },
  ];

  const inverterDetails = [
    { label: "Capacity", value: "inverterCapacity" },
    { label: "Connection Type", value: "connectionType" },
  ];

  const solarDetails = [
    { label: "Solar Capacity", value: "solarCapacity" },
    { label: "Solar Brand", value: "solarBrand" },
    { label: "Solar Type", value: "solarType" },
  ];

  const windDetails = [
    { label: "Wind Capacity", value: "windCapacity" },
    { label: "Wind Type", value: "windType" },
    { label: "Wind Brand", value: "windBrand" },
  ];

  const batteryDetails = [
    { label: "Battery Backup Capacity", value: "batteryBackupCapacity" },
    { label: "Battery Capacity", value: "batteryBrand" },
    { label: "Battery Type", value: "batteryType" },
    { label: "No. Of Batteries", value: "numberOfBatteries" },
    { label: "System Voltage", value: "systemVoltage" },
    { label: "Backup Power", value: "backupPower" },
  ];

  const shouldShowSolarSection = activeSection.some(
    (section) =>
      section.toLowerCase() === "solar" || section.toLowerCase() === "hybrid"
  );

  const shouldShowWindSection = activeSection.some(
    (section) =>
      section.toLowerCase() === "wind" || section.toLowerCase() === "hybrid"
  );

  const shouldShowOffGridSection = activeSection.some(
    (section) => section.toLowerCase() === "off"
  );

  const handleImageClick = (imageUrl) => {
    setBigImage(imageUrl);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setBigImage(null);
    document.body.style.overflow = "";
  };
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className="px-10 w-full mb-6">
      <div className="flex ml-4 lg:ml-10 mt-4 lg:mt-10 ">
        <Link to="/all-projects" >
        
        <img src="/arrow.png" className="w-8 h-7 mx-3" />
        </Link>
        <div className="text-xl lg:text-3xl  uppercase font-semibold">
          Project Information
        </div>
      </div>
      <div className="container mx-auto px-10 mt-6 border border-gray-300 py-4 rounded-lg">
        <h1 className="mb-4 text-xl font-semibold">Requirements</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4  gap-x-20 gap-y-7 ">
          {requirements.map((item, index) => {
            return (
              <div key={index}>
                <p className="text-gray-500 font-bold text-md mb-2">
                  {item.label}
                </p>
                <p className="text-md">
                  {lead ? lead[item.value] ?? "NA" : "Loading"}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto px-10 mt-6 border border-gray-300 py-4 rounded-lg">
        <h1 className="mb-4 text-xl font-semibold">Technical Details</h1>
        <h1 className="mb-4 text-xl">Site Conditions</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4  gap-x-20 gap-y-7 mb-4">
          {siteCondition.map((item, index) => {
            return (
              <div key={index}>
                <p className="text-gray-500 font-bold text-md mb-2">
                  {item.label}
                </p>
                <p className="text-md">
                  {lead
                    ? lead[item.value]
                      ? lead[item.value]
                      : "NA"
                    : "Loading"}
                </p>
              </div>
            );
          })}
        </div>
        <Divider />
        <h1 className="mb-4 text-xl mt-4">Meter Details</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4  gap-x-20 gap-y-7 mb-4">
          {meterDetails.map((item, index) => {
            return (
              <div key={index}>
                <p className="text-gray-500 font-bold text-md mb-2">
                  {item.label}
                </p>
                <p className="text-md">
                  {lead
                    ? lead[item.value]
                      ? lead[item.value]
                      : "NA"
                    : "Loading"}
                </p>
              </div>
            );
          })}
        </div>
        <Divider />
        <h1 className="mb-4 text-xl mt-4">Inverter</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4  gap-x-20 gap-y-7 mb-4">
          {inverterDetails.map((item, index) => {
            return (
              <div key={index}>
                <p className="text-gray-500 font-bold text-md mb-2">
                  {item.label}
                </p>
                <p className="text-md">
                  {lead
                    ? lead[item.value]
                      ? lead[item.value]
                      : "NA"
                    : "Loading"}
                </p>
              </div>
            );
          })}
        </div>
        <Divider />
        {shouldShowSolarSection && (
          <>
            <h1 className="mb-4 text-xl mt-4">Solar</h1>
            <div className="grid grid-cols-3 gap-x-20 gap-y-7 mb-4">
              {solarDetails.map((item, index) => {
                return (
                  <div key={index}>
                    <p className="text-gray-500 font-bold text-md mb-2">
                      {item.label}
                    </p>
                    <p className="text-md">
                      {lead
                        ? lead[item.value]
                          ? lead[item.value]
                          : "NA"
                        : "Loading"}
                    </p>
                  </div>
                );
              })}
            </div>
            <Divider />
          </>
        )}
        {shouldShowWindSection && (
          <>
            <h1 className="mb-4 text-xl mt-4">Wind</h1>
            <div className="grid grid-cols-3 gap-x-20 gap-y-7 mb-4">
              {windDetails.map((item, index) => {
                return (
                  <div key={index}>
                    <p className="text-gray-500 font-bold text-md mb-2">
                      {item.label}
                    </p>
                    <p className="text-md">
                      {lead
                        ? lead[item.value]
                          ? lead[item.value]
                          : "NA"
                        : "Loading"}
                    </p>
                  </div>
                );
              })}
            </div>
            <Divider />
          </>
        )}
        {shouldShowOffGridSection && (
          <>
            <h1 className="mb-4 text-xl mt-4">Battery</h1>
            <div className="grid grid-cols-3 gap-x-20 gap-y-7 mb-4">
              {batteryDetails.map((item, index) => {
                return (
                  <div key={index}>
                    <p className="text-gray-500 font-bold text-md mb-2">
                      {item.label}
                    </p>
                    <p className="text-md">
                      {lead
                        ? lead[item.value]
                          ? lead[item.value]
                          : "NA"
                        : "Loading"}
                    </p>
                  </div>
                );
              })}
            </div>
            <Divider />
          </>
        )}
        <div className="flex justify-between mt-2  w-full">
          <div className="mt-5">
            <p className=" text-gray-500 font-bold text-md">Attachments</p>
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-2 gap-4 w-32">
                {images.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`View ${index + 1}`}
                    className="cursor-pointer"
                    onClick={() => handleImageClick(imageUrl)}
                  />
                ))}
              </div>
              {bigImage && (
                <div
                  onClick={handleOverlayClick}
                  className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"
                >
                  <img
                    src={bigImage}
                    alt="Zoomed view"
                    className="max-w-full max-h-full"
                    onClick={handleClose}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
