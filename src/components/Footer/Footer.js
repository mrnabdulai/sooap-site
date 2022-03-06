import { Stack } from "@mui/material";
import React from "react";

import styled from "styled-components";

const StyledFooter = styled.section`
text-align: center;
`;
const LargeText = styled.span`
font-weight: bold;
font-size: 28px;
`;
const NormalText = styled.p`
color: #c4c4c4;
max-width: 300px;
font-size:14px;
`;
function Footer() {
  return (
    <StyledFooter>
      <Stack alignItems={"center"} spacing={2}>
        <LargeText>Services</LargeText>
        <NormalText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
          perferendis inventore odio dignissimos adipisci saepe architecto
          distinctio dicta quo? Ipsum.
        </NormalText>
        <NormalText>
            Lorem ipsum dolor sit amet.
        </NormalText>
      </Stack>
    </StyledFooter>
  );
}

export default Footer;
