import React, { useState } from "react";
import { CITIES } from "../../constants/cities";

const baseStyle = {
  width: "100%",
  padding: "12px",
  minWidth: "200px",
  fontFamily: "'Montserrat', sans-serif",
  fontStyle: "italic",
  fontWeight: 300,
  fontSize: "18px",
  color: "rgba(0, 0, 0, 0.6)",
  background: "#ffffff",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
  boxSizing: "border-box",
  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  outline: "none",
};

const glowStyle = {
  borderColor: "#00C3A1",
  boxShadow: "0 0 5px rgba(0, 195, 161, 0.5)",
};

const SearchByCity = ({ value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const combinedStyle = {
    ...baseStyle,
    ...(isFocused || isHovered ? glowStyle : {}),
  };

  return (
    <select
      style={combinedStyle}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <option value="">Місто</option>
      {CITIES.map((city) => (
        <option key={city} value={city}>{city}</option>
      ))}
    </select>
  );
};

export default SearchByCity;

