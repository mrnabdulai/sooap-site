import { Button, Stack } from "@mui/material";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { services } from "./services";

const StyledSignupForm = styled.form`
  -webkit-box-shadow: 2px 2px 5px 1px rgba(50, 138, 255, 0.5);
  box-shadow: 2px 2px 5px 1px rgba(50, 138, 255, 0.5);
  width: 60%;
  padding: 2rem;
  border-radius: 5px;
  background-color: #fff;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    padding: 1rem;
    width: 90%;
  }
`;
const FormTitle = styled.span`
  font-weight: bold;
  font-size: 22px;
`;

const FormSubtitle = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

const Services = styled(Stack)``;
const Service = styled(Stack)`
  background-color:${props => props.isSelected ?   "rgba(50, 138, 255, 0.5)" : "#f6f6f6"   };
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  flex: 1;
  cursor: pointer;

  &:hover{
    background-color:rgba(50, 138, 255, 0.1);
    
  }
  & > img {
  }
  & snap {
    line-height: 100%;
  }
`;

const LocationInput = styled.div`
  color: #328aff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border: 2px solid #328aff;
  border-radius: 0.5rem;
  & input {
    ${"" /* color: #7b7b7b; */}
    color:#000;
    font-size: 13px;
    font-weight: 500;
    flex: 1;
    border: none;
    outline: none;
  }
`;

const DateInput = styled.input`
  padding: 10px 15px;
  flex: 1;
  border: 2px solid #328aff;
  border-radius: 0.5rem;
  opacity: 1;
  font-weight: 500;
  color: #fff;
  font-size: 13px;

  &::before {
    content: attr(placeholder);
    font-size: 13px;
    color: #808080;
  }

  ::-webkit-calendar-picker-indicator {
    background-image: url(./images/icons/date-icon.svg);
    width: 22px;
    height: 22px;
  }

  @media screen and (max-width: 480px) {
    padding: 7px 10px;
  }
`;

const TimeInput = styled.input`
  flex: 1;

  padding: 10px 15px;
  border: 2px solid #328aff;
  border-radius: 0.5rem;
  opacity: 1;
  color: #fff;

  &::before {
    content: attr(placeholder);
    font-size: 13px;
    color: #808080;
  }

  font-size: 13px;
  font-weight: 500;
  ::-webkit-calendar-picker-indicator {
    background-image: url(./images/icons/clock-icon.svg);
    width: 22px;
    height: 22px;
  }

  @media screen and (max-width: 480px) {
    padding: 7px 10px;
  }
`;

function SignupForm({ width }) {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(1)

  const dateInputRef = useRef();
  const timeInputRef = useRef();
  return (
    <StyledSignupForm>
      <Stack spacing={2}>
        <FormTitle>Quick schedule</FormTitle>
        <FormSubtitle>Choose a service:</FormSubtitle>
        <Services direction='row' spacing={1}>
          {services.map((service, index) => {
            return (
              <Service onClick={()=>{setSelectedServiceIndex(index)}} key={index} spacing={1} alignItems='center' isSelected={ selectedServiceIndex === index? true : false}>
                <img src={service.icon} alt='' />
                <span>{service.tag}</span>
              </Service>
            );
          })}
        </Services>

        <LocationInput>
          <input placeholder='Where will we get your clothes?' type='text' />
          <GpsFixedOutlinedIcon sx={{}} />
        </LocationInput>

        <Stack direction='row' spacing={1}>
          <DateInput
            ref={dateInputRef}
            type='date'
            placeholder='When?'
            onChange={() => {
              dateInputRef.current.placeholder = "";
              dateInputRef.current.style.color = "#808080";
            }}
          />

          <TimeInput
            type='time'
            ref={timeInputRef}
            placeholder='What time?'
            onChange={() => {
              timeInputRef.current.placeholder = "";
              timeInputRef.current.style.color = "#808080";
            }}
          />
        </Stack>
        <Button sx={{ padding: "10px" }} type='submit' variant='contained'>
          Complete Scheduling
        </Button>
      </Stack>
    </StyledSignupForm>
  );
}

export default SignupForm;
