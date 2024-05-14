import { useEffect, useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";


import { useParams } from "react-router-dom";

import { Divider } from "@mui/material";

const LeadForm = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const { leadId } = useParams();
  const [bigImage, setBigImage] = useState(null);
  const [lead, setLead] = useState(null);
  const [activeSection, setActiveSection] = useState([]);
  const [error, setError] = useState(null);

  const handleRemoveItem = async (indexToRemove) => {
    const accessToken = localStorage.getItem("Authorization");
    const response = await deleteFromStorage(
      uploadedFiles[indexToRemove],
      accessToken
    );
    console.log(response);

    const newUploadedFiles = uploadedFiles.filter(
      (_, index) => index !== indexToRemove
    );

    setUploadedFiles(newUploadedFiles);
  };

  const handleSubmit = async () => {
    await updateRequirements();
    localStorage.removeItem("uploadedFiles");
    setUploadedFiles(null);
    try {
      // Simulated saving logic (this could be an API call, for example)
      // If successful:
      toast.success("Changes saved", {
        position: "top-center",
        autoClose: 5000, // Toast will close after 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (e) {
      setError("Failed to save changes");
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      const file = droppedFiles[0];
      handleUpload(file);
    }
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleUpload(file, requirementForm.projectNo);
    }
  };

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
              <div>
              <div className="mt-10 w-full flex justify-center mb-6 ">
                <div className="border-2 border-black m-4 p-4">
                  <div className="text-2xl m-4">
                    Attach electricity bill and other site details
                  </div>

                  <div className="flex flex-col items-center">
                    <div
                      className="border-2 border-dashed rounded-lg bg-gray-100 border-gray-400 p-10 text-center flex flex-col items-center w-4/5"
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                    >
                      <p className="text-lg">
                        {uploading ? "Uploading..." : "Drag and drop file here"}
                      </p>

                      <input
                        id="fileInput"
                        type="file"
                        onChange={handleFileChange}
                        multiple
                        className="hidden"
                      />
                      {!uploading && (
                        <button
                          onClick={() =>
                            document.getElementById("fileInput").click()
                          }
                          className="bg-slate-400 text-white rounded-lg p-1"
                        >
                          Upload
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-3/5 mx-auto">
                {uploadedFiles &&
                  uploadedFiles.length > 0 &&
                  uploadedFiles.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <p>
                        {index + 1}.{" "}
                        {item.length > 50 ? `${item.slice(0, 50)}...` : item}
                      </p>
                      <img
                        src="/close-nobox.png"
                        alt="Remove"
                        className="cursor-pointer w-5"
                        onClick={() => handleRemoveItem(index)}
                      />
                    </div>
                  ))}
              </div>
              <div>
                <button
                  onClick={handleSubmit}
                  className="ml-5 bg-green-500 text-white py-2 px-4 w-fit h-10 rounded-lg mt-5"
                >
                  Save Changes
                </button>
                {error && <p className="text-red-500">{error}</p>}
                {/* Toast Container to display toasts */}
              </div>
            </div>

      </div>
    </div>
  );
};

export default LeadForm;
