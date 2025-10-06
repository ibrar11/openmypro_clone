import React, { useState, useEffect } from "react";
import "./FilterDrawer.css";
import FilterIcon from "../icons/FilterIcon.css/FilterIcon";
import CloseButtonIcon from "../icons/CloseButtonIcon/CloseButtonIcon";
import SendArrowIcon from "../icons/SendArrow/SendArrowIcon";

const SearchFiltersDrawer = ({ open = false, onClose = ()=> {} }) => {
  const [zip, setZip] = useState("");
  const [distance, setDistance] = useState(5);
  const [showMore, setShowMore] = useState(false);

  const practices = [
    "addiction medicine",
    "adult congenital heart disease (achd)",
    "advanced heart failure and transplant cardiology",
    "allergy/immunology",
    "anesthesiology",
    "anesthesiology assistant",
    "cancer",
    "cardiac electrophysiology",
    "cardiac surgery",
    "cardiologist",
  ];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {open && <div className="drawer-bakground" onClick={onClose}></div>}
      {open &&
        <div className={`drawer ${open ? "open" : ""}`}>
          {/* Header */}
          <div className="drawer-header">
            <p className="drawer-title">
              Search Filters
              <FilterIcon/>
            </p>
            <button onClick={onClose} className="drawer-close">
              <CloseButtonIcon/>
            </button>
          </div>

          {/* Zip Code */}
          <div className="zip-wrapper">
            <p className="zip-label">Zip Code</p>
            <input
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              inputMode="numeric"
              maxLength={5}
              pattern="^\d{5}$"
              className="zip-input"
            />
            <button className="zip-btn">
              <SendArrowIcon/>
              <p>Use my location</p>
            </button>
          </div>

          <hr className="section-divider" />

          {/* Distance */}
          <div className="distance-wrapper">
            <label htmlFor="distanceSlider" className="distance-label">
              Distance
            </label>
            <input
              id="distanceSlider"
              type="range"
              min="0"
              max="250"
              step="10"
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="distance-slider"
            />
            <p className="distance-value">within {distance} miles</p>
          </div>

          <hr className="section-divider" />

          {/* Practices */}
          <div style={{display: 'flex', flexDirection: 'column', rowGap:'16px'}}>
            <div className="practice-header">
              <h2>By practice</h2>
              <button>Select All</button>
            </div>
            <div className="practice-list">
              {practices.slice(0, showMore ? practices.length : 5).map((practice) => (
                <div key={practice} className="practice-item">
                  <label htmlFor={practice} className="practice-label">
                    {practice}
                  </label>
                  <input id={practice} name={practice} type="checkbox" className="practice-checkbox" />
                </div>
              ))}
            </div>
            <button className="show-more" onClick={() => setShowMore((prev) => !prev)}>
              {showMore ? "Show less" : "Show more"}
            </button>
          </div>

          {/* Apply */}
          <div className="apply-wrapper">
            <button className="apply-btn">Apply</button>
          </div>
        </div>
      }
    </>
  );
};

export default SearchFiltersDrawer;