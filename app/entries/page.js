'use client';
import React, { useState } from "react";
import Image from "next/image";
import Form from '../components/Form';
import Table from '../components/Table';
import Card from '../components/Card';


export default function Home() {
  const [locationInput, setLocationInput] = useState("");
  const [minInput, setminInput] = useState("");
  const [maxInput, setMaxInput] = useState("");
  const [avgInput, setAvgInput] = useState("");
  const [data, setData] = useState("");
  const [showTable, setShowTable] = useState(false)
  const [showCard, setShowCard] = useState(true)

  const locationChange = (e) => {
    setLocationInput(e.target.value);
  };

  const minChange = (e) => {
    setminInput(e.target.value);
  };

  const maxChange = (e) => {
    setMaxInput(e.target.value);
  };

  const avgChange = (e) => {
    setAvgInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      Location: locationInput,
      MinInput: minInput,
      MaxInput: maxInput,
      AvgInput: avgInput,
    };
    console.log(e)
    setData([...data, userData]);
  };

  const handleShow = () => {
    if (showTable === false){
      setShowTable(true)
      setShowCard(false)
    } else {
      setShowTable(false)
      setShowCard(true)
    }
  }

  return (
    <>
      <Form 
      handleSubmit={handleSubmit}
      locationChange={locationChange}
      minChange={minChange}
      maxChange={maxChange}
      avgChange={avgChange}
      handleShow={handleShow}
      
      />
      {showTable &&
        <Table 
        showTable={showTable}
        />
      }
      {showCard && <Card 
      data={data}
      />}


      
    </>
  );
}
