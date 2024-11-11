import React, { useEffect, useRef } from 'react'
import FeaturesBlock from "~/blocks/features";
import data from '../../../utils/data.json'
import { Box } from '@mui/material';
import { useOutletContext } from '@remix-run/react';

interface OutletContext {
  routeRef: {
    homeRef: null;
    servicesRef: null;
    contactRef: null;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setRouteRef:any,
  exact: string;
}

export default function HeroSection() {
  const ref=useRef(null)
  const { setRouteRef } = useOutletContext<OutletContext>();

  useEffect(() => {
    if (ref?.current) {
      setRouteRef({ homeRef: ref });
    }
  }, [ref]);

  return (
    <Box ref={ref}>
       <FeaturesBlock {...data?.heroSection}/>
    </Box>
   
  )
}
