import React, { useEffect, useState } from "react";
import { getMetaValues } from "../../api";

const SiteCondition = ({ requirementForm, handleRequirementChange }) => {
  return (
    <div className="border-2 border-black m-2 p-4">
      <h2 className="text-lg font-bold flex justify-center">Site Condition</h2>
      <div className="grid grid-cols-3 gap-4 ">
        <div>
          <label> Average electricity bill </label>
          <input
            name="avgBill"
            value={requirementForm.avgBill ?? ""}
            onChange={handleRequirementChange}
            type="text"
            className="border rounded-md p-2"
          />
        </div>
        <div>
          <label> Site Coordinates </label>
          <input
            type="text"
            onChange={handleRequirementChange}
            value={requirementForm.siteCoordinates ?? ""}
            name="siteCoordinates"
            className="border rounded-md p-2"
          />
        </div>
        <div>
          <label> No. of floors </label>
          <input
            type="number"
            className="border rounded-md p-2"
            name="numberOfFloors"
            onChange={(event) => {
              const updatedValue = parseInt(event.target.value, 10);
              handleRequirementChange({
                target: {
                  name: event.target.name,
                  value: isNaN(updatedValue) ? 0 : updatedValue,
                },
              });
            }}
            value={requirementForm.numberOfFloors ?? ""}
            min="0"
            max="10"
            step="1" // Ensures only integer increments
          />
        </div>

        <div>
          <label> Total flats </label>
          <input
            type="number"
            className="border rounded-md p-2"
            name="totalFlats"
            onChange={(event) => {
              const updatedValue = parseInt(event.target.value, 10);
              handleRequirementChange({
                target: {
                  name: event.target.name,
                  value: isNaN(updatedValue) ? 0 : updatedValue,
                },
              });
            }}
            value={requirementForm.totalFlats ?? ""}
            min="0"
            max="20"
            step="1" // Ensures only integer increments
          />
        </div>

        <div>
          <label> Rooftop area </label>
          <input
            onChange={handleRequirementChange}
            value={requirementForm.roofTopArea ?? ""}
            name="roofTopArea"
            type="text"
            className="border rounded-md p-2"
          />
          <span className="ml-1 text-lg">sqft.</span>
        </div>
        <div>
          <label className="flex flex-col justify-center">
            {" "}
            Site description{" "}
          </label>
          <textarea
            onChange={handleRequirementChange}
            value={requirementForm.siteDescription ?? ""}
            name="siteDescription"
            className="border rounded-md p-2 h-auto"
            rows="4"
          ></textarea>
        </div>
      </div>
      {/* Add more fields as needed */}
    </div>
  );
};

const Solar = ({ requirementForm, handleRequirementChange }) => {
  const [brandOptions, setBrandOptions] = useState([]);
  const [typeOptions, setTypeOptions] = useState([]);

  const fetchOptions = async (type, setter) => {
    const accessToken = localStorage.getItem("Authorization");
    try {
      const res = await getMetaValues(type, accessToken);
      setter(res);
    } catch (error) {
      console.log("Failed to load metadata", error);
    }
  };

  useEffect(() => {
    fetchOptions("solar_brand", setBrandOptions);
    fetchOptions("solar_module_type", setTypeOptions);
  }, []);

  return (
    <div className="border-2 border-black m-2 p-4">
      <h2 className="text-lg font-bold flex justify-center">Solar</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label> Solar Capacity </label>
          <input
            type="text"
            value={requirementForm.solarCapacity ?? ""}
            onChange={handleRequirementChange}
            name="solarCapacity"
            className="border rounded-md p-2"
          />
        </div>
        <div>
          <label> Solar Brand </label>
          <select
            name="solarBrand"
            className="border rounded-md p-2"
            value={requirementForm.solarBrand || "NA"}
            onChange={(event) => {
              handleRequirementChange({
                target: {
                  name: event.target.name,
                  value: event.target.value,
                },
              });
            }}
          >
            <option value="NA">None</option>
            {brandOptions.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label> Solar Module Type </label>
          <select
            name="solarType"
            className="border rounded-md p-2"
            value={requirementForm.solarType || "NA"}
            onChange={(event) => {
              handleRequirementChange({
                target: {
                  name: event.target.name,
                  value: event.target.value,
                },
              });
            }}
          >
            <option value="NA">None</option>
            {typeOptions.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Solar;

const Wind = ({ requirementForm, handleRequirementChange }) => {
  const [typeOptions, setTypeOptions] = useState([]);
  const [brandOptions, setBrandOptions] = useState([]);

  const fetchOptions = async (type, setter) => {
    if (type === "") {
      setter([]);
      return;
    }
    const accessToken = localStorage.getItem("Authorization");
    try {
      const res = await getMetaValues(type, accessToken);
      setter(res);
    } catch (error) {
      console.log("Failed to load metadata", error);
    }
  };

  useEffect(() => {
    fetchOptions("wind_type", setTypeOptions);
    fetchOptions("wind_brand", setBrandOptions);
  }, []);

  return (
    <div className="border-2 border-black m-2 p-4">
      <h2 className="text-lg font-bold flex justify-center">Wind</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label> Wind Capacity </label>
          <input
            type="text"
            name="windCapacity"
            value={requirementForm.windCapacity ?? ""}
            onChange={handleRequirementChange}
            className="border rounded-md p-2"
          />
        </div>
        <div>
          <label> Type </label>
          <select
            name="windType"
            value={requirementForm.windType ?? ""}
            onChange={(event) => {
              handleRequirementChange({
                target: {
                  name: event.target.name,
                  value: event.target.value,
                },
              });
            }}
            className="border rounded-md p-2"
          >
            <option value="NA">None</option>
            {typeOptions.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label> Wind Turbine </label>
          <select
            name="windBrand"
            value={requirementForm.windBrand ?? ""}
            onChange={(event) => {
              handleRequirementChange({
                target: {
                  name: event.target.name,
                  value: event.target.value,
                },
              });
            }}
            className="border rounded-md p-2"
          >
            <option value="NA">None</option>
            {brandOptions.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

const MeterDetails = ({ requirementForm, handleRequirementChange }) => {
  const [meterOptions, setMeterOptions] = useState([]);
  const [connectionOptions, setConnectionOptions] = useState([]);

  // Function to fetch metadata
  const fetchOptions = async (type, setter) => {
    if (type === "") {
      setter([]);
      return;
    }
    const accessToken = localStorage.getItem("Authorization");
    try {
      const res = await getMetaValues(type, accessToken);
      setter(res);
    } catch (error) {
      console.log("Failed to load metadata", error);
    }
  };

  // Using useEffect to trigger fetching only once
  useEffect(() => {
    fetchOptions("meter_type", setMeterOptions);
    fetchOptions("meter_connection_type", setConnectionOptions);
  }, []);

  return (
    <div className="border-2 border-black m-2 p-4">
      <h2 className="text-lg font-bold flex justify-center">Meter Details</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label> Meter Type </label>
          <select
            name="meterType"
            value={requirementForm.meterType ?? ""}
            onChange={handleRequirementChange}
            className="border rounded-md p-2"
          >
            <option value="NA">None</option>
            {meterOptions.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label> Number of Meters </label>
          <input
            name="numberOfMeter"
            value={requirementForm.numberOfMeter ?? ""}
            onChange={handleRequirementChange}
            type="text"
            className="border rounded-md p-2"
          />
        </div>
        <div>
          <label> Consumer Number </label>
          <input
            name="consumerNumber"
            value={requirementForm.consumerNumber ?? ""}
            onChange={handleRequirementChange}
            type="text"
            className="border rounded-md p-2"
          />
        </div>
        <div>
          <label> Connection Type </label>
          <select
            name="consumerType"
            value={requirementForm.consumerType ?? ""}
            onChange={handleRequirementChange}
            className="border rounded-md p-2"
          >
            <option value="NA">None</option>
            {connectionOptions.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label> Sanctioned Load </label>
          <input
            name="sanctionedLoad"
            value={requirementForm.sanctionedLoad ?? ""}
            onChange={handleRequirementChange}
            type="text"
            className="border rounded-md p-2"
          />
        </div>
        <div>
          <label> Contract Demand </label>
          <input
            name="contractDemand"
            value={requirementForm.contractDemand ?? ""}
            onChange={handleRequirementChange}
            type="text"
            className="border rounded-md p-2"
          />
        </div>
      </div>
    </div>
  );
};

const Inverter = ({ requirementForm, handleRequirementChange }) => {
  const [connectionTypeOptions, setConnectionTypeOptions] = useState([]);

  // Function to fetch metadata
  const fetchOptions = async (type, setter) => {
    if (type === "") {
      setter([]);
      return;
    }
    const accessToken = localStorage.getItem("Authorization");
    try {
      const res = await getMetaValues(type, accessToken);
      setter(res);
    } catch (error) {
      console.log("Failed to load metadata", error);
    }
  };

  // Using useEffect to trigger fetching only once or based on specific conditions
  useEffect(() => {
    fetchOptions("inverter_connection_type", setConnectionTypeOptions);
  }, []);

  return (
    <div className="border-2 border-black m-2 p-4">
      <h2 className="text-lg font-bold flex justify-center">Inverter</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label> Capacity </label>
          <input
            name="inverterCapacity"
            value={requirementForm.inverterCapacity ?? ""}
            onChange={handleRequirementChange}
            type="text"
            className="border rounded-md p-2"
          />
        </div>
        <div>
          <label> Connection Type </label>
          <select
            name="connectionType"
            value={requirementForm.connectionType ?? ""}
            onChange={(event) => {
              handleRequirementChange({
                target: {
                  name: event.target.name,
                  value: event.target.value,
                },
              });
            }}
            className="border rounded-md p-2"
          >
            <option value="NA">None</option>
            {connectionTypeOptions.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

const Battery = ({ requirementForm, handleRequirementChange }) => {
  const [batteryTypeOptions, setBatteryTypeOptions] = useState([]);

  // Function to fetch metadata
  const fetchOptions = async (type, setter) => {
    if (type === "") {
      setter([]);
      return;
    }
    const accessToken = localStorage.getItem("Authorization");
    try {
      const res = await getMetaValues(type, accessToken);
      setter(res);
    } catch (error) {
      console.log("Failed to load metadata", error);
    }
  };

  // Use useEffect to handle the fetching of options only once
  useEffect(() => {
    fetchOptions("battery_type", setBatteryTypeOptions);
  }, []);

  return (
    <div className="border-2 border-black m-2 p-4">
      <h2 className="text-lg font-bold flex justify-center">Battery</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label> Battery Backup Capacity </label>
          <input
            name="batteryBackupCapacity"
            value={requirementForm.batteryBackupCapacity ?? ""}
            onChange={handleRequirementChange}
            type="text"
            className="border rounded-md p-2"
          />
        </div>
        <div>
          <label> Battery Capacity </label>
          <input
            name="batteryCapacity"
            value={requirementForm.batteryCapacity ?? ""}
            onChange={handleRequirementChange}
            type="text"
            className="border rounded-md p-2"
          />
        </div>
        <div>
          <label> Battery Type </label>
          <select
            name="batteryType"
            value={requirementForm.batteryType ?? ""}
            onChange={handleRequirementChange}
            className="border rounded-md p-2"
          >
            <option value="NA">None</option>
            {batteryTypeOptions.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label> Number of Batteries </label>
          <input
            name="numberOfBatteries"
            value={requirementForm.numberOfBatteries ?? ""}
            onChange={handleRequirementChange}
            type="text"
            className="border rounded-md p-2"
          />
        </div>
        <div>
          <label> System Voltage </label>
          <input
            name="systemVoltage"
            value={requirementForm.systemVoltage ?? ""}
            onChange={handleRequirementChange}
            type="text"
            className="border rounded-md p-2"
          />
        </div>
        <div>
          <label> Back Up Power </label>
          <input
            name="backupPower"
            value={requirementForm.backupPower ?? ""}
            onChange={handleRequirementChange}
            type="text"
            className="border rounded-md p-2"
          />
        </div>
      </div>
    </div>
  );
};

export { SiteCondition, Solar, Wind, MeterDetails, Inverter, Battery };
